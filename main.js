var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if (k === 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('123456789'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            // blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        log(event, input.value)
        window.fps = Number(input.value)
    })
}

var aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}

var collide = function(bird, pipe) {
    var a = bird
    var b = pipe
    a.w = 38
    a.h = 34
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
            return true
        }
    }
    return false
}

var __main = function() {
    var images = {
        // flappy bird images
        bg: 'img/bird/bg.png',
        pipe: 'img/bird/pipe.png',
        ground: 'img/bird/ground.png',
        b1: 'img/bird/b1.png',
        b2: 'img/bird/b2.png',
        b3: 'img/bird/b3.png',
        title: 'img/bird/title.png',
        over: 'img/bird/over.png',
        panel: 'img/bird/score_panel.png',
        // big_score
        bs0: 'img/big_score/0.png',
        bs1: 'img/big_score/1.png',
        bs2: 'img/big_score/2.png',
        bs3: 'img/big_score/3.png',
        bs4: 'img/big_score/4.png',
        bs5: 'img/big_score/5.png',
        bs6: 'img/big_score/6.png',
        bs7: 'img/big_score/7.png',
        bs8: 'img/big_score/8.png',
        // small_score
        ss0: 'img/small_score/0.png',
        ss1: 'img/small_score/1.png',
        ss2: 'img/small_score/2.png',
        ss3: 'img/small_score/3.png',
        ss4: 'img/small_score/4.png',
        ss5: 'img/small_score/5.png',
        ss6: 'img/small_score/6.png',
        ss7: 'img/small_score/7.png',
        ss8: 'img/small_score/8.png',
    }
    var game = OxfanGame.instance(30, images, function(g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)

}

__main()