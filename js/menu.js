(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const logo = document.querySelector("[data-logo]");
    
    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
                
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");

        logo.classList.toggle("is-hidden");

    });

})();