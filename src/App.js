import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { FirestoreProvider } from "@react-firebase/firestore";
import firebase from 'firebase'

import {config} from './config/firebase-config'

import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <FirestoreProvider {...config} firebase={firebase} >
      <div>
        <CssBaseline />
        <Dashboard />
      </div>
    </FirestoreProvider>
  );
}

export default App;
