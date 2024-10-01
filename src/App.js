import React, { useState } from 'react';
import Nav from './components/Nav';
import Calculation from './components/Calculation';
import CompoundInterestInfo from './components/CompoundInterestInfo';
import './App.css';

function App() {
  const [values, setValues] = useState({
    principal: 1000000,
    days: 10,
    compoundFrequency: 5
  });

  // 계산할 때 사용할 값들을 따로 저장할 상태
  const [calculatedValues, setcalCulatedValues] = useState({
    calculatedPrincipal: 1000000,
    calculatedDays: 10,
    calculatedCompoundFrequency: 5
  });

  const [showCalculation, setShowCalculation] = useState(false);

  // 계산하기 버튼을 클릭하면 Calculation 컴포넌트에 값을 넘겨주도록 상태 업데이트
  const handleCalculate = () => {
    setcalCulatedValues({
      calculatedPrincipal: Number(values.principal),
      calculatedDays: Number(values.days),
      calculatedCompoundFrequency: Number(values.compoundFrequency)
    });
    setShowCalculation(true);  // Calculation 컴포넌트를 표시
  };

  return (
    <div className="App">
      <Nav />
      <div className="body-container">
        <div className="input-group">
          <span className='title'>초기 금액(₩)</span>
          <input
            type="text"
            name='principal'
            value={values.principal}
            onChange={(event) => setValues({
              ...values,
              [event.target.name]: event.target.value
            })}
          />
        </div>

        <div className="input-group">
          <span className='title'>복리 횟수(₩)</span>
          <input
            type="text"
            name='days'
            value={values.days}
            onChange={(event) => setValues({
              ...values,
              [event.target.name]: event.target.value
            })}
          />
        </div>

        <div className="input-group">
          <span className='title'>수익율(이자율 %)</span>
          <input
            type="text"
            name='compoundFrequency'
            value={values.compoundFrequency}
            onChange={(event) => setValues({
              ...values,
              [event.target.name]: event.target.value
            })}
          />
        </div>

        <button onClick={handleCalculate}>계산하기</button>
        
        {!showCalculation && (
          <div className='calculation-summary'>
            <div className='summary-titles'>
              <span className='title'>총 수익</span>
              <span className='title'>최종 금액</span>
            </div>
            <div className="summary-table">
            <table>
              <thead>
                <tr>
                  <th>기간</th>
                  <th>수익(₩)</th>
                  <th>총액(₩)</th>
                  <th>수익율</th>
                </tr>
              </thead>
            </table>
            </div>
          </div>
          
        )}
        {showCalculation && (
        <Calculation
          principal={calculatedValues.calculatedPrincipal}
          days={calculatedValues.calculatedDays}
          compoundFrequency={calculatedValues.calculatedCompoundFrequency}
        />
        )}

        <CompoundInterestInfo />
        </div>
      </div>
  );
}

export default App;
