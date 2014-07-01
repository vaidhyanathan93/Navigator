// JavaScript Document
angapp.controller('showpass', function ($scope, $location, $routeParams, buspassservice, DashboardService) {
    //angular part

    $scope.usr = DashboardService.list();
    $scope.usr.theme = "images/ctstheme/start2.jpg";
    if (!$routeParams.buspassid) { $scope.buspass = buspassservice.list()[0]; }
    else {
        $scope.buspass = buspassservice.list()[$routeParams.buspassid];

    }
    $scope.onrenew = function (buspassid) {
        //load the jax there using $http
        if (confirm("Renew for one more month")) {

            //alert("ajax");
            $.ajax({                                    //ajax call for getting UserDetails
                url: "/Handlers/BusPass/RenewBusPassHandler.ashx",
                data: { "bus_pass_id": buspassid },
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (msg) {
                    buspassservice.updatelist();
                    alert("pass updated and renewed for 1 more month ");
                    $scope.$apply(function () {


                        $location.path("/bus_pass");
                    })
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            }); // ajax closed





        }
    };



    $scope.oncancel = function (buspassid) {
        if (confirm("Confirm cancel the bus pass")) {
            alert(buspassid);
            $.ajax({                                    //ajax call for getting UserDetails
                url: "/Handlers/BusPass/CancelBusPassHandler.ashx",
                data: { "bus_pass_id": buspassid },
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (msg) {
                    buspassservice.updatelist();
                    alert("pass canceled");
                    $scope.$apply(function () {


                        $location.path("/bus_pass_canceled");
                    })


                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            }); // ajax closed





        }


    }


});