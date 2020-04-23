class Bird {
    constructor(game) {
        this.game = game
        this.birdSpeed = 2
        var b = BirdAnimation.new(game)
        b.x = 110
        b.y = 200
        this.bird = b
        this.jump = true
    }

    static new(game) {
        return new this(game)
    }

    debug() {
        this.birdSpeed = config.bird_speed.value
    }

    update() {
        var self = this
        var b = this.bird
        if (self.jump) {
            self.game.registerAction('a', function(keyStatus) {
                b.move(-self.birdSpeed, keyStatus)
            })
            self.game.registerAction('d', function(keyStatus) {
                b.move(self.birdSpeed, keyStatus)
            })
            self.game.registerAction('j', function(keyStatus) {
                b.jump()
            })
        } else {
            self.game.registerAction('a', function(keyStatus) {

            })
            self.game.registerAction('d', function(keyStatus) {

            })
            self.game.registerAction('j', function(keyStatus) {

            })
        }
    }

    draw() {
    }
}