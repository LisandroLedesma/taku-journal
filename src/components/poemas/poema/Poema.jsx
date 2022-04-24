import React from 'react';
import './Poema.css';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/material/styles";

export const Poema = (p) => {

    const CardCustom = styled(CardContent)(`
    text-align: center;
    background-color: whitesmoke;
    margin: auto;
  `);

  return (
    <>
    <div className="poema">
      <Card>
        <CardCustom>
          <h1 className='titulo'> { p.titulo } </h1>

            {
                p.versos.map((v, i) => {
                    
                    return <p key={i} className='verso'> {v} </p>
                })
            } 
          <span className='fecha'> - { p.fecha } </span>
        </CardCustom>
      </Card>
    </div>
    </>
  )
}
