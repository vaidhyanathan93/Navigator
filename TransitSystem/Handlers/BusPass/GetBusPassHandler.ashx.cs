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
    /// Summary description for GetBusPassHandler
    /// </summary>
    public class GetBusPassHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String associate_id = "909";
            //String associate_id=context.Session["associate_id"].ToString();

            CBusPassBO BO = new CBusPassBO();
            var res=BO.GetBusPass(associate_id);
            JavaScriptSerializer js = new JavaScriptSerializer();
            //Debug.WriteLine("rslt :" + js.Serialize(res));
            context.Response.Write(js.Serialize(res));
            context.Response.ContentType = "text/plain";
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