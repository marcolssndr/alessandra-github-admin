import React from 'react'
import { TypeStudent } from "../../types/types";

export const DettaglioStudente = (props : TypeStudent) => {

  return (
    <div className="dettaglio">
      nome: {props.name} <br />
      cognome: {props.surname} <br />
      classe: {props.classe} <br />
      nickname: {props.login}


    </div>
  )
}
