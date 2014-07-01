// JavaScript Document

angapp.controller('busschedulecontroller',function($scope,$http,$location,DashboardService){
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start2.jpg";
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
		
$location.path("/bus_schedule2");
$scope.usr.theme="images/ctstheme/surprisebox.jpg";
		
	
		};
		
	
	
})
