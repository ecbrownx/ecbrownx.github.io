const hamburger = document.getElementsByClassName('hamburgermenu')[0]
const dropdown = document.getElementsByClassName('dropdownmenu')[0]

hamburger.onclick = () =>{
    
    if(dropdown.style.display == "flex"){
        dropdown.style.display = "none"
    }else{
        dropdown.style.display = "flex"
    }

}

//hamburger.addEventListener("click", hamburger)

