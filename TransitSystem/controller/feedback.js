// JavaScript Document
angapp.controller('feedbackcontroller', function ($scope, $http, $location, DashboardService) {
    $scope.usr = DashboardService.list();
    $scope.usr.theme = "images/ctstheme/feedback.jpg";
    $scope.feedbackdata = {};
    $scope.processform = function () {

        var btn = $("#button");

        btn.button('loading');

        $.ajax({
             
            url: "Handlers/Gamification/AddFeedbackHandler.ashx",
            data: { "vehicle_no": $scope.feedbackdata.no, "punctuality": $scope.feedbackdata.punctuality, "journey": $scope.feedbackdata.satisfaction, "rating": $scope.feedbackdata.rate, "feedback": $scope.feedbackdata .comments},
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


        









    };


});
