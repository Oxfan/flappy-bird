class Score {
    constructor(game, size, number) {
        this.game = game
        this.big_score = []
        this.small_score = []
        for (let i = 0; i < 9; i++) {
            let s = OxfanImage.new(game, `ss${i}`)
            let b = OxfanImage.new(game, `bs${i}`)
            s.x = 130
            s.y = 215
            b.x = 130
            b.y = 80
            this.big_score.push(b)
            this.small_score.push(s)
        }
        this.setup(size, number)
    }

    setup(size, number) {
        number = String(number)
        let l = number.length
        this.score = []
        if (size === 'b') {
            if (l === 1) {
                this.score.push(this.big_score[number])
            } else {
                for (let i = 0; i < l; i++) {
                    this.big_score[number[i]].x = 130 + i * 24
                    this.score.push(this.big_score[number[i]])
                }
            }
        } else if (size === 's') {
            if (l === 1) {
                this.score.push(this.small_score[number])
            } else {
                for (let i = 0; i < l; i++) {
                    this.small_score[number[i]].x = 130 + i * 12
                    this.score.push(this.small_score[number[i]])
                }
            }
        }
    }

    static new(...arg) {
        return new this(...arg)
    }
}

class Scene extends OxfanScene {
    constructor(game) {
        super(game)
        this.game = game

        //bg
        var bg = OxfanImage.new(game, 'bg')
        this.addElement(bg)

        // 加入水管
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)

        // 加入地面
        this.groundMove = GroundMove.new(game)
        for (var i = 0; i < this.groundMove.grounds.length; i++) {
            var g = this.groundMove.grounds[i]
            this.addElement(g)
        }
        this.addElement(this.groundMove)

        // 加入 bird
        this.bird = Bird.new(game)
        this.addElement(this.bird)
        this.addElement(this.bird.bird)

        // 加入 score
        this.number = 0

        this.score = Score.new(game, 'b', 0)
        this.s = this.score.score[0]
        this.addElement(this.s)

        // gameover
        this.gameover = false

        // 页面转换
        game.registerAction('r', function() {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    over() {
        this.bird.bird.rotation = 90
        this.bird.jump = false
        this.bird.bird.move = false
        this.groundMove.move = false
        this.gameover = true
        this.pipe.move = false
    }

    endScene(game) {
        let end = SceneEnd.new(game)
        this.addElement(end)
        //over
        let over = OxfanImage.new(game, 'over')
        over.x = 40
        over.y = 80
        this.addElement(over)
        // 删除分数
        this.deleteElement(this.s)

        // score panel
        let panel = OxfanImage.new(game, 'panel')
        panel.x = 90
        panel.y = 180
        this.addElement(panel)

        let s = Score.new(this.game, 's', this.number)
        for (let i = 0; i < s.score.length; i++) {
            let sc = s.score[i]
            this.addElement(sc)
        }
    }

    numberOfScore() {
        // 加入 score
        this.score = Score.new(this.game, 'b', this.number)
        this.deleteElement(this.s)
        for (let i = 0; i < this.score.score.length; i++) {
            this.s = this.score.score[i]
            this.addElement(this.s)
        }
    }

    update() {
        if (this.gameover && this.bird.bird.y === 365) {

        } else if (this.bird.bird.y < 365) {
            super.update()
            for (var i = 0; i < this.pipe.pipes.length; i++) {
                var pipe = this.pipe.pipes[i]
                // 判断 bird 和 pipe 相撞
                if (collide(this.bird.bird, pipe)) {
                    // this.over(this.game)
                    this.bird.bird.vy = 20
                    this.over()
                    break
                } else if (this.bird.bird.y > 330 && !collide(this.bird.bird, pipe)) {
                    // 判断 bird 和 ground 相撞
                    this.over()
                    break
                } else if (i % 2 === 0 && (this.bird.bird.x - this.bird.bird.w / 2) === (pipe.x + pipe.w / 2)) {
                    // score 计算
                    this.number += 1
                    this.numberOfScore()
                }
            }

            // 切换到 游戏结束 场景
            if (this.gameover && this.bird.bird.y === 365) {
                this.endScene(this.game)
            }
        }
    }
}

