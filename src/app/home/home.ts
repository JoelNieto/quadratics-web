import { Component } from '@angular/core';
import { HomeApproach } from './approach';
import { HomeContact } from './contact';
import { HomeHero } from './hero';
import { HomeProducts } from './products';
import { HomeServices } from './services';

@Component({
  imports: [HomeHero, HomeServices, HomeProducts, HomeApproach, HomeContact],
  template: `<app-home-hero />
    <app-home-services />
    <app-home-products />
    <app-home-approach />
    <app-home-contact />`,
})
export default class HomeComponent {}
