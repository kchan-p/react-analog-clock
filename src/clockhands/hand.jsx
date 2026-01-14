import { useState, useMemo, useRef, useLayoutEffect } from 'react'

    // 針の先端から文字盤の中心までの長さ（半径のパーセント）
    // のカスタムプロパティ名
const HandLengthPerProp = "--react-analog-clock-handlengthper";
    // 針の終端から文字盤の中心までの長さ（半径のパーセント）
    // のカスタムプロパティ名
const HandGapPerProp = "--react-analog-clock-handgapper";

/**
 * 針の描画
 */
function ClockHand({ id, radius, value, divNum }) {

    const [width, setWidth] = useState(0);
    const [handLengthPer, setHandLengthPer] = useState(0);
    const [handGapPer, setHandGapPer] = useState(0);

    const handRef = useRef(null);
        // DOMからプロパティ取得
    useLayoutEffect(() => {
        const entity = handRef.current;
        const style = window.getComputedStyle(entity);
        const lengthPer = Number(style.getPropertyValue(HandLengthPerProp));
        const handGapPer = Number(style.getPropertyValue(HandGapPerProp));
        if( !isNaN(lengthPer) ) setHandLengthPer(lengthPer);
        if( !isNaN(handGapPer) ) setHandGapPer(handGapPer);
        setWidth(entity.clientWidth);
    }, []);

    const style = Object.assign({} , useMemo(
        () => {
            const handLength = radius * handLengthPer / 100;
            const handGap = radius * handGapPer / 100;
            return {
                height: (handLength + handGap) + "px",
                top: (radius - handLength) + "px",
                left: (radius - width / 2) + "px",
                transformOrigin: `center ${handLength}px `,
            }
        }
        , [radius, width , handLengthPer , handGapPer])
    );
    const angle = 360 / divNum;
    style.transform = `rotate(${angle * value}deg)`

    return (<>
        <div id={id} style={style} ref={handRef} ></div>
    </>);
}

export default ClockHand;
