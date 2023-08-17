# Key Questions:

## React Day 2
- What is React State, and why is it a crucial concept in React development? Explain how React State differs from props and provide a simple example scenario that demonstrates the need for state in a component.
  - React State is a mechanism that allows components to store and manage their own internal data that can change over time. Unlike props, which are passed from parent components, state is local to the component and can be modified using specific methods. React State is necessary for managing dynamic data that affects a component's behavior or appearance. For example, in a form input component, the text entered by the user might be stored in state to keep track of its value as it changes.
- How do you create and manage state in a functional component using the useState hook? Describe the concept of "Unidirectional Data Flow" in React.  
  - In functional components, React State can be managed using the useState hook, which provides a way to declare state variables and functions for updating them. The concept of "Unidirectional Data Flow" in React emphasizes that data flows in a single direction, from parent to child components.

## React Day 1

- What are React components, and how do they help organize UI elements? Explain how props are used to pass data between components.
  - React components are reusable building blocks that encapsulate UI elements and their functionality. They help modularize an application's user interface. Props, short for "properties," are a way to pass data from parent to child components. They enable components to receive and use external data without affecting the parent's state.
- Describe how dynamic rendering is achieved using mapping. 
  - Mapping involves associating data with components or elements in your user interface. In dynamic rendering, mapping is used to establish a connection between the data you want to display and the components responsible for rendering that data. This can be done using data structures like arrays, objects, or other collections that store the necessary information.

