const yestBtn=document.querySelector('#yesBtn');

yestBtn.addEventListener('click', function() {
    alert('Sabía que ibas a decir que si :3, te extraño mucho Luis' )
});

const noBtn=document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function(){
    const randomX= parseInt(Math.random()*100);
    const randomY=parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%, -${randomY}%)`);
})
