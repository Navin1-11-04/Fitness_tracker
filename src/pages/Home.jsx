// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
// import { Grid, GridColumn } from '@progress/kendo-react-grid';
// import { Button, FloatingActionButton } from '@progress/kendo-react-buttons';
// import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
// import { ProgressBar } from '@progress/kendo-react-progressbars';
// import { Animation } from '@progress/kendo-react-animation';
// import { Avatar } from '@progress/kendo-react-layout';

// import { Typography } from '@progress/kendo-react-common';
// import QuickTipsCard from '../components/QuickTipsCard';

// const Home = () => {
//   const navigate = useNavigate();
//   const [showNotification, setShowNotification] = useState(false);
//   const [streakProgress, setStreakProgress] = useState(70);
//   const [showAnimation, setShowAnimation] = useState(true);

//   const metrics = [
//     { title: 'Total Challenges', value: 5 },
//     { title: 'Days Active', value: 4 },
//     { title: 'Current Streak', value: 7 },
//   ];

//   const recentActivities = [
//     { id: 1, date: '2025-03-18', activity: 'Running', duration: '30 min' },
//     { id: 2, date: '2025-03-17', activity: 'Cycling', duration: '45 min' },
//   ];

//   const leaderboard = [
//     { rank: 1, name: 'Alice', steps: 50000 },
//     { rank: 2, name: 'Bob', steps: 45000 },
//     { rank: 3, name: 'Charlie', steps: 40000 },
//   ];

//   const upcomingChallenges = ['Run 5K tomorrow!', 'Drink 2L of water today', 'Stretch for 10 minutes'];
//   const dailyChallenge = 'Do 50 squats today!';
//   const quote = 'Keep pushing forward!';


//   const userProfile = {
//     name: 'John Smith',
//     avatarInitials: 'JS',
//     totalSteps: 120000,
//     totalCalories: 8500,
//   };

//   const streakHistory = [
//     { date: '2025-03-15', streak: 3 },
//     { date: '2025-03-16', streak: 4 },
//     { date: '2025-03-17', streak: 5 },
//     { date: '2025-03-18', streak: 6 },
//     { date: '2025-03-19', streak: 2 },
//     { date: '2025-03-20', streak: 4 },
//     { date: '2025-03-21', streak: 7 }, 
//   ];

//   const quickTips = [
//     'Stay hydrated—drink 8 glasses of water daily!',
//     'Aim for 150 minutes of moderate exercise per week.',
//     'Incorporate stretching to improve flexibility.',
//     'Get 7-8 hours of sleep for optimal recovery.',
//   ];
//   const getLast7Days = () => {
//     const today = new Date();
//     return Array.from({ length: 7 }, (_, i) => {
//       const date = new Date();
//       date.setDate(today.getDate() - i);
//       return {
//         fullDate: date.toISOString().split('T')[0],
//         shortName: date.toLocaleDateString('en-US', { weekday: 'short' })
//       };
//     }).reverse();
//   };

//   const last7Days = getLast7Days();


//   const getCurrentWeek = () => {
//     const today = new Date();
//     const dayOfWeek = today.getDay(); 
//     const monday = new Date(today);
//     monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

//     return Array.from({ length: 7 }, (_, i) => {
//       const date = new Date(monday);
//       date.setDate(monday.getDate() + i);
//       return {
//         fullDate: date.toISOString().split('T')[0], 
//         shortName: date.toLocaleDateString('en-US', { weekday: 'short' }),
//         isToday: date.toISOString().split('T')[0] === today.toISOString().split('T')[0] 
//       };
//     });
//   };

//   const currentWeek = getCurrentWeek();


//  const streakData = last7Days.map(day => {
//   const found = streakHistory.find(entry => entry.date === day.fullDate);
//   return { date: day.fullDate, shortName: day.shortName, tasksCompleted: found ? found.streak : 0 };
// });

// const maxTasks = Math.max(...streakData.map(entry => entry.tasksCompleted), 1);

//   const acceptChallenge = () => {
//     setShowNotification(true);
//     setTimeout(() => setShowNotification(false), 3000);
//     setStreakProgress(streakProgress + 10);
//   };

