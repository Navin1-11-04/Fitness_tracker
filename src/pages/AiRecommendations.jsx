import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { TextArea, RadioGroup } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';

const AIRecommendations = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [fitnessLevel, setFitnessLevel] = useState('Beginner');
  const [goalDate, setGoalDate] = useState(new Date());
  const [notes, setNotes] = useState('');

  const fitnessLevels = [
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' },
  ];

  const recommendations = {
    Beginner: 'Start with 20-minute walks, 3 times a week. Gradually increase to 30 minutes.',
    Intermediate: 'Try a mix of cardio and strength training, 4 days a week. Aim for 45-minute sessions.',
    Advanced: 'Incorporate HIIT workouts, 5 days a week. Focus on 60-minute sessions with recovery days.'
  };

  return (
    <div className="ai-recommendations-container">
      <h2 className="text-2xl font-bold mb-4">AI Recommendations</h2>

      <Card className="input-form">
        <CardHeader>Your Fitness Profile</CardHeader>
        <CardBody>
          <div className="form-group">
            <RadioGroup
              data={fitnessLevels}
              value={fitnessLevel}
              onChange={(e) => setFitnessLevel(e.value)}
            />
            <DatePicker
              label="Goal Date"
              value={goalDate}
              onChange={(e) => setGoalDate(e.value)}
            />
            <TextArea
              placeholder="Additional Notes"
              value={notes}
              onChange={(e) => setNotes(e.value)}
            />
          </div>
        </CardBody>
      </Card>

      <Card className="recommendations">
        <CardHeader>Personalized Tips</CardHeader>
        <CardBody>
          <TabStrip selected={selectedTab} onSelect={(e) => setSelectedTab(e.selected)}>
            <TabStripTab title="Workout Plan">
              <p className="text-base">{recommendations[fitnessLevel]}</p>
            </TabStripTab>
            <TabStripTab title="Nutrition Tips">
              <p className="text-base">
                Ensure a balanced diet with 40% carbs, 30% protein, and 30% fats. Hydrate well!
              </p>
            </TabStripTab>
          </TabStrip>
        </CardBody>
      </Card>
    </div>
  );
};

export default AIRecommendations;
