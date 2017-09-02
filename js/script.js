var API_KEY ="https://jsonplaceholder.typicode.com/todos";
var POST_URL="http://192.168.1.29:1337/todos";

//To display API values
(function ($) {
    $.getJSON(API_KEY).then(function (data) {
    	var result = { target:data};
    	var template = _.template( $("#tpl").text() );
    	$("#middle").html(template(result));	
    });
})(jQuery);


$('#todoTextBox').keypress(function (event) {
    event.stopPropagation(); //prevent the other events 
    //display data while enter key pressed
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') { // keycode for enter
        console.log('You pressed "enter key" in textbox');
        if ($(this).val() != '') {
            var todo = $(this).val();
            console.log(todo);
            createTodo(todo);
        } else {

        }
    }
});
//To create todo
function createTodo(text) {	
    var toDo = $('#todoTextBox').val();

	// POST adds a random id to the object sent
             $.ajax(POST_URL, {              
                 method: 'POST',
                 data: {
                  title: toDo
                 }
             }).then(function(data) {
             	console.log("welcome page");
             	console.log("My toDo"+toDo);
          });
// 	$.ajax({
//   	type: 'POST',
//   	url: 'POST_URL',
//   	data: {title: text, completed: false},
//   	success: function(todoList) {
//     console.log("added!", todoList); //the new item is returned with an ID
//   }
// });
    var markup = '<li><input type="checkbox" id="mycheckbox" class="done"/>' + text + '</li>';
    $('#todoList').prepend(markup);
    $("#todoTextBox").val('');
}

 

/*	console.log(data);
      /*var todoList = {target:data};*/
   /*
       $.each(data, function (key, value) {
        	create checkbox for api list and add text in the begining using prepend
            $("#todoList").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/> '+ value.title + '<span class="glyphicon glyphicon-pencil"></span></li>');
            completed task from api is marked in checkbox
            $("#mycheckbox").prop('checked', value.completed);
      });*/





