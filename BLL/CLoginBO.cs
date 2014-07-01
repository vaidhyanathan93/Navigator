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
   public  class CLoginBO : ILoginBO , IDisposable
    {
        CLoginDO context = new CLoginDO();
        public IEnumerable<usp_GetLoginDetails_Result> getLoginDetails(String id)
        {
            return context.getLoginDetails(id);
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
