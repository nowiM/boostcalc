'use client';
import { useState, useRef } from "react";
import html2canvas from 'html2canvas';
import DefaultMode from "../components/Default/DefaultMode";
import DefaultSummary from '../components/Default/DefaultSummary'
import DafaultCalculation from "../components/Default/DafaultCalculation";
import CompoundInterestInfo from '../components/Default/DafultCompoundInfo'

export default function DefaultPage() {
    // 입력값들을 저장한다.
    const [values, setValues] = useState({
        principal: '1,000,000', // 초기 금액
        days: 10, // 복리 횟수
        compoundFrequency: '5%', // 수익율(이자율)
    });
    
    // DafaultCalculation 컴포넌트에 입력값들을 최종적으로 넘겨지는 값들을 저장한다.
    const [calculatedValues, setCalculatedValues] = useState({
        calculatedPrincipal: '1,000,000', // 초기 금액
        calculatedDays: 10, // 복리 횟수
        calculatedCompoundFrequency: '5%', // 수익율(이자율)
    });

    const [showCalculation, setShowCalculation] = useState(false);

    const handleDeFaultCalculate = () => {
        setCalculatedValues({
        calculatedPrincipal: Number(values.principal.replace(/[,]/g, '')),
        calculatedDays: Number(values.days),
        calculatedCompoundFrequency: Number(values.compoundFrequency.replace(/[,%]/g, '')),
        });
        setShowCalculation(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
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
                <DefaultMode values={values} handleInputChange={handleInputChange} />

                <div className="calculate-button-container" ref={excludeRef1}>
                    <button className='calculate-button' onClick={handleDeFaultCalculate}>계산하기</button>
                </div>

                {showCalculation && (
                    <div className="calculation-result-container">
                        <DafaultCalculation
                            principal={calculatedValues.calculatedPrincipal}
                            days={calculatedValues.calculatedDays}
                            compoundFrequency={calculatedValues.calculatedCompoundFrequency}
                        />
                        <div className="image-download-button-container" ref={excludeRef2}>
                            <button className='image-download-button' onClick={handleCapture}>사진</button>
                        </div>
                    </div>
                )}
            </div>

            {!showCalculation && (
                <DefaultSummary />
            )}

            <CompoundInterestInfo />
        </>
    );
}
