let header_funct = function () {
	let nameLink = document.createElement('a');
	nameLink.textContent="Benjamin Yu";
	nameLink.setAttribute('href','index.html');
	nameLink.setAttribute('id','name');

	let technicalWriting = document.createElement('a');
	technicalWriting.textContent='Technical Communication';
	technicalWriting.setAttribute('href','technicalWriting.html');

	let personalBrandApp = document.createElement('a');
	personalBrandApp.textContent='About Me';
	personalBrandApp.setAttribute('href','personalbrandapp');

	let header = document.getElementById('header');
	header.appendChild(nameLink);
	header.appendChild(technicalWriting);
	header.appendChild(personalBrandApp);
};
