var API_KEY ="http://ec2-13-126-50-109.ap-south-1.compute.amazonaws.com:1337/todos";
var POST_URL="http://192.168.1.29:1337/todos/";
var DESC="http://192.168.1.29:1337/todos?sort=id+desc";
var valTrue = "true";
var valFalse = "false";

//To display API values
(function ($) {
	$.getJSON(DESC).then(function (data) {
    var result = { target:data};
    var template = _.template( $("#tpl").text() );
    $("#middle").html(template(result));	
    });
})(jQuery);

//For POST to api
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

function updateCheck(){
    $('input[type="checkbox"]').change(function(){
        var checked = false;
        if($(this).prop("checked") == true){
        checked = true;
        } 
        else if($(this).prop("checked") == false){
        checked = false;
        }
        createCheck($(this).prop("value"), checked);
    });
};

function createCheck(id, checked) {
	
	var PUT_LAST = "?completed=";
	var PUT_URLL = POST_URL + id;
	$.ajax(PUT_URLL, {
  	method: 'PUT',
  	data:{
    	'completed':checked
  	},
  	success: function() {
  		alert("Changed");
  	},
  	error:function(e){
  		console.log(e);
  	},
  	dataType:"json",
  	
    });
}




