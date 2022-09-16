import React from 'react';
import { Badge, Card } from 'react-bootstrap';

export default function TrainingMap({level, icon, mapName, mapLink, sf, arcP, sacP}) {
  return (
    <Card style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
        <Card.Body style={{padding: '0.5rem'}}>
            <img src={`/images/map-icons/${icon}.png`} alt=""/> <a href={mapLink} target="_blank" rel="noreferrer noopener">{mapName}</a> <Badge variant="secondary">Lv. {level}</Badge>
            {sf && <Badge variant="secondary">{sf} SF+</Badge>}
            {arcP && <Badge variant="secondary">{arcP} ArcP+</Badge>}
            {sacP && <Badge variant="secondary">{sacP} SacP+</Badge>}
        </Card.Body>
    </Card>
  )
};
