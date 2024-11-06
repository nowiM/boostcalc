'use client';
import React, {useMemo} from 'react';

const Calculation = ({principal, days, compoundFrequency}) => {
    
    const {sumProfit, sumTotal, row} = useMemo(() => {
        let row = []; //테이블 태그의 row값을 저장함
        let profit = 0; //수익
        let sumTotal = principal; //총액, 초기 총액은 원금으로 설정
        let sumProfit = 0; // 총 수익금
        const interestRate = compoundFrequency / 100; //이자율을 소수점으로 변환

        // 1. 복리 횟수까지 반복한다.
        for(let i = 1; i <= days; i++) {
            // 1.1. table 태그에 출력 => 원금으로 얻은 수익금을 구한다.
            profit = sumTotal * interestRate;
            // 1.2. span 태그에 출력 => 총 수익을 구한다.
            sumProfit += profit
            // 1.3. tabla => 총액, span => 최종 금액
            sumTotal += profit 
            // 1.4. 수익율을 구한다.
            const profitRate = (sumTotal / principal) * 100 - 100; //수익률 계산

            row.push(
                <tr key={i}>
                    <th>{i}</th>
                    <th className='profit'>{profit >= 1000 ? `+${Math.round(profit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : `+${Math.round(profit * 100) / 100}`}</th>
                    <th>{Math.round(sumTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
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
                    {/* 정규식을 활용해 숫자의 자릿수를 알아보기 쉽게 콤마 추가 */}
                    <span className="value green">{`₩${Math.round(sumProfit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>
                <div className="titleAndValue">
                    <span className='title'>최종 금액</span>
                    <span className='value'>{`₩${Math.round(sumTotal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>
            </div>
            <div className="summary-table">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
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