// JavaScript Document
// JavaScript Document
angapp.controller('rankingcontroller',function($scope,$http,$location,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/ranking.jpg";
	//$scope.feedbackdata={};
	//$scope.processform=function(){
    //load the jax there using $http
	$.ajax({

	    url: "Handlers/ranking.ashx",
	    data: { "Ass_id": $scope.DashboardService.ass_id},
	    contentType: "application/json; charset=utf-8",
	    async: true,
	    dataType: "json",
	    success: function (res) {
	        for (var i = 0; i < res.length; i++) {
	            var p = "<table><tr><td>Name" + "</td><td>" + res[i].Ass_Name + "</td></tr><tr><td>Ranking" + "</td><td>" + res[i].rank + "</td></tr><tr><td>Empire level" + "</td><td>" + res[i].level + "</td></tr><tr><td>coins" + "</td><td>" + res[i].coins + "</td></tr><table>";
	            document.body.append(p);
	        }




	    },
	    error: function (xhr, ajaxOptions, thrownError) {
	        alert(xhr.status);
	        alert(thrownError);
	    }
	}); // ajax closed

		
	//$location.path("/surprisebox");
		//};
	
	
	
})



