import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { CustomerDetails } from "../interface/iCustomerDetails";

// const tableName:string = 'employeDB-1310';

export class CustomerDetailsRepository {
    private client: DynamoDBClient;
    private docClint: DynamoDBDocumentClient;
    private tableName: string;

    constructor(tableName: string) {
        this.client = new DynamoDBClient({ region: "us-east-1" });
        this.docClint = DynamoDBDocumentClient.from(this.client);
        this.tableName = tableName;
    }

    async getCustomerDetailsById(accountNumber: number): Promise<CustomerDetails> {
        const command = new GetCommand({
            TableName: this.tableName,
            Key: {
                accountNumber: { N: accountNumber }
            }
        });

        const response: any = await this.docClint.send(command);
        console.log(response);
        return response;
    }


}