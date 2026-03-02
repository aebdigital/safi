import ServicePage from "@/components/ServicePage";

export default function Sluzba3() {
    return (
        <ServicePage
            title="Stavebný dozor"
            description="Zabezpečíme pre Vás odborné riadenie a kontrolu priebehu výstavby v súlade s projektovou dokumentáciou a platnými technickými normami."
            image="/images/services/hero-subpage.webp"
            points={[
                "Dôsledná kontrola kvality materiálov a prác",
                "Sledovanie dodržiavania časového harmonogramu",
                "Kontrola technologických postupov",
                "Spolupráca pri preberacom konaní",
                "Zabezpečenie BOZP na stavenisku",
                "Vedenie a kontrola stavebného denníka"
            ]}
        />
    );
}
