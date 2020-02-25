import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  heating_hours: number;
  building: boolean;
  consumption: boolean;
  prices: boolean;
  card_btn_active_home : String;
  card_btn_active_consumption : String;
  heat_losses: number;
  region: number;

  ngOnInit() {
    this.building = true;
    this.heat_losses = 15;
    this.region = 4;
  }

  region_select() {
    this.heating_hours = 2050; // get the right value from the regions array
  }

  consumption_select() {
    setTimeout(() => {
      this.card_btn_active_home = "";
      this.consumption = true;
      this.building = false;
      this.prices = false;
      this.card_btn_active_consumption = "card-btn-active";
    });
  }
  building_select() {
    setTimeout(() => {
      this.card_btn_active_consumption = "";
      this.building = true;
      this.consumption = false;
      this.prices = false;
      this.card_btn_active_home = "card-btn-active";
    });
  }

  show_prices() {
    setTimeout(() => {
      this.building = false;
      this.consumption = false;
      this.prices = true;
    });
  }
}
