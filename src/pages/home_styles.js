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
      padding: '15px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
    },
    profileSummary: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '10px',
    },
    avatar: {
      backgroundColor: '#1976d2',
      color: 'white',
      width: '50px',
      height: '50px',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
    },
    progressLabel: {
      position: 'absolute',
      fontSize: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '999px',
      top: '-30px',
      height: '25px',
      left: '-22px',
      width: '20px',
      transform: 'rotate(-90deg)',
    },
    streakHistory: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      height: '350px',
      overflowX: 'auto',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
    },
    streakBarContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '5px',
    },
    streakLabel: {
      fontSize: '12px',
      fontWeight: 'bold',
    },
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
    },
    metricCard: {
      padding: '12px',
      textAlign: 'center',
      borderRadius: '10px',
      backgroundColor: '#e3f2fd',
    },
    scrollable: {
      overflowX: 'auto',
      maxHeight: '200px',
    },
    quickTipsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '10px',
    },
    quote: {
      fontStyle: 'italic',
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#555',
    },
  };

export default styles;