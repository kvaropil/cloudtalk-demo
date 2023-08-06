/// <reference types="cypress" />
import { SELECTORS } from './todoMvcSelectors';

/**
 * @description Assert todo item in list by given index and text
 * @param {number} index
 * @param {string} expectedTodoText
 * @returns {void}
 */
Cypress.Commands.add(
  'assertTodoText',
  (index: number, expectedTodoText: string) => {
    cy.get(SELECTORS.todoListItem)
      .eq(index)
      .should('contain.text', expectedTodoText);
  },
);

/**
 * @description Create new todo with given text
 * @param {string} todoText
 * @returns {void}
 */
Cypress.Commands.add('createTodo', (todoText: string) => {
  cy.get(SELECTORS.newTodoInput).type(`${todoText}{enter}`);
});

/**
 * @description toggle todo item in list by given index
 * @param {number} index
 * @returns {void}
 */
Cypress.Commands.add('toggleTodo', (index: number) => {
  cy.get(SELECTORS.todoListItem).eq(index).find(SELECTORS.todoToggle).check();
});

export {};
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      assertTodoText(index: number, expectedTodoText: string): void;
      createTodo(todoText: string): void;
      toggleTodo(index: number): void;
    }
  }
}
