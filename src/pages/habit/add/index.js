import { ENDPOINT_URLS } from "@/utils/constants";
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
import dayjs from "dayjs";
import Router from "next/router";
import React, { useState } from "react";

function AddHabit() {
  const [selectedGoalUnits, setSelectedGoalUnits] = useState("minutes");
  const [habitName, setHabitName] = useState("");
  const [measuredNumber, setMeasuredNumber] = useState("");
  const [weeklyCount, setWeeklyCount] = useState("");
  const [place, setPlace] = useState("");
  const [habitTime, setHabitTime] = useState(() => dayjs());
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const UNITS = [
    "minutes",
    "hours",
    "times",
    "repetitions",
    "pages",
    "steps",
    "km",
    "miles",
  ];

  async function handleAddHabit() {
    try {
      setLoading(true);
      setError("");
      const payload = {
        habitName,
        measuredNumber,
        selectedGoalUnits,
        weeklyCount,
        place,
        habitTime: habitTime.toString(),
      };
      await fetch(ENDPOINT_URLS.ADD_HABIT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      Router.push("/");
    } catch (error) {
      setLoading(false);
      setError("There is some error, please try again");
      console.log(error);
    }
  }

  return (
    <main className="p-4 ">
      <Container className="w-5/6">
        <Paper elevation={3} className="p-4 mt-14">
          <Typography
            component="h1"
            variant="h3"
            className="font-thin text-center"
          >
            Looks like a new Adventure!
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
              {UNITS.map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
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
            <TimePicker
              label="enter time"
              value={habitTime}
              onChange={(newValue) => setHabitTime(newValue)}
            />
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
            disabled={
              !place ||
              !habitName ||
              !habitTime ||
              !selectedGoalUnits ||
              !measuredNumber ||
              !weeklyCount ||
              loading
            }
            color="error"
            variant="contained"
            className="block mt-6 ml-auto"
            onClick={handleAddHabit}
          >
            Add Habit
          </Button>
          <p className="text-red-600">{error}</p>
        </Paper>
      </Container>
    </main>
  );
}

export default AddHabit;
