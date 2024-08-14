import {  LoanTable } from "./components/LoanTable";
import { Home } from "./components/Home";
import { EditForm } from "./components/Editform";
import { AddData } from "./components/addData";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/LoanTable',
    element: <LoanTable />
  },
  {
    path: '/Edit',
    element: <EditForm />
  },
  {
    path: '/AddData',
    element: <AddData/>
  }
 
];

export default AppRoutes;
