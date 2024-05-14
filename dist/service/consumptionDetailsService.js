"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionDetailsService = void 0;
class ConsumptionDetailsService {
    consumptionDetailsRepository;
    constructor(consumptionDetailsRepository) {
        this.consumptionDetailsRepository = consumptionDetailsRepository;
    }
    async getconsumptionDetailsById(accountNumber) {
        return await this.consumptionDetailsRepository.getConsumptionDetailsById(accountNumber);
    }
}
exports.ConsumptionDetailsService = ConsumptionDetailsService;
//# sourceMappingURL=consumptionDetailsService.js.map