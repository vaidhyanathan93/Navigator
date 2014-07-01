using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BLL;
using EF;
using System.Web.Script.Serialization;


namespace TransitSystem.Handlers
{
    /// <summary>
    /// Summary description for cabregistration
    /// </summary>
    public class cabregistration : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";



            context.Response.ContentType = "text/plain";

            CCabRequestBO BO = new CCabRequestBO();
            // Random rnd = new Random();
            JavaScriptSerializer js = new JavaScriptSerializer();

            //int cab_request_id = rnd.Next(1200, 1300000);
            int privileged_user = int.Parse(context.Request.QueryString["privileged_user"]);
            String mobile = context.Request.QueryString["mobile"];
            String cab_type = context.Request.QueryString["type"];

            String city = context.Request.QueryString["city"];
            String pick_up_point = context.Request.QueryString["pick_up_point"];
            String destination = context.Request.QueryString["destination"];

            String date = context.Request.QueryString["date"];
            String comment = context.Request.QueryString["comment"];
            String time = context.Request.QueryString["time"];
            int go_green = int.Parse(context.Request.QueryString["go_green"]);


            String associate_id = "909";
            //string AssID = context.Session["assid"].ToString();
            if (cab_type == "1")
            {
                var cab_no = BO.GetFreeUnsharedCab(city);

                String cabno = js.Serialize(cab_no.First());
                BO.AddCabRequest(cabno, associate_id, mobile,
                                       city, pick_up_point, destination, date, time, privileged_user, go_green, comment, cab_type);
            }
            else
            {
                var cab_no = BO.GetFreeSharedCab(city);
                String cabno = js.Serialize(cab_no.First());
                BO.AddCabRequest(cabno, associate_id, mobile,
                       city, pick_up_point, destination, date, time, privileged_user, go_green, comment, cab_type);
            }





            context.Response.Write(js.Serialize("success:1"));
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