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
    /// Summary description for AddFeedbackHandler
    /// </summary>
    public class AddFeedbackHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String vehicle_no=context.Request.QueryString["vehicle_no"];
            String punctuality = context.Request.QueryString["punctuality"];
            int rating = Convert.ToInt32(context.Request.QueryString["rating"]);
            String feedback = context.Request.QueryString["feedback"];
            String journey = context.Request.QueryString["journey"];

            CGamificationBO BO = new CGamificationBO();
            BO.AddFeedback(vehicle_no,punctuality,rating,feedback,journey);

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