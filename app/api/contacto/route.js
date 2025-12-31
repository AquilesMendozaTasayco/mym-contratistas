import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nombre, email, telefono, mensaje } = await req.json();

    if (!nombre || !email || !mensaje) {
      return Response.json(
        { success: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `M&M Contratistas <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO || "informes@mymcontratistas.com",
      replyTo: email,
      subject: `Nuevo contacto web — ${nombre}`,
      text: `
Nuevo mensaje desde la Web de M&M Contratistas

Nombre: ${nombre}
Correo: ${email}
Teléfono: ${telefono || "-"}
Mensaje:
${mensaje}
      `.trim(),
      html: `
      <div style="margin:0;padding:0;background:#f4f6fb;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6fb;padding:28px 12px;font-family:Inter,Segoe UI,Arial,sans-serif;">
          <tr>
            <td align="center">
              <table role="presentation" width="680" cellspacing="0" cellpadding="0" style="width:680px;max-width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e9eef7;box-shadow:0 10px 30px rgba(17,24,39,.10);">

                <tr>
                  <td style="padding:22px 24px;background:#0b1220;color:#ffffff;">
                    <div style="display:flex;align-items:center;gap:12px;">
                      <div style="width:40px;height:40px;border-radius:12px;background:#f4b400;display:flex;align-items:center;justify-content:center;font-weight:900;color:#0b1220;">
                        M&M
                      </div>
                      <div>
                        <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.9;">
                          Web • Formulario de Contacto
                        </div>
                        <div style="font-size:22px;font-weight:900;margin-top:4px;line-height:1.2;">
                          Nuevo mensaje recibido
                        </div>
                      </div>
                    </div>

                    <div style="margin-top:14px;">
                      <span style="display:inline-block;background:#f4b400;color:#0b1220;font-weight:800;font-size:12px;padding:7px 10px;border-radius:999px;">
                        M&M Contratistas
                      </span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding:22px 24px;">
                    <p style="margin:0 0 14px;color:#111827;font-size:14px;line-height:1.7;">
                      Has recibido un nuevo mensaje desde el <strong>formulario de la web</strong>.
                    </p>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
                      <tr>
                        <td style="padding:12px 14px;background:#fafafa;border-bottom:1px solid #e5e7eb;">
                          <div style="font-size:12px;color:#6b7280;letter-spacing:.10em;text-transform:uppercase;font-weight:800;">
                            Datos del contacto
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;">
                            <tr>
                              <td style="width:140px;color:#6b7280;font-size:13px;font-weight:800;letter-spacing:.04em;">Nombre</td>
                              <td style="color:#111827;font-size:14px;font-weight:700;">${escapeHtml(nombre)}</td>
                            </tr>

                            <tr>
                              <td style="width:140px;color:#6b7280;font-size:13px;font-weight:800;letter-spacing:.04em;">Correo</td>
                              <td style="color:#111827;font-size:14px;font-weight:700;">
                                <a href="mailto:${escapeAttr(email)}" style="color:#111827;text-decoration:none;border-bottom:2px solid #f4b400;">
                                  ${escapeHtml(email)}
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td style="width:140px;color:#6b7280;font-size:13px;font-weight:800;letter-spacing:.04em;">Teléfono</td>
                              <td style="color:#111827;font-size:14px;font-weight:700;">${escapeHtml(telefono || "-")}</td>
                            </tr>
                          </table>

                          <div style="margin-top:8px;font-size:12px;color:#6b7280;line-height:1.6;">
                            <strong>Nota:</strong> puedes responder a este correo y se enviará al cliente (Reply-To configurado).
                          </div>
                        </td>
                      </tr>
                    </table>

                    <div style="height:14px;"></div>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
                      <tr>
                        <td style="padding:12px 14px;background:#fafafa;border-bottom:1px solid #e5e7eb;">
                          <div style="font-size:12px;color:#6b7280;letter-spacing:.10em;text-transform:uppercase;font-weight:800;">
                            Mensaje
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px;color:#111827;font-size:14px;line-height:1.8;white-space:pre-wrap;">
                          ${escapeHtml(mensaje || "")}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:16px 24px;background:#f9fafb;border-top:1px solid #e9eef7;">
                    <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;">
                      <div style="color:#6b7280;font-size:12px;line-height:1.6;">
                        Enviado automáticamente desde la <strong>Web de M&M Contratistas</strong>.
                      </div>
                      <div style="color:#9ca3af;font-size:12px;">
                        © ${new Date().getFullYear()} M&M Contratistas
                      </div>
                    </div>
                  </td>
                </tr>

              </table>

              <div style="max-width:680px;margin-top:12px;color:#9ca3af;font-size:11px;line-height:1.5;">
                Si recibiste este correo por error, revisa el formulario del sitio para actividad inusual.
              </div>
            </td>
          </tr>
        </table>
      </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return Response.json({ success: false, error: String(error?.message || error) }, { status: 500 });
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(str = "") {
  return escapeHtml(str).replaceAll("`", "&#096;");
}
