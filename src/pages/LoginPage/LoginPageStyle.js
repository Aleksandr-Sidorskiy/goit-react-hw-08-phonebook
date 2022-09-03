import styled from '@emotion/styled';

export const Form = styled.form`
margin-left: auto;
margin-right: auto;

@media screen and (min-width: 468px) {
    width: 400px;
  }
@media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  color: var(--main-text-color);

  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TitleInput = styled.span`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const Input = styled.input `
  height: 40px;
  padding: 0 10px 0 10px;

  border: 1px solid var(--second-bg-color);
  border-radius: 7px;
  outline: none;

  color: var(--main-text-color);
  font-size: 14px;

  :focus {
    border-color: var(--accent-bg-color);
  }

  ::placeholder {
    font-size: 12px;
    color: var(--main-text-color);
  }
`;
export const ButtonBox = styled.div`
display: flex;
justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }


`;