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
    /// Summary description for AddCabRequestHandler
    /// </summary>
    public class AddCabRequestHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";

            CCabRequestBO BO = new CCabRequestBO();
            // Random rnd = new Random();
            JavaScriptSerializer js = new JavaScriptSerializer();

            //int cab_request_id = rnd.Next(1200, 1300000);
            int privileged_user = 0;
            String puser=context.Request.QueryString["privileged_user"];
            if (puser != null)
            {
                privileged_user = int.Parse(puser);
            }
            String mobile = context.Request.QueryString["mobile"];
            String cab_type = context.Request.QueryString["type"];

            String city = context.Request.QueryString["city"];
            String pick_up_point = context.Request.QueryString["pick_up_point"];
            String destination = context.Request.QueryString["destination"];

            String date = context.Request.QueryString["date"];
            String comment = context.Request.QueryString["comments"];
            String time = context.Request.QueryString["time"];
            int go_green = 0;
            String strgo_green = context.Request.QueryString["go_green"];
            if (strgo_green != null)
            {
                go_green= int.Parse(strgo_green);
            }
            //int go_green = int.Parse(context.Request.QueryString["go_green"]);


            String associate_id = "909";
            //string AssID = context.Session["assid"].ToString();
            
                if (cab_type == "1")
                {
                    var cab_no = BO.GetFreeUnsharedCab(city);
                    String cabno = null;
                    try
                    {
                        cabno = js.Serialize(cab_no.First());
                    }
                    catch (Exception e)
                    {
                        Console.Write(e);
                    }
                    if (cabno != "[]")
                    {

                        String[] rslt = cabno.Split('\"');
                        cabno = rslt[3];
                        BO.AddCabRequest(cabno, associate_id, mobile,
                                               city, pick_up_point, destination, date, time, privileged_user, go_green, comment, cab_type);
                    }
                }
                else
                {
                    var cab_no = BO.GetFreeSharedCab(city);
                    String cabno = null;
                    try
                    {
                        cabno = js.Serialize(cab_no.First());
                    }
                    catch (Exception e)
                    {
                        Console.Write(e);
                    }
                    if (cabno != "[]")
                    {


                        String[] rslt = cabno.Split('\"');
                        cabno = rslt[3];
                        BO.AddCabRequest(cabno, associate_id, mobile,
                               city, pick_up_point, destination, date, time, privileged_user, go_green, comment, cab_type);
                    }
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