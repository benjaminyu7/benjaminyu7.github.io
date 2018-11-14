let description = function () {
	let content = document.getElementById('content');
	let description = document.createElement('p');
	description.textContent='I am a Stony Brook University student looking to graduate in May 2019. I am looking for full time opportunities after graduation. I am currently a High Performance Computing Engineer at the Institution for Advanced Computational Sciences with a strong understanding of distributed system and customer support experience.';
	content.appendChild(description);
};

let section = function (title) {
	let content = document.getElementById('content');
	let sectionTitle = document.createElement('h2');
	sectionTitle.textContent=title;
	sectionTitle.setAttribute('class','section');
	content.appendChild(sectionTitle);
}

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
section('Work Experience');
let hpc_engineer= new Experience('High Performance Computing Engineer', 'Institution for Advanced Computational Science', 'May 2018 - Present',['Implemented unit tests to automate software environment maintenance of over 100 open source and enterprise applications in a parallel file system on CentOS Linux','Convert code to run in parallel using multiple nodes and cores','Resolved hundreds of Customer Service tickets by troubleshooting and debugging system issues'], ['Bash','Python','CentOS','GPFS','Torque']); 
hpc_engineer.make_resume_item();
make_resume_item('Teaching Assistant','Stony Brook University','Jan - May 2018',['Course: Foundations of Logic and Mathematics in Computer Science','Taught recitation classes for 80 students and hosted review sessions'],[]);
section('Projects');
make_resume_item('Synchronized To-do List', '','Summer 2018', ['Online to-do list accessible across mobile and web clients, allowing users to retrieve and update their list globally.'],['React-Native', 'React.js', 'Ajax', 'Html', 'CSS', 'AWS', 'PHP', 'MySql', 'Git']);
make_resume_item('System Storage','','Spring 2018',['Simulation of low level memory with concurrent memory access, caching and paging.'],['C']);
make_resume_item('Game Win Predictor', '', 'Spring 2018', ['Implemented Machine Learning Models to predict wins from character selection and game mode with 60% Accuracy.'],['Python','Tensorflow']);
make_resume_item('Subway Map Maker','','Fall 2017',['Desktop GUI Application to build maps, allowing users to add/drag objects, undo/redo, saving/loading, etc.'],['Java']);
footer_func();
