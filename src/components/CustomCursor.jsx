// import React, { useState, useEffect } from 'react';


// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);
//   const [trail, setTrail] = useState([]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY, id: Date.now() }]);
//     };

//     const handleMouseEnter = () => {
//       setHovered(true);
//     };

//     const handleMouseLeave = () => {
//       setHovered(false);
//       setTrail([]);
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseenter', handleMouseEnter);
//     document.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseenter', handleMouseEnter);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTrail((prevTrail) => {
//         const currentTime = Date.now();
//         return prevTrail.filter((point) => currentTime - point.id <= 1000); // Trail disappears after 1 second
//       });
//     }, 100);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className={`custom-cursor ${hovered ? 'hovered' : ''}`}
//         style={{ left: `${position.x}px`, top: `${position.y}px` }}
//       ></div>
//       <div className="cursor-trail">
//         {trail.map((point) => (
//           <div
//             key={point.id}
//             className="trail-dot"
//             style={{
//               left: `${point.x}px`,
//               top: `${point.y}px`,
//               background: `hsl(${((Date.now() - point.id) * 0.3) % 360}, 100%, 50%)`,
//               animation: `fade-in-out 0.5s ease forwards`,
//             }}
//           ></div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CustomCursor;
