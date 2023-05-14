const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./database");

const path = require('path');
const fs = require('fs');
const multer = require('multer');

const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const app = express();
const router = express.Router();

const DIR = './APP/cards_images';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      //cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
	  cb(null, file.originalname);
    }
});
let upload = multer({storage: storage});

app.use( morgan('dev') );  // fancy HTTP log
app.use( express.json() ); // body parser for Content-Type: application/json
app.use(cors());  //CORS default: allow all
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var publicDir = require('path').join(__dirname,'/cards_images');
var deployDir = require("path").join(__dirname,"/dist/Yu-gi-ho-app") // for angular deploy
app.use(express.static(publicDir));
app.use(express.static(deployDir)); // for angular deploy

app.use(expressJwt({secret: 'todo-app-super-shared-secret'}).unless({path: ['/login', '/register', '/allcards', '/envelope/all', '/recipes', /^\/singlecard\/.*/, /^\/ricetta\/.*/, /^\/comments\/recipe\/.*/, /^\/comments\/recipe\/.*\/user\/.*/, /^\/recipes\/.*\/user/, '/api/upload' , publicDir, deployDir]}));

app.post('/api/upload', upload.single('photo'), function(req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received successfully');
        return res.send({
          success: true
        })
      }
});

app.get('/', (req,res) => { // for angular deploy
  res.sendFile(deployDir+"/index.html")
});

/*
	#############################
	## ROUTES OPERAZIONI CARTE ##
	#############################
*/

app.post("/cards", (req, res, next) => {
  db.Add_card(req.body, (err) => {
    if (err) return next(err);
      res.json( {"card": req.body }  );
  });
});

app.get("/allcards", (req, res, next) => { //MODIFICATA
  db.All_cards( (err, cards) => {
    if (err) return next(err);
    res.json( {"cards": cards }  );
  });
});

app.get("/singlecard/:id", (req, res, next) => { //MODIFICATA
  db.Single_card(req.params.id, (err, card) => {
    if (err) return next(err);
    if (!card) return next();
    res.json( {"card": card }  );
  });
});

app.put("/cards/:id", (req, res, next) => {

  db.Single_card(req.params.id, (err, card) => {
    if (err) return next(err);
    if (!card) return next();

    db.Update_card(req.body, req.params.id, (err) => {
      if (err) return next(err);

      db.Single_card(req.params.id, (err, card) => {
        if (err) return next(err);
        res.json( {"card": card }  );
      });
    });
  });
});

app.delete("/cards/:id", (req, res, next) => {
  db.Delete_card(req.params.id, (err) => {
    if (err) return next(err);
    res.status(204).end();
  });
});

/*
	################################
	## ROUTES BUSTE DI ESPANSIONE ##
	################################
*/

app.post("/envelope", (req, res, next) => {
  db.POST_envelope(req.body, (err) => {
	if (err) return next(err);
	res.json( {"envelope": req.body }  );
	/*try{
		modify = req.body.nome.split(" ").join("_")
		fs.mkdirSync('./APP/cards_images/' + modify)
		res.json( {"envelope": req.body }  );
	}catch(errore){
		if(errore.code == 'EEXIST'){
			res.json( {"error": "the directory named"+ req.body.nome + "is already exists" }  );
		}else{
			res.json( {"error": errore }  );
		}
	}	*/
  });  
});

app.post("/cards/:id/envelope/:ids", (req, res, next) => { // aggiunge una carta nella tabella dentro
  db.Add_card_to_env(req.params.id, req.params.ids, (err) => {
    if (err) return next(err);
	res.json( {"card": req.body }  );
  });
});



app.get("/envelope/all", (req, res, next) => { // GET all envelopes // MODIFICATO
	db.GET_all_envelope( (err, envelopes) => {
		if (err) return next(err);
		res.json( {"envelopes": envelopes });
	})
})

app.put("/envelope/:id", (req, res, next) => { // PUT envelope
	db.GET_single_envelope(req.params.id, (err, envelope) => {
		if (err) return next(err);
		if (!envelope) return next();

		db.PUT_envelope(req.body, req.params.id, (err) => {
			if (err) return next(err);

			db.GET_single_envelope(req.params.id, (err, envelope) => {
				if (err) return next(err);
				res.json( {"envelope": envelope }  );
			});
		});
	});
})

app.delete("/envelope/:id", (req, res, next) => { // DELETE envelope
	db.DELETE_envelope(req.params.id, (err, envelope) => {
		if (err) return next(err);
		res.status(204).end();
	})
})

/*
	##############################
	## ROUTES OPERAZIONI UTENTI ##
	##############################
*/

