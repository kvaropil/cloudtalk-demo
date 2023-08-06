# Cypress demo for interview in CloudTalk

## Cypress + Typescript + Cypress-Grep

### How to run

- be sure you have `yarn` installed
- clone repo, install dependencies
- `cy:open` - run in Cypress GUI
- `cy:run` - run in headless mode

### Features

#### Cypress-Grep

- Project use Cypress Grep ([https://github.com/cypress-io/cypress-grep](https://github.com/cypress-io/cypress-grep))
- It allows you to run specified tests in headless mode by so-called _tags_

- `yarn cypress run --env grepTags="@todoMvc"` runs only blocks with corresponding tag

#### Github Actions

- GitHub actions is set in following way:
  - Develop is protected branch
  - Pull request is required
  - All tests must pass before merge is allowed
