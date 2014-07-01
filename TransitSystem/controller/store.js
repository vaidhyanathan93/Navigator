angapp.controller('storeController',function($scope,$location,$routeParams,SurpriseBoxService,DashboardService){
		//angular part
		$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/feedback.jpg";
	$scope.buy = function (id) {
	    $.ajax({

	        url: "Handlers/store.ashx",
	        data: { "item_id":$scope.DashboardService.itemId},
	        contentType: "application/json; charset=utf-8",
	        async: true,
	        dataType: "json",
	        success: function (msg) {

	       




	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	            alert(xhr.status);
	            alert(thrownError);
	        }
	    }); // ajax closed

	

	
		
	
		};
		$scope.castle="images/store/castle1.jpg";
		});