"use client";
import { useEffect, useState } from "react";

interface QuestionsData {
  [key: string]: string[];
}

export default function Questions() {
  const [data, setData] = useState<QuestionsData | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [depart, setDepart] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [phone, setPhone] = useState("");
  const [campus, setCampus] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  /* Load JSON */
  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch("/datas/gm_questions.json");
      const json = await res.json();
      setData(json);
    };
    fetchQuestions();
  }, []);

  /* Sync answers length */
  useEffect(() => {
    setAnswers(Array(selectedQuestions.length).fill(""));
  }, [selectedQuestions]);

  /* Generate questions */
  const showQuestions = () => {
    if (!data || !team1) return;

    const team1Key = team1.replace(/_Team$/, "");
    const team2Key = team2 === "None" ? null : team2.replace(/_Team$/, "");

    const q1 = data[team1Key] || [];
    const q2 = team2Key ? data[team2Key] || [] : [];

    setSelectedQuestions([...q1, ...q2]);
  };

  /* Submit */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedQuestions.length === 0) {
      alert("Please view and answer all questions before submitting.");
      return;
    }

    if (answers.some(ans => ans.trim() === "")) {
      alert("All questions are required.");
      return;
    }

    const formData = {
      name,
      email,
      year,
      depart,
      rollNo,
      phone,
      campus,
      linkedIn,
      team1,
      team2,
      selectedQuestions,
      answers,
    };

    try {
      const res = await fetch("/api/saveForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error);

      alert(result.message);

      setName("");
      setEmail("");
      setYear("");
      setDepart("");
      setRollNo("");
      setPhone("");
      setCampus("");
      setLinkedIn("");
      setTeam1("");
      setTeam2("");
      setSelectedQuestions([]);
      setAnswers([]);
    } catch {
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-[#295393] mb-8">
        General Members Application
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* BASIC INFO */}
        <input required placeholder="Enter your name"
          value={name} onChange={e => setName(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2" />

        <input required type="email" placeholder="Enter your email"
          value={email} onChange={e => setEmail(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2" />

        <input required placeholder="Enter your year of study"
          value={year} onChange={e => setYear(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2" />

        <input required placeholder="Enter your department"
          value={depart} onChange={e => setDepart(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2" />

        <input required placeholder="Enter your roll no"
          value={rollNo} onChange={e => setRollNo(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2" />

        <input required placeholder="Enter your phone number"
          value={phone} onChange={e => setPhone(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2" />

        <input required placeholder="Enter your campus"
          value={campus} onChange={e => setCampus(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2" />

        <input required placeholder="Enter your LinkedIn URL"
          value={linkedIn} onChange={e => setLinkedIn(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2" />

        {/* PRIORITIES */}
        <select required value={team1}
          onChange={e => setTeam1(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2">
          <option value="">Select Priority 1</option>
          <option value="Project_and_Research_Team">Project and Research Team</option>
          <option value="Outreach_Management_Team">Outreach Management Team</option>
          <option value="Event_Management_Team">Event Management Team</option>
          <option value="Social_Media_and_PR_Team">Social Media and PR Team</option>
          <option value="Technical_Team">Technical Team</option>
          <option value="Finance_Coordinator_Team">Finance Coordinator Team</option>
        </select>

        <select required value={team2}
          onChange={e => setTeam2(e.target.value)}
          className="border-2 border-[#295393] rounded-lg px-4 py-2">
          <option value="">Select Priority 2</option>
          <option value="None">None</option>
          <option value="Project_and_Research_Team" disabled={team1 === "Project_and_Research_Team"}>Project and Research Team</option>
          <option value="Outreach_Management_Team" disabled={team1 === "Outreach_Management_Team"}>Outreach Management Team</option>
          <option value="Event_Management_Team" disabled={team1 === "Event_Management_Team"}>Event Management Team</option>
          <option value="Social_Media_and_PR_Team" disabled={team1 === "Social_Media_and_PR_Team"}>Social Media and PR Team</option>
          <option value="Technical_Team" disabled={team1 === "Technical_Team"}>Technical Team</option>
          <option value="Finance_Coordinator_Team" disabled={team1 === "Finance_Coordinator_Team"}>Finance Coordinator Team</option>
        </select>

        <button type="button" onClick={showQuestions}
          className="bg-[#295393] text-white py-2 rounded-lg">
          View Questions
        </button>

        {/* QUESTIONS */}
        {selectedQuestions.map((q, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg flex flex-col gap-2">
            <p className="font-semibold text-[#295393]">{q}</p>
            <textarea
              required
              rows={5}
              value={answers[idx] || ""}
              onChange={e => {
                const copy = [...answers];
                copy[idx] = e.target.value;
                setAnswers(copy);
              }}
              className="border-2 border-[#295393] rounded-lg px-3 py-2"
            />
          </div>
        ))}

        {/* SUBMIT */}
        <input
          type="submit"
          value="Submit"
          disabled={selectedQuestions.length === 0}
          className={`py-3 font-bold rounded-lg ${
            selectedQuestions.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black text-white cursor-pointer"
          }`}
        />
      </form>
    </div>
  );
}
