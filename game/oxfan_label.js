class OxfanLabel {
    constructor(game, text, x, y, font) {
        this.game = game
        this.text = text
        this.x = x
        this.y = y
        this.font = font
    }

    static new(game, text, x, y, font) {
        return new this(game, text, x, y, font)
    }

    draw() {
        // log('draw label', this.game, this.text)
        this.game.context.font = this.font + ' ' + 'Georgia'
        this.game.context.fillText(this.text, this.x, this.y)
    }

    update() {

    }
}