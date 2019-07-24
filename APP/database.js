const sqlite3 = require('sqlite3').verbose();
const util = require("util");
let sha1 = require("sha1");

let db;

let tableDef = "CREATE TABLE IF NOT EXISTS cards (" +
               "cod TEXT PRIMARY KEY, " +
               "nome TEXT, " +
               "attributo TEXT, " +
			   "livello INTEGER, " +
			   "numero TEXT, " +
               "descrizione TEXT, " +
               "attacco INTEGER, " +
               "difesa INTEGER, " +
               "tipo TEXT, " +
			   "blugem INTEGER, " +
			   "redgem INTEGER, " +
			   "pendeffect TEXT, " +
			   "img TEXT );"+
              
			  "CREATE TABLE IF NOT EXISTS utenti (" +
              "userid INTEGER PRIMARY KEY, " +
              "nome TEXT, " +
              "cognome TEXT, " +
              "pass TEXT, " +
			  "email TEXT, " +
			  "privilegi TEXT );"+
			  
			  "CREATE TABLE IF NOT EXISTS ottengono (" +
              "userid_fk INTEGER REFERENCES utenti(userid) ON DELETE CASCADE, " +
              "cod_fk TEXT REFERENCES cards(cod) ON DELETE CASCADE, "+
			  "qnt INTEGER, "+
			  "type TEXT );" +
			  
			  "CREATE TABLE IF NOT EXISTS envelopes (" +
			  "envid INTEGER PRIMARY KEY, " +
			  "anno INTEGER, " +
			  "nome TEXT );" +
			  
			  "CREATE TABLE IF NOT EXISTS dentro (" +
			  "cod_c TEXT REFERENCES cards(cod) ON DELETE CASCADE, " +
			  "cod_env INTEGER REFERENCES envelopes(envid) ON DELETE CASCADE );" +
			  
			  "CREATE TABLE IF NOT EXISTS ricette (" +
			  "idric INTEGER PRIMARY KEY, " +
			  "nomeric TEXT, " +
			  "desc TEXT );" +
			  
			  "CREATE TABLE IF NOT EXISTS decklist (" +
			  "fk_card TEXT REFERENCES cards(cod) ON DELETE CASCADE, " +
			  "fk_user INTEGER REFERENCES utenti(userid) ON DELETE CASCADE, " +
			  "fk_ricetta INTEGER REFERENCES ricette(idric) ON DELETE CASCADE, " +
			  "qnt INTEGER, " +
			  "type TEXT );" +
			
			  "CREATE TABLE IF NOT EXISTS commenti (" +
			  "fk_user INTEGER REFERENCES utenti(userid) ON DELETE CASCADE, " +
			  "fk_ricetta INTEGER REFERENCES ricette(idric) ON DELETE CASCADE, " +
			  "desc TEXT, " +
			  "id_com INTEGER PRIMARY KEY );"
			  ;
			  
module.exports.connect = function(dbfile, cb ) {
  if (!dbfile)
    dbfile = "../data/devdb.sqlite";

  db = new sqlite3.Database(dbfile, (err) => {
    if (err && typeof cb === 'function') cb(err);
    else db.exec(tableDef, cb);
  });
}

/* 
   ############################
   ## OPERAZIONI SULLE CARTE ##
   ############################
*/

// restituisce tutte le carte disponibili
module.exports.cards_All = function(cb) {
  db.all( "SELECT * FROM cards", cb );
}

// aggiunge una carta al database
module.exports.Add_card = function(card, cb) {
	db.run("INSERT INTO cards (cod, nome, attributo, livello, numero, descrizione, attacco, difesa, tipo, blugem, redgem, pendeffect, img) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [card.cod, card.nome, card.attributo, card.livello, card.numero, card.descrizione, card.attacco, card.difesa, card.tipo, card.blugem, card.redgem, card.pendeffect, card.img], function(err) {
      if (err) cb(err);
      else cb(null, this.lastID);
    });
}

// restituisce tutte le carte presenti
module.exports.All_cards = function(cb) {
	let values_array = [];
  db.all( "SELECT * FROM cards", (err, cards) => {
	  if (err) return cb(err);
	  db.all("SELECT envid, anno, envelopes.nome, cod_c, cod_env FROM envelopes, dentro, cards WHERE envid = cod_env AND cod = cod_c", (err, envelopes) => {
		if (err) return cb(err);
		for(x in cards){
			for(y in envelopes){
				if(cards[x].cod == envelopes[y].cod_c){
					//cards[x].busta = envelopes[y];
					values_array.push(envelopes[y])
					delete envelopes[y].cod_c;
					delete envelopes[y].cod_env;
				}		
			}
			cards[x].espansioni = values_array;
			values_array = [];		
		}							
        cb(null, cards);
	  })
  });
}

