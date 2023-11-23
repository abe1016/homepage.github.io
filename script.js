function goToPage(page) {
    var newPagePath = page + '.html';

    window.location.href = newPagePath;
}

var homeButton = document.getElementById('home');
var cityButton = document.getElementById('city');

homeButton.addEventListener('click', function() {
    goToPage('home');
});

cityButton.addEventListener('click', function() {
    goToPage('city');
});
