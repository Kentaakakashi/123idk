const compliments=[
  'You make distance feel tiny.',
  'Your smile fixes my mood instantly.',
  'You are absurdly lovable.',
  'You feel like peace.',
  'You make ordinary days feel cinematic.'
];

const jar=document.getElementById('jar');
const text=document.getElementById('compliment');

jar.addEventListener('click',()=>{
  const random=compliments[Math.floor(Math.random()*compliments.length)];
  text.textContent=random;
});
