import { useEffect, useMemo, useState } from "react"

type IconName =
  | "arrow"
  | "book"
  | "chevron"
  | "close"
  | "dna"
  | "download"
  | "external"
  | "fiber"
  | "filter"
  | "heart"
  | "history"
  | "land"
  | "menu"
  | "nutrition"
  | "pin"
  | "play"
  | "search"
  | "shield"
  | "users"

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  dna: <><path d="m3 6 3 3 3-3 6 6 3-3 3 3" /><path d="m3 18 3-3 3 3 6-6 3 3 3-3" /></>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M5 21h14" /></>,
  external: <><path d="M15 3h6v6M10 14 21 3" /><path d="M18 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7" /></>,
  fiber: <><path d="M7 4c4 2 5 6 5 16M17 4c-4 2-5 6-5 16" /><path d="M5 9h14M6 14h12" /></>,
  filter: <path d="M4 5h16M7 12h10m-7 7h4" />,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
  land: <><path d="m3 20 6-9 4 5 3-4 5 8" /><path d="M3 20h18M17 5h.01" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  nutrition: <><path d="M12 22V8" /><path d="M7 12c-3 0-5-2-5-5 3 0 5 2 5 5ZM17 8c3 0 5-2 5-5-3 0-5 2-5 5ZM8 18c-3 0-5-2-5-5 3 0 5 2 5 5Z" /></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  play: <path d="m9 7 8 5-8 5V7Z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-4" />,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
}

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24">{paths[name]}</svg>
}

const photos = {
  hero: "https://images.unsplash.com/photo-1549874682-13ffd26ee224?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1800",
  white: "https://images.unsplash.com/photo-1652772731938-fb2acd8ada56?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000",
  portrait: "https://images.unsplash.com/photo-1632367531614-b53b42a3fee0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000",
  pasture: "https://images.unsplash.com/photo-1603104147308-73891c6be078?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000",
  snow: "https://images.unsplash.com/photo-1535435734705-4f0f32e27c83?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
  herd: "https://images.unsplash.com/photo-1571330177234-54304dac2beb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1100",
}

const species = [
  { title: "Biology & Behavior", text: "How yaks sense, communicate, socialize, and thrive.", image: photos.portrait, tag: "Living species" },
  { title: "History & Heritage", text: "A long relationship between yaks, people, and place.", image: photos.herd, tag: "Cultural record" },
  { title: "Genetics & Diversity", text: "Lineage, inheritance, coat color, and population diversity.", image: photos.white, tag: "Open research" },
  { title: "Yaks & Land", text: "Adaptation, grazing systems, biodiversity, and stewardship.", image: photos.snow, tag: "Field ecology" },
]

type Yak = {
  name: string
  location: string
  sex: string
  year: string
  color: string
  image: string
  note: string
}

const yaks: Yak[] = [
  { name: "Juniper", location: "Colorado", sex: "Cow", year: "2018", color: "Native black", image: photos.portrait, note: "Known for her calm presence and observant nature." },
  { name: "Tundra", location: "Alberta", sex: "Bull", year: "2020", color: "Royal", image: photos.white, note: "A striking white-coated yak with a curious temperament." },
  { name: "Moraine", location: "Montana", sex: "Cow", year: "2019", color: "Trim", image: photos.pasture, note: "Often found at the center of her small family group." },
  { name: "Kestrel", location: "Wyoming", sex: "Bull", year: "2021", color: "Native black", image: photos.hero, note: "A young yak adapting confidently to high-country seasons." },
]

const topics: { title: string; icon: IconName }[] = [
  { title: "Biology", icon: "heart" }, { title: "Behavior", icon: "users" },
  { title: "Husbandry", icon: "shield" }, { title: "Nutrition", icon: "nutrition" },
  { title: "Health", icon: "heart" }, { title: "Genetics", icon: "dna" },
  { title: "Reproduction", icon: "users" }, { title: "Fiber", icon: "fiber" },
  { title: "History", icon: "history" }, { title: "Ecology", icon: "land" },
  { title: "Conservation", icon: "shield" }, { title: "Research", icon: "book" },
]

