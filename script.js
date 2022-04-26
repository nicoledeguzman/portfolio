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

// function mouseMovement() {

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
// };

// function clickClack() {
  document.addEventListener('mousedown', (e) => {
    cursorInner.classList.add('click');
  });
  document.addEventListener('mouseup', () => {
    cursorInner.classList.remove('click');
  });
// };

// function linkHover() {

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

// };


// function cursorProjects() {

  projects.forEach((project, index) => {

    // GENERAL PROJECT CURSOR BEHAVIOUR
    project.addEventListener('mouseover', () => {
      cursorInner.classList.add('project-hover-inner');
      cursorOuter.classList.add('project-hover-outer');        
      cursorOuter.style.backgroundRepeat = 'no-repeat';
      cursorOuter.style.backgroundPosition = 'center center';
    });
    project.addEventListener('mouseleave', () => {
      cursorInner.classList.remove('project-hover-inner');
      cursorOuter.classList.remove('project-hover-outer');
    })

    // PROJECT-SPECIFIC CURSOR BEHAVIOUR
    if (index == 0) {
      project.addEventListener('mouseover', () => {
        cursorOuter.style.backgroundImage = 'url(assets/logo-black.svg)';
      });
      project.addEventListener('mouseleave', () => {
        cursorOuter.style.backgroundImage = 'none';
      });
    } else if (index == 1) {
      project.addEventListener('mouseover', () => {
        cursorOuter.style.background = 'blue';
      });
      project.addEventListener('mouseleave', () => {
        cursorOuter.style.background = 'none';
      });
    } else {
      project.addEventListener('mouseover', () => {
        cursorOuter.style.background = 'red';
      });
      project.addEventListener('mouseleave', () => {
        cursorOuter.style.background = 'none';
      });
    };

  });

// };


// function smoothScrolling () {

  const scrollLinks = document.querySelectorAll('.js-scroll');

  scrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          document.querySelector(href).scrollIntoView({
              behavior: 'smooth'
          })
      })
  })

// }

const title = 'Nicole de Guzman';

// create an Array of 50 spots where each spot is filled with [title]
// .join() allows us to join each item of an array with the content written within the brackets (INSTEAD OF COMMAS)
const marqueeText = new Array(300).fill(title).join(' • ');

// PSEUDOCODE:
// 1. grab our .marquee span from the html
const marquee = document.querySelector('.marquee span');
// 2. set our repeating title as the content
marquee.innerHTML = marqueeText;


function contactChange () {

  const midSec = document.querySelectorAll('.middle');

  inView('.middle')
      .on('enter', middle => {
          middle.classList.add('in-viewport')
      })
      .on('exit', middle => {
          middle.classList.remove('in-viewport')
      })

};


// runForm();
// mouseMovement();
// clickClack();
// linkHover();
// cursorProjects();