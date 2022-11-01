let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 2) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        if (distance < 4) {
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
            if (distance < 6) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            } else {
                if (distance < 8) {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        . . . . .
                        `)
                } else {
                    if (distance < 10) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                }
            }
        }
    }
})
