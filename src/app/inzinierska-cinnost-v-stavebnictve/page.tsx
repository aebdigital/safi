import ServicePage from "@/components/ServicePage";

export default function Sluzba4() {
    return (
        <ServicePage
            currentHref="/inzinierska-cinnost-v-stavebnictve"
            title="Inžinierska činnosť v stavebníctve"
            description="V našej spoločnosti sa môžete spoľahnúť, že zariadime:"
            image="/images/services/hero-subpage.webp"
            points={[
                "Vybavenie stavebného povolenia",
                "Vybavenie ohlásenia drobnej stavby",
                "Vybavenie búracieho povolenia",
                "Vybavenie zmien stavby pred dokončením",
                "Vybavenie kolaudácie stavby",
                "Zabezpečenie energetického certifikátu stavby",
                "Kontrola dokladov pred kolaudáciou",
                "Konzultácie a odporúčanie na odborne spôsobilé osoby: geodet, revízny technik, kominár..."
            ]}
        />
    );
}
