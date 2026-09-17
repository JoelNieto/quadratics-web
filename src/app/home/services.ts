import { Component } from '@angular/core';
import { sectors, services } from './content';

@Component({
  selector: 'app-home-services',
  template: `<section id="servicios">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="section-eyebrow mono">Para su equipo</span>
          <h2>Web, móvil e integraciones de IA</h2>
        </div>
        <p>La mayoría de los encargos combinan al menos dos — rara vez solo una.</p>
      </div>
      <div class="services">
        @for (service of services; track service.title) {
          <article class="service">
            @switch (service.icon) {
              @case ('mobile') {
                <svg class="icon" viewBox="0 0 40 40" aria-hidden="true">
                  <rect
                    x="12"
                    y="4"
                    width="16"
                    height="32"
                    rx="3"
                    fill="none"
                    stroke="#2ECC99"
                    stroke-width="1.8"
                  />
                  <line
                    x1="17"
                    y1="30.5"
                    x2="23"
                    y2="30.5"
                    stroke="#2ECC99"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
              }
              @case ('web') {
                <svg class="icon" viewBox="0 0 40 40" aria-hidden="true">
                  <rect
                    x="4"
                    y="7"
                    width="32"
                    height="22"
                    rx="2"
                    fill="none"
                    stroke="#338CB2"
                    stroke-width="1.8"
                  />
                  <line x1="4" y1="13" x2="36" y2="13" stroke="#338CB2" stroke-width="1.8" />
                  <line
                    x1="14"
                    y1="35"
                    x2="26"
                    y2="35"
                    stroke="#338CB2"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                  <line x1="20" y1="29" x2="20" y2="35" stroke="#338CB2" stroke-width="1.8" />
                </svg>
              }
              @case ('ai') {
                <svg class="icon" viewBox="0 0 40 40" aria-hidden="true">
                  <circle cx="12" cy="20" r="5" fill="none" stroke="#D9A640" stroke-width="1.8" />
                  <circle cx="28" cy="12" r="5" fill="none" stroke="#D9A640" stroke-width="1.8" />
                  <circle cx="28" cy="28" r="5" fill="none" stroke="#D9A640" stroke-width="1.8" />
                  <line x1="16.5" y1="18" x2="23.5" y2="13.5" stroke="#D9A640" stroke-width="1.8" />
                  <line x1="16.5" y1="22" x2="23.5" y2="26.5" stroke="#D9A640" stroke-width="1.8" />
                </svg>
              }
            }
            <h3>{{ service.title }}</h3>
            <p>{{ service.body }}</p>
            <p class="service-example">{{ service.example }}</p>
          </article>
        }
      </div>
      <aside class="sectors" aria-label="Sectores en los que trabajamos">
        <span class="sectors-label mono">Sectores</span>
        <ul>
          @for (sector of sectors; track sector) {
            <li>{{ sector }}</li>
          }
        </ul>
      </aside>
    </div>
  </section>`,
})
export class HomeServices {
  protected readonly services = services;
  protected readonly sectors = sectors;
}
