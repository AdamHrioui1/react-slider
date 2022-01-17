import React from 'react'

function ImageBtn({ data, changeIndexValue, index }) {
    return (
        <div className='imagesBtn'>
          {
            data.map((i, btnIndex) => {
                let btnClass = ''
                if(index === btnIndex) {
                    btnClass = 'active'
                }
                return (
                    <button className={btnClass} key={btnIndex} onClick={() => changeIndexValue(btnIndex)}></button>
                )
            })
          }
        </div>
    )
}

export default ImageBtn
