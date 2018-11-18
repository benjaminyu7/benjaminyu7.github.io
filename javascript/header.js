let header_funct = function () {
	let header = document.getElementById('header');
	let nameLink = document.createElement('a');
	nameLink.textContent="Benjamin Yu";
	nameLink.setAttribute('href','index.html');
	nameLink.setAttribute('id','name');
	let technicalWriting = document.createElement('a');
	technicalWriting.textContent='Technical Writing';
	technicalWriting.setAttribute('href','technicalWriting.html');
	header.appendChild(nameLink);
	header.appendChild(technicalWriting);
};
