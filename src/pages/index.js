import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
  return (
    <main className="flex p-4">
      <Button variant="contained" color="primary" className="ml-auto">
        Add Habit <AddIcon />
      </Button>
    </main>
  );
}
