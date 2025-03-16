/**
 * Fichier contenant toutes les questions pour le questionnaire
 */

// Questions de présentation
const presentationQuestions = [
    {
        question: "Présentez-vous en quelques mots (âge, expérience RP, etc.)",
        type: "text",
        required: true
    },
    {
        question: "Depuis combien de temps jouez-vous sur le serveur ?",
        type: "text",
        required: true
    },
    {
        question: "Pourquoi souhaitez-vous rejoindre ce groupe ?",
        type: "text",
        required: true
    },
    {
        question: "Quelles sont vos disponibilités sur le serveur ?",
        type: "text",
        required: true
    },
    {
        question: "Avez-vous déjà fait partie d'un autre groupe sur le serveur ?",
        type: "text",
        required: true
    }
];

// Questions de RP
const rpQuestions = [
    {
        question: "Comment définiriez-vous un bon roleplay ?",
        type: "text",
        required: true
    },
    {
        question: "Donnez un exemple de scénario RP que vous aimeriez mettre en place.",
        type: "text",
        required: true
    },
    {
        question: "Comment réagiriez-vous face à une situation de conflit RP ?",
        type: "text",
        required: true
    },
    {
        question: "Quelle est votre vision du personnage que vous souhaitez incarner ?",
        type: "text",
        required: true
    },
    {
        question: "Comment comptez-vous contribuer à l'ambiance RP du groupe ?",
        type: "text",
        required: true
    }
];

