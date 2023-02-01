/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class List extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `
    <ul class="list">
    </ul>
    `;
  }
}
