import ServicePage from "@/components/ServicePage";

export default function Sluzba3() {
    return (
        <ServicePage
            currentHref="/stavebny-dozor"
            title="Stavebný dozor"
            description="Stavebný dozor je kľúčová súčasť procesu výstavby, ktorý zabezpečuje, aby sa projekty realizovali v súlade s platnými predpismi, technickými normami a projektovou dokumentáciou."
            image="/images/services/hero-subpage.webp"
            points={[
                "Kontrola kvality: Stavebný dozor zabezpečuje, aby vykonávané práce boli v súlade s projektovou dokumentáciou a v súlade s technickými normami.",
                "Dodržiavanie termínov: Sleduje priebeh výstavby a dbá o to, aby sa práca vykonávala podľa dohodnutého harmonogramu.",
                "Finančná kontrola: Môže posúdiť náklady na investície a zároveň následne kontrolovať či sa dielo stavia v súlade s rozpočtom.",
                "Riešenie problémov: Rýchlo reaguje na prípadné nepredvídateľné udalosti alebo problémy na stavbe a navrhuje riešenia.",
                "Dokumentácie a správy: Pripravuje správy a dokumentáciu o priebehu stavebných prác, čo je dôležité pre transparentnosť a budúce kontroly."
            ]}
        />
    );
}
