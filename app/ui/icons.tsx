export default function Icon({ name, size = 20 }: { name: 'arrow' | 'search' | 'download' | 'close' | 'plus' | 'sun' | 'lightbulb'; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'arrow' && <path d="M5 12h14m-6-6 6 6-6 6"/>}
    {name === 'search' && <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></>}
    {name === 'download' && <><path d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5"/></>}
    {name === 'close' && <path d="m6 6 12 12M6 18 18 6"/>}
    {name === 'plus' && <path d="M5 12h14M12 5v14"/>}
    {name === 'sun' && <><circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></>}
    {name === 'lightbulb' && <><path d="M9 18h6M10 21h4M8.2 14.6a6 6 0 1 1 7.6 0c-.5.4-.8 1-.8 1.7V18H9v-1.7c0-.7-.3-1.3-.8-1.7Z"/><path d="m10 9 2 2 2-2m-2 2v6M12 1v1M3.5 3.5l1 1m15-1-1 1M1 9h2m18 0h2"/></>}
  </svg>;
}

