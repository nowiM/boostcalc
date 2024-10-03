import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Calculation from './components/Calculation';
import CompoundInterestInfo from './components/CompoundInterestInfo';
import DefaultMode from './components/DefaultMode';
import SavingsMode from './components/SavingsMode';
import SavingsCalculation from './components/SavingsCalculation';
import './App.css';

function App() {
  const [values, setValues] = useState({
    principal: 1000000,
    days: 10,
    compoundFrequency: 5
  });

  const [calculatedValues, setcalCulatedValues] = useState({
    calculatedPrincipal: 1000000,
    calculatedDays: 10,
    calculatedCompoundFrequency: 5
  });

  const [savingValues, setSavingValues] = useState({
    principal: 100000, // 시작금액
    month: 100000, // 월 적립 금액
    investment: 3, // 투자기간
    investmentPeriod: 5, // 이자율
    frequency: 1 // 복리 방식
  });

  const [calculatedSavingValues, setcalCulatedSavingValues] = useState({
    calculatedSavingprincipal: 100000, // 시작금액
    calculatedSavingmonth: 100000, // 월 적립 금액
    calculatedSavinginvestment: 3, // 투자기간
    calculatedSavinginvestmentPeriod: 5, // 이자율
    calculatedSavingfrequency: 1 // 복리 방식
  });

  const [showCalculation, setShowCalculation] = useState(false);
  
  const [selectedMode, setSelectedMode] = useState('default'); // 기본 모드로 설정

  const handleDeFaultCalculate = () => {
    setcalCulatedValues({
      calculatedPrincipal: Number(values.principal),
      calculatedDays: Number(values.days),
      calculatedCompoundFrequency: Number(values.compoundFrequency)
    });
    setShowCalculation(true);  // Calculation 컴포넌트를 표시
  };

  const handleSavingCalculate = () => {
    console.log('나 실행됨')
    setcalCulatedSavingValues({
      calculatedSavingprincipal: Number(savingValues.principal), // 시작금액
      calculatedSavingmonth: Number(savingValues.days), // 월 적립 금액
      calculatedSavinginvestment: Number(savingValues.investment), // 투자기간
      calculatedSavinginvestmentPeriod: Number(savingValues.investmentPeriod), // 이자율
      calculatedSavingfrequency: Number(savingValues.frequency) // 복리 방식
    });
    setShowCalculation(true);  // Calculation 컴포넌트를 표시
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSavingInputChange = (event) => {
    const { name, value } = event.target;
    setSavingValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="body-container">
          <div className="mode-selector">
            {/* leftLink와 rightLink에 클래스 적용 */}
            <div className={`leftLink ${selectedMode === 'default' ? 'active' : ''}`}>
              <Link to="/default" onClick={() => { setShowCalculation(false); setSelectedMode('default') }}>
                기본 복리
              </Link>
            </div>
            
            <div className={`rightLink ${selectedMode === 'saving' ? 'active' : ''}`}>
              <Link to="/saving" onClick={() => { setShowCalculation(false); setSelectedMode('saving') }}>
                적립식 복리
              </Link>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="/default" />} />

            <Route path="/default" element={
              <>
                <DefaultMode 
                  values={values}
                  handleInputChange={handleInputChange}
                />
                <button onClick={handleDeFaultCalculate}>계산하기</button>
                {showCalculation && (
                  <Calculation
                    principal={calculatedValues.calculatedPrincipal}
                    days={calculatedValues.calculatedDays}
                    compoundFrequency={calculatedValues.calculatedCompoundFrequency}
                  />
                )}
              </>
            } />
            
            <Route path="/saving" element={
              <>
                <SavingsMode 
                  values={savingValues}
                  handleInputChange={handleSavingInputChange}
                />
                <button onClick={handleSavingCalculate}>계산하기</button>
                {showCalculation && (
                  <SavingsCalculation
                    principal={calculatedSavingValues.calculatedSavingprincipal}
                    month={calculatedSavingValues.calculatedSavingmonth}
                    interest={calculatedSavingValues.calculatedSavinginvestment}
                    investmentPeriod={calculatedSavingValues.calculatedSavinginvestmentPeriod}
                    frequency={calculatedSavingValues.calculatedSavingfrequency}
                  />
                )}
              </>
            } />
          </Routes>

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

          <CompoundInterestInfo />
        </div>
      </div>
    </Router>
  );
}

export default App;
