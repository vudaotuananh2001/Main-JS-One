document.getElementById('xxxxx').addEventListener("click", GetName);
function GetName() {
    const xhrPhp = new XMLHttpRequest();
    xhrPhp.open('GET', '../data/demophp.php', true);
    xhrPhp.onload = function () {
        console.log(xhrPhp);
        if (this.status == 200) {
            console.log(this.responseText);
        }
    }
    xhrPhp.send();
} 