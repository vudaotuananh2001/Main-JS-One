import { helllo } from './common.js'
const handleHelloword = () => {
    return alert("Demo import export");
}

const hellox = () => {
    helllo();
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    button.addEventListener('click', hellox); // Gán hàm hellox cho sự kiện click
});






