"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const customerDetailsRepository_1 = require("../repository/customerDetailsRepository");
const customerDetailsService_1 = require("../service/customerDetailsService");
const customerTableName = 'CustomerDetails';
const customerDetailsRepository = new customerDetailsRepository_1.CustomerDetailsRepository(customerTableName);
const customerDetailsService = new customerDetailsService_1.CustomerDetailsService(customerDetailsRepository);
const handler = async (event) => {
    try {
        const accountNumber = event.pathParameters?.accountNumber;
        const getCustomer = await customerDetailsService.getcustomerDetailsById(accountNumber);
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            },
            body: getCustomer,
            message: 'Employee Data get succesfully',
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
//# sourceMappingURL=customerDetailsController.js.map