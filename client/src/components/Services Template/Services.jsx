import './services.css'

export default function Services(){

    return (
        <>
        <main className="services color-white">
    <div className="servicesParentContainer">
        <p id="serviceHeading">Here are our services.</p>
        <div className="servicesChildContainer">
                <div className="serviceCard haircuts" >
                                <h2>Haircuts</h2>
                                <div className="cardInsights">
                                    <h4>Haircuts</h4>
                                    <p>Click for more details.</p>
                                </div>
                            </div>
            
            <div className="serviceCard beardTrimming" >
                <h2>Beard Trimming</h2>
                    <div className="cardInsights">
                        <h4>Beard Trimming</h4>
                        <p>Click for more details.</p>
                    </div>
            </div>
            <div className="serviceCard wax" >
                <h2>Wax</h2>
                    <div className="cardInsights">
                        <h4>Wax</h4>
                        <p>Click for more details.</p>
                    </div>
            </div>
            <div className="serviceCard masks">
                <h2>Face Masks</h2>
                    <div className="cardInsights">
                        <h4>Face Masks</h4>
                        <p>Click for more details.</p>
                    </div>
            </div>
        </div>
    </div>
</main>
</>
    );
}