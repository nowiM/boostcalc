import React from 'react';

const SavingSummary = () => {
    return (
        <div className='calculation-summary'>
            <div className="summary-titles">
                <div className="titleAndValue">
                    <span className='title'>총 수익</span>
                </div>
                <div className="titleAndValue">
                    <span className='title'>총 투자금</span>
                </div>
                <div className="titleAndValue">
                    <span className='title'>최종 금액</span>
                </div>
            </div>
            <div className="summary-table">
                <table>
                    <thead>
                        <tr>
                            <th className='border-delete'>#</th>
                            <th className='border-delete'>수익(₩)</th>
                            <th className='border-delete'>총액(₩)</th>
                            <th className='border-delete'>수익율</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}

export default SavingSummary;