const resources = [
  { type: "Field guide", title: "An introduction to yak behavior", source: "North American Yak Resource Hub", date: "Updated 2026", icon: "external" as IconName },
  { type: "Research paper", title: "Browse the yak genetics reading list", source: "Curated scholarly sources", date: "12 references", icon: "external" as IconName },
  { type: "Downloadable PDF", title: "Seasonal husbandry checklist", source: "Community-reviewed resource", date: "8 pages", icon: "download" as IconName },
  { type: "Video", title: "Reading herd behavior in the field", source: "Learning series", date: "18 minutes", icon: "play" as IconName },
]

const sponsors = [
  {
    name: "High Country Fiber Co.",
    category: "Fiber processing",
    headline: "From comb-out to finished yarn.",
    text: "Small-batch fiber services created for remarkable natural fibers.",
    url: "https://example.com",
    mark: "HC",
    tone: "bg-earth",
  },
  {
    name: "North Range Ag Supply",
    category: "Farm & herd supplies",
    headline: "Practical tools for thoughtful herd care.",
    text: "Equipment and essentials selected for small farms and northern climates.",
    url: "https://example.com",
    mark: "NR",
    tone: "bg-forest",
  },
  {
    name: "Field & Fleece Journal",
    category: "Independent publication",
    headline: "Stories from working landscapes.",
    text: "A quarterly journal about animals, natural fibers, people, and place.",
    url: "https://example.com",
    mark: "F&F",
    tone: "bg-mountain",
  },
]

