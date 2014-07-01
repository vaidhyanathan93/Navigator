// JavaScript Document

angapp.controller('modify_bus_detailscontroller',function($scope,$http,$location,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start3.jpg";
$("#result").hide();
$( "#fromdate" ).datepicker({
					defaultDate: "+1w",
					changeMonth: true,
					
					changeYear: true,
					minDate: 0,
					
				});
	$scope.onsearch=function(){
	$("#result").show();
	
		
	
		};
	$scope.onclick=function(){
		
$location.path("/modify_bus_details2");

		
	
		};
		
	
	
})
