
const environment = process.env.NODE_ENV === "production"? "production": "production";
const config = require('./config.json')[environment];
//console.log(config);

console.log( "DIRECTORY PRINCIPALE: " + process.env)

require('./app/app.js').start( config.dbfile, config.port);
