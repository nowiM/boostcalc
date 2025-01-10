import React from 'react';
import { formatNumber, handleFocus, handleBlur, handleFormattedInputChange } from '../../utils/formatting';

const DefaultMode = ({ values, handleInputChange }) => {
    return (
        <div className="default calculator">
            <h1 className='mode'>기본 복리 계산기</h1>
            <div className="input-group">
                <span className='title'>초기 금액(₩)</span>
                <input
                    type="text"
                    name="principal"
                    datatype='num'
                    inputMode='decimal'
                    value={formatNumber(values.principal)}
                    onChange={(e) => handleFormattedInputChange(e, handleInputChange)} 
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
                    onChange={(e) => handleFormattedInputChange(e, handleInputChange)}
                    maxLength={3}
                    autoComplete='off'
                    placeholder='0'
                />
            </div>

            <div className="input-group">
                <span className='title'>수익율(이자율 %)</span>
                <input
                    type="text"
                    name="compoundFrequency"
                    value={values.compoundFrequency}
                    onChange={(e) => handleFormattedInputChange(e, handleInputChange)}
                    onFocus={(e) => handleFocus(e, handleInputChange)}
                    onBlur={(e) => handleBlur(e, handleInputChange)}
                    autoComplete='off'
                    placeholder='%'
                />
            </div>
        </div>
    );
};

export default DefaultMode;
