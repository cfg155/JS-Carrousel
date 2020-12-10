//generating photos
const generatingFromAPI = (elmnt) => {
    for(let i=0+1;i<elmnt.length-1;i++){
        elmnt[i].setAttribute('src','https://source.unsplash.com/1600x900/?happiness'+[i]);
    }
    elmnt[0].setAttribute('src',elmnt[elmnt.length-2].getAttribute('src'))
    elmnt[elmnt.length-1].setAttribute('src',elmnt[1].getAttribute('src'))
}
generatingFromAPI(document.querySelectorAll('.photo-wrapper img'));


