/* eslint-disable no-unused-vars */
import { PetStructure } from '../../models/task';
import { Component } from '../component/component';

export class Item extends Component {
  constructor(public selector: string, public tasks: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    const items = this.tasks
      .map(
        (item) => `
        <li class="card">
          <span title="${item.id}">${item.name}</span>
          <span> ${item.specie}</span>
          <span>${item.owner}</span>
          <button>🗑️</button>
        </li>`
      )
      .join('\n');
    return `
    ${items}
    `;
  }
}
