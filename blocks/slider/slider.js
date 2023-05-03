
export default function decorate(block) {
    const images = [...block.children];
    let currentImage = 0;

    function showImage() {
        // hide all images
        images.forEach(img => img.classList.remove('active'));
    
        // show current image
        images[currentImage].classList.add('active');
    
        // update currentImage index
        currentImage = (currentImage + 1) % images.length;
    }

    setInterval(showImage, 2000);
}
  