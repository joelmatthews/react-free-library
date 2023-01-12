# Free Library React Practice

A simple React project to practice key concepts and skills. 

## Concepts & Skills Used

The app is very simple and utilizes the React Context API to pass data and functions to the necessary components throughout the app. The app also leverages a custom hook, useHttp, which is essentially a component-specific configurable Fetch request. For example, the BooksList component uses useHttp to make a fetch GET request to a Firebase real-time database in order to get a list of available books to render. The Cart component uses useHttp in order to make a POST fetch request to push the reserved books to a reservation collection in the Firebase real-time database. 

Other skills used include: State mangement, React hooks, React portals, CSS modules, conditional rendering, and more. 