using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BLL;
using EF;
using System.Web.Script.Serialization;

namespace TransitSystem.Handlers
{
    /// <summary>
    /// Summary description for cabregistration2
    /// </summary>
    public class cabregistration2 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //string AssID = context.Session["assid"].ToString();

            String ass = "909";
            CCabRequestBO con = new CCabRequestBO();
            var res=con.GetCabStatus(ass);
           
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