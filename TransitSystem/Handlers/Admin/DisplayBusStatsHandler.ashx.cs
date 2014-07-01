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
    /// Summary description for DisplayBusStatsHandler
    /// </summary>
    public class DisplayBusStatsHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            CAdminBO BO = new CAdminBO();
            var res=BO.DisplayBusStats();
            JavaScriptSerializer js = new JavaScriptSerializer();
            context.Response.ContentType = "text/plain";
            context.Response.Write(js.Serialize(res));
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