//   const shareAchievement = () => {
//     alert('Sharing your streak on social media! (Simulated)');
//   };

//   return (
//     <div className="home-container" style={styles.container}>
//       <Animation enter={showAnimation} exit={!showAnimation}>
//         <div style={styles.mainContent}>
//           <Card style={styles.card}>
//   <CardHeader>Streak History</CardHeader>
//   <CardBody style={styles.streakHistory}>
//     {streakData.map((entry, index) => (
//       <div key={index} style={styles.streakBarContainer}>
//         <div style={styles.progressWrapper}>
//           <ProgressBar
//             value={(entry.tasksCompleted / maxTasks) * 100}
//             max={100}
//             label={() => (
//               <span style={styles.progressLabel}>
//                 {entry.tasksCompleted}
//               </span>
//             )}
//             orientation="vertical"
//             style={{
//               borderRadius: '999px',
//               width: '25px',
//               height: '250px',
//               opacity: index !== last7Days.length - 1 ? 0.3 : 1, 
//             }}
//             progressStyle={{ borderRadius: '999px' }} 
//           />
//         </div>
//         <Typography.h5 variant="body2" style={styles.streakLabel}>
//           {entry.shortName}
//         </Typography.h5>
//       </div>
//     ))}
//   </CardBody>
// </Card>
//           <Card style={styles.card}>
//             <CardHeader>Daily Challenge</CardHeader>
//             <CardBody>
//               <p>{dailyChallenge}</p>
//               <Button onClick={acceptChallenge}>Accept</Button>
//             </CardBody>
//           </Card>

//           <div style={styles.metricsGrid}>
//             {metrics.map((metric, index) => (
//               <Card key={index} style={styles.metricCard}>
//                 <CardHeader>{metric.title}</CardHeader>
//                 <CardBody>
//                   <h4>{metric.value}</h4>
//                 </CardBody>
//               </Card>
//             ))}
//           </div>

//           <Card style={styles.card}>
//             <CardHeader>Recent Activities</CardHeader>
//             <CardBody style={styles.scrollable}>
//               <Grid data={recentActivities} sortable={true}>
//                 <GridColumn field="date" title="Date" />
//                 <GridColumn field="activity" title="Activity" />
//                 <GridColumn field="duration" title="Duration" />
//               </Grid>
//             </CardBody>
//           </Card>

//           <Card style={styles.card}>
//             <CardHeader>Upcoming Challenges</CardHeader>
//             <CardBody>
//               <ul>
//                 {upcomingChallenges.map((challenge, index) => (
//                   <li key={index}>{challenge}</li>
//                 ))}
//               </ul>
//             </CardBody>
//           </Card>

//           <Card style={styles.card}>
//             <QuickTipsCard/>
//           </Card>

//           <p style={styles.quote}>"{quote}"</p>
//         </div>
//       </Animation>

//       <FloatingActionButton
//         icon="plus"
//         text="Start Workout"
//         position={{ bottom: 20, right: 20 }}
//         onClick={() => navigate('/progress-planning')}
//       />

//       {showNotification && (
//         <NotificationGroup>
//           <Notification type={{ style: 'success' }} onClose={() => setShowNotification(false)}>
//             Challenge accepted!
//           </Notification>
//         </NotificationGroup>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '20px',
//   },
//   topBar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginBottom: '16px',
//   },
//   toggleButton: {
//     padding: '8px 16px',
//     cursor: 'pointer',
//   },
//   mainContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//   },
//   card: {
//     padding: '10px 5px',
//     borderRadius: '15px',
//   },
//   profileSummary: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px',
//   },
//   avatar: {
//     backgroundColor: '#1976d2',
//     color: 'white',
//   },
//   progressLabel:{
//     position:'absolute',
//     fontSize:'10px',
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center',
//     borderRadius:'999px',
//     top:'-30px',
//     height:'25px',
//     left:'-22px',
//     width:'20px',
//     transform:'rotate(-90deg)'
//   },
//   shareButton: {
//     marginTop: '10px',
//   },
//   streakHistory: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'flex-end',
//     height: '350px',
//     overflowX: 'auto',
//   },
//   streakBarContainer: {
//     display: 'flex',
//     flexDirection:'column',
//     alignItems: 'center',
//     gap: '5px',
//   },
//   streakLabel: {
//     fontSize: '12px',
//   },
//   metricsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//     gap: '16px',
//   },
//   metricCard: {
//     padding: '12px',
//     textAlign: 'center',
//   },
//   scrollable: {
//     overflowX: 'auto',
//     maxHeight: '200px',
//   },
//   carouselItem: {
//     textAlign: 'center',
//     padding: '10px',
//   },
//   quote: {
//     fontStyle: 'italic',
//     textAlign: 'center',
//     marginTop: '20px',
//   },
// };

