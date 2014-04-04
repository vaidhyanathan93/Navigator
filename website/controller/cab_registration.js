// JavaScript Document
// Jquery

angapp.controller('cab_registration',function($scope,$location,DashboardService,CabRegisService){
		//angular part
		$scope.usr=DashboardService.list();	//load the jax there using $http
		
	
		$scope.cab=CabRegisService.list();
		$scope.cab.city=$scope.usr.city;
		$scope.cab.moile=$scope.usr.phone;
		
		$scope.onsubmit=function(){
	
$location.path("/cab_registration2");
		};
	
	
	
					//Jquery
					///go green 
					//
					$('#cabtypedis').hide();

					$('.btn-toggle').click(function() {
					$('.btn').toggleClass('active');  
					$('#cabtypedis').toggle();
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


