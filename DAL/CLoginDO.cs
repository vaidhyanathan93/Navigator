using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;

namespace DAL
{
    public class CLoginDO : ILoginDO, IDisposable
    {
        Galactic_KnightsEntities context = new Galactic_KnightsEntities();
        public IEnumerable<usp_GetLoginDetails_Result> getLoginDetails(String id)
        {
            return context.usp_GetLoginDetails(id);
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
