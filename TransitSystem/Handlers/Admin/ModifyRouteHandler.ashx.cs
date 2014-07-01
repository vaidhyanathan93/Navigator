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
    /// Summary description for ModifyRouteHandler
    /// </summary>
    public class ModifyRouteHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String route_no = context.Request.QueryString["route_no"];
            String location = context.Request.QueryString["location"];
            String time = context.Request.QueryString["time"];

            CAdminBO BO = new CAdminBO();
            BO.ModifyRoute(route_no, location, time);
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