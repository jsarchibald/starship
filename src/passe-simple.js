function getWords()
{
	var words = {
	"pouvoir": {
		"je": "pus",
		"tu": "pus",
		"il": "put",
		"elle": "put",
		"nous": "pûmes",
		"vous": "pûtes",
		"ils": "purent",
		"elles": "purent"
	},
	"connaître": {
		"je": "connus",
		"tu": "connus",
		"il": "connut",
		"elle": "connut",
		"nous": "connûmes",
		"vous": "connûtes",
		"ils": "connurent",
		"elles": "connurent"
	},
	"avoir": {
		"je": "eus",
		"tu": "eus",
		"il": "eut",
		"elle": "eut",
		"nous": "eûmes",
		"vous": "eûtes",
		"ils": "eurent",
		"elles": "eurent"
	},
	"vivre": {
		"je": "vécus",
		"tu": "vécu",
		"il": "vécut",
		"elle": "vécut",
		"nous": "vécûmes",
		"vous": "vécûtes",
		"ils": "vécurent",
		"elles": "vécurent"
	},
	"boire": {
		"je": "bus",
		"tu": "bus",
		"il": "but",
		"elle": "but",
		"nous": "bûmes",
		"vous": "bûtes",
		"ils": "burent",
		"elles": "burent"
	},
	"croire": {
		"je": "crus",
		"tu": "crus",
		"il": "crut",
		"elle": "crut",
		"nous": "crûmes",
		"vous": "crûtes",
		"ils": "crurent",
		"elles": "crurent"
	},
	"savoir": {
		"je": "sus",
		"tu": "sus",
		"il": "sut",
		"elle": "sut",
		"nous": "sûmes",
		"vous": "sûtes",
		"ils": "surent",
		"elles": "surent"
	},
	"courir": {
		"je": "courus",
		"tu": "courus",
		"il": "courut",
		"elle": "courut",
		"nous": "courûmes",
		"vous": "courûtes",
		"ils": "coururent",
		"elles": "coururent"
	},
	"devoir": {
		"je": "dus",
		"tu": "dus",
		"il": "dut",
		"elle": "dut",
		"nous": "dûmes",
		"vous": "dûtes",
		"ils": "durent",
		"elles": "durent"
	},
	"lire": {
		"je": "lus",
		"tu": "lus",
		"il": "lut",
		"elle": "lut",
		"nous": "lûmes",
		"vous": "lûtes",
		"ils": "lurent",
		"elles": "lurent"
	},
	"paraître": {
		"je": "parus",
		"tu": "parus",
		"il": "parut",
		"elle": "parut",
		"nous": "parûmes",
		"vous": "parûtes",
		"ils": "parurent",
		"elles": "parurent"
	},
	"plaire": {
		"je": "plus",
		"tu": "plus",
		"il": "plut",
		"elle": "plut",
		"nous": "plûmes",
		"vous": "plûtes",
		"ils": "plurent",
		"elles": "plurent"
	},
	"recevoir": {
		"je": "reçus",
		"tu": "reçus",
		"il": "reçut",
		"elle": "reçut",
		"nous": "reçûmes",
		"vous": "reçûtes",
		"ils": "reçurent",
		"elles": "reçurent"
	},
	"vouloir": {
		"je": "voulus",
		"tu": "voulus",
		"il": "voulut",
		"elle": "voulut",
		"nous": "voulûmes",
		"vous": "voulûtes",
		"ils": "voulurent",
		"elles": "voulurent"
	},
	
	"naître": {
		"je": "naquis",
		"tu": "naquis",
		"il": "naquit",
		"elle": "naquit",
		"nous": "naquîmes",
		"vous": "naquîtes",
		"ils": "naquirent",
		"elles": "naquirent"
	},
	"vaincre": {
		"je": "vainquis",
		"tu": "vainquis",
		"il": "vainquit",
		"elle": "vainquit",
		"nous": "vainquîmes",
		"vous": "vainquîtes",
		"ils": "vainquirent",
		"elles": "vainquirent"
	},
	"rompre": {
		"je": "rompis",
		"tu": "rompis",
		"il": "rompit",
		"elle": "rompit",
		"nous": "rompîmes",
		"vous": "rompîtes",
		"ils": "rompirent",
		"elles": "rompirent"
	},
	"voir": {
		"je": "vis",
		"tu": "vis",
		"il": "vit",
		"elle": "vit",
		"nous": "vîmes",
		"vous": "vîtes",
		"ils": "virent",
		"elles": "virent"
	},
	"craindre": {
		"je": "craignis",
		"tu": "craignis",
		"il": "craignit",
		"elle": "craignit",
		"nous": "craignîmes",
		"vous": "craignîtes",
		"ils": "craignirent",
		"elles": "craignirent"
	},
	"joindre": {
		"je": "joignis",
		"tu": "joignis",
		"il": "joignit",
		"elle": "joignit",
		"nous": "joignîmes",
		"vous": "joignîtes",
		"ils": "joignirent",
		"elles": "joignirent"
	},
	"peindre": {
		"je": "peignis",
		"tu": "peignis",
		"il": "peignit",
		"elle": "peignit",
		"nous": "peignîmes",
		"vous": "peignîtes",
		"ils": "peignirent",
		"elles": "peignirent"
	},
	"conduire": {
		"je": "conduisis",
		"tu": "conduisis",
		"il": "conduisit",
		"elle": "conduisit",
		"nous": "conduisîmes",
		"vous": "conduisîtes",
		"ils": "conduisirent",
		"elles": "conduisirent"
	},
	"traduire": {
		"je": "traduisis",
		"tu": "traduisis",
		"il": "traduisit",
		"elle": "traduisit",
		"nous": "traduisîmes",
		"vous": "traduisîtes",
		"ils": "traduisirent",
		"elles": "traduisirent"
	},
	"faire": {
		"je": "fis",
		"tu": "fis",
		"il": "fit",
		"elle": "fit",
		"nous": "fîmes",
		"vous": "fîtes",
		"ils": "firent",
		"elles": "firent"
	},
	"mourir": {
		"je": "mourus",
		"tu": "mourus",
		"il": "mourut",
		"elle": "mourut",
		"nous": "mourûmes",
		"vous": "mourûtes",
		"ils": "moururent",
		"elles": "moururent"
	},
	"être": {
		"je": "fus",
		"tu": "fus",
		"il": "fut",
		"elle": "fut",
		"nous": "fûmes",
		"vous": "fûtes",
		"ils": "furent",
		"elles": "furent"
	},
	"tenir": {
		"je": "tins",
		"tu": "tins",
		"il": "tint",
		"elle": "tint",
		"nous": "tînmes",
		"vous": "tîntes",
		"ils": "tinrent",
		"elles": "tinrent"
	},
	"venir": {
		"je": "vins",
		"tu": "vins",
		"il": "vint",
		"elle": "vint",
		"nous": "vînmes",
		"vous": "vîntes",
		"ils": "vinrent",
		"elles": "vinrent"
	},
	"écrire": {
		"je": "écrivis",
		"tu": "écrivis",
		"il": "écrivit",
		"elle": "écrivit",
		"nous": "écrivîmes",
		"vous": "écrivîtes",
		"ils": "écrivirent",
		"elles": "écrivirent"
	},
}

	var wordList = [
						"pouvoir", "connaître", "avoir", "vivre", "boire",
						"croire", "savoir", "courir", "devoir", "lire",
						"paraître", "plaire", "recevoir", "vouloir", "naître",
						"vaincre", "rompre", "voir", "craindre", "joindre",
						"peindre", "conduire", "traduire", "faire", "mourir",
						"être", "tenir", "venir", "écrire",
					];

	return [words, wordList];
}