import ServicePage from "@/components/ServicePage";

export default function Sluzba4() {
    return (
        <ServicePage
            title="Inžinierska činnosť v stavebníctve"
            description="Zabezpečíme pre Vás všetky potrebné povolenia a súhlasy dotknutých orgánov pre Vašu stavbu."
            image="/images/services/hero-subpage.webp"
            points={[
                "Zastupovanie pred úradmi",
                "Získanie územného rozhodnutia",
                "Zabezpečenie stavebného povolenia",
                "Kolaudačné konanie a odovzdanie",
                "Vybavenie prípojok a infraštruktúry",
                "Iná odborná komunikácia s úradmi"
            ]}
        />
    );
}
