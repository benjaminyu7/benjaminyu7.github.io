let header_funct = function () {
	let header = document.getElementById('header');
	let nameLink = document.createElement('a');
	nameLink.textContent="Benjamin Yu";
	nameLink.setAttribute('href','index.html');
	nameLink.setAttribute('id','name');
	header.appendChild(nameLink);

	let links = [
		{link: '/personalbrandapp/#/blog', text: 'Blog'},
		{link: '/personalbrandapp/#/contact', text: 'Contact Me'}
	]
	links.map((link)=> {
			let linkElement = document.createElement('a');
			linkElement.textContent=link.text;
			linkElement.setAttribute('href',link.link);
			header.appendChild(linkElement);
		}
	)
};
