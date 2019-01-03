const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SearchParameter.contact Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SearchParameterContact',
	description:
		'Contacts to assist a user in finding and communicating with the publisher.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			name: {
				type: GraphQLString,
				description:
					'The name of an individual to contact regarding the search parameter.',
			},
			_name: {
				type: require('./element.schema'),
				description:
					'The name of an individual to contact regarding the search parameter.',
			},
			telecom: {
				type: new GraphQLList(require('./contactpoint.schema')),
				description:
					'Contact details for individual (if a name was provided) or the publisher.',
			},
		}),
});
