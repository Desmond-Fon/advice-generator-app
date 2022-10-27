const btn = document.getElementById('btn');

btn.addEventListener('click', generateAdvice);

function generateAdvice() {
    // console.log('click');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.adviceslip.com/advice', true);

  xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
      const advice = JSON.parse(this.responseText);
      const adviceText = document.getElementById('advice');
      adviceText.innerText = JSON.stringify(advice.slip.advice);
      const adviceID = document.getElementById('adviceID');
      adviceID.innerText = JSON.stringify(advice.slip.id);
  }
} 

xhr.send();
};  