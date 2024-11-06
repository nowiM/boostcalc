'use client';
import { useState } from "react";
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

    return (
        <>
            <SavingsMode values={savingValues} handleInputChange={handleSavingInputChange} />

            <button onClick={handleSavingCalculate}>계산하기</button>

            {showCalculation && (
                <SavingsCalculation
                    principal={calculatedSavingValues.calculatedSavingPrincipal}
                    monthlyDeposit={calculatedSavingValues.calculatedSavingMonthlyDeposit}
                    days={calculatedSavingValues.calculatedSavingDays}
                    compoundFrequency={calculatedSavingValues.calculatedSavingCompoundFrequency}
                />
            )}

            {!showCalculation && (
                <SavingSummary />
            )}

            <SavingCompoundInfo />
        </>
    );
}
