var formTop = $('.form-top'),
    formTopBtn = $('.form-top-btn'),
    formDown = $('.form-down'),
    formDownBtn = $('.form-down-btn');

// Verification form
// -----------------
function formType(formBtn, formPosition){
  formBtn.on('click' ,(function(){
    objArrayForm = formPosition.serializeArray();

    jsonString = {
      'name' : objArrayForm[0].value,
      'email': objArrayForm[1].value,
      'phone' : objArrayForm[2].value
    };
    if(!jsonString.name || !jsonString.email || !jsonString.phone){
      alert('Заповніть усі поля!');
    }else{
      sendEmail(jsonString.name, jsonString.email, jsonString.phone);
    }
  }));
}

// Send message
// -------------
function sendEmail(name, email, phone) {
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'GjxD_ONVRHU61ZFsZSQQpA', // Не забудь про KEY
      'message': {
        'from_email': 'rnyschyy@gmail.com', // Напиши тут свою пошту
        'from_name': 'Nazarii Banakh', // Тут твоє імя
        'to': [
          {
          'email': email,
          'name' : name,
          'type' : 'to'
          }
        ],
        'autotext': 'true',
        'subject': 'Site name',
        'html': 'Name: '+ name + '<br>' + 'Email: ' + email + '<br>' + 'Phone: ' + phone
      }
    }
  }).done(function (response) {
    console.log(response); // if you're into that sorta thing
  });

  formTopBtn.removeClass('btn-danger').addClass('btn-success').html("Відправлено").prop('disabled', true);
  formDownBtn.removeClass('btn-danger').addClass('btn-success').html("Відправлено").prop('disabled', true);
}

formType(formTopBtn, formTop);
formType(formDownBtn, formDown);


