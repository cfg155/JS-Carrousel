var photoWrapper = document.querySelector('.photo-wrapper');
var photo = document.querySelectorAll('.photo-wrapper img');
var photoSize = photo[0].width;
photoWrapper.style.transform = `translateX(${-photoSize}px)`;
var count = 0;
function carrousel(){
    const slidingStart = setInterval(() => {
        count++;
        sliding();
        if(count==5){
            photoWrapper.style.transition = null;
            photoWrapper.style.transform = `translateX(${-photoSize}px)`;
            count =1;
            clearInterval(slidingStart);
            sliding();
            carrousel();
        }
    }, 2000);

    const sliding = () => {
        photoWrapper.style.transform = `translateX(${-photoSize*count}px)`;
        photoWrapper.style.transition = 'transform 1s';
    }
    slidingStart;
}
carrousel();

