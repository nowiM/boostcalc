import React from 'react';

const SavingsMode = ({ values, handleInputChange }) => {
    return (
        <div className="savingMode">
            <h1>적립식 복리 계산기</h1>
            <div className="input-group">
                <span className='title'>초기 금액(₩)</span>
                <input
                type="text"
                name="principal"
                value={values.principal}
                onChange={handleInputChange} // 부모로부터 받은 상태 업데이트 함수 사용
                />
            </div>

            <div className="input-group">
                <span className='title'>월 적립금(₩)</span>
                <input
                type="text"
                name="month"
                value={values.month}
                onChange={handleInputChange} // 부모로부터 받은 상태 업데이트 함수 사용
                />
            </div>

            <div className="input-group">
                <span className='title'>투자 기간</span>
                <input
                type="text"
                name="investment"
                value={values.investment}
                onChange={handleInputChange} // 부모로부터 받은 상태 업데이트 함수 사용
                />
            </div>

            <div className="input-group">
                <span className='title'>이자율 %</span>
                <input
                type="text"
                name="investmentPeriod"
                value={values.investmentPeriod}
                onChange={handleInputChange}
                />
            </div>

            <div className="input-group">
                <span className='title'>복리 기간</span>
                <select
                name="frequency"
                value={values.frequency}
                onChange={handleInputChange}
                >
                <option value="1">연복리</option>
                <option value="2">반기복리</option>
                <option value="4">분기복리</option>
                <option value="12">월복리</option>
                <option value="365">일복리</option>
                </select>
            </div>
        </div>
    );
}

export default SavingsMode;
