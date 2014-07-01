// JavaScript Document
// JavaScript Document
angapp.controller('add_new_cabcontroller', function ($scope, $location, DashboardService) {
    //angular part
    $scope.usr = DashboardService.list();
    $scope.usr.theme = "images/ctstheme/start4.jpg";
    $scope.cab = {};
    $scope.save = function () {
        //load the jax there using $http


        $.ajax({

            url: "Handlers/Admin/AddCabHandler.ashx",
            data: { "cab_no": $scope.cab.cabno, "cab_model": $scope.cab.model, "area": $scope.cab.area, "capacity": $scope.cab.capacity, "driver_name": $scope.cab.drivername, "driver_mobile": $scope.cab.drivermobile },
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (msg) {


                $scope.$apply(function () {
                   
                    $location.path("/add_new_cab2");
                });




            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
                // alert("errorr");
            }
        }); // ajax closed



        
    };




    //Jquery
    ///go green 





});


