const shipA = {deck: 4 }

const shipB = {deck: 3}

const shipC = {deck: 2}

const shipD = {deck: 1}

let reset = 1;

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
	'100', '01', '02', '03', '04', '05', '06', '07', '08', '09',
	'10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
	'20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
	'30', '31', '32', '33', '34', '35', '36 ','37', '38', '39',
	'40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
	'50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
	'60', '61', '62', '63', '64', '65', '66', '67', '68', '69',
	'70', '71', '72', '73', '74', '75', '76', '77', '78', '79',
	'80', '81', '82', '83', '84', '85', '86', '87', '88', '89',
	'90', '91', '92', '93', '94', '95', '96', '97', '98', '99',
]

		// clsss для поиска свободного места в коорденате seaBatle
class ShipDeck {

	constructor(value, seaMillN) {
		this.value = value;
		this.seaMillN = seaMillN;
	}

	sayDeck () {
		let num = Math.floor(Math.random() * (0,  99)) + 1;
		if (
			seaBatle[num] == 0 &&
			seaBatle[num + 1] == 0 &&
			seaBatle[num - 1] == 0 &&
			seaBatle[num + 9] == 0 &&
			seaBatle[num - 9] == 0 &&
			seaBatle[num + 10] == 0 &&
			seaBatle[num - 10] == 0 &&
			seaBatle[num + 11] == 0 &&
			seaBatle[num - 11] == 0
			) {
			seaBatle[num] = this.value;
			document.getElementById(`coordinates${coordinates[num]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			if(shipD.deck == 2) {

			}
		}else {
			this.sayDeck();
		}
	}

}

// отрисовка блоков 
for(let i = 0; i < 100; i++ ) {
	document.getElementById('user').innerHTML += `<div class='seaMill' id='coordinates${coordinates[i]}'></div>`;
}

// страт и размищение кораблей
function start (){
	reset++
		// перезагрузка страницы если корабли уже размещены. проверка не очевидна но пока сойдет
	if(reset > 2) {
		document.location.reload();
	}
	// for определяет кол-во палуб и кораблей
	for(let i = 1; i <= 1; i ++) {
		// присваевает deck кораблю class
		let item  = shipA.deck;
		let shipDeckA = new ShipDeck(item, 'seaMillA');
		shipDeckA.sayDeck();
	};

	for(let i = 1; i <= 2; i ++) {
			let item  = shipB.deck;
			let shipDeckB = new ShipDeck(item, 'seaMillB');
			shipDeckB.sayDeck();
	}

	for(let i = 1; i <= 3; i ++) {
			let item  = shipC.deck;
			let shipDeckD = new ShipDeck(item, 'seaMillC');
			shipDeckD.sayDeck();
	}

	for(let i = 1; i <= 4; i ++) {
		let item  = shipD.deck;
		let shipDeckD = new ShipDeck(item, 'seaMillD');
		shipDeckD.sayDeck();
	}
	console.log(seaBatle);
}