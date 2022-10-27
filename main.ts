let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 10) {
        if (distance < 8) {
            if (distance < 6) {
                if (distance < 4) {
                    if (distance < 2) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                } else {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        . . . . .
                        `)
                }
            } else {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
