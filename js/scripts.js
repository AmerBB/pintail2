  $(document).ready(function() {
    $('#submit-form').removeAttr('disabled');
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstname: {
                validators: {

                       regexp: {
                        regexp: /^[A-Za-z]{2,}$/,
                        message: 'Prénom incorrect <br> الاسم الشخصي غير صحيح'
                    },
                        notEmpty: {
                        message: 'Champs obligatoires <br> هذا الحقل إجباري'
                    }

                }
            },
             name: {
                validators: {
                     regexp: {
                        regexp: /^[A-Za-z]{2,}$/,
                        message: 'Nom de famille incorrect </br> الاسم العائلي غير صحيح'
                    },
                    notEmpty: {
                        message: 'Champs obligatoires <br> هذا الحقل إجباري'
                    }
                }
            },
            mail: {
                validators: {
                    notEmpty: {
                        message: 'Champs obligatoires <br> هذا الحقل إجباري'
                    },
                    emailAddress: {
                        message: 'Adresse email incorrecte <br>العنوان الإلكتروني غير صحيح'
                    }
                }
            },
            mail_corresponding: {
                validators: {
                    emailAddress: {
                        message: 'Adresse email incorrecte <br>العنوان الإلكتروني غير صحيح'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Champs obligatoires <br> هذا الحقل إجباري'
                    },
                    /*phone: {
                        country: 'fr',
                        message: 'Ce numéro n\'est pas un numéro de téléphone mobile <br> هذا الرقم ليس رقمَ هاتف جوال'
                    }*/
                    regexp: {
                        regexp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/,
                        message: 'Ce numéro de téléphone n\'est pas valide <br>رقم الهاتف الذي أدخلته غير صحيح'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) { 

            var dataForm = {
                name : $('input[name=name]').val(),
                firstname : $('input[name=firstname]').val(),
                mail : $('input[name=mail]').val(),
                phone : $('input[name=phone]').val(),
                mail_corresponding : $('input[name=mail_corresponding]').val()
            }
            $.ajax({
              url: "send_form.php",
              method: "POST",
              data: dataForm,
              dataType: "text"
            }).done(function (data) { 
               $('#myModal1').fadeIn("slow");
               $('#contact_form')[0].reset();
            })
         

        });

  $('.modal').on('shown.bs.modal', function (e) { // This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event.

   //if($(window).width() > 770 ){
   setTimeout(function(){
    $('.scroll-pane').jScrollPane({showArrows: true});


     } , 500);
//}
    
});
    $('#close-modal').click(function(){

        $('#myModal1').fadeOut("slow");
    });
    $( "#phone" ).keyup(function( event ) {
          var sh1 = $( "#phone" ).val().indexOf("0033");
          var sh2 = $( "#phone" ).val().indexOf("+33");
          if(sh1 == 0){
            if( $( "#phone" ).val().length > 13){
                $( "#phone" ).val($( "#phone" ).val().substring(0, 12))
            }
          }else if(sh2 == 0){

            if( $( "#phone" ).val().length > 12){
                $( "#phone" ).val($( "#phone" ).val().substring(0, 11))
            }
          }else{
            if( $( "#phone" ).val().length > 10){
                $( "#phone" ).val($( "#phone" ).val().substring(0, 10))
            }
          }
    })

});

/*function jscroll_refresh() {

var settings = {
    autoReinitialise: true,
    showArrows: true
}
var pane = $(".scroll-pane");
pane.each(
function()
{
    $(this).jScrollPane(settings);

     var api = pane.data('jsp');
            var throttleTimeout;
            $(window).bind(
                'resize',
                function()
                {
                    if (!throttleTimeout) {
                        throttleTimeout = setTimeout(
                            function()
                            {
                                api.reinitialise();
                                throttleTimeout =null;

                            }
                        );
                    }
                }
            );
    });
}
  jscroll_refresh()      
});*/

