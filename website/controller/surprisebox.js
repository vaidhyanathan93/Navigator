// JavaScript Document
angapp.controller('giftboxcontroller',function($scope,$location,$routeParams,SurpriseBoxService){
		//angular part
		function giftopen(){
	$('#myModal').modal('show');
	}
					
	$scope.gifts=SurpriseBoxService.list();
		$('#myModal').on('hidden.bs.modal', function (e) {
			
 SurpriseBoxService.flush();
})
		
		
		});