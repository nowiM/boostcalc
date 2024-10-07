import React from 'react';

const DefaultMode = ({ values, handleInputChange }) => {
    return (
        <div className="calculator">
            <h1 className='mode'>기본 복리 계산기</h1>
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
                <span className='title'>복리 횟수(₩)</span>
                <input
                    type="text"
                    name="days"
                    value={values.days}
                    onChange={handleInputChange} // 부모로부터 받은 상태 업데이트 함수 사용
                />
            </div>

            <div className="input-group">
                <span className='title'>수익율(이자율 %)</span>
                <input
                    type="text"
                    name="compoundFrequency"
                    value={values.compoundFrequency}
                    onChange={handleInputChange} // 부모로부터 받은 상태 업데이트 함수 사용
                />
            </div>
        </div>
    );
};

export default DefaultMode;
