var photoWrapper = document.querySelector('.photo-wrapper');
var photo = document.querySelectorAll('.photo-wrapper img');
var photoSize = photo[0].width;
photoWrapper.style.transform = `translateX(${-photoSize}px)`;
var count = 0;
function carrousel(){
    const slidingStart = setInterval(() => {
        count++;
        photoWrapper.style.transform = `translateX(${-photoSize*count}px)`;
        photoWrapper.style.transition = 'transform 1s';
        if(count==5){
            photoWrapper.style.transition = null;
            photoWrapper.style.transform = `translateX(${-photoSize}px)`;
            count =1;
        }
    }, 2000);

}
carrousel();

