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
    public interface ICabRequestBO
    {
        void AddCabRequest(String cab_no, String associate_id, String mobile,
String city, String pick_up_point, String destination, String date, String time, int privileged_user, int go_green, String comment, String cab_type);
        IEnumerable<usp_GetCabStatus_Result> GetCabStatus(String associate_id);
        void CancelCabRequest(int cab_request_id);
        IEnumerable<usp_GetSharedFreeCab_Result> GetFreeSharedCab();
        IEnumerable<usp_GetFreeUnsharedCab_Result> GetFreeUnsharedCab();
    }
}
