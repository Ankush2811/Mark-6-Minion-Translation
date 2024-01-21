var inputText = document.querySelector('#usertext')
var outputText = document.querySelector('#translation')
var buttonCall = document.querySelector('#btn-translate')
var api = "https://api.funtranslations.com/translate/minion.json";

// FetchData
function fetchData(){
  let userSpeak = inputText.value
  fetch(`${api}?text=${userSpeak}`)
  .then((response) => response.json())
  .then((data)=>{
    outputText.innerHTML = data.contents.translated
  })
  .catch((error) => console.log(error));
}

buttonCall.addEventListener("click", fetchData);