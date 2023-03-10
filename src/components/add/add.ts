/* eslint-disable no-unused-vars */
import { PET } from '../../mocks/tasks';
import { Pet, PetStructure } from '../../models/task';
import { Component } from '../component/component';
import { Item } from '../item/item';

export class Add extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
    this.addPet();
  }

  createTemplate() {
    return `
    <form action="" method="get">
      <div class="name">
        <label for="name">Pet name </label>
        <input type="text" name="name" id="name" >
      </div>
      <div class="specie">
        <label for="specie">Pet specie: </label>
        <input type="text" name="specie" id="specie" >
      </div>
      <div class="owner">
        <label for="owner">Pet owner: </label>
        <input type="text" name="owner" id="owner" >
      </div>
      <div class="enter">
        <input type="submit" class="add-button"value="Add">
      </div>
    </form>
    `;
  }

  addPet() {
    const root = document.querySelector('.list') as HTMLElement;

    const addButton = document.querySelector('.add-button');
    const formName = document.querySelector('#name');
    const formSpecie = document.querySelector('#specie');
    const formOwner = document.querySelector('#owner');

    const renderPets = (data: PetStructure[]) => {
      const newP = new Item('.list', data);
    };

    addButton?.addEventListener('click', (e) => {
      e.preventDefault();
      const newPet = [
        new Pet(formName?.value, formSpecie?.value, formOwner?.value),
      ];
      renderPets(newPet);
      console.log(newPet);
    });
  }
}
