




const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const links=document.querySelectorAll('a')
for (let b = 0 ; b < links.length; b++) {
    links[b].setAttribute('rel','noopener noreferrer')
    links[b].setAttribute('title','links')
    console.log(links[b].getAttribute('rel'))
}





// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});




// // ==========================================================================================
var slideUp = {
    origin: 'left',
    // opacity: null,
    distance: "40px",
    reset: false,
    interval: 50,

    easing: 'ease-in-out'
    
};
ScrollReveal().reveal(`.program_card, .year_card-link`,slideUp  );

document.getElementById("year").innerHTML= new Date().getFullYear()
let myHeading=document.getElementsByTagName('title'),
mainsection=document.getElementsByClassName('card_container'),
item = document.createElement('div')
item.innerHTML = `
<section class="headin-link mt-10">
      <h3 class="title-heading"></h3>
     
    </section>
`;
mainsection[0].prepend(item)
// get the heading text tag
  headingText=document.getElementsByClassName('title-heading'),

//   Assign the Title name to the h3 tag
   headingText[0].textContent= myHeading[0].innerText












//====== Get the course title and insert it into the image Alt ==============================
const cardName = document.getElementsByClassName('card_heading');


const cardImage=document.getElementsByClassName('card_image');

for (var i = 0; i < cardImage.length; i++) {
    cardImage[i].alt = cardName[i].textContent;
}
// ============================================

 
// =====================  Share Button ========================
// Gets all the text-container class on the page 
const cardDetail=document.getElementsByClassName('text_container')

const cardLinks= document.querySelectorAll('.card_link')

// Create a loop which iterates for each text_container
for (let i = 0; i < cardDetail.length; i++) {
    // Creates a span element which is assigned to the shareBtn variable
    const shareBtn = document.createElement('span');

    // Gets the link and assigns it to the variable cardUrl
    const cardUrl= cardLinks[i].getAttribute('href')


    // Adds an icon to the share element
    shareBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clip-rule="evenodd" />
  </svg>
  `;

    //  Adds a class to thse span element
     shareBtn.classList.add('share-btn');

    //  Adds the share btn to the parent container(text_container)
     cardDetail[i].appendChild(shareBtn);

    //  Event Listener that Open the Navigation share modal
    shareBtn.addEventListener('click', async function(e){
    e.preventDefault(); 
    if(navigator.share){
        try{
        await navigator.share({
            title:'Sharing'+' '+ cardName[i].innerText + ' from SlidesHub',
            text: 'Sharing'+' '+ cardName[i].innerText + ' from SlidesHub',
            url: cardUrl
        })
    }
    catch(err){
        iziToast.error({
            title: 'Error',
            message: err,
        });
        // swal ( "Oops" , err,  "error" )
    }
    }
    else{
        alert('Sorry, your browser does not support sharing')
    }
    })
  }



