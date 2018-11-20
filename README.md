# rn-redux-template
This is a React Native project template with redux, navigator, sidemenu (drawer) and [icons](https://github.com/oblador/react-native-vector-icons). The motivation of this project is to make it easier (for me or anyone else) to start a fresh RN project with redux, and with the examples provided maybe even learn something new!

## iOS
Installation:
  - clone the repo
  - npm install
  - react-native link react-native-vector-icons
  - react-native run-ios

## Android
Installation:
  - clone the repo
  - npm install
  - react-native link react-native-vector-icons
  - react-native run-android
  
## Features
### Redux
State management is handled with Redux (alongside with react-redux for connect-bindings and redux-thunk for promises in actions). If you are not familiar with redux, check out its excellent documentation [here](http://redux.js.org/).

### Navigation
Navigation bar and drawer menu are used for [navigation](https://facebook.github.io/react-native/docs/navigator.html) - when the page is changed from drawer menu, the whole navigation stack is replaced so that only the selected item remains in the navigator. Root app provides `pushRoute` and `popRoute` methods for every scene it renders, so that subviews can be pushed on top of the navigator stack from inside the scenes.

### Promises
Custom middleware is implemented (slightly modified from [here](http://redux.js.org/docs/advanced/Middleware.html)), so that every dispatched action with promise payload emits two different actions: first with PENDING status when the promise execution starts, and either SUCCESS or ERROR result (with data and error items respectively) when the promise is resolved or rejected. Note that promise actions are not FSA compliant, this is by design.

### Tests
Run with `npm test`

  * [Jest](https://facebook.github.io/jest/) provides a test-runner, jasmine assertions, basic mocking and snapshot rendering
  * [Enzyme](https://github.com/airbnb/enzyme/) is used for component testing
  * [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) is used to test redux action creators and middleware
  
**NOTE** Promises will break tests if used in component tests, see a related issue [here](https://github.com/facebook/jest/issues/1760).
