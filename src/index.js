

const mainNavItem = document.querySelectorAll(".main-nav-item")
const mansusTable = document.querySelector(".mansus-table")
const contentBox = document.querySelector(".content-box")

mainNavItem.forEach(tab => {
    tab.addEventListener("click", () => {
        if(tab.textContent == "The Mansus") {
            wayBox.style.display = "none"
            if(contentBox.style.display == "block") {
                contentBox.style.display = "none"
            } else {
                contentBox.style.display = "block"
                //contentBox.style.backgroundColor = "rgb(0, 96, 126)"
            }
            
        } else {
            console.log("none yet")
        }
    })
})

const doorTabs = document.querySelectorAll(".door-tab")
const wayBox = document.querySelector(".way-box")

doorTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        console.log(tab.textContent)
        populateWayBox(tab, wayBox)
    })
})

function populateWayBox(tabName, box) {
        if(tabName.textContent.toLowerCase() == "the wood") {
            clearWayBox()
            const woodHeader = document.createElement("div")
            const wellHeader = document.createElement("div")
            const templeHeader = document.createElement("div")

            woodHeader.textContent = "The Wood"
            wellHeader.textContent = "The Well"
            templeHeader.textContent = "The Temple of the Wheel"

            box.append(woodHeader, wellHeader, templeHeader)
        } else if(tabName.textContent.toLowerCase() == "the white door") {
            clearWayBox()
            const whiteHeader = document.createElement("div")
            const lodgeHeader = document.createElement("div")
            const orchardHeader = document.createElement("div")

            whiteHeader.textContent = "The White Door"
            lodgeHeader.textContent = "Lodge of the Sage Knight"
            orchardHeader.textContent = "The Orchard of Lights"

            box.append(whiteHeader, lodgeHeader, orchardHeader)
        } else if(tabName.textContent.toLowerCase() == "the stag door") {
            clearWayBox()
            const stagHeader = document.createElement("div")
            const ascentHeader = document.createElement("div")
            const paintedHeader = document.createElement("div")

            stagHeader.textContent = "The Stag Door"
            ascentHeader.textContent = "The Ascent of Knives"
            paintedHeader.textContent = "The Painted River"

            box.append(stagHeader, ascentHeader, paintedHeader)
        } else if(tabName.textContent.toLowerCase() == "the spider door") {
            clearWayBox()
            const spiderHeader = document.createElement("div")
            const mallearyHeader = document.createElement("div")
            const chamberHeader = document.createElement("div")

            spiderHeader.textContent = "The Spider's Door"
            mallearyHeader.textContent = "The Malleary"
            chamberHeader.textContent = "The Chamber of Ways"

            box.append(spiderHeader, mallearyHeader, chamberHeader)
        } else {
            clearWayBox()
            const peacockHeader = document.createElement("div")
            const redHeader = document.createElement("div")
            const wormHeader = document.createElement("div")

            peacockHeader.textContent = "The Peacock's Door"
            redHeader.textContent = "The Red Church"
            wormHeader.textContent = "The Worm Museum"

            box.append(peacockHeader, redHeader, wormHeader)
        }
}


// UTIL

function clearWayBox() {
    wayBox.textContent = ""
    wayBox.style.display = "grid"
}