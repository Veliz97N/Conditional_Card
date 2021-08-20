let cover = document.getElementById("cover");
cover.addEventListener("change", () => {
    let cover_background = cover.options[cover.selectedIndex].value;
    let cover_backgroundImage = document.querySelector(".background_imagen")
    console.log(cover_background);
    if (cover_background == "true") {
        cover_backgroundImage.style.backgroundImage = "url(/Desktop/Conditional_Card/Images/usach.jpg)";
    }
    else {
        cover_backgroundImage.style.backgroundImage = "none";
    }
});
let get_name = document.getElementById("name");
get_name.addEventListener("keyup", () => {
    let get_name_value = get_name.value;
    let name_contenido = document.getElementById("Name");
    if (get_name_value != "") {
        name_contenido.innerHTML = get_name_value;
    }
    else {
        name_contenido.innerHTML = "Your Name"
    }
});
let get_lastname = document.getElementById("lastname");
get_lastname.addEventListener("keyup", () => {
    let get_lastname_value = get_lastname.value;
    let lastname_contenido = document.getElementById("Last_Name");
    if (get_lastname_value != "") {
        lastname_contenido.innerHTML = get_lastname_value;
    }
    else {
        lastname_contenido.innerHTML = "and Your Last Name"
    }
});
let get_socialmedia = document.getElementById("social_media");
get_socialmedia.addEventListener("change", () => {
    let get_socialmedia_value = get_socialmedia.options[get_socialmedia.selectedIndex].value;
    let set_socialmedia_value = document.getElementsByClassName("social_media");            
    if (get_socialmedia_value == "right" && set_socialmedia_value[0].classList.contains("right")==false) {
        set_socialmedia_value[0].classList.remove("left");
        set_socialmedia_value[0].classList.add("right");
    }
    else if (get_socialmedia_value == "right" && set_socialmedia_value[0].classList.contains("right")==true) {
        set_socialmedia_value[0].classList.remove("left");
    }
    else {
        set_socialmedia_value[0].classList.remove("right");
        set_socialmedia_value[0].classList.add("left");
    }
});
let get_twitter = document.getElementById("twitter");        
get_twitter.addEventListener("change",()=>{
    let url_base="https://twitter.com/";
    let set_twitter=document.getElementById("set_twitter");
    set_twitter.setAttribute("href",url_base+get_twitter.value);
});
let get_github=document.getElementById("github");
get_github.addEventListener("change",()=>{
    let url_base="https://github.com/";
    let set_github=document.getElementById("set_github");
    set_github.setAttribute("href",url_base+get_github.value);
});
let get_linkedin=document.getElementById("linkedin");
get_linkedin.addEventListener("change",()=>{
    let url_base="https://www.linkedin.com/";
    let set_linkedin=document.getElementById("set_linkedin");
    set_linkedin.setAttribute("href",url_base+get_linkedin.value);
});
let get_instagram=document.getElementById("instagram");
get_instagram.addEventListener("change",()=>{
    let url_base="https://www.instagram.com/";
    let set_instagram=document.getElementById("set_instagram");
    set_instagram.setAttribute("href",url_base+get_instagram.value);
});
let get_role = document.getElementById("role");
get_role.addEventListener("change", () => {
    let get_role_value = get_role.options[get_role.selectedIndex].innerText;
    let set_role = document.getElementById("Info");
    set_role.innerHTML = get_role_value;
});
let get_city = document.getElementById("city");
get_city.addEventListener("change", () => {
    let get_city_value = get_city.options[get_city.selectedIndex].innerHTML;
    let set_city = document.getElementById("Location_City");
    set_city.innerHTML = get_city_value + ", ";
});
let get_country = document.getElementById("country");
get_country.addEventListener("change", () => {
    let get_country_value = get_country.options[get_country.selectedIndex].innerHTML;
    let set_country = document.getElementById("Location_Country");
    set_country.innerHTML = get_country_value;
});