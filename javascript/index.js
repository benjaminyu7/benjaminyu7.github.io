let header_funct = function () {
	let header = document.getElementById('header');
	let name = document.createElement('h1');
	name.textContent="Benjamin Yu";
	header.appendChild(name);
};

let description = function () {
	let content = document.getElementById('Content');
	let description = document.createElement('p');
	description.textContent='I am a Stony Brook University student looking to graduate in May 2019. I am looking for full time opportunities after graduation. I am currently a High Performance Computing Engineer at the Institution for Advanced Computational Sciences with a strong understanding of distributed system and customer support experience.';
	content.appendChild(description);
};

let make_footer_link = function (links, name, link) {
	let list_element = document.createElement('li');
	let link_element = document.createElement('a');
	link_element.textContent=name;
	link_element.setAttribute('href',link);
	link_element.setAttribute('target','_blank');
	list_element.appendChild(link_element);
	links.appendChild(list_element);
}

let footer_func = function () {
	let footer = document.getElementById('footer');
	let links = document.createElement('ul');
	let mailto = document.createElement('li');
	let mailto_link = document.createElement('a');
	mailto_link.textContent="Email";
	mailto_link.setAttribute('href','mailto:benjaminyu.741@gmail.com')
	mailto.appendChild(mailto_link);
	links.appendChild(mailto);
	make_footer_link(links, 'Resume', '../documents/BenjaminYuResume.pdf');
	make_footer_link(links, 'LinkedIn', 'https://www.linkedin.com/in/benjamin-yu-98592096/');
	footer.appendChild(links);
};

let sideMenu = function () {
	let content = document.getElementById('Content');
	let menu = document.createElement('ul');
	menu.setAttribute('id','menu');
	let experience = document.createElement('li');
	experience.textContent="Experience";
	let projects = document.createElement('li');
	projects.textContent="Projects";
	menu.appendChild(experience);
	menu.appendChild(projects);
	content.appendChild(menu);
}

header_funct();
sideMenu();
description();
footer_func();
