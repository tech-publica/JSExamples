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
        userArea.append(`<div>${user.name} of ${user.company.name} <a role = "button" data-id="${user.id}" class = "btn btn-small btn-info" href="#">DETAIL</a><div class ='detail' style='display:none'></div></div>`);
        userArea.append('<br/>');
    });
}

function toggleDetails(evt) {
    let detail = $(evt.target).parent().find('div.detail').first();
    if (detail.is(':empty')){
        fetch(`https://jsonplaceholder.typicode.com/users/${evt.target.dataset.id}`)
        .then(resp => resp.json())
       // .then(data => showDetails(data, detail))
        .then(data => detail.append("ciao"))
        .then(detail.slideToggle("slow"))
        .catch(error => console.log(error));
    }
    else{
        detail.slideToggle("slow");
    } 
}

function showDetails(user, detailDiv) {
    detailDiv.append(`username:  ${user.username} email:  ${user.email} street address:  ${user.address.street}`);
}