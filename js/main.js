var API_KEY = "https://jsonplaceholder.typicode.com/todos";
var POST_URL="http://192.168.1.29:1337/todos";
(function ($) {
    $.getJSON(POST_URL).then(function (data) {
        $.each(data, function (key, value) {
            $("#todolist").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>' + value.title + '<span class="glyphicon glyphicon-pencil"></span></li>');
            $("#mycheckbox").prop('checked', value.completed);
        });
    });
})(jQuery);

$('#TodoTextBox').keypress(function (event) {
    event.stopPropagation();
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        console.log('You pressed "enter key" in textbox');
        if ($(this).val() != '') {
            var todo = $(this).val();
            console.log(todo);
            createTodo(todo);
        } else {

        }
    }
});

function createTodo(text) {
    $.ajax({
  type: 'POST',
  url: 'http://192.168.1.29:1337/todos',
  data: {title: 'Birthday', completed: false},
  success: function(todoList) {
    console.log("added!", todoList); //the new item is returned with an ID
  }
});
    var markup = '<li><input type="checkbox" id="mycheckbox" class="done"/>' + text + '<span class="glyphicon glyphicon-pencil"></span></li>';
    $('#todolist').prepend(markup);
    $("#TodoTextBox").val('');
}