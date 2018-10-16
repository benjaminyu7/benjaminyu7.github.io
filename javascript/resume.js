let Experience = function (title, locat, date, tasks, technologies) {
	this.title = title;
	this.locat=locat;
	this.date=date;
	this.tasks=tasks;
	this.technologies=technologies;
	this.toHtml=function (id) {}
}

let make_resume_item = function (title, locat, date, tasks, technologies) {
	let content=document.getElementById('content');
	let wrapper = document.createElement('div');
	let title = document.createElement('h3');
	let date = document.createElement('h4');
	let address = document.createElement('p');
	let resumeTasks = document.createElement('ul');
}
