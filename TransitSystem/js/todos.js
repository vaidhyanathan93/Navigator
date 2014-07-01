// JavaScript Document
function TodoList($scope){
$scope.todos=[
{text:"HAve lunch",done:true},
{text:"Have some Handler",done:false},
{text:"This is priya",done:false}];
$scope.remaining=function(){
	count=0;
	angular.forEach($scope.todos, function(todo){
		
		
		count += todo.done ? 0 : 1;
		
		
		});
	
	
	return count;
	}
	
	
	}