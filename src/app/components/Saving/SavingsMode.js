import React from 'react';

const SavingsMode = ({ values, handleInputChange }) => {
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleFormattedInputChange = (e) => {
        const inputValue = e.target.value.replace(/,/g, ''); // 콤마 제거
        if (/^\d*$/.test(inputValue)) { // 숫자만 허용
            e.target.value = formatNumber(inputValue); // 입력 필드에 콤마 포함된 값 표시
            handleInputChange({
                target: {
                    name: e.target.name,
                    value: inputValue // 상태에 콤마 없는 값 저장
                }
            });
        }
    };

    return (
        <div className="calculator">
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
                    name="month"
                    value={formatNumber(values.month)}
                    onChange={handleFormattedInputChange} 
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
                    onChange={handleFormattedInputChange}
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
                    value={formatNumber(values.investmentPeriod)}
                    onChange={handleFormattedInputChange}
                    autoComplete='off'
                    placeholder='%'
                />
            </div>

            {/* <div className="input-group">
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
            </div> */}
        </div>
    );
}

export default SavingsMode;
