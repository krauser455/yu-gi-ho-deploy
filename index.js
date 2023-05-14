
const environment = process.env.NODE_ENV === "production"? "production": "production";
const config = require('./config.json')[environment];
//console.log(config);

require('./app/app').start( config.dbfile, config.port);