import { RewardsRepository } from "../repository/rewardsRepository"
import { RewardsService } from "../service/rewardsService"

const rewardsTableName = 'Rewards'
const rewardsRepository = new RewardsRepository(rewardsTableName)
const rewardsService = new RewardsService(rewardsRepository);

export const handler = async (event) => {

    try {
        const accountNumber = event.pathParameters?.accountNumber;
        const getRewards = await rewardsService.getrewardsById(accountNumber);
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            },
            body: getRewards,
            message: 'Rewards Data get succesfully',
        };
    } catch (error) {

        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            },
            body: JSON.stringify({ error: 'Internal server error!' }),
            message: 'Failed to get Data',
        }
    }

}