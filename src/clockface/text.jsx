const r12 = 360 / 12;
/**
 * 目盛り数字の描画
 */
function ClockFaceText({ radius }) {
    const moziPos = radius - 30;
    const MathPi = Math.PI / 180;
    const className = "face-text";

    const texts = Array.from({ length: 12 }, (v, index) => {
        const deg = index * r12;
        const mojiX = radius + moziPos * Math.sin(deg * MathPi);
        const mojiY = radius - moziPos * Math.cos(deg * MathPi);

        const style = { top: mojiY + "px", left: mojiX + "px" };
        const text = index === 0 ? "12" : index.toString();

        return <div key={index} className={className} style={style}>{text}</div>;
    });

    return (
        <>
            {texts}
        </>
    )
}
export default ClockFaceText