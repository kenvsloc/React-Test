import { useState } from "react";

function TermsOfUse() {
  const [showTerms, setShowTerms] = useState(false);

  function handleToggleTerms() {
    setShowTerms(!showTerms); // Đảo ngược trạng thái hiện tại
  }

  return (
    <section>
      <button onClick={handleToggleTerms}>
        {showTerms ? "Hide Terms of Use Summary" : "Show Terms of Use Summary"}
      </button>

      {showTerms && (
        <>
          <h1>Huy Chu</h1>
          <p>NumberPhone: 0986675807</p>
          <p>Email: huykenvsloc@gmail.com</p>
        </>
      )}
    </section>
  );
}

export default TermsOfUse;