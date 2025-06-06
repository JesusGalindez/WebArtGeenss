import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      // Navigation
      nav: {
        historia: "Historia",
        galeria: "Galería",
        tienda: "Tienda Galería",
        blog: "Blog",
        eventos: "Eventos",
        testimonios: "Testimonios",
        contacto: "Contacto",
        instagram: "Instagram"
      },
      // Hero Section
      hero: {
        title: "Geenss Archenti",
        subtitle: "Arte Visionario Amazónico",
        description: "Ventanas a la cosmovisión amazónica, donde la naturaleza no solo inspira, sino que guía y transforma",
        cta: "Explorar Arte"
      },
      // Scrolltelling
      scrolltelling: {
        inicios: {
          title: "Los Inicios",
          text1: "En Tarapoto, San Martín, nació la visión. Geenss Archenti descubrió que el arte no era solo expresión, sino conexión divina.",
          text2: "Los primeros pigmentos naturales: chuchuwasi, sangre de grado, achiote. La selva comenzaba a hablar a través de sus manos.",
          text3: "Las primeras obras emergieron como susurros ancestrales, cada trazo una conversación con los espíritus de la selva."
        },
        camino: {
          title: "El Camino",
          text1: "Tres años de exploración continua en El Castillo de Lamas. Cada día un nuevo diálogo con los pigmentos sagrados.",
          text2: "La técnica evolucionó, pero más importante, evolucionó la conexión. El arte se convirtió en ceremonia, en puente entre mundos."
        },
        maestria: {
          title: "La Maestría",
          text: "Las obras de Geenss trascienden lo visual. Son portales que invitan al observador a sumergirse en la sabiduría ancestral amazónica."
        },
        presente: {
          title: "El Presente",
          text: "Con 69,000 seguidores y presencia en galerías internacionales, Geenss continúa siendo un canal para los abuelos de la selva."
        }
      },
      // Gallery
      gallery: {
        title: "Galería",
        viewDetails: "Ver Detalles",
        year: "Año",
        dimensions: "Dimensiones",
        technique: "Técnica",
        materials: "Materiales",
        description: "Descripción",
        allYears: "Todos los Años"
      },
      // Shop
      shop: {
        title: "Tienda Galería",
        original: "Obra Original",
        print: "Impresión de Alta Calidad",
        addToCart: "Agregar al Carrito",
        cart: "Carrito",
        checkout: "Finalizar Compra",
        total: "Total",
        quantity: "Cantidad",
        remove: "Eliminar"
      },
      // Blog
      blog: {
        title: "Reflexiones Creativas",
        subscribe: "Suscribirse",
        email: "Email",
        subscribeText: "Recibe reflexiones sobre el proceso creativo"
      },
      // Events
      events: {
        title: "Eventos y Exposiciones",
        upcoming: "Próximos Eventos",
        past: "Eventos Pasados",
        getTickets: "Obtener Entradas",
        viewLocation: "Ver Ubicación"
      },
      // Testimonials
      testimonials: {
        title: "Testimonios",
        addTestimonial: "Agregar Testimonio",
        name: "Nombre",
        message: "Mensaje",
        submit: "Enviar"
      },
      // Contact
      contact: {
        title: "Contacto",
        name: "Nombre",
        email: "Email",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar",
        whatsapp: "WhatsApp",
        directEmail: "Email Directo"
      },
      // Common
      common: {
        close: "Cerrar",
        loading: "Cargando...",
        error: "Error",
        success: "Éxito",
        darkMode: "Modo Oscuro",
        lightMode: "Modo Claro"
      },
      // Footer
      footer: {
        artist: {
          specialty: "Arte Visionario Amazónico",
          description: "Artista visionario autodidacta de Tarapoto, especializado en arte chamánico amazónico. Creador de los enigmáticos 'abuelos de la selva' usando pigmentos naturales tradicionales.",
          location: "Tarapoto, San Martín, Perú"
        },
        quickLinks: {
          title: "Enlaces Rápidos"
        },
        social: {
          title: "Redes Sociales y Contacto",
          subtitle: "Sígueme en redes sociales"
        },
        newsletter: {
          title: "Newsletter",
          description: "Recibe reflexiones sobre el proceso creativo y noticias sobre nuevas obras",
          placeholder: "Tu email aquí...",
          subscribe: "Suscribirse",
          emailRequired: "Por favor ingresa tu email",
          success: "¡Suscripción exitosa! Recibirás nuestras actualizaciones."
        },
        legal: {
          title: "Información Legal",
          terms: "Términos y Condiciones",
          privacy: "Política de Privacidad",
          shipping: "Política de Envíos",
          returns: "Política de Devoluciones"
        },
        copyright: "© 2024 Geenss Archenti. Todos los derechos reservados.",
        tagline: "Arte Visionario Amazónico Auténtico",
        madeWith: "Hecho con",
        mission: "para preservar la sabiduría ancestral"
      }
    }
  },
  en: {
    translation: {
      nav: {
        historia: "Story",
        galeria: "Gallery",
        tienda: "Gallery Shop",
        blog: "Blog",
        eventos: "Events",
        testimonios: "Testimonials",
        contacto: "Contact",
        instagram: "Instagram"
      },
      hero: {
        title: "Geenss Archenti",
        subtitle: "Amazonian Visionary Art",
        description: "Windows to the Amazonian worldview, where nature not only inspires, but guides and transforms",
        cta: "Explore Art"
      },
      scrolltelling: {
        inicios: {
          title: "The Beginnings",
          text1: "In Tarapoto, San Martín, the vision was born. Geenss Archenti discovered that art was not just expression, but divine connection.",
          text2: "The first natural pigments: chuchuwasi, dragon's blood, achiote. The jungle began to speak through his hands.",
          text3: "The first works emerged like ancestral whispers, each stroke a conversation with the spirits of the forest."
        },
        camino: {
          title: "The Path",
          text1: "Three years of continuous exploration at El Castillo de Lamas. Each day a new dialogue with sacred pigments.",
          text2: "The technique evolved, but more importantly, the connection evolved. Art became ceremony, a bridge between worlds."
        },
        maestria: {
          title: "Mastery",
          text: "Geenss's works transcend the visual. They are portals that invite the observer to immerse themselves in Amazonian ancestral wisdom."
        },
        presente: {
          title: "The Present",
          text: "With 69,000 followers and presence in international galleries, Geenss continues to be a channel for the elders of the forest."
        }
      },
      gallery: {
        title: "Gallery",
        viewDetails: "View Details",
        year: "Year",
        dimensions: "Dimensions",
        technique: "Technique",
        materials: "Materials",
        description: "Description",
        allYears: "All Years"
      },
      shop: {
        title: "Gallery Shop",
        original: "Original Artwork",
        print: "High Quality Print",
        addToCart: "Add to Cart",
        cart: "Cart",
        checkout: "Checkout",
        total: "Total",
        quantity: "Quantity",
        remove: "Remove"
      },
      blog: {
        title: "Creative Reflections",
        subscribe: "Subscribe",
        email: "Email",
        subscribeText: "Receive reflections on the creative process"
      },
      events: {
        title: "Events and Exhibitions",
        upcoming: "Upcoming Events",
        past: "Past Events",
        getTickets: "Get Tickets",
        viewLocation: "View Location"
      },
      testimonials: {
        title: "Testimonials",
        addTestimonial: "Add Testimonial",
        name: "Name",
        message: "Message",
        submit: "Submit"
      },
      contact: {
        title: "Contact",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        whatsapp: "WhatsApp",
        directEmail: "Direct Email"
      },
      common: {
        close: "Close",
        loading: "Loading...",
        error: "Error",
        success: "Success",
        darkMode: "Dark Mode",
        lightMode: "Light Mode"
      },
      footer: {
        artist: {
          specialty: "Amazonian Visionary Art",
          description: "Self-taught visionary artist from Tarapoto, specialized in Amazonian shamanic art. Creator of the enigmatic 'forest elders' using traditional natural pigments.",
          location: "Tarapoto, San Martín, Peru"
        },
        quickLinks: {
          title: "Quick Links"
        },
        social: {
          title: "Social Media & Contact",
          subtitle: "Follow me on social media"
        },
        newsletter: {
          title: "Newsletter",
          description: "Receive reflections on the creative process and news about new artworks",
          placeholder: "Your email here...",
          subscribe: "Subscribe",
          emailRequired: "Please enter your email",
          success: "Subscription successful! You will receive our updates."
        },
        legal: {
          title: "Legal Information",
          terms: "Terms & Conditions",
          privacy: "Privacy Policy",
          shipping: "Shipping Policy",
          returns: "Returns Policy"
        },
        copyright: "© 2024 Geenss Archenti. All rights reserved.",
        tagline: "Authentic Amazonian Visionary Art",
        madeWith: "Made with",
        mission: "to preserve ancestral wisdom"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        historia: "História",
        galeria: "Galeria",
        tienda: "Loja Galeria",
        blog: "Blog",
        eventos: "Eventos",
        testimonios: "Depoimentos",
        contacto: "Contato",
        instagram: "Instagram"
      },
      hero: {
        title: "Geenss Archenti",
        subtitle: "Arte Visionária Amazônica",
        description: "Janelas para a cosmovisão amazônica, onde a natureza não apenas inspira, mas guia e transforma",
        cta: "Explorar Arte"
      },
      footer: {
        artist: {
          specialty: "Arte Visionária Amazônica",
          description: "Artista visionário autodidata de Tarapoto, especializado em arte xamânica amazônica. Criador dos enigmáticos 'avôs da floresta' usando pigmentos naturais tradicionais.",
          location: "Tarapoto, San Martín, Peru"
        },
        quickLinks: {
          title: "Links Rápidos"
        },
        social: {
          title: "Redes Sociais e Contato",
          subtitle: "Siga-me nas redes sociais"
        },
        newsletter: {
          title: "Newsletter",
          description: "Receba reflexões sobre o processo criativo e notícias sobre novas obras",
          placeholder: "Seu email aqui...",
          subscribe: "Inscrever-se",
          emailRequired: "Por favor, insira seu email",
          success: "Inscrição bem-sucedida! Você receberá nossas atualizações."
        },
        legal: {
          title: "Informações Legais",
          terms: "Termos e Condições",
          privacy: "Política de Privacidade",
          shipping: "Política de Envio",
          returns: "Política de Devolução"
        },
        copyright: "© 2024 Geenss Archenti. Todos os direitos reservados.",
        tagline: "Arte Visionária Amazônica Autêntica",
        madeWith: "Feito com",
        mission: "para preservar a sabedoria ancestral"
      }
    }
  },
  zh: {
    translation: {
      nav: {
        historia: "历史",
        galeria: "画廊",
        tienda: "画廊商店",
        blog: "博客",
        eventos: "活动",
        testimonios: "推荐",
        contacto: "联系",
        instagram: "Instagram"
      },
      hero: {
        title: "Geenss Archenti",
        subtitle: "亚马逊幻象艺术",
        description: "通向亚马逊世界观的窗口，大自然不仅激发灵感，更引导和改变",
        cta: "探索艺术"
      },
      footer: {
        artist: {
          specialty: "亚马逊幻象艺术",
          description: "来自塔拉波托的自学成才的幻象艺术家，专注于亚马逊萨满艺术。使用传统天然颜料创作神秘的「森林长老」作品。",
          location: "塔拉波托，圣马丁，秘鲁"
        },
        quickLinks: {
          title: "快速链接"
        },
        social: {
          title: "社交媒体和联系",
          subtitle: "在社交媒体上关注我"
        },
        newsletter: {
          title: "通讯",
          description: "接收创作过程的思考和新作品的消息",
          placeholder: "您的邮箱...",
          subscribe: "订阅",
          emailRequired: "请输入您的邮箱",
          success: "订阅成功！您将收到我们的更新。"
        },
        legal: {
          title: "法律信息",
          terms: "条款和条件",
          privacy: "隐私政策",
          shipping: "运输政策",
          returns: "退货政策"
        },
        copyright: "© 2024 Geenss Archenti. 版权所有。",
        tagline: "正宗亚马逊幻象艺术",
        madeWith: "用",
        mission: "制作，以保护祖先智慧"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        historia: "Histoire",
        galeria: "Galerie",
        tienda: "Boutique Galerie",
        blog: "Blog",
        eventos: "Événements",
        testimonios: "Témoignages",
        contacto: "Contact",
        instagram: "Instagram"
      },
      hero: {
        title: "Geenss Archenti",
        subtitle: "Art Visionnaire Amazonien",
        description: "Fenêtres sur la vision du monde amazonienne, où la nature n'inspire pas seulement, mais guide et transforme",
        cta: "Explorer l'Art"
      },
      footer: {
        artist: {
          specialty: "Art Visionnaire Amazonien",
          description: "Artiste visionnaire autodidacte de Tarapoto, spécialisé dans l'art chamanique amazonien. Créateur des énigmatiques 'anciens de la forêt' utilisant des pigments naturels traditionnels.",
          location: "Tarapoto, San Martín, Pérou"
        },
        quickLinks: {
          title: "Liens Rapides"
        },
        social: {
          title: "Réseaux Sociaux et Contact",
          subtitle: "Suivez-moi sur les réseaux sociaux"
        },
        newsletter: {
          title: "Newsletter",
          description: "Recevez des réflexions sur le processus créatif et des nouvelles sur les nouvelles œuvres",
          placeholder: "Votre email ici...",
          subscribe: "S'abonner",
          emailRequired: "Veuillez entrer votre email",
          success: "Abonnement réussi ! Vous recevrez nos mises à jour."
        },
        legal: {
          title: "Informations Légales",
          terms: "Termes et Conditions",
          privacy: "Politique de Confidentialité",
          shipping: "Politique d'Expédition",
          returns: "Politique de Retour"
        },
        copyright: "© 2024 Geenss Archenti. Tous droits réservés.",
        tagline: "Art Visionnaire Amazonien Authentique",
        madeWith: "Fait avec",
        mission: "pour préserver la sagesse ancestrale"
      }
    }
  },
  de: {
    translation: {
      nav: {
        historia: "Geschichte",
        galeria: "Galerie",
        tienda: "Galerie Shop",
        blog: "Blog",
        eventos: "Veranstaltungen",
        testimonios: "Referenzen",
        contacto: "Kontakt",
        instagram: "Instagram"
      },
      hero: {
        title: "Geenss Archenti",
        subtitle: "Amazonische Visionäre Kunst",
        description: "Fenster zur amazonischen Weltanschauung, wo die Natur nicht nur inspiriert, sondern führt und verwandelt",
        cta: "Kunst Entdecken"
      },
      footer: {
        artist: {
          specialty: "Amazonische Visionäre Kunst",
          description: "Autodidaktischer visionärer Künstler aus Tarapoto, spezialisiert auf amazonische schamanische Kunst. Schöpfer der rätselhaften 'Waldältesten' mit traditionellen Naturpigmenten.",
          location: "Tarapoto, San Martín, Peru"
        },
        quickLinks: {
          title: "Schnellzugriff"
        },
        social: {
          title: "Soziale Medien & Kontakt",
          subtitle: "Folgen Sie mir in den sozialen Medien"
        },
        newsletter: {
          title: "Newsletter",
          description: "Erhalten Sie Reflexionen über den kreativen Prozess und Neuigkeiten über neue Werke",
          placeholder: "Ihre E-Mail hier...",
          subscribe: "Abonnieren",
          emailRequired: "Bitte geben Sie Ihre E-Mail ein",
          success: "Abonnement erfolgreich! Sie erhalten unsere Updates."
        },
        legal: {
          title: "Rechtliche Informationen",
          terms: "Geschäftsbedingungen",
          privacy: "Datenschutzrichtlinie",
          shipping: "Versandrichtlinie",
          returns: "Rückgaberichtlinie"
        },
        copyright: "© 2024 Geenss Archenti. Alle Rechte vorbehalten.",
        tagline: "Authentische Amazonische Visionäre Kunst",
        madeWith: "Gemacht mit",
        mission: "um die Weisheit der Ahnen zu bewahren"
      }
    }
  },
  it: {
    translation: {
      nav: {
        historia: "Storia",
        galeria: "Galleria",
        tienda: "Negozio Galleria",
        blog: "Blog",
        eventos: "Eventi",
        testimonios: "Testimonianze",
        contacto: "Contatto",
        instagram: "Instagram"
      },
      hero: {
        title: "Geenss Archenti",
        subtitle: "Arte Visionaria Amazzonica",
        description: "Finestre sulla visione del mondo amazzonica, dove la natura non solo ispira, ma guida e trasforma",
        cta: "Esplora l'Arte"
      },
      footer: {
        artist: {
          specialty: "Arte Visionaria Amazzonica",
          description: "Artista visionario autodidatta di Tarapoto, specializzato in arte sciamanica amazzonica. Creatore degli enigmatici 'anziani della foresta' usando pigmenti naturali tradizionali.",
          location: "Tarapoto, San Martín, Perù"
        },
        quickLinks: {
          title: "Link Rapidi"
        },
        social: {
          title: "Social Media e Contatto",
          subtitle: "Seguimi sui social media"
        },
        newsletter: {
          title: "Newsletter",
          description: "Ricevi riflessioni sul processo creativo e notizie su nuove opere",
          placeholder: "La tua email qui...",
          subscribe: "Iscriviti",
          emailRequired: "Per favore inserisci la tua email",
          success: "Iscrizione riuscita! Riceverai i nostri aggiornamenti."
        },
        legal: {
          title: "Informazioni Legali",
          terms: "Termini e Condizioni",
          privacy: "Politica sulla Privacy",
          shipping: "Politica di Spedizione",
          returns: "Politica di Reso"
        },
        copyright: "© 2024 Geenss Archenti. Tutti i diritti riservati.",
        tagline: "Arte Visionaria Amazzonica Autentica",
        madeWith: "Fatto con",
        mission: "per preservare la saggezza ancestrale"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
