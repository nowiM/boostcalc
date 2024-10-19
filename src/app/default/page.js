'use client';
import { useState } from "react";
import DefaultMode from "../components/DefaultMode";
import Calculation from "../components/Calculation";
import CompoundInterestInfo from '../components/DafultCompoundInfo'

export default function DefaultPage() {
    const [values, setValues] = useState({
        principal: 1000000,
        days: 10,
        compoundFrequency: 5,
    });
    
    const [calculatedValues, setCalculatedValues] = useState({
        calculatedPrincipal: 1000000,
        calculatedDays: 10,
        calculatedCompoundFrequency: 5,
    });

    const [showCalculation, setShowCalculation] = useState(false);

    const handleDeFaultCalculate = () => {
        setCalculatedValues({
        calculatedPrincipal: Number(values.principal),
        calculatedDays: Number(values.days),
        calculatedCompoundFrequency: Number(values.compoundFrequency),
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
                <Calculation
                principal={calculatedValues.calculatedPrincipal}
                days={calculatedValues.calculatedDays}
                compoundFrequency={calculatedValues.calculatedCompoundFrequency}
                />
            )}

            <CompoundInterestInfo />
        </>
    );
}
