using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;

namespace DAL
{
    
      public class CGamificationDO : IGamificationDO , IDisposable
    {

          Galactic_KnightsEntities context = new Galactic_KnightsEntities();

          public IEnumerable<usp_DisplayRanking_Result> DisplayRanking()
          {
              return context.usp_DisplayRanking();
          }
          public void BuyItem(String associate_id, int item_id)
          {
              context.usp_BuyItem(associate_id,item_id);
          }
          public IEnumerable<usp_DisplayHelp_Result> DisplayHelp()
          {
              return context.usp_DisplayHelp();
          }
          public void AddFeedback(String vehicle_no, String punctuality, int rating, String feedback, String journey)
          {
              context.usp_AddFeedback(vehicle_no,punctuality,rating,feedback,journey);
          }

          public IEnumerable<usp_DisplayMessage_Result> DisplayMessage(String associate_id)
          {
              return context.usp_DisplayMessage(associate_id);
          }
          public void InsertMessage(String associate_id, String message, String time)
          {
              context.usp_InsertMessage(associate_id,message,time);
          }
          public IEnumerable<usp_DisplayNotification_Result> DisplayNotification(String associate_id)
          {
              return context.usp_DisplayNotification(associate_id);
          }
          public void InsertNotification(String associate_id, String notification,String time)
          {
              context.usp_InsertNotification(associate_id,notification,time);
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
