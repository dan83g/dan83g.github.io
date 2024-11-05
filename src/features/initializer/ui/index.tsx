import { FC, useInsertionEffect } from 'react';
import { getCategories, useCategoriesStore } from '@entities/category';
import { useTokentStore } from 'src/entities/token';

export const Initializer: FC = () => {
  const { token } = useTokentStore();
  const { setCategories } = useCategoriesStore();

  const getAllCategories = async () => {
    const response = await getCategories(token);
    if (response.data.length > 0) setCategories(response.data);
  };

  useInsertionEffect(() => {
    getAllCategories();
  }, [token]);

  return null;
};
