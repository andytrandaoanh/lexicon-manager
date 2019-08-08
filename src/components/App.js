import React from 'react';
import AppBarWithDrawer from './menu/appbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainDisplay from './main/MainDisplay';
import BookDisplay from './main/BookDisplay';
import QuoteDisplay from './main/QuoteDisplay';
import WordDisplay from './main/WordDisplay';

function App () {
	return (
		<div className = "App">
			<BrowserRouter>
				<AppBarWithDrawer />				
					<Switch>	    		
			    		<Route path='/' exact component={MainDisplay} />
			    		<Route path='/book' exact component={BookDisplay} />
			    		<Route path='/word' exact component={WordDisplay} />
			    		<Route path='/quote' exact component={QuoteDisplay} />

				    </Switch>
			</BrowserRouter>      
    	</div>
	)
}


export default App;
