import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request){
    try{
        const {name, email, message} = await req.json();
        console.log("incoming request: ", {name,email,message});
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS

            },
        });

        await transporter.sendMail({
            from:email,
            to:process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${name}`,
            text: message,
            replyTo: email,
        });

        console.log("email sent");

        return NextResponse.json({ success: true });
    } catch (error){
        console.error(error);
        return NextResponse.json({ success: false, error });
    }
}