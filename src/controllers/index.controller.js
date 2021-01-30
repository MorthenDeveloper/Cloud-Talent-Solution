const talent = require('@google-cloud/talent').v4beta1;
/*
 Create Job
 
  @param projectId {string} Your Google Cloud Project ID
  @param tenantId {string} Identifier of the Tenant
 */

function sampleCreateJob( //ejemplo crear trabajo
    projectId,
    tenantId,
    companyName,
    requisitionId,
    title,
    description,
    jobApplicationUrl,
    addressOne,
    addressTwo,
    languageCode
) {
    const client = new talent.JobServiceClient();
    // const projectId = 'Your Google Cloud Project ID' -> Su ID de proyecto de Google Cloud;
    // const tenantId = 'Your Tenant ID (using tenancy is optional)' -> Su identificación de inquilino (el uso de arrendamiento es opcional);
    // const companyName = 'Company name, e.g. projects/your-project/companies/company-id' -> Nombre de la empresa, p. Ej. proyectos / su-proyecto / empresas / id-empresa;
    // const requisitionId = 'Job requisition ID, aka Posting ID. Unique per job.' -> ID de solicitud de trabajo, también conocido como ID de publicación. Único por trabajo.;
    // const title = 'Software Engineer' -> Ingeniero de software;
    // const description = 'This is a description of this <i>wonderful</i> job!' -> Esta es una descripción de este <i> maravilloso </i> trabajo.;
    // const jobApplicationUrl = 'https://www.example.org/job-posting/123';
    // const addressOne = '1600 Amphitheatre Parkway, Mountain View, CA 94043';
    // const addressTwo = '111 8th Avenue, New York, NY 10011';
    // const languageCode = 'en-US';
    const formattedParent = client.tenantPath(projectId, tenantId);
    const uris = [jobApplicationUrl];
    const applicationInfo = {
        uris: uris,
    };
    const addresses = [addressOne, addressTwo];
    const job = {
        company: companyName,
        requisitionId: requisitionId,
        title: title,
        description: description,
        applicationInfo: applicationInfo,
        addresses: addresses,
        languageCode: languageCode,
    };
    const request = {
        parent: formattedParent,
        job: job,
    };
    client
        .createJob(request)
        .then(responses => {
            const response = responses[0];
            console.log(`Created job: ${response.name}`);
        })
        .catch(err => {
            console.error(err);
        });
}


const getUsers = (req, res) => {
    res.send('users');
}

module.exports = {
    getUsers,
    sampleCreateJob
}