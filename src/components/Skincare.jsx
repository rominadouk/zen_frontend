import { useEffect, useState, useMemo } from "react"

const Skincare = () => {
    const [tip, setRandomTip] = useState('')
    const [activity, setRandomActivity] = useState('')
    const tips = useMemo(() => [
        'wear sunscreen daily -- one of the single most important things you can do for your skin, UV rays from the sun can cause sunburn, skincancer, and premature aging skin (wrinkles and age spots)',
        'steer clear or reduce the use of tanning beds -- they emit harmful UV rays',
        'research what your skin abosolutely needs and try to simplify your routine, less is more in skin care, using too many products at once can irriate your skin',
        "don't neglect your lips",
        'keep your hands away from your face!',
        'wash your pillowcases often, bacteria can accumulate and you sleep on them.. every night',
        'exfoliate in moderation to help get rid of dead skin cells be careful not to over exfoliate',
        'stay hydrated to stay glowing',
        'cleanse twice, once for the dirt around your face and once for a deep clean of your pores',
        'stay moisturized'

    ], []);

    const randomizeTip = () => {
        const randomTipIndex = Math.floor(Math.random()* tips.length)
        const randomTip = tips[randomTipIndex]
        setRandomTip(randomTip)
    }

    const activities = useMemo(() => [
        'facemasks - there are masks to suit every type of need, hydration, plump-iness, wrinkles',
        'do a hairmask',
        'do a facemask',
        'use a bathbomb, bathfoam, or bathdrops',
        'do a footmask - yes they exist!',
        'use a pore strip',
        'do a face massage with a face roller',
        'shape your brows',
        'make a DIY face mask',
        'have a spa day'
    ], []);

    const randomizeActivity = () => {
        const randomActivity = Math.floor(Math.random()* activities.length)
        setRandomActivity(randomActivity)
        console.log(tip)
        return randomActivity
    }

    useEffect(()=> {
        randomizeTip()
        randomizeActivity()
    }, [randomizeActivity])

    return ( 
        <>
        <div>
            <p>{tip}</p>
            <p>{activity}</p>
        </div>
        </>

     );
}
 
export default Skincare;