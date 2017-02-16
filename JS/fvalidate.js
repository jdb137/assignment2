$(document).ready(function () {
  $("#first").show();
  $("#second").hide();
    $('#myform').validate({ // initialize the plugin
        rules: {
            firstname: {
                required: true,
            },
            lastname: {
                required: true,
            },

            age:{
              required: true,
            },

            social:{
              required: true,
              maxlength: 8,
              minlength: 8,
              number: true,
            }
        },
        submitHandler: function(form) {
          $("#first").hide();
          $("#second").show();
        }

    });


});
