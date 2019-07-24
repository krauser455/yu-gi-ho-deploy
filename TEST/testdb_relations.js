const db = require("../app/database");

const m1 = {
	"userid_fk": 3,
	"cod_fk": "Franco",
};

const m2 = {
	"userid_fk": 3,
	"cod_fk": "Francoooooooo",
};

db.connect(false,  (err) => {
    if (err) throw err;
    console.log("Connessione");

    
});