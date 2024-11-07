'use client';
import { useState, useRef } from "react";
import html2canvas from 'html2canvas';
import SavingsMode from "../components/Saving/SavingsMode";
import SavingSummary from '../components/Saving/SavingSummary'
import SavingsCalculation from "../components/Saving/SavingsCalculation";
import SavingCompoundInfo from '../components/Saving/SavingCompoundInfo'

export default function SavingPage() {
    // 입력값들을 저장한다.
    const [savingValues, setSavingValues] = useState({
        principal: '100,000', //초기 금액
        monthlyDeposit: '100,000', // 월 적립금
        days: 10, // 복리 횟수
        compoundFrequency: '5%', // 수익율(이자율)
    });

    //SavingsCalculation 컴포넌트에 입력값들을 최종적으로 넘겨지는 값들을 저장한다.
    const [calculatedSavingValues, setCalculatedSavingValues] = useState({
        calculatedSavingPrincipal: '100,000', //초기 금액
        calculatedSavingMonthlyDeposit: '100,000', // 월 적립금
        calculatedSavingDays: 10, // 복리 횟수
        calculatedSavingCompoundFrequency: '5%',// 수익율(이자율)
    });

    const [showCalculation, setShowCalculation] = useState(false);

    const handleSavingCalculate = () => {
        setCalculatedSavingValues({
        calculatedSavingPrincipal: Number(savingValues.principal.replace(/[,]/g, '')),
        calculatedSavingMonthlyDeposit: Number(savingValues.monthlyDeposit.replace(/[,]/g, '')),
        calculatedSavingDays: Number(savingValues.days),
        calculatedSavingCompoundFrequency: Number(savingValues.compoundFrequency.replace(/[,%]/g, '')),
        });
        setShowCalculation(true);
    };

    const handleSavingInputChange = (event) => {
        const { name, value } = event.target;
        setSavingValues((prevValues) => ({
        ...prevValues,
        [name]: value,
        }));
    };

    // 복리 계산 결과 이미지 저장 로직 구현
    const captureRef = useRef();
    const excludeRef1 = useRef(); // "계산하기" 버튼을 위한 ref
    const excludeRef2 = useRef(); // "사진" 버튼을 위한 ref

    const handleCapture = async () => {
        const element = captureRef.current;

        // 두 버튼을 캡처에서 제외하기 위해 숨김 처리
        if (excludeRef1.current) excludeRef1.current.style.display = 'none';
        if (excludeRef2.current) excludeRef2.current.style.display = 'none';

        if (element) {
            // 캡처 진행
            const canvas = await html2canvas(element);
            const dataURL = canvas.toDataURL('image/png');

            // 다운로드 링크 생성
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'compound_interest_calculator.png';
            link.click();
        }

        // 캡처가 완료된 후 숨겼던 버튼을 다시 표시
        if (excludeRef1.current) excludeRef1.current.style.display = '';
        if (excludeRef2.current) excludeRef2.current.style.display = '';
    };

    return (
        <>
            <div className="capture-container" ref={captureRef}>
                <SavingsMode values={savingValues} handleInputChange={handleSavingInputChange} />
                
                <div className="calculate-button-container" ref={excludeRef1}>
                    <button className='calculate-button' onClick={handleSavingCalculate}>계산하기</button>
                </div>

                {showCalculation && (
                    <div className="calculation-result-container">
                        <SavingsCalculation
                            principal={calculatedSavingValues.calculatedSavingPrincipal}
                            monthlyDeposit={calculatedSavingValues.calculatedSavingMonthlyDeposit}
                            days={calculatedSavingValues.calculatedSavingDays}
                            compoundFrequency={calculatedSavingValues.calculatedSavingCompoundFrequency}
                        />
                        <div className="image-download-button-container" ref={excludeRef2}>
                            <button className='image-download-button' onClick={handleCapture}>사진</button>
                        </div>
                    </div>
                )}

                {!showCalculation && (
                    <SavingSummary />
                )}


            </div>
            <SavingCompoundInfo />
        </>
    );
}
