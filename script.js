
const svgLike = document.querySelectorAll('.like');
const svgLikePath = document.querySelectorAll('.likePath');





svgLike.forEach(item => item.addEventListener('click', e => {

    let svgTarget = e.target;
    

    if(svgTarget.classList.contains('likeTransition')){

        svgTarget.classList.remove('likeTransition');
        svgTarget.style.animation = 'transitionLike .2s ease-in-out';
        
    }else{

        svgTarget.classList.add('likeTransition');
        svgTarget.style.animation = 'transitionLike .2s ease-in-out';
       
    }


}));

svgLikePath.forEach(item => item.addEventListener('click', e => {

    let pathTarget = e.target;

    if(pathTarget.classList.contains('likePathNew')){

        pathTarget.classList.remove('likePathNew');
        
    }else{
        pathTarget.classList.add('likePathNew');
        
    }

}));


