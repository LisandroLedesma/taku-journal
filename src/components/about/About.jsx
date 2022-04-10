import React from 'react'
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './About.scss';

export const About = () => {
  return (
    <>
    <div className="container">
    < Card > 
    <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1456435587672-19f1df8941df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="eskimmo"
        />
        <CardContent>
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
        </CardContent>

      </CardActionArea>
    </Card>
    </div>
    </>
  )
}
