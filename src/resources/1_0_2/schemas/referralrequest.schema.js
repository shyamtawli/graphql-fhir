const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ReferralRequestResourceType = new GraphQLEnumType({
	name: 'ReferralRequestResourceType',
	values: {
		ReferralRequest: { value: 'ReferralRequest' },
	},
});

/**
 * @name exports
 * @summary ReferralRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ReferralRequest',
	description: 'Base StructureDefinition for ReferralRequest Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(ReferralRequestResourceType),
				description: 'Type of this resource.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/referralstatus
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The workflow status of the referral or transfer of care request.',
			},
			_status: {
				type: require('./element.schema'),
				description:
					'The workflow status of the referral or transfer of care request.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.schema')),
				description:
					'Business identifier that uniquely identifies the referral/care transfer request instance.',
			},
			date: {
				type: DateTimeScalar,
				description:
					'Date/DateTime of creation for draft requests and date of activation for active requests.',
			},
			_date: {
				type: require('./element.schema'),
				description:
					'Date/DateTime of creation for draft requests and date of activation for active requests.',
			},
			type: {
				type: require('./codeableconcept.schema'),
				description:
					'An indication of the type of referral (or where applicable the type of transfer of care) request.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/practitioner-specialty
			specialty: {
				type: require('./codeableconcept.schema'),
				description:
					'Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-priority
			priority: {
				type: require('./codeableconcept.schema'),
				description:
					'An indication of the urgency of referral (or where applicable the type of transfer of care) request.',
			},
			patient: {
				type: require('./reference.schema'),
				description:
					'The patient who is the subject of a referral or transfer of care request.',
			},
			requester: {
				type: require('./reference.schema'),
				description:
					'The healthcare provider or provider organization who/which initiated the referral/transfer of care request. Can also be  Patient (a self referral).',
			},
			recipient: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.',
			},
			encounter: {
				type: require('./reference.schema'),
				description:
					'The encounter at which the request for referral or transfer of care is initiated.',
			},
			dateSent: {
				type: DateTimeScalar,
				description:
					'Date/DateTime the request for referral or transfer of care is sent by the author.',
			},
			_dateSent: {
				type: require('./element.schema'),
				description:
					'Date/DateTime the request for referral or transfer of care is sent by the author.',
			},
			reason: {
				type: require('./codeableconcept.schema'),
				description:
					'Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.',
			},
			description: {
				type: GraphQLString,
				description:
					'The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
			serviceRequested: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.',
			},
			supportingInformation: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.',
			},
			fulfillmentTime: {
				type: require('./period.schema'),
				description:
					'The period of time within which the services identified in the referral/transfer of care is specified or required to occur.',
			},
		}),
});
