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

// отрисовка блоков 
for(let i = 0; i < 100; i++ ) {
	document.getElementById('user').innerHTML += `<div class='seaMill' id='coordinates${coordinates[i]}'></div>`;
}
		// clsss для поиска свободного места в коорденате seaBatle
class ShipDeck {

	constructor(asd) {
		this.asd = asd;
	}

	sayDeck () {
		let num = Math.floor(Math.random() * (0,  99)) + 1;
		if (
			seaBatle[num] == 0 &&
			seaBatle[num + 1] == 0 &&
			seaBatle[num - 1] == 0 &&
			seaBatle[num - 9] == 0 &&
			seaBatle[num + 9] == 0 &&
			seaBatle[num + 10] == 0 &&
			seaBatle[num - 10] == 0 &&
			seaBatle[num - 11] == 0 &&
			seaBatle[num + 11] == 0 
			) 
		{
			seaBatle[num] = shipD.deck;
			document.getElementById(`coordinates${coordinates[num]}`).innerHTML += "<div class='seaMillD'></div>";
		}else {
			this.sayDeck();
		}
	}
}


// страт и размищение кораблей
function start (){
	let deck10 = 10;
	let deck20 = 20;
	let deck30 = 30;
	reset++
		// перезагрузка страницы если корабли уже размещены. проверка не очевидна но пока сойдет
	if(reset > 2) {
		document.location.reload();
	}
	// for определяет кол-во палуб
	for(let i = 1; i <= 1; i ++) {
		// рандом определяет коорденаты
		const numA = Math.floor(Math.random() * (0,  99));
		// проверка наличия корабля в коорденатях
		if(seaBatle[numA] == 0) {
			// это понадобиться для определени  статуса корабля
			seaBatle[numA] = shipA.deck;
			// размещения кораблей 
			document.getElementById(`coordinates${coordinates[numA]}`).innerHTML += "<div class='seaMillA'></div>";
				// размещение deck 
			if(seaBatle[numA + deck10 ] == 0 ){
				// это бонадобиться для определени  статуса корабля
				seaBatle[numA + deck10 ] = shipA.deck;
				// размещения deck 
				document.getElementById(`coordinates${coordinates[numA + deck10]}`).innerHTML += "<div class='seaMillA'></div>";

				if(seaBatle[numA + deck20 ] == 0){
					seaBatle[numA + deck20 ] = shipA.deck;
					document.getElementById(`coordinates${coordinates[numA + deck20]}`).innerHTML += "<div class='seaMillA'></div>";

					if(seaBatle[numA + deck30 ] == 0) {
						seaBatle[numA + deck30 ] = shipA.deck;
						document.getElementById(`coordinates${coordinates[numA + deck30]}`).innerHTML += "<div class='seaMillA'></div>";
					}
				}
			}
		} 

	};

	for(let i = 1; i <= 2; i ++) {
		const numB = Math.floor(Math.random() * (0,  99)) + 1;
		if(seaBatle[numB] == 0) {
			seaBatle[numB] = shipB.deck;
			document.getElementById(`coordinates${coordinates[numB]}`).innerHTML += "<div class='seaMillB'></div>";
			if(seaBatle[numB + deck10 ] == 0 ){
				seaBatle[numB + deck10 ] = shipA.deck;
				document.getElementById(`coordinates${coordinates[numB + deck10]}`).innerHTML += "<div class='seaMillB'></div>";

				if(seaBatle[numB + deck20 ] == 0){
					seaBatle[numB + deck20 ] = shipA.deck;
					document.getElementById(`coordinates${coordinates[numB + deck20]}`).innerHTML += "<div class='seaMillB'></div>";
				}
			}
		}
	}

	for(let i = 1; i <= 3; i ++) {
		const numC = Math.floor(Math.random() * (0,  99)) + 1;
		if(seaBatle[numC] == 0) {
			seaBatle[numC] = shipC.deck;
			document.getElementById(`coordinates${coordinates[numC]}`).innerHTML += "<div class='seaMillC'></div>";
			if(seaBatle[numC + deck10 ] == 0 ){
				seaBatle[numC + deck10 ] = shipA.deck;
				document.getElementById(`coordinates${coordinates[numC + deck10]}`).innerHTML += "<div class='seaMillC'></div>";
			}
		}
	}

	for(let i = 1; i <= 4; i ++) {
		let item  = shipD.deck;
		let shipDeckD = new ShipDeck(item);
		shipDeckD.sayDeck();
	}
	console.log(seaBatle);
}