import type { IntrospectionQuery } from 'graphql';

import customScalarsExchange from '@atmina/urql-custom-scalars-exchange';
import { GraphQLBigInt, GraphQLDate, GraphQLDateTime, GraphQLDateTimeISO, GraphQLJSON } from 'graphql-scalars';
import { isBoolean, isNumber, isString } from 'lodash-es';

export function createScalarsExchange(introspectionResult: IntrospectionQuery) {
  return customScalarsExchange({
    schema: introspectionResult,
    scalars: {
      Date: (input: unknown) => {
        try {
          return GraphQLDateTimeISO.parseValue(input);
        }
        catch {
          try {
            return GraphQLDateTime.parseValue(input);
          }
          catch {
            return GraphQLDate.parseValue(input);
          }
        }
      },
      GraphQLBigInt: GraphQLBigInt.parseValue,
      GraphQLStringOrFloat: (input: unknown) => {
        if (typeof input === 'string' || typeof input === 'number') {
          return input;
        }
        throw new TypeError('Parse GraphQLStringOrFloat expected to parse a string or a number');
      },
      JSON: GraphQLJSON.parseValue,
      Void: () => null,
      Hash: () => (input: unknown) => {
        if (isString(input) || isNumber(input) || isBoolean(input)) {
          return input.toString();
        }
        throw new TypeError('Parse permissions_me_type expected to parse a string or a number or a boolean');
      },
      permissions_me_type: (input: unknown) => {
        if (isString(input) || isNumber(input) || isBoolean(input)) {
          return input.toString();
        }
        throw new TypeError('Parse permissions_me_type expected to parse a string or a number or a boolean');
      },
    },
  });
}
