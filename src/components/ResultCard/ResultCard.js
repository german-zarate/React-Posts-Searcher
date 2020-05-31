import React from 'react';
import './ResultCard.sass';

export default function ResultCard(props){
    return (
        <div data-testid="result-card" className="col-12 col-lg-6 my-2">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">{props.title}</h2>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.body}.</p>
                    <p className="card-text card-author">{props.username}</p>
                </div>
            </div>
        </div>
    );
}