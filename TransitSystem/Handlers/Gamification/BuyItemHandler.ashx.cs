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
    /// Summary description for BuyItemHandler
    /// </summary>
    public class BuyItemHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String associate_id = context.Session["associate_id"].ToString();
            int item_id=Convert.ToInt32(context.Request.QueryString["item_id"]);
            CGamificationBO BO = new CGamificationBO();
            BO.BuyItem(associate_id,item_id);
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