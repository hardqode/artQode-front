$('[btn-role="show-password"]').on('click', function () {
    var $input = $(this).parent().find('input');
    var $attr = $input.attr('type');

    if ($attr === 'text') {
        $input.attr('type', 'password');
        $(this).find('img').attr('src','./assets/svg/show-password.svg')
    } else {
        $input.attr('type', 'text');
        $(this).find('img').attr('src','./assets/svg/hide-password.svg')
    }
})