app.post("/register", (req, res, next) => { // aggiunge un utente
	db.RegisterController(req.body.email, (err, row) => {
		if (err) return next(err);
		if(row == null){
			db.Add_user(req.body, (err, lastId) => {
			if (err) return next(err);
				db.Get_single_user(lastId, (err, user) => {
				if (err) return next(err);
				// preleva tutti i dati dell' utente ed invia tramite email il link per la conferma dell' utente quindi: http://localhost:8000/confirm/userid/+user.userid
				res.status(201).json( {"user": user }  );
				});
			});
		}else{
			return res.sendStatus(405);
		}
	})
});

app.get("/users", (req, res, next) => { // restituisce la lista di tutti gli utenti registrati
  db.Get_all_users( (err, users) => {
    if (err) return next(err);
    res.json( {"users": users }  );
  });
});

app.get("/users/:id", (req, res, next) => { // restituisce i dati di un utente registrato
  db.Get_single_user(req.params.id, (err, user) => {
    if (err) return next(err);
    if (!user) return next();
    res.json( {"user": user }  );
  });
});

app.put("/users/:id", (req, res, next) => { // aggiorna dati di un singolo utente
  db.Get_single_user(req.params.id, (err, user) => {
    if (err) return next(err);
    if (!user) return next();

    db.Put_user(req.body, req.params.id, (err) => {
      if (err) return next(err);

      db.Get_single_user(req.params.id, (err, user) => {
        if (err) return next(err);
        res.json( {"user": user }  );
      });
    });
  });
});

app.delete("/users/:id", (req, res, next) => { // rimuove un utente
  db.Delete_user(req.params.id, (err) => {
    if (err) return next(err);
    res.status(204).end();
  });
});

/*
	############
	## OTHERS ##
	############
*/

app.post("/users/:userid/cards/:cod", (req, res, next) => { // aggiunge una carta alle ottenute di un utente
	/* controllo se la carta esiste nel deck dell' utente:  SELECT cod_fk FROM ottenute WHERE userid_fk = ?
		se(vero){aggiunge alle ottenute}
		altrimenti{effettua una put}
	*/
	db.GET_MAIN_SUM( req.params.userid, req.body.type, (err, result) => {
		if (err) return next(err);
		if(req.body.type == "main" && result.total == 60){
			res.json( {"status": "il main deck deve essere composto di un minimo di 40 carte fino ad un massimo di 60" }  );
		}else if(req.body.type == "extra" && result.total == 15){
			res.json( {"status": "l'extra deck deve essere composto di un massimo di 15 carte" }  );
		}else if(req.body.type == "side" && result.total == 15){
			res.json( {"status": "il side deck deve essere composto di un massimo di 15 carte" }  );
		}else{
			db.Add_ottenute(req.params.userid, req.params.cod, req.body.qnt, req.body.type, (err) => {
				if (err) return next(err);
				res.json( {"cards": req.body }  );
			});
		}			
	});
});

app.get("/users/:id/cards", (req, res, next) => { // restituisce tutte le carte ottenute da un utente
  db.cards_All_of_the_specify_user(req.params.id, (err, cards) => {
    if (err) return next(err);
    res.json( {"cards": cards }  );
  });
});

app.get("/users/:id/cards/:cod/type/:t", (req, res, next) => { // restituisce una singola carta ottenuta da un utente
  db.single_card_of_the_specify_user(req.params.id, req.params.cod, req.params.t, (err, row) => { // DA MODIFICARE
    if (err) return next(err);
	if (!row) return res.json( {"card": "false"});
    res.json( {"card": row }  );
  });
});

app.put("/users/:userid/cards/:cod/type/:t", (req, res, next) => {
	db.Put_qnt(req.body.qnt, req.body.type, req.params.userid, req.params.cod, req.params.t, (err) => {
      if (err) return next(err);
	  res.json( {"cards": req.body }  );
	});
});

app.delete("/users/:userid/cards/:cod/type/:t", (req, res, next) => {
  db.Delete_ottenuta(req.params.userid, req.params.cod, req.params.t, (err) => {
    if (err) return next(err);
    res.status(204).end();
  });
});

/*
	##################################
	## GESTIONE DI TUTTE LE RICETTE ##
	##################################
*/

