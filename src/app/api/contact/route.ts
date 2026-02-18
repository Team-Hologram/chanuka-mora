import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
    try {
        const json = await request.json();
        const body = contactFormSchema.parse(json);

        // Simulate reliable API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Contact Form Submission:", body);

        // In a real app, you would send email here using Resend or similar
        // await resend.emails.send({ ... })

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Invalid request" },
            { status: 400 }
        );
    }
}
