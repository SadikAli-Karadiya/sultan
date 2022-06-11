
var express = require("express");
var app  = express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/form1.html");
});

app.listen(5501);


$(document).ready(function () {

    function showmenu() {
        $('#menu').css({ "left": "0", "width": "270px" });
    }
    $('document').ready(function () {

        $('#closbtn').mouseover(function () {
            $('#menu').css("left", "-272px");
        })

    });

    function MyFunction() {
        var dropcontent = document.querySelector('.drop-content');
        dropcontent.classList.toggle('dropdown-toggle');
    };






    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");


    $("#form").validate({








        rules: {

            cphoto: {
                required: true,

            },


            fname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            mname: {
                lettersonly: true
            },

            lname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            number: {
                required: true,
                minlength: 10,
                maxlength: 10,


            },

            onumber: {
                minlength: 10,
                maxlength: 10,
            },


            email: {
                required: true,
                email: true
            },

            bdate: {
                require: true

            },

            "gender[]": {
                require: true,

            },

            rfname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            rlname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            rnumber: {
                required: true,
                maxlength: 10,
                minlength: 10
            }

        },


        messages: {

            cphoto: {
                required: "Please upload file."

            },

            fname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"
            },

            mname: {
                lettersonly: "Please Enter Only Letters!!"
            },

            lname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"
            },

            number: {

                required: "Please Enter  Mobile Number",
                maxlength: "Please Enter Only 10 Digit",
                minlength: "Please Enter Valid Number"
            },

            onumber: {
                minlength: "Please Enter Valid Number",

                maxlength: "Please Enter Only 10 Digit"
            },

            email: {
                required: "Please Enter Email Adress",
                email: "Please Enter Correct Email"
            },

            bdate: {
                required: "Please Select Date ",

            },

            "gender[]": {
                required: "Please Select Gender"
            },

            rfname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"
            },

            rlname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"
            },

            rnumber: {
                required: "Please Enter  Mobile Number",
                maxlength: "Please Enter Only 10 Digit",
                minlength: "Please Enter Valid Number",
            }

        },

        submitHendler: function (form) {
            form.submit();
        }




    });
});





