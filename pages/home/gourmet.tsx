import React, { useEffect, useState } from 'react'
import LogoWhite from '../../public/logo_white.svg'
import MenGiveFood from '../../public/homme_qui_sert_a_manger.png'
import WomenAtBill from '../../public/femme_a_la_caisse.png'
import SteakOnPlate from '../../public/steack_on_plate.png'
import WomanBigData from '../../public/woman_bigdata.png'
import ClientWithCoffee from '../../public/client_with_cofee.png'
import Image from 'next/image'
import { Link } from 'react-scroll';
import { useRouter } from 'next/router'

import { FiCheckCircle, FiAward, FiShield, FiZap, FiUserCheck } from 'react-icons/fi';

const values = [
    {
        icon: <FiCheckCircle className='text-white text-4xl 2xl:text-6xl mb-4' />,
        title: "Simplicité",
        description: "Nous créons des outils intuitifs pour vous aider à suivre vos points de fidélité facilement et sans tracas."
    },
    {
        icon: <FiAward className='text-white text-4xl 2xl:text-6xl mb-4' />,
        title: "Reconnaissance",
        description: "Nous facilitons la reconnaissance de votre fidélité, en vous aidant à obtenir des récompenses pour vos visites régulières."
    },
    {
        icon: <FiShield className='text-white text-4xl 2xl:text-6xl mb-4' />,
        title: "Protection des données",
        description: "Votre confiance est essentielle pour nous. Nous nous engageons à ne pas utiliser vos données à des fins commerciales."
    },
    {
        icon: <FiZap className='text-white text-4xl 2xl:text-6xl mb-4' />,
        title: "Découverte",
        description: "Nous vous aidons à découvrir de nouveaux lieux et à vivre de nouvelles expériences culinaires."
    },
    {
        icon: <FiUserCheck className='text-white text-4xl 2xl:text-6xl mb-4' />,
        title: "Centré sur le client",
        description: "Nous mettons l'accent sur vous et vos préférences. Fidoresto offre une plateforme où vous pouvez facilement accéder à vos restaurants préférés."
    }
];



