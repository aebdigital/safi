import ServicePage from "@/components/ServicePage";

export default function Sluzba2() {
    return (
        <ServicePage
            currentHref="/projektova-cinnost-stavebne-cenarstvo"
            title="Projektová činnosť, stavebné cenárstvo"
            description="Za roky pôsobenia v stavebníctve sme si vybrali do spolupráce skúsených a kvalitných projektantov. V našich službách si môžete vyžiadať aj ponuku na nacenenie objektov, alebo častí objektov."
            image="/images/services/hero-subpage.webp"
            points={[
                "Architektúra",
                "Statika",
                "Zdravotechnika",
                "Elektroinštalácie",
                "Požiarna bezpečnosť",
                "Dopravné stavby",
                "Energetické hodnotenie",
                "Záhradná architektúra"
            ]}
        />
    );
}
