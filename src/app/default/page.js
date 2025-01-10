'use client';
import { useState } from "react";
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

    return (
        <>
            <DefaultMode values={values} handleInputChange={handleInputChange} />
            <button onClick={handleDeFaultCalculate}>계산하기</button>
            {showCalculation && (
                <DafaultCalculation
                    principal={calculatedValues.calculatedPrincipal}
                    days={calculatedValues.calculatedDays}
                    compoundFrequency={calculatedValues.calculatedCompoundFrequency}
                />
            )}

            {!showCalculation && (
                <DefaultSummary />
            )}

            <CompoundInterestInfo />
        </>
    );
}
