import { useState } from 'react'
import './App.css'
import { Button } from "@material-tailwind/react";
import conf from '../conf';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './Store/store';

function App() {

  return (
    <>
    <Provider store={store}>
    <Layout/>
    </Provider>
    </>
  )
}

export default App
