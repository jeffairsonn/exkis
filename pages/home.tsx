import React from 'react'
import LogoWhite from '../public/logo_white.svg'
import MenGiveFood from '../public/homme_qui_sert_a_manger.png'
import WomenAtBill from '../public/femme_a_la_caisse.png'
import SteakOnPlate from '../public/steack_on_plate.png'
import WomanBigData from '../public/woman_bigdata.png'
import ClientWithCoffee from '../public/client_with_cofee.png'
import Image from 'next/image'
import { FiCheckCircle, FiAward, FiShield, FiMapPin, FiUsers, FiUserCheck, FiCompass, FiZap } from 'react-icons/fi';

const values = [
    {
        icon: <FiCheckCircle className='text-white text-6xl mb-4' />,
        title: "Simplicité",
        description: "Nous créons des outils intuitifs pour vous aider à fidéliser vos clients facilement et sans tracas."
    },
    {
        icon: <FiAward className='text-white text-6xl mb-4' />,
        title: "Reconnaissance",
        description: "Nous facilitons la reconnaissance de la loyauté de vos clients, en vous aidant à les remercier et à les récompenser pour leur fidélité."
    },
    {
        icon: <FiShield className='text-white text-6xl mb-4' />,
        title: "Protection des données",
        description: "Votre confiance est essentielle pour nous. Nous nous engageons à ne pas utiliser vos données, ni celles de vos clients, à des fins commerciales."
    },
    {
        icon: <FiZap className='text-white text-6xl mb-4' />,
        title: "Valorisation de l'innovation",
        description: "Nous saluons les restaurateurs qui osent innover, qui respectent l'environnement et qui contribuent à l'évolution positive de l'industrie de la restauration."
    },
    {
        icon: <FiMapPin className='text-white text-6xl mb-4' />,
        title: "Promotion du terroir",
        description: "Nous mettons en avant le charme unique de votre région et de votre cuisine locale pour attirer encore plus de clients."
    },
    {
        icon: <FiUsers className='text-white text-6xl mb-4' />,
        title: "Inclusivité",
        description: "Que vous soyez un restaurant, un bistrot, un café ou un traiteur, nous sommes là pour vous. Chez Fidoresto, tous les acteurs de l'industrie de la restauration ont leur place."
    },
    {
        icon: <FiUserCheck className='text-white text-6xl mb-4' />,
        title: "Centré sur le client",
        description: "Nous mettons l'accent sur le client et ses préférences. Fidoresto offre une plateforme où vos clients peuvent facilement accéder à leurs restaurants préférés."
    },
    {
        icon: <FiCompass className='text-white text-6xl mb-4' />,
        title: "Découverte",
        description: "Nous aidons vos clients à découvrir de nouveaux lieux et à vivre de nouvelles expériences culinaires. Nous faisons briller votre restaurant pour attirer de nouveaux clients."
    }
];


