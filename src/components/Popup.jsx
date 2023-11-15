import React from 'react'

export default function Popup({active, setActive, children}) {
  return (
    <div className={active ? 'popup active' : 'popup'} onClick={() => setActive(false)}>
        <div className="popup_content" onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

// use tag <Sign_in_popup/> >
