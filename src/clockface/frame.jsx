
/**
 * 文字盤の枠描画
 */
function ClockFaceFrame() {

    const style = {
        position:"absolute",
        top:"0",
        left:"0",
        right:"0",
        bottom:"0"
    };
  return (
    <>
      <div id="face-frame" style={style}></div>
    </>
  )
}

export default ClockFaceFrame