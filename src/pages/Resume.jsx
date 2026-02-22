import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center relative overflow-hidden">
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-gray-700 hover:text-black font-medium text-lg"
      >
        ← Back
      </button>

      {/* Resume Card */}
      <iframe
        src={`${import.meta.env.BASE_URL}resume.pdf#toolbar=0`}
        title="Resume"
        className="w-full h-full"
      />
    </div>
  );
}