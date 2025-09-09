import {
    AcademicCapIcon,
    BookOpenIcon,
    CheckCircleIcon,
    HeartIcon,
    PhoneIcon,
    UserGroupIcon,
    UserIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Team() {
    const therapeuten = [
        {
            name: "Dr. Jan van der Berg",
            role: "Hoofd Fysiotherapeut",
            specialty: "Manuele therapie, McKenzietherapie",
            experience: "15+ jaar ervaring",
            education: [
                "Master Fysiotherapie",
                "Manuele Therapie",
                "McKenzie Methode",
                "Dry Needling"
            ],
            description: "Jan is onze hoofd fysiotherapeut met uitgebreide ervaring in manuele therapie en de McKenzie methode. Hij heeft honderden patiënten geholpen met rug- en nekpijn."
        },
        {
            name: "Lisa de Vries",
            role: "Fysiotherapeut",
            specialty: "Psychosomatische fysiotherapie, Hartrevalidatie",
            experience: "12+ jaar ervaring",
            education: [
                "Bachelor Fysiotherapie",
                "Psychosomatische Fysiotherapie",
                "Hartrevalidatie",
                "Haptonomie"
            ],
            description: "Lisa is gespecialiseerd in psychosomatische fysiotherapie en hartrevalidatie. Ze heeft een warme, empathische benadering en helpt patiënten met stress-gerelateerde klachten."
        },
        {
            name: "Mark Janssen",
            role: "Fysiotherapeut",
            specialty: "Triggerpointbehandeling, Dry Needling",
            experience: "10+ jaar ervaring",
            education: [
                "Bachelor Fysiotherapie",
                "Dry Needling",
                "Triggerpoint Therapie",
                "Sportfysiotherapie"
            ],
            description: "Mark is onze specialist in triggerpointbehandeling en dry needling. Hij helpt patiënten met spierknopen en chronische pijnklachten."
        },
        {
            name: "Sarah Bakker",
            role: "Fysiotherapeut",
            specialty: "Hoofdpijn & Duizeligheid, Bewegingsprogramma's",
            experience: "8+ jaar ervaring",
            education: [
                "Bachelor Fysiotherapie",
                "Hoofdpijn & Duizeligheid",
                "Bewegingsprogramma's",
                "Yoga Instructeur"
            ],
            description: "Sarah is gespecialiseerd in hoofdpijn en duizeligheidsklachten. Ze combineert fysiotherapie met yoga en bewegingsprogramma's voor optimale resultaten."
        },
        {
            name: "Tom de Wit",
            role: "Fysiotherapeut",
            specialty: "Chronische pijn, Haptonomische fysiotherapie",
            experience: "6+ jaar ervaring",
            education: [
                "Bachelor Fysiotherapie",
                "Chronische Pijn",
                "Haptonomie",
                "Tai Chi Tao"
            ],
            description: "Tom is gespecialiseerd in chronische pijn en haptonomische fysiotherapie. Hij helpt patiënten met langdurige pijnklachten en stress."
        },
        {
            name: "Emma van Dijk",
            role: "Fysiotherapeut",
            specialty: "Bewegingsprogramma's, Ontspanningsmassage",
            experience: "4+ jaar ervaring",
            education: [
                "Bachelor Fysiotherapie",
                "Bewegingsprogramma's",
                "Ontspanningsmassage",
                "Yoga Instructeur"
            ],
            description: "Emma is gespecialiseerd in bewegingsprogramma's en ontspanningsmassage. Ze helpt patiënten met preventieve zorg en stressvermindering."
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
                            <Link href="/specialisaties" className="text-slate-700 hover:text-blue-600 font-medium">
                                SPECIALISATIES
                            </Link>
                            <Link href="/team" className="text-blue-600 font-medium">
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
                        ONZE <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">THERAPEUTEN</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Ontmoet onze ervaren en gespecialiseerde fysiotherapeuten
                    </p>
                </div>
            </section>

            {/* Team Introduction */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Ons Therapeutenteam</h2>
                        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Ons team van fysiotherapeuten is continu bezig met scholing en nascholing om het niveau
                            van behandelen te verbeteren. Wij werken intensief samen met huisartsen en medische
                            specialisten om u de beste zorg te kunnen bieden.
                        </p>
                    </div>

                    {/* Therapists Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {therapeuten.map((therapeut, index) => (
                            <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="text-center mb-6">
                                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <UserIcon className="h-12 w-12 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{therapeut.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-1">{therapeut.role}</p>
                                    <p className="text-sm text-slate-600 mb-3">{therapeut.specialty}</p>
                                    <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {therapeut.experience}
                                    </div>
                                </div>

                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {therapeut.description}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="font-semibold text-slate-900 flex items-center">
                                        <BookOpenIcon className="h-5 w-5 text-blue-600 mr-2" />
                                        Opleidingen:
                                    </h4>
                                    <ul className="space-y-2">
                                        {therapeut.education.map((edu, eduIndex) => (
                                            <li key={eduIndex} className="flex items-center text-sm text-slate-600">
                                                <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                                                {edu}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <Link
                                        href="/afspraak"
                                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-200"
                                    >
                                        Afspraak maken
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Onze Aanpak</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Alle therapeuten werken volgens onze unieke visie op het ontstaan van klachten.
                            Deze visie loopt als een rode draad door alle behandelingen en zorgt voor
                            consistente, hoogwaardige zorg.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AcademicCapIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Continu Bijscholen</h3>
                            <p className="text-slate-600">Wij blijven ons ontwikkelen en volgen regelmatig nascholing om op de hoogte te blijven van de nieuwste ontwikkelingen.</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UserGroupIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Samenwerking</h3>
                            <p className="text-slate-600">Intensieve samenwerking met huisartsen en medische specialisten voor optimale zorg.</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HeartIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Persoonlijke Zorg</h3>
                            <p className="text-slate-600">Elke behandeling is maatwerk, afgestemd op uw persoonlijke situatie en doelen.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Wilt u een afspraak maken met een van onze therapeuten?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Onze ervaren therapeuten staan klaar om u te helpen.
                        Maak direct een afspraak of neem contact op voor meer informatie.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/afspraak"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
                        >
                            Afspraak maken
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                        >
                            Contact opnemen
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
