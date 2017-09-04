var API_KEY ="https://jsonplaceholder.typicode.com/todos";
var POST_URL="http://192.168.1.29:1337/todos";

//To display API values
(function ($) {
    $.getJSON(POST_URL).then(function (data) {
    	var result = { target:data};
    	var template = _.template( $("#tpl").text() );
    	$("#middle").html(template(result));	
    });
})(jQuery);


/* $('#todoTextBox').keypress(function (event) {
    event.stopPropagation(); //prevent the other events 
    //display data while enter key pressed
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') { // keycode for enter
    //console.log('You pressed "enter key" in textbox');
    if ($(this).val() != '') {
    var todo = $(this).val();
    //console.log(todo);
    createTodo(todo);
    } else {
    }
    }
    });*/


//To create todo
function createTodo(text) {	
	var todo = $('#todoTextBox').val();
	console.log("POST_URL");
	console.log(POST_URL);
	$.ajax('http://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  data: {
    title: 'foo',
    userId: 1
  }
}).then(function(data) {
  console.log(data);
});

   var markup = '<li><input type="checkbox" id="mycheckbox" class="done"/>' + text + '</li>';
    $('#todoList').prepend(markup);
    $("#todoTextBox").val('');
}


