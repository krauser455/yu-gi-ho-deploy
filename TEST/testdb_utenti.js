const db = require("../app/database");

const m1 = {
	"nome": "Gandrea",
	"cognome": "Franco",
	"pass": "1234",
	"email": "andrea.franco96@virgilio.it",
	"privilegi": "utente",
};

const m2 = {
	"nome": "Aabriele",
	"cognome": "miranda",
	"pass": "1234",
	"email": "gabriele@virgilio.it",
	"privilegi": "utente",
};

db.connect(false,  (err) => {
    if (err) throw err;
    console.log("Connessione");

    db.Add_user( m1,  (err, lastId) => {
        if (err) throw err;
        console.log("Inserito un utente #" + lastId);
		
		db.Add_user( m2,  (err, lastId) => {
			if (err) throw err;
			console.log("Inserito un utente #" + lastId);
			
			db.Get_all_users( (err, users) => {
				if (err) throw err;
				console.log("Inserito un utente #", users);
			});
		});
	});
});