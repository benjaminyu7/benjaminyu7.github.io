/* Creates a ul with list items 
 * items = text items
 * attribute = sets an attribute
 * attribute_name = value to set the attribute
 */
let createList = function(items, attribute, attribute_name){
	let listWrapper = document.createElement('ul');
	listWrapper.setAttribute(attribute,attribute_name);
	for ( var x in items) {
		let element = document.createElement('li');
		element.textContent=items[x];
		listWrapper.appendChild(element);
	}
	return listWrapper;
}

let Experience = function (title, locat, date, tasks, technologies) {
	this.title = title;
	this.locat=locat;
	this.date=date;
	this.tasks=tasks;
	this.technologies=technologies;
	this.make_resume_item = function () {
		let content=document.getElementById('content');
		let wrapper = document.createElement('div');
		wrapper.setAttribute('class', 'ResumeItem');
		let title = document.createElement('h3');
		title.textContent=this.title;
		let date = document.createElement('h4');
		date.textContent=this.date;
		let address = document.createElement('p');
		address.textContent=this.locat;
		let resumeTasks = createList(this.tasks,'class', 'ResumeDuties');
		let resumeSkills = createList(this.technologies, 'class', 'ResumeSkills');
		wrapper.appendChild(title);
		wrapper.appendChild(date);
		wrapper.appendChild(address);
		wrapper.appendChild(resumeTasks);
		wrapper.appendChild(resumeSkills);
		content.appendChild(wrapper);
	};
	return this;
}

/* Creates a resume item and add it to the content id
 * newTitle=Title of item
 * locat=Location of the job/project
 * newDate=date that the activity happened
 * tasks=list of tasks
 * technologies=list of technologies used
 */
let make_resume_item = function (newTitle, locat, newDate, tasks, technologies) {
	let content=document.getElementById('content');
	let wrapper = document.createElement('div');
	wrapper.setAttribute('class', 'ResumeItem');
	let title = document.createElement('h3');
	title.textContent=newTitle;
	let date = document.createElement('h4');
	date.textContent=newDate;
	let address = document.createElement('p');
	address.textContent=locat;
	let resumeTasks = createList(tasks,'class', 'ResumeDuties');
	let resumeSkills = createList(technologies, 'class', 'ResumeSkills');
	wrapper.appendChild(title);
	wrapper.appendChild(date);
	wrapper.appendChild(address);
	wrapper.appendChild(resumeTasks);
	wrapper.appendChild(resumeSkills);
	content.appendChild(wrapper);
}
