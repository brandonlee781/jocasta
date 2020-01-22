import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazVmcHBtbmwwMDAwZ3o5Y281OWczbTB1IiwiaWF0IjoxNTc5MTIwMzY1fQ.cZ3lS6qpyVpxMB47sDyhfp0U95D58Heha1uBz7nCAm4",
      }
    })
  }
});