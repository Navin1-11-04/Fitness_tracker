import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button, FloatingActionButton } from '@progress/kendo-react-buttons';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Animation } from '@progress/kendo-react-animation';

const Home = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [streakProgress, setStreakProgress] = useState(70);
  const [showAnimation, setShowAnimation] = useState(true);

  const metrics = [
    { title: 'Total Challenges', value: 5 },
    { title: 'Days Active', value: 4 },
    { title: 'Current Streak', value: 7 },
  ];

  const recentActivities = [
    { id: 1, date: '2025-03-18', activity: 'Running', duration: '30 min' },
    { id: 2, date: '2025-03-17', activity: 'Cycling', duration: '45 min' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alice', steps: 50000 },
    { rank: 2, name: 'Bob', steps: 45000 },
    { rank: 3, name: 'Charlie', steps: 40000 },
  ];

  const upcomingChallenges = ['Run 5K tomorrow!', 'Drink 2L of water today', 'Stretch for 10 minutes'];
  const dailyChallenge = 'Do 50 squats today!';
  const quote = 'Keep pushing forward!';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light-theme' : 'dark-theme';
  };

  const acceptChallenge = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    setStreakProgress(streakProgress + 10);
  };

  return (
    <div className={`home-container ${darkMode ? 'dark-theme' : 'light-theme'}`} style={styles.container}>
      <div style={styles.topBar}>
        <Button onClick={toggleDarkMode} style={styles.toggleButton}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>

      <Animation enter={showAnimation} exit={!showAnimation}>
        <div style={styles.mainContent}>
          {/* Streak Progress */}
          <Card style={styles.card}>
            <CardHeader>Current Streak</CardHeader>
            <CardBody>
              <ProgressBar value={streakProgress} max={100} animation={true} />
            </CardBody>
          </Card>

          {/* Daily Challenge */}
          <Card style={styles.card}>
            <CardHeader>Daily Challenge</CardHeader>
            <CardBody>
              <p>{dailyChallenge}</p>
              <Button onClick={acceptChallenge}>Accept</Button>
            </CardBody>
          </Card>

          {/* Metrics */}
          <div style={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <Card key={index} style={styles.metricCard}>
                <CardHeader>{metric.title}</CardHeader>
                <CardBody>
                  <h4>{metric.value}</h4>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Leaderboard (Scrollable for Small Screens) */}
          <Card style={styles.card}>
            <CardHeader>Top Performers</CardHeader>
            <CardBody style={styles.scrollable}>
              <Grid data={leaderboard} sortable={true}>
                <GridColumn field="rank" title="Rank" />
                <GridColumn field="name" title="Name" />
                <GridColumn field="steps" title="Steps" />
              </Grid>
            </CardBody>
          </Card>

          {/* Recent Activities (Scrollable for Small Screens) */}
          <Card style={styles.card}>
            <CardHeader>Recent Activities</CardHeader>
            <CardBody style={styles.scrollable}>
              <Grid data={recentActivities} sortable={true}>
                <GridColumn field="date" title="Date" />
                <GridColumn field="activity" title="Activity" />
                <GridColumn field="duration" title="Duration" />
              </Grid>
            </CardBody>
          </Card>

          {/* Upcoming Challenges */}
          <Card style={styles.card}>
            <CardHeader>Upcoming Challenges</CardHeader>
            <CardBody>
              <ul>
                {upcomingChallenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </CardBody>
          </Card>

          <p style={styles.quote}>"{quote}"</p>
        </div>
      </Animation>

      <FloatingActionButton
        icon="plus"
        text="Start Workout"
        position={{ bottom: 20, right: 20 }}
        onClick={() => navigate('/progress-planning')}
      />

      {showNotification && (
        <NotificationGroup>
          <Notification type={{ style: 'success' }} onClose={() => setShowNotification(false)}>
            Challenge accepted!
          </Notification>
        </NotificationGroup>
      )}
    </div>
  );
};

/* 🔹 Responsive Styles */
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '16px',
  },
  toggleButton: {
    padding: '8px 16px',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  card: {
    padding: '16px',
    borderRadius: '8px',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '16px',
  },
  metricCard: {
    padding: '12px',
    textAlign: 'center',
  },
  scrollable: {
    overflowX: 'auto',
    maxHeight: '200px',
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '20px',
  },
};

/* 📱 Media Queries for Mobile Responsiveness */
const mediaStyles = `
  @media (max-width: 768px) {
    .home-container {
      padding: 10px;
    }
    .metrics-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .card {
      padding: 12px;
    }
  }
`;

export default Home;
