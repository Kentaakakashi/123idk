async function startCamera(id){

  const container=document.getElementById(id);

  const stream=await navigator.mediaDevices.getUserMedia({video:true});

  const video=document.createElement('video');

  video.autoplay=true;
  video.srcObject=stream;

  container.innerHTML='';

  container.appendChild(video);

  const snap=document.createElement('button');

  snap.innerText='Snap Photo!';
  snap.className='camera-btn';

  snap.style.position='absolute';
  snap.style.bottom='20px';

  snap.onclick=()=>{

    const canvas=document.createElement('canvas');

    canvas.width=video.videoWidth;
    canvas.height=video.videoHeight;

    const ctx=canvas.getContext('2d');

    ctx.drawImage(video,0,0);

    stream.getTracks().forEach(track=>track.stop());

    container.innerHTML='';

    container.appendChild(canvas);
  };

  container.appendChild(snap);
}

const downloadBtn=document.getElementById('downloadBtn');

if(downloadBtn){

  downloadBtn.addEventListener('click',async()=>{

    const canvas=await html2canvas(document.getElementById('captureArea'));

    const link=document.createElement('a');

    link.download='photobooth.png';
    link.href=canvas.toDataURL();

    link.click();
  });
}
