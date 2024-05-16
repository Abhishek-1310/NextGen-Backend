NextGen-Backend
This README outlines the details of collaborating on Customer Details Api

Customer Details API
Overview
This project provides a RESTful API to fetch customer details from a DynamoDB database using AWS Lambda and Node.js. The API is designed to be scalable, secure, and efficient, making it ideal for large-scale customer data management.

Prerequisites
you will need the following things properly installed on your computer.
Technology Need to Write the Code
git
Node.js(with npm)
Typscript
Google Chrome
Technology Stack Need to Run The Code
Backend: AWS Lambda (Node.js)
Database: DynamoDB
Apis:- Api Gateway

Installation
git clone https://github.com/Abhishek-1310/NextGen-Backend.git this repository
cd NextGen-Backend
npm install 


API Endpoints
The API provides the following endpoints to fetch customer details:
->GET /customers/:id: Retrieves a single customer by ID

Request/Response Format
Request: JSON
Response: JSON

Deploying
used aws lambda to run the code and used api gateway to create a endpoint
endpoint:- <>

Further Reading / Useful Links
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/:- aws sdk
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html:- dynamodb syntax used in lambda
https://docs.aws.amazon.com/lambda/:- about lambda
https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors-console.html:- cors problem
