import React from 'react'

const IconDollar = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40 40'
    >
      <g>
        <path d='M22.979,0C10.287,0,0,10.288,0,22.979s10.287,22.979,22.979,22.979s22.979-10.289,22.979-22.979S35.67,0,22.979,0z    M24.37,33.215v2.66c0,0.415-0.323,0.717-0.739,0.717h-1.773c-0.416,0-0.751-0.302-0.751-0.717v-2.426   c-1.632-0.074-3.278-0.422-4.524-0.896c-0.675-0.256-1.051-0.979-0.872-1.679L16,29.748c0.101-0.395,0.365-0.725,0.726-0.91   c0.361-0.188,0.785-0.207,1.164-0.062c1.187,0.459,2.589,0.793,4.086,0.793c1.906,0,3.211-0.736,3.211-2.074   c0-1.271-1.07-2.074-3.546-2.911c-3.579-1.204-6.03-2.876-6.03-6.121c0-2.943,2.083-5.251,5.644-5.954v-2.426   c0-0.415,0.355-0.787,0.771-0.787h1.773c0.416,0,0.721,0.372,0.721,0.787v2.191c1.557,0.067,2.681,0.298,3.621,0.604   c0.711,0.232,1.131,0.977,0.944,1.703l-0.254,1.008c-0.099,0.384-0.353,0.71-0.701,0.898s-0.759,0.222-1.135,0.093   c-0.854-0.293-1.968-0.559-3.38-0.559c-2.174,0-2.877,0.937-2.877,1.874c0,1.104,1.171,1.806,4.014,2.877   c3.98,1.405,5.579,3.245,5.579,6.254C30.33,30.003,28.227,32.547,24.37,33.215z' />
      </g>
    </svg>
  )
}

export default IconDollar
