

$('.btn-send').click(
    function () {

        let input_name = $('.input-name').val();
        let input_email = $('.input-email').val();
        let input_message = $('.input-message').val();

        var email_filter_At = 0;
        var email_filter_dot = 0;

        for (i = 0; i < input_email.length; i++) {
            if (input_email[i] == '@') {
                email_filter_At++;
            }

            if (input_email[i] == '.') {
                email_filter_dot++;
            }
        }



        console.log(email_filter_At, email_filter_dot)


        if (input_name == '') {

            $('.err-input-name').css('visibility', 'visible');
        }

        else {
            $('.err-input-name').css('visibility', 'hidden');
        }



        if (input_email == '') {

            $('.err-input-email').css('visibility', 'visible')
        }


        if ((email_filter_At == '1') && (email_filter_dot == '1')) {
            $('.err-input-email').css('visibility', 'hidden')

        }
        else {
            $('.err-input-email').css('visibility', 'visible')
            $('.err-input-email').html("Enter Valid Email");
        }



        if (input_message == '') {
            $('.err-input-message').css('visibility', 'visible')
        }
        else {
            $('.err-input-message').css('visibility', 'hidden')
        }



        if ((input_name != '') && ((email_filter_At == '1') && (email_filter_dot == '1')) && (input_message != '')) {

            $('.err-input-message').css('visibility', 'hidden')
            $('.err-input-email').css('visibility', 'hidden')

            $('.err-input-name').css('visibility', 'hidden');


            alert(`Hi ${input_name} Your Form Send Successfully`)
            $('.input-name').val('')
            $('.input-email').val('')
            $('.input-message').val('')
        }

    }
);