// nel caso di una relazione 1 - N tra carte ed espansioni
/*module.exports.All_cards = function(cb) {
	let values_array = [];
  db.all( "SELECT * FROM cards", (err, cards) => {
	  if (err) return cb(err);
	  db.all("SELECT envid, anno, envelopes.nome, cod_card_fk FROM envelopes, cards WHERE cod_card_fk = cod", (err, envelopes) => {
		if (err) return cb(err);
		for(x in cards){
			for(y in envelopes){
				if(cards[x].cod == envelopes[y].cod_card_fk){
					//cards[x].busta = envelopes[y];
					values_array.push(envelopes[y])
					delete envelopes[y].cod_card_fk;
				}		
			}
			cards[x].espansioni = values_array;
			values_array = [];
		}							
        cb(null, cards);
	  })
  });
}*/

// aggiunge una carta ad un pacchetto
module.exports.Add_card_to_env = function(idcard, idenv, cb){
	db.run("INSERT INTO dentro (cod_c, cod_env) VALUES (?,?)",
	[idcard, idenv], function(err) {
		if (err) cb(err);
		else cb(null, this.lastID);
	});
}


// restituisce una carta con uno specifico codice
module.exports.Single_card = function(id, cb) {
	db.get("SELECT * FROM cards WHERE cod=?", id, (err, result) => {
		if (err) return cb(err);
			db.all("SELECT envid, anno, envelopes.nome FROM envelopes, dentro WHERE envid = cod_env AND cod_c=?",
                        id, (err, envelopes) => {
			if (err) return cb(err);
			result.espansioni = envelopes;
			
			cb(null, result);
		})
	}); // da modificare
}

// aggiorna una carta
module.exports.Update_card = function(card, id, cb){
	db.run("UPDATE cards SET nome=?, attributo=?, livello=?, numero=?, descrizione=?, attacco=?, difesa=?, tipo=?, blugem=?, redgem=?, pendeffect=?, img=? WHERE cod=?", 
	[card.nome, card.attributo, card.livello, card.numero, card.descrizione, card.attacco, card.difesa, card.tipo, card.blugem, card.redgem, card.pendeffect, card.img, id], cb );
}

// elimina una carta
module.exports.Delete_card = function(id, cb){
	db.run("DELETE FROM cards WHERE cod=?", id, cb );
}

/* 
   #############################
   ## OPERAZIONI SUGLI UTENTI ##
   #############################
*/

// aggiunge un utente
module.exports.Add_user = function(user, cb){
	db.run("INSERT INTO utenti (nome, cognome, pass, email, privilegi) VALUES (?,?,?,?,?)",
    [user.nome, user.cognome, sha1(user.pass), user.email, user.privilegi], function(err) {
      if (err) cb(err);
      else cb(null, this.lastID);
    });
}
// restituisce tutta la lista di utenti
module.exports.Get_all_users = function(cb){
	db.all( "SELECT * FROM utenti ORDER BY nome ASC", cb );
}
// restituisce un utente in base all' id
module.exports.Get_single_user = function(id, cb){
	db.get("SELECT * FROM utenti WHERE userid=?", id, cb);
}
// aggiorna un utente
module.exports.Put_user = function(user, id, cb){
	db.run("UPDATE utenti SET nome=?, cognome=?, pass=?, email=?, privilegi=? WHERE userid=?", 
	[user.nome, user.cognome, user.pass, user.email, user.privilegi, id], cb );
}
// elimina un utente
module.exports.Delete_user = function(id, cb){
	db.run("DELETE FROM utenti WHERE userid=?", id, cb );
}


/*
    ################################################
	## OPERAZIONI RELAZIONE UTENTE, CARTE (N a N) ##
	################################################
*/

// aggiunge una carta alle ottenute
module.exports.Add_ottenute = function(iduser, idcard, quantita, tipodeck, cb){
	// prima di effettuare l'inserimento nel maindeck, extra e side controllare che questi non superano il limite 60 per maindeck, 15 extra e side
	// e che nel maindeck non ce ne siano meno di 40
	db.run("INSERT INTO ottengono (userid_fk, cod_fk, qnt, type) VALUES (?,?,?,?)",
	[iduser, idcard, quantita, tipodeck], function(err) {
		if (err) cb(err);
		else cb(null, this.lastID);
	});
}

