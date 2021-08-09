if (localStorage.getItem("Points")==undefined){
    localStorage.setItem("Points",0)
}

// updatePoints()
document.getElementById("Points").innerHTML= "Points: "+String(localStorage.getItem("Points"))

let question=document.getElementById("question")
let option1=document.getElementById("option1")
let option2=document.getElementById("option2")
let option3=document.getElementById("option3")
let option4=document.getElementById("option4")
let allOptions=[option1,option2,option3,option4]
let correct=getRandomNumber(0, allOptions.length-1)

console.log(question.innerHTML);
window.onload=sendApiRequest


async function sendApiRequest() {
    let response = await fetch(`https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple`);
    console.log(response)
    let data=await response.json()
    useApiData(data)
}
function useApiData(data) {
    question.innerHTML=data.results[0].question
    allOptions[correct].innerHTML=data.results[0].correct_answer
    allOptions[correct].addEventListener('click',()=>{
        alert("You got it!🎆")
        updatePoints()
        console.log("Points updated");
        window.location.reload()
    })

    arraymove(allOptions,correct,allOptions.length-1)
    console.log(allOptions);
    allOptions[0].innerHTML=data.results[0].incorrect_answers[0]
    allOptions[1].innerHTML=data.results[0].incorrect_answers[1]
    allOptions[2].innerHTML=data.results[0].incorrect_answers[2]

    allOptions[0].addEventListener('click',()=>{
        alert(`Opps!\r\nThe correct answer is ${allOptions[3].innerHTML}\r\nTry again😬`)
        window.location.reload()
    })
    allOptions[1].addEventListener('click',()=>{
        alert(`Opps!\r\nThe correct answer is ${allOptions[3].innerHTML}\r\nTry again😬`)
        window.location.reload()
    })
    allOptions[2].addEventListener('click',()=>{
        alert(`Opps!\r\nThe correct answer is ${allOptions[3].innerHTML}\r\nTry again😬`)
        window.location.reload()
    })
    startTimer()
}

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}
function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

function startTimer() {
    let time=15
    let x=setInterval(()=>{
        document.getElementById("timer").innerHTML=time
        time--
        if (time<0){
            clearInterval(x)
            alert("Opps!\r\n Times up!")
            window.location.reload()
        }
        
    },1000)
}

function updatePoints() {
    let currentPoints=localStorage.getItem("Points")
    let newPoints=Number(currentPoints)+1
    localStorage.clear()
    localStorage.setItem("Points",newPoints)

}
if (localStorage.getItem("Points")>=10) {
    window.location.href="quizlandind.html"
}