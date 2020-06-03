/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>Welcome To Lucky DaDhaba</h2>
      </section>
      <section>
        <h2>Todays speical</h2>
        <h2 style={text-align: center}>Khichiya Papdi Chaat</h2>
      </section>
      <section>
        <p>Roast the Khichiya Papdi on a coal grill or a gas <br>
           Brush it with the Masala Oil <br>
           Place it on a plate and break it in to medium sized pieces <br>
           Now add all the chopped ingredients (Onion, Tomato, Green Mango)<br>
           Sprinkle Chat Masala<br>
           Sprinkle Green Chutney<br>
           Sprinkle Red Chutney<br>
           Sprinkle Garlic Chutney<br>
           Top it with Thin Sev, Chopped Cilantro, Masala Chana Dal, & Pomegranate<br>
        </p>
      </section
      <section>

      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
