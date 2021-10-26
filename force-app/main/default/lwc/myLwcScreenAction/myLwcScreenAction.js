import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class MyLwcScreenAction extends LightningElement {
    // https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_quick_actions_screen
    
    handleClick() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}