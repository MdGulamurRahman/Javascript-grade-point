const bangla = document.getElementById("bangla")
const english = document.getElementById("english")
const physics = document.getElementById("physics")
const math = document.getElementById("math")
const input = document.querySelectorAll(".inputs")
const add_mark = document.getElementById("add_mark");


//step no-1
for(let i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
        if(input[i].value > 100){
            input[i].style.background = "red";
            alert("Please enter the right number...")
        }else{
            input[i].style.background = "none";
        }
    })
}
//step no-2
add_mark.addEventListener("click", function(){
    if(bangla.value == "" || english.value == "" || physics.value == "" ||math.value == ""){
        alert("You have to give the value!!");
    }else{
        alert("That's great!!")
        const newBangla = parseInt(bangla.value);
        const newEnglish = parseInt(english.value);
        const newPhysics = parseInt(physics.value);
        const newMath = parseInt(math.value);
        //total mark
        const newTotalMark = document.getElementById("total_mark")

        const totalMarks = newBangla + newEnglish + newPhysics + newMath;

       newTotalMark.innerHTML = totalMarks;
       newTotalMark.style.background = "black"
       //average mark
       const newAvg = document.getElementById("avg_mark")
       const totalAvg = totalMarks / 4;
       newAvg.innerHTML = totalAvg;
       newAvg.style.background = "black"
       //grade point 
       const newGrade = document.getElementById("grade_point")
       if(totalAvg >= 80 && totalAvg <= 100){
        newGrade.innerHTML = "A+"
       }else if(totalAvg >= 70 && totalAvg <= 79){
           newGrade.innerHTML = "A-"
       }else if(totalAvg >= 60 && totalAvg <= 69){
           newGrade.innerHTML = "A"
       }
        else if(totalAvg >= 50 && totalAvg <= 59){
           newGrade.innerHTML = "B"
       }
        else if(totalAvg >= 40 && totalAvg <= 49){
           newGrade.innerHTML = "C"
       }
        else if(totalAvg >= 33 && totalAvg <= 39){
           newGrade.innerHTML = "D"
       }else{
           newGrade.innerHTML = "F"
       }
       newGrade.style.background = "black"
        //passed
        const newPassMark = document.getElementById("pass_mark");
        if(totalAvg >= 33){
            newPassMark.innerHTML = "You are Passed!!"
            newPassMark.style.color = "green"
        }
        else{
            newPassMark.innerHTML = "You are Failed!!"
            newPassMark.style.color = "red"
        }

    }
   
});
