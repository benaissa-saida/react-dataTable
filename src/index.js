import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { DataTable } from "./lib";

function App() {
  const data = [
    {
      firstName: "Saida",
      lastName: "Benaissa",
      dateBirth: "08/17/1994",
      startDate: "08/14/2023",
      department: "Engineering",
      street: "210 rue du président salvador allende",
      city: "COLOMBES",
      state: "CA",
      zip: "92700",
    },
    {
      firstName: "kjdfshkd",
      lastName: "gfddg",
      dateBirth: "08/07/1994",
      startDate: "08/04/2023",
      department: "Engineering",
      street: "215 rue de la pluie",
      city: "Nanterres",
      state: "CA",
      zip: "92701",
    },
    {
      firstName: "Manon",
      lastName: "Lerroy",
      dateBirth: "07/28/1995",
      startDate: "08/10/2023",
      department: "Engineering",
      street: "212 rue du soleil",
      city: "Paris",
      state: "CA",
      zip: "92720",
    },
    {
      firstName: "Adeline",
      lastName: "Ali",
      dateBirth: "12/30/1994",
      startDate: "08/06/2023",
      department: "Engineering",
      street: "2 rue du président salvador allende",
      city: "COLOMBES",
      state: "CA",
      zip: "92719",
    },
    {
      firstName: "Mamy",
      lastName: "Lerroi",
      dateBirth: "07/28/1995",
      startDate: "08/10/2023",
      department: "Engineering",
      street: "211 rue du soleil",
      city: "Paris",
      state: "CA",
      zip: "92717",
    },
  ];

  const headers = [
    { name: "First Name", field: "firstName" },
    { name: "Last Name", field: "lastName" },
    { name: "Start Date", field: "startDate" },
    { name: "Department", field: "department" },
    { name: "Date of Birth", field: "dateBirth" },
    { name: "Street", field: "street" },
    { name: "City", field: "city" },
    { name: "State", field: "state" },
    { name: "Zip Code", field: "zip" },
  ];

  return <DataTable data={data} headers={headers} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
