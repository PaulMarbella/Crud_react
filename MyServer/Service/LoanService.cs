namespace LoanType{


public class LoanService
{
    private readonly List<Loan> _loans = new List<Loan>();
    private int _nextId = 1;

    public List<Loan> GetLoans() => _loans;

    public Loan AddLoan(string name, decimal loanAmount, float interest)
    {
        var loan = new Loan { Id = _nextId++, Name = name, LoanAmount = loanAmount, Interest = interest };
        _loans.Add(loan);
        return loan;
    }
}
}
