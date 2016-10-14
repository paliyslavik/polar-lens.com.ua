$(document).ready(function () {
        //Form send
        $('form[name="sendmessage"]').submit(function (e) {
            e.preventDefault();
            var name, email, message;
            name = $(this).find('input[name="name"]').val();
            email = $(this).find('input[name="email"]').val();
            surname = $(this).find('input[name=surname]').val();
            tel = $(this).find('input[name=phone]').val();
            message = $(this).find('textarea[name="comment"]').val();
            console.log(name, email, surname, tel, message);
            $.post("mail.php", {name: name, email: email, surname: surname, tel: tel, message: message}, function (status) {
                alert(status);
            });

        })
    });