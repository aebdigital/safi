import ServicePage from "@/components/ServicePage";

export default function Sluzba5() {
    return (
        <ServicePage
            title="Management v stavebníctve"
            description="Ponúkame komplexné riadenie Vášho stavebného projektu od prvej myšlienky až po záverečné odovzdanie kľúčov."
            image="/images/services/hero-subpage.webp"
            points={[
                "Celkové riadenie nákladov projektu",
                "Plánovanie a harmonogram výstavby",
                "Výber a koordinácia dodávateľov",
                "Sledovanie kvality a termínov",
                "Riešenie krízových situácií",
                "Priebežný reporting investorovi"
            ]}
        />
    );
}
