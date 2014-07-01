﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;
using DAL;

namespace BLL
{
    public interface IFinleyBO
    {
        IEnumerable<usp_GetAssociateDetails_Result> GetAssociateDetails(String associate_id);
        void UpdateAssociate(String associate_id, String associate_name, String address, String city, String mobile, String email);
    }
}
