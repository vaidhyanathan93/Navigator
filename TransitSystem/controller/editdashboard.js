// JavaScript Document
angapp.controller('editdashboard',function($scope,$http,$location,DashboardService){
	$scope.usr1=DashboardService.list();
	$scope.usr=$scope.usr;
	$scope.usr.theme="images/ctstheme/editdashboard.jpg";
	
	$scope.cancel = function () {
	   
	$location.path("/dashboard");
	};

	$scope.onsubmit = function () {
	   
	    $.ajax({

	        url: "Handlers/Finley/UpdateAssociateDetailsHandler.ashx",
	        data: { "associate_name": $scope.usr.name, "address": $scope.usr.address, "city": $scope.usr.city, "mobile": $scope.usr.phone, "email": $scope.usr.email, },
	        contentType: "application/json; charset=utf-8",
	        async: true,
	        dataType: "json",
	        success: function (msg) {
	            alert("finished");
	            $scope.$apply(function () {

	                $location.path("/dashboard");
	            });





	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	            alert(xhr.status);
	            alert(thrownError);
	        }
	    }); // ajax closed





	}
	
	
})