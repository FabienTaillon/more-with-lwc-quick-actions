import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class MyLwcScreenAction extends LightningElement {
    handleClick() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}