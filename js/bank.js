
let points = localStorage.getItem("Points")

document.getElementById("pointsDisplay").innerHTML = `Total money earned: ${points * 2}`
let inp = document.getElementById("amount")
inp.setAttribute("max", points * 2)

let btn = document.getElementById("collect")

btn.addEventListener('click', () => {
    let name_child=document.getElementById("name").value
    localStorage.setItem("Name",name_child)


    if (inp.value > localStorage.getItem("Points")) {
        let currentPoints = localStorage.getItem("Points")
        let newPoints = 0
        localStorage.removeItem("Points")
        localStorage.setItem("Points", newPoints)
        let money_widrawed = localStorage.getItem("Points") * 2
        localStorage.setItem("WidrawedMoney",money_widrawed)
        window.location.href="money_slip.html"
    }
    else {
        
        let currentPoints = localStorage.getItem("Points")
        let newPoints = Number(currentPoints) - (inp.value / 2)
        localStorage.removeItem("Points")
        localStorage.setItem("Points", newPoints)
        let money_widrawed = inp.value
        localStorage.setItem("WidrawedMoney",money_widrawed)
        window.location.href="money_slip.html"
    }

})









