var API_KEY ="https://jsonplaceholder.typicode.com/todos";
var POST_URL="http://192.168.1.29:1337/todos";
var DESC="http://192.168.1.29:1337/todos?sort=id+desc";

//To display API values
(function ($) {
    $.getJSON(DESC).then(function (data) {
    	var result = { target:data};
    	var template = _.template( $("#tpl").text() );
    	$("#middle").html(template(result));	
    });
})(jQuery);


//To create todo
function createTodo(text) {	
	var toDo = $('#todoTextBox').val();
	//console.log("POST_URL");
	//console.log(POST_URL);
	$.ajax('http://192.168.1.29:1337/todos', {
  	method: 'POST',
  	data:{
    title:toDo,
    completed:false,
    userID:1
  },
  	error:function(e){
  		console.log(e);
  	},
  	dataType:"json",
  	
  });

   var markup = '<li><input type="checkbox" id="mycheckbox" class="done"/>' + text + '</li>';
    $('#todoList').prepend(markup);
    $("#todoTextBox").val('');
}


