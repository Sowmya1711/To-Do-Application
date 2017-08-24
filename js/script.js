var API_KEY ="https://jsonplaceholder.typicode.com/todos";

(function($) {
	$.getJSON(API_KEY).then(function(data){	
		$.each(data,function(key,value){
			$("#todoList").append('<li><input type="checkbox" class="done"/>'+value.title+'</li>');
		/*	$("#sortable").sortable();*/
/*$("#sortable").disableSelection();*/
		});
	});
})(jQuery);



countTodos();
/*
// all done btn
$("#checkAll").click(function(){
    AllDone();
});*/

//create todo
$("#newtext").on('keypress',function (e) {
     
    countTodos();
          
});