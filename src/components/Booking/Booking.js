import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from "axios"

function Booking() {

    const{id}=useParams()
   console.log(id)
  return (
    <div>
     
    </div>
  )
}

export default Booking
