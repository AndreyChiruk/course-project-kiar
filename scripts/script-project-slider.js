let arrayProjects = document.querySelectorAll('.article_projects')[0];
let counter = 0;
let windowWidth = window.innerWidth;

function updateWindowWidth() {
    windowWidth = window.innerWidth;
}

function updateDisplay() {
    // Hide all elements initially
    for (let i = 0; i < arrayProjects.children.length; i++) {
        arrayProjects.children[i].style.display = "none";
    }

    // Show the appropriate number of elements based on the window width
    if (windowWidth < 1360) {
        if (windowWidth < 960) {
            arrayProjects.children[counter].style.display = "block";
        } else {
            arrayProjects.children[counter].style.display = "block";
            arrayProjects.children[(counter + 1) % arrayProjects.children.length].style.display = "block";
        }
    } else {
        // Show all elements
        for (let i = 0; i < arrayProjects.children.length; i++) {
            arrayProjects.children[i].style.display = "block";
        }
    }
}

// Update window width initially
updateWindowWidth();

// Add event listener for window resize
window.addEventListener('resize', () => {
    updateWindowWidth();
    updateDisplay();
});

// Add event listeners for slider functionality
document.querySelectorAll(".slider-next")[0].addEventListener('click', () => {
    if (windowWidth < 1360) {
        if (windowWidth < 960) {
            // Move to the next element
            counter += 1;
            counter %= arrayProjects.children.length; // To cycle through elements
        } else {
            // Move to the next two elements
            counter += 1;
            counter %= arrayProjects.children.length; // To cycle through elements
        }
        updateDisplay();
    }
});
document.querySelectorAll(".slider-next")[1].addEventListener('click', () => {
    if (windowWidth < 1360) {
        if (windowWidth < 960) {
            // Move to the next element
            counter += 1;
            counter %= arrayProjects.children.length; // To cycle through elements
        } else {
            // Move to the next two elements
            counter += 1;
            counter %= arrayProjects.children.length; // To cycle through elements
        }
        updateDisplay();
    }
});

document.querySelectorAll(".slider-prev")[0].addEventListener('click', () => {
    if (windowWidth < 1360) {
        if (windowWidth < 960) {
            // Move to the previous element
            counter -= 1;
            if (counter < 0) {
                counter = arrayProjects.children.length - 1; // To show the last element when at the beginning
            }
        } else {
            // Move to the previous element
            counter -= 1;
            if (counter < 0) {
                counter = arrayProjects.children.length - 1; // To show the last element when at the beginning
            }
        }
        updateDisplay();
    }
});
document.querySelectorAll(".slider-prev")[1].addEventListener('click', () => {
    if (windowWidth < 1360) {
        if (windowWidth < 960) {
            // Move to the previous element
            counter -= 1;
            if (counter < 0) {
                counter = arrayProjects.children.length - 1; // To show the last element when at the beginning
            }
        } else {
            // Move to the previous element
            counter -= 1;
            if (counter < 0) {
                counter = arrayProjects.children.length - 1; // To show the last element when at the beginning
            }
        }
        updateDisplay();
    }
});

// Call updateDisplay() immediately after setting event listeners
updateDisplay();
