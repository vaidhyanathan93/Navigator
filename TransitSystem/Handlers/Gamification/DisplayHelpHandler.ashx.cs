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
    /// Summary description for DisplayHelpHandler
    /// </summary>
    public class DisplayHelpHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            CGamificationBO BO = new CGamificationBO();
            var res=BO.DisplayHelp();
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