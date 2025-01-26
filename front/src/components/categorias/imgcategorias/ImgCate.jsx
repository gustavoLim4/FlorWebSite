import React from 'react'


const ImgCate = ({img , title , description }) => {
  return (
    <main className='Img-cates'>
      <img src={img} alt={title} />
      <h2>{description}</h2>
    </main>
  )
}

export default ImgCate
