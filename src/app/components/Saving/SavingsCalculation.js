'use client';
import React, {useMemo} from 'react';

const SavingsCalculation = ({ principal, monthlyDeposit, days, compoundFrequency }) => {
    const { totalProfit, totalAmount, sumProfit, row } = useMemo(() => {
        let row = [] //테이블 태그의  row값을 저장함
        let profit = 0; // 수익
        let totalProfit = 0; // 총 수익금
        let finalAmount = principal; // 최종금액(원금)
        let sumProfit = 0; // 투자로 얻은 최종금액
        let totalAmount = 0; // 총 투자금액 
        const interestRate = compoundFrequency / 100 // 이자율(%)을 소수점으로 변환
    
        // 1. 복리 횟수까지 반복한다.
        for(let i = 1; i <= days; i++) {
            // 1.1. table 태그에 출력 => 원금으로 얻은 수익금을 구한다.
            profit = finalAmount * interestRate;
            // 1.2. span 태그에 출력 => 총 수익금을 구한다.
            totalProfit += Math.round(profit);
            // 1.3. table 태그에 출력 => 투자로 얻은 최종 금액
            sumProfit = finalAmount + profit;
            // 1.4. span 태그에 출력 => 총 투자금액을 구한다.
            totalAmount += monthlyDeposit;
            // 1.5. row에 값들을 넣는다.
            row.push(
                <tr key={i}>
                    <th>{i}</th>
                    <th>{Math.round(finalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                    <th className='profit'>{profit >= 1000 ? `+${Math.round(profit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : `+${Math.floor(Math.round(profit * 100) / 100)}`}</th>
                    <th className='totalFinalAcount'>{Math.round(sumProfit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                </tr>
            )
            // 1.6. table 태그에 출력 => 원금을 구한다.
            finalAmount += profit + monthlyDeposit;
        }
        return { totalProfit, totalAmount, sumProfit, row };
    }, [principal, monthlyDeposit, days, compoundFrequency])

    return (
        <div className='calculation-summary'>
            <div className="summary-titles">
                <div className="titleAndValue">
                    <span className='title'>총 수익</span>
                    {/* 정규식을 활용해 숫자의 자릿수를 알아보기 쉽게 콤마 추가 */}
                    <span className="value green">{`₩${totalProfit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span> 
                </div>
                <div className="titleAndValue">
                    <span className='title'>총 투자금</span>
                    <span className='value'>{`₩${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>
                <div className="titleAndValue">
                    <span className='title'>최종 금액</span>
                    <span className='value totalFinalAcount'>{`₩${Math.floor(sumProfit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>원금(₩)</th>
                        <th>수익(₩)</th>
                        <th>최종금액(₩)</th>
                    </tr>
                </thead>
                <tbody>
                    { row }
                </tbody>
            </table>

        </div>
    );
};

export default SavingsCalculation;
