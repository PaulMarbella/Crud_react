import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Link } from 'reactstrap';


export class Home extends Component {
  
 
  render() {
    return (
      <div>
       <p className='h5 text-bold'>Hey There! Welcome to Loan Type</p>
       <p>A Loan Management System is a digital platform which assist lenders in automating and streamlining entire loan life cycle including loan servicing, reporting, customer care, syndication and customer monitoring. It acts as a centralized data storage unit which is used for retaining and managing customer information, creating new loans, and keeping a record of all financial statements for the lenders. Thus, it offers an integrated overview of all the different processes of the lending lifecycle. This unified platform also has built in analytic modules that can be utilized for providing useful analysis and insights into automating the entire loan cycle as well as comprehensive reports on the cash flow. Primarily used by banks and credit unions, it provides easily deployable and scalable integrated loan management solution to traditional paper-based method of servicing loans.</p>
       <button>Check ur Loan Here</button>
      </div>
      
    );
  }
}
