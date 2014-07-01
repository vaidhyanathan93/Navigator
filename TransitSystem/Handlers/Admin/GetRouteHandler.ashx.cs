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
    /// Summary description for GetRouteHandler
    /// </summary>
    public class GetRouteHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String route_no=context.Request.QueryString["route_no"];
            CAdminBO BO = new CAdminBO();
            var res=BO.GetRoute(route_no);
            context.Response.ContentType = "text/plain";
            JavaScriptSerializer js = new JavaScriptSerializer();
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