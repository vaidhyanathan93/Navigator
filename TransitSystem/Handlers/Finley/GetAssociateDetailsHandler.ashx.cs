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

namespace TransitSystem.Handlers.Finley
{
    /// <summary>
    /// Summary description for GetAssociateDetailsHandler
    /// </summary>
    public class GetAssociateDetailsHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //String associate_id = context.Session["associate_id"].ToString();
            String associate_id = "909";
            CFinleyBO BO = new CFinleyBO();
            var res = BO.GetAssociateDetails(associate_id);
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