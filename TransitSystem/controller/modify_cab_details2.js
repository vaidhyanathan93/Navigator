// JavaScript Document
// JavaScript Document
// JavaScript Document
angapp.controller('modify_cab_details2controller',function($scope,$location,ModifyCabService,DashboardService){
		//angular part
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start4.jpg";
		$scope.cab=ModifyCabService.list();
		$scope.onupdate=function(){
		    $.ajax({

		        url: "Handlers/modifycab.ashx",
		        data: { "city": $scope.ModifyCabService.city, "from": $scope.ModifyCabService.from, "to": $scope.ModifyCabService.to },
		        contentType: "application/json; charset=utf-8",
		        async: true,
		        dataType: "json",
		        success: function (msg) {

		            $scope.$apply(function () {
		                var a = "<tr><td>" + res[0].busname + "</td><td>" + res[0].boardingtime + "</td><td>" + res[0].droppingtime + "</td><td>" + res[0].noofseats + "</td><td>" + res[0].registeredusers + "</td><td>" + res[0].availableseats + "</td></tr>";
		                $location.path("/modify_cab_details3");
		            });





		        },
		        error: function (xhr, ajaxOptions, thrownError) {
		            alert(xhr.status);
		            alert(thrownError);
		        }
		    }); // ajax closed

		
		};
	
	
	$scope.oncancel=function(){
		//load the jax there using $http
		if(confirm("Are you sure to delete the entire cab")==true){
	$location.path("/modify_cab_details");}
		};
	
	
					//Jquery
					///go green 
					
								
								
					
	
});


