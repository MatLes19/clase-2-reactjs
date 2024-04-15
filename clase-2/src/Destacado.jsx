const Destacado = () => {
    
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card columna1 text-center">
                        <img src={"images/sv05-art-highlights-169-es.png"} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <p className="card-text">Mejora tu baraja con Pokémon del pasado y del futuro y las cartas de AS TÁCTICO.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card columna2 text-center">
                        <img src={"images/sv05-top-cards-169-es.png"} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <p className="card-text">Caja de Entrenador Élite de Escarlata y Púrpura-Mascarada Crepuscular.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card columna3 textcenter">
                        <img src={"images/year-of-the-dragon-169-es.png"} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <p className="card-text">Celebremos el Año del Dragón con una trivia para identificar a Pokémon de tipo Dragón..</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Destacado