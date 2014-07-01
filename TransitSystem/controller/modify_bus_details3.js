// JavaScript Document
// JavaScript Document
angapp.controller('modify_bus_details3controller', function ($scope, $location, ModifyBusService, DashboardService) {
    //angular part
    $scope.usr = DashboardService.list();
    $scope.usr.theme = "images/ctstheme/start5.jpg";
    $scope.bus = ModifyBusService.list();
    $scope.onsubmit = function () {
        $.ajax({

            url: "Handlers/modifybus.ashx",
            data: { "busno": $scope.DashboardService.busno, "city": $scope.DashboardService.city, "capacity": $scope.DashboardService.capacity },
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (msg) {

                $scope.$apply(function () {


                    $location.path("/modify_bus_details4");
                })




            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        }); // ajax closed


    };




    //Jquery
    ///go green 





});


