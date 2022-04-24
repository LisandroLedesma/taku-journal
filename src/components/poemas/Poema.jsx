import React from 'react'
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './Poema.css';
import { styled } from "@mui/material/styles";

export const Poema = () => {

  const CardCustom = styled(CardContent)(`
    text-align: center;
    background-color: whitesmoke;
    margin: auto;
  `);

  return (
    <>
    <div className="container">

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Legado </h1>
          <p className='verso'> Y pensar que el universo nos unió sin preguntar que buscábamos </p>
          <p className='verso'> Como dos semillas plantadas en el mismo páramo </p>
          <p className='verso'> Y dio espacio al tiempo y así nos encontramos, por mera coincidencia </p>
          <p className='verso'> Convergiendo las dos realidades de nuestra existencia </p>
          <p className='verso'> Tu eres el árbol, yo el humano que riega tu esencia </p>
          <p className='verso'> Y agradezco de corazón tanta transparencia, porque esto lo contagias, podría llamarse herencia </p>
          <p className='verso'> No hace falta dejar crías para que tus valores tengan permanencia </p>
          <span className='fecha'> - 23 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Sos </h1>
          <p className='verso'> Alma de diamante, porque es lo que sos,  </p>
          <p className='verso'> Sos una joya, sos lo mejor </p>
          <p className='verso'> Sos mi pasión, y sos el buen sabor </p>
          <span className='fecha'> - 23 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Ayuda </h1>
          <p className='verso'> Desesperación y desilusión, me siento siempre en esta condición </p>
          <p className='verso'> Como si fuera una maldición, yo imploro, a algún perezoso dios egoísta </p>
          <p className='verso'> Que me dé la mano del artista, el equilibrio del malabarista </p>
          <p className='verso'> Y en la espada la templanza que equilibra la balanza a devolverme la esperanza </p>
          <span className='fecha'> - 22 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Roto </h1>
          <p className='verso'> Ya lo hiciste, lo lograste, tomaste mi corazón y lo mataste </p>
          <p className='verso'> Mi pecho se alza y se desinfla, y mi soledad acompaña el desastre </p>
          <p className='verso'> Soy solo un sastre desastroso y mi recuerdo está borroso </p>
          <p className='verso'> Yo no existo, yo no gozo, en la sociedad soy un leproso </p>
          <p className='verso'> Porque no estoy, no pertenezco </p>
          <p className='verso'> En este mundo no aparezco </p>
          <p className='verso'> Hoy agradezco al desarraigo </p>
          <p className='verso'> Que no me duela cuando me caigo </p>
          <span className='fecha'> - 22 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Bíblico </h1>
          <p className='verso'> ¿Qué es la vida? ¿qué es el amor? </p>
          <p className='verso'> ¿Será que es la comodidad después del dolor? </p>
          <p className='verso'> ¿Será que luego de una muerte seré redentor? </p>
          <p className='verso'> No lo sé, talvez lo sepas tú </p>
          <p className='verso'> Eres el que conoce muy bien el tabú </p>
          <p className='verso'> Ángel alado, fuego de dios, eres quien me aleja mas de Belcebú </p>
          <p className='verso'> Para Charun eres Azrael </p>
          <p className='verso'> Para mi el mensaje de Gabriel </p>
          <p className='verso'> Si existe un Amon, tu eres Adriel </p>
          <p className='verso'> Pero solo prométeme no terminar como Chobabiel </p>
          <span className='fecha'> - 21 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Pasando Lista </h1>
          <p className='verso'> Esto es un zoológico, y lógico </p>
          <p className='verso'> Si acá tenemos rinocerontes mitológicos </p>
          <p className='verso'> Un arbol genealógico </p>
          <p className='verso'> Y un general que nos observa desde lo astrológico </p>
          <span className='fecha'> - 20 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Mimir </h1>
          <p className='verso'> Bueno, me voy a dormir, no se olviden que la felicidad está a la vuelta, manténganse alerta </p>
          <p className='verso'> Y recuerden lo que dijo un pelado humilde y para nada careta:  </p>
          <p className='verso'> Hasta las puertas mas pesadas pueden ser abiertas </p>
          <p className='verso'> Descansen </p>
          <span className='fecha'> - 20 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Oda a los mods y vips </h1>
          <p className='verso'> Agradezco al cielo por ver tantos colores </p>
          <p className='verso'> Estos nombres en un chat me generan emociones </p>
          <p className='verso'> Y aunque este poema sea cursi como Bécquer en sus renglones </p>
          <p className='verso'> Tengo que decir que los amo a montones </p>
          <p className='verso'> A Misspe, un tipo cariñoso </p>
          <p className='verso'> A Licha, un elocuente virtuoso </p>
          <p className='verso'> A Mati, un chamuyero meloso </p>
          <p className='verso'> y Alex, un laburante sudoroso </p>
          <p className='verso'> A Piba, una artista asombrosa </p>
          <p className='verso'> A Mili, una persona amorosa </p>
          <p className='verso'> A Jason, un tipo misterioso </p>
          <p className='verso'> y a Ivern, un viejo sabroso </p>
          <span className='fecha'> - 20 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Buenas Noches </h1>
          <p className='verso'> Oh dios mío ¿qué he encontrado? </p>
          <p className='verso'> Será que es un angel, un gran ser alado </p>
          <p className='verso'> Una palabra suya, me deja sonrojado </p>
          <p className='verso'> Una mirada tuya me deja enamorado </p>
          <p className='verso'> Tu mera existencia hace que todo valga </p>
          <p className='verso'> Estos efimeros momentos haces que el sol salga </p>
          <p className='verso'> Porque eres el hilo de mi trazo, la solución de mi lazo </p>
          <p className='verso'> La compañía de mi ocaso y la moria que sigue mis pasos </p>
          <p className='verso'> Buenas noches mi corazón de melón </p>
          <span className='fecha'> - 20 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Amor </h1>
          <p className='verso'> Estoy muerto? Estoy soñando? Que son esas trompetas que están sonando </p>
          <p className='verso'> Acaso es mi mente que cuando pienso en él sale volando </p>
          <p className='verso'> Ó tal vez es cuando veo su nombre en el chat que me voy alocando </p>
          <p className='verso'> Quizás sea mi corazón que cuando lo siente está casi explotando </p>
          <p className='verso'> Así es él, misspesones, que me está enamorando </p>
          <span className='fecha'> - 19 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Eres arte </h1>
          <p className='verso'> Tu corteza es castaña, tus ojos azules, tus piernas muy largas, parecen abedules </p>
          <p className='verso'> Tu carisma es inmenso, tu carácter intenso, pero cuando te veo, veo arte en mi lienzo  </p>
          <p className='verso'> Eres arte, eres amor, eres el sol que me da el calor </p>
          <p className='verso'> Para poder crecer, para la fotosíntesis hacer, y para que como lolero yo pueda crecer  </p>
          <span className='fecha'> - 16 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Unión </h1>
          <p className='verso'> Dale misspe contanos </p>
          <p className='verso'> nosotros te escuchamos  </p>
          <p className='verso'> somos todos como hermanos </p>
          <p className='verso'> y cuando nos necesites acá estamos  </p>
          <span className='fecha'> - 15 de abril 2022 </span>
        </CardCustom>
      </Card>
    </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Solicitud </h1>
          <p className='verso'> Ivern, propongo ampliar la habitación </p>
          <p className='verso'> hay 4 esquinas y éramos 10 en el rincón  </p>
          <p className='verso'> podríamos cambiar su formación </p>
          <p className='verso'> un poco mas que esquinas y muy poca organización  </p>
          <span className='fecha'> - 15 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Abuso de poder </h1>
          <p className='verso'> La injusticia y la soberbia, las noticias y el ivern con su superbia </p>
          <p className='verso'> Podrás callarnos con la fuerza, pero un tanque no calma el fluir de mi cabeza  </p>
          <p className='verso'> Por todos los que lucharon, los silenciados, mutilados y enviados al rincón </p>
          <p className='verso'> hoy mantengo mi expresión en un tono ofuscado  </p>
          <p className='verso'> Devuélvanme a Miligramos, porque sin ella no hay domingo de ramos </p>
          <span className='fecha'> - 15 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Taric </h1>
          <p className='verso'> La cima de mi targón, la gema de mi taric </p>
          <p className='verso'> el maná de mi jungla, el arbol que maniobra las mechanic  </p>
          <p className='verso'> La paz en mi zaguán, el aroma a azafrán </p>
          <p className='verso'> Del barco mi capitán y mi guía gavilán  </p>
          <p className='verso'> Puede que vayas mal, puede que arda la herida </p>
          <p className='verso'> pero si le echas agua y sal, solamente la abrirías </p>
          <p className='verso'> La calma es esencial, y no es palabrería </p>
          <p className='verso'> en el lol son todos nenes y esto es una guardería </p>
          <span className='fecha'> - 15 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Sadge </h1>
          <p className='verso'> Las ventanas iluminadas por el farol, igual de solitarios que yo </p>
          <p className='verso'> matando el silencio con el sonido de una voz  </p>
          <p className='verso'> una voz que acompaña mi soledad y me hace olvidarme de ella </p>
          <p className='verso'> me alegra ese sonido, me alegra este lugar, y cuando todo esto termine  </p>
          <p className='verso'> solo habrá silencio, un grillo y oscuridad </p>
          <span className='fecha'> - 13 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> SirMatiXD </h1>
          <p className='verso'> Que invente, que invente, que el tipo conozca gente  </p>
          <p className='verso'> Que Mati pueda tener suerte y las flex sean su fuerte  </p>
          <p className='verso'> Grande mati apoyo para siempre, y que en esta no te quedes inerte </p>
          <p className='verso'> Dale Mati, active, que te deseo suerte  </p>
          <p className='verso'> Dale Mati dale que carreando quiero verte </p>
          <span className='fecha'> - 13 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Prendió Ivern </h1>
          <p className='verso'> La vida me ha mentido y consentido </p>
          <p className='verso'> dándome un brillo zen </p>
          <p className='verso'> que da sentido al dormido ruido de nuestra conciencia </p>
          <p className='verso'> para que parta lo que porta mi esencia </p>
          <p className='verso'> la duda, la curiosidad y el existencialismo, me hace dudar de mi mismo </p>
          <p className='verso'> me hace ver un espejismo </p>
          <p className='verso'> porque en este rito que es mi favorito este no soy yo </p>
          <p className='verso'> Es un bendito al que su palabra yo transmito </p>
          <p className='verso'> Es un joven indómito que camina despacito </p>
          <p className='verso'> ha dejado un monolito que sana cada pétalo marchito </p>
          <p className='verso'> su visita ha sido un acontecimiento fortuito </p>
          <p className='verso'> Gracias por prender Ivernsito </p>
          <span className='fecha'> - 12 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

      <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Misspessones </h1>
          <p className='verso'> Un sapo le dice a una dama, Buenas Mlady, ¿quiere ser mi rana?  </p>
          <p className='verso'> La dama ofendida da como respuesta, no lo besaría ni aunque perdiera una apuesta  </p>
          <p className='verso'> Y así fue como la bella pero tonta dama, se fue con la conciencia sana </p>
          <p className='verso'> Porque no sabía leer entre renglones, y no reconoció que el sapo era Misspesones  </p>
          <p className='verso'> Un sapo, puede que feo, puede que medio siome, pero lleno de luz y de pasiones. </p>
          <span className='fecha'> - 12 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

      <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> Lluvia </h1>
          <p className='verso'> La lluvia cae en mi terraza, el viejo roble, que está en la plaza. </p>
          <p className='verso'> El agua cae en mi cabeza, la raiz agradece tanta pureza. </p>
          <p className='verso'> Para que crezca naturaleza, y el universo permanezca. </p>
          <p className='verso'> Espero que el roble crezca y sus raices sean gigantescas. </p>
          <p className='verso'> Asi la vida prevalezca, el Ivern nace y la flor florezca. </p>
          <span className='fecha'> - 11 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

      <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> IvernHood </h1>
          <p className='verso'> El ivern anda sobrao, como shelao </p>
          <p className='verso'> pegao como petizo bien calzao </p>
          <p className='verso'> calzao con unas topper en el top anda parao </p>
          <p className='verso'> sintiendose re zarpao al team lo lleva carreao </p>
          <p className='verso'> con barbita de candao y una facha  </p>
          <p className='verso'> liquida de liquidao a los malos deja desinflao </p>
          <span className='fecha'> - 11 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

      <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'>Perón OTP</h1>
          <p className='verso'> Perón como serías si fueras un campeón. </p>
          <p className='verso'> Serías un grande y darías sanación.  </p>
          <p className='verso'> Serías bueno en tim faight porque generas unión. </p>
          <p className='verso'> Perón perón, que grande sos, te los soleas uno versus dos. </p>
          <p className='verso'> Perón perón, que grande sos, soy OTP de corazón. </p>
          <span className='fecha'> - 9 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

      <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> GANAS </h1>
          <p className='verso'> Que loco que las personas en cada día que pasa, mas me sorprende y su idiotez me rebasa, </p>
          <p className='verso'> que la moda sea critica y la critica sea moda, el que no opina es tibio y el que le erra se joroba. </p>
          <p className='verso'> Que perdida de tiempo puede ser opinar, Si de todas maneras no te van a escuchar,  </p>
          <p className='verso'> el sistema las compra y las compara, toma los del cascarón y los enmascara </p>
          <p className='verso'> con una mascara característica de la cana, canalizan ideas que nunca son sanas, </p>
          <p className='verso'> y aunque uno intente mantener su prana, Este mundo me saca las ganas </p>
          <span className='fecha'> - 9 de abril 2022 </span>
        </CardCustom>
      </Card>
      </div>

      <div className="poema">
      <Card>
        <CardCustom>
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
        </CardCustom>
      </Card>
      </div>
    </div> 
    </>
  )
}


// TODO: refactorizar cuando tenga ganas y sean muchos poemas