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

// отрисовка блоков  
for(let i = 0; i < 100; i++ ) {
		document.getElementById('user').innerHTML += `<div class="seaMill " value="${seaBatle[i]}"></div>`;
}

function start() {
		let num = Math.floor(Math.random() * (0,  99)) + 1;
		seaBatle[num] = 4;
		console.log(seaBatle);
}