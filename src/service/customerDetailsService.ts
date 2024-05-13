import { CustomerDetails } from "../interface/iCustomerDetails";
import { CustomerDetailsRepository } from "../repository/customerDetailsRepository"

export class CustomerDetailsService {
    private customerDetailsRepository: CustomerDetailsRepository;

    constructor(customerDetailsRepository: CustomerDetailsRepository) {
        this.customerDetailsRepository = customerDetailsRepository;
    }

    async getcustomerDetailsById(accountNumber: number): Promise<CustomerDetails> {
        return await this.customerDetailsRepository.getCustomerDetailsById(accountNumber);
    }

}