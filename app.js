$(document).ready(function () {
    $('form').submit(function (evt) {
        evt.preventDefault();
    }); // Koniec funkcji submit.
    $('#button').click(function () {
        var $field = $('#textfield')
        var fieldVal = $field.val();
        if (fieldVal) {
            $('#tasklist').append('<li>' + fieldVal + '<a href="#" class="remove-task"><span>x</span></a></li>');
            $field.val('');
        }
    });

    $('#tasklist').on('click', '.remove-task', function (e) {
        e.preventDefault();
        $(this).parent('li').remove();
    });
});