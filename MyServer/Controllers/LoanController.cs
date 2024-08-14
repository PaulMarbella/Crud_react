using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace LoanType.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoanController : ControllerBase
    {
        private static readonly List<Loan> loans = new List<Loan>
        {
            new Loan { Id = 1, LoanType = "Personal Loans"},
            new Loan { Id = 2,  LoanType = "Business Loans" },
            new Loan { Id = 3,  LoanType = "Payday Loans" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Loan>> GetLoans()
        {
            return Ok(loans);
        }

        [HttpPost]
        public ActionResult<Loan> AddLoan([FromBody] Loan newLoan)
        {
            newLoan.Id = loans.Count + 1;
            loans.Add(newLoan);
            return CreatedAtAction(nameof(GetLoans), new { id = newLoan.Id }, newLoan);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateLoan(int id, [FromBody] Loan updatedLoan)
        {
            var loan = loans.Find(l => l.Id == id);
            if (loan == null) return NotFound();

 
            loan.LoanType = updatedLoan.LoanType;
        
            return Ok(loan);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteLoan(int id)
        {
            var loan = loans.Find(l => l.Id == id);
            if (loan == null) return NotFound();

            loans.Remove(loan);
            return NoContent();
        }
    }


}
