window.addEventListener('load', clock())
function clock(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["PN", "WT", "SR", "CZW", "PT", "SB", "ND"];

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;

    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("amPM").innerHTML = ampm;

    console.log(date);
}


