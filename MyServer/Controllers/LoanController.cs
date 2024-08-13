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
            new Loan { Id = 1, Name = "Mark", LoanAmount = 30000, Interest = 12 },
            new Loan { Id = 2, Name = "Jacob", LoanAmount = 520000, Interest = 1 },
            new Loan { Id = 3, Name = "Larry", LoanAmount = 43000, Interest = 6 }
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

            loan.Name = updatedLoan.Name;
            loan.LoanAmount = updatedLoan.LoanAmount;
            loan.Interest = updatedLoan.Interest;
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

    public class Loan
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public decimal LoanAmount { get; set; }
        public decimal Interest { get; set; }
    }
}
