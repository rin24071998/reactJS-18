# Project Name

React js 18

## Prerequisites

- **Node.js**: `v20.10.0`
- **React**: `18.3.1`
- **TypeScript**: `4.9.5`

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/project.git
   ```
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start
   ```

## Key Libraries and Tools

### 1. **React** `18.3.1`

- The core library for building user interfaces. This project is based on React 18, offering modern features like concurrent rendering, automatic batching, and more.

### 2. **TypeScript** `4.9.5`

- TypeScript is used to add static type checking to your JavaScript code, improving code quality, reducing bugs, and enhancing developer experience.

### 3. **Prettier**

- Prettier is a code formatter used in this project to ensure consistent coding style across the entire codebase. You can format your code by running:
  ```bash
  yarn format
  ```

### 4. **CRACO** (Create React App Configuration Override)

- CRACO is used to customize and override the default Webpack configuration of Create React App. In this project, it is used primarily to configure **alias URLs**, simplifying import paths.

### 5. **Ant Design (AntD)**

- Ant Design is the UI library used for building elegant and responsive user interfaces. It provides a wide range of pre-built UI components that are customizable and easy to use.

### 6. **Sass**

- **Sass** is used as the CSS preprocessor for writing modular and maintainable styles. You can write your styles in `.scss` files for advanced features like nesting, variables, and mixins.

### 7. **React Router DOM** `6.26.1`

- React Router DOM is used for configuring routing in the project. Version 6 brings a more intuitive approach to nested routes and offers advanced features for controlling navigation.

### 8. **Redux Toolkit**

- **Redux Toolkit** is used for managing global state across components. It simplifies the process of configuring the store, reducers, and dispatching actions in a more efficient way.
- **Redux Persist** is integrated to persist the state in local storage, ensuring data is saved even when the page is refreshed or the app is closed.

### 9. **React Promise Tracker**

- This library is used to track the loading state of promises, particularly useful when making API calls. It allows you to display loading indicators across the app based on the status of your async operations.

### 10. **Axios**

- Axios is used to handle API requests in the project. It simplifies HTTP requests and responses, providing support for promises and async/await syntax.

## Development Commands

- **Start the development server**:
  ```bash
  yarn start
  ```
- **Run the build**:
  ```bash
  yarn build
  ```
- **Run Prettier to format code**:
  ```bash
  yarn format
  ```

## Project Structure

src/
|-- app/ # Main application structure and logic
| |-- components/ # Core components for the application, including layouts and app configuration
| |-- hooks/ # Shared custom hooks for the application
| |-- layouts/ # Layouts used throughout the application
| |-- pages/ # Main application pages
| |-- routes/ # Route configuration and definitions
| |-- shared/ # Shared elements among components, such as utils, constants, and common components
|-- i18n/ # i18n configuration and translation files
| |-- \_i18n/ # i18n configuration
| |-- locales/ # Language translation files
|-- config/ # Application configuration, including environment variables
|-- constants/ # Global constants
|-- helpers/ # Helper functions
|-- interfaces/ # TypeScript interfaces
|-- redux/ # Redux-related files, including slices and store configuration
|-- services/ # API service functions
|-- stylesheet/ # Stylesheet files, including SCSS
|-- App.tsx # Entry point of the application, contains router configuration, providers, etc.
|-- index.tsx # Main entry point of the application

## Additional Notes

- **Prettier**: Ensure you run the code formatter before committing any changes to maintain consistent formatting.
- **Redux Persist**: The state is persisted locally, so changes to reducers should be carefully managed to avoid data conflicts.
- **React Promise Tracker**: Make sure all API calls are tracked correctly for accurate loading indicators.
