import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// Define a type for the form data
interface FormData {
  name: string;
  email: string;
  year: string;
  depart: string;
  rollno: string,
  phone: string,
  team1: string,
  team2: string,
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Path to JSON file
    const filePath = path.join(process.cwd(), "public", "datas", "submissions.json");

    // Read existing data
    let existingData: (FormData & { id: number })[] = [];
    try {
      const fileContents = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(fileContents);
    } catch (err) {
      // file may not exist yet
      existingData = [];
    }

    // Generate unique id
    const newId = existingData.length > 0 ? existingData[existingData.length - 1].id + 1 : 1;

    const newEntry = {
      id: newId,
      ...formData
    };

    existingData.push(newEntry);

    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: "Form saved successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save form" }, { status: 500 });
  }
}
