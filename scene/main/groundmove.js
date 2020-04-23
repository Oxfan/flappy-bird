class GroundMove {
    constructor(game) {
        this.game = game
        // 循环移动的地面
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = OxfanImage.new(game, 'ground')
            g.x = i * 18
            g.y = 400
            // this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 4
        this.move = true
    }

    static new(game) {
        return new this(game)
    }

    update() {
        // 地面移动
        if (this.move) {
            this.skipCount--
            var offset = -5
            if (this.skipCount === 0) {
                this.skipCount = 4
                offset = 15
            }
            for (var i = 0; i < 30; i++) {
                var g = this.grounds[i]
                g.x += offset
            }
        }
    }

    draw() {
    }
}