const nav = ["Explore Yaks", "Understand Yaks", "Yaks & People", "Yaks & Land", "Resource Library", "Community", "About"]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [globalSearch, setGlobalSearch] = useState("")
  const [yakSearch, setYakSearch] = useState("")
  const [sex, setSex] = useState("All")
  const [resourceType, setResourceType] = useState("All")
  const [selectedYak, setSelectedYak] = useState<Yak | null>(null)
  const [sponsorIndex, setSponsorIndex] = useState(0)
  const [sponsorPaused, setSponsorPaused] = useState(false)

  useEffect(() => {
    if (sponsorPaused) return
    const interval = window.setInterval(() => {
      setSponsorIndex((current) => (current + 1) % sponsors.length)
    }, 6000)
    return () => window.clearInterval(interval)
  }, [sponsorPaused])

  const filteredYaks = useMemo(() => yaks.filter((yak) => {
    const query = yakSearch.toLowerCase()
    return (sex === "All" || yak.sex === sex) && `${yak.name} ${yak.location} ${yak.color}`.toLowerCase().includes(query)
  }), [sex, yakSearch])

  const filteredResources = resourceType === "All" ? resources : resources.filter((item) => item.type === resourceType)

  const goTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <div className="bg-forest px-5 py-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ivory/75">
        A living archive presented by the North American Yak Association
      </div>
      <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-5 py-4 md:px-8 lg:px-10">
          <button className="group flex shrink-0 items-center gap-3 text-left" onClick={() => scrollTo({ top: 0, behavior: "smooth" })} aria-label="North American Yak home">
            <span className="relative grid size-12 place-items-center rounded-full border border-forest/20 bg-forest text-ivory">
              <span className="font-display text-xl italic">Y</span>
              <span className="absolute -right-0.5 top-0 size-2.5 rounded-full border-2 border-ivory bg-ochre" />
            </span>
            <span>
              <span className="block font-display text-xl font-semibold leading-none tracking-tight">North American Yak</span>
              <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.2em] text-charcoal/50">Digital library & resource hub</span>
            </span>
          </button>
          <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex" aria-label="Main navigation">
            {nav.map((item) => <button className="text-xs font-semibold text-charcoal/65 transition-colors hover:text-forest" key={item} onClick={() => goTo(item === "Explore Yaks" ? "#directory" : item === "Resource Library" ? "#library" : item === "Yaks & Land" ? "#land" : item === "Community" ? "#community" : item === "About" ? "#about" : "#understand")}>{item}</button>)}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <button className="grid size-11 place-items-center rounded-full border border-charcoal/15 hover:bg-linen" onClick={() => document.querySelector<HTMLInputElement>("#global-search")?.focus()} aria-label="Search the archive"><Icon name="search" className="size-4" /></button>
            <button className="rounded-full bg-forest px-5 py-3 text-xs font-bold text-ivory transition-colors hover:bg-charcoal" onClick={() => goTo("#about")}>About NAYAK</button>
          </div>
          <button className="grid size-11 place-items-center rounded-full border border-charcoal/15 xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}><Icon name={menuOpen ? "close" : "menu"} /></button>
        </div>
        {menuOpen && <nav className="absolute inset-x-0 top-full max-h-[75vh] overflow-auto border-b border-charcoal/10 bg-ivory px-5 pb-6 shadow-2xl xl:hidden">{nav.map((item) => <button className="flex w-full items-center justify-between border-b border-charcoal/10 py-4 text-left font-semibold" key={item} onClick={() => goTo(item === "Explore Yaks" ? "#directory" : item === "Resource Library" ? "#library" : item === "Community" ? "#community" : "#understand")}>{item}<Icon name="chevron" className="size-4" /></button>)}</nav>}
      </header>

      <main>
        <section className="relative min-h-[45rem] overflow-hidden bg-charcoal md:min-h-[50rem]">
          <img className="absolute inset-0 h-full w-full object-cover object-center opacity-80" src={photos.hero} alt="A yak standing in an open mountain landscape" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          <div className="relative mx-auto flex min-h-[45rem] max-w-site items-end px-5 pb-16 pt-20 md:min-h-[50rem] md:px-8 md:pb-20 lg:px-10">
            <div className="max-w-3xl text-ivory">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-ochre-light"><span className="h-px w-10 bg-ochre" />The species is the story</p>
              <h1 className="font-display text-6xl font-medium leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-9xl">Meet the <span className="italic">Yak.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/78 sm:text-xl">Explore the species, discover their stories, and connect with the knowledge, research, and people advancing our understanding of yaks in North America.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-ivory px-6 py-4 text-sm font-bold text-charcoal" onClick={() => goTo("#directory")}>Explore yaks <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" /></button>
                <button className="inline-flex items-center justify-center gap-3 rounded-full border border-ivory/40 bg-ivory/10 px-6 py-4 text-sm font-bold text-ivory backdrop-blur-md hover:bg-ivory hover:text-charcoal" onClick={() => goTo("#understand")}>Discover yak knowledge</button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-7 right-8 hidden items-center gap-3 rounded-full border border-ivory/25 bg-charcoal/35 px-4 py-2 text-xs text-ivory/70 backdrop-blur-md md:flex"><span className="size-2 rounded-full bg-ochre" /> Scroll to enter the archive</div>
        </section>

        <section className="border-b border-charcoal/10 bg-ivory px-5 py-8 md:px-8 lg:px-10">
          <form className="mx-auto flex max-w-site flex-col gap-3 md:flex-row md:items-center" onSubmit={(event) => { event.preventDefault(); goTo("#library") }}>
            <label className="shrink-0 font-display text-xl font-semibold" htmlFor="global-search">Search across yak knowledge</label>
            <div className="relative flex-1">
              <Icon name="search" className="absolute left-5 top-1/2 size-4 -translate-y-1/2 text-charcoal/40" />
              <input id="global-search" className="w-full rounded-full border border-charcoal/15 bg-white py-4 pl-12 pr-5 text-sm outline-none placeholder:text-charcoal/35 focus:border-forest" placeholder="Search behavior, genetics, ecology, history..." value={globalSearch} onChange={(event) => setGlobalSearch(event.target.value)} />
            </div>
            <button className="rounded-full bg-forest px-6 py-4 text-sm font-bold text-ivory" type="submit">Search the library</button>
          </form>
        </section>

        <aside
          className="border-b border-charcoal/10 bg-white px-5 py-7 md:px-8 lg:px-10"
          aria-label="Featured sponsor"
          onMouseEnter={() => setSponsorPaused(true)}
          onMouseLeave={() => setSponsorPaused(false)}
          onFocusCapture={() => setSponsorPaused(true)}
          onBlurCapture={() => setSponsorPaused(false)}
        >
          <div className="mx-auto max-w-site">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-charcoal/40">
                Sponsored · Supports the North American Yak knowledge archive
              </p>
              <a className="text-[0.65rem] font-bold text-earth underline decoration-earth/30 underline-offset-4 hover:decoration-earth" href="mailto:info@northamericanyak.org?subject=NAYAK%20sponsorship">
                Become a sponsor
              </a>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-charcoal/10 bg-linen">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${sponsorIndex * 100}%)` }}
              >
                {sponsors.map((sponsor) => (
                  <a
                    className="grid w-full shrink-0 gap-5 p-6 transition-colors hover:bg-ivory sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7"
                    href={sponsor.url}
                    key={sponsor.name}
                    target="_blank"
                    rel="noreferrer sponsored"
                    aria-label={`Visit sponsor ${sponsor.name}, opens in a new tab`}
                  >
                    <span className={`grid size-14 place-items-center rounded-2xl ${sponsor.tone} font-display text-lg font-semibold text-ivory`}>
                      {sponsor.mark}
                    </span>
                    <span>
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-earth">
                        {sponsor.category} · {sponsor.name}
                      </span>
                      <span className="mt-1 block font-display text-2xl font-semibold leading-tight">
                        {sponsor.headline}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-charcoal/50">
                        {sponsor.text}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-charcoal/65">
                      Visit website
                      <Icon name="external" className="size-4" />
                    </span>
                  </a>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 flex gap-1.5 rounded-full bg-white/80 p-1.5 backdrop-blur sm:bottom-auto sm:right-5 sm:top-5">
                {sponsors.map((sponsor, index) => (
                  <button
                    className={`h-2 rounded-full transition-all ${sponsorIndex === index ? "w-6 bg-forest" : "w-2 bg-charcoal/20 hover:bg-charcoal/40"}`}
                    key={sponsor.name}
                    onClick={(event) => {
                      event.preventDefault()
                      setSponsorIndex(index)
                    }}
                    aria-label={`Show sponsor ${index + 1}: ${sponsor.name}`}
                    aria-current={sponsorIndex === index}
                  />
                ))}
              </div>
            </div>
            <p className="mt-2 text-right text-[0.6rem] text-charcoal/35">
              Illustrative sponsor placements · Advertising does not imply editorial endorsement
            </p>
          </div>
        </aside>

        <section className="px-5 py-20 md:px-8 lg:px-10 lg:py-28" id="understand">
          <div className="mx-auto max-w-site">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="eyebrow">Explore the species</p><h2 className="section-title">To know a yak is to see<br className="hidden sm:block" /> a world differently.</h2></div>
              <p className="max-w-md text-base leading-7 text-charcoal/60">Follow your curiosity through natural history, living science, cultural knowledge, and relationships with the land.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {species.map((item, index) => <article className={`group relative overflow-hidden rounded-[2rem] ${index === 0 || index === 3 ? "md:min-h-[31rem]" : "md:min-h-[25rem]"} min-h-[26rem]`} key={item.title}>
                <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={`Yak photography representing ${item.title}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-ivory sm:p-9">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ochre-light">{item.tag}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{item.title}</h3>
                  <div className="mt-3 flex items-end justify-between gap-4"><p className="max-w-sm text-sm leading-6 text-ivory/70">{item.text}</p><button className="grid size-11 shrink-0 place-items-center rounded-full bg-ivory text-charcoal transition-transform group-hover:translate-x-1" aria-label={`Explore ${item.title}`}><Icon name="arrow" className="size-4" /></button></div>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="bg-linen px-5 py-20 md:px-8 lg:px-10 lg:py-28" id="directory">
          <div className="mx-auto max-w-site">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div><p className="eyebrow">North American yak directory</p><h2 className="section-title">Every yak has a story.</h2></div>
              <div><p className="max-w-xl text-base leading-7 text-charcoal/60">Explore individual animals, their histories, relationships, and place within the North American yak population.</p><p className="mt-3 text-xs text-charcoal/45">Prototype records below are illustrative and do not represent registered animals.</p></div>
            </div>
            <div className="mt-10 rounded-3xl border border-charcoal/10 bg-ivory p-3 shadow-sm">
              <div className="grid gap-2 md:grid-cols-[1fr_auto_auto]">
                <div className="relative"><Icon name="search" className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-charcoal/40" /><input className="w-full rounded-2xl border-0 bg-white py-4 pl-11 pr-4 text-sm outline-none" placeholder="Search by name, color, or location" value={yakSearch} onChange={(event) => setYakSearch(event.target.value)} aria-label="Search yak directory" /></div>
                <div className="flex rounded-2xl bg-white p-1">{["All", "Cow", "Bull"].map((item) => <button className={`rounded-xl px-4 py-3 text-xs font-bold ${sex === item ? "bg-forest text-ivory" : "text-charcoal/55"}`} key={item} onClick={() => setSex(item)}>{item}</button>)}</div>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-charcoal/10 bg-white px-5 py-3 text-xs font-bold"><Icon name="filter" className="size-4" /> More filters</button>
              </div>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredYaks.map((yak) => <button className="group overflow-hidden rounded-3xl bg-ivory text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl" key={yak.name} onClick={() => setSelectedYak(yak)}>
                <div className="relative aspect-[4/5] overflow-hidden"><img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={yak.image} alt={`Illustrative yak portrait for ${yak.name}`} /><span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-wider backdrop-blur">Illustrative profile</span></div>
                <div className="p-5"><div className="flex items-center justify-between"><h3 className="font-display text-2xl font-semibold">{yak.name}</h3><Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" /></div><p className="mt-1 text-xs text-charcoal/50">{yak.location} · {yak.sex} · {yak.year}</p></div>
              </button>)}
            </div>
            {filteredYaks.length === 0 && <div className="mt-8 rounded-3xl border border-dashed border-charcoal/20 bg-ivory p-12 text-center"><p className="font-display text-2xl">No illustrative records match that search.</p><button className="mt-4 text-sm font-bold underline" onClick={() => { setYakSearch(""); setSex("All") }}>Clear filters</button></div>}
            <div className="mt-8 flex justify-center"><button className="inline-flex items-center gap-3 rounded-full border border-charcoal/20 px-6 py-4 text-sm font-bold hover:bg-forest hover:text-ivory">Explore the yak directory <Icon name="arrow" className="size-4" /></button></div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-site">
            <div className="flex items-end justify-between gap-6"><div><p className="eyebrow">Field stories</p><h2 className="section-title">Lives worth observing.</h2></div><button className="hidden items-center gap-2 text-sm font-bold md:flex">Explore yak stories <Icon name="arrow" className="size-4" /></button></div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
              <article className="group relative min-h-[35rem] overflow-hidden rounded-[2rem]"><img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={photos.herd} alt="Yaks together in a green landscape" /><div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-8 text-ivory sm:p-10"><p className="text-xs font-bold uppercase tracking-widest text-ochre-light">Behavior · 8 min read</p><h3 className="mt-3 max-w-xl font-display text-4xl font-semibold sm:text-5xl">What the herd can teach us about belonging</h3><p className="mt-4 max-w-xl text-sm leading-6 text-ivory/65">An illustrated introduction to social bonds, awareness, and communication within a yak herd.</p></div></article>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {[["From calf to adult", "A visual guide to growth and development.", photos.white], ["Listening before labeling", "Field notes on observing yak behavior well.", photos.portrait]].map(([title, text, image]) => <article className="grid min-h-64 overflow-hidden rounded-3xl bg-stone/55 sm:grid-rows-[1fr_auto]" key={title}><div className="min-h-36 overflow-hidden"><img className="h-full w-full object-cover" src={image} alt="" /></div><div className="p-5"><p className="text-[0.62rem] font-bold uppercase tracking-wider text-earth">Illustrative story</p><h3 className="mt-2 font-display text-2xl font-semibold">{title}</h3><p className="mt-2 text-sm text-charcoal/55">{text}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-charcoal/10 bg-white px-5 py-20 md:px-8 lg:px-10" id="understand-topics">
          <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <div><p className="eyebrow">Understand yaks</p><h2 className="section-title">Knowledge with room to grow.</h2><p className="mt-5 max-w-sm leading-7 text-charcoal/55">An expanding, cross-linked map of what we know—and what we are still learning.</p></div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-charcoal/10 bg-charcoal/10 md:grid-cols-3">
              {topics.map((topic) => <button className="group flex items-center justify-between gap-3 bg-ivory p-5 text-left transition hover:bg-linen sm:p-6" key={topic.title}><span className="flex items-center gap-3"><Icon name={topic.icon} className="size-5 text-forest" /><span className="text-sm font-bold">{topic.title}</span></span><Icon name="chevron" className="size-3 text-charcoal/30 transition-transform group-hover:translate-x-1" /></button>)}
            </div>
          </div>
        </section>

        <section className="relative min-h-[42rem] overflow-hidden" id="land">
          <img className="absolute inset-0 h-full w-full object-cover" src={photos.snow} alt="A small herd of yaks moving across a snowy mountain landscape" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/45 to-transparent" />
          <div className="relative mx-auto flex min-h-[42rem] max-w-site items-center px-5 py-20 text-ivory md:px-8 lg:px-10">
            <div className="max-w-2xl"><p className="eyebrow !text-ochre-light">Ecology & stewardship</p><h2 className="mt-4 font-display text-5xl font-semibold leading-tight sm:text-7xl">Yaks, ecology<br />& the land.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-ivory/70">Explore the relationships between yaks, their environments, grazing systems, biodiversity, and responsible land stewardship—with evidence and regional context.</p><button className="mt-8 inline-flex items-center gap-3 rounded-full bg-ivory px-6 py-4 text-sm font-bold text-charcoal">Explore yaks & land <Icon name="arrow" className="size-4" /></button></div>
          </div>
        </section>

        <section className="bg-ivory px-5 py-20 md:px-8 lg:px-10 lg:py-28" id="library">
          <div className="mx-auto max-w-site">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div><p className="eyebrow">The digital library</p><h2 className="section-title">Start with a question.<br />Follow the evidence.</h2></div><p className="max-w-md text-sm leading-6 text-charcoal/55">Discover research, practical guidance, oral histories, film, and archival material gathered into one navigable collection.</p></div>
            <div className="mt-10 flex flex-wrap gap-2">{["All", "Field guide", "Research paper", "Downloadable PDF", "Video"].map((type) => <button className={`rounded-full px-4 py-2.5 text-xs font-bold transition ${resourceType === type ? "bg-forest text-ivory" : "border border-charcoal/15 bg-white hover:border-forest"}`} key={type} onClick={() => setResourceType(type)}>{type}</button>)}</div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-charcoal/10 bg-white">
              {filteredResources.map((resource, index) => <button className="group grid w-full gap-4 border-b border-charcoal/10 p-6 text-left last:border-0 hover:bg-linen/55 md:grid-cols-[auto_1fr_auto] md:items-center md:p-7" key={resource.title}>
                <span className="text-xs font-semibold text-charcoal/35">{String(index + 1).padStart(2, "0")}</span>
                <span><span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-earth">{resource.type}</span><span className="mt-2 block font-display text-2xl font-semibold">{resource.title}</span><span className="mt-2 block text-xs text-charcoal/45">{resource.source} · {resource.date}</span></span>
                <span className="grid size-11 place-items-center rounded-full border border-charcoal/15 transition group-hover:bg-forest group-hover:text-ivory"><Icon name={resource.icon} className="size-4" /></span>
              </button>)}
            </div>
          </div>
        </section>

        <section className="bg-mountain px-5 py-20 text-ivory md:px-8 lg:px-10 lg:py-28" id="community">
          <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div><p className="eyebrow !text-ivory/55">North American yak community</p><h2 className="mt-4 font-display text-5xl font-semibold leading-tight">People, places & shared knowledge.</h2><p className="mt-5 max-w-lg leading-7 text-ivory/65">Find consented herd locations, regional connections, researchers, educators, events, and organizations supporting yak knowledge.</p><div className="mt-8 flex flex-wrap gap-3"><button className="rounded-full bg-ivory px-6 py-4 text-sm font-bold text-charcoal">Explore the community</button><button className="rounded-full border border-ivory/25 px-6 py-4 text-sm font-bold">Browse accessible list</button></div></div>
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-ivory/20 bg-forest/50 p-6">
              <div className="absolute inset-0 map-grid opacity-30" />
              <div className="relative flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-widest text-ivory/50">Community map preview</p><span className="rounded-full bg-ivory/10 px-3 py-1.5 text-xs">North America</span></div>
              {[["18%","31%","Pacific"],["44%","54%","Mountain"],["68%","43%","Great Lakes"],["78%","67%","Northeast"],["32%","73%","Western Canada"]].map(([left, top, label]) => <button className="absolute group" style={{ left, top }} key={label} aria-label={`${label} region`}><span className="grid size-5 place-items-center rounded-full border-4 border-ivory bg-ochre shadow-xl transition-transform group-hover:scale-125" /><span className="absolute left-1/2 top-7 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-ivory px-3 py-2 text-xs font-bold text-charcoal shadow-lg group-hover:block">{label}</span></button>)}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-ivory p-4 text-charcoal shadow-xl"><span><span className="block text-xs font-bold">Explore by region</span><span className="mt-1 block text-[0.65rem] text-charcoal/45">Map locations require participant consent</span></span><Icon name="arrow" className="size-4" /></div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 lg:px-10 lg:py-28" id="about">
          <div className="mx-auto grid max-w-site gap-10 rounded-[2rem] bg-linen p-8 md:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16">
            <div><p className="eyebrow">The association behind the archive</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-6xl">The yak is the subject. Knowledge is the purpose.</h2><p className="mt-6 max-w-xl leading-7 text-charcoal/60">NAYAK supports the people building a deeper, more responsible understanding of yaks across North America.</p></div>
            <div className="grid grid-cols-2 gap-2">{["About NAYAK","Membership","Board & committees","Census","Registry","Publications","News","Contact"].map((item) => <button className="flex items-center justify-between rounded-2xl bg-ivory p-4 text-left text-xs font-bold hover:bg-white" key={item}>{item}<Icon name="chevron" className="size-3" /></button>)}</div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal px-5 pb-8 pt-16 text-ivory md:px-8 lg:px-10">
        <div className="mx-auto max-w-site">
          <div className="grid gap-12 border-b border-ivory/15 pb-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div><p className="font-display text-3xl font-semibold">North American Yak</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-ochre-light">Digital library & resource hub</p><p className="mt-5 max-w-sm text-sm leading-6 text-ivory/50">A living natural-history archive celebrating yaks, advancing knowledge, and connecting community.</p></div>
            {[["Explore","Yak directory","Yak stories","Yaks & land"],["Knowledge","Biology","Husbandry","Research library"],["NAYAK","About","Membership","Contact"]].map(([title,...links]) => <div key={title}><p className="text-xs font-bold uppercase tracking-widest text-ochre-light">{title}</p><div className="mt-5 flex flex-col gap-3">{links.map((link) => <button className="text-left text-sm text-ivory/55 hover:text-ivory" key={link}>{link}</button>)}</div></div>)}
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-ivory/35 sm:flex-row sm:justify-between"><p>© 2026 North American Yak Association</p><div className="flex gap-5"><button>Privacy</button><button>Accessibility</button><button>Content standards</button></div></div>
        </div>
      </footer>

      {selectedYak && <div className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/70 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-label={`${selectedYak.name} illustrative profile`}>
        <div className="max-h-[94vh] w-full max-w-5xl overflow-auto rounded-t-[2rem] bg-ivory shadow-2xl sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[24rem] lg:min-h-[42rem]"><img className="absolute inset-0 h-full w-full object-cover" src={selectedYak.image} alt={`Illustrative profile image for ${selectedYak.name}`} /><button className="absolute left-5 top-5 grid size-11 place-items-center rounded-full bg-ivory text-charcoal lg:hidden" onClick={() => setSelectedYak(null)} aria-label="Close profile"><Icon name="close" /></button></div>
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-start justify-between"><div><p className="eyebrow">Illustrative yak profile</p><h2 className="mt-3 font-display text-5xl font-semibold">{selectedYak.name}</h2></div><button className="hidden size-11 place-items-center rounded-full border border-charcoal/15 lg:grid" onClick={() => setSelectedYak(null)} aria-label="Close profile"><Icon name="close" /></button></div>
              <p className="mt-6 text-lg leading-8 text-charcoal/60">{selectedYak.note}</p>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10">{[["Sex",selectedYak.sex],["Birth year",selectedYak.year],["Color",selectedYak.color],["Region",selectedYak.location]].map(([label,value]) => <div className="bg-white p-4" key={label}><p className="text-[0.62rem] font-bold uppercase tracking-wider text-charcoal/40">{label}</p><p className="mt-1 text-sm font-semibold">{value}</p></div>)}</div>
              <div className="mt-9 border-t border-charcoal/10 pt-7"><div className="flex items-center justify-between"><h3 className="font-display text-2xl font-semibold">Lineage & relationships</h3><span className="rounded-full bg-stone px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-wider">Public record</span></div><div className="mt-5 rounded-2xl border border-dashed border-charcoal/20 p-6 text-center text-sm text-charcoal/45">Pedigree visualization prepared for future verified records</div></div>
              <div className="mt-8 rounded-2xl bg-linen p-4 text-xs leading-5 text-charcoal/55"><strong className="text-charcoal">Sample content notice:</strong> This profile demonstrates future information architecture. It is not an official registration record, and no private health or genetic data is shown.</div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}
