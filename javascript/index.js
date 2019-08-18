/* import header.js
 * import resume.js
 * import index.js
 */

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
		let biography = document.getElementById('bio');
		biography.textContent = parsed.biography;

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


