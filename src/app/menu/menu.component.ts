import { Component } from "@angular/core";

import { menu, Category } from "./menu";

@Component({
  selector: "moxie-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  menu: Category[] = menu;
  term = "";

  constructor() {}

  reset() {
    this.term = "";
    this.search();
  }

  search() {
    this.menu = menu
      .reduce((accumulator: Category[], category: Category) => {
        return accumulator.concat({
          title: category.title,
          entrees: category.entrees.filter(
            item =>
              item.title.toLowerCase().includes(this.term.toLowerCase()) ||
              item.description.toLowerCase().includes(this.term.toLowerCase())
          )
        });
      }, [])
      .filter(category => category.entrees.length > 0);
  }
}
