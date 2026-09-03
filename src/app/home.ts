import { Component } from '@angular/core';

@Component({
  template: `<main id="top">
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <h1>Construimos el software con el que opera su empresa.</h1>
          <p class="hero-sub">
            Quadratic Solution diseña y desarrolla productos móviles, web y de inteligencia
            artificial para equipos empresariales en Panamá y Centroamérica — y construimos y
            operamos plataformas propias.
          </p>
          <div class="hero-ctas">
            <a href="#productos" class="btn btn-primary">Ver nuestros productos</a>
            <a href="#contacto" class="btn btn-ghost">Iniciar un proyecto</a>
          </div>
          <div class="hero-tags">
            <span>Ciudad de Panamá, Panamá</span>
            <span class="rule"></span>
            <span>Socio de software empresarial</span>
          </div>
        </div>

        <div class="hero-art">
          <div class="hex-stage">
            <svg viewBox="0 0 112 125" xmlns="http://www.w3.org/2000/svg">
              <path
                class="hex-base"
                d="M0 93.3299L9.87001e-06 31.1099L31.1109 48.3932V76.2193L56 90.2189L80.8887 76.2193V48.3932L112 31.1099V93.3299L56 124.44L0 93.3299Z"
                fill="#11333F"
              />
              <path
                class="hex-top"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5556 39.7937L0 31.1428L56 0L112 31.1428L96.4443 39.7937V85.6427L56 109L15.5555 85.6427L15.5556 39.7937ZM94.7593 40.731L80.8887 48.4444V48.2714L56 34.257L31.1109 48.2714V48.4444L17.2407 40.731V84.6846L56 107.069L94.7593 84.6846V40.731Z"
                fill="url(#ghero)"
              />
              <defs>
                <linearGradient
                  id="ghero"
                  x1="15.5568"
                  y1="24.2198"
                  x2="99.5568"
                  y2="24.2198"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2ECC99" />
                  <stop offset="0.33" stop-color="#338CB2" />
                  <stop offset="0.66" stop-color="#D9A640" />
                  <stop offset="1" stop-color="#F2734D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="hex-caption"><span>Móvil</span><span>Web</span><span>IA</span></div>
        </div>
      </div>
    </section>

    <section id="servicios">
      <div class="wrap">
        <div class="section-head">
          <div>
            <span class="section-eyebrow mono">Qué construimos</span>
            <h2>Tres disciplinas, aplicadas en conjunto</h2>
          </div>
          <p>La mayoría de los proyectos combinan al menos dos — rara vez solo una.</p>
        </div>
        <div class="services">
          <div class="service">
            <svg class="icon" viewBox="0 0 40 40">
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
            <h3>Móvil</h3>
            <p>
              Aplicaciones nativas y multiplataforma para equipos de campo, clientes y operaciones
              internas — diseñadas para funcionar sin conexión primero, porque la conectividad en
              Panamá y la región no siempre está garantizada.
            </p>
          </div>
          <div class="service">
            <svg class="icon" viewBox="0 0 40 40">
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
            <h3>Web</h3>
            <p>
              Aplicaciones web, herramientas internas y portales de clientes, diseñados según cómo
              ya trabaja su empresa y construidos para integrarse con los sistemas que ya utiliza.
            </p>
          </div>
          <div class="service">
            <svg class="icon" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" fill="none" stroke="#D9A640" stroke-width="1.8" />
              <path
                d="M20 11 V20 L26 25"
                fill="none"
                stroke="#D9A640"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>IA e Integraciones</h3>
            <p>
              Sistemas de inteligencia artificial aplicada, conectados a sus documentos, sus flujos
              de trabajo y los registros y sistemas heredados propios de su industria — no un
              chatbot genérico añadido por encima.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="productos">
      <div class="wrap">
        <div class="section-head">
          <div>
            <span class="section-eyebrow mono">Lo que operamos</span>
            <h2>Software que hemos construido y operamos nosotros mismos</h2>
          </div>
          <p>Operadas de principio a fin por nuestro propio equipo.</p>
        </div>
        <p class="products-intro">
          Herramientas que comenzaron como comienza el trabajo con clientes: un problema concreto,
          para un equipo concreto. Hoy construimos y operamos ambas como productos independientes,
          lo que significa que cada proyecto se mide contra el software del que nosotros mismos
          dependemos.
        </p>

        <div class="product">
          <div class="product-info ciceron">
            <span class="product-tag"
              ><span class="dot" style="background:var(--mint)"></span>IA Legal</span
            >
            <div class="product-title">
              <h3 class="product-name">Ciceron</h3>
              <img src="/ciceron.svg" />
            </div>

            <p class="product-desc">
              Una plataforma de inteligencia legal impulsada por IA para firmas de abogados en
              Panamá y Centroamérica. Ciceron redacta, busca y responde preguntas con base en los
              propios documentos de la firma, y cada respuesta está respaldada por una cita.
            </p>
            <a href="#contacto" class="product-link">Consulte sobre un piloto →</a>
          </div>
          <div class="product-features">
            <ul class="feature-list">
              <li>
                <b>Sus documentos siguen siendo suyos.</b> Despliegue local o en nube dedicada —
                ningún documento de cliente se usa para entrenar modelos compartidos.
              </li>
              <li>
                <b>Construida para la infraestructura legal de Panamá.</b> Se integra con DIGERPI,
                el Registro Público y los sistemas de expediente judicial electrónico que las
                herramientas globales de IA legal no ofrecen.
              </li>
              <li>
                <b>Vive dentro de Word y Outlook.</b> La redacción y la búsqueda ocurren donde los
                abogados ya trabajan, no en una aplicación aparte.
              </li>
              <li>
                <b>Precio fijo mensual.</b> Costo predecible — sin facturas sorpresa por uso de IA
                en la nube por consulta.
              </li>
            </ul>
          </div>
        </div>

        <div class="product">
          <div class="product-info skooltrak">
            <span class="product-tag"
              ><span class="dot" style="background:var(--gold)"></span>Gestión Escolar</span
            >
            <div class="product-title">
              <h3 class="product-name">Skooltrak</h3>
              <img src="/skooltrak.svg" />
            </div>

            <p class="product-desc">
              Una plataforma de gestión escolar para instituciones K-12 en toda la región —
              matrícula, registros académicos, asistencia y comunicación con las familias en un solo
              sistema, construida para cómo realmente operan los colegios de la región.
            </p>
            <a href="#contacto" class="product-link">Consulte sobre una demo →</a>
          </div>
          <div class="product-features">
            <ul class="feature-list">
              <li>
                <b>Un solo sistema, no cinco hojas de cálculo.</b> Matrícula, calificaciones,
                asistencia y facturación en una única fuente de verdad.
              </li>
              <li>
                <b>Construida para la región.</b> En español e inglés, ajustada al calendario
                académico de los colegios locales.
              </li>
              <li>
                <b>Un portal y una app para las familias.</b> Los padres ven asistencia,
                calificaciones y pagos directamente, sin llamar a la oficina.
              </li>
              <li>
                <b>Implementación y soporte local.</b> Incorporación, capacitación y soporte desde
                un equipo en la misma zona horaria.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="enfoque">
      <div class="approach-section">
        <div class="approach-wrap">
          <div class="section-head">
            <div>
              <span class="section-eyebrow mono" style="color:var(--mint);">Cómo trabajamos</span>
              <h2>El mismo proceso, en cada proyecto</h2>
            </div>
            <p>Ya sea su proyecto o uno de los nuestros.</p>
          </div>
          <div class="approach">
            <div class="step">
              <div class="num mono">01 / DESCUBRIMIENTO</div>
              <h3>Definir el alcance antes de programar</h3>
              <p>
                Definimos el problema, los usuarios y las restricciones técnicas antes de escribir
                una sola línea de código — incluyendo si el software es realmente la respuesta
                correcta.
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
                Seguimos como el equipo que opera, refuerza y amplía lo que construimos — de la
                misma manera en que operamos nuestras plataformas internas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto">
      <div class="wrap">
        <div class="band">
          <h2>Cuéntenos qué está construyendo.</h2>
          <div class="band-right">
            <div class="band-contact">
              <a href="mailto:hello@quadraticsolution.com">hello@quadraticsolution.com</a>
              <span>+507 000 0000</span>
              <span>Ciudad de Panamá, Panamá</span>
            </div>
            <a href="mailto:hello@quadraticsolution.com" class="btn btn-primary"
              >Iniciar un proyecto</a
            >
          </div>
        </div>
      </div>
    </section>
  </main>`,
})
export default class HomeComponent {}
