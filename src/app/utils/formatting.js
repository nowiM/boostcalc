    // 숫자를 세 자리마다 콤마로 포맷팅하는 함수
    export const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // 포커스가 있을 때는 %를 제거하여 숫자만 표시
    export const handleFocus = (e, handleInputChange) => {
        if (e.target.name === "compoundFrequency" || e.target.name === "investmentPeriod") {
            handleInputChange({
                target: {
                    name: e.target.name,
                    value: e.target.value.replace('%', '') // % 제거
                }
            });
        }
    };

    // 포커스가 사라질 때 %를 추가
    export const handleBlur = (e, handleInputChange) => {
        if (e.target.name === "compoundFrequency" || e.target.name === "investmentPeriod") {
            handleInputChange({
                target: {
                    name: e.target.name,
                    value: formatNumber(e.target.value.replace(/[,%]/g, '')) + "%" // 콤마 추가 후 % 추가
                }
            });
        }
    };

    export const handleFormattedInputChange = (e, handleInputChange) => {
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