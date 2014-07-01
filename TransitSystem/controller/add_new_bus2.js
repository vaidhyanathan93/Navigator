// JavaScript Document
// JavaScript Document
angapp.controller('add_new_bus2controller', function ($scope, $location, AddBusService, DashboardService) {
    //angular part
    $scope.usr = DashboardService.list();
    $scope.usr.theme = "images/ctstheme/start4.jpg";
    $scope.route = '';
    $scope.totime = '';
    $scope.fromtime = '';

    $scope.routes = AddBusService.listroutes();


    $scope.addroute = function () {
        $scope.routes.push({ 'route': $scope.route, 'totime': $scope.totime, 'fromtime': $scope.fromtime });
        $scope.route = '';
        $scope.totime = '';
        $scope.fromtime = '';

        var btn = $("#button");

        btn.button('loading');

        $.ajax({

            url: "Handlers/Admin/AddNewBusHandler.ashx",
            data: { "route_no": $scope.AddBusService.route, "location": $scope.AddBusService.totime, "time": $scope.AddBusService.fromtime },
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (msg) {

                $scope.finish = function () {

                    $location.path("/add_new_bus3");




                }



            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        }); // ajax closed



    };
}

);