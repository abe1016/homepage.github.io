function goToPage(page) {
    var newPagePath = page + '.html';

    window.location.href = newPagePath;
}

var homeButton = document.getElementById('index');
var cityButton = document.getElementById('city');

homeButton.addEventListener('click', function() {
    goToPage('index');
});

cityButton.addEventListener('click', function() {
    goToPage('city');
});
