let homeScore = parseInt(document.getElementById("home-score").innerText)
let guestScore = parseInt(document.getElementById("guest-score").innerText)

function addscore(isHome, increment) {
    if (isHome) {
        homeScore += increment
        document.getElementById("home-score").innerText = homeScore
    } else {
        guestScore += increment
        document.getElementById("guest-score").innerText = guestScore
    }
}