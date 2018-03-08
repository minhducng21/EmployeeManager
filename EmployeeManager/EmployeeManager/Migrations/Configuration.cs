namespace EmployeeManager.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<EmployeeManager.Models.EmployeeDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(EmployeeDb context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
            context.Employee.AddOrUpdate(
                m => m.Name,
                new Employee
                {
                    Name = "Nguyen Thanh Don",
                    Email = "Donnt@gmail.com",
                    DepartmentName = "Sales",
                    Designation = "Dev"
                },
                new Employee
                {
                    Name = "Ngo Minh Duc",
                    Email = "josmd21@gmail.com",
                    DepartmentName = "Technical",
                    Designation = "Dev"
                },
                new Employee
                {
                    Name = "Tran Xuan Hung",
                    Email = "hungtx@gmail.com",
                    DepartmentName = "Technical",
                    Designation = "Dev"
                }
                );
        }
    }
}
