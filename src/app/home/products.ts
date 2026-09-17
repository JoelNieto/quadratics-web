import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { portfolioMailto, products } from './content';

@Component({
  selector: 'app-home-products',
  imports: [NgOptimizedImage],
  template: `<section id="productos">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="section-eyebrow mono">Productos destacados</span>
          <h2>Algunas de las plataformas que operamos</h2>
        </div>
        <p>No son las únicas. El resto del trabajo es a medida.</p>
      </div>
      <p class="products-intro">
        Ciceron y Skooltrak empezaron como un problema concreto, para un equipo concreto. Hoy las
        operamos como productos independientes — junto con otras plataformas — y cada encargo se
        mide contra software del que nosotros mismos dependemos.
      </p>

      @for (product of products; track product.slug) {
        <article class="product">
          <div
            class="product-info"
            [class.ciceron]="product.slug === 'ciceron'"
            [class.skooltrak]="product.slug === 'skooltrak'"
          >
            <span class="product-tag">
              <span
                class="dot"
                [class.mint]="product.tagColor === 'mint'"
                [class.gold]="product.tagColor === 'gold'"
              ></span>
              {{ product.tag }}
            </span>
            <div class="product-title">
              <h3 class="product-name">{{ product.name }}</h3>
              <img
                [ngSrc]="product.logo"
                [width]="product.logoWidth"
                [height]="product.logoHeight"
                alt=""
              />
            </div>
            <p class="product-desc">{{ product.description }}</p>
            <div class="product-actions">
              <a
                [href]="product.primaryHref"
                class="product-link"
                [attr.target]="product.external ? '_blank' : null"
                [attr.rel]="product.external ? 'noopener noreferrer' : null"
                >{{ product.primaryLabel }}</a
              >
              <a [href]="product.secondaryHref" class="product-link product-link-secondary">{{
                product.secondaryLabel
              }}</a>
            </div>
          </div>
          <div class="product-features">
            <div class="product-shot">
              <div class="shot-placeholder shot-placeholder-sm">
                <span class="section-eyebrow mono">Captura pendiente</span>
                <strong>Pantalla de {{ product.name }}</strong>
              </div>
            </div>
            <ul class="feature-list">
              @for (feature of product.features; track feature.title) {
                <li>
                  <b>{{ feature.title }}</b> {{ feature.body }}
                </li>
              }
            </ul>
          </div>
        </article>
      }

      <div class="catalog-note">
        <div>
          <span class="section-eyebrow mono">Más del portafolio</span>
          <h3>También operamos otras plataformas.</h3>
          <p>
            Ciceron y Skooltrak son los destacados de esta página, no el catálogo completo. Hay más
            productos en operación — y cuando el problema no encaja en uno existente, lo
            construimos: web, móvil o IA.
          </p>
        </div>
        <a [href]="portfolioMailto" class="btn btn-ghost">Hablar del resto del portafolio</a>
      </div>
    </div>
  </section>`,
})
export class HomeProducts {
  protected readonly products = products;
  protected readonly portfolioMailto = portfolioMailto;
}
