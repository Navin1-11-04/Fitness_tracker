import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Calendar } from '@progress/kendo-react-dateinputs';
import { TextBox, NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Animation } from '@progress/kendo-react-animation';

const ProgressPlanning = () => {
  const [workouts, setWorkouts] = useState([]);
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState(0);
  const [calories, setCalories] = useState(0);
  const [goal, setGoal] = useState(1000);
  const [totalCalories, setTotalCalories] = useState(0);
  const [showWorkoutList, setShowWorkoutList] = useState(true);

  const handleAddWorkout = () => {
    const newWorkout = { activity, duration, calories, date: new Date() };
    setWorkouts([...workouts, newWorkout]);
    setTotalCalories(totalCalories + calories);
    setActivity('');
    setDuration(0);
    setCalories(0);
  };

  const handleDeleteWorkout = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setTotalCalories(totalCalories - workouts[index].calories);
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="progress-planning-container p-4">
      <h2 className="text-2xl font-bold mb-4">Progress & Planning</h2>
      
      <Card className="mb-4">
        <CardHeader>Log a Workout</CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            <TextBox placeholder="Activity (e.g., Running)" value={activity} onChange={(e) => setActivity(e.value)} />
            <NumericTextBox placeholder="Duration (minutes)" value={duration} onChange={(e) => setDuration(e.value)} min={0} />
            <NumericTextBox placeholder="Calories Burned" value={calories} onChange={(e) => setCalories(e.value)} min={0} />
            <Button themeColor="primary" onClick={handleAddWorkout}>Add Workout</Button>
          </div>
        </CardBody>
      </Card>
      
      <Card className="mb-4">
        <CardHeader>Weekly Progress</CardHeader>
        <CardBody>
          <div className="flex justify-between items-center mb-2">
            <p>Goal: Burn {goal} calories this week</p>
            <NumericTextBox value={goal} onChange={(e) => setGoal(e.value)} min={100} />
          </div>
          <ProgressBar value={(totalCalories / goal) * 100} max={100} />
          <p className="mt-2">{totalCalories} / {goal} calories burned</p>
        </CardBody>
      </Card>
      
      <Card className="mb-4">
        <CardHeader>Workout Calendar</CardHeader>
        <CardBody>
          <Calendar />
        </CardBody>
      </Card>

      <Button className="mb-4" onClick={() => setShowWorkoutList(!showWorkoutList)}>
        {showWorkoutList ? 'Hide Workouts' : 'Show Workouts'}
      </Button>
      
      <Animation>
        {showWorkoutList && (
          <Card className="workout-list">
            <CardHeader>Logged Workouts</CardHeader>
            <CardBody>
              {workouts.length === 0 ? (
                <p>No workouts logged yet.</p>
              ) : (
                workouts.map((workout, index) => (
                  <div key={index} className="workout-item flex justify-between items-center p-2 border-b">
                    <p>{workout.date.toLocaleDateString()}: {workout.activity}, {workout.duration} min, {workout.calories} cal</p>
                    <Button themeColor="error" onClick={() => handleDeleteWorkout(index)}>Delete</Button>
                  </div>
                ))
              )}
            </CardBody>
          </Card>
        )}
      </Animation>
    </div>
  );
};

export default ProgressPlanning;
