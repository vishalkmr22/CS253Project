import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1>404: Not Found</h1>

            <p>Go to the <Link to='/'>HomePage</Link></p>
        </div>
    );
}