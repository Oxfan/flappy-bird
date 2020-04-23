class SceneTitle extends OxfanScene {
    constructor(game) {
        super(game)

        //bg
        var bg = OxfanImage.new(game, 'bg')
        this.addElement(bg)

        // 加入地面
        this.groundMove = GroundMove.new(game)
        for (var i = 0; i < this.groundMove.grounds.length; i++) {
            var g = this.groundMove.grounds[i]
            this.addElement(g)
        }
        this.addElement(this.groundMove)

        // 加入 bird
        var b = OxfanAnimation.new(game)
        b.x = 110
        b.y = 200
        this.bird = b
        this.addElement(this.bird)

        // 加入标题
        var title = OxfanImage.new(game, 'title')
        title.x = 50
        title.y = 80
        this.addElement(title)

        // 游戏说明
        var label_2 = OxfanLabel.new(game, '按 k 开始游戏', 100, 160, '15px')
        var label_4 = OxfanLabel.new(game, '按 j 跳跃', 100, 180, '15px')

        this.addElement(label_2)
        this.addElement(label_4)

        // 游戏界面转换
        game.registerAction('k', function() {
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }

    update() {
        super.update()
    }
}

