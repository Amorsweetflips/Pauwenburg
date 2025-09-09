import {
    CheckCircleIcon,
    DocumentTextIcon,
    EnvelopeIcon,
    ExclamationCircleIcon,
    HeartIcon,
    MapPinIcon,
    PhoneIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Afspraak() {
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

            {/* Page Header */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">AFSPRAAK</span> MAKEN
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Maak eenvoudig een afspraak bij Fysiocentrum Pauwendaal
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Neem contact op</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <PhoneIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1">Bel ons direct</h3>
                                        <p className="text-2xl font-bold text-blue-600 mb-2">0320-219691</p>
                                        <p className="text-slate-600">Ma-Vr: 08:00 - 18:00 | Za: 09:00 - 13:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <EnvelopeIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                                        <p className="text-slate-600">info@fysiocentrumpauwendaal.nl</p>
                                        <p className="text-sm text-slate-500 mt-1">Voor vragen en informatie</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1">Bezoek ons</h3>
                                        <p className="text-slate-600">
                                            Pauwenburg 160 C<br />
                                            8226 TA Lelystad
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Important Information */}
                            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                                <h3 className="text-lg font-semibold text-emerald-900 mb-4 flex items-center">
                                    <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2" />
                                    Voordelen
                                </h3>
                                <ul className="space-y-2 text-emerald-800">
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                                        Zonder verwijsbriefje afspraak maken
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                                        Snelle afspraak mogelijk
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                                        Vergoeding via zorgverzekering
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                                        Gespecialiseerde therapeuten
                                    </li>
                                </ul>
                            </div>

                            {/* Cancellation Policy */}
                            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                                <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
                                    <ExclamationCircleIcon className="h-5 w-5 text-amber-600 mr-2" />
                                    Afzegbeleid
                                </h3>
                                <p className="text-amber-800">
                                    Afzeggingen dienen 24 uur van tevoren te worden doorgegeven om kosten te voorkomen.
                                    Bij te late afzegging kunnen kosten in rekening worden gebracht.
                                </p>
                            </div>
                        </div>

                        {/* Appointment Form */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Afspraak aanvragen</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="voornaam" className="block text-sm font-medium text-slate-700 mb-2">
                                            Voornaam *
                                        </label>
                                        <input
                                            type="text"
                                            id="voornaam"
                                            name="voornaam"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Uw voornaam"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="achternaam" className="block text-sm font-medium text-slate-700 mb-2">
                                            Achternaam *
                                        </label>
                                        <input
                                            type="text"
                                            id="achternaam"
                                            name="achternaam"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Uw achternaam"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="uw.email@voorbeeld.nl"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="telefoon" className="block text-sm font-medium text-slate-700 mb-2">
                                            Telefoon *
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefoon"
                                            name="telefoon"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="06-12345678"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="geboortedatum" className="block text-sm font-medium text-slate-700 mb-2">
                                        Geboortedatum
                                    </label>
                                    <input
                                        type="date"
                                        id="geboortedatum"
                                        name="geboortedatum"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="specialisatie" className="block text-sm font-medium text-slate-700 mb-2">
                                        Gewenste specialisatie
                                    </label>
                                    <select
                                        id="specialisatie"
                                        name="specialisatie"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Selecteer een specialisatie</option>
                                        <option value="algemeen">Algemene fysiotherapie</option>
                                        <option value="manueel">Manuele therapie</option>
                                        <option value="mckenzie">McKenzie therapie</option>
                                        <option value="triggerpoint">Triggerpoint behandeling</option>
                                        <option value="dry-needling">Dry needling</option>
                                        <option value="psychosomatisch">Psychosomatische fysiotherapie</option>
                                        <option value="hoofdpijn">Hoofdpijn & Duizeligheid</option>
                                        <option value="hartrevalidatie">Hartrevalidatie</option>
                                        <option value="beweging">Bewegingsprogramma's</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="voorkeur-datum" className="block text-sm font-medium text-slate-700 mb-2">
                                        Voorkeur datum
                                    </label>
                                    <input
                                        type="date"
                                        id="voorkeur-datum"
                                        name="voorkeur-datum"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="voorkeur-tijd" className="block text-sm font-medium text-slate-700 mb-2">
                                        Voorkeur tijd
                                    </label>
                                    <select
                                        id="voorkeur-tijd"
                                        name="voorkeur-tijd"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Geen voorkeur</option>
                                        <option value="ochtend">Ochtend (08:00 - 12:00)</option>
                                        <option value="middag">Middag (12:00 - 17:00)</option>
                                        <option value="avond">Avond (17:00 - 18:00)</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="klachten" className="block text-sm font-medium text-slate-700 mb-2">
                                        Beschrijf uw klachten
                                    </label>
                                    <textarea
                                        id="klachten"
                                        name="klachten"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Beschrijf kort uw klachten en wanneer deze zijn begonnen..."
                                    />
                                </div>

                                <div className="flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        required
                                        className="mt-1 h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-slate-600">
                                        Ik ga akkoord met de <Link href="/privacy" className="text-blue-600 hover:underline">privacy policy</Link> en
                                        geef toestemming voor het verwerken van mijn gegevens. *
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                                >
                                    Afspraak aanvragen
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance Information */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Zorgverzekering</h2>
                        <p className="text-lg text-slate-600">
                            Informatie over vergoedingen en tarieven
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <DocumentTextIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Basisverzekering</h3>
                            <p className="text-slate-600">De eerste 20 behandelingen per jaar worden vergoed vanuit de basisverzekering.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HeartIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Aanvullend</h3>
                            <p className="text-slate-600">Met een aanvullende verzekering kunnen extra behandelingen worden vergoed.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircleIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Eigen Risico</h3>
                            <p className="text-slate-600">Fysiotherapie valt onder het eigen risico van uw zorgverzekering.</p>
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
