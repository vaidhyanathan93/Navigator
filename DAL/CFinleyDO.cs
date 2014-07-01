using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;

namespace DAL
{
    public class CFinleyDO : IFinleyDO , IDisposable
    {
        Galactic_KnightsEntities context = new Galactic_KnightsEntities();

        public IEnumerable<usp_GetAssociateDetails_Result> GetAssociateDetails(String associate_id)
        {
            return context.usp_GetAssociateDetails(associate_id);
        }
        public void UpdateAssociate(String associate_id, String associate_name, String address, String city, String mobile, String email)
        {
            context.usp_UpdateAssociateDetails(associate_id,associate_name,address,city,mobile,email);
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
