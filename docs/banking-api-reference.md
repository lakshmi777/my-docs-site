## OpenAPI Specification (Sample)

The following OpenAPI definition illustrates the structure of the Banking API.

```
openapi: 3.0.0
info:
  title: Banking API
  description: >
    Sample Banking API demonstrating account management,
    transaction retrieval, and deposit creation. This specification
    is provided for documentation portfolio purposes.
  version: 1.0.0

servers:
  - url: https://api.demo-bank.com/v1
    description: Demo banking server

tags:
  - name: Accounts
    description: Operations related to customer bank accounts
  - name: Transactions
    description: Operations related to account transactions
  - name: Deposits
    description: Operations for creating deposit entries

paths:

  /accounts:
    post:
      tags:
        - Accounts
      summary: Create a new bank account
      description: Creates a savings or current account for a customer.
      requestBody:
        description: Customer details required to create an account
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - customerName
                - accountType
              properties:
                customerName:
                  type: string
                  description: Full name of the customer
                  example: Lakshmi N
                accountType:
                  type: string
                  description: Type of account to create
                  example: savings
      responses:
        '201':
          description: Account created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  accountId:
                    type: string
                    example: ACC102938
                  status:
                    type: string
                    example: active

  /accounts/{accountId}:
    get:
      tags:
        - Accounts
      summary: Retrieve account details
      description: Returns account information including customer name and status.
      parameters:
        - name: accountId
          in: path
          required: true
          description: Unique identifier of the account
          schema:
            type: string
            example: ACC102938
      responses:
        '200':
          description: Account details retrieved
          content:
            application/json:
              schema:
                type: object
                properties:
                  accountId:
                    type: string
                    example: ACC102938
                  customerName:
                    type: string
                    example: Lakshmi N
                  accountType:
                    type: string
                    example: savings
                  status:
                    type: string
                    example: active

  /accounts/{accountId}/transactions:
    get:
      tags:
        - Transactions
      summary: List account transactions
      description: Returns all transactions associated with the specified account.
      parameters:
        - name: accountId
          in: path
          required: true
          description: Unique identifier of the account
          schema:
            type: string
            example: ACC102938
      responses:
        '200':
          description: Transaction list returned
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    transactionId:
                      type: string
                      example: TXN45678
                    amount:
                      type: number
                      example: 2500
                    type:
                      type: string
                      example: withdrawal
                    date:
                      type: string
                      example: 2025-01-12

  /deposits:
    post:
      tags:
        - Deposits
      summary: Create a deposit transaction
      description: Creates a deposit entry for a specified account.
      requestBody:
        description: Deposit details
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - accountId
                - amount
              properties:
                accountId:
                  type: string
                  description: Account receiving the deposit
                  example: ACC102938
                amount:
                  type: number
                  description: Amount to deposit
                  example: 5000
      responses:
        '201':
          description: Deposit created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  depositId:
                    type: string
                    example: DEP778899
                  status:
                    type: string
                    example: completed
```
