var API_KEY ="https://jsonplaceholder.typicode.com/todos";

//To display API values
(function ($) {
    $.getJSON(API_KEY).then(function (data) {
        $.each(data, function (key, value) {
        	//create checkbox for api list and add text in the begining using prepend
            $("#todoList").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>' + value.title + '<span class="glyphicon glyphicon-pencil"></span></li>');
            //completed task from api is marked in checkbox
            $("#mycheckbox").prop('checked', value.completed);
        });
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
    var markup = '<li><input type="checkbox" id="mycheckbox" class="done"/>' + text + '<span class="glyphicon glyphicon-pencil"></span></li>';
    $('#todoList').prepend(markup);
    $("#todoTextBox").val('');
}

/*var option = {trigger : $("input.btn_edit"), action : "click"};
$("span#edit").editable(option, function(e){
  alert(e.value);
});*/