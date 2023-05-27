const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');
const outputbox = document.getElementById('pics');

let filesToSubmit = [];
let file;

//reacts to dragover
dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragText.textContent = 'Release to Upload';
    dragArea.classList.add('active');

});


//reacts to dragleave
dragArea.addEventListener('dragleave', () => {
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');
    filesToSubmit = [] 
});


//reacts to drop
dragArea.addEventListener('drop', (event) => {
    event.preventDefault();

    file = event.dataTransfer.files[0];

    let filetype = file.type;   
    console.log(filetype);

    let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

    if(validExtensions.includes(filetype)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileURL = fileReader.result;
            filesToSubmit.push(fileURL)
            
            let imgTag = `<img src="${fileURL}" alt="">`;
            dragArea.innerHTML = imgTag;
        };
        fileReader.readAsDataURL(file);
    } else {
       alert('This file is not an Image');
       dragArea.classList.remove('active');
    }
});


//submits the pictures
function submit() {
    if (dragArea.classList.contains('active')) {
        for (file of filesToSubmit) {
            let newImageTag = `<img src="${file}"`
            outputbox.innerHTML += newImageTag
        }
        filesToSubmit = []
    }
}
alert('Die Datei wird hochgeladen')