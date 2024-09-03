/* 
   ? Tabs selection
   ? Show/Hide ".tabcontent" on ".tablink" click
   ? Add/Remove "active" class on ".tabcontent" by retrieving "data-tab-id"
   ? Add a background overlay 
*/

/* ------------------------------------------------------------- 
   * Hide non active content (tabcontent) at load
----------------------------------------------------------------*/
// ? HTML element for hidden ".tabcontent"
const HIDDEN_TABS = document.querySelectorAll('.tabcontent:not(.active)');
HIDDEN_TABS.forEach((tabContent) => {
   tabContent.style.display = 'none';
});

// Add a click event for each "tablink" element
const TABLINKS = document.querySelectorAll('.tablink');
TABLINKS.forEach((tabLink) => {
   let tabContents = document.querySelectorAll('.tabcontent');
   // let tabLinks = document.querySelectorAll(".tablink");

   // tabLink.addEventListener("click", function () {
   tabLink.addEventListener('click', () => {
      let tabID = tabLink.getAttribute('data-tab-id');

      //Hide every content first !!!
      tabContents.forEach((tabContent) => {
         tabContent.style.display = 'none';
      });

      //Show content of selected tab
      document.getElementById(tabID).style.display = 'block';

      //Remove active class from tablink
      TABLINKS.forEach((tabLink) => {
         tabLink.classList.remove('active');
      });

      // Add active class to selected tab
      tabLink.classList.add('active');
   });
});

/**
 * Copyrights - Retur current year
 */
function yearCopyrights() {
   const TODAY = new Date();
   return TODAY.getFullYear();
}
const COPYRIGHTS = document.getElementById('year');
COPYRIGHTS.innerText = yearCopyrights();

/* 
   ? Navigation menu
   ? Trigger active class on hovering
*/
const NAV_LINKS = document.querySelectorAll('nav ul li');

for (const NAV_LINK of NAV_LINKS) {
   // ? Mouseenter event
   NAV_LINK.addEventListener('mouseenter', () => {
      document.querySelector('li.active').classList.remove('active');
      NAV_LINK.classList.add('active');
   });
}

/* 
   ? Navigation menu
   ? Toggle Show/Hide nav menu
*/
const MENU_TOGGLE = document.getElementById('menu-toggle');
const NAV = document.getElementById('nav');

MENU_TOGGLE.addEventListener('click', () => {
   NAV.classList.toggle('open');
   MENU_TOGGLE.classList.toggle('open');
});
