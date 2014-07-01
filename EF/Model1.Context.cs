﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EF
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class Galactic_KnightsEntities : DbContext
    {
        public Galactic_KnightsEntities()
            : base("name=Galactic_KnightsEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<tbl_Associate> tbl_Associate { get; set; }
        public virtual DbSet<tbl_Bus> tbl_Bus { get; set; }
        public virtual DbSet<tbl_Cab> tbl_Cab { get; set; }
        public virtual DbSet<tbl_CabRequest> tbl_CabRequest { get; set; }
        public virtual DbSet<tbl_Feedback> tbl_Feedback { get; set; }
        public virtual DbSet<tbl_Gamer> tbl_Gamer { get; set; }
        public virtual DbSet<tbl_Help> tbl_Help { get; set; }
        public virtual DbSet<tbl_Login> tbl_Login { get; set; }
        public virtual DbSet<tbl_Message> tbl_Message { get; set; }
        public virtual DbSet<tbl_Notification> tbl_Notification { get; set; }
        public virtual DbSet<tbl_Route> tbl_Route { get; set; }
        public virtual DbSet<tbl_Store> tbl_Store { get; set; }
        public virtual DbSet<tbl_BusPass> tbl_BusPass { get; set; }
    
        public virtual int CancelCabRequest(string associate_id)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("CancelCabRequest", associate_idParameter);
        }
    
        public virtual int usp_AddBus(string bus_no, string route_no, string city, Nullable<int> capacity)
        {
            var bus_noParameter = bus_no != null ?
                new ObjectParameter("bus_no", bus_no) :
                new ObjectParameter("bus_no", typeof(string));
    
            var route_noParameter = route_no != null ?
                new ObjectParameter("route_no", route_no) :
                new ObjectParameter("route_no", typeof(string));
    
            var cityParameter = city != null ?
                new ObjectParameter("city", city) :
                new ObjectParameter("city", typeof(string));
    
            var capacityParameter = capacity.HasValue ?
                new ObjectParameter("capacity", capacity) :
                new ObjectParameter("capacity", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_AddBus", bus_noParameter, route_noParameter, cityParameter, capacityParameter);
        }
    
        public virtual int usp_AddBusPass(string associate_id, string bus_no, string bus_pass_type, string address, string city, string pick_up_point, string destination, string mobile, Nullable<int> privileged_user, string issued_on, Nullable<int> go_green, string comment, string valid_till, Nullable<int> cost)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            var bus_noParameter = bus_no != null ?
                new ObjectParameter("bus_no", bus_no) :
                new ObjectParameter("bus_no", typeof(string));
    
            var bus_pass_typeParameter = bus_pass_type != null ?
                new ObjectParameter("bus_pass_type", bus_pass_type) :
                new ObjectParameter("bus_pass_type", typeof(string));
    
            var addressParameter = address != null ?
                new ObjectParameter("address", address) :
                new ObjectParameter("address", typeof(string));
    
            var cityParameter = city != null ?
                new ObjectParameter("city", city) :
                new ObjectParameter("city", typeof(string));
    
            var pick_up_pointParameter = pick_up_point != null ?
                new ObjectParameter("pick_up_point", pick_up_point) :
                new ObjectParameter("pick_up_point", typeof(string));
    
            var destinationParameter = destination != null ?
                new ObjectParameter("destination", destination) :
                new ObjectParameter("destination", typeof(string));
    
            var mobileParameter = mobile != null ?
                new ObjectParameter("mobile", mobile) :
                new ObjectParameter("mobile", typeof(string));
    
            var privileged_userParameter = privileged_user.HasValue ?
                new ObjectParameter("privileged_user", privileged_user) :
                new ObjectParameter("privileged_user", typeof(int));
    
            var issued_onParameter = issued_on != null ?
                new ObjectParameter("issued_on", issued_on) :
                new ObjectParameter("issued_on", typeof(string));
    
            var go_greenParameter = go_green.HasValue ?
                new ObjectParameter("go_green", go_green) :
                new ObjectParameter("go_green", typeof(int));
    
            var commentParameter = comment != null ?
                new ObjectParameter("comment", comment) :
                new ObjectParameter("comment", typeof(string));
    
            var valid_tillParameter = valid_till != null ?
                new ObjectParameter("valid_till", valid_till) :
                new ObjectParameter("valid_till", typeof(string));
    
            var costParameter = cost.HasValue ?
                new ObjectParameter("cost", cost) :
                new ObjectParameter("cost", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_AddBusPass", associate_idParameter, bus_noParameter, bus_pass_typeParameter, addressParameter, cityParameter, pick_up_pointParameter, destinationParameter, mobileParameter, privileged_userParameter, issued_onParameter, go_greenParameter, commentParameter, valid_tillParameter, costParameter);
        }
    
        public virtual int usp_AddCab(string cab_no, string cab_model, Nullable<int> capacity, string area, string driver_name, string driver_mobile)
        {
            var cab_noParameter = cab_no != null ?
                new ObjectParameter("cab_no", cab_no) :
                new ObjectParameter("cab_no", typeof(string));
    
            var cab_modelParameter = cab_model != null ?
                new ObjectParameter("cab_model", cab_model) :
                new ObjectParameter("cab_model", typeof(string));
    
            var capacityParameter = capacity.HasValue ?
                new ObjectParameter("capacity", capacity) :
                new ObjectParameter("capacity", typeof(int));
    
            var areaParameter = area != null ?
                new ObjectParameter("area", area) :
                new ObjectParameter("area", typeof(string));
    
            var driver_nameParameter = driver_name != null ?
                new ObjectParameter("driver_name", driver_name) :
                new ObjectParameter("driver_name", typeof(string));
    
            var driver_mobileParameter = driver_mobile != null ?
                new ObjectParameter("driver_mobile", driver_mobile) :
                new ObjectParameter("driver_mobile", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_AddCab", cab_noParameter, cab_modelParameter, capacityParameter, areaParameter, driver_nameParameter, driver_mobileParameter);
        }
    
        public virtual int usp_AddCabRequest(string cab_no, string associate_id, string mobile, string city, string pick_up_point, string destination, string date, string time, Nullable<int> privileged_user, Nullable<int> go_green, string comment, string cab_type)
        {
            var cab_noParameter = cab_no != null ?
                new ObjectParameter("cab_no", cab_no) :
                new ObjectParameter("cab_no", typeof(string));
    
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            var mobileParameter = mobile != null ?
                new ObjectParameter("mobile", mobile) :
                new ObjectParameter("mobile", typeof(string));
    
            var cityParameter = city != null ?
                new ObjectParameter("city", city) :
                new ObjectParameter("city", typeof(string));
    
            var pick_up_pointParameter = pick_up_point != null ?
                new ObjectParameter("pick_up_point", pick_up_point) :
                new ObjectParameter("pick_up_point", typeof(string));
    
            var destinationParameter = destination != null ?
                new ObjectParameter("destination", destination) :
                new ObjectParameter("destination", typeof(string));
    
            var dateParameter = date != null ?
                new ObjectParameter("date", date) :
                new ObjectParameter("date", typeof(string));
    
            var timeParameter = time != null ?
                new ObjectParameter("time", time) :
                new ObjectParameter("time", typeof(string));
    
            var privileged_userParameter = privileged_user.HasValue ?
                new ObjectParameter("privileged_user", privileged_user) :
                new ObjectParameter("privileged_user", typeof(int));
    
            var go_greenParameter = go_green.HasValue ?
                new ObjectParameter("go_green", go_green) :
                new ObjectParameter("go_green", typeof(int));
    
            var commentParameter = comment != null ?
                new ObjectParameter("comment", comment) :
                new ObjectParameter("comment", typeof(string));
    
            var cab_typeParameter = cab_type != null ?
                new ObjectParameter("cab_type", cab_type) :
                new ObjectParameter("cab_type", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_AddCabRequest", cab_noParameter, associate_idParameter, mobileParameter, cityParameter, pick_up_pointParameter, destinationParameter, dateParameter, timeParameter, privileged_userParameter, go_greenParameter, commentParameter, cab_typeParameter);
        }
    
        public virtual int usp_AddFeedback(string vehicle_no, string punctuality, Nullable<int> rating, string feedback, string journey)
        {
            var vehicle_noParameter = vehicle_no != null ?
                new ObjectParameter("vehicle_no", vehicle_no) :
                new ObjectParameter("vehicle_no", typeof(string));
    
            var punctualityParameter = punctuality != null ?
                new ObjectParameter("punctuality", punctuality) :
                new ObjectParameter("punctuality", typeof(string));
    
            var ratingParameter = rating.HasValue ?
                new ObjectParameter("rating", rating) :
                new ObjectParameter("rating", typeof(int));
    
            var feedbackParameter = feedback != null ?
                new ObjectParameter("feedback", feedback) :
                new ObjectParameter("feedback", typeof(string));
    
            var journeyParameter = journey != null ?
                new ObjectParameter("journey", journey) :
                new ObjectParameter("journey", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_AddFeedback", vehicle_noParameter, punctualityParameter, ratingParameter, feedbackParameter, journeyParameter);
        }
    
        public virtual int usp_AddRoute(string route_no, string location, string time)
        {
            var route_noParameter = route_no != null ?
                new ObjectParameter("route_no", route_no) :
                new ObjectParameter("route_no", typeof(string));
    
            var locationParameter = location != null ?
                new ObjectParameter("location", location) :
                new ObjectParameter("location", typeof(string));
    
            var timeParameter = time != null ?
                new ObjectParameter("time", time) :
                new ObjectParameter("time", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_AddRoute", route_noParameter, locationParameter, timeParameter);
        }
    
        public virtual int usp_BuyItem(string associate_id, Nullable<int> item_id)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            var item_idParameter = item_id.HasValue ?
                new ObjectParameter("item_id", item_id) :
                new ObjectParameter("item_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_BuyItem", associate_idParameter, item_idParameter);
        }
    
        public virtual int usp_CancelBusPass(Nullable<int> bus_pass_id)
        {
            var bus_pass_idParameter = bus_pass_id.HasValue ?
                new ObjectParameter("bus_pass_id", bus_pass_id) :
                new ObjectParameter("bus_pass_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_CancelBusPass", bus_pass_idParameter);
        }
    
        public virtual int usp_DeleteBus(string bus_no)
        {
            var bus_noParameter = bus_no != null ?
                new ObjectParameter("bus_no", bus_no) :
                new ObjectParameter("bus_no", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_DeleteBus", bus_noParameter);
        }
    
        public virtual int usp_DeleteCab(string cab_no)
        {
            var cab_noParameter = cab_no != null ?
                new ObjectParameter("cab_no", cab_no) :
                new ObjectParameter("cab_no", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_DeleteCab", cab_noParameter);
        }
    
        public virtual ObjectResult<usp_DisplayBusStats_Result> usp_DisplayBusStats()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_DisplayBusStats_Result>("usp_DisplayBusStats");
        }
    
        public virtual ObjectResult<usp_DisplayCabStats_Result> usp_DisplayCabStats()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_DisplayCabStats_Result>("usp_DisplayCabStats");
        }
    
        public virtual ObjectResult<usp_DisplayHelp_Result> usp_DisplayHelp()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_DisplayHelp_Result>("usp_DisplayHelp");
        }
    
        public virtual ObjectResult<usp_DisplayMessage_Result> usp_DisplayMessage(string associate_id)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_DisplayMessage_Result>("usp_DisplayMessage", associate_idParameter);
        }
    
        public virtual ObjectResult<usp_DisplayNotification_Result> usp_DisplayNotification(string associate_id)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_DisplayNotification_Result>("usp_DisplayNotification", associate_idParameter);
        }
    
        public virtual ObjectResult<usp_DisplayRanking_Result> usp_DisplayRanking()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_DisplayRanking_Result>("usp_DisplayRanking");
        }
    
        public virtual ObjectResult<usp_GetAssociateDetails_Result> usp_GetAssociateDetails(string associate_id)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetAssociateDetails_Result>("usp_GetAssociateDetails", associate_idParameter);
        }
    
        public virtual ObjectResult<usp_GetBus_Result> usp_GetBus(string bus_no)
        {
            var bus_noParameter = bus_no != null ?
                new ObjectParameter("bus_no", bus_no) :
                new ObjectParameter("bus_no", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetBus_Result>("usp_GetBus", bus_noParameter);
        }
    
        public virtual ObjectResult<usp_GetBusPass_Result> usp_GetBusPass(string associate_id)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetBusPass_Result>("usp_GetBusPass", associate_idParameter);
        }
    
        public virtual ObjectResult<usp_GetCab_Result> usp_GetCab(string cab_no)
        {
            var cab_noParameter = cab_no != null ?
                new ObjectParameter("cab_no", cab_no) :
                new ObjectParameter("cab_no", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetCab_Result>("usp_GetCab", cab_noParameter);
        }
    
        public virtual ObjectResult<usp_GetCabStatus_Result> usp_GetCabStatus(string associate_id)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetCabStatus_Result>("usp_GetCabStatus", associate_idParameter);
        }
    
        public virtual int usp_GetLoginData(string id)
        {
            var idParameter = id != null ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_GetLoginData", idParameter);
        }
    
        public virtual ObjectResult<usp_GetRoute_Result> usp_GetRoute(string route_no)
        {
            var route_noParameter = route_no != null ?
                new ObjectParameter("route_no", route_no) :
                new ObjectParameter("route_no", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetRoute_Result>("usp_GetRoute", route_noParameter);
        }
    
        public virtual int usp_InsertMessage(string associate_id, string message, string time)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            var messageParameter = message != null ?
                new ObjectParameter("message", message) :
                new ObjectParameter("message", typeof(string));
    
            var timeParameter = time != null ?
                new ObjectParameter("time", time) :
                new ObjectParameter("time", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_InsertMessage", associate_idParameter, messageParameter, timeParameter);
        }
    
        public virtual int usp_InsertNotification(string associate_id, string notification, string time)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            var notificationParameter = notification != null ?
                new ObjectParameter("notification", notification) :
                new ObjectParameter("notification", typeof(string));
    
            var timeParameter = time != null ?
                new ObjectParameter("time", time) :
                new ObjectParameter("time", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_InsertNotification", associate_idParameter, notificationParameter, timeParameter);
        }
    
        public virtual int usp_ModifyBus(string bus_no, string route_no, string city, Nullable<int> capacity)
        {
            var bus_noParameter = bus_no != null ?
                new ObjectParameter("bus_no", bus_no) :
                new ObjectParameter("bus_no", typeof(string));
    
            var route_noParameter = route_no != null ?
                new ObjectParameter("route_no", route_no) :
                new ObjectParameter("route_no", typeof(string));
    
            var cityParameter = city != null ?
                new ObjectParameter("city", city) :
                new ObjectParameter("city", typeof(string));
    
            var capacityParameter = capacity.HasValue ?
                new ObjectParameter("capacity", capacity) :
                new ObjectParameter("capacity", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_ModifyBus", bus_noParameter, route_noParameter, cityParameter, capacityParameter);
        }
    
        public virtual int usp_ModifyRoute(string route_no, string location, string time)
        {
            var route_noParameter = route_no != null ?
                new ObjectParameter("route_no", route_no) :
                new ObjectParameter("route_no", typeof(string));
    
            var locationParameter = location != null ?
                new ObjectParameter("location", location) :
                new ObjectParameter("location", typeof(string));
    
            var timeParameter = time != null ?
                new ObjectParameter("time", time) :
                new ObjectParameter("time", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_ModifyRoute", route_noParameter, locationParameter, timeParameter);
        }
    
        public virtual int usp_RenewBusPass(Nullable<int> bus_pass_id, Nullable<int> period)
        {
            var bus_pass_idParameter = bus_pass_id.HasValue ?
                new ObjectParameter("bus_pass_id", bus_pass_id) :
                new ObjectParameter("bus_pass_id", typeof(int));
    
            var periodParameter = period.HasValue ?
                new ObjectParameter("period", period) :
                new ObjectParameter("period", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_RenewBusPass", bus_pass_idParameter, periodParameter);
        }
    
        public virtual ObjectResult<usp_SearchBusSchedule_Result> usp_SearchBusSchedule(string bus_no, string route_no, string location)
        {
            var bus_noParameter = bus_no != null ?
                new ObjectParameter("bus_no", bus_no) :
                new ObjectParameter("bus_no", typeof(string));
    
            var route_noParameter = route_no != null ?
                new ObjectParameter("route_no", route_no) :
                new ObjectParameter("route_no", typeof(string));
    
            var locationParameter = location != null ?
                new ObjectParameter("location", location) :
                new ObjectParameter("location", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_SearchBusSchedule_Result>("usp_SearchBusSchedule", bus_noParameter, route_noParameter, locationParameter);
        }
    
        public virtual ObjectResult<usp_SearchCab_Result> usp_SearchCab(string cab_no, string cab_model, string area)
        {
            var cab_noParameter = cab_no != null ?
                new ObjectParameter("cab_no", cab_no) :
                new ObjectParameter("cab_no", typeof(string));
    
            var cab_modelParameter = cab_model != null ?
                new ObjectParameter("cab_model", cab_model) :
                new ObjectParameter("cab_model", typeof(string));
    
            var areaParameter = area != null ?
                new ObjectParameter("area", area) :
                new ObjectParameter("area", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_SearchCab_Result>("usp_SearchCab", cab_noParameter, cab_modelParameter, areaParameter);
        }
    
        public virtual ObjectResult<usp_SelectABus_Result> usp_SelectABus(string pick_up_point)
        {
            var pick_up_pointParameter = pick_up_point != null ?
                new ObjectParameter("pick_up_point", pick_up_point) :
                new ObjectParameter("pick_up_point", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_SelectABus_Result>("usp_SelectABus", pick_up_pointParameter);
        }
    
        public virtual int usp_UpdateAssociateDetails(string associate_id, string associate_name, string address, string city, string mobile, string email)
        {
            var associate_idParameter = associate_id != null ?
                new ObjectParameter("associate_id", associate_id) :
                new ObjectParameter("associate_id", typeof(string));
    
            var associate_nameParameter = associate_name != null ?
                new ObjectParameter("associate_name", associate_name) :
                new ObjectParameter("associate_name", typeof(string));
    
            var addressParameter = address != null ?
                new ObjectParameter("address", address) :
                new ObjectParameter("address", typeof(string));
    
            var cityParameter = city != null ?
                new ObjectParameter("city", city) :
                new ObjectParameter("city", typeof(string));
    
            var mobileParameter = mobile != null ?
                new ObjectParameter("mobile", mobile) :
                new ObjectParameter("mobile", typeof(string));
    
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_UpdateAssociateDetails", associate_idParameter, associate_nameParameter, addressParameter, cityParameter, mobileParameter, emailParameter);
        }
    
        public virtual int usp_UpdateCab(string cab_no, string cab_model, Nullable<int> capacity, string area, string driver_name, string driver_mobile)
        {
            var cab_noParameter = cab_no != null ?
                new ObjectParameter("cab_no", cab_no) :
                new ObjectParameter("cab_no", typeof(string));
    
            var cab_modelParameter = cab_model != null ?
                new ObjectParameter("cab_model", cab_model) :
                new ObjectParameter("cab_model", typeof(string));
    
            var capacityParameter = capacity.HasValue ?
                new ObjectParameter("capacity", capacity) :
                new ObjectParameter("capacity", typeof(int));
    
            var areaParameter = area != null ?
                new ObjectParameter("area", area) :
                new ObjectParameter("area", typeof(string));
    
            var driver_nameParameter = driver_name != null ?
                new ObjectParameter("driver_name", driver_name) :
                new ObjectParameter("driver_name", typeof(string));
    
            var driver_mobileParameter = driver_mobile != null ?
                new ObjectParameter("driver_mobile", driver_mobile) :
                new ObjectParameter("driver_mobile", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_UpdateCab", cab_noParameter, cab_modelParameter, capacityParameter, areaParameter, driver_nameParameter, driver_mobileParameter);
        }
    
        public virtual int usp_CancelCabRequest(Nullable<int> cab_request_id)
        {
            var cab_request_idParameter = cab_request_id.HasValue ?
                new ObjectParameter("cab_request_id", cab_request_id) :
                new ObjectParameter("cab_request_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_CancelCabRequest", cab_request_idParameter);
        }
    
        public virtual ObjectResult<usp_GetLoginDetails_Result> usp_GetLoginDetails(string id)
        {
            var idParameter = id != null ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetLoginDetails_Result>("usp_GetLoginDetails", idParameter);
        }
    
        public virtual ObjectResult<usp_GetFreeUnsharedCab_Result> usp_GetFreeUnsharedCab(string city)
        {
            var cityParameter = city != null ?
                new ObjectParameter("city", city) :
                new ObjectParameter("city", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetFreeUnsharedCab_Result>("usp_GetFreeUnsharedCab", cityParameter);
        }
    
        public virtual ObjectResult<usp_GetSharedFreeCab_Result> usp_GetSharedFreeCab(string city)
        {
            var cityParameter = city != null ?
                new ObjectParameter("city", city) :
                new ObjectParameter("city", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetSharedFreeCab_Result>("usp_GetSharedFreeCab", cityParameter);
        }
    
        public virtual int usp_test(string area)
        {
            var areaParameter = area != null ?
                new ObjectParameter("area", area) :
                new ObjectParameter("area", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("usp_test", areaParameter);
        }
    }
}
