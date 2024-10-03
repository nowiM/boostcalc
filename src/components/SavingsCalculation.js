import React, {useMemo} from 'react';

const SavingsCalculation = ({ principal, month, interest, investmentPeriod, frequency }) => {
    const row = useMemo(() => {
        let row = [] //테이블 태그의  row값을 저장함
        let months = interest * 12;
        let savedMoney = principal; //원금
        let interestRate = principal * ((investmentPeriod / 12) * 1000 / 1000) / 100 ;
        let finalAcount = 0; //최종금액
        let profit = 0;
        let total = 0;
        for(let i = 1; i <= months; i++) {
            // 1. 월 이자 수익을 구한다.
            profit += interestRate
            // 2. 최종 금액을 구한다.
            finalAcount += principal + Math.round(profit);
            console.log(finalAcount);
            // 3. row에 값들을 넣는다.
            row.push(
                <tr key={i}>
                    <th>{i}</th>
                    <th>{savedMoney}</th>
                    <th>{Math.round(profit)}</th>
                    <th>{finalAcount}</th>
                </tr>
            )

            // 4. 원금을 구한다. 
            savedMoney += principal + Math.round(profit);
        }

        return row;
    }, [principal, month, interest, investmentPeriod, frequency])

    return (
        <div className=''>
            <h2>적립식 복리 계산기</h2>
            <table>
                <thead>
                    <tr>
                        <th>월</th>
                        <th>원금</th>
                        <th>수익</th>
                        <th>최종금액</th>
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
