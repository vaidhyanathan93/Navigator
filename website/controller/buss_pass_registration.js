// Jquery

angapp.controller('bus_pass_registration',function($scope,$location,DashboardService,BusRegisService){
		//angular part
		$scope.usr=DashboardService.list();
		$scope.bus=BusRegisService.list();
		$scope.bus.city=$scope.usr.city;
		$scope.bus.moile=$scope.usr.phone;
		
		$scope.onsubmit=function(){
		//load the jax there using $http
		
	$location.path("/bus_pass_registration2");
		};
	

	
	
					//Jquery
					///go green 
					//
					$('#buspasstypedis').hide();

					$('.btn-toggle').click(function() {
					$('.btn').toggleClass('active');  
					$('#buspasstypedis').toggle();
					if ($('.btn-primary').size()>0) {
						$('.btn').toggleClass('btn-primary');
					}
					$('.btn').toggleClass('btn-default');
					 
   
         
					});
					//enf=d of go green 
					
					 $("#commentpre").hide("fast");
					$("#prevelegeduser").change(function(){
						
						if($("#prevelegeduser").val()=="yes"){
							$("#commentpre").show("slow");
							
						}
						else {
							$("#commentpre").hide("slow");
							
							}
						
						
						});
						
					$( "#fromdate" ).datepicker({
					defaultDate: "+1w",
					changeMonth: true,
					
					changeYear: true,
					minDate: 0,
					
				});
								
								
					
	
});


