//------------------------------------------------------------------------------
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
    
    public partial class usp_GetCabStatus_Result
    {
        public Nullable<int> cab_request_id { get; set; }
        public string associate_id { get; set; }
        public string cab_no { get; set; }
        public string date { get; set; }
        public string time { get; set; }
        public string pick_up_point { get; set; }
        public string destination { get; set; }
        public string city { get; set; }
        public string associate_mobile { get; set; }
        public Nullable<int> go_green { get; set; }
        public Nullable<int> privileged_user { get; set; }
        public string comment { get; set; }
        public string cab_type { get; set; }
        public string driver_name { get; set; }
        public string driver_mobile { get; set; }
    }
}
