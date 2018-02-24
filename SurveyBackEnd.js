var text = document.getElementById("question");
var responseButton1 = document.getElementById('but').addEventListener("click",swap());
var progressCounter = document.getElementById("num").value;

function SurveyBackEnd(){
  this.progressValue = 0;
}

function swap(){

var progressValue = parseInt(progressCounter);

var questionBank  = ["Who are you seeking help for?", "Have you been to rehab before?"]
var responseOption = [["Myself","Someone I know"] , ["Yes", "No"]];


}
