export enum CustomerStatus {
  Standard = 'Standard',
  Premium = 'Premium',
  Gold = 'Gold',
  Free = 'Free',
}

class CustomerType {
  customerStatus: CustomerStatus;
  discount: number;
}

export class Customer {
  id: number;
  login: string;
  customerType: CustomerType;
}

const customerTypes: CustomerType[] = [
  { customerStatus: CustomerStatus.Standard, discount: 2 },
  { customerStatus: CustomerStatus.Gold, discount: 5 },
  { customerStatus: CustomerStatus.Premium, discount: 15 },
  { customerStatus: CustomerStatus.Free, discount: 100 },
];

const customers: Customer[] = [
  { id: 1, login: 'customer1@foo.com', customerType: { customerStatus: CustomerStatus.Standard, discount: 2 } },
  { id: 2, login: 'customer2@foo.com', customerType: { customerStatus: CustomerStatus.Gold, discount: 5 } },
  { id: 3, login: 'customer3@foo.com', customerType: { customerStatus: CustomerStatus.Premium, discount: 15 } },
  { id: 4, login: 'customer4@foo.com', customerType: { customerStatus: CustomerStatus.Free, discount: 100 } },
];

export class CustomerService {
  customerTypes(): CustomerType[] {
    return customerTypes;
  }
  getCustomer(id: number): Customer {
    return customers.find((customer) => customer.id == id);
  }
}
