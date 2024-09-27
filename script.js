
function displayGrade(event){
    let mark = document.getElementById("inputMark").value
    if(mark >100){
        alert("Please Enter a Valid Mark")
    }
    else if (mark >= 90 && mark <=100){
        alert("You have Passed \n Grade : A+")
    }
    else if(mark >= 80 && mark <= 89){
        alert("You have Passed \n Grade : A")
    }
    else if(mark >= 70 && mark <= 79){
        alert("You have Passed \n Grade : B+")
    }
    else if(mark >= 60 && mark <= 69){
        alert("You have Passed \n Grade : B")
    }
    else if(mark >= 50 && mark <= 59){
        alert("You have Passed \n Grade : C+")
    }
    else if(mark >= 40 && mark <= 49){
        alert("You have Passed \n Grade : C")
    }
    else if(mark >= 30 && mark <= 39){
        alert("You have Passed \n Grade : D+")
    }
    else if(mark >= 20 && mark <= 29){
        alert("You have Failed \n Grade : D")
    }
    else if(mark < 20){
        alert("You have Failed.... \n Grade : E")
    }
}

let element = document.getElementById("btn-Submit")
element.addEventListener("submit", displayGrade)