import styles from "@/styles/components/flippingCard/flippingCard.module.scss";
export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}

export default function flippingCard() {
    const t = useTranslations('Index');
    return (
        <div> please work </div>
    );
}