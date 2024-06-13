 /** Menú hamburguesa */
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

/**Validación javasctript formulario */

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, introduce un email válido');
        return;
    }

    alert('Formulario enviado correctamente');
    document.getElementById('contactForm').reset();
});

/* JSON */


document.addEventListener('DOMContentLoaded', function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsGrid = document.getElementById('projects-grid');
            data.projects.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');
                
                const projectTitle = document.createElement('h3');
                const projectLink = document.createElement('a');
                projectLink.href = project.url;
                projectLink.target = '_blank';
                projectLink.textContent = project.title;
                projectTitle.appendChild(projectLink);
                
                const projectDesc = document.createElement('p');
                projectDesc.textContent = project.description;

                const projectImage = document.createElement('img');
                projectImage.src = project.image;
                projectImage.alt = project.title;
                projectImage.classList.add('img-project');

                projectDiv.appendChild(projectTitle);
                projectDiv.appendChild(projectDesc);
                projectDiv.appendChild(projectImage);

                projectsGrid.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error cargando los proyectos:', error));
});
