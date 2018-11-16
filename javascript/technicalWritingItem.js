let make_writing_item = function (imageSrc, titleTxt, descriptionTxt) {
	let content=document.getElementById('content');
	let wrapper = document.createElement('div');
	wrapper.setAttribute('class','TechWriteItem');

	let image = document.createElement('img');
	image.setAttribute('src',imageSrc);
	image.setAttribute('alt',titleTxt);
	image.setAttribute('style','width:200px; height:200px; border-radius: 50%');


	let title = document.createElement('h3');
	title.textContent=titleTxt;

	let description = document.createElement('p');
	description.textContent = descriptionTxt;

	wrapper.appendChild(image);
	wrapper.appendChild(title);
	wrapper.appendChild(description);
	content.appendChild(wrapper);
}
