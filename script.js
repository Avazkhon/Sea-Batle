const shipA = {
	deck: 4,
	sayDeck() {
		for(let i = 0; i <3; i++) {

		}
	}
}

const shipB = {
	deck: 3,
	sayDeck() {
		for(let i = 0; i <2; i++) {

		}
	}
}

const shipC = {
	deck: 2,
	sayDeck() {
		for(let i = 0; i <1; i++) {

		}
	}
}

const shipD = {
	deck: 1,
	sayDeck() {
		for(let i = 1; i <= 1; i++) {

		}
	}
}


const seaBatle = [
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,
]

const coordinates = [
	'00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
	'10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
	'20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
	'30', '31', '32', '33', '34', '35', '36 ','37', '38', '39',
	'40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
	'50', '51', '52', '53', '54', '55', '56', '57', '58', '69',
	'60', '62', '62', '63', '64', '65', '66', '67', '68', '69',
	'70', '71', '72', '73', '74', '75', '76', '77', '78', '79',
	'80', '81', '82', '83', '84', '85', '86', '87', '88', '89',
	'90', '91', '92', '93', '94', '95', '96', '97', '98', '99',
]

// отрисовка блоков  
for(let i = 0; i < 100; i++ ) {
	document.getElementById('user').innerHTML += `<div class='seaMill' id='coordinates${coordinates[i]}'></div>`;
}
// страт и размищение кораблей
function start() {
	for(let i = 1; i <= 1; i ++) {
		const numA = Math.floor(Math.random() * (0,  99));
		seaBatle[numA] = shipA.deck;
		console.log(seaBatle);
		document.getElementById(`coordinates${coordinates[numA]}`).innerHTML += "<div class='seaMillA'></div>";
	};

		for(let i = 1; i <= 2; i ++) {
		const numB = Math.floor(Math.random() * (0,  99)) + 1;
		seaBatle[numB] = shipB.deck;
		console.log(seaBatle);
		document.getElementById(`coordinates${coordinates[numB]}`).innerHTML += "<div class='seaMillB'></div>";
	}

		for(let i = 1; i <= 3; i ++) {
		const numC = Math.floor(Math.random() * (0,  99)) + 1;
		seaBatle[numC] = shipC.deck;
		console.log(seaBatle);
		document.getElementById(`coordinates${coordinates[numC]}`).innerHTML += "<div class='seaMillC'></div>";
	}

		for(let i = 1; i <= 4; i ++) {
		const numD = Math.floor(Math.random() * (0,  99)) + 1;
		seaBatle[numD] = shipD.deck;
		console.log(seaBatle);
		document.getElementById(`coordinates${coordinates[numD]}`).innerHTML += "<div class='seaMillD'></div>";

	}

}
