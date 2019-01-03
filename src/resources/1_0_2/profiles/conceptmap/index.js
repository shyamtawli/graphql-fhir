const {
	ConceptMapQuery,
	ConceptMapListQuery,
	ConceptMapInstanceQuery,
} = require('./query');

const {
	ConceptMapCreateMutation,
	ConceptMapUpdateMutation,
	ConceptMapDeleteMutation,
} = require('./mutation');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	 * Define Query Schema's here
	 * Each profile will need to define the two queries it supports
	 * and these keys must be unique across the entire application, like routes
	 */
	query: {
		ConceptMap: ConceptMapQuery,
		ConceptMapList: ConceptMapListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ConceptMapCreate: ConceptMapCreateMutation,
		ConceptMapUpdate: ConceptMapUpdateMutation,
		ConceptMapDelete: ConceptMapDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'ConceptMap',
		path: '/1_0_2/ConceptMap/:id',
		query: ConceptMapInstanceQuery,
	},
};
