import {
    CheckCircleIcon,
    ClockIcon,
    EnvelopeIcon,
    ExclamationCircleIcon,
    MapPinIcon,
    PhoneIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
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
                            <Link href="/contact" className="text-blue-600 font-medium">
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
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">CONTACT</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Neem contact met ons op voor een afspraak of meer informatie
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contactgegevens</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1">Adres</h3>
                                        <p className="text-slate-600">
                                            Pauwenburg 160 C<br />
                                            8226 TA Lelystad
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <PhoneIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1">Telefoon</h3>
                                        <p className="text-slate-600">0320-219691</p>
                                        <p className="text-sm text-slate-500 mt-1">Voor afspraken en vragen</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <EnvelopeIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                                        <p className="text-slate-600">info@fysiocentrumpauwendaal.nl</p>
                                        <p className="text-sm text-slate-500 mt-1">Voor algemene vragen</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <ClockIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1">Openingstijden</h3>
                                        <div className="text-slate-600 space-y-1">
                                            <p>Maandag - Vrijdag: 08:00 - 18:00</p>
                                            <p>Zaterdag: 09:00 - 13:00</p>
                                            <p>Zondag: Gesloten</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Important Information */}
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                                    <ExclamationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                                    Belangrijke Informatie
                                </h3>
                                <ul className="space-y-2 text-blue-800">
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                                        U kunt zonder verwijsbriefje een afspraak maken
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                                        Afzeggingen dienen 24 uur van tevoren te worden doorgegeven
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                                        Vergoeding via zorgverzekering mogelijk
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Neem contact op</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="voornaam" className="block text-sm font-medium text-slate-700 mb-2">
                                            Voornaam
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
                                            Achternaam
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

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        Email
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
                                        Telefoon (optioneel)
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefoon"
                                        name="telefoon"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="06-12345678"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="onderwerp" className="block text-sm font-medium text-slate-700 mb-2">
                                        Onderwerp
                                    </label>
                                    <select
                                        id="onderwerp"
                                        name="onderwerp"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Selecteer een onderwerp</option>
                                        <option value="afspraak">Afspraak maken</option>
                                        <option value="vraag">Algemene vraag</option>
                                        <option value="klacht">Klacht</option>
                                        <option value="overig">Overig</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="bericht" className="block text-sm font-medium text-slate-700 mb-2">
                                        Bericht
                                    </label>
                                    <textarea
                                        id="bericht"
                                        name="bericht"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Beschrijf uw vraag of opmerking..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                                >
                                    Verzend bericht
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Onze Locatie</h2>
                        <p className="text-lg text-slate-600">
                            Wij zijn gevestigd in het gezondheidscentrum aan Pauwenburg 160 C in Lelystad
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-slate-200">
                        <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <MapPinIcon className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                                <p className="text-slate-600 font-medium">Pauwenburg 160 C, 8226 TA Lelystad</p>
                                <p className="text-sm text-slate-500 mt-2">Kaart wordt hier geladen...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Klaar om een afspraak te maken?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Bel ons direct op 0320-219691 of maak online een afspraak.
                        Wij helpen u graag verder!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="tel:0320-219691"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
                        >
                            Bel nu: 0320-219691
                        </Link>
                        <Link
                            href="/afspraak"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
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
