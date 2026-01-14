 const soccer= document.querySelector('img');
let start;
let done=false;

function step(timestamp){

      console.log(timestamp);

    if(start===undefined){
        start=timestamp;
    }
    const elapsed=timestamp - start;

   
    soccer.style.transform=`translateY(${elapsed/20}px) rotate(${elapsed/10}deg)`;

    if(elapsed>5000){
        done=true;

    }

    if(done){
        return;
    }

    requestAnimationFrame(step);
}
requestAnimationFrame(step);