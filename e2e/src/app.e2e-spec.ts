import {browser, element, by } from 'protractor';

describe('Pruebas unitarias e2e', () => {
    beforeEach(()=>{
      browser.get("/");

  });
  it("Comprueba título", ()=>{
    expect(element(by.css(".header-title ion-title")).getText()).toContain("Inicio")
  })

  it("Comprueba nosotros", ()=>{
    expect(element(by.css(".titulo")).getText()).toContain("Nosotros");
  });

});
