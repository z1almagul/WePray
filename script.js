button.addEventListener('click', e => {
    var userName = document.getElementById('name').value;
    var image;
    this.images = document.getElementsByClassName('image');
    this.message = document.getElementById('message');
    
    if(userName==''){
       for (let i = 0; i < images.length; i++)
            images[i].style.display = "none";
        this.message = 'No image found for the corresponding name.';
    }else{
        this.message = '';
        const imgName = userName.toLowerCase();
        let image = document.getElementById(imgName);
        /*scale image
        let imageWidth = image.width;
        let imageHeight = image.height;
        let scaleFactor = Math.min(canvas.width / image.width , canvas.height / image.height);
        let newWidth = image.width *scaleFactor;
        let newHeight = image.height *scaleFactor;*/
        for (let i = 0; i < images.length; i++)
            images[i].style.display = "none";
        image.style.display = "block";
    }
});
