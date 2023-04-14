const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('button');


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    sections.forEach((section, sectionIndex) => {
      if (button.name === "Apply") {
        button.addEventListener('click', () => {
          changeTheme('theme.css');
        });
      } else {
        section.style.display = index === sectionIndex ? 'block' : 'none';
      }
    });
  });
});



function changeTheme(href) {
  const link = document.querySelector(`link[href="${href}"]`);
  if (link) {
    link.remove();
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.type = 'text/css';
    newLink.href = href;
    document.getElementsByTagName('head')[0].appendChild(newLink);
  }
}
