function showServiceCards(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add("show_service_card");
            }, 300 * index);
        }
    })
}

const serviceCards = document.querySelectorAll(".service_card");
observer_1 = new IntersectionObserver(showServiceCards, { threshold: 0.15 });
serviceCards.forEach((serviceCard) => observer_1.observe(serviceCard));


/*************************************************************************************************** */

function shrinkNavBar(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navBar.classList.remove("shrink_navbar");
        }
        else {
            navBar.classList.add("shrink_navbar");
        }
    })
}

const navBar = document.getElementById("navigation_bar");
const home = document.querySelector(".parallax");
observer_2 = new IntersectionObserver(shrinkNavBar, { threshold: 0.2 });
observer_2.observe(home);
