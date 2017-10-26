$(document).ready(function () {
    var $field = $('#textfield')
    $('form').submit(function (evt) {
        evt.preventDefault();
    });

    $('#button').click(function () {
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