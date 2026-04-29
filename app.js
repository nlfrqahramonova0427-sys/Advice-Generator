const apiURL = "https://api.adviceslip.com/advice";

const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const adviceBtn = document.getElementById('dice-btn');


function getNewAdvice (){
    adviceText.textContent = "Loading..."


fetch(apiURL)
  .then(function(response){
     return response.json();
  })

  .then(function(data){
    adviceId.textContent = data.slip.id;
            adviceText.textContent = `"${data.slip.advice}"`;
        })
  

 .catch(function(error) {
            adviceText.textContent = "Oops! Something went wrong.";
            console.log("Xatolik yuz berdi:", error);
        });   
        
adviceBtn.addEventListener('click', function() {
    getNewAdvice();
});
}

getNewAdvice();
