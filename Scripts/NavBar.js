
var NavBarCode=`<nav>
    <div class="NavBar-Logo">
        <button class="InvisBtn HeaderInvisBtn" onclick="redirectLink('Home')">
            <img src="/Images/NavBar-Logo.png" alt="Logo" class="Nav-Logo">
        </button>
    </div>
    <div class="Header-Links">
        <button  class="Buttons AboutButton Header-Links-Button" onclick="redirectLink('aboutme')">
            <i class="fa-regular fa-address-card"></i> About Me
        </button>
        <button  class="Buttons ProjButton Header-Links-Button" onclick="redirectLink('ProjectsAndBooks')">
            <i class="fa-solid fa-diagram-project"></i> Projects & <i class="fa-solid fa-graduation-cap"></i>  Certificates
        </button>
        <button  class="Buttons TutorButton Header-Links-Button" onclick="redirectLink('Tut')">
            <i class="fa-solid fa-chalkboard-user"></i>
            Tutorials
        </button>     
        <div class="Search-Menu DropDown ">
            <button  class="Buttons SearchButton DropDown-Button Header-Links-Button"onclick="toggleContentSR()">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <div id="Search-Menu-Elments"class="Search-Menu-Elments DropDown-Elements"style="margin-left:-5rem;" >
                <input type="search "class="Inputs">
                <button class="Buttons"style="float:left;">Search</button>      
            </div>
        </div>      

        <div class="NavBar-Menu DropDown">
            <button class="Menu-Button Buttons DropDown-Button Header-Links-Button"id="Menu-Button"onclick="toggleContentSM()">
            <i class="fa-solid fa-circle-chevron-down"></i> Menu
            </button>
        <div id="Menu-Elments" class="NavBar-Menu-Elments DropDown-Elements"style="width: 10rem;">
                <button class="LinkButton DropDown-Elements-Links"onclick="redirectLink('Home')">
                    <i class="fa-solid fa-house"></i> Home
                </button>
                <button class="LinkButton DropDown-Elements-Links"onclick="redirectLink('aboutme')">
                <i class="fa-regular fa-address-card"></i> About Me
                </button>
                <button class="LinkButton DropDown-Elements-Links"onclick="redirectLink('ProjectsAndBooks')">
                <i class="fa-solid fa-diagram-project"></i> Projects & <i class="fa-solid fa-graduation-cap"></i>Certificates
                </button>

                <button class="LinkButton DropDown-Elements-Links"onclick="redirectLink('Tut')">
                    <i class="fa-solid fa-chalkboard-user"></i> Tutorials
                </button>
                <button class="LinkButton DropDown-Elements-Links"class="fa-solid fa-globe"onclick="redirectLink('Sm')">
                    <i class="fa-solid fa-globe" style="transform:rotate(-20deg)"></i> Social Medias
                </button>
            </div>
        </div>
          
    </div>
</nav>

`
const header=document.querySelector("header");
header.innerHTML=NavBarCode;


const fotter = `
<p ><i class="fa-solid fa-copyright"></i>H.Mohamed 2022-2022 | <i class="fa-brands fa-square-font-awesome"></i> for Icons |Logo By AlexMattyou</p>
<p >Made By H.Mohamed Using <i class="fa-brands fa-html5 fa-xl"></i> ,<i class="fa-brands fa-css3-alt fa-xl"></i>and <i class="fa-brands fa-square-js fa-xl"></i>
</p>
`

const fotterelm = document.querySelector("footer");
fotterelm.innerHTML=fotter;

var img = document.getElementsByTagName("img")

for (let i =0;i<img.length;i++){
    img[i].addEventListener("contextmenu",function(lol){lol.preventDefault();})
}


function toggleContentSM() {
    // Get the DOM reference
    let x = document.getElementById("Menu-Elments");
    let xb = document.getElementById("Menu-Button");
    if (x.style.display === "block") {
        x.style.display = "none";
        xb.innerHTML=`<i class="fa-solid fa-circle-chevron-down"></i> Menu`
    } else {
        x.style.display = "block";
        xb.innerHTML=`<i style="transform: rotate(90deg);
        "fa-solid fa-circle-chevron-down"></i> Menu`
    }
}
function toggleContentSR() {
    // Get the DOM reference
    let x = document.getElementById("Search-Menu-Elments");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
  

