
using Microsoft.EntityFrameworkCore;
using Payroll.Application.InterfaceRepository;
using Payroll.Domain.Entities.Payroll;
using Payroll.Persistence.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Payroll.Persistence.Repository.Payroll
{
    public class EmployeePersonalRepository : IEmployeePersonalRepository
    {
        private readonly PayrollDBContext _dbContext;
        public EmployeePersonalRepository(PayrollDBContext payrollDBContext)
        {
            _dbContext = payrollDBContext;
        }

        public async Task DeleteEmployeePersonal(int employeeId)
        {
            var employee = await _dbContext.EmployeePersonals
             .FirstOrDefaultAsync(e => e.EmployeePersonalId == employeeId);

            if (employee == null)
            {
                throw new KeyNotFoundException($"Employee with ID {employeeId} not found");
            }

            _dbContext.EmployeePersonals.Remove(employee);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<List<EmployeePersonal>> GetEmployeePersonalList()
        {
            return await _dbContext.EmployeePersonals.ToListAsync();
        }

        public async Task InsertEmployeePersonal(EmployeePersonal employeePersonal)
        {
            await _dbContext.EmployeePersonals.AddAsync(employeePersonal);
            await _dbContext.SaveChangesAsync();
        }
    }
}
