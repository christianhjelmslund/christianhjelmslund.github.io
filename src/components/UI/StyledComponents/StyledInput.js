import styled from "styled-components";

const StyledInput = styled.input`
      font: inherit;
      margin: 10px auto;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 20px;
      background: var(--custom_black);
      color: white;
      text-align: left;
      padding-left: 15px;
      &:focus {
        outline: none;
        //border-bottom-color:var(--custom_black);
      }
`

export default StyledInput
