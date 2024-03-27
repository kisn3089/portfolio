import styled from "styled-components";

export const Center = styled.section`
  width: 100%;
  padding: 60px 80px;
  display: flex;
  justify-content: center;
`;

export const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1400px;
`;
