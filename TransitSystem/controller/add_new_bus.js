// JavaScript Document
angapp.controller('add_new_bus',function($scope,$location,AddBusService,DashboardService){
		//angular part
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start3.jpg";
		$scope.bus=AddBusService.list();
		$scope.onsubmit=function(){
		    $.ajax({

		        url: "Handlers/Admin/AddNewBusHandler.ashx",
		        data: { "bus_no": $scope.AddBusService.bus_no, "city": $scope.AddBusService.city,  "capacity": $scope.AddBusService.capacity, "route_no" : "123" },
		        contentType: "application/json; charset=utf-8",
		        async: true,
		        dataType: "json",
		        success: function (msg) {

		            $scope.finish = function () {

		                $location.path("/add_new_bus2.js");




		            }



		        },
		        error: function (xhr, ajaxOptions, thrownError) {
		            alert(xhr.status);
		            alert(thrownError);
		        }
		    }); // ajax closed
		
	
		};
	

	
	
					//Jquery
					///go green 
					
								
								
					
	
});


