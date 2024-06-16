
  
// import styled from 'styled-components';
// import { Circle } from 'rc-progress';

// const Container = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const CircleContainer = styled.div`
//   display: inline-block;
//   width: 50px;
//   height: 50px;
//   margin-left: 16px;
// `;

// const ProgressText = styled.div`
//   font-size: 22px;
//   font-weight: 500;
//   display: none;

//   @media screen and (min-width: 768px) {
//     display: block; /* Показуємо текст при ширині екрана 768 пікселів і більше */
//   }
// `;

// const CircularProgress = ({ progress }) => (
//   <Container>
//     <ProgressText>{`${progress}%`}</ProgressText>
//     <CircleContainer>
//       <Circle
//         percent={progress}
//         size={58}
//         strokeWidth={5}
//         strokeColor="green"
//         trailColor="#2BD627"
//       />
//     </CircleContainer>
//   </Container>
// );

// export default CircularProgress;



export const CircularProgress = ({
  size,
  strokeWidth,
  progress,
  color1 = "#85AA9F",
  color2 = "#b7dfd3",
  color3 = "#ffffff",
  withText = false,
  text,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;
  const startAngle = -90; // В градусах

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
          <stop offset="0%" style={{ stopColor: color1, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color2, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color3}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        transform={`rotate(${startAngle} ${size / 2} ${size / 2})`}
      />
      {withText && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="18"
          fill="#000000"
        >
          {text || progress}%
        </text>
      )}
    </svg>
  );
};
