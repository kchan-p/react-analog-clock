import ClockFaceFrame from "./frame";
import ClockFaceScale from "./scale";
import ClockFaceText from "./text";
import ClockFaceCenter from "./center";

/**
 * 文字盤の描画
 */
function ClockFace({ radius }) {

    return (
        <>
            <ClockFaceFrame />
            <ClockFaceScale radius={radius} />
            <ClockFaceText radius={radius} />
            <ClockFaceCenter />
        </>
    )
}

export default ClockFace