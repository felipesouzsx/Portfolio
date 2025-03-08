const CATEGORY_BUTTONS = Array.from(document.getElementsByClassName('category-button'));


CATEGORY_BUTTONS.forEach((button) => {
    button.addEventListener("click", handleCategoryChange);
})


function setClassElementsDisplay(className, display) {
    let elements = document.getElementsByClassName(className);
    Array.from(elements).forEach(element => {
        element.style.display = display;
    })
}

function handleCategoryChange(event) {
    let target = event.target;
    let selectedCategory = target.dataset.category;

    CATEGORY_BUTTONS.forEach((button) => {
        let buttonCategory = button.dataset.category;
        button.classList.remove('active');
        if (buttonCategory == selectedCategory || selectedCategory === 'all') {
            setClassElementsDisplay(buttonCategory, 'grid');
        } else {
            setClassElementsDisplay(buttonCategory, 'none');
        }
    })

    target.classList.toggle('active');
}