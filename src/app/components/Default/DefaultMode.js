import React from 'react';

const DefaultMode = ({ values, handleInputChange }) => {
    const formatNumber = (num) => {
        // 숫자를 문자열로 변환한 후 세 자리마다 콤마 추가
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    
    const handleFormattedInputChange = (e) => {
        const inputValue = e.target.value.replace(/,/g, ''); // 콤마 제거한 입력값
        if (/^\d*$/.test(inputValue)) { // 숫자만 허용
            // 콤마가 추가된 형식으로 입력 필드 표시
            e.target.value = formatNumber(inputValue);
            // 원래 숫자만 포함된 값으로 상태 업데이트
            handleInputChange({
                target: {
                    name: e.target.name,
                    value: inputValue
                }
            });
        }
    };

    return (
        <div className="calculator">
            <h1 className='mode'>기본 복리 계산기</h1>
            <div className="input-group">
                <span className='title'>초기 금액(₩)</span>
                <input
                    type="text"
                    name="principal"
                    datatype='num'
                    inputMode='decimal'
                    value={formatNumber(values.principal)}
                    onChange={handleFormattedInputChange} 
                    autoComplete='off' //텍스트 박스에 이전 입력값 안나오게 하는 속성
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
                    value={formatNumber(values.compoundFrequency)}
                    onChange={handleFormattedInputChange}
                    autoComplete='off'
                    placeholder='%'
                />
            </div>
        </div>
    );
};

export default DefaultMode;
