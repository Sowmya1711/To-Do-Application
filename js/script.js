var API_KEY ="https://jsonplaceholder.typicode.com/todos";
var POST_URL="http://192.168.1.29:1337/todos";
var DESC="http://192.168.1.29:1337/todos?sort=id+desc";
var PUT_URL="http://192.168.1.29:1337/todos/id+completed";

//To display API values
(function ($) {
    $.getJSON(DESC).then(function (data) {
    	var result = { target:data};
    	var template = _.template( $("#tpl").text() );
    	$("#middle").html(template(result));	
    });

})(jQuery);

function createTodo(text) {	
	var toDo = $('#todoTextBox').val();
	$.ajax(POST_URL, {
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

   var markup = '<li><input type="checkbox" id="mycheckbox" class="done" onchange="uplChk()" />' + text + '</li>';
    $('#todoList').prepend(markup);
    $("#todoTextBox").val('');
}

$(document).on( 'change', '.done', function(){
    if($(this).is(":checked")){
        alert("Checkbox is checked.");
    }
    else if($(this).is(":not(:checked)")){
        alert("Checkbox is unchecked.");
    }
    var chk = $('#todoTextBox').val();
    $.ajax(POST_URL, {
  	method: 'PUT',
 	data: {
    id: 15,
    completed:true
  }
}).then(function(data) {
  console.log(data);
});

    } );




