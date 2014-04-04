// JavaScript Document

angapp.controller('busschedulecontroller',function($scope,$http,$location,DashboardService){
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

		
	
		};
		
	
	
})
