const btn = document.getElementById('btn');

btn.addEventListener('click', generateAdvice);


//-----usingAJAX-----

// function generateAdvice() {
//     // console.log('click');
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://api.adviceslip.com/advice', true);

//   xhr.onload = function () {
//     if (this.status >= 200 && this.status < 300) {
//       const advice = JSON.parse(this.responseText);
//       const adviceText = document.getElementById('advice');
//       adviceText.innerText = JSON.stringify(advice.slip.advice);
//       const adviceID = document.getElementById('adviceID');
//       adviceID.innerText = JSON.stringify(advice.slip.id);
//   }
// } 

// xhr.send();
// };  


//-------using promise---------
function generateAdvice() { 

  fetch('https://api.adviceslip.com/advice')
  .then(res => {
    if(!res.ok) throw new Error(`Something went wrong. ${res.status} ${res.statusText}`)
    return res.json()
  })
   .then(data => {
    // console.log(data);
      const adviceText = document.getElementById('advice');
      adviceText.innerText = JSON.stringify(data.slip.advice);
      const adviceID = document.getElementById('adviceID');
      adviceID.innerText = JSON.stringify(data.slip.id);
   })
   .catch(err => console.log(err));

}

document.addEventListener("DOMContentLoaded", generateAdvice);