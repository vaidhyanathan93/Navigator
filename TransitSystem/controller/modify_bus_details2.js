// JavaScript Document
// JavaScript Document
angapp.controller('modify_bus_details2controller',function($scope,$location,ModifyBusService,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start4.jpg";
		
		$scope.routes=ModifyBusService.listroutes();
$scope.bus=ModifyBusService.list();
$scope.onupdate = function () {
    $.ajax({

        url: "Handlers/modifybus.ashx",
        data: { "city": $scope.DashboardService.city, "from": $scope.DashboardService.from, "to": $scope.DashboardService.to },
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (res) {
            var a = "<tr><td>" + res[0].busname + "</td><td>" + res[0].boardingtime + "</td><td>" + res[0].droppingtime + "</td><td>" + res[0].noofseats + "</td><td>" + res[0].registeredusers + "</td><td>" + res[0].availableseats + "</td></tr>";
            document.body.table.append(a);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    
    }); // ajax closed

		//load the jax there using $http
		$location.path("/modify_bus_details3");
	
		};
		$scope.oncancel=function(){
			if(confirm("Conifrm Delete the bus")){
				$scope.usr.theme="images/ctstheme/start6.jpg";
	$location.path("/bus_canceled");}
			
			
			}
		
		
	

	
	
					//Jquery
					///go green 
					
								
								
					
	
});


