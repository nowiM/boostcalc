import React from 'react';

const Calculation = ({principal, days, compoundFrequency}) => {

    const calculation = (principal, days, compoundFrequency) => {
        let row = []; //테이블 태그의 row값을 저장함
        let profit = 0; //수익
        let sumValue = 0; //총액
        let profitRate = 0; //수익률

        const realCompoundFrequency = compoundFrequency / 100;

        for(let i = 1; i <= days; i++) {
            if(i === 1) {
                profit = principal * realCompoundFrequency;
                sumValue = principal + profit;
            }
            else {
                profit = sumValue * realCompoundFrequency;
                sumValue += profit
            }

            profitRate = (sumValue - principal) / principal * 100;

            row.push(
                <tr key={i}>
                    <th>{i}</th>
                    <th>{Math.floor(profit)}</th>
                    <th>{Math.floor(sumValue)}</th>
                    <th>{Math.floor(profitRate * 100) / 100}</th>
                </tr>
            ); 
        }

        return row

    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>기간</th>
                        <th>수익(₩)</th>
                        <th>총액(₩)</th>
                        <th>수익율</th>
                    </tr>
                </thead>
                <tbody>
                    {calculation(principal, days, compoundFrequency)}
                </tbody>
            </table>
        </div>
    )
}

export default Calculation;