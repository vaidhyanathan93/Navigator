using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;
using DAL;

namespace BLL
{
    public class CGamificationBO : IGamificationBO, IDisposable
    {
        CGamificationDO context = new CGamificationDO();

        public IEnumerable<usp_DisplayRanking_Result> DisplayRanking()
        {
            return context.DisplayRanking();
        }
        public void BuyItem(String associate_id, int item_id)
        {
            context.BuyItem(associate_id, item_id);
        }
        public IEnumerable<usp_DisplayHelp_Result> DisplayHelp()
        {
            return context.DisplayHelp();
        }
        public void AddFeedback(String vehicle_no, String punctuality, int rating, String feedback, String journey)
        {
            context.AddFeedback(vehicle_no, punctuality, rating, feedback, journey);
        }

        public IEnumerable<usp_DisplayMessage_Result> DisplayMessage(String associate_id)
        {
            return context.DisplayMessage(associate_id);
        }
        public void InsertMessage(String associate_id, String message, String time)
        {
            context.InsertMessage(associate_id, message, time);
        }
        public IEnumerable<usp_DisplayNotification_Result> DisplayNotification(String associate_id)
        {
            return context.DisplayNotification(associate_id);
        }
        public void InsertNotification(String associate_id, String notification, String time)
        {
            context.InsertNotification(associate_id, notification, time);
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
