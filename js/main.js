
$.ajax({
  type: 'GET',
  url: 'https://jsonplaceholder.typicode.com/todos',
  success: function(todoList) {
    console.log("got it!", todoList); //returns all 
		
  }
});


$.ajax({
  type: 'POST',
  url: 'https://jsonplaceholder.typicode.com/todos',
  data: {title: 'Birthday', completed: false},
  success: function(todoList) {
    console.log("added!", todoList); //the new item is returned with an ID
   
  }
});