let imgId = document.getElementById('imgOutput');

export function setImgURL(){
    imgId.src = '../src/' + document.getElementById('imgUrl').value;
}
export function setImgWidth(){
    console.log('width changed')
    imgId.width = document.getElementById('imgWidth').value;

}
export function setImgBorderThickness(){
    console.log('border thickness changed')
    console.log(document.getElementById('imgBorderThickness').value)
    imgId.style.border = document.getElementById('imgBorderThickness').value + 'px solid black'
}
export function setImgBorderColor(){
    console.log('border color changed to ' + document.getElementById('imgBorderColor').value)
    imgId.style.borderColor = document.getElementById('imgBorderColor').value;
}

export function toggleDarkMode(){
    console.log('dark mode toggled')
    var element = document.body;
    element.classList.toggle("dark-mode")
    /*const darkMode = document.querySelector('.dark-mode');
    darkMode.style = 'background-color: red;'*/
}