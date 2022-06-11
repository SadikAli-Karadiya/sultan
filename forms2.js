$(document).ready(function () {



    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");









    $("#form").validate({


        rules: {

            pphoto: {
                required: true,

            },

            fadhar: {
                required: true,

            },

            badhar: {
                required: true,

            },

            pan: {
                required: true,

            },


        },

        // highlight: function (element) {
        //     $(element).addClass("c1");
        // },


        // unhighlight: function (element) {
        //     $(element).removeClass("c1");
        // },

        messages: {

            pphoto: {
                required: "Please upload Passport Photo"

            },

            fadhar: {
                required: "Please upload Adhar Card Front Side"

            },

            badhar: {
                required: "Please upload Adhar Card Back Side"

            },

            pan: {
                required: "Please upload PAN Card"

            },





        },

        submitHendler: function (form) {
            form.submit();
        }




    });


});

function validate(){

    $("#pphoto_error  ").html("");
    $("#pphoto").css("border-color", "red");
   var file_size = $("#pphoto")[0].files[0].size;
    if (file_size > 2097152) {
        $("#pphoto_error").html("File size is greater than 2MB");
        $("#pphoto").css("border-color", "red");
        return false;
    }

    // $("#fadhar_error ").html("");
    // $("#fadhar").css("border-color", "red");
    // var file_size = $("#fadhar")[0].files[0].size;
    // if (file_size > 2097152) {
    //     $("#fadhar_error").html("File size is greater than 2MB");
    //     $("#fadhar").css("border-color", "red");
    //     return false;
    // }

   



    return true;

    

   


       


};






