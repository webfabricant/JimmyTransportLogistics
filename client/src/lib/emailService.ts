import { z } from "zod";

const emailSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(1, "Message is required"),
});

export type EmailFormData = z.infer<typeof emailSchema>;

export async function sendContactEmail(data: EmailFormData): Promise<boolean> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'info@jimmytransportltd.co.uk',
        from: 'noreply@jimmytransportltd.co.uk',
        subject: `New Quote Request - ${data.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Quote Request</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
              <p><strong>Service Required:</strong> ${data.service}</p>
            </div>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message</h3>
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af;"><strong>Note:</strong> Please respond to this inquiry within 2 hours as promised on the website.</p>
            </div>
          </div>
        `,
        text: `
New Quote Request

Contact Information:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Service Required: ${data.service}

Message:
${data.message}

Note: Please respond to this inquiry within 2 hours as promised on the website.
        `
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

export { emailSchema };