'use strict';
const fs = require('fs');
const utils = require('./util');

/**
 *
 * @param {{folderToScan: string}} options
 * @return {?string}
 */
module.exports.convert = (options) => {
    let {folderToScan} = options;
    
    const results = utils.traverseFilesSync(folderToScan);
    if (!results) {
        return null;
    }
    
    let item = [];

    let info = {name: "services-ems-bus", schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"}

    console.log('Processing files...\n');
    
    results.forEach(filePath => {
        const services = servicesFromFile(filePath);

        if(!Array.isArray(services) || services[0].catalog) return;
        
        console.log(filePath);
        let catalogName = filePath.split('/').pop();
        catalogName = catalogName.replace('catalogo_', '').replace('.json', '');

        item.push({name: catalogName, item: itemFromService(services)});
    });
    
    console.log('\nDone!');
    
    return JSON.stringify({info, item}, null, '\t');
};

const servicesFromFile = filename => {
    const data = fs.readFileSync(filename, 'utf8');

    // To remove non-printable and other non-valid JSON chars
    const extractData = data.replace(/[\u0000-\u0019]+/g,''); 

    const services = JSON.parse(extractData);
    return services;
}

const itemFromService = services => {
    let item = [];

    services.forEach(service => {
        let path = service.url.split('/');
        path.shift();

        item.push({
            name: service.name, 
            description: service.comment, 
            request: {
                method: service.type, 
                url: {
                    raw: '{{host}}' + service.url, 
                    host: ['{{host}}'], 
                    path: path
                }
            }
        });
    });

    return item;
}
