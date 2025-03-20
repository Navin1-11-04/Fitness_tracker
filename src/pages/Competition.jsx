import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { ProgressBar } from '@progress/kendo-react-progressbars';

const Competition = () => {
  // Define available challenges
  const challenges = ['Steps Challenge', 'Calorie Burn Challenge'];
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);

  // Leaderboard data for different challenges
  const leaderboardData = {
    'Steps Challenge': [
      { rank: 1, name: 'Alice', value: 50000 },
      { rank: 2, name: 'Bob', value: 45000 },
      { rank: 3, name: 'Charlie', value: 40000 },
      { rank: 4, name: 'You', value: 35000 },
      { rank: 5, name: 'Eve', value: 30000 },
    ],
    'Calorie Burn Challenge': [
      { rank: 1, name: 'Alice', value: 2200 },
      { rank: 2, name: 'Bob', value: 1900 },
      { rank: 3, name: 'Charlie', value: 1600 },
      { rank: 4, name: 'You', value: 1400 },
      { rank: 5, name: 'Eve', value: 1200 },
    ],
  };

  // Get the current leaderboard and user data
  const currentLeaderboard = leaderboardData[selectedChallenge] || [];
  const userEntry = currentLeaderboard.find((entry) => entry.name === 'You');
  const leaderEntry = currentLeaderboard[0];

  // Define challenge goals
  const challengeGoals = {
    'Steps Challenge': 50000,
    'Calorie Burn Challenge': 2500,
  };

  const goal = challengeGoals[selectedChallenge] || 0;
  const userProgress = userEntry ? userEntry.value : 0;
  const progressPercentage = (userProgress / goal) * 100;

  // Generate a motivational message
  const motivationalMessage = userEntry
    ? userEntry.rank === 1
      ? "You're leading the challenge! Keep up the great work!"
      : `You're in ${userEntry.rank} place—push to reach the top!`
    : 'Start logging your progress to join the leaderboard!';

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Competition</h2>

      {/* Challenge Selection */}
      <Card className="mb-4 shadow-md">
        <CardHeader>Select Challenge</CardHeader>
        <CardBody>
          <DropDownList
            data={challenges}
            value={selectedChallenge}
            onChange={(e) => setSelectedChallenge(e.value)}
          />
        </CardBody>
      </Card>

      {/* Leaderboard */}
      <Card className="mb-4 shadow-md">
        <CardHeader>Leaderboard</CardHeader>
        <CardBody>
          <ul className="list-none">
            {currentLeaderboard.map((entry) => (
              <li
                key={entry.rank}
                className={`p-3 border-b last:border-none flex justify-between ${
                  entry.name === 'You' ? 'font-bold text-blue-600 bg-blue-100 rounded-lg' : ''
                }`}
              >
                <span>{entry.rank}. {entry.name}</span>
                <span>{entry.value} {selectedChallenge.includes('Steps') ? 'steps' : 'calories'}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      {/* User vs. Leader Comparison */}
      <Card className="mb-4 shadow-md">
        <CardHeader>Your Progress vs Leader</CardHeader>
        <CardBody>
          {userEntry && leaderEntry ? (
            <p className="text-lg font-medium">
              You: {userEntry.value} {selectedChallenge.includes('Steps') ? 'steps' : 'calories'} | 
              Leader: {leaderEntry.value} {selectedChallenge.includes('Steps') ? 'steps' : 'calories'}
            </p>
          ) : (
            <p className="text-gray-600">Start logging your progress to compete!</p>
          )}
        </CardBody>
      </Card>

      {/* Progress Bar */}
      <Card className="mb-4 shadow-md">
        <CardHeader>Challenge Progress</CardHeader>
        <CardBody>
          <p>Goal: Reach {goal} {selectedChallenge.includes('Steps') ? 'steps' : 'calories'}</p>
          <ProgressBar value={progressPercentage} max={100} />
          <p className="mt-2">{userProgress} / {goal} {selectedChallenge.includes('Steps') ? 'steps' : 'calories'}</p>
        </CardBody>
      </Card>

      {/* Motivational Message */}
      <Card className="shadow-md">
        <CardHeader>Motivational Message</CardHeader>
        <CardBody>
          <p className="text-lg font-semibold text-gray-700">{motivationalMessage}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Competition;
