const myLabel = document.getElementById ("myLabel");

update();

function update(){

    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amorPm = hours >= 12 ? "pm" : "am";

        return `${hours}:${minutes}:${seconds}`
    }
}

