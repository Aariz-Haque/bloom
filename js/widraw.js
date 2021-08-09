let name_child=localStorage.getItem("Name")
let money_widrawed=localStorage.getItem("WidrawedMoney")
document.getElementById("statement").innerHTML=`This is to Certify that ${name_child} earned ₹${money_widrawed} by playing quiz on bloom app`
localStorage.removeItem("WidrawedMoney")