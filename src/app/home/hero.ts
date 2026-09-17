import { Component } from '@angular/core';
import { projectMailto } from './content';

@Component({
  selector: 'app-home-hero',
  template: `<section class="hero" id="top">
    <div class="wrap hero-grid">
      <div>
        <span class="section-eyebrow mono">Estudio de software · Panamá y Centroamérica</span>
        <h1>Web, móvil e IA para su operación — y productos propios que ya están en marcha.</h1>
        <p class="hero-sub">
          Diseñamos e integramos software a medida. Ciceron, Skooltrak y otras plataformas que
          operamos son prueba de ese trabajo, no el catálogo completo.
        </p>
        <div class="hero-ctas">
          <a [href]="projectMailto" class="btn btn-primary">Iniciar un proyecto</a>
          <a href="#productos" class="btn btn-ghost">Ver productos destacados</a>
        </div>
        <div class="hero-tags">
          <span>Ciudad de Panamá, Panamá</span>
          <span class="rule"></span>
          <span>Desarrollo a medida y productos propios</span>
        </div>
      </div>

      <figure class="hero-art">
        <div class="hero-shots">
          <div class="shot shot-primary">
            <div class="shot-chrome" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="shot-surface">
              <div class="shot-placeholder">
                <span class="section-eyebrow mono">Captura pendiente</span>
                <strong>Encargo en operación</strong>
                <p>Aquí irá una pantalla real de un desarrollo web, móvil o de IA.</p>
              </div>
            </div>
          </div>
          <div class="shot shot-secondary">
            <div class="shot-chrome" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="shot-surface">
              <div class="shot-placeholder">
                <span class="section-eyebrow mono">Captura pendiente</span>
                <strong>Producto propio</strong>
                <p>Ciceron, Skooltrak u otra plataforma que operamos.</p>
              </div>
            </div>
          </div>
        </div>
        <figcaption class="shot-caption">
          <span>Móvil</span><span>Web</span><span>IA</span>
        </figcaption>
      </figure>
    </div>
  </section>`,
})
export class HomeHero {
  protected readonly projectMailto = projectMailto;
}
