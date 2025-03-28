
const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".dropdown-btn");
const btnText = document.querySelector(".btn-text");
const items = document.querySelectorAll(".dropdown-item");
const hr_text = document.querySelector(".text");

let previousText = btnText.textContent; // Store previous text
let selectedText = null; // Track currently selected item

// Toggle dropdown visibility
button.addEventListener("click", function () {
    dropdown.classList.toggle("active");

    if (dropdown.classList.contains("active")) {
        previousText = btnText.textContent; // Save current text before changing
        btnText.textContent = "What’s your preference ?";
        hr_text.style.display = "none";
    } else {
        btnText.textContent = "Just experimenting !";
    
        hr_text.style.display = "block";
    }
});

// Handle item selection
items.forEach(item => {
    item.addEventListener("click", function () {
        let currentText = btnText.textContent.trim();

        if (currentText === this.textContent.trim()) {
            // If the clicked item is already selected, revert to previous text
            btnText.textContent = "What’s your preference ?";
            selectedText = null;
        } else {
            // Store selected item and update button text
           // selectedText = this.textContent;
             btnText.textContent = this.textContent;
        }

        dropdown.classList.remove("active"); // Hide dropdown after selection
        hr_text.style.display = "block";
    });
});










