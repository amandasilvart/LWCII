import { LightningElement, api } from 'lwc';

export default class AtividadeLWC2 extends LightningElement {
    @api ide;
    @api nome;
    @api valor;
    @api fase;
  }
