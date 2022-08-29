const characterCount = document.getElementbyId('cCount');
const wordsCount = document.getElementbyId('wCount');
const texArea = document.getElementbyId('content');

texArea.oninput = () => {
	let characters = texArea.value;
	characterCount.textContent = characters.replace(/\s/g,'')length
	
	let words = texArea.value.split(' ').filter((item) => {
		return item != '';
		});
		wordsCount.textContent = words.length;
};