import ServicePage from "@/components/ServicePage";

export default function Sluzba1() {
    return (
        <ServicePage
            title="Vyhodnotenie závad po ukončení realizácií"
            description="Našim cieľom je zabezpečiť, aby Vaša stavba bola v najlepšom možnom stave po jej dokončení. Vyhodnocujeme každý detail."
            image="/images/services/hero-subpage.webp"
            points={[
                "Dôkladná kontrola realizovaných prác",
                "Identifikácia skrytých závad",
                "Príprava podkladov k reklamáciám",
                "Zabezpečenie nápravných opatrení",
                "Odborné posúdenie kvality materiálov",
                "Záverečná správa a odporúčania"
            ]}
        />
    );
}
