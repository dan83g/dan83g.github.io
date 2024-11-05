import { CustomerStatus, CustomerService } from './Customer';

export enum ProductType {
  Car = 'Car',
  Toy = 'Toy',
  Food = 'Food',
}

class ProductDiscount {
  customerStatus: CustomerStatus;
  percent: number;
}

export class ProductCategory {
  name: ProductType;
  discount: ProductDiscount[];
}

const productCategories: ProductCategory[] = [
  {
    name: ProductType.Car,
    discount: [
      { customerStatus: CustomerStatus.Gold, percent: 2 },
      { customerStatus: CustomerStatus.Premium, percent: 2 },
      { customerStatus: CustomerStatus.Free, percent: 100 },
    ],
  },
  {
    name: ProductType.Food,
    discount: [
      { customerStatus: CustomerStatus.Gold, percent: 3 },
      { customerStatus: CustomerStatus.Premium, percent: 5 },
    ],
  },
  {
    name: ProductType.Toy,
    discount: [
      { customerStatus: CustomerStatus.Gold, percent: 10 },
      { customerStatus: CustomerStatus.Premium, percent: 10 },
      { customerStatus: CustomerStatus.Standard, percent: 10 },
    ],
  },
];

export class ProductService {
  protected customerService: CustomerService;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
  }
  getCategory(productCategory: ProductType): ProductCategory {
    return productCategories.find((cat) => cat.name == productCategory);
  }
  getTotalDiscount(userId: number, productType: ProductType): number {
    const category = this.getCategory(productType);
    const customer = this.customerService.getCustomer(userId);

    if (customer && category) {
      const customerDiscount: number = customer.customerType.discount;
      const productDiscount: number = category.discount.find(
        (category) => category.customerStatus == customer.customerType.customerStatus
      ).percent;
      return Math.min(productDiscount + customerDiscount, 100);
    }
    return 0;
  }
}
