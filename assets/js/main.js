document.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',e=>{

    const href=link.href;

    if(href.includes('#')) return;

    e.preventDefault();

    document.body.classList.add('fade-out');

    setTimeout(()=>{
      window.location=href;
    },500);
  });
});
