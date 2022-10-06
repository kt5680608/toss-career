import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {

        --g-color-background: #1a1a1a;
        --g-color-paragraph-grey: #6b7684;
        --g-color-highlight: #4942ff;
        --g-color-grey-opacity100: rgba(2,32,71,0.05);
        --g-color-banner: #8031fe;
        --vh: 9.32px;   
    }
    html{
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
    body{
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      width: 100vw;
    }
    h1{
        font-family:   sans-serif;
        margin: 0;
        padding: 0;   
    }
    p{
        margin: 0;
        padding: 0;
        }
    hr{
        margin: 6px 0;
        width: 100%;
        border: 1px solid var(--g-color-background)
        }
    h2{
      margin: 0;
      padding: 0;
    }
    h3{
        margin: 0;
        padding: 0;
    }
    ul{
      display: flex;
      align-items: space-evenly;
      grid-gap: 12px;
      width: 100%;
      height: 100%
    }
    
    p{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    pre{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
        height: min-content;
    }
    ul{
        list-style  : none;
        margin: 0;
        padding: 0;
        width: min-content;
    }
    input:focus{
        outline: none;
    }
    
`;
