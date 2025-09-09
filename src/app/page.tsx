import {
  AcademicCapIcon,
  BeakerIcon,
  BoltIcon,
  CheckCircleIcon,
  ClockIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  HandRaisedIcon,
  HeartIcon,
  HeartIcon as HeartSolidIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const specialisaties = [
    {
      title: "Manuele- en McKenzietherapie",
      description: "Gespecialiseerde behandeling van gewrichten en wervelkolom door manuele technieken en de McKenzie methode voor rug- en nekpijn.",
      icon: HandRaisedIcon,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Triggerpointbehandeling & Dry Needling",
      description: "Effectieve behandeling van spierknopen en triggerpoints met dry needling technieken voor snelle pijnverlichting.",
      icon: BeakerIcon,
      color: "from-cyan-500 to-emerald-500"
    },
    {
      title: "Psychosomatische Fysiotherapie",
      description: "Behandeling van klachten waarbij lichamelijke en psychische factoren elkaar beïnvloeden.",
      icon: CpuChipIcon,
      color: "from-emerald-500 to-blue-500"
    },
    {
      title: "Hoofdpijn & Duizeligheidsklachten",
      description: "Gespecialiseerde behandeling van verschillende vormen van hoofdpijn en duizeligheidsklachten.",
      icon: ExclamationTriangleIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Hartrevalidatie",
      description: "Multidisciplinair hartrevalidatieprogramma voor patiënten met hartklachten, inclusief fysieke trainingen en begeleiding.",
      icon: HeartSolidIcon,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Bewegingsprogramma's",
      description: "Gepersonaliseerde bewegingsprogramma's voor het verbeteren van conditie en het voorkomen van klachten.",
      icon: BoltIcon,
      color: "from-emerald-600 to-cyan-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <Image
                src="/Logo transparant.png"
                alt="Fysiocentrum Pauwendaal Logo"
                width={70}
                height={70}
                className="rounded-xl shadow-md"
              />
              <div className="ml-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                  Fysiocentrum
                </h1>
                <h2 className="text-xl font-semibold text-slate-700">
                  Pauwendaal
                </h2>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-600 font-medium">
                HOME
              </Link>
              <Link href="/over-ons" className="text-slate-700 hover:text-blue-600 font-medium">
                OVER ONS
              </Link>
              <Link href="/specialisaties" className="text-slate-700 hover:text-blue-600 font-medium">
                SPECIALISATIES
              </Link>
              <Link href="/team" className="text-slate-700 hover:text-blue-600 font-medium">
                TEAM
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-medium">
                CONTACT
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-slate-700">
                <PhoneIcon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">0320-219691</span>
              </div>
              <Link
                href="/afspraak"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Afspraak maken
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  FYSIOCENTRUM<br />
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                    PAUWENDAAL
                  </span>
                </h1>
                <h2 className="text-2xl text-slate-600 italic font-light">
                  UW GEZONDHEID, ONZE ZORG
                </h2>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Behandelkwaliteit, laagdrempeligheid, en klantvriendelijkheid staan bij ons voorop.
                Bij ons staat de mens centraal. U kunt tijdens de behandeling daarom grote individuele
                aandacht verwachten.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/afspraak"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Afspraak maken
                </Link>
                <Link
                  href="/over-ons"
                  className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  Meer informatie
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center bg-white px-6 py-4 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <CheckCircleIcon className="h-6 w-6 text-emerald-500 mr-3" />
                  <span className="text-sm font-semibold text-slate-700">Zonder verwijsbriefje</span>
                </div>
                <div className="flex items-center bg-white px-6 py-4 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <UserGroupIcon className="h-6 w-6 text-blue-500 mr-3" />
                  <span className="text-sm font-semibold text-slate-700">Gespecialiseerde therapeuten</span>
                </div>
                <div className="flex items-center bg-white px-6 py-4 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <HeartIcon className="h-6 w-6 text-cyan-500 mr-3" />
                  <span className="text-sm font-semibold text-slate-700">Persoonlijke aandacht</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200">
                <div className="text-center space-y-8">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <UserGroupIcon className="h-16 w-16 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Professionele Zorg</h3>
                    <p className="text-lg text-slate-600">Gediplomeerde fysiotherapeuten met specialisaties</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Van hieruit start uw rondleiding door onze praktijk
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Bij Fysiocentrum Pauwendaal hebben wij een eigen visie op het ontstaan van klachten.
              Deze visie loopt als een rode draad door al onze behandelingen en vormt de basis van
              onze aanpak. Wij geloven dat lichamelijke klachten vaak niet op zichzelf staan, maar
              onderdeel zijn van een complex samenspel tussen lichaam, geest en omgeving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <UserGroupIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Individuele Zorg</h3>
              <p className="text-slate-600 leading-relaxed">Elke behandeling is maatwerk, afgestemd op uw specifieke situatie en doelen.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <HeartIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Empathische Benadering</h3>
              <p className="text-slate-600 leading-relaxed">Wij luisteren naar uw verhaal en begrijpen de impact van uw klachten.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <AcademicCapIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Multidisciplinaire Aanpak</h3>
              <p className="text-slate-600 leading-relaxed">Wij werken samen met andere zorgverleners voor optimale resultaten.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <StarIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Continu Leren</h3>
              <p className="text-slate-600 leading-relaxed">Wij blijven ons ontwikkelen en bijscholen om u de beste zorg te bieden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              Gespecialiseerde Fysiotherapie
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Met de meeste aandoeningen, klachten en blessures kan een algemeen fysiotherapeut je helpen.
              In sommige gevallen stuurt je (huis)arts of fysiotherapeut je door naar een gespecialiseerde fysiotherapeut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialisaties.map((specialisatie, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group">
                <div className={`w-20 h-20 bg-gradient-to-r ${specialisatie.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <specialisatie.icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {specialisatie.title}
                </h3>

                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {specialisatie.description}
                </p>

                <Link
                  href="/specialisaties"
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${specialisatie.color} text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                >
                  Meer informatie
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">Ons Therapeutenteam</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ons team van fysiotherapeuten is continu bezig met scholing en nascholing om het niveau
              van behandelen te verbeteren. Wij werken intensief samen met huisartsen en medische
              specialisten om u de beste zorg te kunnen bieden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 border border-slate-200 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group">
              <div className="w-28 h-28 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Dr. Jan van der Berg</h3>
              <p className="text-blue-600 font-semibold mb-2 text-lg">Hoofd Fysiotherapeut</p>
              <p className="text-slate-600 mb-4">Manuele therapie, McKenzietherapie</p>
              <div className="inline-block bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                15+ jaar ervaring
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-3xl p-10 border border-slate-200 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group">
              <div className="w-28 h-28 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Lisa de Vries</h3>
              <p className="text-blue-600 font-semibold mb-2 text-lg">Fysiotherapeut</p>
              <p className="text-slate-600 mb-4">Psychosomatische fysiotherapie, Hartrevalidatie</p>
              <div className="inline-block bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                12+ jaar ervaring
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-10 border border-slate-200 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group">
              <div className="w-28 h-28 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Mark Janssen</h3>
              <p className="text-blue-600 font-semibold mb-2 text-lg">Fysiotherapeut</p>
              <p className="text-slate-600 mb-4">Triggerpointbehandeling, Dry Needling</p>
              <div className="inline-block bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                10+ jaar ervaring
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/team"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Bekijk ons volledige team
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Opening Hours */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-8">Contact & Openingstijden</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPinIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Adres</p>
                    <p className="text-blue-100 text-lg">Pauwenburg 160 C, 8226 TA Lelystad</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <PhoneIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Telefoon</p>
                    <p className="text-blue-100 text-lg">0320-219691</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <ClockIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Openingstijden</p>
                    <p className="text-blue-100 text-lg">Ma-Vr: 08:00 - 18:00</p>
                    <p className="text-blue-100 text-lg">Za: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-4xl font-bold mb-8">Belangrijke Informatie</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <CheckCircleIcon className="h-8 w-8 text-emerald-300 mt-1 flex-shrink-0" />
                  <p className="text-blue-100 text-lg">U kunt zonder verwijsbriefje een afspraak maken</p>
                </div>
                <div className="flex items-start space-x-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <CheckCircleIcon className="h-8 w-8 text-emerald-300 mt-1 flex-shrink-0" />
                  <p className="text-blue-100 text-lg">Afzeggingen dienen 24 uur van tevoren te worden doorgegeven</p>
                </div>
                <div className="flex items-start space-x-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <CheckCircleIcon className="h-8 w-8 text-emerald-300 mt-1 flex-shrink-0" />
                  <p className="text-blue-100 text-lg">Vergoeding via zorgverzekering mogelijk</p>
                </div>
                <div className="flex items-start space-x-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <CheckCircleIcon className="h-8 w-8 text-emerald-300 mt-1 flex-shrink-0" />
                  <p className="text-blue-100 text-lg">Gespecialiseerde therapeuten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Klaar om een afspraak te maken?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bel ons direct op 0320-219691 of maak online een afspraak.
            Wij helpen u graag verder!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="tel:0320-219691"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Bel nu: 0320-219691
            </Link>
            <Link
              href="/afspraak"
              className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Online afspraak maken
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Image
                src="/Logo transparant.png"
                alt="Fysiocentrum Pauwendaal Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold">Fysiocentrum Pauwendaal</h3>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-300 mb-2">© 2024 Fysiocentrum Pauwendaal</p>
              <p className="text-slate-400 text-sm">
                Pauwenburg 160 C, 8226 TA Lelystad | 0320-219691 | info@fysiocentrumpauwendaal.nl
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
