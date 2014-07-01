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
    public interface ILoginBO
    {
        IEnumerable<usp_GetLoginDetails_Result> getLoginDetails(String id);

    }

}
