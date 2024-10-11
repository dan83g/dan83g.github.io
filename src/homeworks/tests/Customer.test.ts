import { CustomerService, Customer, CustomerStatus } from './Customer';
import { ProductService, ProductCategory, ProductType } from './Product';

const category: ProductCategory = {
  name: ProductType.Car,
  discount: [
    { customerStatus: CustomerStatus.Standard, percent: 2 },
    { customerStatus: CustomerStatus.Gold, percent: 5 },
    { customerStatus: CustomerStatus.Premium, percent: 10 },
    { customerStatus: CustomerStatus.Free, percent: 100 },
  ],
};
const customer: Customer = {
  id: 3,
  login: 'super customer',
  customerType: {
    customerStatus: CustomerStatus.Gold,
    discount: 15,
  },
};

beforeAll(() => {
  jest.spyOn(ProductService.prototype, 'getCategory').mockImplementation(() => {
    return category;
  });
  jest.spyOn(CustomerService.prototype, 'getCustomer').mockImplementation(() => {
    return customer;
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('customerService', () => {
  it('must return right customer types', () => {
    const customerService = new CustomerService();
    const expected = [CustomerStatus.Standard, CustomerStatus.Premium, CustomerStatus.Gold, CustomerStatus.Free];

    const userTypes = customerService.customerTypes().map((x) => {
      return x.customerStatus;
    });
    expect(userTypes).toEqual(expect.arrayContaining(expected));
  });

  it('must return types with discount', () => {
    const customerService = new CustomerService();
    const customerTypes = customerService.customerTypes();
    expect(customerTypes[0]).toHaveProperty('discount');
  });

  it('must return total discount', () => {
    const customerService = new CustomerService();
    const productService = new ProductService(customerService);
    const totalDiscount = productService.getTotalDiscount(3, ProductType.Car);
    expect(totalDiscount).toBe(20);
  });
});
