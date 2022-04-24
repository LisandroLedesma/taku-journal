import React from 'react'
import './Poemas.css';
import { Poema } from './poema/Poema';
import { poemas } from '../../assets/poemas/poemas.js';

export const Poemas = () => {

  return (
    <>
    <div className="container">
      {
        poemas.map( (p) => {
          return < Poema key={p.id} {...p} />
        })
      }

    </div> 
    </>
  )
}
