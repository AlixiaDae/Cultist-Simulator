

const mainNavItem = document.querySelectorAll(".main-nav-item")
const mansusTable = document.querySelector(".mansus-table")
const contentBox = document.querySelector(".content-box")

mainNavItem.forEach(tab => {
    tab.addEventListener("click", () => {
        if(tab.textContent == "The Mansus") {
            if(mansusTable.style.display == "block") {
                contentBox.style.backgroundColor = "transparent"
                mansusTable.style.display = "none"
            } else {
                mansusTable.style.display = "block"
                contentBox.style.backgroundColor = "rgb(0, 96, 126)"
            }
            
        } else {
            console.log("none yet")
        }
    })
})

const doorTabs = document.querySelectorAll(".door-tab")

doorTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        console.log(tab.textContent)
    })
})
