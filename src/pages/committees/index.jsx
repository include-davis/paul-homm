import React from 'react';
import styles from "@/styles/pages/committees/committees.module.scss"

//actual component?
function CommitteeCard(props) {
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



//data to make cards
const data = [
    { name: "Cardiopulmonary", image:"/images/committees/cardiopulmonary.png" }, 
    { name: "Covered California", image:"/images/committees/covered_california.png"}, 
    { name: "Dermatology", image:"/images/committees/dermatology.png"},

    { name: "Diabetes", image:"/images/committees/diabetes.png"},
    { name: "Patient Assistance Program", image:"/images/committees/patient_assistance_program.png"},
    { name: "Hepatitis", image:"/images/committees/hepatitis.png"},

    { name: "Neurology", image:"/images/committees/neurology.png"},
    { name: "Women's Health", image:"/images/committees/womens_health.png"},
    { name: "Ophthalmology", image:"/images/committees/ophthalmology.png"}
]

//mapping
export default function committees() {
    return(
        <div className={styles.committees_page}>
            <div className={styles.committees_cards}>
                {data.map((committee, index) => (
                    <CommitteeCard 
                        key = {index}
                        name = {committee.name}
                        image = {committee.image}
                    />
                ))}
            </div>
        </div>
    )
}

committees;