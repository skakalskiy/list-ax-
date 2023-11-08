import React, { useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import './App.scss';
import Users from './Users/Users';



const baseUrl ='https://reqres.in/api/users?page=1';

function App() {

        return(
          <>
            <Header/>
            <main>
              <Users/>
            </main>
            <aside>
              
            </aside>
          </>
        )

      
    }

export default App;
