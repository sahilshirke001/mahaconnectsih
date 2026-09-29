import { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAssistant = () => {
  if (!question.trim()) {
    setAnswer("Please enter a question first.");
    return;
  }

  const q = question.toLowerCase();

  if (q.includes("scholarship") || q.includes("education")) {
    setAnswer(
      "You can explore Maharashtra education services, scholarships, student certificates and education schemes through the Services section."
    );
  } 
  else if (q.includes("certificate") || q.includes("income") || q.includes("caste")) {
    setAnswer(
      "MahaConnect can help you find information about Income, Caste, Domicile and other government certificates."
    );
  } 
  else if (q.includes("health") || q.includes("hospital") || q.includes("healthcare")) {
    setAnswer(
      "You can explore Maharashtra healthcare schemes, public health services and health assistance programs."
    );
  } 
  else if (q.includes("driving") || q.includes("vehicle") || q.includes("rto")) {
    setAnswer(
      "You can find information about driving licences, vehicle registration and other transport services."
    );
  } 
  else if (q.includes("housing") || q.includes("home")) {
    setAnswer(
      "You can explore government housing schemes, housing assistance and affordable housing programs."
    );
  } 
  else if (q.includes("job") || q.includes("employment") || q.includes("skill")) {
    setAnswer(
      "You can explore employment schemes, skill development, training programs and job assistance."
    );
  } 
  else {
    setAnswer(
      "I can help you find Maharashtra government services related to education, healthcare, certificates, transport, housing and employment."
    );
  }
};

  return (
    <div className="ai-page">
      <div className="ai-card">

        <div className="ai-icon">🤖</div>

        <h1>MahaConnect AI Assistant</h1>

        <p>
          Ask me about Maharashtra government services,
          schemes and applications.
        </p>

        <div className="ai-input">
          <input
            type="text"
            placeholder="Ask your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button onClick={askAssistant}>
            Ask →
          </button>
        </div>

        {answer && (
          <div className="ai-answer">
            <strong>AI Assistant:</strong>
            <p>{answer}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default AIAssistant;