let Rastgele_Sayi = 0
let Trafık_lambası = ""
input.onButtonPressed(Button.A, function () {
    Rastgele_Sayi = randint(0, 2)
    if (Rastgele_Sayi == 0) {
        Rastgele_Sayi = 0
        Trafık_lambası = "Kırmızı"
    } else if (Rastgele_Sayi == 1) {
        Rastgele_Sayi = 1
        Trafık_lambası = "Sarı"
    } else if (Rastgele_Sayi == 2) {
        Rastgele_Sayi = 2
        Trafık_lambası = "Yesil"
    }
})
basic.forever(function () {
    if (Trafık_lambası == "Kırmızı") {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (Trafık_lambası == "Sarı") {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (Trafık_lambası == "Yesil") {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
