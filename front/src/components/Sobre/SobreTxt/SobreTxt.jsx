import React from 'react'

const SobreTxt = ({svgSR , title , description}) => {
  return (
    <main className='caixa-sobre'>
      <img src={svgSR} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </main>
  )
}

export default SobreTxt
