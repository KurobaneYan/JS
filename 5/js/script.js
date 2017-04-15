$(document).ready(function() {
    $('.bsuFaculties').hide();
    $('#university').change(function() {
        switch($(this).val()) {
            case 'BSU':
                $('.bsuFaculties').show();
                $('.bsuirFaculties').hide();
                $('#faculty').val('Faculty of Law');
                break;
            case 'BSUIR':
                $('.bsuFaculties').hide();
                $('.bsuirFaculties').show();
                $('#faculty').val('Faculty of Computer Systems and Networks');
                break;
        }

    });
});
