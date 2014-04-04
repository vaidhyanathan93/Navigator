// JavaScript Document
  //<![CDATA[ 
var angapp= angular.module('NavigatorApp', ['ngRoute'])
.service("DashboardService",function(){
	  var usr_details={
		  'uid':'Ngjhfkdf',
		  'name':'Babu',
		  'email':'babu@in.com',
		  'phone':'9489473682',
		  'city':'Chennai',
		  'address':'Noth mardras chennai',
		  'url':'images/associate.jpg',		  
		  
		  
		  };
		this.list=function(){
			return usr_details;
			
			}
	  	
	  })
.service("SurpriseBoxService",function(){
	  var gifts=[{
		  'url':'images/dog.png',
		  'title':'Underdog',
		  'content':'1 Badge',
		  'context':'For competion of tour'
		  },{
		  'url':'images/dog.png',
		  'title':'Underdog',
		  'content':'1 Badge',
		  'context':'For competion of tour'
		  }
		  ];
		this.list=function(){
			return gifts;
			
			}
		this.flush=function(){
			gifts=[];
			}
	  	
	  })
.service("buspassservice",function(){
	var buspass=[{
				sno:'1',
				routename:'myroute',
				boardingpoint:'egmore',
				location:'Cts',
				cost:'2500',
				registereddate:'12/12/2014',
				validtill:'12/1/2015',
				
				},
				{
				sno:'1',
				routename:'myroute2',
				boardingpoint:'egmore2',
				location:'Cts2',
				cost:'25000',
				registereddate:'12/12/2014',
				validtill:'12/1/2015',
				
				},]
		this.list=function(){
			return buspass;
			
			}
	  	
	  })







.service("BusRegisService",function(){
	  var bus_pass_details={
		  'pick_up_point':'Ngjhfkdf',
		  'destination':'Babu',
		  'city':'chennai',
		  'mobile':'9489473682',
		  'type':'monthly',
		  'from':'Noth mardras chennai',
		  'comment':'I am from comment',		  
		  'previlidged':'no'
		  
		  
		  };
			 var buses=[
		    {sno:'1',busno:'learn angular', availableseat:'12',time:'12.00',cost:'1200'},
    		{sno:'1',busno:'learn angular', availableseat:'12',time:'12.00',cost:'1200'}
		
		];
		this.list=function(){
			return bus_pass_details;
			
			}
		this.listbuses=function(){
			return buses;
			
			}
	  	
	  })
	  
	  
	  .service("CabRegisService",function(){
	  var cab_details={
		  'pick_up_point':'Ngjhfkdf',
		  'destination':'Babu',
		  'city':'chennai',
		  'mobile':'9489473682',
		  'type':'4',
		  'pickuptime':'12:00',
		  'from':'Noth mardras chennai',
		  'comment':'I am from comment',		  
		  'previlidged':'no'
		  
		  
		  };
			
		this.list=function(){
			return cab_details;
			
			}
		
	  	
	  })
	  
.service("cabstatusservice",function(){
	var cabstatus=[{
				cabno:'TN 02 AT 2367',
				pickuppoint:'Annanagar',
				pickupdate:'12/11/193',
				pickuptime:'12:00',
				drivername:'rajsh',
				drivermobile:'999999999',
				
				
				},
				{
				cabno:'TN 02 AT 2367',
				pickuppoint:'Annanagar',
				pickupdate:'12/11/193',
				pickuptime:'12:00',
				drivername:'rajsh123',
				drivermobile:'999999999',
				
				},]
		this.list=function(){
			return cabstatus;
			
			}
	  	
	  })
.service("AddBusService",function(){
	  var bus_details={
		  'busno':'TN87',
		  'city':'Chennai',
		  'capacity':'10',
		  		  
		  };
		  var routes=[{'route':'sd','totime':'sdsds','fromtime':'ddfd'}];
		  this.listroutes=function(){
			  return routes;
			  }
		this.list=function(){
			return bus_details;
			
			}
	  	
	  })
.service("ModifyBusService",function(){
	  var bus_details={
		  'busno':'TN87',
		  'city':'Chennai',
		  'capacity':'10',
		  		  
		  };
		  var routes=[{'route':'sd','totime':'sdsds','fromtime':'ddfd'},{'route':'sd','totime':'sdsds','fromtime':'ddfd'},{'route':'sd','totime':'sdsds','fromtime':'ddfd'}];
		  this.listroutes=function(){
			  return routes;
			  }
		this.list=function(){
			return bus_details;
			
			}
	  	
	  })
.service("ModifyCabService",function(){
	  var cab_details={
		  'cabno':'TN87',
		  'model':'Chennai',
		  'capacity':'10',
		  'drivername':'vishal',
		  'drivermobile':'9003387'
		  		  
		  };
		 
		this.list=function(){
			return cab_details;
			
			}
	  	
	  })

	  
