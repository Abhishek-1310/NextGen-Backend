
import { ConsumptionDetailsRepository } from "../repository/consumptionDetailsRepository";
import { ConsumptionDetailsService } from "../service/consumptionDetailsService";


const consumptionTableName = 'ConsumptionDetails'
const consumptionDetailsRepository = new ConsumptionDetailsRepository(consumptionTableName)
const consumptionDetailsService = new ConsumptionDetailsService(consumptionDetailsRepository);

export const handler = async (event) => {

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