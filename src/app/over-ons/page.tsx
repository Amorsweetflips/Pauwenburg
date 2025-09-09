import {
    AcademicCapIcon,
    ClockIcon,
    HeartIcon,
    MapPinIcon,
    PhoneIcon,
    StarIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function OverOns() {
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
                            <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium">
                                HOME
                            </Link>
                            <Link href="/over-ons" className="text-blue-600 font-medium">
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

            {/* Page Header */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        OVER <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">ONS</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Van hieruit start uw rondleiding door onze praktijk
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-slate-900">
                                Onze Unieke Visie op Klachten
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Bij Fysiocentrum Pauwendaal hebben wij een eigen visie op het ontstaan van klachten.
                                Deze visie loopt als een rode draad door al onze behandelingen en vormt de basis van
                                onze aanpak.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Wij geloven dat lichamelijke klachten vaak niet op zichzelf staan, maar onderdeel zijn
                                van een complex samenspel tussen lichaam, geest en omgeving. Daarom kijken wij verder
                                dan alleen de symptomen en zoeken wij naar de onderliggende oorzaken.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Onze therapeuten zijn continu bezig met scholing en nascholing om het niveau van
                                behandelen te verbeteren. Wij werken intensief samen met huisartsen en medische
                                specialisten om u de beste zorg te kunnen bieden.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Behandelkwaliteit, laagdrempeligheid, en klantvriendelijkheid staan bij ons voorop.
                                Bij ons staat de mens centraal. U kunt tijdens de behandeling daarom grote individuele
                                aandacht verwachten.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-slate-200">
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                                    <HeartIcon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">Holistische Benadering</h3>
                                <p className="text-slate-600">Wij kijken naar het hele plaatje</p>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UserGroupIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Individuele Zorg</h3>
                            <p className="text-slate-600">Elke behandeling is maatwerk, afgestemd op uw specifieke situatie en doelen.</p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HeartIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Empathische Benadering</h3>
                            <p className="text-slate-600">Wij luisteren naar uw verhaal en begrijpen de impact van uw klachten.</p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AcademicCapIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Multidisciplinaire Aanpak</h3>
                            <p className="text-slate-600">Wij werken samen met andere zorgverleners voor optimale resultaten.</p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <StarIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Continu Leren</h3>
                            <p className="text-slate-600">Wij blijven ons ontwikkelen en bijscholen om u de beste zorg te bieden.</p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 rounded-2xl p-8 text-white">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <h3 className="text-4xl font-bold mb-2">15+</h3>
                                <p className="text-blue-100">Jaar ervaring</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-2">500+</h3>
                                <p className="text-blue-100">Tevreden patiënten</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-2">6</h3>
                                <p className="text-blue-100">Gespecialiseerde therapeuten</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-2">100%</h3>
                                <p className="text-blue-100">Zonder verwijsbriefje</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Information Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900">Onze Praktijk</h2>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Locatie</h3>
                                    <p className="text-slate-600">
                                        Wij zijn gevestigd in het gezondheidscentrum aan Pauwenburg 160 C in Lelystad.
                                        De praktijk is goed bereikbaar en beschikt over voldoende parkeerplaatsen.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Behandelkamers</h3>
                                    <p className="text-slate-600">
                                        Onze moderne behandelkamers zijn volledig uitgerust met de nieuwste apparatuur
                                        en bieden een rustige, professionele omgeving voor uw behandeling.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Afspraak maken</h3>
                                    <p className="text-slate-600">
                                        U kunt zonder verwijsbriefje een afspraak maken. Bel ons op 0320-219691 of
                                        maak online een afspraak via onze website.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900">Onze Aanpak</h2>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Intake</h3>
                                    <p className="text-slate-600">
                                        Tijdens de eerste afspraak nemen wij uitgebreid de tijd om uw klachten te bespreken
                                        en een behandelplan op te stellen dat aansluit bij uw persoonlijke situatie.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Behandeling</h3>
                                    <p className="text-slate-600">
                                        Elke behandeling is maatwerk. Wij combineren verschillende technieken en methoden
                                        om u de beste zorg te bieden en uw herstel te bevorderen.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Nazorg</h3>
                                    <p className="text-slate-600">
                                        Na afloop van de behandeling bespreken wij hoe u zelf kunt bijdragen aan uw herstel
                                        en geven wij advies over preventieve maatregelen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact & Openingstijden</h2>
                        <p className="text-lg text-slate-600">
                            Wij zijn bereikbaar voor vragen en afspraken
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <PhoneIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Telefoon</h3>
                            <p className="text-slate-600 mb-2">0320-219691</p>
                            <p className="text-sm text-slate-500">Voor afspraken en vragen</p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPinIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Adres</h3>
                            <p className="text-slate-600 mb-2">Pauwenburg 160 C</p>
                            <p className="text-slate-600">8226 TA Lelystad</p>
                        </div>

                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ClockIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Openingstijden</h3>
                            <p className="text-slate-600 mb-1">Ma-Vr: 08:00 - 18:00</p>
                            <p className="text-slate-600">Za: 09:00 - 13:00</p>
                        </div>
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
