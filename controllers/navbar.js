$(document).ready(function () {
    const navbarBtn = $('#navbarBtn');
    const header = $('#header');
    const nav = $('.nav');

    navbarBtn.on('click', function () {
        console.log("ajbdbasiygadishduahsuaishdu9ashd")
        header.toggleClass('visible');
        nav.toggleClass('visible');
        navbarBtn.toggleClass('scale-up');
    });

    navbarBtn.on('click', function () {
        $(this).toggleClass('scaled');
    });
});
