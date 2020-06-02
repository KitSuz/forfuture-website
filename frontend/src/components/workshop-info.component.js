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
           alert("Deine Anmeldung wurde erfolgreich abgeschickt. Du erhälst in spätestens 24h eine Rückmeldung von uns!");
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

                    <h2>Wir suchen <span className="underline">dich*</span> für einen kreativen workshop.</h2>
                    <p>*im Alter zwischen 16 und 19 Jahren
                    <p>Entdecke deine Stärken.Lerne professionelle Methoden, um nachhaltige Lösungen zu finden. Arbeite in einem engagierten und kreativen Team. Hilf mit, an einer idealen Zukunft zu arbeiten </p>
                    <p>
                    Kostenlos anmelden und an einem 2-tägigen Intensiv-Workshop zum Thema »Nachhaltigkeit» teilnehmen.<br />
                    </p>          
                        
                    <h2>Warum kostenlos Teilnehmen?</h2>
                    <p>Dieser Workshop ist praktischer Teil einer Bachelorarbeit im Bereich Design. Deswegen fallen weder Kosten noch Werbung an, sondern wird allein durch deine Teilnahme vergütet.  </p>

                    
                    <h3 ref={scrollDestinationRef}>Anmelden</h3>
                    <h2>Es sind nur <span className="underline">7 Plätze</span> verfügbar!</h2>
                    <p>
                    Melde dich bis zum 8.6.2020 an und bekommst 24h später Bescheid, ob du beim Workshop dabei bist. <br />
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
                    <textarea value={message} onChange={onChangeMessage} placeholder="Schreib eine Nachricht (max 100 Zeichen)" maxLength="100" rows="4"></textarea>
                    <button onClick={SignupClicked} style={{marginTop: "1.4em"}}>Anmeldung abschicken</button>
                    
                    <h3>Workshop Termine</h3>
                    <h2>13.06.2020 (Samstag) ab 10 Uhr - open end</h2>
                    <p>
                    Kennenlernen, Problem besprechen, Recherchieren, Personas erstellen, Standpunkt definieren<br />
                    </p>    
                    <h2>14.06.2020 (Samstag) ab 10 - 18 Uhr</h2>   
                    <p>
                   Ideen entwickeln, Prototypen bauen, Testen und Feedback einholen, Abschluss-Reflektion<br />
                    </p>
        
                    <h2>Mehr Informationen:</h2>

                    <h3>Über den Workshop</h3>
                    <p>
                    Wir spüren immer stärker die Folgen der Klimaerwärmung auch in Deutschland. Wir beschäftigen uns mit dem Thema in Schule oder im Studium. Wir protestieren, stellen unsere Ernährung um, kaufen unsere Kleidung größtenteils Secondhand. Aber komplett nachhaltig zu leben ist nicht so einfach und alles andere als »gewöhnlich».  <br />
                    <br />
                    Wie können wir Nachhaltigkeit mehr in meinen Alltag integrieren? Sodass es nicht mehr etwas ist, dass schwierig und aufwändig ist, sondern einfach normal wird? <br />
                    <br />
                    Das ist die Frage, die während unseres 2-tägigen Workshops im Mittelpunkt steht. Mit Hilfe von Design Thinking Methoden werden wir einen Ideen-Sprint durchlaufen, wie es auch große Unternehmen wie Google oder Apple tun, um Ideen und Erkenntnisse zu entwickeln und zu testen. Ziel der Veranstaltung ist, ein Prototyp zu bauen, der dabei helfen kann, leichter nachhaltig zu Leben.<br />
                    <br />
                    Für den Design Thinking Prozess ist es keine Voraussetzung “gut Zeichnen” zu können oder “irgendwie kreativ” zu sein. Du bist wichtig. Du mit deinen Stärken, Ansichten und Erfahrungen. So machst du das Team stark. <br />
                    <br />
                    Während des Prozesses werden wir neue digitale Tools kennen lernen, uns in Design Thinking üben und natürlich auch etwas über uns selbst und das Thema »Nachhaltigkeit» lernen. Unserer Grundüberzeugung nach, hat jeder eine Stimme und Entscheidungskraft, die wir einsetzten, um gemeinsam ein tolles Produkt zu entwickeln. Gute Teamarbeit baut auf Toleranz und darauf sich gegenseitig zu bestärken auf! <br />
                    </p>

                    <h3>Als Team arbeiten</h3>
                    <p>
                        Du musst nicht toll Malen können oder generell künstlerisch begabt sein. Ein ideales Design Thinking Team besteht aus Menschen, mit ganz unterschiedlichen Erfahrungen und Ansichten, Schwerpunkten und Stärken. Das gilt auch für unser Thema: Nachhaltigkeits-Profis, sowie »Just-Starter» sind herzlich willkommen!  <br />
                        <br />
                        In unserem Sprint bilden wir ein Team aus maximal acht Leuten (Mentor miteingeschlossen, deswegen nur 7 Plätze, auf die man sich bewerben kann). Wichtigste Voraussetzung ist, dass du zwischen 16 und 19 Jahren alt bist und Lust hast etwas Neues auszuprobieren. <br />
                        <br />
                        Wie gesagt: Die Workshop-Reihe ist der praktische Teil meiner Bachelorarbeit. Ich habe also Grund genug seriös mit dir und dem hier geschriebenen Inhalt umzugehen. Ich nehme meine Sache ernst und würde mich riesig freuen, wenn du Lust darauf hast, dabei zu sein!<br />
                        <br />
                    </p>

                    <h3>Korona-Konform</h3>
                    <p>
                    Das Zentrum eines Design Thinking Workshops ist normalerweise ein großer Tisch und vielen Materialen, wie Zettel, Stift, Klebe, vielleicht Holz, Knete, etc. In Zeiten von Korona müssen wir ein wenig umdisponieren und werden uns größtenteils auf digitalem Wege treffen – über das Internet. Dafür ist es wichtig, dass du einen Computer oder Laptop mit Internetzugang hast. Auch ein Mikro und eine Kamera wären gut, damit wir uns hören und sehen können. Zumindest Laptops haben Mikros und Kameras eingebaut. 
                    </p>

                    <h3>Minderjährig?</h3>
                    <p>Wenn du noch nicht 18 Jahre alt bist musst du, spätestens nach der Anmeldung, deine Eltern eine Einverständnis-Formular unterschreiben lassen, dass du mit der Bestätigungsmail zugeschickt bekommst und das wieder zurückgeschickt werden muss. Andernfalls darfst du leider (rechtlich) nicht am Workshop teilnehmen. </p>
                
                    <h3>Über uns</h3>
                    <p>Mein Name ist Katrin Schulz, Bachelorstudentin an der Hochschule für Angewandte Wissenschaften Hamburg, im Bereich Kommunikationsdesign</p>
                    <img alt="profile picture" src={Profile}/> <br/>
                    <p> 
                    Mithilfe von toller Unterstützung (wie zum Beispiel das Programmieren dieser Webseite), habe ich diesen Intensiv-Workshop aufgebaut, der praktischer Teil meiner Bachelorarbeit (also der Abschlussarbeit meines Studiums) ist. <br />
                    <br />
                    Das Projekt baut auf der Theorie und den Methoden von Social Design auf, einer relativ neueren Disziplin innerhalb des Designs. Social Design klingt erstmal hochgestochen, ist im Grunde aber »Designen mit und für Gesellschaft». In vielen Social Design Projekten geht es darum, kreative Lösungen für verzwickte Gesellschaftliche Probleme zu finden. Dies findet meist in einem interdisziplinären Kreis von Leuten statt, die mit ihren unterschiedlichen Schwerpunkten an den Problemen arbeiten und Lösungen finden.
                    </p>
                    
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
