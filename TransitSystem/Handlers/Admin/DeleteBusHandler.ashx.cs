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
    /// Summary description for DeleteBusHandler
    /// </summary>
    public class DeleteBusHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String bus_no=context.Request.QueryString["bus_no"];
            CAdminBO BO = new CAdminBO();
            BO.DeleteBus(bus_no);
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