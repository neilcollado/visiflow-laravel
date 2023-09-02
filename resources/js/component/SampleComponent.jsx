import React from 'react';
import ReactDOM from 'react-dom/client';

export default function SampleComponent() {
    return (
        <h1>Sample Component</h1>
    );
}

const container = document.getElementById('SampleComponent');
const root = ReactDOM.createRoot(container);
root.render(<SampleComponent />)