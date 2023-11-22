# authenticated Firebase Todo list


## Cleanup
Cleaning up is important. Any file you commit to git will be in the repository for ever.

- cleanup App.jsx
    * in App.jsx
        * Remove count useState
        * remove all JSX, make it return "hello" only
        * remove imports except for App.css
    * remove assets/react.svg

- Fix favcion
    * Get icon
    * move icon file to ./public
    * add icon to index.thml (type is not needed)
    * remove public/vite.svg


## Add Firebase
Firebase API reference: https://firebase.google.com/docs/reference/js
onAuthStateChanged: https://firebase.google.com/docs/reference/js/auth.md?authuser=0#onauthstatechanged

- `npm install firebase`
- copy config from console
    * go to Firebase console
    * click on your project
    * Project overview cogwheel, click on "Project settings"
    * copy configuration into a new file, `./src/firebase-config.js`

## Add auth
https://stackoverflow.com/questions/68104551/react-firebase-authentication-and-usecontext

- create a small Home component in it's own file
- in firebase-config, add getAuth, export auth
- In App.jsx
    * add auth state
    * add useEffect for auth
    * add auth props to Home
- Add Navbar
- Add Navbar to Home

## Add React Router
- `npm install react-router`

## Remove prop-types rule from eslint
- in .eslingrc, in the rules, add `"react/prop-types": "off",`

## TODO
* finish readme
* fix the 404 issue
* fix the back page after login to unauthenticated page

