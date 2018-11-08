let userName = prompt('Введите ваше имя.', '');

const shipA = {deck: 4 }

const shipB = {deck: 3}

const shipC = {deck: 2}

const shipD = {deck: 1}

let fireComp;
let fireUser;

const hundred100 = 100;
const hundred0 = 0;

const sea = [];
const coordinates = [];

function newSea() {
	for (i = 0; i < 200; i++) {
		 sea.push(0);
	}

}

function newCoordinates () {
	for (i = 0; i < 200; i++) {
		 coordinates.push(i);
	}
}


// name и name оп умолчанию
function greet(name) {
	return name? name : 'геймер';
}

let Name = greet(userName); // глобальное name
document.getElementById('massenge').innerHTML = `${Name}, привет. Давай играть - кликни по кнопке Start! `; //приветсвие


// clsss для поиска свободного места в коорденате seaBatle
class ShipDeck {

	constructor(value, seaMillN, player, hundred) {
		this.value = value; //количество палуб
		this.seaMillN = seaMillN; //ID клетки
		this.max = Math.floor(Math.random() * (1,  9)) * 10 ; // для определения расстояния по правому краю поля
		this.player = player; // класс в который будет вставлен this.SeaMillN
		this.sea = sea;
		this.hundred = hundred;

	}

	sayDeck () {
		let num = Math.floor(Math.random() * (0,  99) + this.hundred);
		if (
			this.sea[num] == 0 &&
			this.sea[num + 1] == 0 &&
			this.sea[num - 1] == 0 &&
			this.sea[num + 9] == 0 &&
			this.sea[num - 9] == 0 &&
			this.sea[num + 10] == 0 &&
			this.sea[num - 10] == 0 &&
			this.sea[num + 11] == 0 &&
			this.sea[num - 11] == 0
			) {
			this.sea[num] = this.value; //заменить 0 на количество deck
			document.getElementById(`${this.player}${coordinates[num]}`).innerHTML += `<div class='${this.seaMillN}'></div>`; //вывести div

		}else {
			this.sayDeck();
		}
	}


