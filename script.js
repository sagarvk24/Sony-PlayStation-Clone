let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}

function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var currentTab = document.getElementById(categoryName);
    currentTab.style.display = "block";
    currentTab.style.opacity = "0";
    fadeIn(currentTab);
    evt.currentTarget.className += " active";
}

function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// Call openCategory with the first image category after the page loads
window.onload = function () {
    openCategory(Event, 'joystick');
};

function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var currentTab = document.getElementById(categoryName);
    currentTab.style.display = "block";
    currentTab.style.opacity = "0.3";

    // Check if there's a Content-TextBox inside the currentTab
    var textBox = currentTab.querySelector(".Content-TextBox");
    if (textBox) {
        // Animate the Content-TextBox
        slideUp(textBox);
    }

    fadeIn(currentTab);
    evt.currentTarget.className += " active";
}

// Function to animate the slide-up effect
function slideUp(element) {
    var height = 0;
    element.style.height = height + "px";

    var interval = setInterval(function () {
        if (height < 370) { // Adjust this value based on the actual height of your Content-TextBox
            height += 10; // You can adjust the speed of the slide-up by changing this value
            element.style.height = height + "px";
        } else {
            clearInterval(interval);
        }
    }, 15);
}


document.addEventListener("DOMContentLoaded", function () {
    // Set initial state - Left button selected
    toggleDiv('left');
});

function toggleDiv(side) {
    const leftDiv = document.getElementById('new-releases');
    const rightDiv = document.getElementById('coming-soon');

    if (side === 'left') {
        leftDiv.style.display = 'block';
        rightDiv.style.display = 'none';
    } else if (side === 'right') {
        leftDiv.style.display = 'none';
        rightDiv.style.display = 'block';
    }
}



