//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      //active sections for animation on scroll
      sec.classList.add('show-animate');
    }
    else{
      sec.classList.remove('show-animate');
    }
  })

  //sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

document.getElementById('knowMore1').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('knowMore2').addEventListener('click', function() {
  document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('letsTalk').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});


//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500)
    }
    else {
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500)
    }
  }
})

//comment button when click
const pages = document.querySelectorAll('.book-page.page-right');
const commentBtn = document.querySelector('.button.comment');

commentBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn');

        setTimeout(() => {
          page.style.zIndex = 20 + index;
        }, 500)

    }, (index + 1) * 200 + 100)
  })
}

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() =>{
      reverseIndex();
      pages[pageNumber].classList.remove('turn');

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500)

    }, (index + 1) * 200 + 100)
  })
}

//opening book animation
const coveRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening book animation (cover right animation)
setTimeout(() => {
  coveRight.classList.add('turn');
}, 2100)

setTimeout(() => {
  coveRight.style.zIndex = -1;
}, 2800)

//opening book animation (page left or profile page animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200)


//opening book animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove('turn');

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500)

  }, (index + 1) * 200 + 2100)
})


document.addEventListener("DOMContentLoaded", function() {
  const commentButton = document.querySelector('.button.comment');
  const commentPage = document.querySelector('.comment-box');

  commentButton.addEventListener('click', function(event) {
      event.preventDefault();
      commentPage.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const profileButton = document.querySelector('back-profile');
  const profilePage = document.querySelector('.profile-page');

  profileButton.addEventListener('click', function(event) {
      event.preventDefault();
      profilePage.scrollIntoView({ behavior: 'smooth' });
  });
});
