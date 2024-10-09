'use client';
import React, {useMemo} from 'react';

const Calculation = ({principal, days, compoundFrequency}) => {
    
    const {sumProfit, sumTotal, row} = useMemo(() => {
        let row = []; //테이블 태그의 row값을 저장함
        let profit = 0; //수익
        let sumTotal = principal; //초기 총액은 원금으로 설정
        let sumProfit = 0;
        const interestRate = compoundFrequency / 100; //이자율을 소수점으로 변환

        //복리 공식: A = P * (1 + r)^n 을 기반으로 계산
        for(let i = 1; i <= days; i++) {
            profit = sumTotal * interestRate; // 수익 계산
            sumProfit += profit //총수익 계산
            sumTotal += profit // 총액 계산
            const profitRate = (sumTotal / principal) * 100 - 100; //수익률 계산
            row.push(
                <tr key={i}>
                    <th>{i}</th>
                    <th className='profit'>{profit >= 1000 ? `+${Math.round(profit)}` : `+${Math.round(profit * 100) / 100}`}</th>
                    <th>{Math.round(sumTotal)}</th>
                    <th>{`${Math.round(profitRate * 100) / 100}%`}</th>
                </tr>
            ); 
        }

        return {sumProfit, sumTotal, row};
        
    }, [principal, days, compoundFrequency]) //값이 변경될 때만 재계산

    return (
        <div className='calculation-summary'>
            <div className="summary-titles">
                <div className="titleAndValue">
                    <span className='title'>총 수익</span>
                    <span className="value green">{`₩${Math.round(sumProfit)}`}</span>
                </div>
                <div className="titleAndValue">
                    <span className='title'>최종 금액</span>
                    <span className='value'>{`₩${Math.round(sumTotal)}`}</span>
                </div>
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
                    <tbody>
                        {row}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calculation;