document.addEventListener("DOMContentLoaded", function() {
    function digitalWatch() {
        var date = new Date();
        var day = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        document.getElementById("watch").innerHTML = day+ '.' + month + '.' + year + ' ' + hours + ":" + minutes;
    }
    function clockStart() {
        setInterval(digitalWatch, 1000);
        digitalWatch();
    }
    clockStart();
});