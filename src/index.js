import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { setImgURL, setImgWidth, setImgBorderThickness, setImgBorderColor, toggleDarkMode } from './program.js';
console.log('jó')
document.getElementById('imgUrl').addEventListener('change', setImgURL)
document.getElementById('imgWidth').addEventListener('input', setImgWidth)
document.getElementById('imgBorderThickness').addEventListener('input', setImgBorderThickness)
document.getElementById('imgBorderColor').addEventListener('input', setImgBorderColor)
document.getElementById('btnToggleDarkMode').addEventListener('click', toggleDarkMode)



