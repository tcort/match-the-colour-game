$(function () {

    const colours = [
        '00','11','22','33',
        '44','55','66','77',
        '88','99','AA','BB',
        'CC','DD','EE','FF',
    ];

    function paint_canvas(id, colour) {
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = colour;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function roll() {
        return Math.floor(Math.random() * colours.length);
    }

    function get_user_colour() {
        return '#' + (colours[$('#red').val()] + colours[$('#green').val()] + colours[$('#blue').val()]);
    }

    const target_colour = '#' + (colours[roll()] + colours[roll()] + colours[roll()]);
    paint_canvas('target-colour', target_colour);


    $('input[type="range"]').each(function () {
        $(this).on('input', function () {
            $('#' + $(this).data('value-target')).html($(this).val());
            paint_canvas('user-colour', get_user_colour());
        });

        $(this).on('change', function () {
            console.log(target_colour, get_user_colour());
            if (get_user_colour() === target_colour) {
                alert('You win! The colour code is: ' + target_colour);
                location.reload();
            }
        });
        $(this).trigger("input");
    });

});
