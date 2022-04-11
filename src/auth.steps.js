/*
1.create a new project in console.firebase.google.com
2.npm install firebase
3.Create firebase.init.js(copy paste) and import getAuth so that we can use  it and export default auth
4.Go to console>authentication>get started
5.Create login and sign up compo and set the route
6.attach form field handler and form submit handler
7.npm install --save react-firebase-hooks (search react firebase hook and go the github link)
8. const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);(on sign up page) 
9.if user is created redirect to the expected page using useNavigate();
10.const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
for sign in



*/

/* Hosting Steps
1.npm install -g firebase -tools
2.firebase login
3.firebase init
4.firebase deploy
*/