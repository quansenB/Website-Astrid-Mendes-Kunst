import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(request) {
  const body = await request.json();

  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
  });

  const sentFrom = new Sender(
    "no-reply@agenturignis.de",
    "Website Kontaktformular"
  );
  const recipient = [
    new Recipient("restaura.astridmendes@gmail.com", "Astrid Mendes"),
    // new Recipient("inaki@inakibreinbauer.de", "Inaki Text"),
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipient)
    .setSubject("Neue Kontaktanfrage über die Website")
    .setText(
      `Name: ${body.name}\nEmail: ${body.email}\nNachricht: ${body.message}`
    ).setHtml(`
      <h3>Neue Kontaktanfrage</h3>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Nachricht:</strong><br/>${body.message}</p>
    `);

  try {
    await mailerSend.email.send(emailParams);
    return Response.json({ success: true });
  } catch (error) {
    console.error("MailerSend Error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
