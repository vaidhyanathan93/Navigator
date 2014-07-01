// JavaScript Document
// Jquery

angapp.controller('cab_registration2', function ($scope, $location, DashboardService, cabstatusservice) {
    //angular part
    $scope.usr = DashboardService.list();
    $.ajax({

        url: "Handlers/addfeedback.ashx",
        data: {},
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (msg) {

            $scope.$apply(function () {

                $location.url("/surprisebox");
            });





        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    }); // ajax closed
    //load the jax there using $http
    $scope.usr.theme = "images/ctstheme/start6.jpg";


    $scope.cabstatus1 = {};
    $scope.cabstatus1 = cabstatusservice.list();
    $scope.cabstatus = $scope.cabstatus1[0];
    alert("a message will be sent on that particular day..")


    $scope.onsubmit = function () {
        $location.path("/surprisebox");
        var b = "<table><tr><td>Cab Number</td>" + "<td>" + res[0].cabno + "</td></tr>" + "<tr><td>Pickup Point</td><td>" + res[0].PickupPoint + "</td></tr>" + "<tr><td>Pick Up Date</td><td>" + res[0].PickupDate + "</td></tr>" + "<tr><td>Pick Up Time</td>" + res[0].PickupTime + "</td></tr>" + "<tr><td>Driver Name</td><td>" + DriverName + "</td></tr>" + "<tr><td>Driver Mobile</td>" + "<td>" + DriverMobile + "</td></tr></table>";
        document.body.applyElement(b);
    }

});


