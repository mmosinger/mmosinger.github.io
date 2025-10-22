import type { ReactNode } from "react";
import { Mail, Phone, MapPin, Github, Globe } from "lucide-react";

export default function CVSite() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Martin Mosinger</h1>
          <nav className="hidden md:flex items-center gap-4 text-sm text-neutral-600">
            <a href="#profil" className="hover:text-neutral-900">Profil</a>
            <a href="#praxe" className="hover:text-neutral-900">Praxe</a>
            <a href="#vzdelani" className="hover:text-neutral-900">Vzdělání</a>
            <a href="#certifikaty" className="hover:text-neutral-900">Certifikáty</a>
            <a href="#kontakt" className="hover:text-neutral-900">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-[320px,1fr] gap-8">
        {/* Sidebar */}
        <aside className="space-y-8">
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
              <li>UX</li>
              <li>Kybernetická bezpečnost</li>
              <li>Koně</li>
            </ul>
          </Card>

          <Card>
            <SectionTitle>Odkazy</SectionTitle>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Globe className="w-4 h-4"/> <a className="underline decoration-dotted" href="#">Portfolio (volitelné)</a></li>
              <li className="flex items-center gap-2"><Github className="w-4 h-4"/> <a className="underline decoration-dotted" href="#">GitHub (volitelné)</a></li>
            </ul>
          </Card>
        </aside>

        {/* Content */}
        <section className="space-y-8">
          <Card id="profil">
            <SectionTitle>Profil</SectionTitle>
            <p className="mt-3 text-[15px] leading-7 text-neutral-700">
              Učenlivý FD IP & IT specialista s víceletou praxí v instalaci optických kabelů, provozem infrastruktury a se zkušeností na auditu v souladu s NIS2.
              Vystudovaná SŠ obor kybernetická bezpečnost, 3 semestry na ČVUT FIT a následné kombinované studium na ČZU PEF. Směr studia směřován převážně na síťové technologie a kybernetickou bezpečnost, momentálně se připravuji na získání certifikace CCNP Enterprise.
            </p>
            <ul className="mt-4 list-disc pl-5 text-[15px] leading-7 text-neutral-700">
              <li>Dovednosti s Linuxem, skriptováním v Bash/Python</li>
              <li>Zkušenost s pokládkou, zafukováním a svařováním opt. kabelu</li>
              <li>Zájem o automatizaci všech procesů</li>
              <li>Zkušenosti s GNS3, EVE‑NG, Docker, VirtualBox</li>
            </ul>
          </Card>

          <Card id="praxe">
            <SectionTitle>Předchozí praxe</SectionTitle>
            <Timeline>
              <TimelineItem title="Specialista dohledového centra, FD IP & IT, CETIN" period="Květen 2023 — Současnost"/>
              <TimelineItem title="IT technik v terénu, Broadband" period="—"/>
            </Timeline>
          </Card>

          <Card id="vzdelani">
            <SectionTitle>Vzdělání</SectionTitle>
            <Timeline>
              <TimelineItem title="Informatika, ČZU PEF" period="Zář 2023 — Současnost"/>
              <TimelineItem title="Počítačové sítě a Internet, ČVUT FIT" period="Zář 2021 — Pro 2022"/>
              <TimelineItem title="Kybernetická bezpečnost, SSPŠ" period="Zář 2017 — Čvn 2021"/>
            </Timeline>
          </Card>

          <Card id="certifikaty">
            <SectionTitle>Certifikáty</SectionTitle>
            <ul className="mt-3 space-y-2 text-sm">
              <li>SP1 – Základy MPLS, ALEF</li>
              <li>CCNA Routing and Switching, Cisco</li>
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
      <footer className="py-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Martin Mosinger — osobní profil
      </footer>
    </div>
  );
}

/* ——— UI helpers ——— */
function Card({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-5">
      {children}
    </section>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold tracking-tight">{children}</h2>;
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
  return <div className="mt-4 space-y-5">{children}</div>;
}

function TimelineItem({ title, period }: { title: string; period: string }) {
  return (
    <div className="relative pl-6">
      <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-900"/>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-neutral-500">{period}</div>
    </div>
  );
}

function InfoField({ icon, label, value }: { icon: ReactNode; label: string; value: ReactNode }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200">
      {icon}
      <div className="grid">
        <span className="text-[11px] uppercase tracking-wide text-neutral-500">{label}</span>
        <span className="text-sm">{value}</span>
      </div>
    </div>
  );
}
