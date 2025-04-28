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
    const socialLinksContainer = document.getElementById('social-links');
    const links = data.links;

    const icons = {
      linkedinLink: 'fab fa-linkedin',
      facebookLink: 'fab fa-facebook',
      githubLink: 'fab fa-github'
    };

    // Loop through the links array and create anchor elements
    for (const link of links) {
      const anchor = document.createElement('a');
      anchor.href = Object.values(link)[0]; // Get the URL
      // anchor.textContent = Object.keys(link)[0].replace('Link', ''); // Get the platform name
      anchor.target = '_blank'; // Open in a new tab
      anchor.className = 'social-link';
      const icon = document.createElement('i');
      icon.className = icons[platform]; // Use the appropriate icon class
      anchor.appendChild(icon);
      socialLinksContainer.appendChild(anchor);
    }
  })
  .catch(error => console.error('Error loading data:', error));

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
