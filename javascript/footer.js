
let make_footer_link = function (links, name, link) {
	let list_element = document.createElement('li');
	let link_element = document.createElement('a');
	link_element.textContent=name;
	link_element.setAttribute('href',link);
	link_element.setAttribute('target','_blank');
	list_element.appendChild(link_element);
	links.appendChild(list_element);
};


let footer_func = function () {
	let placement = document.getElementById('footerPlacement');
	let footer = document.createElement('div');
	let links = document.createElement('ul');
	let mailto = document.createElement('li');
	let mailto_link = document.createElement('a');
	footer.setAttribute('id', 'footer');
	mailto_link.textContent="Email";
	mailto_link.setAttribute('href','mailto:benjaminyu@yubenjamin.com');
	mailto.appendChild(mailto_link);
	links.appendChild(mailto);
	make_footer_link(links,'Resume','./documents/BenjaminYuResume.pdf');
	make_footer_link(links,'LinkedIn','https://www.linkedin.com/in/benjamin-yu-98592096/');
	make_footer_link(links,'GitHub','https://github.com/benjaminyu7');
	make_footer_link(links,'YouTube','https://www.youtube.com/channel/UCzChIC0sJ0SZw6nETDi35oA');
	footer.appendChild(links);
	placement.appendChild(footer);
};
footer_func();
