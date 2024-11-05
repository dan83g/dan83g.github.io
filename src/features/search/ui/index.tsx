import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Dropdown, IOption } from 'src/shared/ui/drop-down';
import { MdOutlineFilterAlt, MdOutlineSearch } from 'react-icons/md';
import { getProducts, useProductsFilterStore, useProductsStore } from 'src/entities/product';
import { useCategoriesStore } from 'src/entities/category';
import s from './styles.module.sass';
import { useTokentStore } from 'src/entities/token';

export const Search = () => {
  const { t } = useTranslation();
  const { token } = useTokentStore();
  const filterStore = useProductsFilterStore();
  const { categories } = useCategoriesStore();
  const { setIsLoading, setProducts } = useProductsStore();

  const categoriesOptions = useMemo(
    () =>
      categories.map((c) => {
        return { key: c.id, value: c.name };
      }),
    [categories]
  );

  const currentOption = useMemo(
    () => (filterStore.categoryIds ? categoriesOptions.find((c) => c.key === filterStore.categoryIds[0]) : null),
    [categoriesOptions, filterStore.categoryIds]
  );

  const searchProducts = async () => {
    setIsLoading(true);
    filterStore.setDefaultFilter();
    const response = await getProducts(token, filterStore.getFilter());
    setProducts(response.data, response.pagination);
    setIsLoading(false);
  };

  const onCategoryChange = (option: IOption) => {
    filterStore.setCategoryIds([option.key.toString()]);
    searchProducts();
  };
  const onNameChange = (val: string) => filterStore.setName(val);
  const onSearchClick = () => searchProducts();

  return (
    <div className={s.root}>
      <div className={s.search__bar}>
        <Input
          className={s.input}
          placeholder={t('components.Search.Input.placeholder')}
          value={filterStore.name ?? ''}
          onChange={onNameChange}
          onEnter={() => searchProducts()}
        />
        <MdOutlineSearch className={s.search__icon} />
        <Button className={s.search__button} onClick={onSearchClick}>
          {t('components.Search.Button.caption')}
        </Button>
      </div>
      <div className={s.filter}>
        <Dropdown options={categoriesOptions} value={currentOption} onChange={onCategoryChange} />
        {!filterStore.categoryIds ? (
          <div className={s.filter__text_wrapper}>
            <MdOutlineFilterAlt className={s.filter__icon} />
            <p className={s.filter__text}>{t('components.Search.CategoryFilter.caption')}</p>
          </div>
        ) : (
          <div className={s.filter__text_wrapper}>
            <p className={s.filter__text}>{currentOption.value}</p>
          </div>
        )}
      </div>
    </div>
  );
};
