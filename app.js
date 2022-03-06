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
        // create li element for every section in the ul element
        const navbar__li = document.createElement("li");
        // and also create an a element for every created li added in HTML file with specific attributes
        const li_a = document.createElement("a")
        // class attribute menu_link was wrriten in css file
        li_a.className = "menu__link"
        // add attribute herf to make a link
        li_a.href="#"+section.id
        // add attribute dataset like section
        li_a.dataset.nav = section.id
        // add text to every list refer to section name
        li_a.innerHTML = section.dataset.nav
        navigBar.appendChild(navbar__li);
        navbar__li.appendChild(li_a);
    });
};
// Add class 'active' to section when near top of viewport using classlist to add and remove css(your-active-class)
const activeSection = function activeSection(){
    window.onscroll = function() {
        document.querySelectorAll("section").forEach(function(active) {
            const id = active.id;
        let link = document.querySelector(`a[data-nav='${id}']`);  
        if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 180){
        active.classList.add("your-active-class");
        link.classList.add("active-link");
        }
        else{
            active.classList.remove("your-active-class");
            link.classList.remove("active-link");
        }
        });
    }
};

// Scroll to anchor ID using scrollTO event
const liScrollToSection = function liScrollToSection(){
    allSections.forEach(section => {
    // set a variable id from section id
    const id = section.id;
    // set a changeable variable for a Element using Denoting with backticks (` `)
    let link = document.querySelector(`a[data-nav='${id}']`);    
        //  add eventlistener function for li element to scroll to section smoothly using scrollIntoView()
        link.addEventListener("click",function(go){
         // prevent the default action that will happen when clicking on an a Element
        go.preventDefault();            
            section.scrollIntoView({ behavior: "smooth" ,block: "center"});
        })
    })
};

// slide function when clicking on button has been added to HTML File and has Styling in css when the page view on screen less than 850px width 
const navBarSlide = function navBarSlide (){
    const button = document.querySelector(".button");
    const menu = document.getElementById("navbar__list");
    button.addEventListener("click",function(){
        menu.classList.toggle("slide");
    })
}

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
// navigaition bar slide button function when viewed in screen width less than 850px
navBarSlide();