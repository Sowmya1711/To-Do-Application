"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var POST_URL = "http://192.168.1.29:1337/todos/";
var DESC = "http://192.168.1.29:1337/todos?sort=id+desc";

var home = function () {
    function home() {
        _classCallCheck(this, home);
    }

    _createClass(home, [{
        key: "maintodo",
        value: function maintodo() {
            $.getJSON(DESC).then(function (data) {
                var result = { target: data };
                var template = _.template($("#tpl").text());
                $("#middle").html(template(result));
            });
        }
    }, {
        key: "createTodo",
        value: function createTodo(text) {
            var toDo = $('#todoTextBox').val();
            $.ajax(POST_URL, {
                method: 'POST',
                data: {
                    title: toDo,
                    completed: false,
                    userID: 1
                },
                error: function error(e) {
                    console.log(e);
                },
                dataType: "json"
            });
            var markup = '<li><input type="checkbox" id="mycheckbox" class="done" onchange="uplChk()" />' + text + '</li>';
            $('#todoList').prepend(markup);
            //this.maintodo();
            //this.todoList;
            $("#todoTextBox").val('');
        }
    }, {
        key: "updateCheck",
        value: function updateCheck() {
            $('input[type="checkbox"]').change(function () {
                var checked = false;
                if ($(this).prop("checked") == true) {
                    checked = true;
                } else if ($(this).prop("checked") == false) {
                    checked = false;
                }
                createCheck($(this).prop("value"), checked);
            });
        }
    }, {
        key: "createCheck",
        value: function createCheck(id, checked) {
            var PUT_LAST = "?completed=";
            var PUT_URLL = POST_URL + id;
            $.ajax(PUT_URLL, {
                method: 'PUT',
                data: {
                    'completed': checked
                },
                success: function success() {
                    alert("Changed");
                },
                error: function error(e) {
                    console.log(e);
                },
                dataType: "json"

            });
        }
    }]);

    return home;
}();

var obj = new home();
obj.maintodo();
function createTodo(text) {
    obj.createTodo(text);
}
function updateCheck() {
    obj.updateCheck();
}
function createCheck(id, checked) {
    obj.createCheck(id, checked);
}