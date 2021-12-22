
$(document).ready(function() {


  jQuery.validator.addMethod("dollarsscents", function(value, element) {
          return this.optional(element) || /^\d{0,4}(\.\d{0,2})?$/i.test(value);
      }, "You must include two decimal places");


      $('#myform').validate({ // initialize the plugin
            rules: {

                inputAmount: {
                    required: true,
                    number: true,
                    dollarsscents: true
                }
            },
            // other options, etc.
        });

})
