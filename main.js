// select and stock the elements from DOM in the variable
let sections = document.getElementsByClassName('sections');
let content = document.getElementsByClassName('content');

// hide the content
for (let j = 0; j < content.length; j++) {
    content[j].style.display = "none";
}

// show or hide the content with a click
for (let k = 0; k < sections.length; k++) {
    sections[k].addEventListener("click", () => {
        if (content[k].style.display == "none") {
            content[k].style.display = "flex";
        } else {
            content[k].style.display = "none";
        }
    })
}