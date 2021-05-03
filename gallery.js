// see my comments below :)
const bannatyneImgs = ['<img src="images/bannatynes/28-06-19/IMG_0316.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0317.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0318.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0319.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0320.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0321.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0322.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0324.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0325.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0326.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0327.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0329.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0330.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0331.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0332.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0333.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0334.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0335.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0336.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0337.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0338.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0339.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0340.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0341.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0342.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0343.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0344.jpg" class="gallery" alt="#">',
                       '<img src="images/bannatynes/28-06-19/IMG_0345.jpg" class="gallery" alt="#">']

const cameronImgs = ['<img src="images/cameronsparty/IMG_0235.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0236.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0237.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0238.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0239.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0240.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0241.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0242.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0243.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0244.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0245.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0246.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0247.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0248.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0249.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0250.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0251.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0252.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0253.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0254.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0255.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0256.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0257.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0258.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0259.jpg" class="gallery" alt="#">',
                     '<img src="images/cameronsparty/IMG_0260.jpg" class="gallery" alt="#">']

const bannatyneGal = document.querySelector('.bannatyne')
const cameronGal = document.querySelector('.cameron')

function displayBannatyne(images, grid) {

    for (let i = 0; i < bannatyneImgs.length; i++) {
        /*console.log(bannatyneImgs[i]);*/
        let image = images[i];

        let item_element = document.createElement('div');
        item_element.classList.add('gallery-image');
        item_element.innerHTML = image;
        
        grid.appendChild(item_element);
    }
}

displayBannatyne(bannatyneImgs, bannatyneGal)

function displayCameron(images, grid) {

    for (let i = 0; i < cameronImgs.length; i++) {
        let image = images[i];

        let item_element = document.createElement('div');
        item_element.classList.add('gallery-image');
        item_element.innerHTML = image;
        
        grid.appendChild(item_element);
    }
}

displayCameron(cameronImgs, cameronGal)


