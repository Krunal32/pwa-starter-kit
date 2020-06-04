import {html, LitElement} from 'lit-element';
// These are the shared styles needed by this element.
import {SharedStyles} from '../shared-styles';

class PapdiMain extends LitElement {
    static get styles() {
        return [
            SharedStyles
        ];
    }

    static get properties() {
        return {
            foodName: String,
            ribbonLabel: String,
        }
    }

    constructor() {
        super();
        this.foodName = 'Papdi Chaat';
        this.ribbonLabel = 'Directions';
    }


    render() {
        return html`
        <div class="padding-15">
            <section>
                <div style="text-align: center; background-color: orange" >
                    <img src="/images/placeHolder.png" title="Place Holder" style="vertical-align: middle; height: 100px"/>   
                    <div class="ribbon"">
                         <strong class="ribbon-content"> ${this.foodName}</strong>
                    </div>             
                </div>
            </section>
            <section style="background: white">
                <div style="text-align: center">
                    <img src="/images/papdi_Chaat.jpeg" title="Place Holder" style="vertical-align: middle; height: 500px; border-radius: 50px;"/>   
                    <div class="ribbon"">
                         <strong class="ribbon-content"> ${this.ribbonLabel}</strong>
                    </div> 
                    <div style="text-align: center; text-decoration-color: red;">
                        Roast the Khichiya Papdi on a coal grill or a gas <br>
                           Brush it with the Masala Oil <br>
                           Place it on a plate and break it in to medium sized pieces <br>
                           Now add all the chopped ingredients (Onion, Tomato, Green Mango)<br>
                           Sprinkle Chat Masala<br>
                           Sprinkle Green Chutney<br>
                           Sprinkle Red Chutney<br>
                           Sprinkle Garlic Chutney<br>
                           Top it. with Thin Sev, Chopped Cilantro, Masala Chana Dal, & Pomegranate<br>
                    </div>
                </div>
            </section>  
            <section>
                <div style="text-align: center; background-color: green"">
                    <img src="/images/placeHolder.png" title="Place Holder" style="vertical-align: middle; height: 100px"/>   
                    <div class="ribbon"">
                         <strong class="ribbon-content"> ${this.foodName}</strong>
                    </div>             
                </div>
            </section>          
        </div>
    `;
    }
}

window.customElements.define('papdi-chaat', PapdiMain);
