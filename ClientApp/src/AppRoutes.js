import {  LoanTable } from "./components/LoanTable";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/LoanTable',
    element: <LoanTable />
  },
 
];

export default AppRoutes;
