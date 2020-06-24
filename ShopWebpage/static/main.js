var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}



function orderpost()
{
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
    if(xmlhttp.readyState==4 && xmlhttp.status==200)
    {
       document.getElementById("posting").innerHTML=xmlhttp.responseText;
    }
  }
   
  var orderdatas={
    "name": document.getElementById("name").value,
    "item": document.getElementById("item").value,
    "time": document.getElementById("time").value,
  }

  xmlhttp.open("POST","http://127.0.0.1:8000/api/v1/orderdetailed/",true);
  xmlhttp.setRequestHeader("Content-type","application/json");
  xmlhttp.setRequestHeader("X-CSRFToken", '{{ csrf_token }}');
  xmlhttp.send(JSON.stringify(orderdatas));
   
}


function contactpost()
{
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
    if(xmlhttp.readyState==4 && xmlhttp.status==200)
    {
       document.getElementById("posting").innerHTML=xmlhttp.responseText;
    }
  }
   
  var contactdatas={
    "person": document.getElementById("person").value,
    "place": document.getElementById("place").value,
    "phone": document.getElementById("phone").value,
    "email": document.getElementById("email").value,
  }

  xmlhttp.open("POST","http://127.0.0.1:8000/api/v1/detailed/",true);
  xmlhttp.setRequestHeader("Content-type","application/json");
  xmlhttp.setRequestHeader("X-CSRFToken", '{{ csrf_token }}');
  xmlhttp.send(JSON.stringify(contactdatas));
   
}

