import type { ReactNode } from "react";
import { Mail, Phone, MapPin, Printer, Linkedin } from "lucide-react";

export default function CVSite() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 print:bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-neutral-200 print:static print:top-auto print:z-auto print:bg-white print:border-neutral-300 print:backdrop-blur-none print:shadow-none">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight">Martin Mosinger</h1>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-4 text-sm text-neutral-600 print:flex">
              <a href="#profil" className="hover:text-neutral-900 print:text-neutral-900">Profil</a>
              <a href="#praxe" className="hover:text-neutral-900 print:text-neutral-900">Praxe</a>
              <a href="#vzdelani" className="hover:text-neutral-900 print:text-neutral-900">Vzdělání</a>
              <a href="#certifikaty" className="hover:text-neutral-900 print:text-neutral-900">Certifikáty</a>
              <a href="#kontakt" className="hover:text-neutral-900 print:text-neutral-900">Kontakt</a>
            </nav>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-white print:hidden"
            >
              <Printer className="h-4 w-4" aria-hidden />
              Vytisknout
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto grid gap-8 px-4 py-8 lg:grid-cols-[320px,1fr] print:grid-cols-[280px,1fr] print:gap-8 print:px-0 print:py-6 print:max-w-none print:w-full print:items-start">
        {/* Sidebar */}
        <aside className="space-y-8 print:space-y-6">
          <Card>
            <SectionTitle>Detaily</SectionTitle>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Praha</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> 608 373 061</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> <a className="underline decoration-dotted" href="mailto:mosingermartin+prace@gmail.com">mosingermartin+prace@gmail.com</a></li>
            </ul>
          </Card>

          <Card>
            <SectionTitle>Dovednosti</SectionTitle>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <Skill name="Cisco IOS" level={4} />
              <Skill name="Nokia SR OS" level={4} />
              <Skill name="Nokia SR Linux" level={2} />
              <Skill name="MikroTik WinBox" level={3} />
              <Skill name="GNS3 & Packet Tracer" level={3} />
              <Skill name="Linux & Bash" level={3} />
              <Skill name="Python" level={3} />
              <Skill name="SQL" level={2} />
              <Skill name="C#" level={2} />
              <Skill name="C/C++" level={1} />
            </div>
          </Card>

          <Card>
            <SectionTitle>Koníčky</SectionTitle>
            <ul className="mt-3 list-disc pl-5 text-sm leading-6">
              <li>Počítačové sítě</li>
              <li>Kybernetická bezpečnost</li>
              <li>Koně</li>
            </ul>
          </Card>

          <Card>
            <SectionTitle>Odkazy</SectionTitle>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Linkedin className="w-4 h-4"/> <a className="underline decoration-dotted" href="https://www.linkedin.com/in/martin-mosinger-junior/">LinkedIn</a></li>
            </ul>
          </Card>
        </aside>

        {/* Content */}
        <section className="space-y-8">
          <Card id="profil">
            <SectionTitle>Profil</SectionTitle>
            <p className="mt-3 text-[15px] leading-7 text-neutral-700">
              Učenlivý FD IP & IT specialista s víceletou praxí v instalaci optických kabelů, provozem infrastruktury a se zkušeností na auditu v souladu s NIS2.
              Vystudovaná SŠ obor kybernetická bezpečnost, 3 semestry na ČVUT FIT a následné kombinované studium na ČZU PEF. Směr studia směřován převážně na síťové technologie a kybernetickou bezpečnost, momentálně se připravuji na získání certifikace CCNP Enterprise. Mimo síťové technologie mám zkušenosti s:
            </p>
            <ul className="mt-4 list-disc pl-5 text-[15px] leading-7 text-neutral-700">
              <li>Linux, skriptování v Bash/Python</li>
              <li>Automatizaci provozních procesů</li>
              <li>Virtualizace - GNS3, EVE‑NG, Docker, VirtualBox, Proxmox</li>
              <li>Zkušenost s pokládkou, zafukováním a svařováním opt. kabelu</li>
            </ul>
          </Card>

          <Card id="praxe">
            <SectionTitle>Předchozí praxe</SectionTitle>
            <Timeline>
              <TimelineItem
                title="Specialista dohledového centra, FD IP & IT, CETIN"
                period="Květen 2023 — Současnost"
                highlights={[
                  "Dohled a provoz last-mile technologií (DSLAM, GPON, rádiové spoje) navázaný na core–agg–access infrastrukturu.",
                  "Správa síťových prvků a protokolů MPLS, IS-IS, BGP, LAG, PPPoE, RADIUS, QoS, SyncE, PTP a SD-WAN."
                ]}
              />
              <TimelineItem title="IT technik v terénu, Broadband" period="2016 — 2024" 
              highlights={[
                  "Zkušenost s instalací rádií, svařováním optických vláken a montování OLT/ONT.",
                ]}
                />
            </Timeline>
          </Card>

          <Card id="vzdelani">
            <SectionTitle>Vzdělání</SectionTitle>
            <Timeline>
              <TimelineItem title="Informatika, ČZU PEF" period="Září 2023 — Květen 2025"/>
              <TimelineItem title="Počítačové sítě a Internet, ČVUT FIT" period="Září 2021 — Prosinec 2022"/>
              <TimelineItem title="Kybernetická bezpečnost, SSPŠ" period="Září 2017 — Červen 2021"/>
            </Timeline>
          </Card>

          <Card id="certifikaty">
            <SectionTitle>Certifikáty</SectionTitle>
            <ul className="mt-3 space-y-2 text-sm">
              <li>SP1 – Základy MPLS, ALEF</li>
              <li>SP2 - Advanced MPLS, ALEF</li>
              <li>RS3 - Konfigurace a design BGP, ALEF</li>
              <li>RS4 - Konfigurace protokolu IS-IS, ALEF</li>
              <li>CCNA Routing and Switching, Cisco</li>
              <li>IT essentials: PC Hardware and Software, Cisco</li>
              <li>MOS Word & Powerpoint, Microsoft</li>
            </ul>
          </Card>

          <Card id="kontakt">
            <SectionTitle>Kontakt</SectionTitle>
            <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
              <InfoField icon={<Mail className="w-4 h-4"/>} label="E‑mail" value={<a className="underline decoration-dotted" href="mailto:mosingermartin+prace@gmail.com">mosingermartin+prace@gmail.com</a>} />
              <InfoField icon={<Phone className="w-4 h-4"/>} label="Telefon" value="608 373 061" />
              <InfoField icon={<MapPin className="w-4 h-4"/>} label="Adresa" value="Praha" />
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-neutral-500 print:text-neutral-700 print:py-6">
        © {new Date().getFullYear()} Martin Mosinger — osobní profil
      </footer>
    </div>
  );
}

