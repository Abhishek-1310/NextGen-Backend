import { Rewards } from "../interface/rewards";
import { RewardsRepository } from "../repository/rewardsRepository"

export class RewardsService {
    private rewardsRepository: RewardsRepository;

    constructor(rewardssRepository: RewardsRepository) {
        this.rewardsRepository = rewardssRepository;
    }

    async getrewardsById(accountNumber: number): Promise<Rewards> {
        return await this.rewardsRepository.getRewardsById(accountNumber);
    }

}