import { Component } from '@angular/core';
import { contactEmail, projectMailto } from './content';

@Component({
  selector: 'app-home-contact',
  template: `<section id="contacto">
    <div class="wrap">
      <div class="band">
        <h2>Cuéntenos el sistema que le falta — o el producto que quiere ver.</h2>
        <div class="band-right">
          <div class="band-contact">
            <a [href]="projectMailto">{{ contactEmail }}</a>
            <span>Ciudad de Panamá, Panamá</span>
          </div>
          <a [href]="projectMailto" class="btn btn-primary">Iniciar un proyecto</a>
        </div>
      </div>
    </div>
  </section>`,
})
export class HomeContact {
  protected readonly projectMailto = projectMailto;
  protected readonly contactEmail = contactEmail;
}
