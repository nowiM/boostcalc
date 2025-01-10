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
                    name="month"
                    value={formatNumber(values.month)}
                    onChange={(e) => handleFormattedInputChange(e, handleInputChange)} 
                    autoComplete='off' 
                    placeholder='₩'
                />
            </div>

            <div className="input-group">
                <span className='title'>투자 기간(년)</span>
                <input
                    type="text"
                    name="investment"
                    value={formatNumber(values.investment)}
                    onChange={(e) => handleFormattedInputChange(e, handleInputChange)}
                    autoComplete='off'
                    maxLength={3}
                    placeholder='0'
                />
            </div>

            <div className="input-group">
                <span className='title'>이자율(%)</span>
                <input
                    type="text"
                    name="investmentPeriod"
                    value={values.investmentPeriod}
                    onChange={(e) => handleFormattedInputChange(e, handleInputChange)}
                    onFocus={(e) => handleFocus(e, handleInputChange)}
                    onBlur={(e) => handleBlur(e, handleInputChange)}
                    autoComplete='off'
                    placeholder='%'
                />
            </div>
        </div>
    );
}

export default SavingsMode;
