import styled from "styled-components"
import colors from "../../theme/colors"

export const StyledMain = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    /* text-align: center; */
  }

  h3,
  h1 {
    margin: 0;
    color: black;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin: 1rem;
  }
`

export const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 10px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`

// export const Button = styled.button`
//   appearance: button;
//   background-color: transparent;
//   background-image: linear-gradient(to bottom, #fff, ${colors.secondaryLight});
//   border: 0 solid #e5e7eb;
//   border-radius: 0.5rem;
//   box-sizing: border-box;
//   color: black;
//   column-gap: 1rem;
//   cursor: pointer;
//   display: flex;
//   font-size: 100%;
//   font-weight: 700;
//   line-height: 24px;
//   margin: 0;
//   outline: 2px solid transparent;
//   padding: 1rem 1.5rem;
//   text-align: center;
//   text-transform: none;
//   transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   box-shadow: -6px 8px 10px rgba(81, 41, 10, 0.1),
//     0px 2px 2px rgba(81, 41, 10, 0.2);

//   &:active {
//     background-color: #f3f4f6;
//     box-shadow: -1px 2px 5px rgba(81, 41, 10, 0.15),
//       0px 1px 1px rgba(81, 41, 10, 0.15);
//     transform: translateY(0.125rem);
//   }
// `