const home = () => {
    const [windowWidth, setWindowWidth] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        // Initialiser la largeur de la fenêtre au rendu du composant
        updateWindowDimensions();

        function updateWindowDimensions() {
            setWindowWidth(window.innerWidth);
        }

        // Ajouter un écouteur d'événements au redimensionnement de la fenêtre
        window.addEventListener('resize', updateWindowDimensions);

        // Supprimer l'écouteur d'événements lors du nettoyage
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    console.log(windowWidth)

    if (windowWidth <= 1250){
        return (
            <div className='h-screen flex justify-center items-center p-8 text-center'>
                Agrandi la taille de ton navigateur ou utilise un appareil plus grand pour afficher le contenu de la page
            </div>
        )
    }

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
                <div className='bg-black bg-opacity-60 h-full w-full flex justify-center'>
                    <div className='flex flex-col max-w-6xl items-center'>
                        <nav className='left-0 p-8 w-full text-white flex justify-center'>
                            <div className='w-32'>
                                <Image src={LogoWhite} alt="" />
                            </div>
                        </nav>
                        <div className='border-r-8 border-b-8 pr-8 pb-8 mt-20 border-secondary'>
                            <h1 className='text-white text-7xl text-center font-extrabold'>Découvrez de nouvelles <span className='text-primary'>expériences culinaires</span> et soyez récompensé pour votre <span className='text-primary'>fidélité.</span></h1>
                        </div>
                        <p className='max-w-5xl text-center text-4xl mt-8 text-white' >Grâce à notre application de programme de fidélité unique et personnalisable, découvrez de nouveaux restaurants, restez fidèle à vos favoris et bénéficiez de récompenses exclusives.</p> 
                        <div className='flex items-center gap-4'>
                            <Link
                                className='btn btn-secondary text-center mt-8 w-3xl btn-lg'
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Vous êtes un gourmet ?
                                
                            </Link>
                            <button className='btn btn-primary text-center mt-8 w-3xl btn-lg' onClick={() => router.push("/home/restaurant")}>Vous êtes restaurateur ?</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='section1' className='py-16 bg-primary flex justify-center'>
                <div className='max-w-6xl grid grid-cols-6 gap-8'>
                    <div className='col-span-4 flex flex-col justify-center h-full'>
                        <h2 className='text-white text-4xl 2xl:text-6xl font-extrabold mb-8'>Vous êtes un gourmet ?</h2>
                        <p className='text-white text-2xl max-w-5xl'>Vous cherchez à découvrir de nouveaux restaurants et à profiter de récompenses pour votre fidélité ? Ne cherchez pas plus loin ! Notre application vous permet d'accumuler des points de fidélité et d'obtenir des récompenses, tout en respectant votre vie privée.</p>
                        <button className='btn btn-secondary btn-lg mt-8 w-fit'>Nous contacter</button>
                    </div>
                    <div className='w-full col-span-2'>
                        <img className='rounded-3xl mask mask-parallelogram-3' src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                </div>
            </div> 
            <div className='py-16 w-full flex justify-center'>
                <div className='max-w-6xl space-y-16'>
                    <div className='grid grid-cols-6 gap-8 w-full p-8 rounded-3xl'>
                        <div className='col-span-2 h-full'>
                            <Image className='mask mask-squircle h-full w-full object-cover' src={WomenAtBill} alt="" />
                        </div>
                        <div className='col-span-4 flex flex-col justify-center'>
                            <h2 className='text-secondary text-4xl 2xl:text-6xl font-extrabold mb-8'>Découvrez des programmes de fidélité personnalisés</h2>
                            <p className='text-black text-2xl max-w-5xl'>Avec notre application, chaque restaurant a son propre programme de fidélité, créé spécialement pour ses clients. Vous choisissez où et comment accumuler et dépenser vos points.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 gap-8 w-full p-8 bg-primary rounded-3xl'>
                        <div className='col-span-4 flex flex-col justify-center'>
                            <h2 className='text-white text-4xl 2xl:text-6xl font-extrabold mb-8'>Une application pour les clients</h2>
                            <p className='text-white text-2xl max-w-5xl'>Accédez facilement aux programmes de fidélité de vos restaurants préférés grâce à notre application dédiée. Plus besoin de cartes encombrantes, tout est digitalisé et à portée de main.</p>
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
                            <h2 className='text-primary text-4xl 2xl:text-6xl font-extrabold mb-8'>Un modèle simple et efficace</h2>
                            <p className='text-black text-2xl max-w-5xl'>Pour chaque euro dépensé dans un restaurant, vous accumulez des points spécifiques à ce lieu. Cela vous encourage à y revenir pour profiter des avantages offerts par votre fidélité.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 gap-8 w-full p-8 bg-secondary rounded-3xl'>
                        <div className='col-span-4 flex flex-col justify-center'>
                            <h2 className='text-white text-4xl 2xl:text-6xl font-extrabold mb-8'>Protection de vos données</h2>
                            <p className='text-white text-2xl max-w-5xl'>La sécurité et la confidentialité de vos données sont notre priorité. Nous nous engageons à ne pas utiliser les informations recueillies par notre application à des fins commerciales.</p>
                        </div>
                        <div className='col-span-2'>
                            <Image className='mask mask-squircle h-full w-full object-cover' src={WomanBigData} alt="" />
                        </div>
                    </div>
                </div> 
                </div>
                <div id='section2' className='py-16 bg-primary flex justify-center'>
                    <div className='max-w-6xl gap-8 flex flex-col items-center'>
                        <div className='flex flex-col items-center justify-center h-full'>
                            <h2 className='text-white text-4xl text-center font-extrabold mb-8'>FidoResto incarne des valeurs fortes qui guident chaque aspect de notre travail. </h2>
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
        </div>
    )
}

export default home