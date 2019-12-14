/**
 * When an item is created for the resume page it displays a styled title, 
 * location of the item, dates for the item, responsible tasks and technologies used
 * @param {*} title 
 * @param {*} locat 
 * @param {*} date 
 * @param {*} tasks 
 * @param {*} technologies 
 */
let Experience = function (title, locat, date, tasks, technologies) {
	this.title = title;
	this.locat=locat;
	this.date=date;
	this.tasks=tasks;
	this.technologies=technologies;

	this.make_resume_item = function () {
		let wrapper = document.createElement('div');
		wrapper.setAttribute('class', 'ResumeItem');

		let title = document.createElement('h3');
		title.textContent=this.title;
		wrapper.appendChild(title);

		let date = document.createElement('h4');
		date.textContent=this.date;
		wrapper.appendChild(date);

		let address = document.createElement('p');
		address.textContent=this.locat;
		wrapper.appendChild(address);

		let resumeTasks = this.createList(this.tasks,'class', 'ResumeDuties');
		wrapper.appendChild(resumeTasks);

		let resumeSkills = this.createList(this.technologies, 'class', 'ResumeSkills');
		wrapper.appendChild(resumeSkills);

		let content=document.getElementById('content');
		content.appendChild(wrapper);
	};

	/* Creates a ul with list items horizontally
	* @items = text items
	* @attribute = sets an attribute
	* @attribute_name = value to set the attribute
	*/
	this.createList = function(items, attribute, attribute_name){
		let listWrapper = document.createElement('ul');
		listWrapper.setAttribute(attribute,attribute_name);
		for ( var x in items) {
			let element = document.createElement('li');
			element.textContent=items[x];
			listWrapper.appendChild(element);
		}

		return listWrapper;
	}

	return this;
}