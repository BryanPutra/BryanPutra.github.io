document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-burger-button]")
    let currentDropdown

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    if (isDropdownButton) {
        console.log("fuck")
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }
})
