import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.ol)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
`;
