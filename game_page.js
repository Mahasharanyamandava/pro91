player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "answer Turn -" + player2_name;

function send() {
    number1 = document.getElementsById("number_1").value ;
    number2 = document.getElementsById("number_2").value ;
    actual_answer = parseInt(number1) * parseInt(number2);
   console.log(actual_answer);

   question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
   input_box = "<br>Answer : <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = question_number + input_box + check_button ;
   document.getElementsById("output").innerHTML = row;
   document.getElementsById("number1").value = "";
   document.getElementsById("number2").value = "";
        
}
    
