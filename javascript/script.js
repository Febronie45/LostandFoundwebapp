

// Login validation
function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please enter both email and password.");
        return false;
    }

    alert("Login successful!");
    return true;
}

// Sign up validation
function signUpUser() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (fullname == "" || email == "" || password == "" || confirm == "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (password != confirm) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Account created successfully!");
    return true;
}

// Report form validation
function submitReport() {
    alert("Your report has been submitted successfully!");
    return true;
}

// Search recent items
function searchItems() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let title = cards[i].getElementsByTagName("h3")[0];

        if (title.innerHTML.toLowerCase().includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}




// Preview uploaded image
function previewImage(event) {

    let image = document.getElementById("preview");

    image.src = URL.createObjectURL(event.target.files[0]);
}
function searchItems() {

    let input = document.getElementById("searchBar").value.toLowerCase();

    let items = document.getElementsByClassName("item-card");

    for (let i = 0; i < items.length; i++) {

        let text = items[i].innerText.toLowerCase();

        if (text.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }

    }

}