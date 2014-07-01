using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.Entity;
using EF;
using DAL;
using BLL;
using System.Web.Script.Serialization;


namespace TransitSystem.Handlers.Admin
{
    /// <summary>
    /// Summary description for AddCabHandler
    /// </summary>
    public class AddCabHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {

            String cab_no = context.Request.QueryString["cab_no"];
            String cab_model = context.Request.QueryString["cab_model"];
            int capacity = Convert.ToInt32(context.Request.QueryString["capacity"]);
            String area = context.Request.QueryString["area"];
            String driver_name = context.Request.QueryString["driver_name"];
            String driver_mobile = context.Request.QueryString["driver_mobile"];

            CAdminBO BO = new CAdminBO();
            BO.AddCab(cab_no,cab_model,capacity,area,driver_name,driver_mobile);
            context.Response.ContentType = "text/plain";
            context.Response.Write("200");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}