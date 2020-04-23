class OxfanScene {
    constructor(game) {
        this.game = game
        this.debugModeEnabled = true
        this.elements = []
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }

    deleteElement(element) {
        for (let i = 0; i < this.elements.length; i++) {
            if (element === this.elements[i]) {
                let e = element
                this.elements = this.elements.filter(function(l) {
                    return l !== e
                })
            }
        }
    }

    draw() {
        for (var e of this.elements) {
            e.draw()
        }
    }

    update() {
        this.debug && this.debug()
        if (this.debugModeEnabled) {
            for (var i = 0; i < this.elements.length; i++) {
                var e = this.elements[i]
                e.debug && e.debug()
            }
        }
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
}

