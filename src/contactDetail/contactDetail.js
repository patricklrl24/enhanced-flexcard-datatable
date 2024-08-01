import { LightningElement, api } from 'lwc';

export default class ContactDetail extends LightningElement {
    @api name;  // Accepts the contact's name
    @api email; // Accepts the contact's email

    get hasContact() {
        return this.name;
    }
}