.controller('WelcomeController',function($scope,DashboardService){
	
	$scope.usr=DashboardService.list();
	
	
	})

 .config(function($routeProvider) {
  $routeProvider
    .when('/help', {
      
      templateUrl:'pages/help.html'
    })
	 .when('/feedback', {
     
      templateUrl:'pages/feedback.html'
    })
	.when('/admin', {
      
      templateUrl:'pages/admin.html'
    })
	.when('/bus_pass_registration2', {
      
      templateUrl:'pages/bus_pass_registration2.html'
    })
	.when('/bus_pass_registration3', {
      
      templateUrl:'pages/bus_pass_registration3.html'
    })
	
	.when('/bus_pass_registration', {
      
      templateUrl:'pages/bus_pass_registration.html'
    })
	.when('/bus_pass', {
      
      templateUrl:'pages/bus_pass.html'
    })
	.when('/bus_pass_canceled', {
      
      templateUrl:'pages/bus_pass_canceled.html'
    })
	.when('/bus_schedule', {
      
      templateUrl:'pages/bus_schedule.html'
    })
	.when('/bus_schedule2', {
      
      templateUrl:'pages/bus_schedule2.html'
    })
	.when('/cab_registration', {
      
      templateUrl:'pages/cab_registration.html'
    })
	.when('/cab_registration2', {
      
      templateUrl:'pages/cab_registration2.html'
    })
	
	.when('/cab_status', {
      
      templateUrl:'pages/cab_status.html'
    })
	.when('/surprisebox', {
      
      templateUrl:'pages/surprisebox.html'
    })
	.when('/bus_pass/:buspassid', {
      controller:'showpass',
	  templateUrl:'pages/bus_pass.html'
      
    })
	.when('/cab_status/:cabstatusid', {
      controller:'showstatus',
	  templateUrl:'pages/cab_status.html'
      
    })
	.when('/dashboard', {
      
      templateUrl:'pages/dashboard.html'
    })
		.when('/editdashboard', {
      
      templateUrl:'pages/editdashboard.html'
    })
	
	
	 .when('/bus', {
      
      templateUrl:'pages/bus.html'
    })
	.when('/cab', {
      
      templateUrl:'pages/cab.html'
    })
	.when('/ranking', {
      
      templateUrl:'pages/ranking.html'
    })
	.when('/store', {
      
      templateUrl:'pages/store.html'
    })
	.when('/dashboard', {
      
      templateUrl:'pages/dashboard.html'
    })
	.when('/editdashbaord', {
      
      templateUrl:'pages/dashboard.html'
    })
	.when('/bus_management', {
      
      templateUrl:'pages/bus_management.html'
    })
	.when('/cab_management', {
      
      templateUrl:'pages/cab_management.html'
    })
	.when('/bus_usage_statistics', {
      
      templateUrl:'pages/bus_usage_statistics.html'
    })
	.when('/cab_usage_statistics', {
      
      templateUrl:'pages/cab_usage_statistics.html'
    })
	.when('/add_new_bus', {
      
      templateUrl:'pages/add_new_bus.html'
    })
	.when('/add_new_bus2', {
      
      templateUrl:'pages/add_new_bus2.html'
    })
	.when('/add_new_bus3', {
      
      templateUrl:'pages/add_new_bus3.html'
    })
	
	.when('/modify_bus_details', {
      
      templateUrl:'pages/modify_bus_details.html'
    })
	.when('/modify_bus_details2', {
      
      templateUrl:'pages/modify_bus_details2.html'
    })
	.when('/modify_bus_details3', {
      
      templateUrl:'pages/modify_bus_details3.html'
    })
	.when('/modify_bus_details4', {
      
      templateUrl:'pages/modify_bus_details4.html'
    })
	.when('/view_bus_details', {
      
      templateUrl:'pages/view_bus_details.html'
    })
	.when('/finley',{
		
		templateUrl:'pages/finley.html'
		})
	.when('/bus_canceled',{
		
		templateUrl:'pages/bus_canceled.html'
		})
		.when('/add_new_cab',{
		
		templateUrl:'pages/add_new_cab.html'
		})
		.when('/add_new_cab2',{
		
		templateUrl:'pages/add_new_cab2.html'
		})
		.when('/modify_cab_details',{
		
		templateUrl:'pages/modify_cab_details.html'
		})
		.when('/modify_cab_details2',{
		
		templateUrl:'pages/modify_cab_details2.html'
		})
		.when('/modify_cab_details3',{
		
		templateUrl:'pages/modify_cab_details3.html'
		})
	
	
	
	.when('/', {
     	
      
    })
	
	.when('/error', {
      
      templateUrl:'pages/error.html'
    })
	.otherwise({
      redirectTo:'/error'
    });
	
})

//]]>