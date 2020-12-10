var photoWrapper = document.querySelector('.photo-wrapper');
var photo = document.querySelectorAll('.photo-wrapper img');
var photoSize = photo[0].width;
photoWrapper.style.transform = `translateX(${-photoSize}px)`;
var count = 0;
var setTime = 2000;
function carrousel(time){
    const slidingStart = setInterval(() => {
        document.ontransitionend = (e) => e.preventDefault();
        count++;
        photoWrapper.style.transform = `translateX(${-photoSize*count}px)`;
        photoWrapper.style.transition = 'transform 1s';
        if(count==4){
            document.ontransitionend = function(e){
                e.preventDefault();
                photoWrapper.style.transition = null;
                photoWrapper.style.transform = `translateX(${-photoSize}px)`;
            }
            count =1;
        }
    }, time);
}
carrousel(setTime);

