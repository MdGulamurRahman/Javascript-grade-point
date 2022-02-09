const bangla = document.getElementById("bangla")
const english = document.getElementById("english")
const physics = document.getElementById("physics")
const math = document.getElementById("math")
const input = document.querySelectorAll(".inputs")

const add_mark = document.getElementById("add_mark")
add_mark.addEventListener("click", function(){
    if(bangla.value === "" || english.value === "" || physics.value === "" || math.value === ""){
        alert("You have to give the value")
    }else{
        alert("That's great")
        const newBangla = parseInt(bangla.value);
        const newEnglish = parseInt(english.value);
        const newPhysics = parseInt(physics.value);
        const newMath = parseInt(math.value);

        const newTotalMark = document.getElementById("total_mark")
        const totalMark = newBangla + newEnglish + newPhysics + newMath;
        newTotalMark.innerHTML = totalMark;
        //avg 
        const newAvg = document.getElementById("avg_mark");
        const countAvg = totalMark / 4;
        newAvg.innerHTML = countAvg;
        //grade_point
        const newGrade = document.getElementById("grade_point");
        if(countAvg >= 80 && countAvg <= 100){
            newGrade.innerHTML = "A+"
        }
        else if(countAvg >= 70 && countAvg <= 79){
            newGrade.innerHTML = "A"
        }
        else if(countAvg >= 60 && countAvg <= 69){
            newGrade.innerHTML = "A-"
        }
        else if(countAvg >= 50 && countAvg <= 59){
            newGrade.innerHTML = "B"
        }
        else if(countAvg >= 40 && countAvg <= 49){
            newGrade.innerHTML = "C"
        }
        else if(countAvg >= 33 && countAvg <= 39){
            newGrade.innerHTML = "D"
        }
        else{
            newGrade.innerHTML = "F"
        }
        //pass_mark
        const newPassMark = document.getElementById("pass_mark")
        if(countAvg > 33){
            newPassMark.innerHTML = "You have passed"
        }else{
            newPassMark.innerHTML = "You have Failed"
        }
    }
})
//step-2
for(let i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
        if(input[i].value > 100){
            input[i].style.background = "red"
            alert("Please enter the right value")
        }else{
            input[i].style.background = "none"
        }
    })
}