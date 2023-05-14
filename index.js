
const environment = process.env.NODE_ENV === "production"? "production": "development";
const config = require('./config.json')[environment];
//console.log(config);

console.log( "DIRECTORY PRINCIPALE: " + process.env.PWD)

require('./app/app').start( config.dbfile, config.port);
