console.log("Nekogatari")

let mainTab = document.querySelector(".main")
let memberTab = document.querySelector(".members")

function openTab(e, tabName){
    console.log("yes")

    if (tabName == "main"){
        mainTab.style.display = "flex"
        memberTab.style.display = "none"
    }
    else {
        mainTab.style.display = "none"
        memberTab.style.display = "flex"
    }

    
}