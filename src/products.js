class Product{
    constructor(name, aspect, degree) {
        this.name = name
        this.aspect = aspect
        this.degree = degree
    }
}

class Way{
    constructor(name) {
        this.name = name
        this.products = []
    }

    setProducts(products) {
        this.products = products
    }

    getProducts() {
        return this.products
    }

    addProducts(newProduct) {
        this.products.push(newProduct)
    }
}

class Mansus{
    constructor() {
        this.mansus = []
        this.mansus.push(new Way("The Wood"))
        this.mansus.push(new Way("The Well"))
        this.mansus.push(new Way("The Temple of the Wheel"))
        this.mansus.push(new Way("The White Door"))
        this.mansus.push(new Way("Lodge of the Sage Knight"))
        this.mansus.push(new Way("The Orchard of Lights"))
        this.mansus.push(new Way("The Stag Door"))
        this.mansus.push(new Way("The Ascent of Knives"))
        this.mansus.push(new Way("The Painted River"))
        this.mansus.push(new Way("The Spider's Door"))
        this.mansus.push(new Way("The Malleary"))
        this.mansus.push(new Way("The Chamber of Ways"))
        this.mansus.push(new Way("The Peacock's Door"))
        this.mansus.push(new Way("The Red Church"))
        this.mansus.push(new Way("The Worm Museum"))
    }

    setMansus(mansus) {
        this.mansus = mansus
    }

    getMansus() {
        return this.mansus
    }

    getWay(wayName) {
        return this.mansus.find(way => way.name.toLowerCase() === wayName.toLowerCase())
    }
}


const occult = new Product("An Occult Scrap", "Secret Histories", 2)
const buzz = new Product("A Buzzing in the Brain", "Moth", 2)
const peculiar = new Product("A Peculiar Rumor", "", "")
const furtive = new Product("A Furtive Truth", "Secret Histories", 4)
const awareness = new Product("An Awareness of Appetite", "Grail", 2)
const vitality = new Product("Vitality")
const subtle = new Product("A Subtle Flaw", "Knock", 2)
const trembling = new Product("Trembling Airs", "Heart", 2)
const restless = new Product("Restlessness", "", "")
const icy = new Product("An Icy Atmosphere", "Winter", 6)
const fascination = new Product("Fascination", "", "")
const glimmering = new Product("Glimmering", "", "")
const erudition = new Product("Erudition", "", "")
const favor = new Product("A Favour from Authority")
const forgotten = new Product("A Forgotten Chronicle", "Secret Histories", 6)
const fracture = new Product("Subtle Fracture", "Knock", 6)
const intensity = new Product("An Intensity of Radiance", "Lantern", 6)
const pulsing = new Product("Pulsing Airs", "Heart", 6)
const heat = new Product("A Trembling Heat", "Forge", 6)
const rupture = new Product("Subtle Rupture", "Knock", 10)
const urgency = new Product("An Urgency of Appetite", "Grail", 6)
const air = new Product("A Furious Air", "Edge", 10)
const bitter = new Product("A Bitter Atmosphere", "Winter", 10)
const erulesson = new Product("Erudition: A lesson learnt", "", "")
const epic = new Product("A Forbidden Epic", "Secret Histories", 8)
const pounding = new Product("Pounding Airs", "Heart", 10)
const blaze = new Product("A Blaze of Radiance", "Lantern", 10)
const unresolved = new Product("Unresolved Ambiguity", "Secret Histories", 10)
const incandescence = new Product("An Incandescence", "Forge", 15)
const iotic = new Product("Iotic Essence", "Forge", 12)
const howling = new Product("A Howling in the Heart", "Moth", 10)
const door = new Product("Wrong Door", "Knock", 15)
const vak = new Product("Scholar: Vak", "", "")
const splendour = new Product("A Splendour", "Lantern", 15)
const map = new Product("Vagabond's Map", "Secret Histories", 12)
const amaranthine = new Product("Amaranthine Nectar", "Grail", 8)
const dread = new Product("Dread", "", "")
const frost = new Product("Perfect Frost", "Winter", 15)
const imperative = new Product("An Imperative of Appetite", "Grail", 10)

const mansus = new Mansus()

const wood = [occult, buzz, peculiar]
const well = [furtive, awareness, vitality, peculiar]
const temple = [furtive, subtle, trembling, peculiar]
const white = [restless, furtive, icy]
const lodge = [fascination, glimmering, erudition, favor, forgotten, fracture]
const lights = [glimmering, forgotten, intensity, pulsing]
const stag = [forgotten, heat, rupture]
const ascent = [urgency, air, bitter]
const painted = [fascination, erulesson, epic]
const spider = [epic, imperative, favor, pounding]
const malleary = [blaze, unresolved, incandescence, iotic]
const chamberway = [fascination, forgotten, bitter, blaze, howling, door]
const peacock = [vak, fascination, unresolved, splendour]
const red = [fascination, favor, map, incandescence, amaranthine]
const worm = [dread, map, frost]

wood.forEach(item => {
    mansus.getWay("The Wood").addProducts(item)
})

well.forEach(item => {
    mansus.getWay("The Well").addProducts(item)
})
temple.forEach(item => {
    mansus.getWay("The Well").addProducts(item)
})
white.forEach(item => {
    mansus.getWay("The White Door").addProducts(item)
})
lodge.forEach(item => {
    mansus.getWay("Lodge of the Sage Knight").addProducts(item)
})
lights.forEach(item => {
    mansus.getWay("The Orchard of Lights").addProducts(item)
})
stag.forEach(item => {
    mansus.getWay("The Stag Door").addProducts(item)
})
ascent.forEach(item => {
    mansus.getWay("The Ascent of Knives").addProducts(item)
})
painted.forEach(item => {
    mansus.getWay("The Painted River").addProducts(item)
})
spider.forEach(item => {
    mansus.getWay("The Spider's Door").addProducts(item)
})
malleary.forEach(item => {
    mansus.getWay("The Malleary").addProducts(item)
})
chamberway.forEach(item => {
    mansus.getWay("THe Chamber of Ways").addProducts(item)
})
peacock.forEach(item => {
    mansus.getWay("The Peacock's Door").addProducts(item)
})
red.forEach(item => {
    mansus.getWay("The Red Church").addProducts(item)
})
worm.forEach(item => {
    mansus.getWay("The Worm Museum").addProducts(item)
})

export default mansus