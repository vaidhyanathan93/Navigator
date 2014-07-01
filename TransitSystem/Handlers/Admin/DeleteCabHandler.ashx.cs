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
    /// Summary description for DeleteCabHandler
    /// </summary>
    public class DeleteCabHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String cab_no = context.Request.QueryString["cab_no"];
            CAdminBO BO = new CAdminBO();
            BO.DeleteCab("cab_no");
            
            context.Response.ContentType = "text/plain";
            context.Response.Write("200");
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