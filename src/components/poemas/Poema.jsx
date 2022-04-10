import React from 'react'
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './Poema.scss';

export const Poema = () => {
  return (
    <>
    <div className="container">
      <div className="poema">
      <Card>
        <CardContent>
          <h1 className='titulo'>Perón OTP</h1>
          <p className='verso'> Perón como serías si fueras un campeón. </p>
          <p className='verso'> Serías un grande y darías sanación.  </p>
          <p className='verso'> Serías bueno en tim faight porque generas unión. </p>
          <p className='verso'> Perón perón, que grande sos, te los soleas uno versus dos. </p>
          <p className='verso'> Perón perón, que grande sos, soy OTP de corazón. </p>
          <span className='fecha'> - 9 de abril 2022 </span>
        </CardContent>
      </Card>
      </div>

      <div className="poema">
      <Card>
        <CardContent>
          <h1 className='titulo'> GANAS </h1>
          <p className='verso'> Que loco que las personas en cada día que pasa, mas me sorprende y su idiotez me rebasa, </p>
          <p className='verso'> que la moda sea critica y la critica sea moda, el que no opina es tibio y el que le erra se joroba. </p>
          <p className='verso'> Que perdida de tiempo puede ser opinar, Si de todas maneras no te van a escuchar,  </p>
          <p className='verso'> el sistema las compra y las compara, toma los del cascarón y los enmascara </p>
          <p className='verso'> con una mascara característica de la cana, canalizan ideas que nunca son sanas, </p>
          <p className='verso'> y aunque uno intente mantener su prana, Este mundo me saca las ganas </p>
          <span className='fecha'> - 9 de abril 2022 </span>
        </CardContent>
      </Card>
      </div>

      <div className="poema">
      <Card>
        <CardContent>
          <h1 className='titulo'> Oda al Ivern Peronista </h1>
          <p className='verso'> Escucha mis plegarias dios de la vieja era, </p>
          <p className='verso'> Otórgame la Sefirot y te daré mi vida entera, </p>
          <p className='verso'> Jojmá y Biná son las que mi mente espera, </p>
          <p className='verso'> Pero busco a Hod al terminar la carrera. </p>
          <p className='verso'> Busco que me enseñes a Maljut Al final de mi vida, </p>
          <p className='verso'> O simplemente verte jugar una partida, </p>
          <p className='verso'> La luz del alma que tu alma emana </p>
          <p className='verso'> Dejará mañana mi conciencia nutrida  </p>
          <span className='fecha'> - 9 de abril 2022 </span>
        </CardContent>
      </Card>
      </div>
    </div> 
    </>
  )
}


// TODO: refactorizar cuando tenga ganas y sean muchos poemas