/* ——— UI helpers ——— */
function Card({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm print:shadow-none print:border-neutral-300 print:bg-white print:break-inside-avoid print:p-4"
    >
      {children}
    </section>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold tracking-tight print:text-neutral-900">{children}</h2>;
}

function Skill({ name, level }: { name: string; level: 1|2|3|4|5 }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm">{name}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`inline-block w-2.5 h-2.5 rounded-full ${i < level ? "bg-neutral-900" : "bg-neutral-200"}`}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

function Timeline({ children }: { children: ReactNode }) {
  return <div className="mt-4 space-y-5 print:space-y-4">{children}</div>;
}

function TimelineItem({
  title,
  period,
  description,
  highlights,
}: {
  title: string;
  period: string;
  description?: ReactNode;
  highlights?: string[];
}) {
  return (
    <div className="relative pl-6 print:pl-5">
      <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-900" />
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="text-xs text-neutral-500 print:text-neutral-600">{period}</div>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-neutral-700 print:text-neutral-800">{description}</p>
      ) : null}
      {highlights && highlights.length > 0 ? (
        <ul className="mt-2 space-y-1 text-sm leading-6 text-neutral-700 print:text-neutral-800">
          {highlights.map((item, index) => (
            <li key={`${title}-highlight-${index}`} className="flex gap-2">
              <span className="mt-[0.45em] h-1.5 w-1.5 flex-none rounded-full bg-neutral-300 print:bg-neutral-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function InfoField({ icon, label, value }: { icon: ReactNode; label: string; value: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 print:border-neutral-300 print:bg-white">
      {icon}
      <div className="grid">
        <span className="text-[11px] uppercase tracking-wide text-neutral-500">{label}</span>
        <span className="text-sm">{value}</span>
      </div>
    </div>
  );
}
