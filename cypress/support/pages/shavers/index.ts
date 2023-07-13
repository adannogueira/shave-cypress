import { Header } from '../../components/header';

export class ShaversPage {
  static url = '/shavers'
  static header = Header

  static open() {
    cy.visit(ShaversPage.url)
  }
  
  static pickShaver({ name }: { name: string }) {
    cy.log(name)
      cy.contains('figcaption h3', name)
        .click()
  }
}