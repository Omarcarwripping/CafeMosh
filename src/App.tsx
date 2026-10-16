import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { PANELS, type Art, type Item, type Panel, type Section } from './data/menu.ts'

const TAB_KEY = 'mosh-tab'

const norm = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

function initialTab(): string {
  const hash = window.location.hash.slice(1)
  if (PANELS.some((p) => p.id === hash)) return hash
  try {
    const saved = localStorage.getItem(TAB_KEY)
    if (saved && PANELS.some((p) => p.id === saved)) return saved
  } catch {
    // storage blocked: fall back to the first tab
  }
  return PANELS[0].id
}

function Logo() {
  return (
    <span className="logo" role="img" aria-label="Café mosh.">
      <i className="l-cafe" />
      <i className="l-mosh" />
      <i className="l-dot" />
    </span>
  )
}

function Artwork({ art }: { art: Art }) {
  if (art === 'badge') {
    return (
      <div className="badge" aria-label="Kuchen auf Anfrage 5,90 €">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path id="ring" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" />
          </defs>
          <circle cx="60" cy="60" r="58" className="b-bg" />
          <text className="b-ring">
            <textPath href="#ring">loveyouso · loveyouso · loveyouso · loveyouso ·</textPath>
          </text>
        </svg>
        <span>
          Kuchen
          <br />
          auf Anfrage<b>5,90 €</b>
        </span>
      </div>
    )
  }
  return <i className={`art m-${art}`} aria-hidden="true" />
}

function MenuItem({ item, hit }: { item: Item; hit: boolean }) {
  return (
    <li className={hit ? 'it hit' : 'it'}>
      <div className="it-row">
        <span className="it-n">{item.name}</span>
        {item.price && <span className="it-p">{item.price}</span>}
      </div>
      {item.desc && <p className="it-d">{item.desc}</p>}
    </li>
  )
}

function MenuSection({ section, index, items, hit }: { section: Section; index: number; items: Item[]; hit: boolean }) {
  return (
    <section
      className={section.tone === 'matcha' ? 'sec matcha' : 'sec'}
      style={{ '--i': Math.min(index, 8) } as CSSProperties}
    >
      <h3 className="sec-h">
        <span>{section.title}</span>
        {section.price && <span className="sec-p">{section.price}</span>}
      </h3>
      {section.note && <p className="sec-note">{section.note}</p>}
      <ul className="items">
        {items.map((item, i) => (
          <MenuItem key={i} item={item} hit={hit} />
        ))}
      </ul>
      {section.footnote && <p className="sec-foot">{section.footnote}</p>}
    </section>
  )
}

