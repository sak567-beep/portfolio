const closebtn=document.getElementById('closebtn');
const nav=document.getElementById("nav-links");
function toggleMenu(){
  
  nav.classList.toggle("show");
}
closebtn.addEventListener('click',()=>{
nav.classList.remove("show");
});