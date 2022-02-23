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
// variable for an array contain all section
const allSections = Array.from(document.querySelectorAll("section"));
// variable for main element
const main = document.querySelector("main");
// variable for add button
const button = document.getElementById("add");
// variable for navigation bar
const navigBar = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/  
let x = allSections.length;
for (let x = 1; x < 5; x++) {
    const liCode = `<li><a href="#section${x}" data-nav="data-nav"="Section ${x}" class="menu__link">Section ${x}</a></li>`;
    
    navigBar.insertAdjacentHTML("beforeend",liCode);
}

// function to create new sections and li items usnig ${} to dynamiccly changes on secitons and li items attributes
let i= allSections.length;
const creatNewSection = function creatNewSection() {
    ++i;
        const newSecCode = `<section id="section${i}" data-nav="Section ${i}">
        <div class="landing__container">
        <h2>Section ${i}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
        </section>`;
        const newLiCode = `<li><a href="#section${i}" data-nav="data-nav"="Section ${i}" class="menu__link">Section ${i}</a></li>`;
        
        main.insertAdjacentHTML("beforeend",newSecCode);
        navigBar.insertAdjacentHTML("beforeend",newLiCode);
    }
    

// function to run adding new section and nav list when click button
    button.addEventListener("click",creatNewSection);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
// Add class 'active' to section when near top of viewport
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
