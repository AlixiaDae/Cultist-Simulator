class Ritual {
    constructor(name, ingredients, notes) {
        this.name = name
        this.ingredients = ingredients
        this.notes = notes
    }
}

class Grimoire {
    constructor() {
        this.rituals = []
    }

    getRituals() {
        return this.rituals
    }

    addRitual(newRitual) {
        this.rituals.push(newRitual)
    }
}

const shattered = new Ritual("Shattered Risen", ["4 Winter", "2 Edge", "Human Corpse"], "")
const burgeoning = new Ritual("Burgeoning Risen", ["4 Winter", "2 Moth", "Human Corpse"], "")
const renew = new Ritual("Renews a Risen", ["4 Winter", "4 Moth", "Burgeoning Risen"], "")
const king = new Ritual("King Crucible", ["5 Knock", "10 Forge", "2 Lantern"])
const ezeem = new Ritual("Ezeem, the Second Thirstly", ["5 Knock", "10 Grail", "2 Forge"], "Tutor for Phrygian")
const teresa = new Ritual("Teresa", ["5 Knock", "10 Lantern", "2 Secret Histories"], ["Tutor for Fucine", "Dream of a Key to get Frau Schlussel"])
const maid = new Ritual("Maid-in-the-Mirror", ["2 Knock", "8 WInter", "2 Edge"], "")
const caligine = new Ritual("Caligine", ["2 Knock", "6 Forge", "2 Winter"])
const raw = new Ritual("Raw Prophet", ["2 Knock", "6 Grail", "2 Moth"], "Can be used to get rid of Evidence")
const hint = new Ritual("Hint", ["2 Knock", "6 Lantern", "2 Edge"], "")
const percussigant = new Ritual("Percussigant", ["2 Knock", "6 Heart", "2 Edge"], "")
const voiceless = new Ritual("Voiceless Dead", ["2 Knock", "4 Winter", "2 Heart"], "Can be used to get rid of Evidence")

const grim = new Grimoire()

const array = [burgeoning, caligine, ezeem, hint, king, maid, percussigant, raw, renew, shattered, teresa, voiceless]

array.forEach(item => {
    grim.addRitual(item)
})

export default grim