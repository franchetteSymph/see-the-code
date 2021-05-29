import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { FirestoreProvider } from "@react-firebase/firestore";
import {config} from './config/firebase-config'
import firebase from 'firebase'

function App() {
  return (
    <FirestoreProvider {...config} firebase={firebase} >
      <div>
        <CssBaseline />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </FirestoreProvider>
  );
}

export default App;
