import {
  Button,
  Container,
  Divider,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";

function AddHabit() {
  const [selectedGoalUnits, setSelectedGoalUnits] = useState("minutes");
  const [habitName, setHabitName] = useState("");
  const [measuredNumber, setMeasuredNumber] = useState("");
  const [weeklyCount, setWeeklyCount] = useState("");
  const [place, setPlace] = useState("");

  return (
    <main className="p-4 ">
      <Container className="w-5/6">
        <Paper elevation={3} className="p-4 mt-14">
          <Typography
            component="h1"
            variant="h3"
            className="font-thin text-center"
          >
            Let&apos;s begin a new adventure!
          </Typography>
          <Divider className="my-5" />
          <div className="flex flex-wrap items-end gap-x-9 gap-y-5">
            <Typography component="h2" variant="h5">
              {" "}
              I solemnly swear to start
            </Typography>
            <TextField
              label="Habit"
              variant="standard"
              className="flex-grow"
              required
              value={habitName}
              autoComplete="off"
              onChange={(event) => {
                setHabitName(event.target.value);
              }}
            />

            <Typography component="h2" variant="h5">
              for
            </Typography>
            <TextField
              label="Measurable goal"
              variant="standard"
              className="flex-grow"
              autoComplete="off"
              value={measuredNumber}
              onChange={(event) => setMeasuredNumber(event.target.value)}
            />
            <Select
              label="times"
              value={selectedGoalUnits}
              onChange={(event) => setSelectedGoalUnits(event.target.value)}
              className="w-40"
              size="small"
            >
              <MenuItem value="minutes">minutes</MenuItem>
              <MenuItem value="pages">pages</MenuItem>
              <MenuItem value="reps">repetitions</MenuItem>
              <MenuItem value="times">times</MenuItem>
            </Select>
            <TextField
              label="Times per week"
              variant="standard"
              className="flex-grow"
              autoComplete="off"
              value={weeklyCount}
              onChange={(event) => setWeeklyCount(event.target.value)}
            />
            <Typography component="h2" variant="h5">
              times per week at
            </Typography>
            <TimePicker label="enter time" />
            <Typography component="h2" variant="h5">
              in
            </Typography>
            <TextField
              label="place"
              variant="standard"
              className="flex-grow"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
            />
          </div>
          <Button
            color="error"
            variant="contained"
            className="block mt-6 ml-auto"
          >
            Add Habit
          </Button>
        </Paper>
      </Container>
    </main>
  );
}

export default AddHabit;
