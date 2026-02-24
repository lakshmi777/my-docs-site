## OpenAPI Specification (Sample)

The following OpenAPI definition illustrates the structure of the Banking API.

```yaml
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
```
