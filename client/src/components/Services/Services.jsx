import './services.css';

import {useNavigate} from 'react-router-dom'

export default function Services(){
    const navigate = useNavigate();

    return (
        <>
        <main className="services color-white">
    <div className="servicesParentContainer">
        <div className="servicesChildContainer">
                <div className="serviceCard haircuts" onClick={() => navigate('/services/haircuts')}>
                                <h2>Haircuts</h2>
                                <div className="cardInsights">
                                    <p>Click for price list</p>
                                </div>
                            </div>
            
            <div className="serviceCard beardTrimming" onClick={() => navigate('/services/beard-trimming')}>
                <h2>Beard Trimming</h2>
                    <div className="cardInsights">
                        <p>Click for price list</p>
                    </div>
            </div>
            <div className="serviceCard wax" onClick={() => navigate('/services/other-services')}>
                <h2>Other Services</h2>
                    <div className="cardInsights">
                        <p>Click for price list</p>
                    </div>
            </div>
        </div>
    </div>
</main>
</>
    );
}