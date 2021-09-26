input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 30)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "monte") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (receivedString == "descend") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (receivedString == "eloigne") {
        basic.showLeds(`
            # # # . .
            # # # # .
            # # # # #
            # # # # .
            # # # . .
            `)
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 30)
    } else if (receivedString == "rapproche") {
        basic.showLeds(`
            . . # # #
            . # # # #
            # # # # #
            . # # # #
            . . # # #
            `)
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, 30)
    } else if (receivedString == "gauche") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (receivedString == "droite") {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # # #
            . # # . .
            . . . . .
            `)
    } else if (receivedString == "stop") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, 30)
})
radio.setGroup(1)
Kitronik_Move_Motor.stop()
