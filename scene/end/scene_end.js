class SceneEnd extends OxfanScene {
    constructor(game) {
        super(game)
    }

    draw(game) {
        // draw lables
        // var score = GuaLabel.new(game, '游戏结束, 按 r 返回标题界面', 10, 20, '20px')
        // this.addElement(score)
        this.game.context.font = '15px Georgia'
        this.game.context.fillText('按 r 返回标题界面', 80, 160)
    }

    update() {

    }
}
