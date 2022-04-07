// function runForm () {

//   const form = document.getElementById("my-form");
      
//   async function handleSubmit(e) {
//     e.preventDefault();
//     var status = document.getElementById("my-form-status");
//     var data = new FormData(e.target);
//     fetch(e.target.action, {
//       method: form.method,
//       body: data,
//       headers: {
//           'Accept': 'application/json'
//       }
//     }).then(response => {
//       status.innerHTML = "Thanks for keeping in touch!";
//       form.reset()
//     }).catch(error => {
//       status.innerHTML = "OOP– Let's try that again!"
//     });
//   }
//   form.addEventListener("submit", handleSubmit)

// };

const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');
const link = document.querySelectorAll('.link');
const projects = document.querySelectorAll('.project');

function mouseMovement() {

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // OUTER CURSOR
    cursorOuter.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    // only have the outer cursor appear once there is mouse movement on the page
    cursorOuter.style.opacity = '1';

    // INNER CURSOR
    // able to style the inner cursor using position properties because there's no location transition to worry about
    cursorInner.style.top = `${y}px`;
    cursorInner.style.left = `${x}px`;
  });
};

function clickClack() {
  document.addEventListener('mousedown', (e) => {
    cursorInner.classList.add('click');
  });
  document.addEventListener('mouseup', () => {
    cursorInner.classList.remove('click');
  });
};

function linkHover() {

  link.forEach(link => {
    link.addEventListener('mouseover', () => {
      cursorOuter.classList.add('link-hover-outer');
      cursorInner.classList.add('link-hover-inner');
    });
    link.addEventListener('mouseleave', () => {
      cursorOuter.classList.remove('link-hover-outer');
      cursorInner.classList.remove('link-hover-inner');
    });
  });

};


function cursorProjects() {

  projects.forEach((project, index) => {

    // GENERAL PROJECT CURSOR BEHAVIOUR
    project.addEventListener('mouseover', () => {
      cursorInner.classList.add('project-hover-inner');
      cursorOuter.classList.add('project-hover-outer');
    });
    project.addEventListener('mouseleave', () => {
      cursorInner.classList.remove('project-hover-inner');
      cursorOuter.classList.remove('project-hover-outer');
    })

    // PROJECT-SPECIFIC CURSOR BEHAVIOUR
    if (index == 0) {
      project.addEventListener('mouseover', () => {
        cursorOuter.style.backgroundImage = 'url(assets/logo-black.svg)';
        console.log('in here!');
      });
      project.addEventListener('mouseleave', () => {
        cursorOuter.style.backgroundImage = 'none';
        console.log('gone now!');
      });
    } else if (index == 1) {
      project.addEventListener('mouseover', () => {
        cursorOuter.style.background = 'blue';
        console.log('project 2');
      });
      project.addEventListener('mouseleave', () => {
        cursorOuter.style.background = 'none';
        console.log('left 2');
      });
    } else {
      project.addEventListener('mouseover', () => {
        cursorOuter.style.background = 'red';
        console.log('project 3');
      });
      project.addEventListener('mouseleave', () => {
        cursorOuter.style.background = 'none';
        console.log('left 3');
      });
    };

  });

};


// runForm();
mouseMovement();
clickClack();
linkHover();