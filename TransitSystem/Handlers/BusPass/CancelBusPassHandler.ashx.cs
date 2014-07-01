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

namespace TransitSystem.Handlers.BusPass
{
    /// <summary>
    /// Summary description for CancelBusPassHandler
    /// </summary>
    public class CancelBusPassHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //String associate_id = context.Session["associate_id"].ToString();
            int bus_pass_id = int.Parse(context.Request.QueryString["bus_pass_id"]);
            CBusPassBO BO = new CBusPassBO();
            BO.CancelBusPass(bus_pass_id);

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