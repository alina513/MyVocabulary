import { Circle } from 'rc-progress';


const CircularProgress = ({ progress }) => {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
    };
  
    const circleContainerStyle = {
      display: 'inline-block',
      width: 50,
      height: 50,
      marginLeft: '16px', // відступ для кола
    };
  
    const progressTextStyle = {
      fontSize: '22px',
      fontWeight: '500',
    };
  
    return (
      <div style={containerStyle}>
        <div style={progressTextStyle}>{`${progress}%`}</div>
        <div style={circleContainerStyle}>
        <Circle 
          percent={progress}
          size={58}
          strokeWidth={5} 
          // strokeWidth={10} 
          strokeColor="#2BD627" 
          trailColor="grey" 
     />
        </div>
      </div>
    );
  };
  
  export default CircularProgress;