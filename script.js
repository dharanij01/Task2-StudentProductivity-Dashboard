// ===========================
// Contact Form Validation
// ===========================

document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("formMessage");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || message === ""){

        formMessage.style.color = "red";
        formMessage.innerHTML = "Please fill all the fields.";

        return;
    }

    if(!emailPattern.test(email)){

        formMessage.style.color = "red";
        formMessage.innerHTML = "Please enter a valid email address.";

        return;
    }

    formMessage.style.color = "green";
    formMessage.innerHTML = "Form submitted successfully!";

    document.getElementById("contactForm").reset();

});


// ===========================
// To-Do List
// ===========================

let count = 0;

function addTask(){

    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value.trim();

    if(task === ""){

        alert("Please enter a task.");

        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task;

    let deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = "Delete";

    deleteBtn.className = "deleteBtn";

    deleteBtn.onclick = function(){

        li.remove();

        count--;

        document.getElementById("taskCount").innerHTML = count + " Pending";
    }

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    count++;

    document.getElementById("taskCount").innerHTML = count + " Pending";

    taskInput.value = "";

}


// ===========================
// Dark Mode Toggle
// ===========================

function toggleTheme(){

    document.body.classList.toggle("dark");

    let btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("dark")){

        btn.innerHTML = "☀️ Light Mode";

    }

    else{

        btn.innerHTML = "🌙 Dark Mode";

    }

}