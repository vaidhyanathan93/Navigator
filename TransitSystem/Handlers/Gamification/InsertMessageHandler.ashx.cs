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
    /// Summary description for InsertMessageHandler
    /// </summary>
    public class InsertMessageHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String associate_id = context.Session["associate_id"].ToString();
            String message=context.Request.QueryString["message"];
            String time = DateTime.Now.ToString();

            CGamificationBO BO = new CGamificationBO();
            BO.InsertMessage(associate_id,message,time);

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