'use client';
import React, {useMemo} from 'react';

const SavingsCalculation = ({ principal, month, interest, investmentPeriod }) => {
    const { totalProfit, totalFinalAcount, totalAmount, row } = useMemo(() => {
        let row = [] //테이블 태그의  row값을 저장함
        let months = interest * 12;
        let savedMoney = principal; //원금
        let interestRate = principal * ((investmentPeriod / 12) * 1000 / 1000) / 100 ;
        let finalAcount = 0; //최종금액
        let profit = 0;
        let totalProfit = 0;
        let totalFinalAcount = 0;
        let totalAmount = 0;

        for(let i = 1; i <= months; i++) {
            // 1. 월 이자 수익을 구한다.
            profit += interestRate
            totalProfit += Math.round(profit);
            // 2. 최종 금액을 구한다.
            finalAcount += principal + Math.round(profit);
            if(i === months) totalFinalAcount = finalAcount;
            // 3. row에 값들을 넣는다.
            row.push(
                <tr key={i}>
                    <th>{i}</th>
                    <th>{savedMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                    <th className='profit'>{`+${Math.round(profit).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</th>
                    <th className='totalFinalAcount'>{finalAcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                </tr>
            )
            
            //총 투자금액
            totalAmount += principal
            // 4. 원금을 구한다. 
            savedMoney += principal + Math.round(profit);
        }

        return { totalProfit, totalFinalAcount, totalAmount, row };
    }, [principal, month, interest, investmentPeriod])

    return (
        <div className='calculation-summary'>
            <div className="summary-titles">
                <div className="titleAndValue">
                    <span className='title'>총 수익</span>
                    <span className="value green">{`₩${totalProfit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>
                <div className="titleAndValue">
                    <span className='title'>총 투자금</span>
                    <span className='value'>{`₩${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>
                <div className="titleAndValue">
                    <span className='title'>최종 금액</span>
                    <span className='value totalFinalAcount'>{`₩${totalFinalAcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>월</th>
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
