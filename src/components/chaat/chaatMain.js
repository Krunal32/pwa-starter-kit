import {html, LitElement} from 'lit-element';
// These are the shared styles needed by this element.
import {SharedStyles} from '../shared-styles';
import './papdiChaat'

class ChaatMain extends LitElement {
    static get styles() {
        return [
            SharedStyles
        ];
    }

    render() {
        return html`
        <papdi-chaat></papdi-chaat>
    `;
    }
}

window.customElements.define('chaat-main', ChaatMain);
