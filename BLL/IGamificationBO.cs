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
    public interface IGamificationBO
    {
        IEnumerable<usp_DisplayRanking_Result> DisplayRanking();
        void BuyItem(String associate_id, int item_id);
        IEnumerable<usp_DisplayHelp_Result> DisplayHelp();
        void AddFeedback(String vehicle_no, String punctuality, int rating, String feedback, String journey);
        IEnumerable<usp_DisplayMessage_Result> DisplayMessage(String associate_id);
        void InsertMessage(String associate_id, String message, String time);
        IEnumerable<usp_DisplayNotification_Result> DisplayNotification(String associate_id);
        void InsertNotification(String associate_id, String notification, String time);
    }
}
