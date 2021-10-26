import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MyLwcHeadlessAction extends LightningElement {

    // https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_quick_actions_headless
    // https://developer.salesforce.com/docs/component-library/bundle/lightning-quick-action-panel/documentation
    @api invoke() {
        const event = new ShowToastEvent({
            title: 'Success !!',
            message: 'Your headless Quick Action was executed successfully.',
            variant: 'success'
        });
        this.dispatchEvent(event);
    }
}