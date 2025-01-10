import React from 'react';
import { formatNumber, handleFocus, handleBlur, handleFormattedInputChange } from '../../utils/formatting';

const SavingsMode = ({ values, handleInputChange }) => {
    return (
        <div className="saving calculator">
            <h1 className='mode'>적립식 복리 계산기</h1>

            <div className="input-group">
                <span className='title'>초기 금액(₩)</span>
                <input
                    type="text"
                    name="principal"
                    value={formatNumber(values.principal)}
                    onChange={(e) => handleFormattedInputChange(e, handleInputChange)}
                    autoComplete='off' //텍스트 박스에 이전 입력값 안나오게 하는 속성
                    placeholder='₩'
                />
            </div>

            <div className="input-group">
                <span className='title'>월 적립금(₩)</span>
                <input
                    type="text"
                    name="monthlyDeposit"
                    value={formatNumber(values.monthlyDeposit)}
                    onChange={handleFormattedInputChange} 
                    autoComplete='off' 
                    placeholder='₩'
                />
            </div>

            <div className="input-group">
                <span className='title'>복리 횟수(₩)</span>
                <input
                    type="text"
                    name="days"
                    value={formatNumber(values.days)}
                    onChange={handleFormattedInputChange}
                    autoComplete='off'
                    maxLength={3}
                    placeholder='0'
                />
            </div>

            <div className="input-group">
                <span className='title'>수익율(이자율 %)</span>
                <input
                    type="text"
                    name="compoundFrequency"
                    value={values.compoundFrequency}
                    onChange={handleFormattedInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoComplete='off'
                    placeholder='%'
                />
            </div>
        </div>
    );
}

export default SavingsMode;
