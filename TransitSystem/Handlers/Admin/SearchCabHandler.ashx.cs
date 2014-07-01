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
    /// Summary description for SearchCabHandler
    /// </summary>
    public class SearchCabHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String cab_no = context.Request.QueryString["cab_no"];
            String cab_model = context.Request.QueryString["cab_model"];
            String area = context.Request.QueryString["area"];

            CAdminBO BO = new CAdminBO();
            var res = BO.SearchCab(cab_no,cab_model,area);
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