// JavaScript Document
// JavaScript Document
angapp.controller('bus_pass_registration3',function($scope,$location,DashboardService,CabRegisService){
		//angular part
		$scope.usr.theme="images/ctstheme/start4.jpg";
		alert("Sms and mail will be sent");
		$scope.usr=DashboardService.list();
		$scope.cab=CabRegisService.list();
		$scope.onsubmit = function () {
		        $.ajax({
             
		            url: "Handlers/buspassregistration.ashx",
		            data: { },
		            contentType: "application/json; charset=utf-8",
		            async: true,
		            dataType: "json",
		            success: function (msg) {
		                var b = "<table><tr><td>Route Name</td>" + "<td>" + res[0].RouteName + "</td></tr>" + "<tr><td>Boarding Point</td><td>" + res[0].BoardingPoint + "</td></tr>" + "<tr><td>Location</td><td>" + res[0].Location + "</td></tr>" + "<tr><td>Cost</td>" + res[0].cost + "</td></tr>" + "<tr><td>Registered Date</td><td>" + registereddate + "</td></tr>" + "<tr><td>Valid Till</td>" + "<td>" + validtill + "</td></tr></table>";
		                document.body.applyElement(b);
                
		                $scope.$apply(function () {

		                    $location.url("/buspass");
		                });

               



		            },
		            error: function (xhr, ajaxOptions, thrownError) {
		                alert(xhr.status);
		                alert(thrownError);
		            }
		        }); // ajax closed

	

		};
		
		
		});