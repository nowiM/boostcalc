import React from 'react';

const SavingsMode = ({ values, handleInputChange }) => {
    // 숫자를 문자열로 변환한 후 세 자리마다 콤마 추가
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // 포커스가 있을 때는 %를 제거하여 숫자만 표시
    const handleFocus = (e) => {
        if (e.target.name === "compoundFrequency") {
            handleInputChange({
                target: {
                    name: e.target.name,
                    value: e.target.value.replace('%', '') // % 제거
                }
            });
        }
    };

    // 포커스가 사라질 때 %를 추가
    const handleBlur = (e) => {
        if (e.target.name === "compoundFrequency") {
            handleInputChange({
                target: {
                    name: e.target.name,
                    value: formatNumber(e.target.value.replace(/[,%]/g, '')) + "%" // 콤마 추가 후 % 추가
                }
            });
        }
    };

    const handleFormattedInputChange = (e) => {
        const inputValue = e.target.value.replace(/[,%]/g, ''); // 콤마 제거

        if (/^\d*$/.test(inputValue)) { // 숫자만 허용
            handleInputChange({
                target: {
                    name: e.target.name,
                    value: formatNumber(inputValue)
                }
            });
        }
    };

    return (
        <div className="saving calculator">
            <h1 className='mode'>적립식 복리 계산기</h1>

            <div className="input-group">
                <span className='title'>초기 금액(₩)</span>
                <input
                    type="text"
                    name="principal"
                    value={formatNumber(values.principal)}
                    onChange={handleFormattedInputChange}
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
