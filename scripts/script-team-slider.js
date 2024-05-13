let arrayDevelopers = document.querySelectorAll('.main_developers')[0];
        let counter = 0;
        let windowWidth = window.innerWidth;

        function updateWindowWidth() {
            windowWidth = window.innerWidth;
        }

        function updateDisplay() {
            // Hide all elements initially
            for (let i = 0; i < arrayDevelopers.children.length; i++) {
                arrayDevelopers.children[i].style.display = "none";
            }

            // Show the appropriate number of elements based on the window width
            if (windowWidth < 1770) {
                if (windowWidth < 886) {
                    arrayDevelopers.children[counter].style.display = "block";
                    arrayDevelopers.children[3].style.marginRight = "70px";
                } else {
                    arrayDevelopers.children[counter].style.display = "block";
                    arrayDevelopers.children[counter + 1].style.display = "block";
                    arrayDevelopers.children[3].style.marginRight = "70px";
                }
            } else {
                arrayDevelopers.children[0].style.display = "block";
                arrayDevelopers.children[1].style.display = "block";
                arrayDevelopers.children[3].style.marginRight = "70px";
            }
        }

        // Update window width initially
        updateWindowWidth();

        // Add event listener for window resize
        window.addEventListener('resize', () => {
            updateWindowWidth();
            updateDisplay();
        });

        // Only execute slider functionality for screens smaller than 1600px
        if (windowWidth < 1770) {
            document.querySelectorAll(".slider-next")[0].style.display = "inline-block";
            document.querySelectorAll(".slider-prev")[0].style.display = "inline-block";
            updateDisplay();

            document.querySelectorAll(".slider-prev")[0].addEventListener('click', () => {
                if (windowWidth < 886) {
                    // Move to the previous element
                    counter -= 1;
                    if (counter < 0) {
                        counter = 0; // To prevent counter from going negative
                    }
                } else {
                    // Hide current two elements
                    arrayDevelopers.children[counter].style.display = "none";
                    arrayDevelopers.children[counter + 1].style.display = "none";

                    // Move to the previous two elements
                    counter -= 1;
                    if (counter < 0) {
                        counter = arrayDevelopers.children.length - 2; // To show the last two elements
                    }
                }

                // Show the new current element(s)
                updateDisplay();
            });
            document.querySelectorAll(".slider-prev")[1].addEventListener('click', () => {
                if (windowWidth < 886) {
                    // Move to the previous element
                    counter -= 1;
                    if (counter < 0) {
                        counter = 0; // To prevent counter from going negative
                    }
                } else {
                    // Hide current two elements
                    arrayDevelopers.children[counter].style.display = "none";
                    arrayDevelopers.children[counter + 1].style.display = "none";

                    // Move to the previous two elements
                    counter -= 1;
                    if (counter < 0) {
                        counter = arrayDevelopers.children.length - 2; // To show the last two elements
                    }
                }

                // Show the new current element(s)
                updateDisplay();
            });

            document.querySelectorAll(".slider-next")[0].addEventListener('click', () => {
                if (windowWidth < 886) {
                    // Move to the next element
                    counter += 1;
                    counter = Math.min(counter, arrayDevelopers.children.length - 1); // To prevent counter from exceeding the length
                } else {
                    // Hide current two elements
                    arrayDevelopers.children[counter].style.display = "none";
                    arrayDevelopers.children[counter + 1].style.display = "none";

                    // Move to the next two elements
                    counter += 2;
                    counter %= arrayDevelopers.children.length - 1; // To show the first two elements when at the end
                }

                // Show the new current element(s)
                updateDisplay();
            });
            document.querySelectorAll(".slider-next")[1].addEventListener('click', () => {
                if (windowWidth < 886) {
                    // Move to the next element
                    counter += 1;
                    counter = Math.min(counter, arrayDevelopers.children.length - 1); // To prevent counter from exceeding the length
                } else {
                    // Hide current two elements
                    arrayDevelopers.children[counter].style.display = "none";
                    arrayDevelopers.children[counter + 1].style.display = "none";

                    // Move to the next two elements
                    counter += 2;
                    counter %= arrayDevelopers.children.length - 1; // To show the first two elements when at the end
                }

                // Show the new current element(s)
                updateDisplay();
            });
        }
        else{
            document.querySelectorAll(".slider-next")[0].style.display = "none";
            document.querySelectorAll(".slider-prev")[0].style.display = "none";
        }

