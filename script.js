const imageFolder = '/images'; // Base folder URL
const imageFiles = ['feed-1.jpg', 'feed-2.jpg', 'feed-3.jpg', 'feed-4.jpg', 'feed-5.jpg', 'feed-6.jpg', 'feed-7.jpg']; // Image filenames


const page2_carousel = document.getElementById('carousel_card');

imageFiles.map((file, id) => {
    const imageUrl = `${imageFolder}/${file}`
     const encodedImageUrl = encodeURIComponent(imageUrl);
    if (id === 0){
        page2_carousel.innerHTML +=`
                <div class="item active">
                        <img src="${imageFolder}/${file}" style="width:100%;">
                        <div class="item-action-box">
                        <a download href="${imageFolder}/${file}"><button class="download-btn">Download</button></a>
                             <a href="https://wa.me/?text=${encodedImageUrl}" target='_blank'><i class="fab fa-whatsapp"></i></a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedImageUrl}" target='_blank'><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/intent/tweet?url=${encodedImageUrl}" target='_blank'><i class="fab fa-twitter"></i></a> 
                        </div>
                    </div>
        `        
    }else{
                page2_carousel.innerHTML +=`
                <div class="item ">
                        <img src="${imageFolder}/${file}" style="width:100%;">
                        <div class="item-action-box">
                        <a download href="${imageFolder}/${file}"><button class="download-btn">Download</button></a>
                            <a href="https://wa.me/?text=${encodedImageUrl}" target='_blank'><i class="fab fa-whatsapp"></i></a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedImageUrl}" target='_blank'><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/intent/tweet?url=${encodedImageUrl}" target='_blank'><i class="fab fa-twitter"></i></a> 
                        </div>
                    </div>
        `   
    }

});

