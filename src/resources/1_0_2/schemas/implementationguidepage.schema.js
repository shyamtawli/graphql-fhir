const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ImplementationGuide.page Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuidePage',
	description:
		'A page / section in the implementation guide. The root page is the implementation guide home page.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			source: {
				type: new GraphQLNonNull(UriScalar),
				description: 'The source address for the page.',
			},
			_source: {
				type: require('./element.schema'),
				description: 'The source address for the page.',
			},
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'A short name used to represent this page in navigational structures such as table of contents, bread crumbs, etc.',
			},
			_name: {
				type: require('./element.schema'),
				description:
					'A short name used to represent this page in navigational structures such as table of contents, bread crumbs, etc.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/guide-page-kind
			kind: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The kind of page that this is. Some pages are autogenerated (list, example), and other kinds are of interest so that tools can navigate the user to the page of interest.',
			},
			_kind: {
				type: require('./element.schema'),
				description:
					'The kind of page that this is. Some pages are autogenerated (list, example), and other kinds are of interest so that tools can navigate the user to the page of interest.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
			type: {
				type: new GraphQLList(CodeScalar),
				description:
					'For constructed pages, what kind of resources to include in the list.',
			},
			_type: {
				type: require('./element.schema'),
				description:
					'For constructed pages, what kind of resources to include in the list.',
			},
			package: {
				type: new GraphQLList(GraphQLString),
				description:
					'For constructed pages, a list of packages to include in the page (or else empty for everything).',
			},
			_package: {
				type: require('./element.schema'),
				description:
					'For constructed pages, a list of packages to include in the page (or else empty for everything).',
			},
			format: {
				type: CodeScalar,
				description: 'The format of the page.',
			},
			_format: {
				type: require('./element.schema'),
				description: 'The format of the page.',
			},
		}),
});