// /* 📱 Media Queries for Mobile Responsiveness */
// const mediaStyles = `
//   @media (max-width: 768px) {
//     .home-container {
//       padding: 10px;
//     }
//     .metrics-grid {
//       grid-template-columns: repeat(2, 1fr);
//     }
//     .card {
//       padding: 12px;
//     }
//     .profile-summary {
//       flex-direction: column;
//       align-items: flex-start;
//     }
//     .streak-history {
//       height: 120px;
//     }
//     .streak-bar {
//       height: 80px;
//       width: 15px;
//     }
//     .streak-label {
//       font-size: 10px;
//     }
//   }
// `;

// export default Home;

import * as React from "react";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import { ProgressBar } from '@progress/kendo-react-progressbars';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  CardSubtitle,
  Avatar
} from '@progress/kendo-react-layout';
import { Typography } from '@progress/kendo-react-common';


const Home = () => {

  const streakHistory = [
    { date: '2025-03-15', streak: 3 },
    { date: '2025-03-16', streak: 4 },
    { date: '2025-03-17', streak: 5 },
    { date: '2025-03-18', streak: 6 },
    { date: '2025-03-19', streak: 2 },
    { date: '2025-03-20', streak: 4 },
    { date: '2025-03-21', streak: 7 },
  ];

  const getLast7Days = () => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() - i);
      return {
        fullDate: date.toISOString().split('T')[0],
        shortName: date.toLocaleDateString('en-US', { weekday: 'short' })
      };
    }).reverse();
  };

  const last7Days = getLast7Days();

  const getCurrentWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return {
        fullDate: date.toISOString().split('T')[0],
        shortName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        isToday: date.toISOString().split('T')[0] === today.toISOString().split('T')[0]
      };
    });
  };

  const currentWeek = getCurrentWeek();

  const streakData = last7Days.map(day => {
    const found = streakHistory.find(entry => entry.date === day.fullDate);
    return { date: day.fullDate, shortName: day.shortName, tasksCompleted: found ? found.streak : 0 };
  });

  const maxTasks = Math.max(...streakData.map(entry => entry.tasksCompleted), 1);


  return (
    <div className="home">
      <GridLayout
        rows={[
          { height: 'auto' },
          { height: 'auto' },
          { height: 'auto' },
          { height: 'auto' },
          { height: 'auto' },
        ]}
        cols={[
          { width: '1fr' },
          { width: '1fr' },
          { width: '1fr' },
          { width: '1fr' },
          { width: '1fr' },
        ]}
        gap={{ rows: 10, cols: 10 }}
        className="grid-container"
      >
        <GridLayoutItem col={1} colSpan={3} row={1}>
          <div className="card">
            <div className="card-content">
              <CardSubtitle className="subtitle">
                Hello Evening,</CardSubtitle>
              <CardTitle>
                <Typography.h3>
                  Navin kumar R
                </Typography.h3>
              </CardTitle>
              <Typography.p>You have done a great job today !!</Typography.p>
            </div>
          </div>
        </GridLayoutItem>

        <GridLayoutItem col={4} row={1} rowSpan={2} colSpan={2}>
          <div className="card">
            <div className="card-content">
              <Card style={{height:'100%',width:'100%',display:'flex',justifyContent:'space-between'}}>

                <CardHeader>Streak History</CardHeader>
                <CardBody style={{display:'flex',width:'100%',height:'100%',justifyContent:'space-between',alignItems:'flex-end'}}>
                  {streakData.map((entry, index) => (
                    <div key={index}>
                      <div>
                        <ProgressBar
                          value={(entry.tasksCompleted / maxTasks) * 100}
                          max={100}
                          label={() => (
                            <span>
                              {entry.tasksCompleted}
                            </span>
                          )}
                          orientation="vertical"
                          style={{
                            borderRadius: '999px',
                            width: '20px',
                            height: '180px',
                            opacity: index !== last7Days.length - 1 ? 0.3 : 1,
                          }}
                          progressStyle={{ borderRadius: '999px' }}
                        />
                      </div>
                      <CardSubtitle>
                        {entry.shortName}
                      </CardSubtitle>
                    </div>
                  ))}
                </CardBody>
              </Card>
            </div>
          </div>
        </GridLayoutItem>

        <GridLayoutItem col={6} row={1} rowSpan={4}>
          <div className="card">
            <div className="card-content">
              Card 2 (1 col, 2 rows) - Dynamic Size
              {/* Add more content to see dynamic sizing */}
            </div>
          </div>
        </GridLayoutItem>
        <GridLayoutItem col={1} colSpan={3} row={2}>
          <div className="card">
            <div className="card-content">
              Card 6 (2 cols, 2 rows) - Dynamic Size

            </div>
          </div>
        </GridLayoutItem>
        <GridLayoutItem col={1} colSpan={3} row={3} rowSpan={3}>
          <div className="card">
            <div className="card-content">
              Card 6 (2 cols, 2 rows) - Dynamic Size

            </div>
          </div>
        </GridLayoutItem>
        <GridLayoutItem col={4} colSpan={2} row={3} rowSpan={2}>
          <div className="card">
            <div className="card-content">
              Card 6 (2 cols, 2 rows) - Dynamic Size

            </div>
          </div>
        </GridLayoutItem>
        <GridLayoutItem col={4} row={5}>
          <div className="card">
            <div className="card-content" style={{display:'flex',alignItems:'start',justifyContent:'center'}}>
              <Typography.p style={{color:'#121212',fontWeight:'520',padding:'8px 10px'}}>Active Days</Typography.p>
              <CardBody style={{padding:'10px',display:'flex',alignItems:'end',justifyContent:'end',width:'100%',height:'100%'}}>
              <Typography.h3 style={{color:'#cddc39',display:'flex',gap:'10px'}}><i class="fa-regular fa-calendar-check" style={{color:'#121212',opacity:'0.2'}}></i>34</Typography.h3>
              </CardBody>
            </div>
          </div>
        </GridLayoutItem>
        <GridLayoutItem col={5} row={5}>
        <div className="card">
            <div className="card-content" style={{display:'flex',alignItems:'start',justifyContent:'center'}}>
              <Typography.p style={{color:'#121212',fontWeight:'520',padding:'8px 10px'}}>Best Streak </Typography.p>
              <CardBody style={{padding:'10px',display:'flex',alignItems:'end',justifyContent:'end',width:'100%',height:'100%'}}>
              <Typography.h3 style={{color:'#cddc39',display:'flex',gap:'10px'}}><i class="fa-solid fa-fire" style={{color:'#121212',opacity:'0.2'}}></i>34</Typography.h3>
              </CardBody>
            </div>
          </div>
        </GridLayoutItem>
        <GridLayoutItem col={6} row={5}>
        <div className="card">
            <div className="card-content" style={{display:'flex',alignItems:'start',justifyContent:'center'}}>
              <Typography.p style={{color:'#121212',fontWeight:'520',padding:'8px 10px'}}>Total Challenges</Typography.p>
              <CardBody style={{padding:'10px',display:'flex',alignItems:'end',justifyContent:'end',width:'100%',height:'100%'}}>
              <Typography.h3 style={{color:'#cddc39',display:'flex',gap:'10px'}}><i class="fa-solid fa-trophy" style={{color:'#121212',opacity:'0.2'}}></i>34</Typography.h3>
              </CardBody>
            </div>
          </div>
        </GridLayoutItem>
      </GridLayout>
    </div>
  );
};

export default Home;
