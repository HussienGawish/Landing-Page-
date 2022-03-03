/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// set a variable for all section 
const allSections = Array.from(document.querySelectorAll("section"));
// set a variable for the navigaition bar
const navigBar = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navbarCreation = function navbarCreation(){
    // create for each loop to loop on all section whenever number of sections 
    allSections.forEach(section => {
        // create li element for every section in the ul element added in HTML file with specific attributes
        const navbar__list = document.createElement("li");
        // class attribute menu_link was wrriten in css file
        navbar__list.className = "menu__link"
        // add attribute dataset like section
        navbar__list.dataset.nav = section.id
        // add text to every list refer to section name 
        navbar__list.innerHTML = section.dataset.nav
        navigBar.appendChild(navbar__list);
    });
};
// Add class 'active' to section when near top of viewport using classlist to add and remove css(your-active-class)
const activeSection = function activeSection(){
    window.onscroll = function() {
        document.querySelectorAll("section").forEach(function(active) {
        if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 180){
        active.classList.add("your-active-class");
        }
        else{
            active.classList.remove("your-active-class");
        }
        });
    }
};


// Scroll to anchor ID using scrollTO event
const liScrollToSection = function liScrollToSection(){
    allSections.forEach(section => {
        // set a variable id from section id
        const id = section.id;
        // set a changeable variable for li Element using Denoting with backticks (` `)
        let liTa = document.querySelector(`li[data-nav='${id}']`);
         // add eventlistener function for li element to scroll to section smoothly using scrollIntoView()
        liTa.addEventListener("click",function(){
            section.scrollIntoView({ behavior: "smooth" ,block: "end"});
        })
    })
};

// const liScrollToSection = function liScrollToSection(){
//     allSections.forEach(section => {
//         // set a variable id from section id
//         const id = section.id;
//         // set a changeable variable for li Element using Denoting with backticks (` `)
//         let liTa = document.querySelector(`li[data-nav='${id}']`);
//         // add eventlistener function for li element to scroll to section smoothly using scrollIntoView()
// };
// };
    
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navbarCreation();
// Scroll to section on link click
liScrollToSection();
// Set sections as active
activeSection();
