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


namespace TransitSystem.Handlers.Login
{
    /// <summary>
    /// Summary description for LoginHandler
    /// </summary>
    public class LoginHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            
            String associate_id=context.Request.QueryString["associate_id"];
            context.Session["associate_id"] = associate_id;
            CLoginBO BO = new CLoginBO();
            var res=BO.getLoginDetails(associate_id);
            JavaScriptSerializer js = new JavaScriptSerializer();
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