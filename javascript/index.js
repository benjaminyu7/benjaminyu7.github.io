/* import header.js
 * import resume.js
 * import index.js
 */

let description = function () {
	let content = document.getElementById('content');
	let description = document.createElement('p');
	description.textContent='I am a Stony Brook University student looking to graduate in May 2019. I am looking for full time opportunities after graduation. I am currently a High Performance Computing Engineer at the Institution for Advanced Computational Sciences with a strong understanding of distributed system and customer support experience.';
	content.appendChild(description);
};

let sectionHeader = function (title) {
	let content = document.getElementById('content');
	let sectionTitle = document.createElement('h2');
	sectionTitle.textContent=title;
	sectionTitle.setAttribute('class','section');
	content.appendChild(sectionTitle);
}

header_funct();

fetch("./documents/resume.json")
	.then(response => response.json())
	.then(parsed => {
		sectionHeader('Work Experience');
		for (let experience in parsed.workExperiences) {
			experience = parsed.workExperiences[experience];
			let resumeItem = new Experience(experience.title, experience.location, experience.dates, experience.tasks, experience.technologies);
			resumeItem.make_resume_item();
		}

		sectionHeader('Education');
		let education = parsed.education;
		let educationItem = new Experience(education.school, education.degree, education.graduationDate, education.courses, []);
		educationItem.make_resume_item();

		sectionHeader('Projects');
		for (let project in parsed.projects) {
			project = parsed.projects[project];
			let resumeItem = new Experience(project.title, "", project.dates, project.tasks, project.technologies);
			resumeItem.make_resume_item();
		}
	});


