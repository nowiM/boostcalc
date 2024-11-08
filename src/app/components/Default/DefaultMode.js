const DefaultMode = ({ values, handleInputChange }) => {
    // 숫자를 세 자리마다 콤마로 포맷팅하는 함수
    const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
        let inputValue = e.target.value.replace(/[,%]/g, ''); // 콤마와 % 제거

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
        <div className="default calculator">
            <h1 className='mode'>복리 계산기</h1>
            <div className="input-group">
                <span className='title'>초기 금액(₩)</span>
                <input
                    type="text"
                    name="principal"
                    datatype='num'
                    inputMode='decimal'
                    value={formatNumber(values.principal)}
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
                    onChange={handleFormattedInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoComplete='off'
                    placeholder='%'
                />
            </div>
        </div>
    );
};

export default DefaultMode;
