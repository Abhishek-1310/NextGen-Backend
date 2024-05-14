"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const consumptionDetailsRepository_1 = require("../repository/consumptionDetailsRepository");
const consumptionDetailsService_1 = require("../service/consumptionDetailsService");
const consumptionTableName = 'ConsumptionDetails';
const consumptionDetailsRepository = new consumptionDetailsRepository_1.ConsumptionDetailsRepository(consumptionTableName);
const consumptionDetailsService = new consumptionDetailsService_1.ConsumptionDetailsService(consumptionDetailsRepository);
const handler = async (event) => {
    try {
        const accountNumber = event.pathParameters?.accountNumber;
        const getConsumption = await consumptionDetailsService.getconsumptionDetailsById(accountNumber);
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            },
            body: getConsumption,
            message: 'Consumption Data get succesfully',
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
//# sourceMappingURL=consumptionDetailsController.js.map