$(function(){

   $('#myButton').on("click", function(evt) {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(resp => resp.json())
          .then(data => show(data))
          .catch(error => console.log(error));
   });
   let userArea = $('#users');
   userArea.on("click", "a", function(evt) {
       toggleDetails(evt)
   });


});

function show(users) {
    let userArea = $('#users');
    userArea.empty();
    users.forEach(user => {
        userArea.append(`<div>${user.name} of ${user.company.name} <a role = "button" class="btn btn-sm btn-info" data-id="${user.id}" href="#">DETAIL</a></div>`);
        userArea.append('<br/>');
    });
}

function toggleDetails(evt) {
    console.log($(''))
    console.log(evt.target.dataset.id);
    $(evt.target).after("<div class ='detail'>Dettagli..</div>");
}
