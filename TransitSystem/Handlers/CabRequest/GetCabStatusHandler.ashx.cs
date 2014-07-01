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

namespace TransitSystem.Handlers.CabRequest
{
    /// <summary>
    /// Summary description for GetCabStatusHandler
    /// </summary>
    public class GetCabStatusHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //String associate_id = context.Session["associate_id"].ToString();
            String associate_id = "909";
            CCabRequestBO BO = new CCabRequestBO();
            var res=BO.GetCabStatus(associate_id);
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