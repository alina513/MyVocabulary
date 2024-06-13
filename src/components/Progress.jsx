// import { Circle } from 'rc-progress';


// const CircularProgress = ({ progress }) => {
//     const containerStyle = {
//       display: 'flex',
//       alignItems: 'center',
//     };
  
//     const circleContainerStyle = {
//       display: 'inline-block',
//       width: 50,
//       height: 50,
//       marginLeft: '16px',
//     };
  
//     const progressTextStyle = {
//       fontSize: '22px',
//       fontWeight: '500',
//       display: 'none',
//     };

//     const responsiveProgressTextStyle = {
//       ...progressTextStyle,
//       '@media screen and (min-width: 768px)': {
//         display: 'block', // Показуємо текст при ширині екрана 768 пікселів і більше
//       },
//     };
  
  
//     return (
//       <div style={containerStyle}>
//         <div style={responsiveProgressTextStyle}>{`${progress}%`}</div>
//         <div style={circleContainerStyle}>
//         <Circle 
//           percent={progress}
//           size={58}
//           strokeWidth={5} 
//           // strokeWidth={10} 
//           strokeColor="green" 
//           trailColor="#2BD627" 
//      />
//         </div>
//       </div>
//     );
//   };





// export default CircularProgress;
  
import styled from 'styled-components';
import { Circle } from 'rc-progress';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CircleContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-left: 16px;
`;

const ProgressText = styled.div`
  font-size: 22px;
  font-weight: 500;
  display: none;

  @media screen and (min-width: 768px) {
    display: block; /* Показуємо текст при ширині екрана 768 пікселів і більше */
  }
`;

const CircularProgress = ({ progress }) => (
  <Container>
    <ProgressText>{`${progress}%`}</ProgressText>
    <CircleContainer>
      <Circle
        percent={progress}
        size={58}
        strokeWidth={5}
        strokeColor="green"
        trailColor="#2BD627"
      />
    </CircleContainer>
  </Container>
);

export default CircularProgress;