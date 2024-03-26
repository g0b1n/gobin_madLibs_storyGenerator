### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a efficent and flexiable JS library/framework for building user interface.
    It lets you compose complex UI from small isolated pieces of code/functions called components.
    We should use React when we need to build interactive web application with reuseable UI components.
    React is really usefull for single-page applications where you need responsive and dynamic
    user experience without full page reloads.

- What is Babel?
    Babel is a JS compiler that transforms mordern JS code into backwards compatible versions of JS that can run
    in old browsers. It's widely used in React apps to allow developers to use the latest versions of JS 
    features such as ES6+ syntax while ensuring compatiblity with older evnironments. Babel is also
    essential for transforming JSX code into standard JS.

- What is JSX?
    JSX stands for JavaScript XML. It is a syntax extension for JS recommended by React team. JSX allows you
    to write HTML structures  in the same file as your JS code, giving more readable and expressive way to 
    create React elements and components. Under the hood, JSX expressions compile down to `React.createElement()` calls.

- How is a Component created in React?
    There are couple of ways to create components in React
        1. Function Components
            `function Welcome(props){
                return <h1>Hello, {props.name}</h1>
            }`
        2. Class Components
            `class Welcome extends React.Component {
                render() {
                return <h1>Hello, {this.props.name}</h1>;
                }
            }`
    

- What are some difference between state and props?
    Props are short for 'properties' which are immutable and are passed to the components from the parent.
    They are used to pass data and event handlers down to the child components.

    State is mutable and managed within the components. It is used for data that changes over time or in responsive to user actions.

- What does "downward data flow" refer to in React?
    In React "downward data flow" is refers to the pattern of passing data and behavior from parent components
    down to the child components through props.

- What is a controlled component?
    In React controlled component is a component that derives its current value from props and notifies changes to its value through callbacks
    like `onChange`. This means the source of truth for the component's state is not the DOM but the React component itself.

- What is an uncontrolled component?
    In React uncontrolled component is on that stores its own state internally and queries the DOM using a ref to find its current value
    when needed, rather than controlling the input through state.

- What is the purpose of the `key` prop when rendering a list of components?
    The `key` props is a special string attribute you need to include when creating lists of elements. It helps React id which items 
    have changed, are added, removed, which is crucial for efficiently updating and rendering dyna,ic list of components. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using an array index as a `key` prop is a poor choice because it does not uniquely id elements. If the order of items changes,
    React might not render the changes correctly, leading to performance issues and bugs in the UI, especially if the list can change dynamically.

- Describe useEffect.  What use cases is it used for in React components?
    `useEffect` is a hook in React that lets you perform side effects in functions components. It serves the same purpose as `componentDidMount`,
    `componentDidUpdate` and `componentWillUnmount` in React class lifecycle methods but unified into single API. Use cases include fetching data,
    setting up a subscription, and manually changing the DOM in React components.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    `useRef` return a mutable ref object whose `.current` property is initialized to the passes argument. The object returned will presist for the
    full lifetime of the component. A change to a ref value does not cause a component to rerender. 

- When would you use a ref? When wouldn't you use one?
    You would use ref in React for several purposes, such as:
        1. Managinc focus, text selection, or media playback
        2. Triggering imperative animations
        3. Intergating with third-party DOM libraries
    
    You would not use ref when you can achive the desired result through React state management.

- What is a custom hook in React? When would you want to write one?
    Cusom hook in React is a JS function that starts with `use` and can call other hooks. It is a mechanism to resue
    statrful logic accross multiple components. Custom hooks allow you to extract component logic into resuable functions.

    You would want to write custom hook when you notice you are repeating the same logic in multiple components.
    By creating custom hook, you encapsulate that logic in a single place, making you component simpler and more maintainable.
    