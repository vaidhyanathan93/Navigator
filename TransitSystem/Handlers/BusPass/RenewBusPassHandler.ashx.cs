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
    /// Summary description for RenewBusPassHandler
    /// </summary>
    public class RenewBusPassHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //String associate_id = context.Session["associate_id"].ToString();
            int bus_pass_id = int.Parse(context.Request.QueryString["bus_pass_id"]); 
            //int period = int.Parse(context.Request.QueryString["period"]);
            Debug.WriteLine("bus_pass_id : " + bus_pass_id);
            int period = 1;
            CBusPassBO BO = new CBusPassBO();
            BO.RenewBusPass(bus_pass_id,period);
            
            context.Response.Write("200");
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