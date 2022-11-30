const hamburger = document.getElementsByClassName('hamburgermenu')[0]
const dropdown = document.getElementsByClassName('dropdownmenu')[0]

hamburger.onclick = () =>{
    
    dropdown.style.display == "flex" ? dropdown.style.display = "none" : dropdown.style.display = "flex"
    

}