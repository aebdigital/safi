import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Meno, email a správa sú povinné údaje." },
                { status: 400 }
            );
        }

        const apiKey = process.env.SMTP2GO_API_KEY;
        const recipientEmail = process.env.CONTACT_FORM_RECIPIENT || "info@safisk.sk";
        const senderEmail = process.env.SMTP2GO_SENDER || "SAFI SK Website <noreply@safisk.sk>";

        if (!apiKey) {
            console.error("Missing SMTP2GO_API_KEY environment variable");
            return NextResponse.json(
                { error: "Konfigurácia servera je neúplná." },
                { status: 500 }
            );
        }

        // SMTP2GO API Call
        const response = await fetch("https://api.smtp2go.com/v3/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                api_key: apiKey,
                to: [recipientEmail],
                sender: senderEmail,
                subject: `Nová správa z webu od: ${name}`,
                text_body: `Meno: ${name}\nEmail: ${email}\nTelefón: ${phone || "Nezadané"}\n\nSpráva:\n${message}`,
                html_body: `
                    <h2>Nová správa z kontaktného formulára</h2>
                    <p><strong>Meno:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telefón:</strong> ${phone || "Nezadané"}</p>
                    <br/>
                    <p><strong>Správa:</strong></p>
                    <p>${message.replace(/\n/g, "<br/>")}</p>
                `,
            }),
        });

        const data = await response.json();

        if (response.ok && data.data && data.data.succeeded > 0) {
            return NextResponse.json({ success: true, message: "Správa bola úspešne odoslaná." });
        } else {
            console.error("SMTP2GO Error:", data);
            return NextResponse.json(
                { error: "Nepodarilo sa odoslať správu. Skúste to prosím neskôr." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Vyskytla sa neočakávaná chyba." },
            { status: 500 }
        );
    }
}
