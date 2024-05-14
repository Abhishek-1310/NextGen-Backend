"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const rewardsRepository_1 = require("../repository/rewardsRepository");
const rewardsService_1 = require("../service/rewardsService");
const rewardsTableName = 'Rewards';
const rewardsRepository = new rewardsRepository_1.RewardsRepository(rewardsTableName);
const rewardsService = new rewardsService_1.RewardsService(rewardsRepository);
const handler = async (event) => {
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
    }
    catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            },
            body: JSON.stringify({ error: 'Internal server error!' }),
            message: 'Failed to get Data',
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=rewardsController.js.map