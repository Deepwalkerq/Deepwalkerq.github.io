console.log("Nekogatari")

let mainTab = document.querySelector(".main")
let memberTab = document.querySelector(".members")


if (document.cookie == ""){
    document.cookie = "active=main"
}

// function checkTab(e, cookie){
// }

function openTab(e, tabName){

    if (tabName == "main"){
        mainTab.style.display = "flex"
        memberTab.style.display = "none"
    }
    else {
        mainTab.style.display = "none"
        memberTab.style.display = "flex"
    }

    
}