import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function init() {
      const res = await fetch(
        "https://65b60b98da3a3c16ab00246b.mockapi.io/api/v1/habit"
      );
      const resData = await res.json();
      setData(resData);
    }
    init();
  }, []);

  return (
    <main className="flex flex-col p-4">
      <Button
        disabled={data.length >= 3}
        variant="contained"
        color="primary"
        className="ml-auto"
        endIcon={<AddIcon />}
        onClick={() => {
          Router.push("/habit/add");
        }}
      >
        Add Habit
      </Button>
      {!data.length ? <p>No habits added </p> : null}
      {data.map((item) => (
        <p key={item.id}>{item.habitName}</p>
      ))}
    </main>
  );
}
