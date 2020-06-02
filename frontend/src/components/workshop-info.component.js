import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

import HAW from '../images/haw.svg';
import Profile from '../images/profile.png';
import { SlideLeft } from '../transitions/transitions';
import { SignupService } from '../services/signup.service';
import SelectorComponent from './selector.component';
import TypeAnimationComponent from './type-animation.component';
import { useSpring } from 'react-spring';

function WorkshopInfo({backLink}) {

    const [firstname, setFirstname] = useState();
    const onChangeFirstname = (evt) => {    
       setFirstname(evt.target.value);
    }
    
    const [lastname, setLastname] = useState();
    const onChangeLastname = (evt) => {    
       setLastname(evt.target.value);
    }
    
    const items = ["16", "17", "18", "19"];
    const [age, setAge] = useState();
    const onChangeAge = (evt) => {    
       setAge(evt.item);
    }
   
    const [email, setEmail] = useState();
    const onChangeEmail = (evt) => {    
       setEmail(evt.target.value);
    }
   
    const [message, setMessage] = useState();
    const onChangeMessage = (evt) => {    
       setMessage(evt.target.value);
    }

    const [y, setY] = useSpring(() => ({
        reset: true,
        y: 0,
        onFrame: props => {
            document.querySelector(".page").scroll(0, props.y);
        },
        config: { duration: 500 }
      }));
      const scrollDestinationRef = useRef();
   
    const SignupClicked = () => {
   
       const data = {
           firstname, lastname, email, age, message
       }
       SignupService.Signup(data).then((data) => {
           alert("Deine Anmeldung wurde erfolgreich abgeschickt. Du erhälst in spätestens 48h eine Rückmeldung von uns!");
       }).catch((error) => {
           alert("Fehler: " + error.message);
       })
   
    }

    return (
        <div id="workshop-info" className="landing2">
            <div className="landing2-content">
                <div>
                    <TypeAnimationComponent />

                    <h2><span className="underline">Du</span> kannst etwas bewegen. Sei es auf der Straße, in der Politik oder an deinem Schreibtisch.</h2>
        
                    <a onClick={() => { 
                        setY({ y: scrollDestinationRef.current.getBoundingClientRect().top - 20, from: { y: document.querySelector(".page").scrollTop }, });
                        }} className="button signup-button">Beim Projekt anmelden</a>
                    <p>Für jede Anmeldung wird <span className="underline">ein Baum gepflanzt</span>.</p>

                    <h2>Wir suchen <span className="underline">dich</span> für einen kreativen workshop.</h2>
                    <p>Entdecke deine Stärken.Lerne professionelle Methoden, um nachhaltige Lösungen zu finden. Arbeite in einem engagierten und kreativen Team. Hilf mit, an einer idealen Zukunft zu arbeiten </p>
                    <p>
                    Kostenlos anmelden und an einem 2-tägigen Intensiv-Workshop zum Thema »Nachhaltigkeit» teilnehmen.<br />
                    </p>          
                        
                    <h2>Warum kostenlos Teilnehmen?</h2>
                    <p>Dieser Workshop ist praktischer Teil einer Bachelorarbeit im Bereich Design. Deswegen fallen weder Kosten noch Werbung an. </p>

                    
                    <h3 ref={scrollDestinationRef}>Anmelden</h3>
                    <h2>Es sind nur <span className="underline">7 Plätze</span> verfügbar!</h2>
                    <p>
                    Melde dich bis zum 8.6.2020 an und bekommst 48h später Bescheid, ob du beim Workshop dabei bist. <br />
                    <br />
                    Bei Fragen vorab, schreib uns einfach eine Mail an: info@forfuture.studio <br />
                    </p>

                    <input type="text" value={firstname} onChange={onChangeFirstname} placeholder="Vorname"></input>
                    <input type="text" value={lastname} onChange={onChangeLastname} placeholder="Nachname"></input>
                    <input type="email" value={email} onChange={onChangeEmail} placeholder="E-Mail Adresse"></input>
                    <div className="age-select">
                        <span>Alter:</span>
                        <SelectorComponent value={items.indexOf(age)} onChange={onChangeAge} items={items}></SelectorComponent>
                    </div>
                    <textarea value={message} onChange={onChangeMessage} placeholder="Nachricht (max 100 Zeichen)" maxLength="100" rows="4"></textarea>
                    <button onClick={SignupClicked} style={{marginTop: "1.4em"}}>Anmeldung abschicken</button>
                    
                    <h3>Workshop Termine</h3>
                    <h2>13.06.2020 (Samstag) ab 10 uhr - open end</h2>
                    <p>
                    Kennenlernen, Problem besprechen, Recherchieren, Personas erstellen, Standpunkt definieren<br />
                    </p>    
                    <h2>13.06.2020 (Samstag) ab 10 uhr - open end</h2>   
                    <p>
                   Ideen entwickeln, Prototypen bauen, Testen und Feedback einholen, Abschluss-Reflektion<br />
                    </p>
                        
                        
                        
                        
                    <h2>Mehr Informationen:</h2>

                    <h3>Über den Workshop</h3>
                    <p>
                    Das Projekt »_forfuture» ist der praktische Teil meiner Bachelorarbeit, in der ich mich mit Social Design beschäftige. <br />
                    <br />
                    Social Design klingt erstmal hochgestochen, ist im Grunde aber »Designen <span className="underline">mit</span> und <span className="underline">für</span> Gesellschaft». <br />
                    In vielen Social Design Projekten geht es darum, nicht unbedingt kommerziell zu sein (also etwas verkaufen zu wollen), sondern <span className="underline">kreative Lösungen</span> für <span className="underline">verzwickte Probleme</span> zu finden. <br />
                    <br />
                    Der <span className="underline">Prozess</span> ist das, worum es geht, und somit der Schwerpunkt unserer Arbeit. Aber natürlich soll das Produkt am Ende nicht zu kurz kommen. Deswegen gibt es gewisse Methoden und kreative Aufgaben, um am Ende des Social Design Prozesses mindestens einen Prototyp in der Hand zu halten. Dieser kann dann für zukünftige Workshops (mit der gleichen oder ähnlichen Frage) als Grundlage dienen.<br />
                    <br />
                    Wie dieser <span className="underline">Prototyp</span> am Ende aussieht – ob es eine Werbe-Kampagne oder eine App oder etwas komplett anderes wird – ist zu diesem Zeitpunkt noch unklar, denn wir wissen ja noch nicht wo genau unser Problem steckt. Aufregend, oder? :)<br />
                    <br />
                    Die Frage, meiner »_forfuture» Workshop-Reihe lautet: »<span className="underline">Wie kann ich Nachhaltigkeit mehr in meinen Alltag einbauen?</span>» Am besten mit so wenig Aufwand wie möglich, denn – seien wir ehrlich – es täglich viele Dinge, die Zeit und Energie kosten und auf die man auch achten will. <br />
                    <br />
                    Also vielleicht geht es dir ähnlich wie mir und es fällt dir gar nicht so leicht 100% umweltfreundlich zu leben, obwohl es eigentlich so wichtig wäre. <br />
                    <span className="underline">Wie können wir da besser werden und vielleicht eine Antwort finden</span>? Möglicherweise eine Antwort, die am Ende nich tnur uns, sondern mehr Menschen hilft, denen es ähnlich geht. <br />    
                    </p>

                    <h3>Als Team arbeiten</h3>
                    <p>
                        Das Team zu einer Zukunfts-Verändernden Frage wie dieser (siehe oben), muss agil sein, unkonventionell (also »andersdenkend»), engagiert und nicht erwachsen! Unsere Gruppe wird nicht größer sein als <span className="underline">acht Personen</span> (mich eingeschlossen). Hinterher machen die vielseitigen Blickwinkel ein solches Projekt stark. Das heißt Nachhaltigkeits-Profis sowie »Just-Starter» sind herzlich willkommen! <br />
                        <br />
                        In unserer Zusammenarbeit wird es viel um kreative Methoden gehen, die ich aus dem Designbereich kenne. Unter anderem dem Design-Thinking Prozess. Es geht schließlich darum unsere Zukunft zu »gestalten». Das baut darauf auf, dass wir <span className="underline">gemeinsam</span> entscheiden, wohin sich unser Prozess entwickelt. Ganz demokratisch.<br />
                        <br />
                        Wie gesagt: Die Workshop-Reihe ist der praktische Teil meiner Bachelorarbeit. Ich habe also Grund genug seriös mit dir und dem hier geschriebenen Inhalt umzugehen. Ich nehme meine Sache ernst und würde mich riesig freuen, wenn du Lust darauf hast, dabei zu sein!<br />
                        <br />
                    </p>

                    <h3>Korona-Konform</h3>
                    <p>
                        Das ideale Umfeld solcher Art Workshop ist normalerweise ein großer Tisch und vielen Materialen, wie Zettel, Stift, Klebe, vielleicht Holz, Knete, etc. In Zeiten von Korona müssen wir ein wenig umdisponieren und werden uns größtenteils auf digitalem Wege treffen – über das Internet. Dafür ist es wichtig, dass du einen Computer oder Laptop mit Internetzugang hast. Auch ein Mikro und eine Kamera wären gut, damit wir uns hören und sehen können. Zumindest Laptops haben Mikros und Kameras eingebaut. 
                    </p>

                    <h3>Minderjährig?</h3>
                    <p>Sprich mit deinen Eltern! Zeig ihnen diese Seite und hole dir ihr »okay», an diesem Projekt teilzunehmen. Nach der Anmeldung bekommst du in der Bestätigungsmail ein Einverständnis-Formular zugeschickt, das deine Eltern ausfüllen und zurückschicken müssen. Andernfalls darf ich leider (rechtlich) nicht mit dir arbeiten und das wäre schade! </p>
                
                    <h3>Über uns</h3>
                    <p>Ich bin Katrin Schulz, Designstudentin im neunten Semester an der HAW Hamburg (Hochschule für Angewandte Wissenschaften), 24 Jahre alt und liebe Sport, Musik und Kochen. Ich gehe gerne raus und mache mir viele Gedanken, wie die Welt wohl so in 20, 30 Jahren aussehen wird…</p>
                    <img alt="profile picture" src={Profile}/>    
                    
                    <img alt="HAW Hamburg Logo" src={HAW} />

                    <p>
                        Eine Bachelorarbeit der Hochschule für Angewandte Wissenschaften Hamburg, im Bereich Kommunikationsdesign, <span className="underline">Referenz-Kontakt</span>: Hendrike Schmietendorf, Öffentlichkeitsarbeit Fakultät DMI, Mail: Hendrike.Schmietendorf@haw-hamburg.de
                    </p>
                    
                    <h3 id="policy">Datenschutz</h3>
                    <p>Mit deinen Daten soll gut umgegangen werden! Aus dem Grund sind auf dieser Seite keine Analytics- oder Trackingfunktionen eingebaut und lediglich <span className="underline">seriöse</span> Drittanbieter eingebunden, die den <span className="underline">Richtlinien der DSGVO</span> folgen. Das heißt, sie haben ihre Server in Deutschland, sodass keine Datenweitergabe stattfindet! Möchtest du mehr erfahren? Dann lies in den Bestimmungen die Details nach:</p>
                    <Link className="button" to={{
                        pathname: "/policy-detail",
                        state: {
                            transition: SlideLeft,
                            backLink: backLink
                        }
                    }}>Datenschutz</Link>
                    <Link className="button" to={{
                        pathname: "/impress",
                        state: {
                            transition: SlideLeft,
                            backLink: backLink
                        }
                    }}>Impressum</Link>

                    <p><br/>© Katrin Schulz, 2020</p>

                </div>
            </div>
        </div>
    );
}

export default WorkshopInfo;
