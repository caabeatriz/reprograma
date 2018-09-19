const sidebar = document.querySelector(".sidebar-menu")
const sidebarButton = document.querySelector(".sidebar-menu__button")




sidebarButton.addEventListener("click",function(event){
    event.preventDefault()

    if(sidebar.style.left === "-430px"){
        sidebar.style.left = "0px"
     
    }
  else {
      sidebar.style.left = "-430px"
  }

   
})


