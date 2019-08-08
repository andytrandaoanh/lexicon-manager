import React from 'react';
import AppBarWithDrawer from './menu/appbar';
import ClippedDrawer from './menu/appbar2';

import MainDisplay from './main/main';

function App () {
	return (
		<div className = "App">
			<AppBarWithDrawer />
			<MainDisplay />      
    	</div>
	)
}


export default App;
