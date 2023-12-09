
function display_color_answer(){
//initiation des variables
const congratulation=document.querySelector("#alert");
congratulation.hidden=true;
const submit = document.querySelector("button[type=submit]");



submit.addEventListener("click", (event) => {
    let all_correct=true;
    const checked_answers = [...document.querySelectorAll(".answer:checked")];
  //enlever le refresh quand on clique sur submit
  event.preventDefault();


  //regarder la question associer à chaque réponses cochés et mettre les couleur correspondante
  checked_answers.forEach((element) => {
    if (element.value == "true") {
      const question = element.closest(".question-item");
      question.classList.add("green");
      question.classList.remove("red");
    } else {
      all_correct=false;
      const question = element.closest(".question-item");
      question.classList.add("red");
      question.classList.remove("green");
    }

  });
  if(all_correct){
    congratulation.hidden=false;
 setTimeout(()=>{
    congratulation.hidden=true;
 },"1000")
  } 
});

}

display_color_answer();



