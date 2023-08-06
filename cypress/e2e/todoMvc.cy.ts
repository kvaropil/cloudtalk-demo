import selectors from '../support/selectors/todoMvcSelectors';
import { ITodoData } from '../types/todoData';

describe('TodoMVC', { tags: '@todoMvc' }, (): void => {
  let todoData: ITodoData;

  beforeEach((): void => {
    cy.visit('/');

    cy.fixture<ITodoData>('todoMvc/todoData.json').then((data: ITodoData) => {
      todoData = data;

      cy.createTodo(todoData.TODO_ITEM_ONE);
      cy.createTodo(todoData.TODO_ITEM_TWO);
    });
  });

  it('TC 1001 - User can add todos', (): void => {
    cy.assertTodoText(0, todoData.TODO_ITEM_ONE);
    cy.assertTodoText(1, todoData.TODO_ITEM_TWO);

    cy.get(selectors.todoListItem).should('have.length', 2);
  });

  it('TC 1002 - User can toggle todos', (): void => {
    cy.toggleTodo(0);
    cy.get(selectors.todoListItem).eq(0).should('have.class', 'completed');
    cy.get(selectors.todoListItem).eq(1).should('not.have.class', 'completed');
  });
});
