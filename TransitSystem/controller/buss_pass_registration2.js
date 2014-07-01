// JavaScript Document
angapp.controller('bus_pass_registration2', function ($scope, $location, DashboardService, BusRegisService, buspassservice) {
    //angular part
    $scope.usr.theme = "images/ctstheme/start3.jpg";
    $scope.usr = DashboardService.list();
    $scope.bus = BusRegisService.list();
    $scope.bus.city = $scope.usr.city;
    $scope.bus.mobile = $scope.usr.phone;
    // need to copy from service		
    $scope.buses = BusRegisService.listbuses();
    $scope.onclick = function (buspassreg) {



        $.ajax({

            url: "Handlers/BusPass/AddBusPassHandler.ashx",
            data: { "go_green": $scope.bus.gogreen, "city": $scope.bus.city, "pick_up_point": $scope.bus.pick_up_point, "destination": $scope.bus.destination, "mobile": $scope.bus.mobile, "bus_pass_type": $scope.bus.type, "address": $scope.bus.from, "privileged_user": $scope.bus.previlidged, "comment": $scope.bus.comment, "bus_no": buspassreg, "cost": $scope.bus.cost },
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (msg) {
                $scope.$apply(function () {
                    buspassservice.updatelist();
                    alert("Sms And Mail will be sent");
                    $location.path("/surprisebox");
                });





            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        }); // ajax closed





    };


});