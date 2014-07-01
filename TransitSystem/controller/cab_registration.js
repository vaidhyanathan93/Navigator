// JavaScript Document
// Jquery

angapp.controller('cab_registration', function ($scope, $location, DashboardService, CabRegisService, cabstatusservice) {
    //angular part
    $scope.usr = DashboardService.list();	//load the jax there using $http
    $scope.usr.theme = "images/ctstheme/start6.jpg";

    $scope.cab = CabRegisService.list();
    $scope.cab.city = $scope.usr.city;
    $scope.cab.mobile = $scope.usr.phone;
    $scope.cab.gogreen = 1;
    $scope.onsubmit = function () {


        if ($scope.cab.type != "4") {
            $scope.cab.gogreen = 2;

        }
        var btn = $("#button_cab");

        btn.button('loading');

        $.ajax({

            url: "Handlers/CabRequest/AddCabRequestHandler.ashx",
            data: { "privileged_user": $scope.cab.previlidged, "mobile": $scope.cab.mobile, "city": $scope.cab.city, "pick_up_point": $scope.cab.pick_up_point, "destination": $scope.cab.destination, "date": $scope.cab.from, "time": $scope.cab.pickuptime, "go_green": $scope.cab.gogreen, "comments": $scope.cab.comment, "type": $scope.cab.type },
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (msg) {


                $scope.$apply(function (res) {
                    
                    cabstatusservice.updatelist();
                    
                    $scope.usr.theme = "images/ctstheme/start7.jpg";
                   
                    $location.path("/cab_registration2");
                   
                   
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
    //
    $('#cabtypedis').hide();

    $('.btn-toggle').click(function () {
        $('.btn').toggleClass('active');
        $('#cabtypedis').toggle();
        if ($('.btn-primary').size() > 0) {
            $('.btn').toggleClass('btn-primary');
        }
        $('.btn').toggleClass('btn-default');



    });
    //enf=d of go green 

    $("#commentpre").hide("fast");
    $("#prevelegeduser").change(function () {

        if ($("#prevelegeduser").val() == "1") {

            $("#commentpre").show("slow");

        }
        else {
            $("#commentpre").hide("slow");

        }


    });

    $("#fromdate").datepicker({
        defaultDate: "+1w",
        changeMonth: true,

        changeYear: true,
        minDate: 0,

    });




});


