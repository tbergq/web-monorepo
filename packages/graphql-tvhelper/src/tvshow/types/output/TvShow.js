// @flow

import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';
import type { TvShow } from '@tbergq/graphql-services';
import GlobalID from '@kiwicom/graphql-global-id';

import TvHelperImage from '../../../common/types/output/TvHelperImage';
import Summary from './Summary';
import Cast from '../../../common/types/output/Cast';

export default new GraphQLObjectType({
  name: 'TvShow',
  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    premiered: {
      type: GraphQLDate,
    },
    image: {
      type: TvHelperImage,
    },
    rating: {
      type: GraphQLFloat,
      resolve: ({ rating }: TvShow) => rating.average,
    },
    summary: Summary,
    cast: {
      type: GraphQLList(Cast),
      resolve: ({ _embedded }: TvShow) => _embedded?.cast,
    },
  },
});
