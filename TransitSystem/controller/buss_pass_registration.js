// Jquery

angapp.controller('bus_pass_registration', function ($scope, $location, DashboardService, BusRegisService) {
    //angular part
    $scope.usr.theme = "images/ctstheme/start2.jpg";
    $scope.usr = DashboardService.list();
    $scope.bus = BusRegisService.list();
    $scope.bus.city = $scope.usr.city;
    $scope.bus.moile = $scope.usr.phone;
    $scope.buses = BusRegisService.listbuses();
    $scope.onsubmit = function () {

        var btn = $("#button");

        btn.button('loading');
        if ($scope.bus.type == "monthly") {
            $scope.bus.gogreen = 1
        }

        $.ajax({

            url: "Handlers/BusPass/SelectABusHandler.ashx",
            data: { "go_green": $scope.bus.gogreen, "city": $scope.bus.city, "pick_up_point": $scope.bus.pick_up_point, "destination": $scope.bus.destination, "mobile": $scope.bus.mobile, "bus_pass_type": $scope.bus.type, "address": $scope.bus.from, "privileged_user": $scope.bus.previlidged, "comment": $scope.bus.comment },
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (msg) {

                for (i = 0; i < msg.length; i++) {
                    $scope.buses[i].sno = i + 1;
                    $scope.buses[i].busno = msg[i].bus_no;
                    $scope.buses[i].availableseat = msg[i].available_seats;
                    $scope.buses[i].time = msg[i].time;
                    if ($scope.buses[i].type == "monthly")
                    { $scope.buses[i].cost = parseInt(msg[i].cost) * 30; }
                    else if ($scope.buses[i].type == "weekly")
                    { $scope.buses[i].cost = parseInt(msg[i].cost) * 7; }
                    else
                    { $scope.buses[i].cost = parseInt(msg[i].cost); }

                }
                $scope.$apply(function () {

                    $location.url("/bus_pass_registration2");
                });





            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        }); // ajax closed


    };




    //Jquery
    ///go green 
    //
    $('#buspasstypedis').hide();

    $('.btn-toggle').click(function () {
        $('.btn').toggleClass('active');
        $('#buspasstypedis').toggle();
        if ($('.btn-primary').size() > 0) {
            $('.btn').toggleClass('btn-primary');
        }
        $('.btn').toggleClass('btn-default');



    });
    //enf=d of go green 

    $("#commentpre").hide("fast");
    $("#prevelegeduser").change(function () {

        if ($("#prevelegeduser").val() == "yes") {
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


