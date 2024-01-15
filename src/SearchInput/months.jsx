import { useState } from "react";

export function SearchInput() {
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const [search, setSearch] = useState("");

  const result = months.filter((month) => month.includes(search)).join(", ");

  return (
    <>
      <h1>Search</h1>
      <input onChange={(e) => setSearch(e.target.value)} />
      <p>{result}</p>
    </>
  );
}
