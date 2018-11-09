let header_funct = function () {
	let header = document.getElementById('header');
	let name = document.createElement('h1');
	name.textContent="Benjamin Yu";
	let technicalWriting = document.createElement('a');
	technicalWriting.textContent='Technical Writing';
	technicalWriting.setAttribute('href','technicalWriting.html');
	header.appendChild(name);
	header.appendChild(technicalWriting);
};