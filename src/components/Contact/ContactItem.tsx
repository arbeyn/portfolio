import React from 'react'
import getImageUrl from 'utils/image-util'

function ContactItem(data) {
  const { id, thumbnail, detail, href } = data
  if (href !== undefined) {
    return (
      <a
        key={id}
        href={href}
        className="rounded-lg bg-bg-accent   text-text-primary hover:text-white"
      >
        <div className=" flex w-[250px] gap-3 rounded-lg  px-4 py-3 shadow-inner hover:shadow-xl">
          <div className="max-w-8">
            <img
              src={getImageUrl(thumbnail)}
              alt={detail}
              className="object-cover"
            />
          </div>
          <p className="text-lg font-light ">{detail}</p>
        </div>
      </a>
    )
  }

  return (
    <div
      key={id}
      className="flex w-[250px] gap-3 rounded-lg bg-bg-accent px-4 py-3 shadow-inner"
    >
      <div className="max-w-8">
        <img
          src={getImageUrl(thumbnail)}
          alt={detail}
          className="object-cover"
        />
      </div>
      <p className="text-lg font-light text-text-primary">{detail}</p>
    </div>
  )
}

export default ContactItem
