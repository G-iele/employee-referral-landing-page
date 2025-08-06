'use server';
import axios from 'axios';

type Response = {
  success: boolean;
  message: string;
};

export async function saveEmail(
  _prevState: Response,
  formData: FormData
): Promise<Response> {
  const emailFromData = formData.get('email');

  if (!emailFromData || typeof emailFromData !== 'string') {
    return { success: false, message: 'Email is required.' };
  }

  const email: string = emailFromData.trim();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return { success: false, message: 'Invalid email format.' };
  }

  try {
    const getResponse = await axios.get(
      `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_BIN_ID}/latest`,
      {
        headers: {
          'X-Master-Key': process.env.JSONBIN_SECRET!,
          'X-Access-Key': process.env.JSONBIN_ACCESS!
        }
      }
    );

    const existingEmail: string = getResponse.data?.record?.email || '';

    if (existingEmail.toLowerCase() === email.toLowerCase()) {
      return {
        success: false,
        message: 'This email was already submitted.'
      };
    }

    await axios.put(
      `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_BIN_ID}`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': process.env.JSONBIN_SECRET,
          'X-Access-Key': process.env.JSONBIN_ACCESS
        }
      }
    );

    return {
      success: true,
      message: 'Thank you! Your referral link has been sent.'
    };
  } catch (error) {
    console.error('Failed to save email:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.'
    };
  }
}
