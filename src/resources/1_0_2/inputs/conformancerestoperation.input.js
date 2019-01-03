const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Conformance.rest.operation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceRestOperation_Input',
	description:
		'Definition of an operation or a named query and with its parameters and their meaning and type.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'The name of a query, which is used in the _query parameter when the query is called.',
			},
			_name: {
				type: require('./element.input'),
				description:
					'The name of a query, which is used in the _query parameter when the query is called.',
			},
			definition: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'Where the formal definition can be found.',
			},
		}),
});
