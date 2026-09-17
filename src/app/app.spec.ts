import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the accessible application shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('main#main-content')).toBeTruthy();
    expect(compiled.querySelector('nav[aria-label="Navegación principal"]')).toBeTruthy();
    expect(compiled.querySelector('.skip-link')?.textContent).toContain('Saltar al contenido');
    expect(compiled.querySelector('a[href^="mailto:contacto@quadratics.io"]')).toBeTruthy();
    expect(compiled.querySelector('.copyright')?.textContent).toContain('Quadratic Solution');
  });

  it('should expose an accessible mobile navigation toggle', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const toggle = fixture.nativeElement.querySelector('.nav-toggle') as HTMLButtonElement;

    expect(toggle.getAttribute('aria-controls')).toBe('primary-navigation');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(toggle.getAttribute('aria-label')).toBe('Cerrar menú');
  });

  it('should close the mobile menu on a document click', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const toggle = fixture.nativeElement.querySelector('.nav-toggle') as HTMLButtonElement;

    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');

    document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
