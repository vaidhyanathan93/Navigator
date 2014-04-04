// JavaScript Document
// JavaScript Document


function goBack()
  {
  window.history.back()
  }

var LoginApp = angular.module('LoginApp', []);

	// create the controller and inject Angular's $scope
	LoginApp.controller('LoginController', function($scope) {

		// create a message to display in our view
	
	});
	
	
//jqury toggle button


//Jquery
// click event for all the icon

$(document).ready(function(e) {
	//toggle 
	
	
//click event
	 $('.mainicon').tooltip();
	  $('.notification').tooltip();
	  
	 $('.finley').tooltip();
	 
	  $("#finley").click(function(){
		   if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   		  
	  });
	 
   $("#help").click(function(){
	   if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   $("#drop").animate({
		   top:"69",
		   },500,function(){$("#drop").css("transform","rotate(0deg)");}).animate({
		  left: "478",
		   },500);
		  
	   
	   
	  });	
	  $("#feedback").click(function(){
		   if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   		  $("#drop").animate({
			   top:"69",
			   },500,function(){$("#drop").css("transform","rotate(0deg)");}).animate({
			   left: "378"
			   },500);
	  });
	  	  $("#dashboard").click(function(){
		   if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   		  $("#drop").animate({
			   top:"69",
			   },500,function(){$("#drop").css("transform","rotate(315deg)");}).animate({
			   left: "77"
			   },500);
	  });
	   $("#admin").click(function(){
		      if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   		  $("#drop")
			  .animate({
			   top:"69",
			   },500,function(){ $("#drop").css("transform","rotate(0deg)");})						              .animate({
			   left: "586"
			   },500);
	  });	
	  $("#bus").click(function(){
		     if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   		  $("#drop").animate({
			   left: "77",
			    },500,function(){
					$("#drop").css("transform","rotate(90deg)");
					}).animate({
			   top:"200",
			    },500);
	  });
	  $("#cab").click(function(){
		     if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   		  $("#drop").animate({
			   left: "77",
			    },500,function(){
					$("#drop").css("transform","rotate(90deg)");
					}).animate({
			   top:"300",
			    },500);
	  });
	  $("#ranking").click(function(){
		     if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   		  $("#drop").animate({
			   left: "77",
			    },500,function(){
					$("#drop").css("transform","rotate(90deg)");
					}).animate({
			   top:"390",
			    },500);
	  });
	   $("#store").click(function(){
		     if($('#maindialog').css("visibility")!="visible"){
	   opendialog($(this));}
	   		  $("#drop").animate({
			   left: "77",
			    },500,function(){
					$("#drop").css("transform","rotate(90deg)");
					}).animate({
			   top:"480",
			    },500);
	  });
	  $("#home").click(closedialog);	
	  $("#closeicon").click(closedialog);
	   
});

//closing the dialog box event
function closedialog(){
	if($('#maindialog').css("visibility")=="visible"){
		$("#maindialog").css("visibility","hidden");
		$("#drop").css("visibility","hidden").css("top","69").css("left","77");
        	var $this = $("#maindialog");
 			 $this
             .effect("transfer", {
                to: "#home",
                className: "close-transfer-effect"

            },340, function(){});}
	}
// opening the dialog
function opendialog($this){
	 $this
             .effect("transfer", {
                to: "#maindialog",
                className: "close-transfer-effect"

            },340, function(){
				 $("#maindialog").css("visibility","visible");
		   $("#drop").css("visibility","visible");});
	}