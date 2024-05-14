
import { ConsumptionDetailsRepository } from "../repository/consumptionDetailsRepository";
import { ConsumptionDetails } from "../interface/consumptionDetails";
export class ConsumptionDetailsService {
    private consumptionDetailsRepository: ConsumptionDetailsRepository;

    constructor(consumptionDetailsRepository: ConsumptionDetailsRepository) {
        this.consumptionDetailsRepository = consumptionDetailsRepository;
    }

    async getconsumptionDetailsById(accountNumber: number): Promise<ConsumptionDetails> {
        return await this.consumptionDetailsRepository.getConsumptionDetailsById(accountNumber);
    }

}