import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { DataTable } from "./lib";

function App() {
  const data = [
    {
      firstName: "Saida",
      lastName: "Benaissa",
      dateOfBirth: "07/28/1994",
      startDate: "08/14/2023",
      department: "Engineering",
      street: "210 rue du président salvador allende",
      city: "COLOMBES",
      state: "CA",
      zipCode: "92700",
    },
    {
      firstName: "kjdfshkd",
      lastName: "gfddg",
      dateOfBirth: "07/08/1994",
      startDate: "08/04/2023",
      department: "Engineering",
      street: "215 rue de la pluie",
      city: "Nanterres",
      state: "CA",
      zipCode: "92701",
    },
    {
      firstName: "Manon",
      lastName: "Lerroy",
      dateOfBirth: "07/28/1995",
      startDate: "08/10/2023",
      department: "Engineering",
      street: "212 rue du soleil",
      city: "Paris",
      state: "CA",
      zipCode: "92720",
    },
    {
      firstName: "Adeline",
      lastName: "Ali",
      dateOfBirth: "12/30/1994",
      startDate: "08/06/2023",
      department: "Engineering",
      street: "2 rue du président salvador allende",
      city: "COLOMBES",
      state: "CA",
      zipCode: "92719",
    },
    {
      firstName: "Mamy",
      lastName: "Lerroi",
      dateOfBirth: "07/28/1995",
      startDate: "08/10/2023",
      department: "Engineering",
      street: "211 rue du soleil",
      city: "Paris",
      state: "CA",
      zipCode: "92717",
    },
  ];

  const headers = [
    { name: "First Name", field: "firstName" },
    { name: "Last Name", field: "lastName" },
    { name: "Start Date", field: "startDate" },
    { name: "Department", field: "department" },
    { name: "Date of Birth", field: "dateOfBirth" },
    { name: "Street", field: "street" },
    { name: "City", field: "city" },
    { name: "State", field: "state" },
    { name: "Zip Code", field: "zipCode" },
  ];

  return <DataTable data={data} headers={headers} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
