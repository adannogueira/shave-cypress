import { Header } from '../../components/header';
import { SharedItems } from '../../shared';

export const shaversPage = {
  ...SharedItems,
  url: '/shavers',
  header: Header,
  
  pickShaver({ name }: { name: string }) {
    cy.log(name)
      cy.contains('figcaption h3', name)
        .click()
  }
}
