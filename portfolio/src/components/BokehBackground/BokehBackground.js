import "./BokehBackground.css"


const BokehBackground = (props) => {

    const { numSpans } = props;

    const renderSpans = () => {
        const spans = [];
        for (let i = 0; i < numSpans; i++) {
            spans.push(<span key={i}></span>);
        }
        return spans;
    };


    return (
        <div variant={props.variant} className={`bokeh-background ${props.customClass}`}>

            {renderSpans()}
            
        </div>
    )
}

export default BokehBackground;


