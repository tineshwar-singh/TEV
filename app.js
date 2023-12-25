/*==================== MENU SHOW Y HIDDEN ====================*/
const hamburgerIcon = document.getElementById('hamburger_icon'),
      closeIcon = document.getElementById('close_icon'),
      navLinks = document.getElementById('nav_links'),
      navItems = document.querySelectorAll('.nav_items>a');


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(hamburgerIcon) {
    hamburgerIcon.addEventListener('click', () => {
      hamburgerIcon.classList.remove('active');
      hamburgerIcon.classList.add('not_active');
      closeIcon.classList.remove('not_active');
      closeIcon.classList.add('active');
      navLinks.classList.add('show_menu');
      navLinks.classList.remove('hide_menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(closeIcon) {
  closeIcon.addEventListener('click', () => {
    hamburgerIcon.classList.remove('not_active');
    hamburgerIcon.classList.add('active');
    closeIcon.classList.remove('active');
    closeIcon.classList.add('not_active');
    navLinks.classList.remove('show_menu');
    navLinks.classList.add('hide_menu');
  })

  /* ===== On clicking nav links MENU HIDDEN ===== */
  navItems.forEach(ele => {
    ele.addEventListener('click', () => {
      // e.preventDefault();
      hamburgerIcon.classList.remove('not_active');
      hamburgerIcon.classList.add('active');
      closeIcon.classList.remove('active');
      closeIcon.classList.add('not_active');
      navLinks.classList.remove('show_menu');
      navLinks.classList.add('hide_menu');
    })
  });
}




// // To play intro only once...
// var TEVIntro = document.getElementById("tev-intro");
// var bodyTag = document.getElementsByTagName("body");

// const showIntro = setTimeout(intro, 10000);
// function intro() {
//     TEVIntro.style.display="none";
//     bodyTag[0].style.overflow="auto";
// }
// //................................................//


// //popup
// const popup = document.querySelector('.popup');
// const closeBtn = document.querySelector('.close-btn');
// const largeImage = document.querySelector('.large-image');
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');

// const candidImages = [...document.querySelectorAll(".candid-image")];
// const traditionalImages = [...document.querySelectorAll(".traditional-image")];

// // console.log(candidImages[0][0].src);

// // let index = 0;

// // const updateImage = (i) => {
// //     let path = candidImages[i].src;
// //     console.log(path);
// //     largeImage.src = path;
// //     index = i;
// // }

// closeBtn.addEventListener('click', () => {
//     popup.classList.toggle('active');
//     bodyTag[0].style.overflow="auto";
// })

// leftArrow.addEventListener('click', () => {    
//     if(index > 0) {
//         updateImage(index - 1);
//     } else {
//         updateImage(candidImages.length - 1);
//     }
// })

// rightArrow.addEventListener('click', () => {
//     if(index < candidImages.length - 1) {
//         updateImage(index + 1);
//     } else {
//         updateImage(index = 0);
//     }
// })

// candidImages.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         updateImage(i);
//         popup.classList.toggle('active');
//         bodyTag[0].style.overflow="hidden";
//     })
// }) 




// // -----------------------------------------------------


// // var candidPhotography = document.querySelector('.candid-photography');
// // var traditionalPhotography = document.querySelector('.traditional-photography');
// // // var candidGallery = document.querySelector('.candid-gallery');
// // // var traditionalGallery = document.querySelector('.traditional-gallery');

// // candidPhotography.addEventListener('click', () => {
// //     bodyTag[0].style.overflow="hidden";
// //     popup.classList.toggle('active');

// //     updateImage(0);

// //     // setInterval(() => {
// //     //     index++;
// //     //     if(index > traditionalImages.length - 1) {
// //     //         index=0;
// //     //     }
// //     //     updateImage(index);
// //     // }, 1000);
// // })

// // traditionalPhotography.addEventListener('click', () => {
// //     bodyTag[0].style.overflow="hidden";
// //     popup.classList.toggle('active');

// //     updateImage(0);

// //     // setInterval(() => {
// //     //     index++;
// //     //     if(index > traditionalImages.length - 1) {
// //     //         index=0;
// //     //     }
// //     //     updateImage(index);
// //     // }, 1000);
// // })


// const sections = document.querySelectorAll('section[id]');

// function scrollActive() {
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         const sectionId = current.getAttribute('id');

//         if((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight)) {
//             document.querySelector('.tev-header-details a[href*=' + sectionId + ']').classList.add('active-link');
//         } else {
//             document.querySelector('.tev-header-details a[href*=' + sectionId + ']').classList.remove('active-link');
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: 'true',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// Current Year Update
const currentYear = document.querySelector('.current_year');
const date = new Date();
currentYear.innerText = date.getFullYear();

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  //when the scroll is greater than 560 viewport height, add the show-scroll class to the tag with the scroll
  if(this.scrollY >= 560) {
      scrollUp.classList.add('show-scroll');
  } else {
      scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);



// ================= sahre FORM data to whatsapp ==================
const formData = document.querySelector(".tev_contact_form");
const contactName = document.querySelector("#name");
const contactNumber = document.querySelector("#contactNumber");
const contactEmail = document.querySelector("#contactEmail");
const functionDate = document.querySelector("#functionDate");
const functionVenue = document.querySelector("#functionVenue");
const functionCoverage = document.querySelectorAll('input[type="checkbox"]');
const contactTime = document.querySelectorAll('input[type="radio"]');

//get fucntionCoverage values -

function functionCover() {
  let ans = "";
  for(let val of functionCoverage) {
    if(val.checked) {
      ans += val.value + ', ';
    }
  }
  ans = ans.slice(0,-2);
  return ans;
} 

function contactTiming() {
  let time = "";
  for(let val of contactTime) {
    if(val.checked) {
      time = val.value;
    }
  }
  return time;
} 

formData.addEventListener('submit', (event) => {
  event.preventDefault();
  const func = functionCover();
  const cont = contactTiming();


  let contactData = `
  Name :- ${contactName.value}
  Number :- ${contactNumber.value}
  Email :- ${contactEmail.value}
  Function Date :- ${functionDate.value}
  Function Venue :- ${functionVenue.value}
  Function Coverage :- ${func}
  Contact Time :- ${cont}
  `;

  console.log(contactData);

  // formData.reset();

  sendWhatsAppMessage();

  function sendWhatsAppMessage() {
    // Format the message for WhatsApp
    const whatsappMessage = `
Name :- ${contactName.value}
Number :- ${contactNumber.value}
Email :- ${contactEmail.value}
Function Date :- ${functionDate.value}
Function Venue :- ${functionVenue.value}
Function Coverage :- ${func}
Contact Time :- ${cont}
    `;

    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create a deep link to open WhatsApp with the pre-filled message
    const whatsappLink = `https://wa.me/+917985584334/?text=${encodedMessage}`;

    // Open WhatsApp in a new tab or window
    window.open(whatsappLink, '_blank');
  }

// })



// console.log(contactData);
}
)