import { CustomerDetailsRepository } from "../repository/customerDetailsRepository"
import { CustomerDetailsService } from "../service/customerDetailsService"



const customerTableName = 'CustomerDetails'
const customerDetailsRepository = new CustomerDetailsRepository(customerTableName)
const customerDetailsService = new CustomerDetailsService(customerDetailsRepository);

export const handler = async (event) => {

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