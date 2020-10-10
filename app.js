const text = document.querySelector('.fancy');
const conText = text.textContent;
const splitText = conText.split('');
text.textContent='';

for(let i=0; i<splitText.length; i++){
    text.innerHTML += '<span>' + splitText[i] + '</span>';
}


const onTick=()=>{
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char==splitText.length){
      complete();
      return;
  }
}

const complete=()=>{
    clearInterval(timer);
    timer = null;
}

let char = 0;
let timer = setInterval(onTick,50);