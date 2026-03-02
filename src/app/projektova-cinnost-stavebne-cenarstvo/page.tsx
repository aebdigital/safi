import ServicePage from "@/components/ServicePage";

export default function Sluzba2() {
    return (
        <ServicePage
            title="Projektová činnosť, stavebné cenárstvo"
            description="Zabezpečíme kompletnú projektovú dokumentáciu pre Vašu stavbu a vypracujeme presné stavebné rozpočty."
            image="/images/services/hero-subpage.webp"
            points={[
                "Vypracovanie projektovej dokumentacie",
                "Podrobný výkaz-výmer",
                "Kontrola rozpočtových nákladov",
                "Konzultačná činnosť k projektom",
                "Optimalizácia cien materiálov",
                "Príprava podkladov pre výberové konania"
            ]}
        />
    );
}
