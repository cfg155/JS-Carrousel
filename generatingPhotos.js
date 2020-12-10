//generating photos
const generatingFromAPI = (elmnt) => {
    console.log(elmnt)
    for(let i=0;i<elmnt.length;i++){
        elmnt[i].setAttribute('src','https://source.unsplash.com/1600x900/?clothes'+[i]);
    }
}
generatingFromAPI(document.querySelectorAll('.photo-wrapper img'));
