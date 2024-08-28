import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import type { APIGatewayProxyEventV2 } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEventV2) {
    const body = JSON.parse(event.body);
    
    return {
        statusCode: 201,
        body: JSON.stringify({
            payloadRecebido: body,
        }),
    };
}