const paths = {
  birthday: (<path d="M6 12h12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8Zm2-2a4 4 0 1 1 8 0H8Zm4-9c1.1 0 2 .9 2 2 0 1.5-2 3-2 3s-2-1.5-2-3c0-1.1.9-2 2-2Z"/>),
  house: (<path d="M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z"/>),
  wedding: (<path d="M12 7c2.8 0 5 2.2 5 5 0 4-5 9-5 9s-5-5-5-9c0-2.8 2.2-5 5-5Zm0-5 2 3-2 3-2-3 2-3Z"/>),
  party: (<path d="M2 22 16 8l6 6L8 28 2 22Zm6-6 8 8"/>),
  bachelor: (<path d="M4 7 12 3l8 4-8 4L4 7Zm8 5 8-4v4l-8 4-8-4V8l8 4Z"/>),
  cocktail: (<path d="M4 4h16l-7 7v7h3v2H8v-2h3v-7L4 4Zm4 0 8 0"/>),
  mocktail: (<path d="M6 3h12v2H6V3Zm2 4h8l-1 9H9L8 7Zm-1 11h10v3H7v-3Z"/>),
  phone: (<path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm6 18h.01"/>),
  email: (<path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2 9 6 9-6"/>),
  wallet: (<path d="M3 7h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm13 5h5v2h-5v-2Z"/>),
}

export default function Icon({ name, size=20, className='' }){
  return (
    <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || null}
    </svg>
  )
}


