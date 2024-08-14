namespace LoanType{


public class LoanService
{
    private readonly List<Loan> _loans = new List<Loan>();
    private int _nextId = 1;

    public List<Loan> GetLoans() => _loans;

    public Loan AddLoan( string loanType)
    {
        var loan = new Loan { Id = _nextId++,  LoanType = loanType};
        _loans.Add(loan);
        return loan;
    }
}
}
