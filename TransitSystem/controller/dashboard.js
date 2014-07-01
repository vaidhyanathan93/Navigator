// JavaScript Document
// JavaScript Document
angapp.controller('dashboardcontroller', function ($scope, $http, $location, DashboardService) {
    $scope.usr = DashboardService.list();
    $scope.usr.theme = "images/ctstheme/dashboard.jpg";
    //geting contents



    $scope.editdashboard = function () {
        $.ajax({                                    //ajax call for getting UserDetails
            url: "/Handlers/Finley/GetAssociateDetailsHandler.ashx",
            data: { "Ass_Id": txt_Id },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: success2,
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        }); // ajax closed
        function success2(res) {
            var b = '<img src="../Resources/images/' + res[0].associate_id + '.jpg" alt="your image" height="116" width="143" />'
            document.body.append(b);
            var a = "<table><tr><td>Associate Id</td><td>" + res[0].associate_id + "</td></tr><tr><td>Associate Name</td><td>" + res[0].associate_name + "</td></tr><tr><td>Address</td><td>" + res[0].address + "</td></tr><tr><td>City</td><td>" + res[0].city + "</td></tr><tr><td>Phone Number</td><td>" + res[0].phone_no + "</td></tr><tr><td>Email</td>" + res[0].email + "</td></tr></table>"
            
        };
        document.body.append(a);
        
    };



    //load the jax there using $http

    $location.path("/editdashboard");
}



);



