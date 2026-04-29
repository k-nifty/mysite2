const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
},{threshold:.2});
reveals.forEach(r=>obs.observe(r));

const cursor=document.querySelector('.cursor-light');
document.addEventListener('mousemove',e=>{
  cursor.style.left=e.clientX+'px';
  cursor.style.top=e.clientY+'px';
});

const lines=[
"また、帰り道で会おうね。",
"あの日の約束は、今もここにある。",
"春は、続きを連れてくる。"
];
let i=0;
document.getElementById('letterBtn').onclick=()=>{
  document.getElementById('letterText').textContent=lines[i++%lines.length];
};

const moodBtn=document.getElementById('moodBtn');
let dark=false;
moodBtn.onclick=()=>{
  dark=!dark;
  document.body.style.background=dark?"#0d0d14":"linear-gradient(180deg,#ffd6d6,#fff0e6,#1c1b26)";
};