let projectCount = 1;
let jobCount = 1;

function addSkill() {
  const container = document.getElementById("skills-container");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "skills[]";
  input.placeholder = "Skill";
  container.appendChild(input);
}

function addProject() {
  const container = document.getElementById("projects-container");
  const div = document.createElement("div");
  div.classList.add("project");
  div.innerHTML = `
        <label>Title:</label>
        <input type="text" name="projects[${projectCount}][title]" required>
        <label>Description:</label>
        <textarea name="projects[${projectCount}][description]" required></textarea>
        <label>Link:</label>
        <input type="url" name="projects[${projectCount}][link]" required>
      `;
  container.appendChild(div);
  projectCount++;
}

function addJob() {
  const container = document.getElementById("work-container");
  const div = document.createElement("div");
  div.classList.add("job");
  div.innerHTML = `
        <label>Job Title:</label>
        <input type="text" name="workExperience[${jobCount}][jobTitle]" required>
        <label>Company:</label>
        <input type="text" name="workExperience[${jobCount}][company]" required>
        <label>Location:</label>
        <input type="text" name="workExperience[${jobCount}][location]" required>
        <label>Start Date:</label>
        <input type="date" name="workExperience[${jobCount}][startDate]" required>
        <label>End Date:</label>
        <input type="date" name="workExperience[${jobCount}][endDate]" required>
        <label>Description:</label>
        <textarea name="workExperience[${jobCount}][description]" maxlength="1000"></textarea>
      `;
  container.appendChild(div);
  jobCount++;
}
