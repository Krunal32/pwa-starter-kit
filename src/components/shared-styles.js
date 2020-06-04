/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: auto;
  }
  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }
  
  .grey-box {
         background-color: #F5F5F5;
    }
    
  .padding-15 {
        padding: 15px;
    }
    
  .ribbon {
    font-size: 16px !important;    
     width: 50%;
     position: relative;
     background: #add8e6;
     color: #fff;
     text-align: center;
     padding: 1em 2em; /* Adjust to suit */
     margin: 2em auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */
    }
    .ribbon:before, .ribbon:after {
     content: "";
     position: absolute;
     display: block;
     bottom: -1em;
     border: 1.5em solid #986794;
     z-index: -1;
    }
    .ribbon:before {
     left: -2em;
     border-right-width: 1.5em;
     border-left-color: transparent;
    }
    .ribbon:after {
     right: -2em;
     border-left-width: 1.5em;
     border-right-color: transparent;
    }
    .ribbon .ribbon-content:before, .ribbon .ribbon-content:after {
     content: "";
     position: absolute;
     display: block;
     border-style: solid;
     border-color: #804f7c transparent transparent transparent;
     bottom: -1em;
    }
    .ribbon .ribbon-content:before {
     left: 0;
     border-width: 1em 0 0 1em;
    }
    .ribbon .ribbon-content:after {
     right: 0;
     border-width: 1em 1em 0 0;
    }
#image-container {
    background: url(http://pic2.ooopic.com/11/26/30/31b1OOOPIC48.jpg) left top no-repeat;
    box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset; 
    width: 300px;
    height: 300px;
}
`;
