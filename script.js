const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document

let file;

dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragText.textContent = 'Release to Upload';
    dragArea.classList.add('active');

});

dragArea.addEventListener('dragleave', () => {
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');
   
});

dragArea.addEventListener('drop', (event) => {
    event.preventDefault();

    file = event.dataTransfer.files[0];

    let filetype = file.type;   
    console.log(filetype);

    let validExtensions = ['image/jpeg',, 'image/jpg', 'image/png'];

    if(validExtensions.includes(filetype)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileURL = fileReader.result;
            
            let imgTag = `<img src="${fileURL}" alt="">`;
            dragArea.innerHTML = imgTag;
        };
        fileReader.readAsDataURL(file);
    } else{
       alert('This file is not an Image');
       dragArea.classList.remove('active');
    }
 
});