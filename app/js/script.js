document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector('.meteo-review table');
    const rows = table.querySelectorAll('tr');
    var i;
    for ( i=0; i<rows.length; i++) {
        rows[i].dataset.id % 2 === 0 ? rows[i].style.backgroundColor = "#fafafa" : ''
    }
});