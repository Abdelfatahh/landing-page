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
 * Define Global Variables
 *
 */

let sections = document.querySelectorAll("section");
console.log(sections);

let navList = document.querySelector("#navbar__list");
console.log(navList);

let fragment = document.createDocumentFragment();

// build the nav
sections.forEach((section) => {
  let text = section.getAttribute("data-nav");
  // console.log(text);
  let navEl_li = document.createElement("li");
  let navEl_li_a = document.createElement("a");
  navEl_li_a.setAttribute("class", "menu__link");
  navEl_li_a.textContent = text;
  navEl_li.appendChild(navEl_li_a);
  fragment.appendChild(navEl_li);
  // console.log(fragment);

  // Scroll to section on link click
  navEl_li_a.addEventListener("click", () => {
    section.scrollIntoView({ behavior: "smooth" });
  });
});

navList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", () => {
  sections.forEach((activeSection) => {
    let rect = activeSection.getBoundingClientRect();
    if (rect.top > 0 && rect.top < 200) {
      sections.forEach((section) => {
        section.classList.remove("your-active-class");
      });
      activeSection.classList.add("your-active-class");
      //  console.log(activeSection);

      // Set sections as active

      // for each link ->
      let links = document.querySelectorAll("a");
      links.forEach((link) => {
        if (link.textContent == activeSection.getAttribute("data-nav")) {
          link.classList.add("activeLink");

          // console.log(link);
        } else {
          link.classList.remove("activeLink");
        }
      });
    }
  });
});

/**
 * End Main Functions
 */
