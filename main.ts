let Score = 0
game.setScore(0)
basic.showNumber(Score)
while (true) {
    let Score__3 = 0
    if (input.pinIsPressed(TouchPin.P0)) {
        game.addScore(1)
        basic.showNumber(Score)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(3000)
    } else {
        basic.showNumber(0)
    }
    if (Score__3) {
        basic.showString("GAME OVER 👍🏻")
    }
}
