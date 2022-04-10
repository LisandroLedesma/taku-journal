import React from 'react'
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './About.css';
import { styled } from "@mui/material/styles";
import { maxWidth } from '@mui/system';


export const About = () => {

  const estiloimg = {
    media: {
      heigt: '100px'
    }
  };

  const CardCustom = styled(CardContent)(`
    text-align: center;
    background-color: whitesmoke;
    margin: auto;
  `);

  return (
    <>
    <div className="container">
    < Card > 
    <CardActionArea>
        <CardMedia
          component="img"
          image="https://i.postimg.cc/Pr1ZrH97/taku-dia-min.png"
          alt="eskimmo"
          style={estiloimg.media}
        />

        <CardCustom>
            <h1>3Skimmo</h1>
            <p>
              ¿Quién es 3Skimmo? Para el ciego, es la luz. Para el hambriento, es el pan. Para el enfermo, es la cura. Para el solitario, es el compañero. Para el triste, es la alegría. Para el prisionero, es la libertad. Para el pobre, es el tesoro. Para el deudor, es el perdon. Y en sus ratos libres es un poeta.
            </p>
            <p>
              Esta es una recompilación de los poemas presentados en el chat del canal de twitch "Ivern Peronista"
            </p>
            <p>
              Registro comenzado a partir del stream del 9 de abril de 2022.
            </p>
            <p>
              Lo podes encontrar en <a href="https://www.instagram.com/newbie_oo5/" target="_blank"> instagram </a>.
            </p>
        </CardCustom>

        <CardMedia
          component="img"
          image="https://i.postimg.cc/RZ9tW8zZ/taku-noche-min.png"
          alt="eskimmo"
          style={estiloimg.media}
        />
      </CardActionArea>
    </Card>
    </div>
    </>
  )
}
