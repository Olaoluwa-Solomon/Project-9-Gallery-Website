const imageFolder = '/images'; // Base folder URL
const imageFiles = ['feed-1.jpg', 'feed-2.jpg', 'feed-3.jpg', 'feed-4.jpg', 'feed-5.jpg', 'feed-6.jpg', 'feed-7.jpg']; // Image filenames

// populating the image overview in page 1
const page1_container = document.getElementById('main-container')


imageFiles.slice(0,4).map((file) => {
    page1_container.innerHTML += `<a href="page2.html"><img src="${imageFolder}/${file}" alt="" width="600" height="330"></a>`
});


