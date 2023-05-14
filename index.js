
const environment = process.env.NODE_ENV === "production"? "production": "development";
const config = require('./config.json')[environment];
//console.log(config);

console.log( "DIRECTORY PRINCIPALE: " + process.env.PWD)

require('/app/apps/app').start( config.dbfile, config.port);
