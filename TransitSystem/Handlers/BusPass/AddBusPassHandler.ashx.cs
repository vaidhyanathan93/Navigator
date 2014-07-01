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
    /// Summary description for AddBusPassHandler
    /// </summary>
    public class AddBusPassHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //String associate_id=context.Session["associate_id"].ToString();
            String associate_id = "909";
            String bus_no=context.Request.QueryString["bus_no"];
            //String bus_no = "12345";
            String bus_pass_type = context.Request.QueryString["bus_pass_type"];
            String strissued_on = context.Request.QueryString["address"];
            String city = context.Request.QueryString["city"];
            String pick_up_point = context.Request.QueryString["pick_up_point"];
            String destination = context.Request.QueryString["destination"];
            String mobile = context.Request.QueryString["mobile"];
            String strprivileged_user = context.Request.QueryString["privileged_user"];
            //int privileged_user = Convert.ToInt32(context.Request.QueryString["privileged_user"]);
            int privileged_user = 0;
            if (strprivileged_user.Equals("yes"))
            {
                privileged_user = 1;
            }
            DateTime issued_on_date = DateTime.Now;

           
            try
            {
                if (strissued_on != null)
                {
                  
                    issued_on_date = Convert.ToDateTime(strissued_on);
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e);
            }
            String issued_on = Convert.ToString(issued_on_date);
            int go_green = Convert.ToInt32(context.Request.QueryString["go_green"]);
            String comment = context.Request.QueryString["comment"];
            Debug.WriteLine("cost : " + context.Request.QueryString["cost"]);
            int cost = 1;
            try
            {
                cost = Convert.ToInt32((context.Request.QueryString["cost"]));
            }
            catch (Exception e)
            {
                Debug.WriteLine(e);
            }

            String valid_till = null;
            if (bus_pass_type.Equals("daily"))
            {
                valid_till = Convert.ToString(issued_on_date.AddDays(1));
                
            }
            else if (bus_pass_type.Equals("weekly"))
            {
                valid_till = Convert.ToString(issued_on_date.AddDays(7));
                cost = cost * 7;
            }
            else if (bus_pass_type.Equals("monthly"))
            {
                valid_till = Convert.ToString(issued_on_date.AddDays(30));
                cost = cost * 30;
            }


            //String valid_till = context.Request.QueryString["valid_till"];
            CBusPassBO BO = new CBusPassBO();
            BO.AddBusPass(associate_id, bus_no, bus_pass_type, strissued_on, city, pick_up_point, destination, mobile, privileged_user,
                issued_on, go_green, comment, valid_till,cost);

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