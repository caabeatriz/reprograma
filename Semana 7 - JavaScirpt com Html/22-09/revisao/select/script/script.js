const selectbutton = document.querySelector(".select__button")
const selectInputArea = document.getElementById("selectInputArea")

selectbutton.addEventListener("click", function (buttondelete) {
    buttondelete.preventDefault()   
   selectInputArea[selectInputArea.selectedIndex].remove()
    
    //Esse da certo mas é gigante
//    if(selectInputArea.value == "Front-End"){
//    selectInputArea.childNodes[0].remove()
//     // alert("addddddddddddddd")

//     }else if (selectInputArea.value == "Back-End"){
//     selectInputArea.childNodes[1].remove()
//     }else if(selectInputArea.value == "UX Designer"){
//     selectInputArea.childNodes[2].remove()
//     }
//     else if (selectInputArea.value == "UI Designer"){
//         selectInputArea.childNodes[3].remove()
//     }

//     else{
//         alert("Excluidos todos")
//     }

}

)

