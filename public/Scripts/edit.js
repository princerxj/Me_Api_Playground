function addSkill() {
  const container = document.getElementById("skills-container");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "skills[]";
  input.placeholder = "Add new skill";
  container.appendChild(input);
}
function addJob() {
  const container = document.getElementById("work-container");
  const idx = container.children.length;
  const div = document.createElement("div");
  div.className = "job";
  div.innerHTML = `
            <label>Job Title:</label>
            <input type="text" name="workExperience[${idx}][jobTitle]" required />
            <label>Company:</label>
            <input type="text" name="workExperience[${idx}][company]" required />
            <label>Location:</label>
            <input type="text" name="workExperience[${idx}][location]" required />
            <label>Start Date:</label>
            <input type="date" name="workExperience[${idx}][startDate]" required />
            <label>End Date:</label>
            <input type="date" name="workExperience[${idx}][endDate]" />
            <label>Description:</label>
            <textarea name="workExperience[${idx}][description]" maxlength="1000"></textarea>
          `;
  container.appendChild(div);
}
