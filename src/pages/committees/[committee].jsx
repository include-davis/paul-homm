import CommitteeDescription from "@/components/committees/committeeDesription";
import React from "react";

const data = {
    //how to add next clinic date, would it be a separate prop field?
    coveredcalifornia:{
        title:"Covered California",
        desc:"The Covered California Committee assists patients in signing up for affordable health insurance through Covered California, Medi-Cal and Medicare. All Covered California Co-Directors are certified enrollment counselors for Covered California and, therefore, are able to work with patients through the entirety of the insurance application. The Covered California Committee also provides assistance in SPIRIT referrals--where patients can potentially have their expensive surgeries paid for."
    },
    cardiopulmonary: {
        title: "Cardiopulmonary",
        desc: "The Cardiopulmonary Committee educates patients about cardiovascular, pulmonary, and heart-related diseases. We assist patients who are at risk or already addicted to nicotine by providing free cessation resources. The Cardiopulmonary Committee holds monthly specialty clinics that offer electrocardiogram (EKG) strips, ankle brachial index (ABI) tests, and spirometry tests. \n Next Cardiopulmonary Clinic: Sunday, November 20, 2022"
    },
    patientassistance:{
        title: "Patient Assistance Program",
        desc: "The Patient Assistance Program (PAP) Committee enrolls low-income and uninsured/underinsured patients to receive brand-name medications at no cost from participating pharmaceutical companies. On average, we help patients save $130,000 a year on the medication cost. In addition, we have been leading various projects that provide patients free resources such as: accessories for injectable medications (syringes, needles, sharps containers, and needle clippers) and medication-related infographics. Recently, we have started collaborating with GoodRx to provide qualified patients monthly pre-paid debit cards for their chronic generic medications. Furthermore, the PAP Committee works closely with Dr. Jan and Dr. Pauly to monitor patients’ medication compliance, ​effectiveness, and safety, and to accommodate patients' other special needs on a case-by-case basis."
    },
    dermatology:{
        title:"Dermatology",
        desc: "The Dermatology committee is trained and educated to provide quality healthcare to patients experiencing simple to complex skin disorders. Some of the more common conditions that we screen for are eczema, psoriasis, pemphigus, rosacea, acne vulgaris, and all types of cancers. We provide free consultations for skin care and can even perform skin biopsies to rule out concerns for malignancies. Our team is dedicated to help you feel better about your own skin and how you wear it. We look forward to meeting you!\n Dermatology Clinics on Sunday, 9/25, 10/16, 12/11" 
    },
    diabetes:{
        title: "Diabetes",
        desc: "The Diabetes Committee improves the health of patients by screening all patients for diabetes and conducting follow ups with prediabetic and diabetic patients. We also offer nutrition and diet counseling, show exercise demonstrations, and provide free glucometer kits and HgA1c blood tests. The committee holds annual patient education seminars and events to help patients feel equipped to manage their diabetes and overall health."
    },
    hlub:{
        title:"HLUB",
        desc:"Hmong Lifting Underserved Barriers (H.L.U.B.) is a free student-run clinic consisting of pre-health undergraduate students from University of California, Davis and California State University, Sacramento, along with UC Davis School of Medicine medical students and medical practitioners. H.L.U.B. Clinic aims to provide free healthcare services to the underserved Hmong Community as well as lifting the language and cultural barriers that exist between the Hmong Community and the western healthcare system."
    },
    hepatitis:{
        title: "Hepatitis",
        desc: "Hepatitis is one of the leading causes of liver cancer, and the Asian population is at a significantly greater risk for having the disease. As a result, the Hepatitis Committee is devoted to identifying and treating this high-risk, underserved and uninsured Asian population in the Sacramento region. We currently provide free screening, vaccinations, and liver ultrasounds to patients. The Hepatitis Committee strives to educate our patients regarding Hepatitis B and encourage everyone to be screened and vaccinated."
    },
    ophthalmology:{
        title: "Ophthalmology",
        desc: "The Ophthalmology Committee monitors our patients’ history for eye conditions and provides patients with an assessment and follow-up care plan if needed. The committee conducts pupillary exams, intraocular pressure exams, visual acuity exams, slit lamp exams, and retinal exams during our clinic hours. Ophthalmology clinics are held quarterly on Sundays from 8:30am to 12pm. Depending on a patient’s insurance status and visual acuity, the Ophthalmology Committee can provide a VSP voucher which patients can use at a local optometrist’s office to obtain free-of-charge eyeglass frames and lenses and eye exams."
    },
    womenshealth:{
        title: "Women's Health",
        desc: "The Women’s Health Committee ensures patients have access to preventative cancer screenings available to them and hosts health events to educate patients about breast and cervical cancers--topics that are avoided in many Asian families. Some services this committee provides are: referrals to Planned Parenthood for mammograms; enrollment into the Every Woman Counts program for uninsured patients along with follow ups; and scheduling patients for OB/GYN clinics, PAP smears, and clinical breast exams (CBEs)."
    },
    neurology: {
        title: "Neurology",
        desc: "The Neurology Clinic assists patients with neurological issues, such as problems with memory, neuropathic pain (numb, tingling, or burning feet/hands), sleep, migraine, seizures, and any other issues related to the brain. We also offer dementia screening for patients who are older than 65 years of age and provide access to resources for patients, caretakers, and family members of individuals with memory loss issues."
    }
}

export async function getStaticPaths(){
    const committees = Object.keys(data);
    const paths = committees.map((committee) => ({
        params: { committee }
    }));
    return { paths, fallback: false};
};

export async function getStaticProps({ params }) {
    const committeeData = data[params.committee];
    return {
      props: {
        committeeData,
      },
    };
}

export default function CommitteePage({ committeeData }){
    return(
        <div>
            <CommitteeDescription props={committeeData}/>
        </div>
    )
};
