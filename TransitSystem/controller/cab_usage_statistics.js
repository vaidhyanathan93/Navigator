// JavaScript Document
// JavaScript Document
// JavaScript Document

angapp.controller('cab_usage_statisticscontroller',function($scope,DashboardService){
		//angular part
	
	$scope.usr=DashboardService.list();
	$scope.usr.theme="images/ctstheme/start4.jpg";
	$scope.onsearch = function () {

	    var btn = $("#button");

	    btn.button('loading');

	    $.ajax({

	        url: "Handlers/cabusagestatistics.ashx",
	        data: { "sortoption": $scope.DashboardService.sortby },
	            contentType: "application/json; charset=utf-8",
	            async: true,
	            dataType: "json",
	            success: display,
	            error: function (xhr, ajaxOptions, thrownError) {
	                alert(xhr.status);
	                alert(thrownError);
	            }
	        }); // ajax closed

	    function display(res)
	    {
	        var node;
	        for(var i=0;i<res.length;i++)
	        {
	            var b=res[i].cabno+ res[i].rank+res[i].rating+res[i].feedback;
	            node=document.createTextNode(b);
	            $("#StatsContent").append(node);
	        }
	    };

	    //load the jax there using $http
	    alert("sorted");
	    // add load contents to do 
	};
	

	
	
    //Jquery
    ///go green 
					
								
								
					
	
});