app.post("/ricetta/user/:id", (req, res, next) => {
	let id;
	db.GET_MAIN_SUM( req.params.id, "main", (err, result) => {
		if(result.total < 40){
			res.json( {"status": "numero carte minore di 40 nel main deck non puoi pubblicare questa la ricetta" } );
		}else{
			db.cards_All_of_the_specify_user(req.params.id, (err, cards) => {
				if (err) return next(err);		
				db.POST_ricetta(req.body, (err, lastId) => {
				if (err) return next(err);			
				for(x in cards){
					db.ADD_cardlist(cards[x].cod, req.params.id, lastId, cards[x].qnt, cards[x].type, (err) => {
					if (err) return next(err);
					})
				}
				res.json( {"status": "Ricetta pubblicata con successo!" }  );
				})
			});	
		}
	});
});

app.get("/ricetta/:id", (req, res, next) => { // restituisce tutte le carte di una determinata ricetta // MODIFICATO
	db.cards_All_of_the_specify_cardlist(req.params.id, (err, cards) => {
		if (err) return next(err);
		res.json( {"cards": cards } );
	});
});

app.get("/cardlist", (req, res, next) => { // restituisce tutte le carte di tutte le ricette
	db.Get_all_cardlist( (err, cards) => {
		if (err) return next(err);
		res.json( {"cards": cards } );
	});
});

app.get("/recipes", (req, res, next) => { // MODIFY
	db.GET_all_ricette( (err, recipes) => {
		if (err) return next(err);
		res.json( {"recipes": recipes } );
	});
});

app.get("/recipes/:id/user", (req, res, next) => { // restituisce tutti gli id delle ricette di un utente
	db.GET_all_ricette_of_user( req.params.id, (err, recipes) => {
		if (err) return next(err);
		res.json( {"recipes": recipes } );
	});
});

/*
	##################################
	## GESTIONE DI TUTTI I COMMENTI ##
	##################################
*/

app.post("/comments/user/:iduser/ricetta/:idricetta", (req, res, next) => {
	db.POST_commento_in_relazione(req.params.iduser, req.params.idricetta, req.body, (err, lastId) => {
		if (err) return next(err);
		res.json( {"status": "commento postato con successo!", 
				   "id": lastId} );
	});
});

app.get("/comments/recipe/:id", (req, res, next) => { // restituisce tutti i commenti di una ricetta
	db.Get_all_comments_of_single_recipes( req.params.id, (err, comments) => {
		if (err) return next(err);
		res.json( {"comments": comments } );
	});
});

app.get("/comments/recipe/:id/user/:iduser", (req, res, next) => { // restituisce tutti gli id delle ricette di un utente
	db.GET_all_comments_of_user(req.params.iduser, req.params.id, (err, comments) => {
		if (err) return next(err);
		res.json( {"comments": comments } );
	});
});

app.delete("/comment/:idcom", (req, res, next) => { // errore
	db.DELETE_commento( req.params.idcom, (err) => {
		if (err) return next(err);
		res.json( {"status": "commento cancellato con successo!" } )
	})
})

app.delete("/recipe/:idrec", (req, res, next) => {

	db.Delete_cardlist(req.params.idrec, (err) => {
		if (err) return next(err);
	})
	
	db.DELETE_commento_in_relazione(req.params.idrec, (err) => {
		if (err) return next(err);
	})
	
	db.DELETE_ricetta(req.params.idrec, (err) => {
		if (err) return next(err);
		res.json( {"status": "ricetta cancellata con successo!" } )
	})
})

app.get("/comments/relations", (req, res, next) => { 
	db.GET_all_comments_relations((err, comments) => {
		if (err) return next(err);
		res.json( {"comments": comments } );
	});
});

app.get("/getsum/user/:id/type/:idt", (req, res, next) => {
	db.GET_MAIN_SUM(req.params.id, req.params.idt, (err, total) => {
		if (err) return next(err);
		res.json( {"sum": total } );
	});
});
/*
	#################### 
	# LOGIN CONTROLLER #
	####################
*/

app.post("/login", (req, res, next) => {
	let useremail = req.body.email;
	let userpass = req.body.pass;
	db.LoginController(useremail, userpass, (err, user) => {
		if (err) return next(err);
		if(user){
			//res.json( {"id": user }  );
			var token = jwt.sign({userID: user.userid, Nome: user.nome, Cognome: user.cognome, Email: user.email, privileges: user.privilegi}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
			res.send({token});
			
		}else{
			return res.sendStatus(401);
		}		
	});
});


app.use( (req, res, next) => {
  res.status(404).end();
});

// error handler
app.use( (err, req, res, next) => {
  console.log(err.message);
  res.status(err.status || 500).send({ error: err.message});
});

module.exports.start = function(dbfile, port) {
  db.connect(dbfile,  (err) => {
      if (err) throw err;
      console.log("Database connected.")
      app.listen(port, () => console.log("Listenting on port " + port));
  });
}