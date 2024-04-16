import mansus from "./products.js"
import grim from "./rituals.js"

// VARIABLES
const header = document.querySelector("h1")
const mainNavItem = document.querySelectorAll(".main-nav-item")
const mansusTable = document.querySelector(".mansus-table")
const rituals = document.querySelector(".rituals")
const doorTabs = document.querySelectorAll(".door-tab")
const wayBox = document.querySelector(".way-box")
const wayBoxHeaders = document.querySelector(".headers")
const wayProductsColumns = document.querySelectorAll(".products")

console.log(grim)

// LISTENERS
header.addEventListener("click", () => {
    mansusTable.classList.add("hidden")
    wayBox.classList.add("inactive")
})

mainNavItem[0].addEventListener("click", () => {
    mansusTable.classList.toggle("hidden")
    rituals.classList.add("hidden")
    wayBox.classList.add("inactive")
})

mainNavItem[1].addEventListener("click", () => {
    mansusTable.classList.add("hidden")
    rituals.classList.toggle("hidden")
    wayBox.classList.add("inactive")
})

doorTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        wayBox.classList.remove("inactive")
        populateWayBox(tab, wayBoxHeaders)
        populateWayColumns(tab.textContent)
    })
})

// DOM FUNCTIONS

function populateWayBox(tabName, box) {
        if(tabName.textContent.toLowerCase() == "the wood") {
            clearWayBox()
            const woodHeader = document.createElement("div")
            const wellHeader = document.createElement("div")
            const templeHeader = document.createElement("div")

            woodHeader.textContent = "THE WOOD"
            wellHeader.textContent = "THE WELL"
            templeHeader.textContent = "THE TEMPLE OF THE WHEEL"

            box.append(woodHeader, wellHeader, templeHeader)
            
        } else if(tabName.textContent.toLowerCase() == "the white door") {
            clearWayBox()
            const whiteHeader = document.createElement("div")
            const lodgeHeader = document.createElement("div")
            const orchardHeader = document.createElement("div")

            whiteHeader.textContent = "THE WHITE DOOR"
            lodgeHeader.textContent = "LODGE OF THE SAGE KNIGHT"
            orchardHeader.textContent = "THE ORCHARD OF LIGHTS"

            box.append(whiteHeader, lodgeHeader, orchardHeader)
        } else if(tabName.textContent.toLowerCase() == "the stag door") {
            clearWayBox()
            const stagHeader = document.createElement("div")
            const ascentHeader = document.createElement("div")
            const paintedHeader = document.createElement("div")

            stagHeader.textContent = "THE STAG DOOR"
            ascentHeader.textContent = "THE ASCENT OF KNIVES"
            paintedHeader.textContent = "THE PAINTED RIVER"

            box.append(stagHeader, ascentHeader, paintedHeader)
        } else if(tabName.textContent.toLowerCase() == "the spider door") {
            clearWayBox()
            const spiderHeader = document.createElement("div")
            const mallearyHeader = document.createElement("div")
            const chamberHeader = document.createElement("div")

            spiderHeader.textContent = "THE SPIDER'S DOOR"
            mallearyHeader.textContent = "THE MALLEARY"
            chamberHeader.textContent = "THE CHAMBER OF WAYS"

            box.append(spiderHeader, mallearyHeader, chamberHeader)
        } else {
            clearWayBox()
            const peacockHeader = document.createElement("div")
            const redHeader = document.createElement("div")
            const wormHeader = document.createElement("div")

            peacockHeader.textContent = "THE PEACOCK'S DOOR"
            redHeader.textContent = "THE RED CHURCH"
            wormHeader.textContent = "THE WORM MUSEUM"

            box.append(peacockHeader, redHeader, wormHeader)
        }

}

function populateWayColumns(tabName) {
    if(tabName == "The Wood") {
        const wood = mansus.getWay("The Wood").getProducts()
        const well = mansus.getWay("The Well").getProducts()
        const temple = mansus.getWay("The Temple of the Wheel").getProducts()
        
        wood.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[0].appendChild(itemDiv)
        })
        well.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[1].appendChild(itemDiv)
        })
        temple.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[2].appendChild(itemDiv)
        })

        return wayProductsColumns
    } else if(tabName == "The White Door") {
        const white = mansus.getWay("The White Door").getProducts()
        const lodge = mansus.getWay("Lodge of the Sage Knight").getProducts()
        const lights = mansus.getWay("The Orchard of Lights").getProducts()
        
        white.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[0].appendChild(itemDiv)
        })
        lodge.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[1].appendChild(itemDiv)
        })
        lights.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[2].appendChild(itemDiv)
        })

        return wayProductsColumns
    } else if(tabName == "The Stag Door") {
        const stag = mansus.getWay("The Stag Door").getProducts()
        const ascent = mansus.getWay("The Ascent of Knives").getProducts()
        const painted = mansus.getWay("The Painted River").getProducts()
        
        stag.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[0].appendChild(itemDiv)
        })
        ascent.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[1].appendChild(itemDiv)
        })
        painted.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[2].appendChild(itemDiv)
        })

        return wayProductsColumns
    } else if(tabName == "The Spider Door") {
        const spider = mansus.getWay("The White Door").getProducts()
        const malleary = mansus.getWay("The Malleary").getProducts()
        const chamberway = mansus.getWay("The Chamber of Ways").getProducts()
        
        spider.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[0].appendChild(itemDiv)
        })
        malleary.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[1].appendChild(itemDiv)
        })
        chamberway.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[2].appendChild(itemDiv)
        })

        return wayProductsColumns
    } else if(tabName == "The Peacock Door") {
        const peacock = mansus.getWay("The Peacock's Door").getProducts()
        const red = mansus.getWay("The Red Church").getProducts()
        const worm = mansus.getWay("The Worm Museum").getProducts()
        
        peacock.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[0].appendChild(itemDiv)
        })
        red.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[1].appendChild(itemDiv)
        })
        worm.forEach(item => {
            const itemDiv = createDiv(item.name, item.aspect, item.degree)
            wayProductsColumns[2].appendChild(itemDiv)
        })

        return wayProductsColumns
    }
    
}

// UTIL FUNCTIONS

function clearWayBox() {
    wayBoxHeaders.textContent = ""
    wayProductsColumns.forEach(item => {
        item.textContent = ""
    })  
}

function createDiv(name, aspect, degree) {
    const div = document.createElement("div")

    if(aspect == undefined || degree == "") {
        div.textContent = `${name}`
    } else {
        div.textContent = `${name} (${aspect} ${degree})`
    }

    return div
}
