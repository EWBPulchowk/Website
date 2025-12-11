import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

interface FormData {
  name: string;
  email: string;
  year: string;
  depart: string;
  rollNo: string;
  phone: string;
  campus: string;
  linkedIn: string;
  team1: string;
  team2: string;
  selectedQuestions: string[];
  answers: string[];
}

// POST: Save form submission
export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    const client = await clientPromise;
    const db = client.db("ewb_db"); // your database name
    const collection = db.collection("submissions");

    const result = await collection.insertOne({
      ...formData,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Form saved successfully!", id: result.insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save form" }, { status: 500 });
  }
}

// GET: Fetch all submissions
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ewb_db");
    const collection = db.collection("submissions");

    const submissions = await collection
      .find({})
      .sort({ createdAt: -1 }) // newest first
      .toArray();

    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
}
