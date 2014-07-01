using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;


namespace DAL
{
    public interface IBusPassDO
    {
        IEnumerable<usp_SelectABus_Result> SelectABus(String pick_up_point);
        void AddBusPass(String associate_id,String bus_no,String bus_pass_type,
            String address,String city,String pick_up_point,String destination,
            String mobile,int privileged_user,String issued_on,int go_green,String comment,String valid_till,int cost);
        IEnumerable<usp_GetBusPass_Result> GetBusPass(String associate_id);
        void RenewBusPass(int bus_pass_id,int period);
        void CancelBusPass(int bus_pass_id);
        
    }
}