// restituisce tutti gli id delle carte ottenute
module.exports.Get_all_ottenute = function(cb){
	db.all( "SELECT * FROM ottengono", cb );
}

module.exports.Put_qnt = function(quantita, tipodeck, id_user, id_card, type, cb){
	db.run("UPDATE ottengono SET qnt=?, type=? WHERE userid_fk=? AND cod_fk=? AND type=? ", [quantita, tipodeck, id_user, id_card, type], cb);
}

module.exports.Delete_ottenuta = function(iduser, idcard, type, cb){
	db.run("DELETE FROM ottengono WHERE userid_fk=? AND cod_fk=? AND type=?", [iduser, idcard, type], cb );
}

// restituisce tutte le carte ottenute da un determinato utente
module.exports.cards_All_of_the_specify_user = function(id, cb) {
	db.all( "SELECT cards.cod, cards.nome, cards.attributo, cards.livello, cards.numero, cards.descrizione, cards.attacco, cards.difesa, cards.tipo, cards.blugem, cards.redgem, cards.pendeffect, cards.img, ottengono.qnt, ottengono.type " + 
	"FROM utenti, cards, ottengono " + 
	"WHERE utenti.userid = userid_fk AND cards.cod = cod_fk AND utenti.userid = ? ORDER BY ottengono.type ASC", id, cb );
}

// restituisce solo una carta di un determinato utente
module.exports.single_card_of_the_specify_user = function(userid, codcard, type, cb) {
	db.get("SELECT cod_fk, type FROM ottengono WHERE userid_fk=? AND cod_fk=? AND type=?", [userid, codcard, type], cb)
}

/*
	#######################
	# BUSTE DI ESPANSIONE #
	#######################
*/
// aggiunta di una busta di espansione
module.exports.POST_envelope = function(envelope, cb){
	db.run("INSERT INTO envelopes (anno, nome) VALUES (?,?)",
	[envelope.anno, envelope.nome],function(err) {
      if (err) cb(err);
      else cb(null, this.lastID);
    });
}
// rimozione di una busta di espansione
module.exports.DELETE_envelope = function(envelope_id, cb){
	db.run("DELETE FROM envelopes WHERE envid = ? ", envelope_id, cb );
	db.run("DELETE FROM dentro WHERE cod_env = ? ", envelope_id, cb );
}
// aggiornamento di una busta di espansione
module.exports.PUT_envelope = function(envelope, envelope_id, cb){
	db.run("UPDATE envelopes SET anno=?, nome=? WHERE envid=? ", [envelope.anno, envelope.nome, envelope_id], cb);
}
// restituzione di tutte le buste di espansione
module.exports.GET_all_envelope = function(cb){
	db.all( "SELECT * FROM envelopes", cb );
}

// restituzione di una singola busta
module.exports.GET_single_envelope = function(id, cb){
	db.get("SELECT * FROM envelopes WHERE envid=?", id, cb);
}

/*
	#########################
	# PUBBLICAZIONE RICETTA #
	#########################
*/

// pubblicazione ricetta del database decklist
module.exports.POST_ricetta = function(ricetta, cb){
	db.run("INSERT INTO ricette (nomeric, desc) VALUES (?,?)", [ricetta.nomeric, ricetta.desc], function(err) {
		if (err) cb(err);
		else cb(null, this.lastID);
	})
}

module.exports.PUT_ricetta = function(ricetta, id_ricetta, cb){
	db.run("UPDATE ricette SET anno=?, nome=? WHERE idric=?", [ricetta.anno, ricetta.nome, id_ricetta], cb);
}

module.exports.DELETE_ricetta = function(id_ricetta, cb){
	db.run("DELETE FROM ricette WHERE idric=?", id_ricetta, cb);
}

module.exports.GET_all_ricette = function(cb){
	db.all("SELECT * FROM ricette", cb);
}

module.exports.GET_ricetta_singola = function(id_ricetta, cb){
	db.get("SELECT * FROM ricette WHERE idric=?", id_ricetta, cb);
}

module.exports.GET_id_ricetta_singola = function(nome_ricetta, cb){
	db.get("SELECT idric FROM ricette WHERE nome=?", nome_ricetta, cb);
}

