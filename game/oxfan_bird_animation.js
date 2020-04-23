class BirdAnimation extends OxfanAnimation {
    constructor(game) {
        super(game)
        this.rotation = 0
        // this.alpha = 1
        // 重力和加速度
        this.gy = 10
        this.vy = 0
        this.move = true
    }

    static new(game) {
        return new this(game)
    }

    jump() {
        this.vy = -10
        this.rotation = -45
    }

    update() {
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.2
        var h = 365
        if (this.y > h) {
            this.y = h
        }
        // 更新角度
        if (this.rotation < 45) {
            this.rotation += 5
        }
        if (this.move) {
            super.update()
        }
    }

    draw() {
        var context = this.game.context
        context.save()

        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }

        context.globalAlpha = this.alpha

        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)

        context.restore()
    }

    move(x, keyStatus) {
        super.move(x, keyStatus)
    }

    changeAnimation(name) {
        super.changeAnimation(name)
    }
}