// Questions du règlement
const reglementQuestions = [
    {
        question: "Quels sont les types de propos haineux strictement interdits sur le serveur ?",
        answer: "Racisme, homophobie, grossophobe, antisémite, anti genres etc...",
        isCorrect: 1
    },
    {
        question: "Quelles sont les règles concernant l'utilisation de bugs ou de glitches dans le RP ?",
        answer: "C'est strictement interdit.",
        isCorrect: 1
    },
    {
        question: "Quelle est la politique concernant le manque de respect à l'encontre d'un genre (Homme ou femme) sur le serveur ?",
        answer: "Le manque de respect envers un joueur du fait de son genre est strictement interdit.",
        isCorrect: 1
    },
    {
        question: "Quelles résolutions sont autorisées et lesquelles sont interdites ?",
        answer: "16:9 et 16:10 / Toutes les autres sont interdites",
        isCorrect: 1
    },
    {
        question: "Est-ce-que la modification du champ de vision (FOV) est interdite?",
        answer: "Oui elle est strictement prohibée.",
        isCorrect: 1
    },
    {
        question: "Quelles sont les conditions requises pour braquer quelqu'un sur le serveur ?",
        answer: "Il faut respecter les règles de bases du serveur/RP (MassRP/Zones safes etc..) et disposer d'une raison pour le faire.",
        isCorrect: 1
    },
    {
        question: "Quelles sont les règles concernant le loot du téléphone d'un joueur ?",
        answer: "Les joueurs peuvent loot le téléphone d'un joueur pour se renseigner sur ce qu'il y a dedans, et potentiellement supprimer les informations les concernant. Mais le téléphone doit impérativement être rendu avant de tuer ou relâcher le joueur.",
        isCorrect: 1
    },
    {
        question: "Quelle est la limite de loot autorisée lors d'un racket, et est-ce autorisé ?",
        answer: "Le racket n'est pas autorisé. Le loot est autorisé à condition que le joueur ait une bonne raison de braquer l'autre joueur. La limite est de 50% des items sauf armes (interdit).",
        isCorrect: 1
    },
    {
        question: "Quelles sont les principales interdictions concernant les publications sur Bleeter selon les règles du serveur ?",
        answer: "Les publications sur Bleeter relatant du sexe/sexeRP et de l'illégal sont prohibées.",
        isCorrect: 1
    },
    {
        question: "Qu'est-ce que le trash-talk, et pourquoi est-il important d'éviter le trash-talk sans raison valable ?",
        answer: "Le trash-talking (provoquer/chambrer) désigne le fait de tenir des propos insultants ou provocateurs envers un joueur.",
        isCorrect: 1
    },
    {
        question: "Dans quelles situations les alliances entre groupes sont-elles autorisées ?",
        answer: "Les alliances pour du business (Lead munitions par exemple) sont les seules autorisées.",
        isCorrect: 0
    },
    {
        question: "Est-il autorisé de porter un gilet par balle factice?",
        answer: "Non c'est interdit.",
        isCorrect: 1
    },
    {
        question: "On est d'accord que vous êtes autorisés à porter un holster en tant que PF ?",
        answer: "Oui",
        isCorrect: 1
    },
    {
        question: "On est d'accord que en cas de dernier recours vous avez le droit de vous faire passer pour un autre groupe ?",
        answer: "Non c'est interdit.",
        isCorrect: 1
    },
    {
        question: "Quelles sont les activités strictement interdites dans les zones safes ?",
        answer: "Les zones safes sont des zones où les activités illégales sont interdites.\nIl est interdit de kidnapper, braquer, voler des véhicules, se battre, ou de faire des actions illégales dans ces zones.\nIl est également interdit de camper volontairement dans une zone safe pour éviter une scène.",                                              
        isCorrect: 1
    },
    {
        question: "Pourquoi les zones safes ne doivent-elles pas être utilisées comme des refuges pour échapper à une scène ?",
        answer: "Car cela casse la scène RP en cours et les joueurs en zone safe ne peuvent pas continuer leur action (braquer, menotter etc..).",
        isCorrect: 1
    },
    {
        question: "Pouvez-vous citer quelques exemples de zones safes valables sur le serveur ?",
        answer: "Parking, entreprises, poste de police, fourrière, hôpitaux, LTD....",
        isCorrect: 1
    },
    {
        question: "Pourquoi pensez-vous qu'il soit important de respecter les règles concernant les zones safes ?",
        answer: "Pour assurer une cohérence RP globale sur le serveur, et que ces zones assurent également une protection aux joueurs dedans qui ne sont pas dedans pour subir des actions illégales.",
        isCorrect: 0
    },
    {
        question: "Quelle est la différence entre un wipe et une mort RP ?",
        answer: "Un wipe est une procédure effectuée par les membres de la modération, alors qu'une mort RP est une scène en RP",
        isCorrect: 1
    },
    {
        question: "Quels sont les critères qui peuvent conduire à une Mort RP ?",
        answer: "L'acceptation d'un dossier posé par un joueur à l'encontre d'un autre (regroupant les preuves/conditions nécessaires) et ne pas jouer son fear en RP.",
        isCorrect: 0
    },
    {
        question: "Quelles sont les restrictions en vigueur pendant le coma ?",
        answer: "Ne pas utiliser l'unité X ou ALTF4 pour échapper à la scène.",
        isCorrect: 1
    },
    {
        question: "Est-il interdit d'insulter un joueur en coma ?",
        answer: "Oui, c'est interdit.",
        isCorrect: 1
    },
    {
        question: "Dans quelles situations est-il autorisé de déplacer un corps ?",
        answer: "Déplacer un corps est interdit, seulement dans l'optique d'aider le joueur en question (en débug le corps par exemple, ou en l'emmenant aux EMS) vous pourrez le déplacer.",
        isCorrect: 1
    },
    {
        question: "Quelles sont les règles concernant la déconnexion en coma ?",
        answer: "C'est strictement interdit, car cela revient à faire un ALTF4 en scène. De plus, celà risque de vous faire perdre vos armes à la reconnexion.",
        isCorrect: 1
    },
    {
        question: "Quels types d'effets visuels sont interdits selon les règles du serveur ?",
        answer: "Tracer Effects : Interdit - effets de traçage modifiant la visibilité des tirs.\nKill Effects : Interdits - effets visuels spéciaux lorsqu'un joueur est tué.\nHit Effects : Interdits - effets visuels lors de toucher un adversaire.\nBlood Effects : Interdits - effets de sang supplémentaires pouvant modifier la perception des dégâts.",
        isCorrect: 1
    },
    {
        question: "En tant que PF Officielle, quelles sont les types de voitures autorisées pour réaliser des actions illégales, et quel type est strictement interdit ?",
        answer: "Tous les types de voitures sont autorisés dans l'ensemble (Sport, import...). Mais comme pour tous les groupes, les supersportives restent interdites.",
        isCorrect: 1
    },
    {
        question: "Quels véhicules sont considérés comme inappropriés pour toutes les actions illégales ?",
        answer: "Les motos, skateboard, vélo, avions, hélicopters, supersportives, véhicule entreprise",
        isCorrect: 1
    },
    {
        question: "Quelles sont les conséquences RP & HRP si un joueur retourne dans son quartier après une scène de course-poursuite ?",
        answer: "Le joueur risque une sanction de la part des membres de la modération (HRP) et une descente de police avec perquisition (RP)",
        isCorrect: 1
    },
    {
        question: "Comment devriez-vous réagir lors d'une scène de convoi contre convoi si vous faites un accident involontaire avec la voiture adverse ?",
        answer: "Agir de façon fairplay et laisser repartir le joueur (tout en jouant votre pain bien sûr)",
        isCorrect: 1
    },
    {
        question: "Quels type de véhicule doit être utilisé lors des récoltes de drogue et de la fabrication ?",
        answer: "Les véhicules de type VAN autorisé dans votre catalogue",
        isCorrect: 1
    },
    {
        question: "Pourquoi est-il nécessaire qu'un gang soit impliqué en tant qu'intermédiaire lors des transactions entre organisations et petites frappes ?",
        answer: "Car une organisation criminelle est très haute dans la hiérarchie illégale et ça n'est pas cohérent pour une PF Officielle de directement traîter avec une organisation criminelle.",
        isCorrect: 1
    },
    {
        question: "Quels types de véhicules sont interdits pour la vente de drogue ?",
        answer: "Les motos, les skateboard, les vélos",
        isCorrect: 1
    },
    {
        question: "Où sont interdites les transactions et les rendez-vous de vente de drogue ?",
        answer: "Dans les zones safes, les zones de run",
        isCorrect: 1
    },
    {
        question: "Quelles sont les règles concernant l'intervention de la police pendant une guerre (Attaque de territoire et/ou CVC) ?",
        answer: "Les policiers n'ont pas le droit d'intervenir lorsque les tirs sont encore en cours.",
        isCorrect: 1
    },
    {
        question: "Quelle est la politique de loot de la police pendant une guerre (Attaque de territoire et/ou CVC) ?",
        answer: "Si la police ne voit pas les tirs : Aucun loot / Si elle voit les tirs : 50% de loot / Si elle se fait tirer dessus : 100% de loot",
        isCorrect: 1
    },
    {
        question: "Y'a t-il des conditions préalables requises pour engager une fusillade entre groupes ?",
        answer: "Oui, il faut une raison RP valable et respecter les règles de base du serveur.",
        isCorrect: 1
    },
    {
        question: "Est-il nécessaire d'organiser un rendez-vous pour l'échange d'otages ?",
        answer: "Oui, c'est obligatoire",
        isCorrect: 1
    }
]; 