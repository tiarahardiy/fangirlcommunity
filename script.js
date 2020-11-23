const card = document.querySelectorAll('.card');
card.forEach(function(el){
    el.addEventListener('click',function(e){
        alert('Please sign in to join your fandom');
    });

});

const namegrup = document.querySelector('.namegrup');
const thumbs = document.querySelectorAll('.thumb');
const jumbo = document.querySelector('.jumbo');
namegrup.addEventListener('click',function(e){
    if(e.target.className == 'thumb'){
        jumbo.src=e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },250);

        thumbs.forEach(function(thumb){
            thumb.className ='thumb';
        });
        e.target.classList.add('active');
    }
});
