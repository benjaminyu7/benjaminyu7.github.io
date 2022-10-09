/**
 * When a writing item is displayed on the technical writing page it displays an styled image, title, description and link to the document
 */
let make_writing_item = function (imageSrc, titleTxt, descriptionTxt, linkDoc) {
	let content=document.getElementById('content');
	let wrapper = document.createElement('div');
	wrapper.setAttribute('class','TechWriteItem');
	wrapper.setAttribute('style',
		'margin-bottom: 20px; \
		width: 760px; \
		align-self: center; \
		padding-left: 20px; \
		border-radius: 240px; \
		background: #E5F4E3;');

	let image = document.createElement('img');
	image.setAttribute('src',imageSrc);
	image.setAttribute('alt',titleTxt);
	image.setAttribute('style',
		'width:200px; \
		height:200px; \
		border-radius: 50%; \
		margin-top: 20px; \
		margin-bottom: 20px');

	let title = document.createElement('h3');
	title.textContent=titleTxt;

	let description = document.createElement('p');
	description.textContent = descriptionTxt;
	
	let text = document.createElement('div');
	text.setAttribute('style',
		'margin-left: 30px; \
		align-self: center; \
		width: 450px; \
		color: 292F36');
	text.appendChild(title);
	text.appendChild(description);

	let link = document.createElement('a');
	link.setAttribute('style',
		'display: flex; \
		text-decoration: none;');
	link.setAttribute('href', linkDoc);
	link.setAttribute('target','_blank');

	wrapper.appendChild(link);
	link.appendChild(image);
	link.appendChild(text);
	content.appendChild(wrapper);
};
