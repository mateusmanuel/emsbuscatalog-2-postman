# Ems-Bus Service Catalog to Postman Collection Converter
[![npm version](https://badge.fury.io/js/emsbuscatalog-2-postman.svg)](https://badge.fury.io/js/emsbuscatalog-2-postman)

This project use the catalog service definition at enterprise service bus [ems-bus](https://github.com/erlangMS/ems-bus) and
converts them to a [Postman](https://www.getpostman.com/) collection. The actual support format is based on [Postman Collection Format v2.1.0](https://schema.getpostman.com/json/collection/v2.1.0/docs/index.html)

Ems-bus is an awesome tool to facilitate the integration of systems through a service-oriented approach for the systems of the University of Brasilia (UnB), but it isn't have a feature to call the endpoints and see the response. 

Postman offer lots of features to play with requests and
this project helps to bootstrap Postman from services.

## Installation

For usage on **command line**, install globally

```bash
npm install -g emsbuscatalog-2-postman
```

For programmatic usage, install in project
 
```bash
npm install --save emsbuscatalog-2-postman
```

## Command Line Usage

```shell
emsbuscatalog-2-postman --input catalog_path --output ems-bus-catalog.postman_collection.json
```

From the given folder, all folders are recursively scanned for files that have services. You can also set the output JSON.

## Contributing

- Submit a Pull Request for any enhancement you made.
- Create an issue describing your particular problem.

## License

emsbuscatalog-2-postman is Open Source software released under the
**GNU General Public License v3.0**.
