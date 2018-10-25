
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
	let footer = document.getElementById('footer');
	let links = document.createElement('ul');
	let mailto = document.createElement('li');
	let mailto_link = document.createElement('a');
	mailto_link.textContent="Email";
	mailto_link.setAttribute('href','mailto:benjaminyu.741@gmail.com')
	mailto.appendChild(mailto_link);
	links.appendChild(mailto);
	make_footer_link(links, 'Resume', './documents/BenjaminYuResume.pdf');
	make_footer_link(links, 'LinkedIn', 'https://www.linkedin.com/in/benjamin-yu-98592096/');
	footer.appendChild(links);
};