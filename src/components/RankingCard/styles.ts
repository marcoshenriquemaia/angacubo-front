import { motion } from "framer-motion";
import styled from "styled-components";

const getColor = (position: number) => {
  if (position > 2) return "#f15941";
  return [
    "linear-gradient(259deg, rgba(255,215,0,1) 28%, rgba(242,242,242,0.8379726890756303) 98%)",
    "#C0C0C0",
    "#CD7F32",
  ][position];
};

export const Container = styled(motion.li)<{ position: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  gap: 20px;
  width: 100%;
  max-width: 350px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: ${({ position }) => getColor(position)};
  text-shadow: 2px 2px 2px #0000004d;
  overflow: hidden;
`;

export const Name = styled.span`
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  line-height: 20px;
`;

export const Time = styled.span`
  font-size: 18px;
  color: #ffffff;
  line-height: 20px;
  font-weight: bold;
`;

export const Position = styled.span`
  font-size: 30px;
  font-weight: 900;
  color: #ffffff;
`;
