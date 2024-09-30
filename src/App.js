import React, { useState } from 'react';
import Calculation from './components/Calculation';
import './App.css';

function App() {
  const [principal, setPrincipal] = useState(1000000);
  const [days, setDays] = useState(10);
  const [compoundFrequency, setCompoundFrequency] = useState(5);

  // 계산할 때 사용할 값들을 따로 저장할 상태
  const [calculatedPrincipal, setCalculatedPrincipal] = useState(1000000);
  const [calculatedDays, setCalculatedDays] = useState(10);
  const [calculatedCompoundFrequency, setCalculatedCompoundFrequency] = useState(5);

  const [showCalculation, setShowCalculation] = useState(false);

  // 계산하기 버튼을 클릭하면 Calculation 컴포넌트에 값을 넘겨주도록 상태 업데이트
  const handleCalculate = () => {
    setCalculatedPrincipal(principal);
    setCalculatedDays(days);
    setCalculatedCompoundFrequency(compoundFrequency);
    setShowCalculation(true);  // Calculation 컴포넌트를 표시
  };

  return (
    <div className="App">
      <div>
        <span>금액(₩)</span>
        <input
          type="text"
          value={principal}
          onChange={(event) => setPrincipal(event.target.value)}
        />
      </div>

      <div>
        <span>복리 횟수</span>
        <input
          type="text"
          value={days}
          onChange={(event) => setDays(event.target.value)}
        />
      </div>

      <div>
        <span>이자율</span>
        <input
          type="text"
          value={compoundFrequency}
          onChange={(event) => setCompoundFrequency(event.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>계산하기</button>
      {showCalculation && (
        <Calculation
          principal={Number(calculatedPrincipal)}
          days={Number(calculatedDays)}
          compoundFrequency={Number(calculatedCompoundFrequency)}
        />
      )}
    </div>
  );
}

export default App;
