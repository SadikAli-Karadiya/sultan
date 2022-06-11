$(document).ready(function () {



    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

  

    


    $("#form").validate({

      
        rules: {

            bphoto: {
                required: true

            },

            inumber:{
                required:true
            },

            company: {
                required:true
            },

            mname: {
                required: true

            },

            ram: {
                required: true

            },

            pamount:{
               required:true
           },

            fdown: {
                required: true
            },

            fddate: {
                required: true
            },
            sdown: {
                required: true
            },

            sddate: {
                required: true
            },
            femiamount: {
                required: true
            },

            femidate: {
                required: true
            },
            semiamount: {
                required: true
            },

            semidate: {
                required: true
            },
            temiamount: {
            },

            temidate: {

            },
            famount: {
                required: true

            },

            fdate: {
                required: true
            },


           


        },

        // highlight: function (element) {
        //     $(element).addClass("c1");
        // },
 

        // unhighlight: function (element) {
        //     $(element).removeClass("c1");
        // },

        messages: {

            bphoto: {
                required: "Please upload Bill Photo"

            },

            inumber:{
                required:"Enter Invoice Number"
            },

            company: {
                required:"Please Select Company Name "
            }, 

        

            mname: {
                required: "Please Enter Modale Name"

            },

            ram: {
                required: "Please Select RAM"

            },

         
            pamount:{
                required:"Enter Phone Amount"
            },
           

            fdown: {
                required: "Please Enter First Down Payment"
            },

            fddate: {
                required: " Select First Down Payment Date"
            },
            sdown: {
                required: "Please Enter Secound  Down Payment"
            },

            sddate: {
                required: " Select Secound Down Payment Date"
            },
            femiamount: {
                required:"Enter First EMI Amount"
            },

            femidate: {
                required: "Select First EMI Date"
            },
            semiamount: {
                required:"Enter Secound EMI Amount"
            },

            semidate: {
                required: "Select Secound EMI Date"
            },
            temiamount: {
            },

            temidate: {
            },
            famount: {
                required:"Enter Final Amount"
            },

            fdate: {
                required: "Select Final Date"
            },

          



        },

        submitHendler: function (form) {
            form.submit();
        }




    });

  
});













