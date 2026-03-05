import ServicePage from "@/components/ServicePage";

export default function Sluzba5() {
    return (
        <ServicePage
            currentHref="/management-v-stavebnictve"
            title="Management v stavebníctve"
            description="V labyrinte materiálov a dodávateľov v stavebníctve Vám zariadime:"
            image="/images/services/hero-subpage.webp"
            points={[
                "Kontrola projektovej dokumentácie pred zahájením stavby",
                "Kontrola materiálového zloženia stavby alternatívne odporúčanie na cenovo výhodnejší materiálový ekvivalent",
                "Odporúčenie spoľahlivých partnerov pre výstavbu",
                "Koordinácia a riadenie stavebných procesov",
                "Sledovanie správnosti vyhotovených častí diela – preberacie konania",
                "Sledovanie správnosti vystavených súpisov k fakturácii a odsúhlasovanie",
                "Príprava dokladov ku kolaudácii",
                "Účasť na kolaudačnom konaní"
            ]}
        />
    );
}
