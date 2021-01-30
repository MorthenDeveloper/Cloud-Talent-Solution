'use strict';

// [START job_search_list_companies]

const talent = require('@google-cloud/talent').v4;
//const { createBucket } = require('./autenticacion');

//createBucket().catch(console.error);

//client = talent.CompanyServiceClient()
//parent = client.tenant_path('[PROJECT]', '[TENANT]')

/**
 * List Companies
 * @param projectId {string} Your Google Cloud Project ID
 * @param tenantId {string} Identifier of the Tenant
 */
function sampleListCompanies(projectId, tenantId) {
    const client = new talent.CompanyServiceClient();
    // Iterate over all elements.
    // const projectId = 'Your Google Cloud Project ID';
    // const tenantId = 'Your Tenant ID (using tenancy is optional)';
    const formattedParent = client.tenantPath(projectId, tenantId);
    //const formattedParent = client.tenantPath(projectId, '[TENANT]');

    client
        .listCompanies()
        .then(responses => {
            const resources = responses[0];
            for (const resource of resources) {
                console.log(`Company Name: ${resource.name}`);
                console.log(`Display Name: ${resource.displayName}`);
                console.log(`External ID: ${resource.externalId}`);
            }
        })
        .catch(err => {
            console.error(err);
        });
}

// [END job_search_list_companies]
// tslint:disable-next-line:no-any

const argv = require('yargs')
    .option('project_id', {
        default: 'arctic-crawler-246801',
        string: true,
    })
    .option('tenant_id', {
        default: 'defect',
        string: true,
    }).argv;


sampleListCompanies('arctic-crawler-246801', argv.tenant_id);