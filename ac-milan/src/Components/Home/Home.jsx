import React from 'react'
import './home.scss'
import sansiro from '../../Assets/home/sansiro.png'
import curvasud1 from '../../Assets/home/curvasud1.png'
import curvasud from '../../Assets/home/curvasud.jpg'
import scudetto from '../../Assets/home/scudetto.jpg'
import champions from '../../Assets/home/champions.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-wrapper">
                <img src={sansiro} alt="" />
                <p> <span>San Siro</span> Stadium is the beating heart of AC Milan.
                    For fans, it's a sacred space where their love for the club
                    comes to life. It's not just a stadium; it's a symbol of
                    assion, unity, and a shared sense of belonging. It's where
                    the Rossoneri spirit thrives, and every match is a celebration
                    of their unwavering devotion to AC Milan.
                    San Siro isn't just a sporting venue; it's a canvas on which
                    the drama of AC Milan's matches unfolds. It's where dreams take
                    shape and where legends are born. It's where the spirit of the
                    Rossoneri comes alive, and every goal, every save, and every
                    triumph or setback is etched into the collective
                    memory of the fans.</p>
            </div>
            <div className="home-wrapper1">
                <img src={curvasud1} alt="" />
                <p>
                    <span>The Curva Sud,</span> where emotions run deeper than words can express. It's
                    the sacred ground where the Rossoneri faithful gather, their hearts
                    pulsating in perfect harmony with every move on the pitch. This is
                    where passion transcends mere fandom; it becomes a way of life.
                    In the Curva Sud, the colors of AC Milan aren't just worn; they're
                    worn with pride, a badge of honor. It's a place where voices unite
                    in a chorus of unwavering support, where the highs are celebrated
                    with exuberant joy, and the lows are endured together with resilience.
                    For the Rossoneri, the Curva Sud isn't just a section of the stadium;
                    it's a sanctuary of emotions, a shrine to their undying love for
                    AC Milan. It's where tears of joy and sorrow flow freely, where
                    legends are born, and where the spirit of the club lives on in the
                    hearts of those who proudly call themselves Rossoneri.
                    and <span>Forza Milan! 🔴⚫</span>
                </p>
            </div>
            <div className="home-wrapper">
                <img src={scudetto} alt="" />
                <p>The term <span>"Scudetto"</span> carries immense emotional weight
                    for AC Milan—a weight that extends far beyond the boundaries of a
                    league title. It's a symbol of the club's rich heritage, a testament
                    to their relentless pursuit of greatness, and a source of profound
                    pride for players and fans alike. For AC Milan, winning the Scudetto
                    is not just an achievement; it's a statement of their enduring
                    commitment to excellence. It represents countless hours of hard
                    work, unwavering dedication, and a deep-rooted belief in their
                    ability to conquer any challenge. The red and black colors of
                    AC Milan are raised high in triumph, not just as a symbol of
                    victory but as a representation of the club's indomitable spirit.</p>

            </div>
            <div className="home-wrapper1">
                <p>
                    <span>The Champions League,</span> for AC Milan, is more
                    than just a prestigious football competition; it represents
                    an unrelenting pursuit of immortality, a journey into the
                    realm of legends. It encapsulates the essence of the club's
                    storied history, their indomitable spirit, and their
                    unwavering commitment to conquering Europe. For AC Milan,
                    the Champions League is a symbol of unparalleled
                    excellence. It signifies not just victory but the zenith
                    of their ambition, a testament to their resilience in the
                    face of the continent's best. Each triumph in this hallowed
                    tournament is not just an accomplishment but an affirmation
                    of their place among football's elite.</p>
                <img src={champions} alt="" />
            </div>
            <div className="home-wrapper">
                <img src={curvasud} alt="" />
                    <p> <span>The Curva Sud,</span> a sea of passionate
                        red and black, is the heartbeat of AC Milan's
                        fervent support. It's not just a section of the
                        stadium; it's a sacred ground where emotions soar,
                        where chants and cheers reverberate like thunder,
                        and where the true essence of Milanisti comes to
                        life. In the Curva Sud, fans become one, forging
                        an unbreakable bond with their beloved club, and
                        creating an atmosphere that is as electric as it
                        is unforgettable. It's where dreams are shared,
                        victories celebrated, and where the Rossoneri
                        spirit burns the brightest. The Curva Sud isn't
                        just a place; it's a living testament to the
                        unyielding love and devotion of AC Milan's
                        passionate fan base.</p>
            </div>
        </div>
    )
}

export default Home