import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 45px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
`;

export const TabItem = styled(motion.animate)`
  padding: 5px 15px;
  position: relative;
`;

export const Underline = styled(motion.span)`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  box-shadow: 3px 3px 5px #0000004d;
`;

export const Text = styled.span<{ highlight: boolean }>`
  z-index: 1;
  position: relative;
  color: ${(props) => (props.highlight ? props.theme.color.blue : "#ffffff")};
  transition: 600ms;
`;
