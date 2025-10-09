"use client"

import { useRef, useEffect } from 'react'
import MainPage from './MainPage';
import AlbumPage from './albumPage';

const albumDescriptions = [
        'Trójkąt warszawski spotkał się ze znakomitymi ocenami krytyków muzycznych. Recenzenci chwalili go za błyskotliwe teksty i dobrze dobrane produkcje muzyczne, ciekawie opowiedzianą historię oraz za wprowadzenie nowości na polski rynek muzyczny. Album po czasie odniósł sukces komercyjny, odnotowując wysokie wyniki odtworzeń w serwisach streamingowych i debiutując na trzecim miejscu ogólnopolskiej listy sprzedaży OLiS.',
        'Marmur to pierwszy album studyjny Taco Hemingwaya, stanowiący konceptualne słuchowisko osadzone w fikcyjnym, tajemniczym Hotelu Marmur w Trójmieście. Album jest mroczniejszy i bardziej melancholijny od poprzednich wydawnictw, a jego spójna narracja, pełna trafnych metafor i obserwacji, czyni go czymś w rodzaju muzycznej powieści.',
        '"0,25 mg" to mixtape duetu Taconafide (Taco Hemingway i Quebonafide), który pierwotnie ukazał się w 2018 roku jako bonus do ich głównego albumu, "Soma 0,5 mg". Mimo swojej pierwotnie dodatkowej natury, materiał ten zawiera kilkanaście pełnoprawnych utworów, utrzymanych w konwencji rapu i hip-hopu, stanowiąc równorzędną część kolaboracji.',
        '"Café Belga" to drugi długogrający album Taco Hemingwaya, zaskakująco wypuszczony bez wcześniejszych zapowiedzi. Album, nagrany w Brukseli i Warszawie, wplecione ma fragmenty wywiadu udzielonego przez rapera w tytułowej kawiarni, co nadaje mu formę spójnego słuchowiska. Muzycznie łączy hip-hop z elementami trapu i popu.',
        'Jarmark to czwarta studyjna płyta artysty, która stanowi mocną, często krytyczną recenzję współczesnej Polski, jej historii po transformacji i mentalności społecznej. Pod względem muzycznym to hip-hop z wpływami alternatywnymi, który bywa odbierany przez krytyków jako nierówny, ale lirycznie sprawny i pełen społecznych obserwacji.',
        '“1-800-OŚWIECENIE” to album konceptualny, ale nie w charakterze fabularnym, tak jak było to w przypadku wcześniejszego “Marmuru”. Na nową płytę składa się 15 premierowych utworów, a sam album w zaledwie dobę po starcie preorderu osiągnął złoty nakład (ponad 15 tys. sprzedanych egzemplarzy).'
    ];



const PagesContainer = ({activeIndex, setActiveIndex, setPageIndexes, albumsData, featuredArtistsData}) => {

    const ContainerRef = useRef(null);


    useEffect(() => {
        if (ContainerRef.current) {
            setTimeout(() => {

                const totalChildren = ContainerRef.current.children.length; 
                const pageCount = totalChildren; 
                const newIndexes = [...Array(pageCount).keys()]; 
                
                setPageIndexes(newIndexes);
                console.log(`Liczba zliczonych stron: ${pageCount}.`);
            }, 0);
        }
    }, [setPageIndexes]);

    // Obliczanie transformacji
    const transformStyle = `translateX(-${activeIndex * 100}vw)`;
  return (
    <div
            ref={ContainerRef}
            id="app"
            style={{
                transform: transformStyle
            }}
            className="absolute left-0 top-0 grid auto-cols-[100vw] grid-rows-1 grid-flow-col h-full w-full overflow-visible transition-all duration-420 ease-in-out">
            <MainPage albumsData={albumsData} setActiveIndex={setActiveIndex}/>
            
            
            {
            albumsData.map((_, index) => (
            <AlbumPage key={index} albumInfo={albumsData[index]} albumDescription={albumDescriptions[index]} featuredArtists={featuredArtistsData[index]} />
            ))
            }
            

            
        </div>
  )
}

export default PagesContainer