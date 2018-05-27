import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon } from 'semantic-ui-react'

export default function TargetCard({target, deleteTarget}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='user outline'/> {target.name}
                </Card.Header>
                <Card.Description>
                    <p><Icon name='mail outline'/> {target.keyContact.email}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button basic color="green">Edit</Button>
                    <Button basic color="red">Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}


TargetCard.propTypes = {
    target: PropTypes.object.isRequired,
};