// tutti gli id delle ricette di un determinato utente
module.exports.GET_all_ricette_of_user = function(id, cb){
	db.all("SELECT DISTINCT idric FROM ricette, decklist, utenti WHERE idric = decklist.fk_ricetta AND decklist.fk_user = ?", id, cb);
}

/*
	#########################
	# CONTROLLO CAPACITA'   #
	#########################
*/

module.exports.GET_MAIN_SUM = function(id, type, cb){
	db.get("SELECT SUM(qnt) total FROM ottengono WHERE userid_fk=? AND type=?", id, type, cb);
}

module.exports.close = function(cb = ()=>{} ) {
  db.close( (err) => {
    if (err) return cb(err);
    console.log("Database chiuso");
    cb();
  });
}

/*
	#########################
	# POPOLAZIONE CARDLIST  #
	#########################
*/

module.exports.ADD_cardlist = function(idcard, iduser, idricetta, quantita, tipodeck, cb){
	db.run("INSERT INTO decklist (fk_card, fk_user, fk_ricetta, qnt, type) VALUES (?,?,?,?,?)",
	[idcard, iduser, idricetta, quantita, tipodeck], function(err) {
		if (err) cb(err);
		else cb(null, this.lastID);
	});
}

module.exports.Get_all_cardlist = function(cb){
	db.all( "SELECT * FROM decklist", cb );
}

module.exports.Delete_cardlist = function(idricetta, cb){
	db.run("DELETE FROM decklist WHERE fk_ricetta=?", idricetta, cb );
}

module.exports.cards_All_of_the_specify_cardlist = function(id, cb) {
	db.all( "SELECT cards.cod, cards.nome, cards.attributo, cards.livello, cards.numero, cards.descrizione, cards.attacco, cards.difesa, cards.tipo, cards.blugem, cards.redgem, cards.pendeffect, cards.img, decklist.qnt, decklist.type " + 
	"FROM utenti, cards, decklist, ricette " + 
	"WHERE utenti.userid = fk_user AND cards.cod = fk_card AND ricette.idric = fk_ricetta AND ricette.idric = ?", id, cb );
}

/*
	#####################
	# GESTIONE COMMENTI #
	#####################
*/

module.exports.POST_commento_in_relazione = function(iduser, idric, commento, cb){ // Aggiunge una relazione di un commento
	db.run("INSERT INTO commenti (fk_user, fk_ricetta, desc) VALUES (?,?,?)",
	[iduser, idric, commento.desc], function(err) {
		if (err) cb(err);
		else cb(null, this.lastID);
	});
}

module.exports.DELETE_commento = function(idcom, cb){
	db.run("DELETE FROM commenti WHERE id_com = ? ", idcom, cb );
}

module.exports.DELETE_commento_in_relazione = function(idcom, cb){
	db.run("DELETE FROM commenti WHERE fk_ricetta=? ", idcom, cb );
}

module.exports.Get_all_comments_of_single_recipes = function(id, cb){ // restituisce tutti i commenti per quella ricetta
	db.all( "SELECT utenti.nome, utenti.cognome, id_com, commenti.desc FROM commenti, ricette, utenti WHERE idric = commenti.fk_ricetta AND userid = commenti.fk_user AND commenti.fk_ricetta = ?", id, cb );
}

// tutti gli id dei commenti di un determinato utente
module.exports.GET_all_comments_of_user = function(id, idric, cb){
	db.all("SELECT DISTINCT id_com FROM ricette, commenti, utenti WHERE idric = commenti.fk_ricetta AND commenti.fk_user = ? AND commenti.fk_ricetta = ?", [id, idric], cb);
}
// test
module.exports.GET_all_comments_relations = function(cb){
	db.all("SELECT * FROM commenti ", cb);
}


/*
	####################
	# LOGIN CONTROLLER #
	####################
*/

module.exports.LoginController = function (email, pass, cb) {
	db.get("SELECT userid, privilegi, nome, cognome, email FROM utenti WHERE utenti.email=? AND utenti.pass=?", [email, sha1(pass)], cb);
}

/*
	#######################
	# REGISTER CONTROLLER #
	#######################
*/

module.exports.RegisterController = function (email, cb) {
	db.get("SELECT email FROM utenti WHERE utenti.email=?", email, cb);
}

// -------------------------------------------------------------------------
// Promise: versione delle funzioni precedenti "promisified"
let promisified = {};

for (x in module.exports) {
  promisified[x] = util.promisify( module.exports[x] );
}
module.exports.promises = promisified;



