// JavaScript Document
angapp.controller('giftboxcontroller',function($scope,$location,$routeParams,SurpriseBoxService,DashboardService){
		//angular part
		$scope.usr=DashboardService.list();
		$scope.usr.theme="images/ctstheme/surprisebox.jpg";
		function giftopen(){
	$('#myModal').modal('show');
	}
					
	$scope.gifts=SurpriseBoxService.list();
		$('#myModal').on('hidden.bs.modal', function (e) {
			
 SurpriseBoxService.flush();
})
		
		
		});