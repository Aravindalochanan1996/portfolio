fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('profile-pic').src = data.profilePhoto;
    document.getElementById('name').textContent = data.name;
    document.getElementById('about-text').textContent = data.about;
    document.getElementById('email').textContent = data.email;

    const projectsList = document.getElementById('projects-list');
    data.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      projectsList.appendChild(projectCard);
    });
  })
  .catch(error => console.error('Error loading data:', error));

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
