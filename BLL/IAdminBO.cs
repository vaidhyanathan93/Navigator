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
    public interface IAdminBO
    {
        //BUS MANAGEMENT - Add new bus

        void AddBus(String bus_no, String route_no, String city, int capacity);
        void AddRoute( String route_no, String location, String time);
        IEnumerable<usp_GetBus_Result> GetBus(String bus_no);
        IEnumerable<usp_GetRoute_Result> GetRoute(String route_no);

        // BUS MANAGEMENT - Modify Bus

        IEnumerable<usp_SearchBusSchedule_Result> GetSchedule(String bus_no, String route_no, String location);
        void ModifyBus(String bus_no, String route_no, String city, int capacity);
        void ModifyRoute(String route_no, String location, String time);
        void DeleteBus(String bus_no);

        // CAB MANAGEMENT

        void AddCab(String cab_no, String cab_model, int max_capacity, String area, String driver_name, String driver_mobile);
        IEnumerable<usp_GetCab_Result> GetCab(String cab_no);
        IEnumerable<usp_SearchCab_Result> SearchCab(String cab_no, String cab_model,  String area);
        void UpdateCab(String cab_no, String cab_model, int max_capacity, String area, String driver_name, String driver_mobile);
        void DeleteCab(String cab_no);

        // STATISTICS

        IEnumerable<usp_DisplayBusStats_Result> DisplayBusStats();
        IEnumerable<usp_DisplayCabStats_Result> DisplayCabStats();

    }

}
