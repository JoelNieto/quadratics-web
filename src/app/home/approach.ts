import { Component } from '@angular/core';

@Component({
  selector: 'app-home-approach',
  template: `<section id="enfoque">
    <div class="approach-section">
      <div class="approach-wrap">
        <div class="section-head">
          <div>
            <span class="section-eyebrow mono">Cómo trabajamos</span>
            <h2>El mismo proceso, en cada proyecto</h2>
          </div>
          <p>Ya sea su proyecto o uno de los nuestros.</p>
        </div>
        <div class="approach">
          <div class="step">
            <div class="num mono">01 / DESCUBRIMIENTO</div>
            <h3>Definir el alcance antes de programar</h3>
            <p>
              Definimos el problema, los usuarios y las restricciones técnicas antes de escribir una
              sola línea de código — incluyendo si el software es realmente la respuesta correcta.
            </p>
          </div>
          <div class="step">
            <div class="num mono">02 / CONSTRUCCIÓN</div>
            <h3>Entregamos por incrementos</h3>
            <p>
              Entregamos en incrementos enfocados, con su equipo revisando software funcional en
              cada etapa — no una sola presentación al final.
            </p>
          </div>
          <div class="step">
            <div class="num mono">03 / OPERACIÓN</div>
            <h3>Nos quedamos después del lanzamiento</h3>
            <p>
              Seguimos como el equipo que opera, refuerza y amplía lo que construimos — de la misma
              manera en que operamos nuestras plataformas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`,
})
export class HomeApproach {}
