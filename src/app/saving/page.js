'use client';
import { useState } from "react";
import SavingsMode from "../components/SavingsMode";
import SavingsCalculation from "../components/SavingsCalculation";
import SavingCompoundInfo from '../components/SavingCompoundInfo'

export default function SavingPage() {
    const [savingValues, setSavingValues] = useState({
        principal: 100000,
        month: 100000,
        investment: 3,
        investmentPeriod: 5,
    });

    const [calculatedSavingValues, setCalculatedSavingValues] = useState({
        calculatedSavingprincipal: 100000,
        calculatedSavingmonth: 100000,
        calculatedSavinginvestment: 3,
        calculatedSavinginvestmentPeriod: 5,
    });

    const [showCalculation, setShowCalculation] = useState(false);

    const handleSavingCalculate = () => {
        setCalculatedSavingValues({
        calculatedSavingprincipal: Number(savingValues.principal),
        calculatedSavingmonth: Number(savingValues.month),
        calculatedSavinginvestment: Number(savingValues.investment),
        calculatedSavinginvestmentPeriod: Number(savingValues.investmentPeriod),
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
                principal={calculatedSavingValues.calculatedSavingprincipal}
                month={calculatedSavingValues.calculatedSavingmonth}
                interest={calculatedSavingValues.calculatedSavinginvestment}
                investmentPeriod={calculatedSavingValues.calculatedSavinginvestmentPeriod}
                />
            )}

            <SavingCompoundInfo />
        </>
    );
}
