import CommitteeDescription from "@/components/committees/committeeDesription";

const data = {
    cardiac: {
        title: "Cardiac Committee",
        desc: "heart stuff"
    },
    neuro: {
        title: "Neuro Committee",
        desc: "brain stuff"
    }
}

export async function getStaticPaths() {
    const committees = Object.keys(data);
    const paths = committees.map((committee) => ({
        params: { committee }
    }));
    return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
    const committeeData = data[params.committee];
    return {
        props: {
            committeeData,
        },
    };
}

export default function CommitteePage({ committeeData }) {
    return (
        <div>
            <CommitteeDescription props={committeeData} />
        </div>
    )
};
