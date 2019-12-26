const arr = [
	'Hey, Im hack your computer, and i secure your data!!\n',
	'HH :D'
];
function typeText(){
	let line = 0;
	let count = 0;
	let out = '';
	let htmlOut = document.querySelector('.out');

	function typeLine(){
		let interval = setTimeout(function(){
			out += arr[line][count];
			htmlOut.innerHTML = out + '|';
			count++;
			if (count >= arr[line].length){
				count = 0;
				line++;
				if (line === arr.length){
					clearTimeout(interval);
					htmlOut.innerHTML = out;
					return true;
				}
			}
			typeLine();
		}, getRandomInt(350));
	}
	typeLine();
}
function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}
typeText();