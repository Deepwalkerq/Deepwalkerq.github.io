console.log("Nekogatari")

window.onload = () => {
    if (sessionStorage.length == 0){
        sessionStorage.setItem("activeTab", "main")
        checkTab()
    } else{
        checkTab()
    }
    
}

const mainTab = document.querySelector(".main")
const memberTab = document.querySelector(".members")
const mainLink = document.getElementById("tablink-main")
const membersLink = document.getElementById("tablink-members")

function checkTab() {
    if (sessionStorage.getItem("activeTab") == "main"){
        mainTab.style.display = "flex"
        memberTab.style.display = "none"
    } else {
        mainTab.style.display = "none"
        memberTab.style.display = "flex"

    }

}

mainLink.addEventListener("click", function() {
    sessionStorage.setItem("activeTab", "main")
    checkTab()
})

membersLink.addEventListener("click", function() {
    sessionStorage.setItem("activeTab", "members")
    checkTab()
})