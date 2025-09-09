import {
    BeakerIcon,
    BoltIcon,
    CheckCircleIcon,
    CpuChipIcon,
    ExclamationTriangleIcon,
    HandRaisedIcon,
    HeartIcon as HeartSolidIcon,
    PhoneIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Specialisaties() {
    const specialisaties = [
        {
            title: "Manuele- en McKenzietherapie",
            description: "Gespecialiseerde behandeling van gewrichten en wervelkolom door manuele technieken en de McKenzie methode voor rug- en nekpijn.",
            icon: HandRaisedIcon,
            color: "from-blue-600 to-cyan-600",
            details: [
                "Manuele therapie voor gewrichtsproblemen",
                "McKenzie methode voor rug- en nekpijn",
                "Mobilisatie en manipulatie technieken",
                "Preventieve oefeningen"
            ]
        },
        {
            title: "Triggerpointbehandeling & Dry Needling",
            description: "Effectieve behandeling van spierknopen en triggerpoints met dry needling technieken voor snelle pijnverlichting.",
            icon: BeakerIcon,
            color: "from-cyan-500 to-emerald-500",
            details: [
                "Dry needling voor spierknopen",
                "Triggerpoint therapie",
                "Myofasciale release",
                "Pijnverlichting"
            ]
        },
        {
            title: "Psychosomatische Fysiotherapie",
            description: "Behandeling van klachten waarbij lichamelijke en psychische factoren elkaar beïnvloeden.",
            icon: CpuChipIcon,
            color: "from-emerald-500 to-blue-500",
            details: [
                "Stress-gerelateerde klachten",
                "Burn-out begeleiding",
                "Ademhalingstherapie",
                "Ontspanningstechnieken"
            ]
        },
        {
            title: "Hoofdpijn & Duizeligheidsklachten",
            description: "Gespecialiseerde behandeling van verschillende vormen van hoofdpijn en duizeligheidsklachten.",
            icon: ExclamationTriangleIcon,
            color: "from-blue-500 to-cyan-500",
            details: [
                "Spanningshoofdpijn",
                "Migraine behandeling",
                "Duizeligheidsklachten",
                "Nek-gerelateerde hoofdpijn"
            ]
        },
        {
            title: "Hartrevalidatie",
            description: "Multidisciplinair hartrevalidatieprogramma voor patiënten met hartklachten, inclusief fysieke trainingen en begeleiding.",
            icon: HeartSolidIcon,
            color: "from-red-500 to-pink-500",
            details: [
                "Cardiale revalidatie",
                "Conditietraining",
                "Leefstijlbegeleiding",
                "Risicofactor management"
            ]
        },
        {
            title: "Bewegingsprogramma's",
            description: "Gepersonaliseerde bewegingsprogramma's voor het verbeteren van conditie en het voorkomen van klachten.",
            icon: BoltIcon,
            color: "from-emerald-600 to-cyan-600",
            details: [
                "Persoonlijke training",
                "Groepslessen",
                "Preventieve oefeningen",
                "Conditieverbetering"
            ]
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
                            <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium">
                                HOME
                            </Link>
                            <Link href="/over-ons" className="text-slate-700 hover:text-blue-600 font-medium">
                                OVER ONS
                            </Link>
                            <Link href="/specialisaties" className="text-blue-600 font-medium">
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
                        GESPECIALISEERDE <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">FYSIOTHERAPIE</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Met de meeste aandoeningen, klachten en blessures kan een algemeen fysiotherapeut je helpen.
                        In sommige gevallen stuurt je (huis)arts of fysiotherapeut je door naar een gespecialiseerde fysiotherapeut.
                    </p>
                </div>
            </section>

            {/* Specialisaties Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specialisaties.map((specialisatie, index) => (
                            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className={`w-16 h-16 bg-gradient-to-r ${specialisatie.color} rounded-xl flex items-center justify-center mb-6`}>
                                    <specialisatie.icon className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    {specialisatie.title}
                                </h3>

                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {specialisatie.description}
                                </p>

                                <div className="space-y-2">
                                    <h4 className="font-semibold text-slate-900 mb-3">Behandelingen:</h4>
                                    <ul className="space-y-2">
                                        {specialisatie.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-center text-sm text-slate-600">
                                                <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <Link
                                        href="/afspraak"
                                        className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${specialisatie.color} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-200`}
                                    >
                                        Afspraak maken
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Heeft u vragen over onze specialisaties?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Onze gespecialiseerde therapeuten staan klaar om u te helpen.
                        Neem contact op voor meer informatie of maak direct een afspraak.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
                        >
                            Contact opnemen
                        </Link>
                        <Link
                            href="/afspraak"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                        >
                            Afspraak maken
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
