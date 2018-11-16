let make_writing_item = function (image, title, description) {
	let content=document.getElementById('content');
	let wrapper = document.createElement('div');
	wrapper.setAttribute('class','TechWriteItem');

	let image = document.createElement('img');
	image.setAttribute(src,image);
	image.setAttribute(alt,title);
	image.setAttribute(style,'width:200px; height:200px; border-radius: 50%');


	let title = document.createElement('h3');
	title.textContent=title;

	let description = document.createElement('p');
	description.textContent = description;

	wrapper.appendChild(image, title, description);
	content.appendChild(wrapper);
}