	sayDeckC() {
		// определяет коорденаты
		let randomC = Math.floor(Math.random() * (0,  99)+ this.hundred);
		// определяет положения относительно sea
		let randomCWS = Math.floor(Math.random() * (0,  2)) + 1; // 1 верикальною, 2 вертикально
			if (
			randomC < 89 + this.hundred &&  //проверка на росcтояния снизу
			randomCWS == 1 &&  // определяет положения относительно sea 
			// проверка sea на свободные места
			this.sea[randomC] == 0 &&
			this.sea[randomC + 1] == 0 &&
			this.sea[randomC - 1] == 0 &&
			this.sea[randomC + 9] == 0 &&
			this.sea[randomC - 9] == 0 &&
			this.sea[randomC + 10] == 0 &&
			this.sea[randomC - 10] == 0 &&
			this.sea[randomC + 11] == 0 &&
			this.sea[randomC - 11] == 0 &&
			this.sea[randomC + 19] == 0 &&
			this.sea[randomC + 20] == 0 &&
			this.sea[randomC + 21] == 0

		) {
			// присвоение точке в sea значения ship
			this.sea[randomC] = this.value;
			this.sea[randomC + 10] = this.value;
			// отрисовка ship на экране (coordinates) 
			document.getElementById(`${this.player}${coordinates[randomC]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomC + 10]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;

				
		}
		else if (
			randomC <= this.max - 10 + 9 + this.hundred &&
			randomCWS == 2 &&
			this.sea[randomC] == 0 &&
			this.sea[randomC + 1] == 0 &&
			this.sea[randomC - 1] == 0 &&
			this.sea[randomC + 9] == 0 &&
			this.sea[randomC - 9] == 0 &&
			this.sea[randomC + 10] == 0 &&
			this.sea[randomC - 10] == 0 &&
			this.sea[randomC + 11] == 0 &&
			this.sea[randomC - 11] == 0 &&
			this.sea[randomC - 8] == 0 &&
			this.sea[randomC + 2] == 0 &&
			this.sea[randomC + 12] == 0
		) {
			this.sea[randomC] = this.value;
			this.sea[randomC + 1] = this.value;
			document.getElementById(`${this.player}${coordinates[randomC]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomC + 1]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
		}
		else {
			// если инструкции выше не сработает повторить
			this.sayDeckC();
		}
	}


	sayDeckB() {
		let randomB = Math.floor(Math.random() * (0,  99) + this.hundred);
		let randomBWS = Math.floor(Math.random() * (0,  2)) + 1;
			if (
				randomB < 80 + this.hundred &&
				randomBWS == 1 &&
				this.sea[randomB] == 0 &&
				this.sea[randomB + 1] == 0 &&
				this.sea[randomB - 1] == 0 &&
				this.sea[randomB + 9] == 0 &&
				this.sea[randomB - 9] == 0 &&
				this.sea[randomB + 10] == 0 &&
				this.sea[randomB - 10] == 0 &&
				this.sea[randomB + 11] == 0 &&
				this.sea[randomB - 11] == 0 &&
				this.sea[randomB + 19] == 0 &&
				this.sea[randomB + 20] == 0 &&
				this.sea[randomB + 21] == 0 &&
				this.sea[randomB + 29] == 0 &&
				this.sea[randomB + 30] == 0 &&
				this.sea[randomB + 31] == 0

			) {
				this.sea[randomB] = this.value;
				this.sea[randomB + 10] = this.value;
				this.sea[randomB + 20] = this.value;
				document.getElementById(`${this.player}${coordinates[randomB]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
				document.getElementById(`${this.player}${coordinates[randomB + 10]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
				document.getElementById(`${this.player}${coordinates[randomB + 20]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;			
		}
		else if (
				randomB < this.max - 10 + 8 + this.hundred &&
				randomBWS == 2 &&
				this.sea[randomB] == 0 &&
				this.sea[randomB + 1] == 0 &&
				this.sea[randomB - 1] == 0 &&
				this.sea[randomB + 9] == 0 &&
				this.sea[randomB - 9] == 0 &&
				this.sea[randomB + 10] == 0 &&
				this.sea[randomB - 10] == 0 &&
				this.sea[randomB + 11] == 0 &&
				this.sea[randomB - 11] == 0 &&
				this.sea[randomB - 8] == 0 &&
				this.sea[randomB + 2] == 0 &&
				this.sea[randomB + 12] == 0 &&
				this.sea[randomB - 7] == 0 &&
				this.sea[randomB + 3] == 0 &&
				this.sea[randomB + 13] == 0
			) {
			this.sea[randomB] = this.value;
			this.sea[randomB + 1] = this.value;
			this.sea[randomB + 2] = this.value;
			document.getElementById(`${this.player}${coordinates[randomB]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomB + 1]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomB + 2]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
		}
		else {
			this.sayDeckB();
		}
	}

	sayDeckA () {
		let randomA = Math.floor(Math.random() * (0,  99) + this.hundred);
		let randomAWS = Math.floor(Math.random() * (0,  2)) + 1;

		if (
			randomA <70 + this.hundred &&
			randomAWS == 1 
			) {
			this.sea[randomA] = this.value;
			this.sea[randomA + 10] = this.value;
			this.sea[randomA + 20] = this.value;
			this.sea[randomA + 30] = this.value;

			document.getElementById(`${this.player}${coordinates[randomA]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomA + 10]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomA + 20]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomA + 30]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;

		}

		else if (
			randomA < this.max - 10 + 7 + this.hundred &&
			randomAWS == 2
			) {
			this.sea[randomA] = this.value;
			this.sea[randomA + 1] = this.value;
			this.sea[randomA + 2] = this.value;
			this.sea[randomA + 3] = this.value;

			document.getElementById(`${this.player}${coordinates[randomA]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomA + 1]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomA + 2]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
			document.getElementById(`${this.player}${coordinates[randomA + 3]}`).innerHTML += `<div class='${this.seaMillN}'></div>`;
		}
		else {
			this.sayDeckA();
		}
	}

}

	//создание массива
	newSea();
	newCoordinates();

	cell(); // создание клеток

// страт и размищение кораблей
function start (){

	for (i = 0; i <199; i++ ) {
		sea.pop();
	}

		//создание массива
	newSea();
	newCoordinates();

	cell(); // создание клеток

	let  playerUser =  () => {
			// for определяет кол-во палуб и кораблей
		for(let i = 0; i < 1; i ++) {
			// присваевает deck кораблю class
			let item  = shipA.deck;
			// новый корабль с папаметрами
			let shipDeckA = new ShipDeck(item, 'seaMillA', 'playerUserSea', hundred0);
			shipDeckA.sayDeckA();
		};

		for(let i = 0; i < 2; i ++) {
				let item  = shipB.deck;
				let shipDeckB = new ShipDeck(item, 'seaMillB', 'playerUserSea', hundred0);
				shipDeckB.sayDeckB();
		}

		for(let i = 0; i < 3; i ++) {
				let item  = shipC.deck;
				let shipDeckC = new ShipDeck(item, 'seaMillC', 'playerUserSea', hundred0);
				shipDeckC.sayDeckC();
		}

		for(let i = 0; i < 4; i ++) {
			let item  = shipD.deck;
			let shipDeckD = new ShipDeck(item, 'seaMillD', 'playerUserSea', hundred0);
			shipDeckD.sayDeck();
		}
	}

		let  playerComp =  () => {
			// for определяет кол-во палуб и кораблей
		for(let i = 0; i < 1; i ++) {
			// присваевает deck кораблю class
			let item  = shipA.deck;
			let shipDeckA = new ShipDeck(item, 'seaMill', 'playerCompSea', hundred100);
			shipDeckA.sayDeckA();
		};

		for(let i = 0; i < 2; i ++) {
				let item  = shipB.deck;
				let shipDeckB = new ShipDeck(item, 'seaMill', 'playerCompSea', hundred100);
				shipDeckB.sayDeckB();
		}

		for(let i = 0; i < 3; i ++) {
				let item  = shipC.deck;
				let shipDeckC = new ShipDeck(item, 'seaMill', 'playerCompSea', hundred100);
				shipDeckC.sayDeckC();
		}

		for(let i = 0; i < 4; i ++) {
			let item  = shipD.deck;
			let shipDeckD = new ShipDeck(item, 'seaMill', 'playerCompSea', hundred100);
			shipDeckD.sayDeck();
		}
	}

	// инициализация function выше
	playerUser();
	playerComp();

	goPlay(); // иницализация игрового процесса
}
// создание клеток
function cell () {
	// удалить содержание полей
	document.getElementById("playerUser").innerHTML = `<div class='info'>Корабли ${Name}</div>`
	document.getElementById("playerComp").innerHTML = `<div class='info'>Корабли Компьютер</div>`;
		// отрисовка блоков 
	for(let i = 0; i < 100; i++ ) {
		document.getElementById('playerUser').innerHTML += `<div class='seaMillUser' id='playerUserSea${coordinates[i]}'></div>`;
	}
	for(let i = 0; i < 100; i++ ) {
		document.getElementById('playerComp').innerHTML += `<div class='seaMillComp' id='playerCompSea${coordinates[i + hundred100]}'></div>`;
	}
}

// иницализация игрового процесса
function goPlay () {
	// сообщение для игрока
	document.getElementById('massenge').innerHTML = `Игра начилась! Сейчас ходит игрок: ${Name}.`;
	// переменные игровых полей соотвественно
	const seaMillComp = document.querySelectorAll('.seaMillComp');
	const seaMillUser = document.querySelectorAll('.seaMillUser');
	let victoriesUser = 0; 
	// ход игры начинается с пользователя
	if('user' === 'user') {
		// отслежевание нажатия миши по полю comp
		for (let i = 0; i < seaMillComp.length; i++) {
		    let clickUser = seaMillComp[i];

		    clickUser.onclick = function(e) {
		    	i = i + hundred100;
		    	// сообщение для игрока
	    		document.getElementById('massenge').innerHTML = `Сейчас ходит игрок: ${Name}.`;

    				// если попал по пустой ячейки
    				if(sea[i] == 0)
	    			{
	    				sea[i] = -1	//назначить место 0 = - 1 
	    				document.getElementById(`playerCompSea${i}`).innerHTML = '<div class="dontFire">o</div>'; //указунной ячейки создать div
	    				comp();

	    			}
	    			else if (
	    				sea[i] == 1
	    				) {
	    				sea[i] = -1
	    				victoriesUser ++; // плюс + 1 очко
	    				document.getElementById(`playerCompSea${i}`).innerHTML = '<div class="seaMillD"></div>';
	    			}
	    			else if (
	    				sea[i] == 2
	    				) {
	    				sea[i] = -1
	    				victoriesUser ++;
	    				document.getElementById(`playerCompSea${i}`).innerHTML = '<div class="seaMillC"></div>';
	    			}
	    			else if (
	    				sea[i] == 3
	    				) {
	    				sea[i] = -1
	    				victoriesUser ++;
	    				document.getElementById(`playerCompSea${i}`).innerHTML = '<div class="seaMillB"></div>';
	    			}
	    			else if (
	    				sea[i] == 4
	    				) {
	    				sea[i] = -1
	    				victoriesUser ++ ;
	    				document.getElementById(`playerCompSea${i}`).innerHTML = '<div class="seaMillA"></div>';
	    			}
	    			else if (sea[i] = -1) {
	    				document.getElementById('massenge').innerHTML = `${Name}, стреляй по другой клетке!`;
	    			}
	    			else{
	    				console.log('err: что-то пошло не так!')
	    			}
	    					    // проверка на победу
	    		if (victoriesUser === 20) {
	    			victories('user');	
	    		}
			}
		}
	}
}

 // выстрели comp
function comp() {
	let victoriesComp = 0;
		(()=> {
			let fire  = Math.floor(Math.random() * (0,  99));
			if (
				sea[fire] == 0 //если попал по пустой ячейкиб то ...
				) {
				sea[fire] = -1; // заменить 0 = - 1
				document.getElementById(`playerUserSea${fire}`).innerHTML = '<div class="dontFire">o</div>';
			}
			else if (
				sea[fire] == 1
				) {
				sea[fire] = -1;
				victoriesComp++;
				document.getElementById(`playerUserSea${fire}`).innerHTML = '<div class="fire">x</div>';
				comp();
			}
			else if (
				sea[fire] == 2
				) {
				sea[fire] = -1;
				victoriesComp++;
				document.getElementById(`playerUserSea${fire}`).innerHTML = '<div class="fire">x</div>';
				comp();
			}
			else if (
				sea[fire] == 3
				) {
				sea[fire] = -1;
				victoriesComp++;
				document.getElementById(`playerUserSea${fire}`).innerHTML = '<div class="fire">x</div>';
				comp();
			}
			else if (
				sea[fire] == 4
				) {
				sea[fire] = -1;
				victoriesComp++;
				document.getElementById(`playerUserSea${fire}`).innerHTML = '<div class="fire">x</div>';
				comp();
			}
			else if (sea[fire] == -1) {
				comp();
			} 
			else {
				console.log('err: Что-то пошло не так!');
			}
		})();
	if (victoriesComp === 20) {
		alert('comp');
	} 
};

// фукция проверки на победу 
function victories (victoriesPlayer) {
		// если победил user
	if (victoriesPlayer === 'user') {
		//ниформация о победителе
		document.getElementById('playerUser').innerHTML = `<div class="winnerLoser">${Name} победил!</div>`;
		document.getElementById('playerComp').innerHTML = `<div class="winnerLoser">Компьютер проиграл!</div>`;
		// cell();
	}
		// если победил comp
	else if (victoriesPlayer === 'comp') {
		// cell();
		document.getElementById('playerUser').innerHTML = `<div class="winnerLoser">${Name} проиграл!</div>`;
		document.getElementById('playerComp').innerHTML = `<div class="winnerLoser">Компьютер победил!</div>`;
	}
	else {
		console.log('err: ошибка в выборе победителя.')
	}
};