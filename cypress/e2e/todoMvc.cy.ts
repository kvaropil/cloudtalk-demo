import { SELECTORS } from '../support/todoMvcSelectors';
import { ITodoData } from '../types/todoData';

describe('TodoMVC', (): void => {
  let todoData: ITodoData;

  beforeEach((): void => {
    cy.visit('/');

    cy.fixture<ITodoData>('todoMvc/todoData.json').then((data: ITodoData) => {
      todoData = data;

      cy.createTodo(todoData.TODO_ITEM_ONE);
      cy.createTodo(todoData.TODO_ITEM_TWO);
    });
  });

  it('TC 1001 - Use can add todos', (): void => {
    cy.assertTodoText(0, todoData.TODO_ITEM_ONE);
    cy.assertTodoText(1, todoData.TODO_ITEM_TWO);
  });

  it('TC 1002 - User can toggle todos', (): void => {
    cy.toggleTodo(0);
    cy.get(SELECTORS.todoListItem).eq(0).should('have.class', 'completed');
    cy.get(SELECTORS.todoListItem).eq(1).should('not.have.class', 'completed');
  });
});
