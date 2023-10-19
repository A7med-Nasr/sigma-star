let body = document.querySelector("body");
let nav = document.querySelector(".navbar");
let services = document.querySelector(".services");
let customers = document.querySelector(".customers");
let footer = document.querySelector("footer");
let bulb = document.querySelector(".navbar .nav .bulb i");
let text = document.querySelectorAll("p");

function changeTheme() {
    let theme = localStorage.getItem("theme");
    console.log(theme);
    if (theme == 'dark') {
        bulb.classList.add('yellow');
        body.classList.add("dark");
        nav.classList.add('dark');
        services.classList.add('dark');
        customers.classList.add('dark');
        footer.classList.add('dark');
    } else {
        bulb.classList.remove('yellow');
        body.classList.remove("dark");
        nav.classList.remove('dark');
        services.classList.remove('dark');
        customers.classList.remove('dark');
        footer.classList.remove('dark');
    }
}

changeTheme();

bulb.onclick = function () {
    if (body.classList.contains("dark")) {
        localStorage.theme = "light";
        changeTheme();
    } else {
        localStorage.theme = "dark";
        changeTheme();
    }
}