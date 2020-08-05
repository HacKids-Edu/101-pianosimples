let pino2 = 0
let pino8 = 0
let pino1 = 0
basic.forever(function () {
    // Linha 0
    pino2 = pins.digitalReadPin(DigitalPin.P2)
    // Linha 1
    pino8 = pins.digitalReadPin(DigitalPin.P8)
    // Linha 2
    pino1 = pins.digitalReadPin(DigitalPin.P1)
    if (pino2 || (pino8 || pino1)) {
        basic.pause(30)
        pino2 = pins.digitalReadPin(DigitalPin.P2)
        pino8 = pins.digitalReadPin(DigitalPin.P8)
        pino1 = pins.digitalReadPin(DigitalPin.P1)
        if (!(pino1) && (!(pino8) && pino2)) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        if (!(pino1) && (pino8 && !(pino2))) {
            music.playTone(294, music.beat(BeatFraction.Half))
        }
        if (!(pino1) && (pino8 && pino2)) {
            music.playTone(330, music.beat(BeatFraction.Half))
        }
        if (pino1 && (!(pino8) && !(pino2))) {
            music.playTone(349, music.beat(BeatFraction.Half))
        }
        if (pino1 && (!(pino8) && pino2)) {
            music.playTone(392, music.beat(BeatFraction.Half))
        }
        if (pino1 && (pino8 && !(pino2))) {
            music.playTone(440, music.beat(BeatFraction.Half))
        }
        if (pino1 && (pino8 && pino2)) {
            music.playTone(494, music.beat(BeatFraction.Half))
        }
    }
})
