using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;

namespace DAL
{
    public class CCabRequestDO : ICabRequestDO, IDisposable
    {

        Galactic_KnightsEntities context = new Galactic_KnightsEntities();


        public void AddCabRequest( String cab_no, String associate_id, String mobile,
String city, String pick_up_point, String destination, String date, String time, int privileged_user, int go_green, String comment,String cab_type)
        {
            context.usp_AddCabRequest(cab_no,associate_id,mobile,
city,pick_up_point,destination,date,time,privileged_user,go_green,comment,cab_type);
        }
        public IEnumerable<usp_GetCabStatus_Result> GetCabStatus(String associate_id)
        {
            return context.usp_GetCabStatus(associate_id);
        }

        public void CancelCabRequest(int cab_request_id)
        {
            context.usp_CancelCabRequest(cab_request_id);
        }
        public IEnumerable<usp_GetSharedFreeCab_Result>  GetFreeSharedCab(String area)
        {
            return context.usp_GetSharedFreeCab(area);
        }
        public IEnumerable<usp_GetFreeUnsharedCab_Result> GetFreeUnsharedCab(String area)
        {
            return context.usp_GetFreeUnsharedCab(area);
        }
       

        private bool disposedValue = false;


        public virtual void Dispose(bool disposing)
        {
            if (!this.disposedValue)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposedValue = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    
    }
}
