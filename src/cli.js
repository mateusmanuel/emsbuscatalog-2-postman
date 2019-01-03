'use strict';
const fs = require('fs');
const path = require('path');
const program = require('commander');
const converter = require('./convert');
const {version} = require('../package.json');

module.exports.go = function () {

    program
        .version(version, '-v, --version')
        .option('-i, --input [folder]', 'folder to recursively scan for REST Docs curl-request.adoc/md files', '.')
        .option('-o, --output [file]', 'output file', 'ems-bus-catalog.postman_collection.json')
        .parse(process.argv);

    // Conversion
    const result = converter.convert({
        folderToScan: program.input,
    });
    
    // Output/write result
    if (program.output) {
        const fullOutputPath = path.resolve(program.output);
        if (fullOutputPath) {
            fs.writeFileSync(fullOutputPath, result);
        } else {
            console.log('No service catalogs were found.');
        }
    } else {
        console.log(result);
    }
};