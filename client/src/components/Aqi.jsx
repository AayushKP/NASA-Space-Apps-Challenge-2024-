import React from 'react';

const AQI = ({ 
  genderInequalityIndex, 
  politicalEmpowermentRank, 
  healthSurvivalRank, 
  giiRanking, 
  giiRankingYear 
}) => {
  return (
    <div className="aqi-container" style={styles.container}>
      <div className="aqi-item" style={styles.item}>
        <p style={styles.value}>{genderInequalityIndex}</p>
        <p style={styles.label}>India's Gender Inequality Index</p>
      </div>
      <div className="aqi-item" style={styles.item}>
        <p style={styles.value}>{politicalEmpowermentRank}</p>
        <p style={styles.label}>Political Empowerment Rank</p>
      </div>
      <div className="aqi-item" style={styles.item}>
        <p style={styles.value}>{healthSurvivalRank}</p>
        <p style={styles.label}>Health and Survival Rank</p>
      </div>
      <div className="aqi-item" style={styles.item}>
        <p style={styles.value}>{giiRanking}</p>
        <p style={styles.label}>GII Ranking {giiRankingYear} out of 191 countries</p>
      </div>
      <div className="aqi-item" style={styles.item}>
        <p style={styles.value}>{giiRanking}</p>
        <p style={styles.label}>GII Ranking {giiRankingYear} out of 191 countries</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#232323',
    width: '2220px',
    height: '294px',
    padding: '40px',
    borderRadius: '10px',
    gap: '0px',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: '60px',
    fontWeight: 'bold',
    background: 'linear-gradient(89.32deg, #CDDC6E 57.2%, #727A3E 96.71%, #232323 99.42%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  label: {
    fontSize: '24px',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '10px',
  }
};

export default AQI;
