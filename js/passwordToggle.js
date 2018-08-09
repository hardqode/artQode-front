$('[btn-role="show-password"]').on('click', function () {
    var $input = $(this).parent().find('input');
    var $attr = $input.attr('type');

    if ($attr === 'text') {
        $input.attr('type', 'password');
    } else {
        $input.attr('type', 'text');
    }
})