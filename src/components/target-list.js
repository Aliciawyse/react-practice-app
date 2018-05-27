import React from 'react';
import { Card } from 'semantic-ui-react';
import TargetCard from './target-card';


export default function TargetList({targets}){

    const cards = () => {
        return targets.map(target => {
            return (
                <TargetCard key={target._id} target={target}/>
            )
        })
    };

    return (
        <Card.Group>
            { cards() }
        </Card.Group>
    )
}