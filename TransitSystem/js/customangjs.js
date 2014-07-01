// JavaScript Document
//<![CDATA[  
var angapp = angular.module('NavigatorApp', ['ngRoute'])
.service("DashboardService", function () {
    var usr_details = {
        'uid': '',
        'name': '',
        'email': '',
        'phone': '',
        'city': '',
        'address': '',
        'url': 'images/associate.png',
        'theme': ''


    };
    this.list = function () {
        return usr_details;

    }

})
.service("SurpriseBoxService", function () {
    var gifts = [{
        'url': 'images/dog.png',
        'title': 'Underdog',
        'content': '1 Badge',
        'context': 'For competion of tour'
    }, {
        'url': 'images/dog.png',
        'title': 'Underdog',
        'content': '1 Badge',
        'context': 'For competion of tour'
    }
    ];
    this.list = function () {
        return gifts;

    }
    this.flush = function () {
        gifts = [];
    }

})
.service("buspassservice", function () {
    var buspass = [{
        sno: '1',
        routename: 'gdh',
        boardingpoint: 'gdhd',
        location: 'gdhsh',
        cost: 'sdhg',
        registereddate: '12//2014',
        validtill: '12/1/2015',
        bus_pass_id: '',

    },
				{
				    sno: '2',
				    routename: 'myroute2',
				    boardingpoint: 'egmore2',
				    location: 'Cts2',
				    cost: '25000',
				    registereddate: '12/12/2014',
				    validtill: '12/1/2015',
				    bus_pass_id: '',

				},

				{
				    sno: '3',
				    routename: 'myroute2',
				    boardingpoint: 'egmore2',
				    location: 'Cts2',
				    cost: '25000',
				    registereddate: '12/12/2014',
				    validtill: '12/1/2015',
				    bus_pass_id: '',

				},

				{
				    sno: '4',
				    routename: 'myroute2',
				    boardingpoint: 'egmore2',
				    location: 'Cts2',
				    cost: '25000',
				    registereddate: '12/12/2014',
				    validtill: '12/1/2015',
				    bus_pass_id: '',
				},
                {
                    sno: '5',
                    routename: 'myroute2',
                    boardingpoint: 'egmore2',
                    location: 'Cts2',
                    cost: '25000',
                    registereddate: '12/12/2014',
                    validtill: '12/1/2015',
                    bus_pass_id: '',
                },
    ]
    this.list = function () {
        return buspass;

    }
    this.updatelist = function () {

        $.ajax({

            url: "Handlers/BusPass/GetBusPassHandler.ashx",
            data: {},
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (msg) {
                // alert(msg[0].bus_no);
                buspass[0].routename = msg[0].bus_no;
                buspass[0].boardingpoint = msg[0].pick_up_point;
                buspass[0].location = msg[0].city;
                buspass[0].cost = msg[0].cost;
                buspass[0].registereddate = msg[0].issued_on;
                buspass[0].validtill = msg[0].valid_till;
                buspass[0].bus_pass_id = msg[0].bus_pass_id;
                buspass[1].routename = msg[1].bus_no;
                buspass[1].boardingpoint = msg[1].pick_up_point;
                buspass[1].location = msg[1].city;
                buspass[1].cost = msg[1].cost;
                buspass[1].registereddate = msg[1].issued_on;
                buspass[1].validtill = msg[1].valid_till;
                buspass[1].bus_pass_id = msg[1].bus_pass_id;
                buspass[2].routename = msg[2].bus_no;
                buspass[2].boardingpoint = msg[2].pick_up_point;
                buspass[2].location = msg[2].city;
                buspass[2].cost = msg[2].cost;
                buspass[2].registereddate = msg[2].issued_on;
                buspass[2].validtill = msg[2].valid_till;
                buspass[2].bus_pass_id = msg[2].bus_pass_id;
                buspass[3].routename = msg[3].bus_no;
                buspass[3].boardingpoint = msg[3].pick_up_point;
                buspass[3].location = msg[3].city;
                buspass[3].cost = msg[3].cost;
                buspass[3].registereddate = msg[3].issued_on;
                buspass[3].validtill = msg[3].valid_till;
                buspass[3].bus_pass_id = msg[3].bus_pass_id;
                buspass[4].routename = msg[4].bus_no;
                buspass[4].boardingpoint = msg[4].pick_up_point;
                buspass[4].location = msg[4].city;
                buspass[4].cost = msg[4].cost;
                buspass[4].registereddate = msg[4].issued_on;
                buspass[4].validtill = msg[4].valid_till;
                buspass[4].bus_pass_id = msg[4].bus_pass_id;



            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        }); // ajax closed


    }

})














.service("BusRegisService", function () {
    var bus_pass_details = {
        'pick_up_point': '',
        'destination': '',
        'city': 'chennai',
        'mobile': '9489473682',
        'type': 'monthly',
        'from': 'Noth mardras chennai',
        'comment': 'I am from comment',
        'previlidged': 'no',
        'cost': ''


    };
    var buses = [
  { sno: '1', busno: 'learn angular', availableseat: '12', time: '12.00', cost: '1200' },
   { sno: '1', busno: 'learn angular', availableseat: '12', time: '12.00', cost: '1200' },
    { sno: '1', busno: 'learn angular', availableseat: '12', time: '12.00', cost: '1200' }


    ];
    this.list = function () {
        return bus_pass_details;

    }
    this.listbuses = function () {
        return buses;

    }

})


	  .service("CabRegisService", function () {
	      var cab_details = {
	          'pick_up_point': '',
	          'destination': '',
	          'city': '',
	          'mobile': '',
	          'type': '4',
	          'pickuptime': '12:00',
	          'from': '',
	          'comment': 'No comments',
	          'previlidged': 'no',
	          'cab_no': '',
	          'driver_name': '',
	          'driver_mobile': ''


	      };

	      this.list = function () {
	          return cab_details;

	      }


	  })

.service("cabstatusservice", function () {
    var cabstatus = [{
        cabno: '',
        pickuppoint: '',
        pickupdate: '',
        pickuptime: '',
        drivername: '',
        drivermobile: '',
        cab_request_id: '',


    },
				{
				    cabno: '',
				    pickuppoint: '',
				    pickupdate: '',
				    pickuptime: '',
				    drivername: '',
				    drivermobile: '',
				    cab_request_id: '',
				},
	{
	    cabno: '',
	    pickuppoint: '',
	    pickupdate: '',
	    pickuptime: '',
	    drivername: '',
	    drivermobile: '',
	    cab_request_id: '',
	},
	{
	    cabno: '',
	    pickuppoint: '',
	    pickupdate: '',
	    pickuptime: '',
	    drivername: '',
	    drivermobile: '',
	    cab_request_id: '',
	},
	{
	    cabno: '',
	    pickuppoint: '',
	    pickupdate: '',
	    pickuptime: '',
	    drivername: '',
	    drivermobile: '',
	    cab_request_id: '',

	}, ]
    this.list = function () {

        return cabstatus;

    }
    this.updatelist = function () {

        $.ajax({

            url: "Handlers/CabRequest/GetCabStatusHandler.ashx",
            data: {},
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (msg) {

                cabstatus[0].cabno = msg[0].cab_no;
                cabstatus[0].pickuppoint = msg[0].pick_up_point;
                cabstatus[0].pickupdate = msg[0].date;
                cabstatus[0].pickuptime = msg[0].time;
                cabstatus[0].drivername = msg[0].driver_name;
                cabstatus[0].drivermobile = msg[0].driver_mobile;
                cabstatus[0].cab_request_id = msg[0].cab_request_id;

                cabstatus[1].cabno = msg[1].cab_no;
                cabstatus[1].pickuppoint = msg[1].pick_up_point;
                cabstatus[1].pickupdate = msg[1].date;
                cabstatus[1].pickuptime = msg[1].time;
                cabstatus[1].drivername = msg[1].driver_name;
                cabstatus[1].drivermobile = msg[1].driver_mobile;
                cabstatus[1].cab_request_id = msg[1].cab_request_id;


                cabstatus[2].cabno = msg[2].cab_no;
                cabstatus[2].pickuppoint = msg[2].pick_up_point;
                cabstatus[2].pickupdate = msg[2].date;
                cabstatus[2].pickuptime = msg[2].time;
                cabstatus[2].drivername = msg[2].driver_name;
                cabstatus[2].drivermobile = msg[2].driver_mobile;
                cabstatus[2].cab_request_id = msg[2].cab_request_id;

                cabstatus[3].cabno = msg[3].cab_no;
                cabstatus[3].pickuppoint = msg[3].pick_up_point;
                cabstatus[3].pickupdate = msg[3].date;
                cabstatus[3].pickuptime = msg[3].time;
                cabstatus[3].drivername = msg[3].driver_name;
                cabstatus[3].drivermobile = msg[3].driver_mobile;
                cabstatus[3].cab_request_id = msg[3].cab_request_id;

                cabstatus[4].cabno = msg[4].cab_no;
                cabstatus[4].pickuppoint = msg[4].pick_up_point;
                cabstatus[4].pickupdate = msg[4].date;
                cabstatus[4].pickuptime = msg[4].time;
                cabstatus[4].drivername = msg[4].driver_name;
                cabstatus[4].drivermobile = msg[4].driver_mobile;
                cabstatus[4].cab_request_id = msg[4].cab_request_id;


            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        }); // ajax closed


    }

})
.service("AddBusService", function () {
    var bus_details = {
        'busno': 'TN87',
        'city': 'Chennai',
        'capacity': '10',

    };
    var routes = [{ 'route': 'sd', 'totime': 'sdsds', 'fromtime': 'ddfd' }];
    this.listroutes = function () {
        return routes;
    }
    this.list = function () {
        return bus_details;

    }

})
.service("ModifyBusService", function () {
    var bus_details = {
        'busno': 'TN87',
        'city': 'Chennai',
        'capacity': '10',

    };
    var routes = [{ 'route': 'sd', 'totime': 'sdsds', 'fromtime': 'ddfd' }, { 'route': 'sd', 'totime': 'sdsds', 'fromtime': 'ddfd' }, { 'route': 'sd', 'totime': 'sdsds', 'fromtime': 'ddfd' }];
    this.listroutes = function () {
        return routes;
    }
    this.list = function () {
        return bus_details;

    }

})
.service("ModifyCabService", function () {
    var cab_details = {
        'cabno': 'TN87',
        'model': 'Chennai',
        'capacity': '10',
        'drivername': 'vishal',
        'drivermobile': '9003387'

    };

    this.list = function () {
        return cab_details;

    }

})

.controller('WelcomeController', function ($scope, DashboardService, cabstatusservice, buspassservice) {

    $scope.usr = DashboardService.list();
    cabstatusservice.updatelist();
    buspassservice.updatelist();
    $.ajax({

        url: "/Handlers/Finley/GetAssociateDetailsHandler.ashx",
        data: {},
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (msg) {

            $scope.$apply(function () {

                $scope.usr.uid = msg[0].associate_id;
                $scope.usr.name = msg[0].associate_name;
                $scope.usr.address = msg[0].address;
                $scope.usr.city = msg[0].city;
                $scope.usr.phone = msg[0].phone_no;
                $scope.usr.email = msg[0].email;
                $scope.usr.bus_pass_id = msg[0].bus_pass_id;
                $scope.usr.cab_request_id = msg[0].cab_request_id;

            });





        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    }); // ajax closed


})
 .config(function ($routeProvider) {
     $routeProvider
       .when('/help', {

           templateUrl: 'pages/help.html'
       })
        .when('/feedback', {

            templateUrl: 'pages/feedback.html'
        })
       .when('/admin', {

           templateUrl: 'pages/admin.html'
       })
       .when('/bus_pass_registration2', {

           templateUrl: 'pages/bus_pass_registration2.html'
       })
       .when('/bus_pass_registration3', {

           templateUrl: 'pages/bus_pass_registration3.html'
       })

       .when('/bus_pass_registration', {

           templateUrl: 'pages/bus_pass_registration.html'
       })
       .when('/bus_pass', {

           templateUrl: 'pages/bus_pass.html'
       })
       .when('/bus_pass_canceled', {

           templateUrl: 'pages/bus_pass_canceled.html'
       })
       .when('/cab_canceled', {

           templateUrl: 'pages/cab_canceled.html'
       })
       .when('/bus_schedule', {

           templateUrl: 'pages/bus_schedule.html'
       })
       .when('/bus_schedule2', {

           templateUrl: 'pages/bus_schedule2.html'
       })
       .when('/cab_registration', {

           templateUrl: 'pages/cab_registration.html'
       })
       .when('/cab_registration2', {

           templateUrl: 'pages/cab_registration2.html'
       })

       .when('/cab_status', {

           templateUrl: 'pages/cab_status.html'
       })
       .when('/surprisebox', {

           templateUrl: 'pages/surprisebox.html'
       })
       .when('/bus_pass/:buspassid', {
           controller: 'showpass',
           templateUrl: 'pages/bus_pass.html'

       })
       .when('/cab_status/:cabstatusid', {
           controller: 'showstatus',
           templateUrl: 'pages/cab_status.html'

       })
       .when('/dashboard', {

           templateUrl: 'pages/dashboard.html'
       })
           .when('/editdashboard', {

               templateUrl: 'pages/editdashboard.html'
           })


        .when('/bus', {

            templateUrl: 'pages/bus.html'
        })
       .when('/cab', {

           templateUrl: 'pages/cab.html'
       })
       .when('/ranking', {

           templateUrl: 'pages/ranking.html'
       })
       .when('/store', {

           templateUrl: 'pages/store.html'
       })
       .when('/dashboard', {

           templateUrl: 'pages/dashboard.html'
       })
       .when('/editdashbaord', {

           templateUrl: 'pages/dashboard.html'
       })
       .when('/bus_management', {

           templateUrl: 'pages/bus_management.html'
       })
       .when('/cab_management', {

           templateUrl: 'pages/cab_management.html'
       })
       .when('/bus_usage_statistics', {

           templateUrl: 'pages/bus_usage_statistics.html'
       })
       .when('/cab_usage_statistics', {

           templateUrl: 'pages/cab_usage_statistics.html'
       })
       .when('/add_new_bus', {

           templateUrl: 'pages/add_new_bus.html'
       })
       .when('/add_new_bus2', {

           templateUrl: 'pages/add_new_bus2.html'
       })
       .when('/add_new_bus3', {

           templateUrl: 'pages/add_new_bus3.html'
       })

       .when('/modify_bus_details', {

           templateUrl: 'pages/modify_bus_details.html'
       })
       .when('/modify_bus_details2', {

           templateUrl: 'pages/modify_bus_details2.html'
       })
       .when('/modify_bus_details3', {

           templateUrl: 'pages/modify_bus_details3.html'
       })
       .when('/modify_bus_details4', {

           templateUrl: 'pages/modify_bus_details4.html'
       })
       .when('/view_bus_details', {

           templateUrl: 'pages/view_bus_details.html'
       })
       .when('/finley', {

           templateUrl: 'pages/finley.html'
       })
       .when('/bus_canceled', {

           templateUrl: 'pages/bus_canceled.html'
       })
           .when('/add_new_cab', {

               templateUrl: 'pages/add_new_cab.html'
           })
           .when('/add_new_cab2', {

               templateUrl: 'pages/add_new_cab2.html'
           })
           .when('/modify_cab_details', {

               templateUrl: 'pages/modify_cab_details.html'
           })
           .when('/modify_cab_details2', {

               templateUrl: 'pages/modify_cab_details2.html'
           })
           .when('/modify_cab_details3', {

               templateUrl: 'pages/modify_cab_details3.html'
           })



       .when('/', {


       })

       .when('/error', {

           templateUrl: 'pages/error.html'
       })
       .otherwise({
           redirectTo: '/error'
       });

 })

//]]>

