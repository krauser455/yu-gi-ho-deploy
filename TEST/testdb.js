const db = require("../app/database");

const m1 = {
	"cod": "00T012132",
	"nome": "Scheletrone",
	"attributo": "oscurità",
	"livello": 3,
	"numero": 22113321,
	"descrizione": "non morto ma neanche vivo",
	"attacco": 2000,
	"difesa": 2000,
	"tipo": "Zombie",
	"blugem": null,
	"redgem": null,
	"pendeffect": null,
	"img": "cards_images/la_leggenda_del_drago_bianco_occhi_blu/1557499.jpg",
};

const m2 = {
	"cod": "010101T01",
	"nome": "Scheletrone di merda",
	"attributo": "oscurità",
	"livello": 3,
	"numero": 22113321,
	"descrizione": "non morto ma neanche vivo",
	"attacco": 2000,
	"difesa": 2000,
	"tipo": "Zombie",
	"blugem": null,
	"redgem": null,
	"pendeffect": null,
	"img": "cards_images/la_leggenda_del_drago_bianco_occhi_blu/1557499.jpg",
};

db.connect(false,  (err) => {
    if (err) throw err;
    console.log("Connessione");

    db.Add_card( m1,  (err, lastId) => {
        if (err) throw err;
        console.log("Inserito mostro #" + lastId);
		
		db.Add_card( m2,  (err, lastId) => {
			if (err) throw err;
			console.log("Inserito mostro #" + lastId);
			
			db.Add_ottenute(2, "00T012132", 2,  (err, lastId) => {
				if (err) throw err;
				console.log("Inserita relazione #" + lastId);
				
				db.Add_ottenute(1, "010101T01", 3,  (err, lastId) => {
					if (err) throw err;
					console.log("Inserita relazione #" + lastId);
					
					db.Get_all_ottenute( (err, relations) => {
						if (err) throw err;
						console.log("tutte le relazioni #", relations);
						
						db.cards_All_of_the_specify_user(1, (err, relation) => {
							if (err) throw err;
							console.log("tutte le relazioni #", relation);
							db.close;
						})
						
					});
				});	
			});
		});
    });
});