import { css } from "styled-components";

export const glass = css`
  background: rgba(10, 15, 30, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

export const neonBorder = (color) => css`
  border: 1px solid ${color};
  box-shadow: 0 0 10px ${color}, 0 0 20px ${color}40;
`;

export const pulse = (color) => css`
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 ${color}40; }
    70% { box-shadow: 0 0 0 10px ${color}00; }
    100% { box-shadow: 0 0 0 0 ${color}00; }
  }
`;

export const scanLine = css`
  &::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(0deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    pointer-events: none;
    animation: scan 3s linear infinite;
  }

  @keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
`;