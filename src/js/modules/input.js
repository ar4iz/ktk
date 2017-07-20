$(function() {
    var r = $('input');
    r.on('mouseenter', function() {
        var p = r.val();
        r.on('click', function() {
            p = r.val();
            bg(p);
        });
        r.on('mousemove', function() {
            p = r.val();
            console.log(p)
            bg(p);
        });
    });

    function bg(n) {
        r.css({
            'background-image': '-webkit-linear-gradient(left ,#f22 0%,#f22 ' + n / 1 + '%,#fff ' + n / 1 + '%, #fff 100%)'
        });
    }
});