import { NextResponse } from "next/server";
import { google } from "googleapis";

// Cache the auth and sheets clients
let auth: any = null;
let sheets: any = null;

function getGoogleClients() {
  if (!auth || !sheets) {
    auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_ACCOUNT_EMAIL,
        private_key: process.env
          .GOOGLE_SHEETS_PRIVATE_KEY!.split(String.raw`\n`)
          .join("\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    sheets = google.sheets({ version: "v4", auth });
  }
  return sheets;
}

const SPREADSHEET_IDS = {
  'Project and Research': process.env.PROJECT_RESEARCH_SHEET_ID,
  'Outreach': process.env.OUTREACH_SHEET_ID,
  'Technical': process.env.TECHNICAL_SHEET_ID,
  'Sponsorship': process.env.SPONSORSHIP_SHEET_ID
};
export async function POST(request: Request) {
  try {
    const [formData, sheetsClient] = await Promise.all([
      request.json(),
      getGoogleClients(),
    ]);

    // Process data and prepare values in one pass
    const entries = Object.entries(formData);
    const headers = [];
    const values = [];
    const spreadsheetId = SPREADSHEET_IDS[formData.unit as keyof typeof SPREADSHEET_IDS];
    
    if (!spreadsheetId) {
      return NextResponse.json({ error: "Invalid unit selection" }, { status: 400 });
    }
    headers.push("timestamp");
    values.push(new Date().toISOString());

    for (const [key, value] of entries) {
      headers.push(key);
      values.push(Array.isArray(value) ? value.join(", ") : value);
    }


    await Promise.all([
      sheetsClient.spreadsheets.values.update({
        spreadsheetId,
        range: "Sheet1!A1",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [headers] },
      }),
      sheetsClient.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A2:Z",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [values] },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to process registration" },
      { status: 500 }
    );
  }
}