const r60 = 360 / 60;
/**
 * 目盛りの描画
 */
function ClockFaceScale({ radius }) {

  const orginStyle = {
    transformOrigin: `${radius}px center`,
  }

  const scales = Array.from({ length: 60 }, (v, index) => {
    const deg = index * r60;
    const className = index % 5 === 0 ? "face-line1" : "face-line2";
    const style = Object.assign({}, orginStyle);
    if (index !== 0) style.transform = `rotate(${deg}deg)`;
    return <div key={index} className={className} style={style}></div>;
  });

  return (
    <>
      {scales}
    </>
  )
}
export default ClockFaceScale