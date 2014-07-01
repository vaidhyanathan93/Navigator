// JavaScript Document
// JavaScript Document
angapp.controller('showstatus', function ($scope, $location, $routeParams, cabstatusservice, DashboardService) {
   
    //angular part
    $scope.usr = DashboardService.list();
    //load the jax there using $http
    $scope.usr.theme = "images/ctstheme/start4.jpg";

    if (!$routeParams.cabstatusid) {
       
        $scope.cabstatus = cabstatusservice.list()[0];
       
    }
    else {
        $scope.cabstatus = cabstatusservice.list()[$routeParams.cabstatusid];

    }
    $scope.onrenew = function () {
        //load the jax there using $http
        if (confirm("Renew for tomorrow")) {
            $location.path("/cab_registration2");
        }
    };
    $scope.oncancel = function (cabid) {
        if (confirm("Conifrm cance the Cab")) {

            $.ajax({

                url: "Handlers/CabRequest/CancelCabRequestHandler.ashx",
                data: { "cab_reuest_id": $scope.cabstatus.cab_request_id },
                contentType: "application/json; charset=utf-8",
                async: true,
                dataType: "json",
                success: function (msg) {

                    $scope.$apply(function () {


                        $scope.usr.theme = "images/ctstheme/start4.jpg";
                        $location.path("/cab_canceled");
                    });
                },

            }); // ajax closed



        }


    }


});