function MenuPanel({ panel, query }: { panel: Panel; query: string[] }) {
  const searching = query.length > 0
  const sections = panel.sections
    .map((section) => {
      if (!searching) return { section, items: section.items }
      const head = norm(section.title)
      const items = section.items.filter((item) => {
        const text = `${norm(item.name)} ${norm(item.desc ?? '')} ${norm(item.price ?? '')} ${head}`
        return query.every((w) => text.includes(w))
      })
      return { section, items }
    })
    .filter((s) => s.items.length > 0)

  if (sections.length === 0) return null

  return (
    <div className={searching ? 'panel' : 'panel enter'} role="tabpanel" id={`p-${panel.id}`}>
      <header className="ph">
        <h2 className="mega" aria-label={`Menu ${panel.subtitle}`}>
          <span>ME</span>
          <em>{panel.subtitle}</em>
          <span>NU</span>
        </h2>
        <Artwork art={panel.art} />
      </header>
      {panel.id === 'drinks' && (
        <aside className="promo">
          <p className="promo-a">After Work.</p>
          <p className="promo-b">Jeden Donnerstag · 18–22 Uhr</p>
          <ul className="promo-c">
            <li>Spritz Drinks 6 €</li>
            <li>Good Vibes</li>
            <li>House Music</li>
          </ul>
        </aside>
      )}
      <div className="cols">
        {sections.map(({ section, items }, i) => (
          <MenuSection key={section.title} section={section} index={i} items={items} hit={searching} />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState(initialTab)
  const [q, setQ] = useState('')
  const tabsRef = useRef<HTMLElement>(null)
  const pillRef = useRef<HTMLSpanElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const query = useMemo(() => norm(q.trim()).split(/\s+/).filter(Boolean), [q])
  const searching = query.length > 0

  // slide the pill under the active tab and keep that tab in view
  useLayoutEffect(() => {
    const move = () => {
      const el = tabsRef.current?.querySelector<HTMLElement>(`[data-p="${tab}"]`)
      const pill = pillRef.current
      const bar = tabsRef.current
      if (!el || !pill || !bar) return
      pill.style.width = `${el.offsetWidth}px`
      pill.style.transform = `translateX(${el.offsetLeft}px)`
      bar.scrollTo({ left: el.offsetLeft - (bar.clientWidth - el.offsetWidth) / 2 })
    }
    move()
    window.addEventListener('resize', move, { passive: true })
    document.fonts?.ready.then(move)
    return () => window.removeEventListener('resize', move)
  }, [tab, searching])

  useEffect(() => {
    try {
      localStorage.setItem(TAB_KEY, tab)
    } catch {
      // storage blocked: nothing to remember
    }
  }, [tab])

  const choose = (id: string) => {
    if (id === tab) return
    setTab(id)
    history.replaceState(null, '', `#${id}`)
    const heroH = heroRef.current?.offsetHeight ?? 0
    if (window.scrollY > heroH) window.scrollTo({ top: heroH, behavior: 'instant' })
  }

  const visible = searching ? PANELS : PANELS.filter((p) => p.id === tab)
  const anyHit = !searching || PANELS.some((p) =>
    p.sections.some((s) =>
      s.items.some((item) => {
        const text = `${norm(item.name)} ${norm(item.desc ?? '')} ${norm(item.price ?? '')} ${norm(s.title)}`
        return query.every((w) => text.includes(w))
      }),
    ),
  )

  return (
    <>
      <div className="wrap hero" ref={heroRef}>
        <Logo />
        <p className="tag">
          loveyouso<b>mosh.</b>
        </p>
      </div>

      <div className={searching ? 'bar searching' : 'bar'}>
        <div className="wrap bar-in">
          <nav className="tabs" ref={tabsRef} role="tablist" aria-label="Karte">
            <span className="pill" ref={pillRef} aria-hidden="true" />
            {PANELS.map((p) => (
              <a
                key={p.id}
                className="tab"
                role="tab"
                href={`#${p.id}`}
                data-p={p.id}
                aria-controls={`p-${p.id}`}
                aria-selected={p.id === tab}
                onClick={(e) => {
                  e.preventDefault()
                  choose(p.id)
                }}
              >
                {p.tab}
                {p.seasonal && <i className="leaf" aria-hidden="true" />}
              </a>
            ))}
          </nav>
          <label className="find" htmlFor="q">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m20 20-4.6-4.6" />
            </svg>
            <input
              id="q"
              type="search"
              placeholder="Suchen, z. B. Matcha"
              autoComplete="off"
              aria-label="Menü durchsuchen"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setQ('')
                  e.currentTarget.blur()
                }
              }}
            />
          </label>
        </div>
      </div>

      <main className="wrap" id="menu">
        {visible.map((p) => (
          <MenuPanel key={searching ? `s-${p.id}` : p.id} panel={p} query={query} />
        ))}
        {!anyHit && <p className="empty">Nichts gefunden. Probier ein anderes Wort.</p>}
      </main>

      <footer className="wrap foot">
        <p>Informationen zu Allergenen &amp; Zusatzstoffen erhalten Sie jederzeit auf Anfrage.</p>
        <div className="links">
          <a href="https://www.instagram.com/cafe.mosh/" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
            </svg>
            cafe.mosh
          </a>
          <a href="https://www.cafemosh.de/" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
            </svg>
            www.cafemosh.de
          </a>
        </div>
      </footer>
    </>
  )
}
