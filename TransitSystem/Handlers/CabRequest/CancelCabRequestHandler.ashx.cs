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

namespace TransitSystem.Handlers.CabRequest
{
    /// <summary>
    /// Summary description for CancelCabRequestHandler
    /// </summary>
    public class CancelCabRequestHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //String associate_id = context.Session["associate_id"].ToString();
            CCabRequestBO BO = new CCabRequestBO();
            int cab_request_id = int.Parse(context.Request.QueryString["cab_reuest_id"]);
            BO.CancelCabRequest(cab_request_id);
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