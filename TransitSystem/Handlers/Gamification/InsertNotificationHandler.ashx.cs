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
    /// Summary description for InsertNotificationHandler
    /// </summary>
    public class InsertNotificationHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String associate_id = context.Session["associate_id"].ToString();
            String notification = context.Request.QueryString["notification"];
            String time = DateTime.Now.ToString();

            CGamificationBO BO = new CGamificationBO();
            BO.InsertNotification(associate_id, notification, time);

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