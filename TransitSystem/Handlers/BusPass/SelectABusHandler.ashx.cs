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
using System.Diagnostics;

namespace TransitSystem.Handlers.BusPass
{
    /// <summary>
    /// Summary description for SelectABusHandler
    /// </summary>
    public class SelectABusHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String pick_up_point = context.Request.QueryString["pick_up_point"];
            //Debug.WriteLine(pick_up_point);
            CBusPassBO BO = new CBusPassBO();
            var res = BO.SelectABus(pick_up_point);
            JavaScriptSerializer js = new JavaScriptSerializer();
           
            //String r = js.Serialize(res);
            //Debug.WriteLine(r);
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