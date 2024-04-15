import mansus from "./products.js"

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
const wayBoxHeaders = document.querySelector(".headers")

const wayProductsColumns = document.querySelectorAll(".products")

doorTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        console.log(tab.textContent)
        populateWayBox(tab, wayBoxHeaders)
        populateWayColumns(tab.textContent)
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




// UTIL

function clearWayBox() {
    wayBoxHeaders.textContent = ""
    wayProductsColumns.forEach(item => {
        item.textContent = ""
    })
    wayBox.style.display = "grid"   
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

console.log(mansus.getWay("The White Door"))