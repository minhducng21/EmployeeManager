using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmployeeManager.Models
{
    public class EmployeeDb : DbContext
    {
        public DbSet<Employee> Employee { get; set; }
    }
}