const home = () => {
  return (
    <div>
        <div 
            className='h-screen' 
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className='bg-black bg-opacity-60 h-full w-full flex flex-col px-72 items-center'>
                <nav className='left-0 p-8 w-full text-white flex justify-center'>
                    <div className='w-32'>
                        <Image src={LogoWhite} alt="" />
                    </div>
                </nav>
                <div className='border-r-8 border-b-8 pr-8 pb-8 mt-20 border-secondary'>
                    <h1 className='text-white text-7xl text-center font-extrabold'>Boostez votre restaurant avec notre <span className='text-primary'>programme de fidélité</span> innovant</h1>
                </div>
                <p className='max-w-5xl text-center text-4xl mt-8 text-white' >Gagnez en visibilité, fidélisez vos clients et augmentez vos revenus grâce à notre application de programme de fidélité unique et personnalisable.</p> 
                <button className='btn btn-secondary text-center mt-8 w-3xl btn-lg'><a href="#section1">Découvrir le concept</a></button>
            </div>
        </div>
        <div id='section1' className='px-72 py-16 bg-primary grid grid-cols-6 gap-8'>
            <div className='col-span-4 flex flex-col justify-center h-full'>
                <h2 className='text-white text-6xl font-extrabold mb-8'>Vous êtes restaurateur ?</h2>
                <p className='text-white text-2xl max-w-5xl'>Vous cherchez à fidéliser vos clients et à augmenter vos revenus ? Ne cherchez pas plus loin ! Notre application de programme de fidélité vous permet de créer un système de récompense sur mesure, tout en vous assurant que vous restez maître de vos données clients.</p>
                <button className='btn btn-secondary btn-lg mt-8 w-fit'>Nous contacter</button>
            </div>
            <div className='w-full col-span-2'>
                <img className='rounded-3xl mask mask-parallelogram-3' src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </div> 
        <div className='px-72 py-16 space-y-16 w-full'>
            <div className='grid grid-cols-6 gap-8 w-full p-8 rounded-3xl'>
                <div className='col-span-2 h-full'>
                    <Image className='mask mask-squircle h-full w-full object-cover' src={WomenAtBill} alt="" />
                </div>
                <div className='col-span-4 flex flex-col justify-center'>
                    <h2 className='text-secondary text-6xl font-extrabold mb-8'>Créez votre programme de fidélité personnalisé</h2>
                    <p className='text-black text-2xl max-w-5xl'>Avec notre application, chaque restaurateur peut créer son propre programme de fidélité, adapté à son offre et à sa clientèle. Vous décidez des récompenses et du nombre de points nécessaires pour les obtenir.</p>
                </div>
            </div>
            <div className='grid grid-cols-6 gap-8 w-full p-8 bg-primary rounded-3xl'>
                <div className='col-span-4 flex flex-col justify-center'>
                    <h2 className='text-white text-6xl font-extrabold mb-8'>Une application pour les clients </h2>
                    <p className='text-white text-2xl max-w-5xl'>Vos clients peuvent facilement s'abonner à votre programme de fidélité en utilisant notre application dédiée. Plus besoin de cartes encombrantes, tout est digitalisé et à portée de main.</p>
                </div>
                <div className='col-span-2'>
                    <Image src={ClientWithCoffee} className='rounded-3xl mask mask-squircle' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-6 gap-8 w-full p-8 rounded-3xl'>
                <div className='col-span-2 h-full'>
                    <Image className='mask mask-squircle h-full w-full object-cover' src={SteakOnPlate} alt="" />
                </div>
                <div className='col-span-4 flex flex-col justify-center'>
                    <h2 className='text-primary text-6xl font-extrabold mb-8'>Un modèle simple et efficace</h2>
                    <p className='text-black text-2xl max-w-5xl'>Pour chaque euro dépensé dans votre restaurant, vos clients accumulent des points spécifiquement chez vous. Cela les encourage à revenir régulièrement pour profiter des avantages offerts par leur fidélité.</p>
                </div>
            </div>
            <div className='grid grid-cols-6 gap-8 w-full p-8 bg-secondary rounded-3xl'>
                <div className='col-span-4 flex flex-col justify-center'>
                    <h2 className='text-white text-6xl font-extrabold mb-8'>Une application pour les restaurateurs</h2>
                    <p className='text-white text-2xl max-w-5xl'>Gérez facilement les points de vos clients grâce à notre application pour restaurateurs. Scannez simplement le QR code de vos clients et attribuez ou retirez des points en quelques clics.</p>
                </div>
                <div className='col-span-2'>
                    <Image src={MenGiveFood} className='rounded-3xl mask mask-squircle' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-6 gap-8 w-full p-8 rounded-3xl'>
                <div className='col-span-2 h-full'>
                    <Image className='mask mask-squircle h-full w-full object-cover' src={WomanBigData} alt="" />
                </div>
                <div className='col-span-4 flex flex-col justify-center'>
                    <h2 className='text-primary text-6xl font-extrabold mb-8'>Protection de vos données</h2>
                    <p className='text-black text-2xl max-w-5xl'>La sécurité et la confidentialité des données de vos clients sont notre priorité. Nous nous engageons à ne pas utiliser les informations recueillies par notre application, vous laissant le seul maître de votre base de données.</p>
                </div>
            </div>
        </div> 
        <div id='section2' className='px-72 py-16 bg-primary gap-8'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h2 className='text-white text-5xl text-center font-extrabold mb-8'>FidoResto incarne des valeurs fortes qui guident chaque aspect de notre travail. </h2>
                <p className='text-white text-2xl max-w-3xl text-center'>Notre mission est de rendre la fidélisation des clients simple, efficace et respectueuse. Voici ce qui nous définit.</p>
            </div>
            <div className='flex flex-col items-center gap-4 mt-16'>
                {values.map((value, index) => (
                    <div key={index} className='p-6 bg-black bg-opacity-25 rounded-3xl gap-4 flex items-center max-w-3xl'>
                        {value.icon}
                        <div>
                            <h3 className='text-white text-2xl font-extrabold mb-1'>{value.title}</h3>
                            <p className='text-white text-lg max-w-3xl'>{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    </div>
  )
}

export default home