"use client";

import { useEffect, useState } from "react";

interface Submission {
  id: number;
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

export default function ViewSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filtered, setFiltered] = useState<Submission[]>([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    fetch("/datas/submissions.json")
      .then((res) => res.json())
      .then((json: Submission[]) => {
        setSubmissions(json);
        setFiltered(json);
      })
      .catch((err) => console.error("Error fetching submissions:", err));
  }, []);

  const filterTeam = (team: string) => {
    setSelectedTeam(team);

    if (!team) {
      setFiltered(submissions);
      return;
    }

    const filteredData = submissions.filter(
      (item) => item.team1 === team || item.team2 === team
    );

    setFiltered(filteredData);
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-[#295393] mb-8">
        View Submissions
      </h1>

      {/* Filter Section */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedTeam}
          onChange={(e) => filterTeam(e.target.value)}
          className="border border-[#295393] rounded-lg px-4 py-2 text-center"
        >
          <option value="">Filter by Team</option>
          <option value="Project_and_Research_Team">Project and Research</option>
          <option value="Outreach_Management_Team">Outreach Management</option>
          <option value="Event_Management_Team">Event Management</option>
          <option value="Social_Media_and_PR_Team">Social Media & PR</option>
          <option value="Technical_Team">Technical</option>
          <option value="Finance_Team">Finance</option>
        </select>
      </div>

      {/* Display Each Submission */}
      <div className="flex flex-col gap-8">
        {filtered.map((item) => (
          <div key={item.id} className="border p-6 rounded-xl bg-gray-50 shadow">
            <h2 className="text-xl font-bold text-[#295393]">ID: {item.id}</h2>

            {/* Info Section */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Year:</strong> {item.year}</p>
              <p><strong>Department:</strong> {item.depart}</p>
              <p><strong>Roll No:</strong> {item.rollNo}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
              <p><strong>Campus:</strong> {item.campus}</p>
              <p>
                <strong>LinkedIn URL:</strong>{" "}
                <a
                    href={item.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    {item.linkedIn}
                </a>
              </p>
              <p><strong>Priority 1:</strong> {item.team1}</p>
              <p><strong>Priority 2:</strong> {item.team2}</p>
            </div>

            {/* Questions + Answers */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#295393] mb-3">
                Questions & Answers
              </h3>

              <div className="flex flex-col gap-4">
                {item.selectedQuestions.map((q, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white border rounded-lg shadow-sm"
                  >
                    <p className="font-semibold text-[#295393]">
                      Q{index + 1}: {q}
                    </p>
                    <p className="mt-2 text-gray-700">
                      <strong>Answer:</strong> {item.answers[index] || "No answer"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No submissions for this team.</p>
      )}
    </div>
  );
}