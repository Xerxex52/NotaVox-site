/* NotaVox — sélecteur de langue et dictionnaire de la page d'accueil */

var I18N = {
  fr: {
    "nav.features":"Fonctionnalités","nav.screens":"Dans l'app","nav.pricing":"Offres","nav.faq":"Support","nav.privacy":"Confidentialité",
    "hero.eyebrow":"Bientôt sur l'App Store · iPhone et iPad",
    "hero.title":"Ta voix devient une note structurée.",
    "hero.lead":"Enregistre une réunion, une idée ou un cours. NotaVox transcrit, résume, et fait ressortir les décisions et les actions.",
    "hero.cta1":"Voir les fonctionnalités","hero.cta2":"Écrire au support",
    "hero.t1":"Aucun compte","hero.t2":"Aucune publicité","hero.t3":"Aucun suivi",
    "steps.eyebrow":"Trois étapes","steps.title":"De la parole à la décision, sans ressaisie.",
    "steps.lead":"Tu appuies une fois. Le reste s'enchaîne pendant que tu passes à autre chose.",
    "steps.n1t":"Tu enregistres","steps.n1p":"Un appui sur le bouton rouge. NotaVox capte la voix, affiche la forme d'onde et le minuteur ; l'écran peut se verrouiller.",
    "steps.n2t":"L'app transcrit","steps.n2p":"La transcription arrive seule à la fin de l'enregistrement, avec un résumé et les actions repérées dans le texte.",
    "steps.n3t":"Tu récupères le compte-rendu","steps.n3p":"Résumé, décisions, actions, questions ouvertes : quatre blocs à partager ou à envoyer dans Rappels.",
    "feat.eyebrow":"Ce que fait l'app","feat.title":"Tout ce qu'une note vocale devrait savoir faire.",
    "f1t":"Enregistrer","f1p":"Un appui pour lancer, rien à régler.","f1a":"Lecture en arrière-plan, contrôles sur l'écran verrouillé","f1b":"Vitesse de lecture réglable et minuteur d'arrêt",
    "f2t":"Transcrire","f2p":"Quatre langues, détectées jusque dans une même phrase.","f2a":"Français, anglais, allemand, espagnol","f2b":"Résumé et actions détectées, sans achat",
    "f3t":"Structurer","f3p":"Le compte-rendu intelligent découpe une réunion en quatre blocs.","f3a":"Résumé, décisions, actions, questions ouvertes","f3b":"Reformulation et questions/réponses sur la note",
    "f4t":"Organiser","f4p":"Une note se retrouve en quelques secondes, même six mois après.","f4a":"Tags, favoris, dossiers, recherche instantanée","f4b":"Rappels, partage et export",
    "shots.eyebrow":"Dans l'app","shots.title":"Trois écrans, trois moments.",
    "shots.c1t":"La transcription","shots.c1p":"Le texte complet, relisible et modifiable, avec le lecteur audio au-dessus.",
    "shots.c2t":"Le compte-rendu","shots.c2p":"Résumé, décisions et actions détectées, avec un bouton pour les envoyer dans Rappels.",
    "shots.c3t":"Tes notes","shots.c3p":"Tags, favoris et recherche instantanée, sur les titres comme sur les transcriptions.",
    "plans.eyebrow":"Les offres","plans.title":"Gratuit pour l'essentiel. Un seul achat pour le reste.",
    "plans.lead":"Pas d'abonnement, pas de crédits à recharger. L'achat est lié à ton identifiant Apple et te suit sur tes appareils.",
    "free.tag":"L'application","free.price":"Gratuit","free.sub":"Tout ce qu'il faut pour enregistrer, transcrire et relire.",
    "free.l1":"Enregistrement illimité","free.l2":"Transcription en 4 langues","free.l3":"Résumé et actions détectées","free.l4":"Tags, dossiers, recherche, partage",
    "pro.tag":"Achat intégré","pro.price":"4,99 €","pro.once":"une seule fois","pro.sub":"Le compte-rendu intelligent, propulsé par Apple Intelligence.",
    "pro.l1":"Résumé exécutif et décisions","pro.l2":"Actions et questions en suspens","pro.l3":"Reformulation dans le ton de ton choix","pro.l4":"Questions et réponses sur ta note",
    "plans.note":"Ces trois fonctions demandent Apple Intelligence (iOS 26 sur un appareil compatible). Sur un appareil qui ne le gère pas, l'app l'indique et ne propose pas l'achat.",
    "priv.eyebrow":"Confidentialité","priv.title":"Pas de compte. Pas de serveur. Pas de suivi.",
    "priv.k1":"Stockage","priv.h1":"Tout reste dans l'app","priv.p1":"Enregistrements, transcriptions et tags vivent sur ton appareil. NotaVox n'a pas de serveur : rien ne m'est envoyé.",
    "priv.k2":"Transcription","priv.h2":"Le service d'Apple","priv.p2":"La reconnaissance vocale d'Apple traite l'audio sur l'appareil ou sur ses serveurs selon la langue. C'est écrit noir sur blanc dans la politique.",
    "priv.k3":"Apple Intelligence","priv.h3":"Sur l'appareil","priv.p3":"Le compte-rendu, la reformulation et les questions/réponses s'exécutent en local, via le modèle du système.",
    "priv.link":"Lire la politique de confidentialité",
    "sup.eyebrow":"Support","sup.title":"Une seule personne développe NotaVox. Elle répond.",
    "sup.ask":"Une question, un bug, une idée :","sup.delay":"Réponse sous 2 à 3 jours ouvrés, en français ou en anglais.",
    "faq.q1":"Où sont stockés mes enregistrements ?",
    "faq.a1":"Dans l'app, sur ton appareil. NotaVox n'a pas de serveur : rien n'est envoyé au développeur. Supprimer une note supprime son fichier audio ; désinstaller l'app supprime tout.",
    "faq.q2":"Le compte-rendu intelligent n'apparaît pas.",
    "faq.a2":"Cette fonction utilise Apple Intelligence, qui demande iOS 26 sur un appareil compatible. Ailleurs, la carte reste visible mais indique que la fonction n'est pas disponible, et l'achat n'est pas proposé : tu ne peux jamais payer pour une fonction que ton appareil ne peut pas exécuter.",
    "faq.q3":"J'ai changé d'iPhone, comment récupérer mon achat ?",
    "faq.a3":"Ouvre l'écran du compte-rendu intelligent et touche « Restaurer les achats ». L'achat est lié à ton identifiant Apple : il te suit sur tous tes appareils, sans repayer.",
    "faq.q4":"Comment changer la langue de transcription ?",
    "faq.a4":"Deux endroits : le sélecteur sur l'écran d'enregistrement, pour une note en particulier, et Réglages → Transcription → Langue par défaut, pour toutes les suivantes. La langue de l'interface se règle au même endroit, indépendamment de celle de l'appareil.",
    "faq.q5":"La transcription passe-t-elle par internet ?",
    "faq.a5":"Elle utilise le service de reconnaissance vocale d'Apple, qui traite l'audio sur l'appareil ou sur les serveurs d'Apple selon la langue et le modèle disponible. Le compte-rendu intelligent, lui, s'exécute sur l'appareil.",
    "faq.q6":"Je veux un remboursement.",
    "faq.a6":"Les achats passent par Apple, et les remboursements aussi : rends-toi sur reportaproblem.apple.com avec ton identifiant Apple. Écris-moi si ça bloque, je t'aiderai à monter la demande.",
    "foot.rights":"Application indépendante pour iPhone et iPad."
  },
  en: {
    "nav.features":"Features","nav.screens":"In the app","nav.pricing":"Pricing","nav.faq":"Support","nav.privacy":"Privacy",
    "hero.eyebrow":"Coming soon to the App Store · iPhone and iPad",
    "hero.title":"Your voice becomes a structured note.",
    "hero.lead":"Record a meeting, an idea, or a lecture. NotaVox transcribes it, summarizes it, and surfaces the decisions and action items.",
    "hero.cta1":"See the features","hero.cta2":"Email support",
    "hero.t1":"No account","hero.t2":"No ads","hero.t3":"No tracking",
    "steps.eyebrow":"Three steps","steps.title":"From speech to decision, without retyping.",
    "steps.lead":"You tap once. The rest happens while you move on to something else.",
    "steps.n1t":"You record","steps.n1p":"One tap on the red button. NotaVox captures the voice, shows the waveform and the timer; the screen can lock.",
    "steps.n2t":"The app transcribes","steps.n2p":"The transcript arrives on its own when you stop, together with a summary and the action items found in the text.",
    "steps.n3t":"You get the minutes","steps.n3p":"Summary, decisions, action items, open questions: four blocks to share or send to Reminders.",
    "feat.eyebrow":"What the app does","feat.title":"Everything a voice note should be able to do.",
    "f1t":"Record","f1p":"One tap to start. Nothing to set up.","f1a":"Background playback with lock-screen controls","f1b":"Adjustable playback speed and sleep timer",
    "f2t":"Transcribe","f2p":"Four languages, detected even within a single sentence.","f2a":"English, French, German, Spanish","f2b":"Summary and detected action items, no purchase",
    "f3t":"Structure","f3p":"Smart Minutes breaks a meeting into four blocks.","f3a":"Summary, decisions, action items, open questions","f3b":"Rewriting and question answering about the note",
    "f4t":"Organize","f4p":"Any note is seconds away, even six months later.","f4a":"Tags, favorites, folders, instant search","f4b":"Reminders, sharing and export",
    "shots.eyebrow":"In the app","shots.title":"Three screens, three moments.",
    "shots.c1t":"The transcript","shots.c1p":"The full text, readable and editable, with the audio player above it.",
    "shots.c2t":"The minutes","shots.c2p":"Summary, decisions and detected action items, with a button to send them to Reminders.",
    "shots.c3t":"Your notes","shots.c3p":"Tags, favorites and instant search, across titles and transcripts alike.",
    "plans.eyebrow":"Pricing","plans.title":"Free for the essentials. One purchase for the rest.",
    "plans.lead":"No subscription, no credits to top up. The purchase is tied to your Apple Account and follows you across your devices.",
    "free.tag":"The app","free.price":"Free","free.sub":"Everything you need to record, transcribe and review.",
    "free.l1":"Unlimited recording","free.l2":"Transcription in 4 languages","free.l3":"Summary and detected action items","free.l4":"Tags, folders, search, sharing",
    "pro.tag":"In-app purchase","pro.price":"€4.99","pro.once":"one time","pro.sub":"Smart Minutes, powered by Apple Intelligence.",
    "pro.l1":"Executive summary and decisions","pro.l2":"Action items and open questions","pro.l3":"Rewriting in the tone you choose","pro.l4":"Questions and answers about your note",
    "plans.note":"These three features require Apple Intelligence (iOS 26 on a supported device). On a device that doesn't support it, the app says so and does not offer the purchase.",
    "priv.eyebrow":"Privacy","priv.title":"No account. No server. No tracking.",
    "priv.k1":"Storage","priv.h1":"Everything stays in the app","priv.p1":"Recordings, transcripts and tags live on your device. NotaVox has no server: nothing is sent to me.",
    "priv.k2":"Transcription","priv.h2":"Apple's service","priv.p2":"Apple's speech recognition processes audio on device or on its servers depending on the language. It is spelled out in the policy.",
    "priv.k3":"Apple Intelligence","priv.h3":"On device","priv.p3":"Minutes, rewriting and question answering run locally, through the system model.",
    "priv.link":"Read the privacy policy",
    "sup.eyebrow":"Support","sup.title":"One person builds NotaVox. That person answers.",
    "sup.ask":"A question, a bug, an idea:","sup.delay":"Answer within 2–3 business days, in English or French.",
    "faq.q1":"Where are my recordings stored?",
    "faq.a1":"Inside the app, on your device. NotaVox has no server, so nothing is sent to the developer. Deleting a note deletes its audio file; deleting the app deletes everything.",
    "faq.q2":"Smart Minutes doesn't appear.",
    "faq.a2":"This feature uses Apple Intelligence, which requires iOS 26 on a supported device. Elsewhere the card stays visible but states that the feature is unavailable, and the purchase is not offered: you can never pay for a feature your device cannot run.",
    "faq.q3":"I changed iPhone — how do I get my purchase back?",
    "faq.a3":"Open the Smart Minutes screen and tap \"Restore purchases\". The purchase is tied to your Apple Account, so it follows you across your devices at no extra cost.",
    "faq.q4":"How do I change the transcription language?",
    "faq.a4":"Two places: the picker on the recording screen, for one note, and Settings → Transcription → Default language, for every note after that. The interface language is set in the same place, independently of your device language.",
    "faq.q5":"Does transcription go through the internet?",
    "faq.a5":"It uses Apple's speech recognition service, which processes audio on device or on Apple's servers depending on the language and the available model. Smart Minutes, on the other hand, runs on device.",
    "faq.q6":"I want a refund.",
    "faq.a6":"Purchases go through Apple, and so do refunds: go to reportaproblem.apple.com with your Apple Account. Write to me if you get stuck and I will help you file it.",
    "foot.rights":"An independent app for iPhone and iPad."
  },
  de: {
    "nav.features":"Funktionen","nav.screens":"In der App","nav.pricing":"Preise","nav.faq":"Support","nav.privacy":"Datenschutz",
    "hero.eyebrow":"Bald im App Store · iPhone und iPad",
    "hero.title":"Deine Stimme wird zur strukturierten Notiz.",
    "hero.lead":"Nimm ein Meeting, eine Idee oder eine Vorlesung auf. NotaVox transkribiert, fasst zusammen und hebt Entscheidungen und Aufgaben hervor.",
    "hero.cta1":"Funktionen ansehen","hero.cta2":"Support schreiben",
    "hero.t1":"Kein Konto","hero.t2":"Keine Werbung","hero.t3":"Kein Tracking",
    "steps.eyebrow":"Drei Schritte","steps.title":"Vom Gesagten zur Entscheidung, ohne Abtippen.",
    "steps.lead":"Ein Tippen genügt. Der Rest läuft, während du dich um anderes kümmerst.",
    "steps.n1t":"Du nimmst auf","steps.n1p":"Ein Tippen auf den roten Knopf. NotaVox nimmt die Stimme auf, zeigt Wellenform und Timer; der Bildschirm darf sich sperren.",
    "steps.n2t":"Die App transkribiert","steps.n2p":"Das Transkript erscheint von selbst am Ende der Aufnahme, mit Zusammenfassung und den im Text erkannten Aufgaben.",
    "steps.n3t":"Du bekommst das Protokoll","steps.n3p":"Zusammenfassung, Entscheidungen, Aufgaben, offene Fragen: vier Blöcke zum Teilen oder für die Erinnerungen-App.",
    "feat.eyebrow":"Was die App kann","feat.title":"Alles, was eine Sprachnotiz können sollte.",
    "f1t":"Aufnehmen","f1p":"Ein Tippen zum Start. Nichts einzurichten.","f1a":"Hintergrundwiedergabe mit Sperrbildschirm-Steuerung","f1b":"Einstellbare Geschwindigkeit und Sleeptimer",
    "f2t":"Transkribieren","f2p":"Vier Sprachen, erkannt bis in einen einzelnen Satz hinein.","f2a":"Deutsch, Englisch, Französisch, Spanisch","f2b":"Zusammenfassung und erkannte Aufgaben, ohne Kauf",
    "f3t":"Strukturieren","f3p":"Smart Minutes teilt ein Meeting in vier Blöcke.","f3a":"Zusammenfassung, Entscheidungen, Aufgaben, offene Fragen","f3b":"Umformulierung und Fragen/Antworten zur Notiz",
    "f4t":"Organisieren","f4p":"Jede Notiz ist in Sekunden wieder da, auch nach sechs Monaten.","f4a":"Tags, Favoriten, Ordner, Sofortsuche","f4b":"Erinnerungen, Teilen und Export",
    "shots.eyebrow":"In der App","shots.title":"Drei Bildschirme, drei Momente.",
    "shots.c1t":"Das Transkript","shots.c1p":"Der vollständige Text, lesbar und bearbeitbar, mit dem Audioplayer darüber.",
    "shots.c2t":"Das Protokoll","shots.c2p":"Zusammenfassung, Entscheidungen und erkannte Aufgaben, mit einer Taste für die Erinnerungen-App.",
    "shots.c3t":"Deine Notizen","shots.c3p":"Tags, Favoriten und Sofortsuche, in Titeln wie in Transkripten.",
    "plans.eyebrow":"Preise","plans.title":"Kostenlos für das Wesentliche. Ein Kauf für den Rest.",
    "plans.lead":"Kein Abo, keine Guthaben. Der Kauf ist an deinen Apple-Account gebunden und gilt auf allen deinen Geräten.",
    "free.tag":"Die App","free.price":"Kostenlos","free.sub":"Alles zum Aufnehmen, Transkribieren und Nachlesen.",
    "free.l1":"Unbegrenzte Aufnahme","free.l2":"Transkription in 4 Sprachen","free.l3":"Zusammenfassung und erkannte Aufgaben","free.l4":"Tags, Ordner, Suche, Teilen",
    "pro.tag":"In-App-Kauf","pro.price":"4,99 €","pro.once":"einmalig","pro.sub":"Smart Minutes, mit Apple Intelligence.",
    "pro.l1":"Executive Summary und Entscheidungen","pro.l2":"Aufgaben und offene Fragen","pro.l3":"Umformulierung im gewünschten Ton","pro.l4":"Fragen und Antworten zu deiner Notiz",
    "plans.note":"Diese drei Funktionen benötigen Apple Intelligence (iOS 26 auf einem unterstützten Gerät). Auf einem Gerät ohne Unterstützung sagt die App das und bietet den Kauf nicht an.",
    "priv.eyebrow":"Datenschutz","priv.title":"Kein Konto. Kein Server. Kein Tracking.",
    "priv.k1":"Speicherung","priv.h1":"Alles bleibt in der App","priv.p1":"Aufnahmen, Transkripte und Tags liegen auf deinem Gerät. NotaVox hat keinen Server: nichts wird an mich gesendet.",
    "priv.k2":"Transkription","priv.h2":"Apples Dienst","priv.p2":"Apples Spracherkennung verarbeitet Audio je nach Sprache auf dem Gerät oder auf ihren Servern. Das steht so in der Datenschutzerklärung.",
    "priv.k3":"Apple Intelligence","priv.h3":"Auf dem Gerät","priv.p3":"Protokoll, Umformulierung und Fragen/Antworten laufen lokal über das Systemmodell.",
    "priv.link":"Datenschutzerklärung lesen",
    "sup.eyebrow":"Support","sup.title":"Eine Person entwickelt NotaVox. Und antwortet auch.",
    "sup.ask":"Eine Frage, ein Fehler, eine Idee:","sup.delay":"Antwort in 2 bis 3 Werktagen, auf Englisch oder Französisch.",
    "faq.q1":"Wo werden meine Aufnahmen gespeichert?",
    "faq.a1":"In der App, auf deinem Gerät. NotaVox hat keinen Server, es wird nichts an den Entwickler gesendet. Wer eine Notiz löscht, löscht ihre Audiodatei; wer die App löscht, löscht alles.",
    "faq.q2":"Smart Minutes erscheint nicht.",
    "faq.a2":"Diese Funktion nutzt Apple Intelligence und benötigt iOS 26 auf einem unterstützten Gerät. Sonst bleibt die Karte sichtbar, weist aber auf die fehlende Verfügbarkeit hin, und der Kauf wird nicht angeboten: du kannst nie für etwas zahlen, das dein Gerät nicht ausführen kann.",
    "faq.q3":"Neues iPhone — wie hole ich meinen Kauf zurück?",
    "faq.a3":"Öffne den Smart-Minutes-Bildschirm und tippe auf „Käufe wiederherstellen“. Der Kauf hängt an deinem Apple-Account und gilt ohne Aufpreis auf allen Geräten.",
    "faq.q4":"Wie ändere ich die Transkriptionssprache?",
    "faq.a4":"An zwei Stellen: im Aufnahmebildschirm für eine einzelne Notiz, und unter Einstellungen → Transkription → Standardsprache für alle weiteren. Die Sprache der Oberfläche stellst du dort ebenfalls ein, unabhängig von der Gerätesprache.",
    "faq.q5":"Läuft die Transkription über das Internet?",
    "faq.a5":"Sie nutzt Apples Spracherkennung, die Audio je nach Sprache und verfügbarem Modell auf dem Gerät oder auf Apples Servern verarbeitet. Smart Minutes dagegen läuft auf dem Gerät.",
    "faq.q6":"Ich möchte eine Rückerstattung.",
    "faq.a6":"Käufe laufen über Apple, Rückerstattungen ebenso: gehe mit deinem Apple-Account auf reportaproblem.apple.com. Schreib mir, wenn es hakt, ich helfe beim Antrag.",
    "foot.rights":"Eine unabhängige App für iPhone und iPad."
  },
  es: {
    "nav.features":"Funciones","nav.screens":"En la app","nav.pricing":"Precios","nav.faq":"Soporte","nav.privacy":"Privacidad",
    "hero.eyebrow":"Pronto en el App Store · iPhone y iPad",
    "hero.title":"Tu voz se convierte en una nota estructurada.",
    "hero.lead":"Graba una reunión, una idea o una clase. NotaVox transcribe, resume y saca a la luz las decisiones y las tareas.",
    "hero.cta1":"Ver las funciones","hero.cta2":"Escribir al soporte",
    "hero.t1":"Sin cuenta","hero.t2":"Sin anuncios","hero.t3":"Sin rastreo",
    "steps.eyebrow":"Tres pasos","steps.title":"De la voz a la decisión, sin volver a teclear.",
    "steps.lead":"Tocas una vez. El resto ocurre mientras te ocupas de otra cosa.",
    "steps.n1t":"Tú grabas","steps.n1p":"Un toque en el botón rojo. NotaVox capta la voz, muestra la onda y el cronómetro; la pantalla puede bloquearse.",
    "steps.n2t":"La app transcribe","steps.n2p":"La transcripción llega sola al terminar la grabación, con un resumen y las tareas detectadas en el texto.",
    "steps.n3t":"Recibes el acta","steps.n3p":"Resumen, decisiones, tareas y preguntas abiertas: cuatro bloques para compartir o enviar a Recordatorios.",
    "feat.eyebrow":"Lo que hace la app","feat.title":"Todo lo que una nota de voz debería saber hacer.",
    "f1t":"Grabar","f1p":"Un toque para empezar. Nada que configurar.","f1a":"Reproducción en segundo plano con controles en la pantalla de bloqueo","f1b":"Velocidad ajustable y temporizador",
    "f2t":"Transcribir","f2p":"Cuatro idiomas, detectados incluso dentro de una misma frase.","f2a":"Español, inglés, francés, alemán","f2b":"Resumen y tareas detectadas, sin compra",
    "f3t":"Estructurar","f3p":"El acta inteligente divide una reunión en cuatro bloques.","f3a":"Resumen, decisiones, tareas, preguntas abiertas","f3b":"Reescritura y preguntas/respuestas sobre la nota",
    "f4t":"Organizar","f4p":"Cualquier nota aparece en segundos, incluso seis meses después.","f4a":"Etiquetas, favoritos, carpetas, búsqueda instantánea","f4b":"Recordatorios, compartir y exportar",
    "shots.eyebrow":"En la app","shots.title":"Tres pantallas, tres momentos.",
    "shots.c1t":"La transcripción","shots.c1p":"El texto completo, legible y editable, con el reproductor de audio encima.",
    "shots.c2t":"El acta","shots.c2p":"Resumen, decisiones y tareas detectadas, con un botón para enviarlas a Recordatorios.",
    "shots.c3t":"Tus notas","shots.c3p":"Etiquetas, favoritos y búsqueda instantánea, tanto en títulos como en transcripciones.",
    "plans.eyebrow":"Precios","plans.title":"Gratis para lo esencial. Una sola compra para el resto.",
    "plans.lead":"Sin suscripción y sin créditos que recargar. La compra queda ligada a tu cuenta de Apple y te sigue en todos tus dispositivos.",
    "free.tag":"La aplicación","free.price":"Gratis","free.sub":"Todo lo necesario para grabar, transcribir y releer.",
    "free.l1":"Grabación ilimitada","free.l2":"Transcripción en 4 idiomas","free.l3":"Resumen y tareas detectadas","free.l4":"Etiquetas, carpetas, búsqueda y compartir",
    "pro.tag":"Compra integrada","pro.price":"4,99 €","pro.once":"una sola vez","pro.sub":"El acta inteligente, con Apple Intelligence.",
    "pro.l1":"Resumen ejecutivo y decisiones","pro.l2":"Tareas y preguntas pendientes","pro.l3":"Reescritura con el tono que elijas","pro.l4":"Preguntas y respuestas sobre tu nota",
    "plans.note":"Estas tres funciones requieren Apple Intelligence (iOS 26 en un dispositivo compatible). En un dispositivo que no lo admite, la app lo indica y no ofrece la compra.",
    "priv.eyebrow":"Privacidad","priv.title":"Sin cuenta. Sin servidor. Sin rastreo.",
    "priv.k1":"Almacenamiento","priv.h1":"Todo se queda en la app","priv.p1":"Grabaciones, transcripciones y etiquetas viven en tu dispositivo. NotaVox no tiene servidor: no se me envía nada.",
    "priv.k2":"Transcripción","priv.h2":"El servicio de Apple","priv.p2":"El reconocimiento de voz de Apple procesa el audio en el dispositivo o en sus servidores según el idioma. Está dicho con todas las letras en la política.",
    "priv.k3":"Apple Intelligence","priv.h3":"En el dispositivo","priv.p3":"El acta, la reescritura y las preguntas y respuestas se ejecutan en local, con el modelo del sistema.",
    "priv.link":"Leer la política de privacidad",
    "sup.eyebrow":"Soporte","sup.title":"Una sola persona desarrolla NotaVox. Y responde.",
    "sup.ask":"Una pregunta, un fallo, una idea:","sup.delay":"Respuesta en 2 o 3 días laborables, en inglés o francés.",
    "faq.q1":"¿Dónde se guardan mis grabaciones?",
    "faq.a1":"En la app, en tu dispositivo. NotaVox no tiene servidor: no se envía nada al desarrollador. Borrar una nota borra su archivo de audio; desinstalar la app lo borra todo.",
    "faq.q2":"El acta inteligente no aparece.",
    "faq.a2":"Esta función usa Apple Intelligence, que requiere iOS 26 en un dispositivo compatible. En los demás, la tarjeta sigue visible pero indica que la función no está disponible, y la compra no se ofrece: nunca puedes pagar por algo que tu dispositivo no puede ejecutar.",
    "faq.q3":"He cambiado de iPhone, ¿cómo recupero mi compra?",
    "faq.a3":"Abre la pantalla del acta inteligente y toca «Restaurar compras». La compra está ligada a tu cuenta de Apple: te acompaña en todos tus dispositivos sin volver a pagar.",
    "faq.q4":"¿Cómo cambio el idioma de transcripción?",
    "faq.a4":"En dos sitios: el selector de la pantalla de grabación, para una nota concreta, y Ajustes → Transcripción → Idioma predeterminado, para las siguientes. El idioma de la interfaz se ajusta en el mismo sitio, independientemente del dispositivo.",
    "faq.q5":"¿La transcripción pasa por internet?",
    "faq.a5":"Usa el servicio de reconocimiento de voz de Apple, que procesa el audio en el dispositivo o en los servidores de Apple según el idioma y el modelo disponible. El acta inteligente, en cambio, se ejecuta en el dispositivo.",
    "faq.q6":"Quiero un reembolso.",
    "faq.a6":"Las compras pasan por Apple, y los reembolsos también: entra en reportaproblem.apple.com con tu cuenta de Apple. Escríbeme si se atasca y te ayudo con la solicitud.",
    "foot.rights":"Una app independiente para iPhone y iPad."
  }
};

(function () {
  var KEY = "notavox-lang", SUPPORTED = ["fr","en","de","es"];
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  var nav = (navigator.language || "fr").slice(0,2).toLowerCase();
  var lang = (SUPPORTED.indexOf(stored) > -1) ? stored
           : (SUPPORTED.indexOf(nav) > -1 ? nav : "en");

  function paint(l) {
    var dict = I18N[l] || I18N.fr;
    document.documentElement.setAttribute("lang", l);
    document.documentElement.setAttribute("data-lang", l);
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var v = dict[nodes[i].getAttribute("data-i18n")];
      if (v) { nodes[i].textContent = v; }
    }
    var btns = document.querySelectorAll(".langs button");
    for (var j = 0; j < btns.length; j++) {
      btns[j].setAttribute("aria-pressed", String(btns[j].getAttribute("data-lang") === l));
    }
  }

  function set(l) {
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    paint(l);
  }

  document.documentElement.setAttribute("data-lang", lang);

  document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll(".langs button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () { set(this.getAttribute("data-lang")); });
    }
    paint(lang);
  });
})();
