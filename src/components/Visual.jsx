
const Visual = (props) => {
    const { shake, answer } = props;
    return (
        <>
            <div className="shadow"></div>

            <div className="epos">
                <div className={shake}>
                    <div className="egrad"></div>
                    <div className="ewin"></div>
                    <div className="triangle"></div>
                    <div className="textbox">{answer}</div>
                </div>
            </div>
        </>
    )
}

export default Visual;