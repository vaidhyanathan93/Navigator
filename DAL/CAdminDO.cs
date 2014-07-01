using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;

namespace DAL
{
    public class CAdminDO: IAdminDO , IDisposable
    {
        Galactic_KnightsEntities context = new Galactic_KnightsEntities();

        //BUS MANAGEMENT - Add new bus

        public void AddBus(String bus_no, String route_no, String city, int capacity)
        {
            context.usp_AddBus(bus_no,route_no,city,capacity);
        }
        public void AddRoute(String route_no, String location, String time)
        {
            context.usp_AddRoute(route_no,location,time);
        }
        public IEnumerable<usp_GetBus_Result> GetBus(String bus_no)
        {
            return context.usp_GetBus(bus_no);
        }
        public IEnumerable<usp_GetRoute_Result> GetRoute(String route_no)
        {
            return context.usp_GetRoute(route_no);
        }

        // BUS MANAGEMENT - Modify Bus

        public IEnumerable<usp_SearchBusSchedule_Result> GetSchedule(String bus_no, String route_no, String location)
        {
            return context.usp_SearchBusSchedule(bus_no,route_no,location);
        }
        public void ModifyBus(String bus_no,String route_no, String city, int capacity)
        {
            context.usp_ModifyBus(bus_no, route_no, city, capacity);
        }
        public void ModifyRoute(String route_no, String location, String time)
        {
            context.usp_ModifyRoute(route_no,location,time);
        }
        public void DeleteBus(String bus_no)
        {
            context.usp_DeleteBus(bus_no);
        }



        // CAB MANAGEMENT

        public void AddCab(String cab_no, String cab_model, int max_capacity, String area, String driver_name, String driver_mobile)
        {
            context.usp_AddCab(cab_no,cab_model,max_capacity,area,driver_name,driver_mobile);
        }
        public IEnumerable<usp_GetCab_Result> GetCab(String cab_no)
        {
            return context.usp_GetCab(cab_no);
        }
        public IEnumerable<usp_SearchCab_Result> SearchCab(String cab_no, String cab_model,  String area)
        {
            return context.usp_SearchCab(cab_no,cab_model,area);
        }
        public void UpdateCab(String cab_no,String cab_model,int max_capacity,String area,String driver_name,String driver_mobile)
        {
            context.usp_UpdateCab(cab_no,cab_model,max_capacity,area,driver_name,driver_mobile);
        }
        public void DeleteCab(String cab_no)
       {
           context.usp_DeleteCab(cab_no);
       }
        
        
        
        
        // STATISTICS

        public IEnumerable<usp_DisplayBusStats_Result> DisplayBusStats()
        {
            return context.usp_DisplayBusStats();
        }
        public IEnumerable<usp_DisplayCabStats_Result> DisplayCabStats()
        {
            return context.usp_DisplayCabStats();
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
