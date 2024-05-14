"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsService = void 0;
class RewardsService {
    rewardsRepository;
    constructor(rewardssRepository) {
        this.rewardsRepository = rewardssRepository;
    }
    async getrewardsById(accountNumber) {
        return await this.rewardsRepository.getRewardsById(accountNumber);
    }
}
exports.RewardsService = RewardsService;
//# sourceMappingURL=rewardsService.js.map