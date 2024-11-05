'use client';
import { useState } from "react";
import DefaultMode from "../components/Default/DefaultMode";
import DefaultSummary from '../components/Default/DefaultSummary'
import DafaultCalculation from "../components/Default/DafaultCalculation";
import CompoundInterestInfo from '../components/Default/DafultCompoundInfo'

export default function DefaultPage() {
    const [values, setValues] = useState({
        principal: 1000000,
        days: 10,
        compoundFrequency: '5%',
    });
    
    const [calculatedValues, setCalculatedValues] = useState({
        calculatedPrincipal: 1000000,
        calculatedDays: 10,
        calculatedCompoundFrequency: '5%',
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
