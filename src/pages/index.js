import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Router from "next/router";

export default function Home() {
  return (
    <main className="flex p-4">
      <Button
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
    </main>
  );
}
