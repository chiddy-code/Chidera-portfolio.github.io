    function secondary_theme() {
    let secondaryTheme = document.querySelectorAll(".secondary-ui-theme")

        for (let i = 0; i < secondaryTheme.length; i++) {
            j = i - 1
            j++
            let repeat = secondaryTheme[j];
    let clock = new Date()
    let h = clock.getHours()
    if (h >= 0 && h < 6  ){
        repeat.style.backgroundImage = "linear-gradient(40deg, black, darkblue)"
    repeat.style.color = "wheat"
    } else if (h >= 6 && h < 8) {
        repeat.style.backgroundImage = "linear-gradient(45deg, orange, blue)"
    repeat.style.color = "white"
    } else if(h >= 8 && h < 12) {
        repeat.style.backgroundImage = "linear-gradient(135deg, yellow, #00affd, skyblue)"
    repeat.style.color = "black"
    } else if (h >= 12 && h < 16) {
        repeat.style.backgroundImage = "linear-gradient(195deg, orange, #FF9800, yellow)"
    repeat.style.color = "darkred"
    } else if ( h >= 16 && h < 20){
        repeat.style.backgroundImage = "linear-gradient(360deg, #a77f06, #6f4e1dab, #184d65)"
    repeat.style.color = "black"
    } else if (h >= 20 && h < 24) {
        repeat.style.backgroundImage = "linear-gradient(145deg, #16164d, #01011c, #000000)"
    repeat.style.color = "wheat"
    }
}

}
secondary_theme()
setInterval(secondary_theme, 1)

function primaryTheme() {
let mainTheme = document.querySelectorAll(".main-ui-theme")
let mainThemeBorders = document.querySelectorAll(".main-ui-theme-borders")
let main_shadow = document.querySelectorAll(".main-ui-shadow")



for (let j = 0; j < mainTheme.length; j++) {
    k = j - 1
    k++
    let repeat = mainTheme[k]
    let repeat2 = mainThemeBorders
let clock = new Date()
    let h = clock.getHours()
    if (h >= 0 && h < 6  ){
        repeat.style.backgroundColor = "#1b2165"
        repeat.style.color = "wheat"
    } else if (h >= 6 && h < 8) {
        repeat.style.backgroundColor = "#0a1993"
        repeat.style.color = "white"
    } else if(h >= 8 && h < 12) {
        repeat.style.backgroundColor = "#9ce700"
        repeat.style.color = "black"
    } else if (h >= 12 && h < 16) {
        repeat.style.backgroundColor = "#f59422"
        repeat.style.color = "darkred"
    } else if ( h >= 16 && h < 20){
        repeat.style.backgroundColor = "#998a5a"
        repeat.style.color = "black"
    } else if (h >= 20 && h < 24) {
        repeat.style.backgroundColor = "#1f3255"
        repeat.style.color = "wheat"
    }    

repeat2.forEach(e => {
    e.style.border = `1vw solid ${repeat.style.backgroundColor}`
})

main_shadow.forEach(e => {
e.style.boxShadow = `${repeat.style.backgroundColor} 0px 0px 7px 4px`
})


}

function primary_body() {
    let body = document.querySelector("body")
    let clock = new Date()
    let h = clock.getHours()
    if (h >= 0 && h < 6  ) {
        body.style.backgroundColor = "#777ec7"
    } else if (h >= 6 && h < 8) {
        body.style.backgroundColor = "#9494fb"
    } else if(h >= 8 && h < 12) {
        body.style.backgroundColor = "a6f5ff"
    } else if (h >= 12 && h < 16) {
        body.style.backgroundColor = "#ffdcbf"
    } else if ( h >= 16 && h < 20){
        body.style.backgroundColor = "#efe6c8"
    } else if (h >= 20 && h < 24) {
        body.style.backgroundColor = "#a9e5e5"
    }

}
setInterval(primary_body, 1)

}
primaryTheme()
setInterval(primaryTheme, 1)
