﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Payroll.Application.DTOs.Payroll;
using Payroll.Application.InterfaceService.Payroll;

namespace Payroll.API.Controllers.Payroll
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeePersonalController : ControllerBase
    {
        private readonly IEmployeePersonalService _employeePersonalService;
        public EmployeePersonalController(IEmployeePersonalService employeePersonalService)
        {
            _employeePersonalService = employeePersonalService;
        }
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> PostEmployeePersonal(EmployeePersonalDTOs employeePersonalDTO)
        {
            await _employeePersonalService.InsertEmployeePersonal(employeePersonalDTO);
            return Ok();
        }
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetEmployeePersonalList()
        {
            var employeePersonalList = await _employeePersonalService.GetEmployeePersonalList();
            return Ok(employeePersonalList);
        }

        [HttpDelete("{employeeId}")]
        public async Task<IActionResult> DeleteEmployeePersonal(int employeeId)
        {
            await _employeePersonalService.DeleteEmployeePersonal(employeeId);
            return Ok();
        }

    }
}
