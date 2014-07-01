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

namespace TransitSystem.Handlers.Finley
{
    /// <summary>
    /// Summary description for UpdateAssociateDetailsHandler
    /// </summary>
    public class UpdateAssociateDetailsHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //String associate_id=context.Session["associate_id"].ToString();
            String associate_id = "909";
            String associate_name=context.Request.QueryString["associate_name"];
            String address = context.Request.QueryString["address"];
            String city = context.Request.QueryString["city"];
            String mobile = context.Request.QueryString["mobile"];
            String email = context.Request.QueryString["email"];

            CFinleyBO BO = new CFinleyBO();
            BO.UpdateAssociate(associate_id,associate_name,address,city,mobile,email);
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