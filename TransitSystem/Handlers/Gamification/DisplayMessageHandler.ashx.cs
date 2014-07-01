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

namespace TransitSystem.Handlers.Gamification
{
    /// <summary>
    /// Summary description for DisplayMessageHandler
    /// </summary>
    public class DisplayMessageHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String associate_id = context.Session["associate_id"].ToString();

            CGamificationBO BO = new CGamificationBO();
            var res = BO.DisplayMessage(associate_id);
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