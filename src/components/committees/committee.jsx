import React from 'react';

export default function CommitteeCard({props}) {
    return (
        <div className={styles.committee_card}>
            <Img
                src={props.image}
                alt={props.name}
            />
            <h3>{props.name}</h3>
        </div>
    )
}
