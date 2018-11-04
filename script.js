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
		this.max = Math.floor(Math.random() * (1,  9) * 10) ;
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

		}else {
			this.sayDeck();
		}
	}


	sayDeckC() {
		// определяет коорденаты
		let randomC = Math.floor(Math.random() * (0,  99)) + 1;
		// определяет положения относительно sea
		let randomCWS = Math.floor(Math.random() * (0,  2) + 1);
			if (
			randomC < 89 &&  //проверка на росcтояния снизу
			randomCWS == 1 &&  // определяет положения относительно sea
			// проверка sea на свободные места
			seaBatle[randomC] == 0 &&
			seaBatle[randomC + 1] == 0 &&
			seaBatle[randomC - 1] == 0 &&
			seaBatle[randomC + 9] == 0 &&
			seaBatle[randomC - 9] == 0 &&
			seaBatle[randomC + 10] == 0 &&
			seaBatle[randomC - 10] == 0 &&
			seaBatle[randomC + 11] == 0 &&
			seaBatle[randomC - 11] == 0 &&
			seaBatle[randomC + 19] == 0 &&
			seaBatle[randomC + 20] == 0 &&
			seaBatle[randomC + 21] == 0

		) {
			// присвоение точке в sea значения ship
			seaBatle[randomC] = this.value;
			seaBatle[randomC + 10] = this.value;
			// отрисовка ship на экране (coordinates) 
			document.getElementById(`coordinates${coordinates[randomC]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomC + 10]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
				
		}
		else if (
			randomC <= this.max - 10 + 8 &&
			randomCWS == 2 &&
			seaBatle[randomC] == 0 &&
			seaBatle[randomC + 1] == 0 &&
			seaBatle[randomC - 1] == 0 &&
			seaBatle[randomC + 9] == 0 &&
			seaBatle[randomC - 9] == 0 &&
			seaBatle[randomC + 10] == 0 &&
			seaBatle[randomC - 10] == 0 &&
			seaBatle[randomC + 11] == 0 &&
			seaBatle[randomC - 11] == 0 &&
			seaBatle[randomC - 8] == 0 &&
			seaBatle[randomC + 2] == 0 &&
			seaBatle[randomC + 12] == 0
		) {
			seaBatle[randomC] = this.value;
			seaBatle[randomC + 1] = this.value;
			document.getElementById(`coordinates${coordinates[randomC]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomC + 1]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			console.log(this.max - 10 + 8);
		}
		else {
			// если инструкции выше не сработает повторить
			this.sayDeckC();
		}
	}


	sayDeckB() {
		let randomB = Math.floor(Math.random() * (0,  99)) + 1;
		let randomBWS = Math.floor(Math.random() * (0,  2) + 1);
			if (
				randomB < 79 &&
				randomBWS == 1 &&
				seaBatle[randomB] == 0 &&
				seaBatle[randomB + 1] == 0 &&
				seaBatle[randomB - 1] == 0 &&
				seaBatle[randomB + 9] == 0 &&
				seaBatle[randomB - 9] == 0 &&
				seaBatle[randomB + 10] == 0 &&
				seaBatle[randomB - 10] == 0 &&
				seaBatle[randomB + 11] == 0 &&
				seaBatle[randomB - 11] == 0 &&
				seaBatle[randomB + 19] == 0 &&
				seaBatle[randomB + 20] == 0 &&
				seaBatle[randomB + 21] == 0 &&
				seaBatle[randomB + 29] == 0 &&
				seaBatle[randomB + 30] == 0 &&
				seaBatle[randomB + 31] == 0

			) {
				seaBatle[randomB] = this.value;
				seaBatle[randomB + 10] = this.value;
				seaBatle[randomB + 20] = this.value;
				document.getElementById(`coordinates${coordinates[randomB]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
				document.getElementById(`coordinates${coordinates[randomB + 10]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
				document.getElementById(`coordinates${coordinates[randomB + 20]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;			
		}
		else if (
				randomB < this.max - 10 + 6 &&
				randomBWS == 2 &&
				seaBatle[randomB] == 0 &&
				seaBatle[randomB + 1] == 0 &&
				seaBatle[randomB - 1] == 0 &&
				seaBatle[randomB + 9] == 0 &&
				seaBatle[randomB - 9] == 0 &&
				seaBatle[randomB + 10] == 0 &&
				seaBatle[randomB - 10] == 0 &&
				seaBatle[randomB + 11] == 0 &&
				seaBatle[randomB - 11] == 0 &&
				seaBatle[randomB - 8] == 0 &&
				seaBatle[randomB + 2] == 0 &&
				seaBatle[randomB + 12] == 0 &&
				seaBatle[randomB - 7] == 0 &&
				seaBatle[randomB + 3] == 0 &&
				seaBatle[randomB + 13] == 0
			) {
			seaBatle[randomB] = this.value;
			seaBatle[randomB + 1] = this.value;
			seaBatle[randomB + 2] = this.value;
			document.getElementById(`coordinates${coordinates[randomB]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomB + 1]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomB + 2]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
		}
		else {
			this.sayDeckB();
		}
	}

	sayDeckA () {
		let randomA = Math.floor(Math.random() * (0,  99)) + 1;
		let randomAWS = Math.floor(Math.random() * (0,  2) + 1);

		if (
			randomA < 69 &&
			randomAWS == 1 
			) {
			seaBatle[randomA] = this.value;
			seaBatle[randomA + 10] = this.value;
			seaBatle[randomA + 20] = this.value;
			seaBatle[randomA + 30] = this.value;

			document.getElementById(`coordinates${coordinates[randomA]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomA + 10]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomA + 20]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomA + 30]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;

		}

		else if (
			randomA < this.max - 10 + 5 &&
			randomAWS == 2
			) {
			seaBatle[randomA] = this.value;
			seaBatle[randomA + 1] = this.value;
			seaBatle[randomA + 2] = this.value;
			seaBatle[randomA + 3] = this.value;

			document.getElementById(`coordinates${coordinates[randomA]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomA + 1]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomA + 2]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`coordinates${coordinates[randomA + 3]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
		}
		else {
			this.sayDeckA();
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
	for(let i = 0; i < 1; i ++) {
		// присваевает deck кораблю class
		let item  = shipA.deck;
		let shipDeckA = new ShipDeck(item, 'seaMillA');
		shipDeckA.sayDeckA();
	};

	for(let i = 0; i < 2; i ++) {
			let item  = shipB.deck;
			let shipDeckB = new ShipDeck(item, 'seaMillB');
			shipDeckB.sayDeckB();
	}

	for(let i = 0; i < 3; i ++) {
			let item  = shipC.deck;
			let shipDeckC = new ShipDeck(item, 'seaMillC');
			shipDeckC.sayDeckC();
	}

	for(let i = 0; i < 4; i ++) {
		let item  = shipD.deck;
		let shipDeckD = new ShipDeck(item, 'seaMillD');
		shipDeckD.sayDeck();
	}
	console.log(seaBatle);
}