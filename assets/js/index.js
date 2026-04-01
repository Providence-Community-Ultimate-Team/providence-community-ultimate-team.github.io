const crateNavIcons = document.querySelectorAll(".crate-nav-icon");
const crateContentContainers = document.querySelectorAll(".crate-content-container");
const mobileCrateNavIcon = document.getElementById("mobile-crate-nav-icon");
const mobileNavMenu = document.getElementById("mobile-nav-container");

const mobileMenuItems = document.querySelectorAll(".mobile-nav-item");

crateNavIcons.forEach(icon => {
    icon.addEventListener("click", switchCrates);
})

mobileCrateNavIcon.addEventListener("click", toggleMobileMenu);

mobileMenuItems.forEach(btn => {
    btn.addEventListener("click", mobileNav);
});

function switchCrates(e) {
    crateNavIcons.forEach(icon => {
        const targetId = icon.getAttribute("data-target");
        const menuId = icon.getAttribute("data-menu");
        const target = document.getElementById(targetId);
        const menu = document.getElementById(menuId);
        if (icon == e.currentTarget) {
            icon.classList.toggle("rotated-crate");
            target.classList.toggle("active");
            menu.classList.toggle("active");
        } else {
            if (icon.classList.contains("rotated-crate")) {
                icon.classList.remove("rotated-crate");
                target.classList.remove("active");
                menu.classList.remove("active");
            }
        }
    });
}

function toggleMobileMenu() {
    mobileCrateNavIcon.classList.toggle("mobile-rotated-crate");
    mobileNavMenu.classList.toggle("show-mobile-nav-container");
}

function mobileNav(e) {
    mobileMenuItems.forEach(btn => {
        const targetId = btn.getAttribute("data-target");
        const target = document.getElementById(targetId);
        if (btn == e.currentTarget) {
            target.classList.add("active");
        } else {
            target.classList.remove("active");
        }
    });
}