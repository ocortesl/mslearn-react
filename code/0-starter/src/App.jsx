import React from 'react';
import RecipeTitle from './RecipeTitle';
import './index.css'

function App() {
    return (
        <article>
            <h1>Recipe manager</h1>
            <RecipeTitle/>
            <div>{ Date.now() }</div>    
        </article>
    )
}

export default App;