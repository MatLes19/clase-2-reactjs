import Pokemon from './assets/images/horizons-169-latam.png';

const Hero = () => {

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <img src={Pokemon} alt="Pokemon" className="img-fluid"/>
                </div>
            </div>
            <div className="col-md-9 offset-md-1">
                <h3>Nuevos Horizontes, nuevas aventuras en Netflix</h3>
                <p>
                El viaje de Liko, Sprigatito, Rod y Fuecoco a través del mundo Pokémon continuará en la segunda parte de la serie el 10 de mayo.
                </p>
            </div>
        </div>
    )
}

export default Hero