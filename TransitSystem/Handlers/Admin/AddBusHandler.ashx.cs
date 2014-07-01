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
    /// Summary description for AddBusHandler
    /// </summary>
    public class AddBusHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String bus_no=context.Request.QueryString["bus_no"];
            String route_no=context.Request.QueryString["route_no"];
            String city=context.Request.QueryString["city"];
            int capacity = Convert.ToInt32(context.Request.QueryString["capacity"]);

            CAdminBO BO = new CAdminBO();
            BO.AddBus(bus_no,route_no,city,capacity);
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