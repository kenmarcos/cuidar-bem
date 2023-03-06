interface Categories {
  id: number;
  name: string;
  slug: string;
  description: string;
  link: string;
  permalink: string;
}

interface Tags {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  link: string;
  description: string;
}
export interface Post {
  id: 576960;
  slug: string;
  link: string;
  permalink: string;
  title: string;
  headline: string;
  excerpt: string;
  featured_media: {
    thumbnail: string;
    medium: string;
    medium_large: string;
    large: string;
    "1536x1536": string;
    "2048x2048": string;
    "big-size": string;
    "big-size_mobile": string;
    "mid-size": string;
    "mid-size_mobile": string;
    "web-stories-poster-portrait": string;
    "web-stories-publisher-logo": string;
    "web-stories-thumbnail": string;
  };
  categories: Categories[];
  sponsor: string;
  theme: string;
  published: string;
  modified: string;
}

export interface PostDetails {
  id: number;
  slug: string;
  link: string;
  permalink: string;
  title: string;
  headline: string;
  excerpt: string;
  featured_media: {
    thumbnail: string;
    medium: string;
    medium_large: string;
    large: string;
    "1536x1536": string;
    "2048x2048": string;
    "big-size": string;
    "big-size_mobile": string;
    "mid-size": string;
    "mid-size_mobile": string;
    "web-stories-poster-portrait": string;
    "web-stories-publisher-logo": string;
    "web-stories-thumbnail": string;
  };
  categories: Categories[];
  sponsor:string;
  theme:string;
  published:string;
  modified: string;
  options: {
    ads:string;
    author: string;
    date: string;
    comments: string;
    sticky: boolean;
    is_sponsored: boolean;
    sponsor: string;
    verification: string;
    classification: string;
    template:string;
    taboola_indexable: string;
    featured_image: string;
  };
  breadcrumbs: {
    links: [
      {
        url: string;
        text: string;
      },
      {
        url: string;
        text: string;
        term_id: number;
      },
      {
        url: string;
        text: string;
        term_id: number;
      },
      {
        url: string;
        text: string;
        id: number;
      }
    ];
    options: {
      home: "Portada";
      boldlast: true;
      prefix: "";
      sep: "»";
    };
  };
  content: string;
  bibliography: string;
  tags: Tags[];
  author: {
    id: number;
    slug: string;
    link: string;
    permalink: string;
    name: string;
    description: string;
    picture: string;
    type: string;
    profession: string;
    social_profiles: {
      twitter: string;
      facebook: string;
      linkedin: string;
      instagram: string;
      url: string;
      pinterest: string;
      youtube:string;
    };
  };
  // reviewed: "2020-03-08T15:27:11+01:00";
  // reviewed_by: {
  //   id: 37;
  //   slug: "valeria-sabater";
  //   link: "https://beta.mejorconsalud.com/author/valeria-sabater/";
  //   permalink: "/author/valeria-sabater/";
  //   name: "Valeria Sabater";
  //   description: '<p><strong>Graduada en Psicología</strong> por la <a href="https://www.uv.es/uvweb/universidad/es/universidad-valencia-1285845048380.html" rel="noopener" target="_self">Universidad de Valencia</a> (2004). Cuenta con un <strong>máster en Seguridad y Salud en el Trabajo</strong> (2005) y un <strong>máster en Mental System Management: Neurocreatividad, Innovación y Sexto Sentido</strong> (2016), ambos por esta misma casa de estudios. Como complemento a su profesión realizó el <strong>curso Nutrición y Obesidad: Control de Sobrepeso</strong> por la <a href="https://www.unam.mx/">Universidad Nacional Autónoma de México</a> y un grado en <strong>Antropología Social y Cultural</strong> por la <a href="https://www.uned.es/universidad/inicio.html" rel="noopener" target="_self">Universidad Nacional de Educación a Distancia</a> (2014).</p>\r\n\r\n<p>Cuenta también con el título de <strong>especialista en Coaching en Bienestar y Salud</strong> (2019) y en <strong>Psiquiatría</strong> (2019) por la <a href="https://www.uemc.es/">Universidad Europea Miguel de Cervantes</a>. A lo largo de su trayectoria profesional ha trabajado en el área de la <strong>psicología social </strong>seleccionando y formando personal. Desde el 2008 ejerce como <strong>formadora de psicología e</strong> <strong>inteligencia emocional</strong> en centros de secundaria y ofrece apoyo psicopedagógico a niños con problemas del desarrollo y aprendizaje.</p>\r\n\r\n<p>Valeria Sabater es<strong> escritora y cuenta con diversos premios literarios</strong>. Entre sus obras destacables se encuentran <em>Los lobos de la aldea Serieva</em> (2015), <em>Pon corazón a tu cerebro</em> (2020) y <em>Felicidad a 55 cuentos luz</em> (2021). Ejerce también como redactora, editora y curadora de contenido sobre temáticas de psicología, salud y bienestar. </p>';
  //   picture: "https://beta.mejorconsalud.com/wp-content/uploads/2018/11/Valeria_Sabater.jpg";
  //   type: "professional";
  //   profession: "psicóloga";
  //   social_profiles: {
  //     twitter: "https://twitter.com//valeryasabater";
  //     facebook: "https://www.facebook.com/psicoplenitudvaleriasabater/";
  //     linkedin: "https://www.linkedin.com/in/valeria-sabater-zarzo-89bb6981";
  //     instagram: "https://www.instagram.com/valeria_sabater_psicologia/";
  //     url: "https://elrincondelasmujeressabias.com/";
  //     pinterest: null;
  //     youtube: null;
  //   };
  // };
  // metas: {
  //   title: "5 aspectos que aceleran el envejecimiento prematuro - Mejor con Salud";
  //   description: "El envejecimiento es un proceso natural que afecta a todas las personas. Por lo que se debe afrontar con integridad, optimismo y plenitud.";
  //   robots: "noindex,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";
  //   canonical: "https://beta.mejorconsalud.com/5-aspectos-hacen-envejecer-prematuramente-la-mujer/";
  //   ampUrl: "https://beta.mejorconsalud.com/5-aspectos-hacen-envejecer-prematuramente-la-mujer/amp/";
  //   "og:locale": "es_ES";
  //   "og:title": "5 aspectos que aceleran el envejecimiento prematuro";
  //   "og:description": "El envejecimiento es un proceso natural que afecta a todas las personas. Por lo que se debe afrontar con integridad, optimismo&hellip;";
  //   "og:type": "article";
  //   "og:site_name": "Mejor con Salud";
  //   "og:image": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Envejecimiento-prematuro.jpg";
  //   "og:image:alt": "5 aspectos que aceleran el envejecimiento prematuro";
  //   "og:image:width": 500;
  //   "og:image:height": 332;
  //   "og:image:secure_url": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Envejecimiento-prematuro.jpg";
  //   "article:author": "Valeria Sabater,Carlos Fabián Avila";
  //   "article:publisher": "https://www.facebook.com/MejorConSalud";
  //   "article:tag": [
  //     {
  //       content: "Estres";
  //     },
  //     {
  //       content: "Piel";
  //     }
  //   ];
  //   "article:section": "#2 Curiosidades";
  //   "twitter:card": "summary_large_image";
  //   "twitter:site": "@mejorconsalud";
  //   "twitter:creator": "@mejorconsalud";
  //   "atomik:ads-provider": "google";
  //   "atomik:monetizable": true;
  //   "google-site-verification": "3endmdXzakPFXEjB3u8ZSQaR__g6nq91UQK8EsNEgME";
  //   "msvalidate.01": null;
  //   "yandex-verification": null;
  //   schema: null;
  // };
  // related_links: [
  //   {
  //     id: 542102;
  //     title: "10 cosas que debes hacer antes del desayuno";
  //     slug: "cosas-hacer-antes-desayuno";
  //     description: "";
  //     link: "https://beta.mejorconsalud.com/cosas-hacer-antes-desayuno/";
  //     permalink: "/cosas-hacer-antes-desayuno/";
  //   },
  //   {
  //     id: 538137;
  //     title: '"Doomscrolling": ¿qué es y cómo dejar de hacerlo?';
  //     slug: "doomscrolling-dejar-hacerlo";
  //     description: "";
  //     link: "https://beta.mejorconsalud.com/doomscrolling-dejar-hacerlo/";
  //     permalink: "/doomscrolling-dejar-hacerlo/";
  //   },
  //   {
  //     id: 541326;
  //     title: "Diario de gratitud: ¿qué es y cómo hacerlo?";
  //     slug: "diario-gratitud-hacerlo";
  //     description: "";
  //     link: "https://beta.mejorconsalud.com/diario-gratitud-hacerlo/";
  //     permalink: "/diario-gratitud-hacerlo/";
  //   }
  // ];
  // previous_post: {
  //   id: 59394;
  //   slug: "10-razones-las-agua-coco-revolucionara-salud";
  //   link: "https://beta.mejorconsalud.com/10-razones-las-agua-coco-revolucionara-salud/";
  //   permalink: "/10-razones-las-agua-coco-revolucionara-salud/";
  //   title: "10 beneficios del agua de coco para tu salud";
  //   headline: "El consumo de agua de coco se ha extendido en todo el mundo, ya que ayuda a la rehidratación de nuestro cuerpo y contiene muchos minerales importantes";
  //   excerpt: "El agua de coco es una bebida que se encuentra en el interior de los cocos verdes. A medida que&hellip;";
  //   featured_media: {
  //     thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-150x150.jpg";
  //     medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-378x252.jpg";
  //     medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-768x512.jpg";
  //     large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-500x333.jpg";
  //     "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud.jpg";
  //     "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud.jpg";
  //     "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-470x313.jpg";
  //     "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-370x247.jpg";
  //     "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-280x187.jpg";
  //     "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-160x107.jpg";
  //     "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-640x683.jpg";
  //     "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-96x96.jpg";
  //     "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-150x100.jpg";
  //   };
  //   categories: [
  //     {
  //       id: 1;
  //       name: "#2 Curiosidades";
  //       slug: "curiosidades";
  //       description: "Curiosidades y noticias sobre salud, datos curiosos, descubrimientos, investigaciones y estudios sorprendentes";
  //       link: "https://beta.mejorconsalud.com/lifestyle/curiosidades/";
  //       permalink: "/lifestyle/curiosidades/";
  //     }
  //   ];
  //   sponsor: null;
  //   theme: "base-deploy";
  //   published: "2015-05-20T23:38:48+02:00";
  //   modified: "2022-01-25T20:07:15+01:00";
  // };
  // next_post: {
  //   id: 59256;
  //   slug: "8-remedios-caseros-definitivos-los-talones-agrietados";
  //   link: "https://beta.mejorconsalud.com/8-remedios-caseros-definitivos-los-talones-agrietados/";
  //   permalink: "/8-remedios-caseros-definitivos-los-talones-agrietados/";
  //   title: "9 remedios caseros definitivos para los talones agrietados";
  //   headline: "Los talones agrietados normalmente son consecuencia de la resequedad. Vale la pena prestar más atención al cuidado de nuestros pies si queremos prevenir este tipo de problemas. ";
  //   excerpt: "Los talones agrietados son un signo claro de falta de cuidado de los pies. Pero también son síntoma de deshidratación y,&hellip;";
  //   featured_media: {
  //     thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados-150x150.jpg";
  //     medium: "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados-378x252.jpg";
  //     medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados-768x512.jpg";
  //     large: "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados-500x334.jpg";
  //     "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //   };
  //   categories: [
  //     {
  //       id: 7310;
  //       name: "Terapias naturales";
  //       slug: "terapias";
  //       description: "Las terapias naturales conforman una alternativa tan interesante como recomendable en muchos casos. Te proponemos descubrir los mejores remedios basados en herbología y naturopatía, los mejores masajes, terapias corporales y energéticas, los secretos del Feng Shui… Toda la información relativa a la medicina alternativa siempre a tu alcance.";
  //       link: "https://beta.mejorconsalud.com/remedios-naturales/terapias/";
  //       permalink: "/remedios-naturales/terapias/";
  //     }
  //   ];
  //   sponsor: null;
  //   theme: "base-deploy";
  //   published: "2015-05-21T16:29:34+02:00";
  //   modified: "2022-02-26T07:10:02+01:00";
  // };
  // previous_posts: [
  //   {
  //     id: 59394;
  //     slug: "10-razones-las-agua-coco-revolucionara-salud";
  //     link: "https://beta.mejorconsalud.com/10-razones-las-agua-coco-revolucionara-salud/";
  //     permalink: "/10-razones-las-agua-coco-revolucionara-salud/";
  //     title: "10 beneficios del agua de coco para tu salud";
  //     headline: "El consumo de agua de coco se ha extendido en todo el mundo, ya que ayuda a la rehidratación de nuestro cuerpo y contiene muchos minerales importantes";
  //     excerpt: "El agua de coco es una bebida que se encuentra en el interior de los cocos verdes. A medida que&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-378x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-768x512.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-500x333.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-470x313.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-370x247.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-280x187.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-160x107.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-640x683.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-96x96.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Beneficios-del-agua-de-coco-para-la-salud-150x100.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 1;
  //         name: "#2 Curiosidades";
  //         slug: "curiosidades";
  //         description: "Curiosidades y noticias sobre salud, datos curiosos, descubrimientos, investigaciones y estudios sorprendentes";
  //         link: "https://beta.mejorconsalud.com/lifestyle/curiosidades/";
  //         permalink: "/lifestyle/curiosidades/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-20T23:38:48+02:00";
  //     modified: "2022-01-25T20:07:15+01:00";
  //   },
  //   {
  //     id: 57327;
  //     slug: "4-formas-saludables-de-comer-aguacate";
  //     link: "https://beta.mejorconsalud.com/4-formas-saludables-de-comer-aguacate/";
  //     permalink: "/4-formas-saludables-de-comer-aguacate/";
  //     title: "4 formas saludables de comer aguacate";
  //     headline: "Gracias a su sabor neutro el aguacate es una fruta que combina a la perfección tanto en platos dulces como salados y nos aporta grasas saludables.";
  //     excerpt: "Comer aguacate es un placer porque este alimento tiene una textura suave y un sabor delicioso, que además combina muy&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate-378x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate-768x512.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate-500x333.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate-470x313.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate-370x247.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate-280x187.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate-160x107.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/formas-comer-aguacate.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7303;
  //         name: "Recetas saludables";
  //         slug: "sanas";
  //         description: "Todo en una misma sección: recetas saludables y apetecibles, sencillas, originales, divertidas y ante todo sabrosas. No te pierdas esas recetas sensacionales con las que cuidar de tu salud y de los tuyos, propuestas nutritivas, balanceadas y energéticas que te encantará preparar con nosotros. Coge papel y lápiz, tienes decenas de recetas bien detalladas con las que triunfarás.";
  //         link: "https://beta.mejorconsalud.com/recetas/sanas/";
  //         permalink: "/recetas/sanas/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-20T22:11:55+02:00";
  //     modified: "2022-01-25T02:42:54+01:00";
  //   },
  //   {
  //     id: 59067;
  //     slug: "sintomas-cancer-de-pulmon-que-debes-conocer";
  //     link: "https://beta.mejorconsalud.com/sintomas-cancer-de-pulmon-que-debes-conocer/";
  //     permalink: "/sintomas-cancer-de-pulmon-que-debes-conocer/";
  //     title: "Síntomas del cáncer de pulmón que debes conocer";
  //     headline: "El cáncer de pulmón es uno de los que más incidencia y mortalidad presenta en nuestro país. Descubre sus síntomas más característicos.";
  //     excerpt: "El cáncer del pulmón es uno de los que más incidencia presenta en la población y afecta por igual a&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon-321x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon-500x393.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2013/11/Sistema-respitarotio-problema-pulmon.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 5475;
  //         name: "Enfermedades";
  //         slug: "enfermedades";
  //         description: "En esta sección encontrarás una amplia información sobre las principales enfermedades que puede sufrir el ser humano. Patologías, trastornos, afecciones del sistema respiratorio, circulatorio o de la salud de la mujer… Cada dolencia presenta una serie de sintomatologías que es necesario conocer, así como las últimas noticias sobre los mejores tratamientos e investigaciones asociadas, siempre a tu disposición.";
  //         link: "https://beta.mejorconsalud.com/salud/enfermedades/";
  //         permalink: "/salud/enfermedades/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-20T21:53:19+02:00";
  //     modified: "2022-03-17T10:12:25+01:00";
  //   },
  //   {
  //     id: 58697;
  //     slug: "caminar-perder-peso-modo-correcto-hacerlo";
  //     link: "https://beta.mejorconsalud.com/caminar-perder-peso-modo-correcto-hacerlo/";
  //     permalink: "/caminar-perder-peso-modo-correcto-hacerlo/";
  //     title: "Caminar y perder peso: ¿Cuál es el modo correcto de hacerlo?";
  //     headline: "Es posible que lleves un tiempo saliendo a caminar sin notar demasiados resultados en tu silueta. ¿Estarás haciendo algo mal? Toma nota de los siguientes consejos.";
  //     excerpt: "¿Es posible caminar y perder peso? En nuestro espacio, te hemos hablado en numerosas ocasiones de los grandes beneficios de&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-378x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-768x512.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-500x333.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-470x313.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-370x247.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-280x187.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-160x107.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-640x683.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-96x96.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/caminar-perder-peso-modo-correcto-hacerlo-150x100.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 239;
  //         name: "Perder peso";
  //         slug: "perder-peso";
  //         description: "En esta sección puedes encontrar los mejores consejos para la pérdida de peso de manera saludable, usando las propiedades depurativas y quema-grasas de diversos productos naturales.";
  //         link: "https://beta.mejorconsalud.com/dieta/perder-peso/";
  //         permalink: "/dieta/perder-peso/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-20T17:45:06+02:00";
  //     modified: "2021-10-26T01:03:43+02:00";
  //   },
  //   {
  //     id: 59405;
  //     slug: "tarta-helada-oreo";
  //     link: "https://beta.mejorconsalud.com/tarta-helada-oreo/";
  //     permalink: "/tarta-helada-oreo/";
  //     title: "Prepara una deliciosa tarta helada de Oreo";
  //     headline: "La tarta helada es un postre ideal, sobre todo en verano. Aquí te enseñamos a hacer la tarta helada de Oreo, te aseguramos que será deliciosa.";
  //     excerpt: "La tarta helada es un postre o merienda ideal, especialmente en el verano. Es refrescante, no necesita horno y es&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo-353x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo-500x357.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/tarta-helada-galletas-oreo.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7305;
  //         name: "Postres";
  //         slug: "postres";
  //         description: "Postres caseros, dulces o agridulces, tartas, bizcochos, cremas, flanes y hasta ricos hojaldres, magdalenas o crêpes… ¿Cómo resistirse? En esta sección encontrarás recetas de postres para todos los gustos y necesidades, propuestas infalibles para los paladares más exquisitos y para los grandes apasionados de los postres.";
  //         link: "https://beta.mejorconsalud.com/recetas/postres/";
  //         permalink: "/recetas/postres/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-20T17:45:04+02:00";
  //     modified: "2020-07-24T04:13:39+02:00";
  //   },
  //   {
  //     id: 59470;
  //     slug: "tacos-lechuga-rellenos";
  //     link: "https://beta.mejorconsalud.com/tacos-lechuga-rellenos/";
  //     permalink: "/tacos-lechuga-rellenos/";
  //     title: "Tacos de lechuga rellenos";
  //     headline: "Al ser algo menos manejables que las tortillas de maíz es posible que las hojas de lechuga se rompan un poco al ir a envolver nuestros tacos";
  //     excerpt: "Esta es una receta ligera para comer con mucho sabor y sin remordimientos. Nos estamos refiriendo a los de tacos de lechuga rellenos. Descubre en este artículo cómo elaborarla paso&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga-377x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga-500x334.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/rollos-de-lechuga.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7304;
  //         name: "Platos saludables";
  //         slug: "platos";
  //         description: "Primeros y segundos platos para un almuerzo o una cena, propuestas típicas de cada región, recetas para los niños o para una ocasión especial… En esta sección de Mejor con Salud te acercamos a un sinfín de ideas sabrosas, platos siempre saludables y con los mejores ingredientes ante los que ninguna cuchara podrá resistirse.";
  //         link: "https://beta.mejorconsalud.com/recetas/platos/";
  //         permalink: "/recetas/platos/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-20T17:41:41+02:00";
  //     modified: "2022-01-25T03:35:35+01:00";
  //   },
  //   {
  //     id: 59213;
  //     slug: "3-modos-eficaces-obtener-jugo-una-granada";
  //     link: "https://beta.mejorconsalud.com/3-modos-eficaces-obtener-jugo-una-granada/";
  //     permalink: "/3-modos-eficaces-obtener-jugo-una-granada/";
  //     title: "3 modos eficaces de obtener el jugo de una granada";
  //     headline: "¿ Se hace difícil incluir granada en tu dieta? ¿ Quieres aprovechar todas las propiedades de esta fruta?. Te traemos algunas formas novedosas de incorporarla. ¡ No te las pierdas! ";
  //     excerpt: "Pocos jugos resultan tan saludables para nuestro organismo como el jugo de granada. De sabor delicioso, suave y de atractivo&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-378x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-768x512.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-500x333.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-470x313.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-370x247.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-280x187.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-160x107.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-640x683.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-96x96.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/modos-eficaces-obtener-jugo-una-granada-150x100.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 1;
  //         name: "#2 Curiosidades";
  //         slug: "curiosidades";
  //         description: "Curiosidades y noticias sobre salud, datos curiosos, descubrimientos, investigaciones y estudios sorprendentes";
  //         link: "https://beta.mejorconsalud.com/lifestyle/curiosidades/";
  //         permalink: "/lifestyle/curiosidades/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-20T17:12:54+02:00";
  //     modified: "2022-04-08T19:07:00+02:00";
  //   },
  //   {
  //     id: 59380;
  //     slug: "cheesecake-tortuga";
  //     link: "https://beta.mejorconsalud.com/cheesecake-tortuga/";
  //     permalink: "/cheesecake-tortuga/";
  //     title: "Aprende a hacer estadeliciosa tortuga cheesecake";
  //     headline: "Es importante dejar reposar el pastel unas horas en la nevera antes de consumirlo, por lo que podemos empezar a prepararlo la noche anterior y terminarlo por la mañana";
  //     excerpt: "Esta receta es original y tentadora, óptima elección para levantar tu reputación como repostero o como anfitrión de tardes inolvidable&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga-377x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga-500x334.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/cheesecake-tortuga.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7305;
  //         name: "Postres";
  //         slug: "postres";
  //         description: "Postres caseros, dulces o agridulces, tartas, bizcochos, cremas, flanes y hasta ricos hojaldres, magdalenas o crêpes… ¿Cómo resistirse? En esta sección encontrarás recetas de postres para todos los gustos y necesidades, propuestas infalibles para los paladares más exquisitos y para los grandes apasionados de los postres.";
  //         link: "https://beta.mejorconsalud.com/recetas/postres/";
  //         permalink: "/recetas/postres/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-20T14:31:32+02:00";
  //     modified: "2020-07-24T04:12:59+02:00";
  //   }
  // ];
  // next_posts: [
  //   {
  //     id: 59256;
  //     slug: "8-remedios-caseros-definitivos-los-talones-agrietados";
  //     link: "https://beta.mejorconsalud.com/8-remedios-caseros-definitivos-los-talones-agrietados/";
  //     permalink: "/8-remedios-caseros-definitivos-los-talones-agrietados/";
  //     title: "9 remedios caseros definitivos para los talones agrietados";
  //     headline: "Los talones agrietados normalmente son consecuencia de la resequedad. Vale la pena prestar más atención al cuidado de nuestros pies si queremos prevenir este tipo de problemas. ";
  //     excerpt: "Los talones agrietados son un signo claro de falta de cuidado de los pies. Pero también son síntoma de deshidratación y,&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados-378x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados-768x512.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados-500x334.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2013/08/pies-talones-agrietados.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7310;
  //         name: "Terapias naturales";
  //         slug: "terapias";
  //         description: "Las terapias naturales conforman una alternativa tan interesante como recomendable en muchos casos. Te proponemos descubrir los mejores remedios basados en herbología y naturopatía, los mejores masajes, terapias corporales y energéticas, los secretos del Feng Shui… Toda la información relativa a la medicina alternativa siempre a tu alcance.";
  //         link: "https://beta.mejorconsalud.com/remedios-naturales/terapias/";
  //         permalink: "/remedios-naturales/terapias/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-21T16:29:34+02:00";
  //     modified: "2022-02-26T07:10:02+01:00";
  //   },
  //   {
  //     id: 59407;
  //     slug: "velas-aromaticas-casa";
  //     link: "https://beta.mejorconsalud.com/velas-aromaticas-casa/";
  //     permalink: "/velas-aromaticas-casa/";
  //     title: "Cómo hacer velas aromáticas en casa";
  //     headline: "Las velas aromáticas no solo se utilizan para decorar la casa, su aroma y su estética pueden convertir el ambiente en algo realmente relajante y mágico. A la hora de hacerlas en casa, no olvides extremar la seguridad";
  //     excerpt: "Las velas ya no se utilizan únicamente para cuando se corta la luz en casa. En especial, las velas aromáticas se han&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa-377x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa-500x334.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/velas-en-casa.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 4;
  //         name: "Buenos hábitos";
  //         slug: "buenos-habitos";
  //         description: "Buenos hábitos y hábitos alimenticios para las dietas, alergias, diabetes, bronquitis y asma";
  //         link: "https://beta.mejorconsalud.com/bienestar/buenos-habitos/";
  //         permalink: "/bienestar/buenos-habitos/";
  //       },
  //       {
  //         id: 7294;
  //         name: "Consejos para el hogar";
  //         slug: "consejos-hogar";
  //         description: "Si te encantan los tips caseros, esos en los que solucionar cualquier problema en casa, esos en los que conseguir de forma sencilla y económica que tus cortinas o sofás luzcan más bonitos, tus alfombras más limpias o tu baño más reluciente, no lo dudes, en en esta sección encontrarás infinidad de ideas estupendas. ¡Se te harán imprescindibles!";
  //         link: "https://beta.mejorconsalud.com/lifestyle/consejos-hogar/";
  //         permalink: "/lifestyle/consejos-hogar/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-21T16:48:17+02:00";
  //     modified: "2022-01-25T20:26:38+01:00";
  //   },
  //   {
  //     id: 59490;
  //     slug: "verdad-te-verde-puede-ayudarme-adelgazar";
  //     link: "https://beta.mejorconsalud.com/verdad-te-verde-puede-ayudarme-adelgazar/";
  //     permalink: "/verdad-te-verde-puede-ayudarme-adelgazar/";
  //     title: "¿Es verdad que el té verde puede ayudarme a adelgazar?";
  //     headline: "Si mantenemos una dieta equilibrada y hábitos saludables, tomar tres tazas de té al día puede sernos de utilidad para evitar el exceso de peso";
  //     excerpt: "Pocas cosas resultan más satisfactorias que llegar a casa y servirnos un té verde en nuestra taza favorita. Hay quien&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde-390x229.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde-500x294.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/04/Te-verde.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 239;
  //         name: "Perder peso";
  //         slug: "perder-peso";
  //         description: "En esta sección puedes encontrar los mejores consejos para la pérdida de peso de manera saludable, usando las propiedades depurativas y quema-grasas de diversos productos naturales.";
  //         link: "https://beta.mejorconsalud.com/dieta/perder-peso/";
  //         permalink: "/dieta/perder-peso/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-21T17:01:39+02:00";
  //     modified: "2022-01-27T21:25:01+01:00";
  //   },
  //   {
  //     id: 58615;
  //     slug: "10-usos-del-aceite-oliva-extra-virgen-seguramente-no-conocias";
  //     link: "https://beta.mejorconsalud.com/10-usos-del-aceite-oliva-extra-virgen-seguramente-no-conocias/";
  //     permalink: "/10-usos-del-aceite-oliva-extra-virgen-seguramente-no-conocias/";
  //     title: "10 usos del aceite de oliva extra virgen que seguramente no conocías";
  //     headline: "No es sólo su sabor: el aceite de oliva nos proporcionas numerosos beneficios en muchos niveles. Nos ayuda a cuidar de nuestra salud y de nuestra belleza";
  //     excerpt: "El aceite de oliva extra virgen es parte de la rutina culinaria de millones de personas en todo el mundo.&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva-379x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva-500x332.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/Aceite-de-oliva.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 1;
  //         name: "#2 Curiosidades";
  //         slug: "curiosidades";
  //         description: "Curiosidades y noticias sobre salud, datos curiosos, descubrimientos, investigaciones y estudios sorprendentes";
  //         link: "https://beta.mejorconsalud.com/lifestyle/curiosidades/";
  //         permalink: "/lifestyle/curiosidades/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-21T17:18:19+02:00";
  //     modified: "2022-01-25T02:12:50+01:00";
  //   },
  //   {
  //     id: 59315;
  //     slug: "huevos-forma-corazon-original";
  //     link: "https://beta.mejorconsalud.com/huevos-forma-corazon-original/";
  //     permalink: "/huevos-forma-corazon-original/";
  //     title: "Cómo hacer huevos en forma de corazón: ¡Muy original!";
  //     headline: "Disfruta de un desayuno distinto con unos huevos en forma de corazón. O bien, puedes animarte a crear otras formas, como estrellas, medias lunas, y muchas otras.";
  //     excerpt: "¿Quieres dar un toque de originalidad y alegría a tus desayunos o cenas? Entonces, quizás deberías intentar cocinar unos huevos&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-378x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-768x512.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-500x333.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-470x313.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-370x247.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-280x187.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-160x107.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-640x683.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-96x96.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/huevos-forma-corazon-original-150x100.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7304;
  //         name: "Platos saludables";
  //         slug: "platos";
  //         description: "Primeros y segundos platos para un almuerzo o una cena, propuestas típicas de cada región, recetas para los niños o para una ocasión especial… En esta sección de Mejor con Salud te acercamos a un sinfín de ideas sabrosas, platos siempre saludables y con los mejores ingredientes ante los que ninguna cuchara podrá resistirse.";
  //         link: "https://beta.mejorconsalud.com/recetas/platos/";
  //         permalink: "/recetas/platos/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-21T17:36:18+02:00";
  //     modified: "2022-01-27T20:53:42+01:00";
  //   },
  //   {
  //     id: 59649;
  //     slug: "bombas-crema-pastelera";
  //     link: "https://beta.mejorconsalud.com/bombas-crema-pastelera/";
  //     permalink: "/bombas-crema-pastelera/";
  //     title: "Bombas de crema pastelera";
  //     headline: "Si no vamos a consumir las bombas de crema en el día conviene guardarlas en el refrigerador y consumirlas en un plazo máximo de 3 días, ya que contienen huevo";
  //     excerpt: "Las bombas de crema pastelera, también llamadas berlinas o berlinesas, son simplemente bollos rellenos de crema pastelera y cubiertos de azúcar glas. Y como su nombre indica, son una auténtica&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera-377x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera-500x334.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombas-crema-pastelera.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7305;
  //         name: "Postres";
  //         slug: "postres";
  //         description: "Postres caseros, dulces o agridulces, tartas, bizcochos, cremas, flanes y hasta ricos hojaldres, magdalenas o crêpes… ¿Cómo resistirse? En esta sección encontrarás recetas de postres para todos los gustos y necesidades, propuestas infalibles para los paladares más exquisitos y para los grandes apasionados de los postres.";
  //         link: "https://beta.mejorconsalud.com/recetas/postres/";
  //         permalink: "/recetas/postres/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-21T18:11:39+02:00";
  //     modified: "2020-03-08T15:30:06+01:00";
  //   },
  //   {
  //     id: 57761;
  //     slug: "mousse-de-jamon-cocido";
  //     link: "https://beta.mejorconsalud.com/mousse-de-jamon-cocido/";
  //     permalink: "/mousse-de-jamon-cocido/";
  //     title: "Mousse de jamón cocido";
  //     headline: "Al preparar la mouse de jamón en casa podemos adaptar los ingredientes a nuestras necesidades y utilizar solo de primera calidad, y así asegurarnos de que no contienen aditivos perjudiciales";
  //     excerpt: "En este artículo veremos cómo preparar mousse de jamón cocido. Quizás la palabra “mousse” no la puedas relacionar mucho con el jamón. Bueno, puedes usar “paté” si te es más&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido-189x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/mousse-jamon-cocido.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7304;
  //         name: "Platos saludables";
  //         slug: "platos";
  //         description: "Primeros y segundos platos para un almuerzo o una cena, propuestas típicas de cada región, recetas para los niños o para una ocasión especial… En esta sección de Mejor con Salud te acercamos a un sinfín de ideas sabrosas, platos siempre saludables y con los mejores ingredientes ante los que ninguna cuchara podrá resistirse.";
  //         link: "https://beta.mejorconsalud.com/recetas/platos/";
  //         permalink: "/recetas/platos/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-21T19:34:31+02:00";
  //     modified: "2022-04-11T20:08:19+02:00";
  //   },
  //   {
  //     id: 59610;
  //     slug: "bombones-chocolate-rellenos-coco";
  //     link: "https://beta.mejorconsalud.com/bombones-chocolate-rellenos-coco/";
  //     permalink: "/bombones-chocolate-rellenos-coco/";
  //     title: "Bombones de chocolate rellenos de coco";
  //     headline: "En caso de optar por derretir el chocolate en el microondas en lugar de al baño María deberemos hacer una pasa a los 15 segundos para mezclarlo y evitar que se queme";
  //     excerpt: "Los bombones de chocolate son un dulce tradicional que podemos encontrar en distintas presentaciones. Aunque no se aconseja su consumo&hellip;";
  //     featured_media: {
  //       thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate-150x150.jpg";
  //       medium: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate-377x252.jpg";
  //       medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       large: "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate-500x334.jpg";
  //       "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //       "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2015/05/bombones-de-chocolate.jpg";
  //     };
  //     categories: [
  //       {
  //         id: 7305;
  //         name: "Postres";
  //         slug: "postres";
  //         description: "Postres caseros, dulces o agridulces, tartas, bizcochos, cremas, flanes y hasta ricos hojaldres, magdalenas o crêpes… ¿Cómo resistirse? En esta sección encontrarás recetas de postres para todos los gustos y necesidades, propuestas infalibles para los paladares más exquisitos y para los grandes apasionados de los postres.";
  //         link: "https://beta.mejorconsalud.com/recetas/postres/";
  //         permalink: "/recetas/postres/";
  //       }
  //     ];
  //     sponsor: null;
  //     theme: "base-deploy";
  //     published: "2015-05-22T03:39:17+02:00";
  //     modified: "2019-01-04T20:38:17+01:00";
  //   }
  // ];
  // sidebars: {
  //   right: {
  //     id: "single-sidebar";
  //     widgets: [
  //       {
  //         id: "mc-dynamic-ads-8";
  //         type: "mc-dynamic-ads";
  //         options: {
  //           slot_type: "sky";
  //           is_stick: "off";
  //           device: {
  //             desktop: "on";
  //             mobile: "on";
  //             tablet: "on";
  //           };
  //         };
  //         content: {
  //           slot_name: "/7120678/mcontigo/beta.mejorconsalud.com";
  //           slot_sizes: {
  //             desktop: {
  //               sizes: "[[300, 600], [300, 250]]";
  //               sizes_amp: "300x600,300x250";
  //             };
  //             mobile: {
  //               sizes: "[[300, 100], [300, 300], [300, 250], [300, 600], [320, 50], [320, 100]]";
  //               sizes_amp: "300x600,320x480,336x280,300x300,300x250,300x100,320x50,320x100";
  //             };
  //           };
  //         };
  //       },
  //       {
  //         id: "mc-widget-featured-posts-18";
  //         type: "mc-widget-featured-posts";
  //         options: {
  //           title: "Artículos interesantes";
  //           posts_per_page: 8;
  //           offset: 0;
  //           order: "date";
  //           orderby: "desc";
  //           content_type: "recommends";
  //           post_style: "1";
  //           category: "";
  //           widget_type: "1";
  //           widget_class: "with-big-featured posts-style-2";
  //           post_type: ["post"];
  //         };
  //         content: [
  //           {
  //             id: 696863;
  //             slug: "shortcodes-que-se-usan-en-cmc";
  //             link: "https://beta.mejorconsalud.com/shortcodes-que-se-usan-en-cmc/";
  //             permalink: "/shortcodes-que-se-usan-en-cmc/";
  //             title: "Shortcodes que se usan en CMC";
  //             headline: null;
  //             excerpt: "Caja de producto normal  Caja de producto con enlace (En este caso el de la review)  Caja de producto grande con detalles &hellip;";
  //             featured_media: null;
  //             categories: [
  //               {
  //                 id: 1;
  //                 name: "#2 Curiosidades";
  //                 slug: "curiosidades";
  //                 description: "Curiosidades y noticias sobre salud, datos curiosos, descubrimientos, investigaciones y estudios sorprendentes";
  //                 link: "https://beta.mejorconsalud.com/lifestyle/curiosidades/";
  //                 permalink: "/lifestyle/curiosidades/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2023-02-16T14:38:16+01:00";
  //             modified: "2023-02-16T14:38:16+01:00";
  //           },
  //           {
  //             id: 696850;
  //             slug: "contenido-con-shortcodes-para-validacion";
  //             link: "https://beta.mejorconsalud.com/contenido-con-shortcodes-para-validacion/";
  //             permalink: "/contenido-con-shortcodes-para-validacion/";
  //             title: "Contenido con shortcodes para validación";
  //             headline: null;
  //             excerpt: "    &nbsp;";
  //             featured_media: null;
  //             categories: [
  //               {
  //                 id: 1;
  //                 name: "#2 Curiosidades";
  //                 slug: "curiosidades";
  //                 description: "Curiosidades y noticias sobre salud, datos curiosos, descubrimientos, investigaciones y estudios sorprendentes";
  //                 link: "https://beta.mejorconsalud.com/lifestyle/curiosidades/";
  //                 permalink: "/lifestyle/curiosidades/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2023-02-09T21:51:17+01:00";
  //             modified: "2023-02-09T21:59:15+01:00";
  //           },
  //           {
  //             id: 688425;
  //             slug: "cambia-piel-postparto-cuidarla-v2";
  //             link: "https://beta.mejorconsalud.com/cambia-piel-postparto-cuidarla-v2/";
  //             permalink: "/cambia-piel-postparto-cuidarla-v2/";
  //             title: "(Test #1337 - 01/02) - Cómo cambia la piel en el posparto y qué hacer para cuidarla";
  //             headline: "El posparto es una etapa en la vida de la mujer que representa un riesgo: no solo se enfrenta al cuidado del nuevo bebé, sino también a los cambios hormonales y físicos. ¿Qué puedes hacer?";
  //             excerpt: "La piel en el posparto se modifica debido a los cambios hormonales durante el embarazo. Es por ello que el&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-378x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-768x512.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-500x333.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-470x313.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-370x247.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-280x187.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-160x107.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-640x836.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 7287;
  //                 name: "#1 Embarazo";
  //                 slug: "embarazo";
  //                 description: "¿Qué ocurre en tu cuerpo en cada trimestre? ¿Qué alimentación debe seguir una embarazada? ¿Qué ejercicios son los más recomendables? ¿Cómo conectar con mi bebé a lo largo de la gestación? Estas y otras cuestiones relativas al embarazo te las resolvemos en esta sección de Mejor con Salud.";
  //                 link: "https://beta.mejorconsalud.com/maternidad-2/embarazo/";
  //                 permalink: "/maternidad-2/embarazo/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-22T12:00:48+02:00";
  //             modified: "2023-01-02T14:15:49+01:00";
  //           },
  //           {
  //             id: 686327;
  //             slug: "enfadado-todo-tiempo-controlarlo";
  //             link: "https://beta.mejorconsalud.com/enfadado-todo-tiempo-controlarlo/";
  //             permalink: "/enfadado-todo-tiempo-controlarlo/";
  //             title: "(Test #198 - 01/02) - ¿Por qué estoy enfadado todo el tiempo y cómo controlarlo?";
  //             headline: "Lidiar con el estrés de modo continuo es una de las razones por las que puedes sentirte enfadado todo el tiempo. ¿Qué otras causas se esconden detrás de la ira?";
  //             excerpt: "¿Qué sucede? ¿Por qué estoy enfadado todo el tiempo? Son algunas de las preguntas que surgen cuando un hecho, en&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-378x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-768x512.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-500x333.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-470x313.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-370x247.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-280x187.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-160x107.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-640x836.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 7281;
  //                 name: "Mente sana";
  //                 slug: "mente-sana";
  //                 description: "En esta sección encontrarás los mejores consejos para promover tu crecimiento personal, tu autoconocimiento, mejorar tu autoestima y alcanzar tu máximo potencial en la vida. Te explicamos además cómo disfrutar de tus relaciones con los demás y a comprender un poco mejor los misterios de eso que al fin y al cabo, nos hace humanos: la mente.";
  //                 link: "https://beta.mejorconsalud.com/bienestar/mente-sana/";
  //                 permalink: "/bienestar/mente-sana/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-22T10:00:29+02:00";
  //             modified: "2023-01-02T14:15:13+01:00";
  //           },
  //           {
  //             id: 686887;
  //             slug: "vida-es-fragil-toma-tiempo-vivirla-actual";
  //             link: "https://beta.mejorconsalud.com/vida-es-fragil-toma-tiempo-vivirla-actual/";
  //             permalink: "/vida-es-fragil-toma-tiempo-vivirla-actual/";
  //             title: "(Test #198 - 01/02) - La vida es frágil, toma tu tiempo para vivirla";
  //             headline: "El tiempo suele escaparse de nuestras manos sin darnos cuenta. No esperes a que sea demasiado tarde para empezar a aprovecharlo.";
  //             excerpt: "El tiempo es uno de los grandes tesoros de la vida; no por casualidad nos referimos a él diciendo que&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-378x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-768x512.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-500x333.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-470x313.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-370x247.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-280x187.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-160x107.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-640x836.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 7274;
  //                 name: "#1 Bienestar";
  //                 slug: "bienestar";
  //                 description: "En nuestro día a día podemos llevar a cabo múltiples estrategias con las que contribuir al máximo a nuestro bienestar y la calidad de vida. Desde técnicas de relajación, gestión emocional, ejercicios para cuidar de nuestras articulaciones o perder peso...Descubre todo ese amplio abanico de estrategias con las que sentirte bien por dentro y por fuera.";
  //                 link: "https://beta.mejorconsalud.com/bienestar/";
  //                 permalink: "/bienestar/";
  //               },
  //               {
  //                 id: 7281;
  //                 name: "Mente sana";
  //                 slug: "mente-sana";
  //                 description: "En esta sección encontrarás los mejores consejos para promover tu crecimiento personal, tu autoconocimiento, mejorar tu autoestima y alcanzar tu máximo potencial en la vida. Te explicamos además cómo disfrutar de tus relaciones con los demás y a comprender un poco mejor los misterios de eso que al fin y al cabo, nos hace humanos: la mente.";
  //                 link: "https://beta.mejorconsalud.com/bienestar/mente-sana/";
  //                 permalink: "/bienestar/mente-sana/";
  //               }
  //             ];
  //             sponsor: {
  //               brand: "Unycos";
  //               logo: "https://beta.mejorconsalud.com/wp-content/uploads/2021/11/Logo.png";
  //               type: "Contenido patrocinado";
  //               style: "logo";
  //               background: "#91a7d3";
  //               color: "#f1f1f1";
  //             };
  //             theme: "base-deploy";
  //             published: "2022-04-21T18:00:41+02:00";
  //             modified: "2023-02-24T17:11:15+01:00";
  //           },
  //           {
  //             id: 687137;
  //             slug: "utilizar-estragon-cocina-v2";
  //             link: "https://beta.mejorconsalud.com/utilizar-estragon-cocina-v2/";
  //             permalink: "/utilizar-estragon-cocina-v2/";
  //             title: "(Test #2 - 12/29) - ¿Cómo utilizar el estragón en la cocina?";
  //             headline: "Te vamos a mostrar las principales aplicaciones y los beneficios del estragón en la cocina. Se trata de una especia realmente frecuente en las zonas del este europeo.";
  //             excerpt: "El estragón es una especia culinaria que cuenta con varios beneficios para la salud y que presenta diferentes tipos de&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-378x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-768x512.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-500x333.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-470x313.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-370x247.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-280x187.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-160x107.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-640x836.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 7285;
  //                 name: "#2 Nutrición";
  //                 slug: "nutricion";
  //                 description: "¿Te nutres de forma adecuada? En ocasiones determinadas dietas nos sumen en estados carenciales, lo cual se traduce en malestar, cansancio o en diversos trastornos. En esta sección te enseñaremos qué alimentos son los más nutritivos, qué dietas y hábitos debes seguir para cubrir todas tus necesidades.";
  //                 link: "https://beta.mejorconsalud.com/dieta/nutricion/";
  //                 permalink: "/dieta/nutricion/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-20T12:00:14+02:00";
  //             modified: "2022-12-29T20:17:22+01:00";
  //           },
  //           {
  //             id: 688159;
  //             slug: "mitos-verdades-sobre-salud-cardiaca-review";
  //             link: "https://beta.mejorconsalud.com/mitos-verdades-sobre-salud-cardiaca-review/";
  //             permalink: "/mitos-verdades-sobre-salud-cardiaca-review/";
  //             title: "#5 - Mitos y verdades sobre la salud cardíaca que tienes que saber";
  //             headline: "Conocer y aclarar cuáles son los mitos y verdades más comunes sobre la salud cardíaca es el primer paso para proteger el corazón. ¡Aprende más!";
  //             excerpt: "Las enfermedades cardiovasculares representan una de las principales causas de incapacidad y muerte en todo el mundo. Sin embargo, las&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-390x213.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-768x420.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-500x273.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-470x257.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-370x202.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-280x153.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-160x87.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-640x757.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-150x82.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 5475;
  //                 name: "Enfermedades";
  //                 slug: "enfermedades";
  //                 description: "En esta sección encontrarás una amplia información sobre las principales enfermedades que puede sufrir el ser humano. Patologías, trastornos, afecciones del sistema respiratorio, circulatorio o de la salud de la mujer… Cada dolencia presenta una serie de sintomatologías que es necesario conocer, así como las últimas noticias sobre los mejores tratamientos e investigaciones asociadas, siempre a tu disposición.";
  //                 link: "https://beta.mejorconsalud.com/salud/enfermedades/";
  //                 permalink: "/salud/enfermedades/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-20T10:00:17+02:00";
  //             modified: "2022-12-28T01:17:15+01:00";
  //           },
  //           {
  //             id: 686410;
  //             slug: "paradoja-dano-alcohol";
  //             link: "https://beta.mejorconsalud.com/paradoja-dano-alcohol/";
  //             permalink: "/paradoja-dano-alcohol/";
  //             title: "#6 - Paradoja del daño del alcohol: ¿qué es y por qué ocurre?";
  //             headline: "La paradoja del daño del alcohol habla, sobre todo, de desigualdades socioeconómicas. De todos modos, se requiere de más datos e investigación para comprender este fenómeno.";
  //             excerpt: "La paradoja del daño del alcohol es un fenómeno social asociado a un hecho contradictorio. Se ha detectado que el&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-379x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-768x511.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-500x332.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-470x312.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-370x246.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-280x186.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-160x106.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-640x835.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 5475;
  //                 name: "Enfermedades";
  //                 slug: "enfermedades";
  //                 description: "En esta sección encontrarás una amplia información sobre las principales enfermedades que puede sufrir el ser humano. Patologías, trastornos, afecciones del sistema respiratorio, circulatorio o de la salud de la mujer… Cada dolencia presenta una serie de sintomatologías que es necesario conocer, así como las últimas noticias sobre los mejores tratamientos e investigaciones asociadas, siempre a tu disposición.";
  //                 link: "https://beta.mejorconsalud.com/salud/enfermedades/";
  //                 permalink: "/salud/enfermedades/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-19T18:00:37+02:00";
  //             modified: "2022-12-28T02:24:19+01:00";
  //           }
  //         ];
  //       },
  //       {
  //         id: "mc-dynamic-ads-9";
  //         type: "mc-dynamic-ads";
  //         options: {
  //           slot_type: "sky";
  //           is_stick: "off";
  //           device: {
  //             desktop: "on";
  //             mobile: "on";
  //             tablet: "on";
  //           };
  //         };
  //         content: {
  //           slot_name: "/7120678/mcontigo/beta.mejorconsalud.com";
  //           slot_sizes: {
  //             desktop: {
  //               sizes: "[[300, 600], [300, 250]]";
  //               sizes_amp: "300x600,300x250";
  //             };
  //             mobile: {
  //               sizes: "[[300, 100], [300, 300], [300, 250], [300, 600], [320, 50], [320, 100]]";
  //               sizes_amp: "300x600,320x480,336x280,300x300,300x250,300x100,320x50,320x100";
  //             };
  //           };
  //         };
  //       },
  //       {
  //         id: "mc-dynamic-ads-12";
  //         type: "mc-dynamic-ads";
  //         options: {
  //           slot_type: "sky";
  //           is_stick: "on";
  //           device: {
  //             desktop: "on";
  //             mobile: "on";
  //             tablet: "on";
  //           };
  //         };
  //         content: {
  //           slot_name: "/7120678/mcontigo/beta.mejorconsalud.com";
  //           slot_sizes: {
  //             desktop: {
  //               sizes: "[[300, 600], [300, 250]]";
  //               sizes_amp: "300x600,300x250";
  //             };
  //             mobile: {
  //               sizes: "[[300, 100], [300, 300], [300, 250], [300, 600], [320, 50], [320, 100]]";
  //               sizes_amp: "300x600,320x480,336x280,300x300,300x250,300x100,320x50,320x100";
  //             };
  //           };
  //         };
  //       }
  //     ];
  //   };
  //   bottom: {
  //     id: "single-lower-sidebar";
  //     widgets: [
  //       {
  //         id: "mc-widget-taboola-2";
  //         type: "mc-widget-taboola";
  //         options: {
  //           content_type: "taboola-below-article-thumbnails";
  //           device: {
  //             desktop: "on";
  //             mobile: "on";
  //             tablet: "on";
  //           };
  //         };
  //         content: null;
  //       },
  //       {
  //         id: "mc-widget-recommend-content-3";
  //         type: "mc-widget-recommend-content";
  //         options: {
  //           title: "Artículos interesantes";
  //           posts_per_page: 8;
  //           post_type: ["post"];
  //           offset: 0;
  //           order: "date";
  //         };
  //         content: [
  //           {
  //             id: 696863;
  //             slug: "shortcodes-que-se-usan-en-cmc";
  //             link: "https://beta.mejorconsalud.com/shortcodes-que-se-usan-en-cmc/";
  //             permalink: "/shortcodes-que-se-usan-en-cmc/";
  //             title: "Shortcodes que se usan en CMC";
  //             headline: null;
  //             excerpt: "Caja de producto normal  Caja de producto con enlace (En este caso el de la review)  Caja de producto grande con detalles &hellip;";
  //             featured_media: null;
  //             categories: [
  //               {
  //                 id: 1;
  //                 name: "#2 Curiosidades";
  //                 slug: "curiosidades";
  //                 description: "Curiosidades y noticias sobre salud, datos curiosos, descubrimientos, investigaciones y estudios sorprendentes";
  //                 link: "https://beta.mejorconsalud.com/lifestyle/curiosidades/";
  //                 permalink: "/lifestyle/curiosidades/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2023-02-16T14:38:16+01:00";
  //             modified: "2023-02-16T14:38:16+01:00";
  //           },
  //           {
  //             id: 696850;
  //             slug: "contenido-con-shortcodes-para-validacion";
  //             link: "https://beta.mejorconsalud.com/contenido-con-shortcodes-para-validacion/";
  //             permalink: "/contenido-con-shortcodes-para-validacion/";
  //             title: "Contenido con shortcodes para validación";
  //             headline: null;
  //             excerpt: "    &nbsp;";
  //             featured_media: null;
  //             categories: [
  //               {
  //                 id: 1;
  //                 name: "#2 Curiosidades";
  //                 slug: "curiosidades";
  //                 description: "Curiosidades y noticias sobre salud, datos curiosos, descubrimientos, investigaciones y estudios sorprendentes";
  //                 link: "https://beta.mejorconsalud.com/lifestyle/curiosidades/";
  //                 permalink: "/lifestyle/curiosidades/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2023-02-09T21:51:17+01:00";
  //             modified: "2023-02-09T21:59:15+01:00";
  //           },
  //           {
  //             id: 688425;
  //             slug: "cambia-piel-postparto-cuidarla-v2";
  //             link: "https://beta.mejorconsalud.com/cambia-piel-postparto-cuidarla-v2/";
  //             permalink: "/cambia-piel-postparto-cuidarla-v2/";
  //             title: "(Test #1337 - 01/02) - Cómo cambia la piel en el posparto y qué hacer para cuidarla";
  //             headline: "El posparto es una etapa en la vida de la mujer que representa un riesgo: no solo se enfrenta al cuidado del nuevo bebé, sino también a los cambios hormonales y físicos. ¿Qué puedes hacer?";
  //             excerpt: "La piel en el posparto se modifica debido a los cambios hormonales durante el embarazo. Es por ello que el&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-378x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-768x512.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-500x333.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-470x313.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-370x247.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-280x187.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-160x107.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-640x836.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/piel-abdomen-bebe-madre-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 7287;
  //                 name: "#1 Embarazo";
  //                 slug: "embarazo";
  //                 description: "¿Qué ocurre en tu cuerpo en cada trimestre? ¿Qué alimentación debe seguir una embarazada? ¿Qué ejercicios son los más recomendables? ¿Cómo conectar con mi bebé a lo largo de la gestación? Estas y otras cuestiones relativas al embarazo te las resolvemos en esta sección de Mejor con Salud.";
  //                 link: "https://beta.mejorconsalud.com/maternidad-2/embarazo/";
  //                 permalink: "/maternidad-2/embarazo/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-22T12:00:48+02:00";
  //             modified: "2023-01-02T14:15:49+01:00";
  //           },
  //           {
  //             id: 686327;
  //             slug: "enfadado-todo-tiempo-controlarlo";
  //             link: "https://beta.mejorconsalud.com/enfadado-todo-tiempo-controlarlo/";
  //             permalink: "/enfadado-todo-tiempo-controlarlo/";
  //             title: "(Test #198 - 01/02) - ¿Por qué estoy enfadado todo el tiempo y cómo controlarlo?";
  //             headline: "Lidiar con el estrés de modo continuo es una de las razones por las que puedes sentirte enfadado todo el tiempo. ¿Qué otras causas se esconden detrás de la ira?";
  //             excerpt: "¿Qué sucede? ¿Por qué estoy enfadado todo el tiempo? Son algunas de las preguntas que surgen cuando un hecho, en&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-378x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-768x512.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-500x333.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-470x313.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-370x247.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-280x187.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-160x107.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-640x836.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/hombre-enfadado-celular-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 7281;
  //                 name: "Mente sana";
  //                 slug: "mente-sana";
  //                 description: "En esta sección encontrarás los mejores consejos para promover tu crecimiento personal, tu autoconocimiento, mejorar tu autoestima y alcanzar tu máximo potencial en la vida. Te explicamos además cómo disfrutar de tus relaciones con los demás y a comprender un poco mejor los misterios de eso que al fin y al cabo, nos hace humanos: la mente.";
  //                 link: "https://beta.mejorconsalud.com/bienestar/mente-sana/";
  //                 permalink: "/bienestar/mente-sana/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-22T10:00:29+02:00";
  //             modified: "2023-01-02T14:15:13+01:00";
  //           },
  //           {
  //             id: 686887;
  //             slug: "vida-es-fragil-toma-tiempo-vivirla-actual";
  //             link: "https://beta.mejorconsalud.com/vida-es-fragil-toma-tiempo-vivirla-actual/";
  //             permalink: "/vida-es-fragil-toma-tiempo-vivirla-actual/";
  //             title: "(Test #198 - 01/02) - La vida es frágil, toma tu tiempo para vivirla";
  //             headline: "El tiempo suele escaparse de nuestras manos sin darnos cuenta. No esperes a que sea demasiado tarde para empezar a aprovecharlo.";
  //             excerpt: "El tiempo es uno de los grandes tesoros de la vida; no por casualidad nos referimos a él diciendo que&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-378x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-768x512.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-500x333.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-470x313.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-370x247.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-280x187.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-160x107.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-640x836.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/mano-apaga-reloj-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 7274;
  //                 name: "#1 Bienestar";
  //                 slug: "bienestar";
  //                 description: "En nuestro día a día podemos llevar a cabo múltiples estrategias con las que contribuir al máximo a nuestro bienestar y la calidad de vida. Desde técnicas de relajación, gestión emocional, ejercicios para cuidar de nuestras articulaciones o perder peso...Descubre todo ese amplio abanico de estrategias con las que sentirte bien por dentro y por fuera.";
  //                 link: "https://beta.mejorconsalud.com/bienestar/";
  //                 permalink: "/bienestar/";
  //               },
  //               {
  //                 id: 7281;
  //                 name: "Mente sana";
  //                 slug: "mente-sana";
  //                 description: "En esta sección encontrarás los mejores consejos para promover tu crecimiento personal, tu autoconocimiento, mejorar tu autoestima y alcanzar tu máximo potencial en la vida. Te explicamos además cómo disfrutar de tus relaciones con los demás y a comprender un poco mejor los misterios de eso que al fin y al cabo, nos hace humanos: la mente.";
  //                 link: "https://beta.mejorconsalud.com/bienestar/mente-sana/";
  //                 permalink: "/bienestar/mente-sana/";
  //               }
  //             ];
  //             sponsor: {
  //               brand: "Unycos";
  //               logo: "https://beta.mejorconsalud.com/wp-content/uploads/2021/11/Logo.png";
  //               type: "Contenido patrocinado";
  //               style: "logo";
  //               background: "#91a7d3";
  //               color: "#f1f1f1";
  //             };
  //             theme: "base-deploy";
  //             published: "2022-04-21T18:00:41+02:00";
  //             modified: "2023-02-24T17:11:15+01:00";
  //           },
  //           {
  //             id: 687137;
  //             slug: "utilizar-estragon-cocina-v2";
  //             link: "https://beta.mejorconsalud.com/utilizar-estragon-cocina-v2/";
  //             permalink: "/utilizar-estragon-cocina-v2/";
  //             title: "(Test #2 - 12/29) - ¿Cómo utilizar el estragón en la cocina?";
  //             headline: "Te vamos a mostrar las principales aplicaciones y los beneficios del estragón en la cocina. Se trata de una especia realmente frecuente en las zonas del este europeo.";
  //             excerpt: "El estragón es una especia culinaria que cuenta con varios beneficios para la salud y que presenta diferentes tipos de&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-378x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-768x512.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-500x333.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-470x313.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-370x247.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-280x187.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-160x107.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-640x836.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/estragon-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 7285;
  //                 name: "#2 Nutrición";
  //                 slug: "nutricion";
  //                 description: "¿Te nutres de forma adecuada? En ocasiones determinadas dietas nos sumen en estados carenciales, lo cual se traduce en malestar, cansancio o en diversos trastornos. En esta sección te enseñaremos qué alimentos son los más nutritivos, qué dietas y hábitos debes seguir para cubrir todas tus necesidades.";
  //                 link: "https://beta.mejorconsalud.com/dieta/nutricion/";
  //                 permalink: "/dieta/nutricion/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-20T12:00:14+02:00";
  //             modified: "2022-12-29T20:17:22+01:00";
  //           },
  //           {
  //             id: 688159;
  //             slug: "mitos-verdades-sobre-salud-cardiaca-review";
  //             link: "https://beta.mejorconsalud.com/mitos-verdades-sobre-salud-cardiaca-review/";
  //             permalink: "/mitos-verdades-sobre-salud-cardiaca-review/";
  //             title: "#5 - Mitos y verdades sobre la salud cardíaca que tienes que saber";
  //             headline: "Conocer y aclarar cuáles son los mitos y verdades más comunes sobre la salud cardíaca es el primer paso para proteger el corazón. ¡Aprende más!";
  //             excerpt: "Las enfermedades cardiovasculares representan una de las principales causas de incapacidad y muerte en todo el mundo. Sin embargo, las&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-390x213.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-768x420.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-500x273.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-470x257.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-370x202.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-280x153.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-160x87.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-640x757.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/04/dedo-senala-corazon-150x82.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 5475;
  //                 name: "Enfermedades";
  //                 slug: "enfermedades";
  //                 description: "En esta sección encontrarás una amplia información sobre las principales enfermedades que puede sufrir el ser humano. Patologías, trastornos, afecciones del sistema respiratorio, circulatorio o de la salud de la mujer… Cada dolencia presenta una serie de sintomatologías que es necesario conocer, así como las últimas noticias sobre los mejores tratamientos e investigaciones asociadas, siempre a tu disposición.";
  //                 link: "https://beta.mejorconsalud.com/salud/enfermedades/";
  //                 permalink: "/salud/enfermedades/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-20T10:00:17+02:00";
  //             modified: "2022-12-28T01:17:15+01:00";
  //           },
  //           {
  //             id: 686410;
  //             slug: "paradoja-dano-alcohol";
  //             link: "https://beta.mejorconsalud.com/paradoja-dano-alcohol/";
  //             permalink: "/paradoja-dano-alcohol/";
  //             title: "#6 - Paradoja del daño del alcohol: ¿qué es y por qué ocurre?";
  //             headline: "La paradoja del daño del alcohol habla, sobre todo, de desigualdades socioeconómicas. De todos modos, se requiere de más datos e investigación para comprender este fenómeno.";
  //             excerpt: "La paradoja del daño del alcohol es un fenómeno social asociado a un hecho contradictorio. Se ha detectado que el&hellip;";
  //             featured_media: {
  //               thumbnail: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-150x150.jpg";
  //               medium: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-379x252.jpg";
  //               medium_large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-768x511.jpg";
  //               large: "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-500x332.jpg";
  //               "1536x1536": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso.jpg";
  //               "2048x2048": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso.jpg";
  //               "big-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-470x312.jpg";
  //               "big-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-370x246.jpg";
  //               "mid-size": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-280x186.jpg";
  //               "mid-size_mobile": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-160x106.jpg";
  //               "web-stories-poster-portrait": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-640x835.jpg";
  //               "web-stories-publisher-logo": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-96x96.jpg";
  //               "web-stories-thumbnail": "https://beta.mejorconsalud.com/wp-content/uploads/2022/03/alcoholico-tirado-piso-150x100.jpg";
  //             };
  //             categories: [
  //               {
  //                 id: 5475;
  //                 name: "Enfermedades";
  //                 slug: "enfermedades";
  //                 description: "En esta sección encontrarás una amplia información sobre las principales enfermedades que puede sufrir el ser humano. Patologías, trastornos, afecciones del sistema respiratorio, circulatorio o de la salud de la mujer… Cada dolencia presenta una serie de sintomatologías que es necesario conocer, así como las últimas noticias sobre los mejores tratamientos e investigaciones asociadas, siempre a tu disposición.";
  //                 link: "https://beta.mejorconsalud.com/salud/enfermedades/";
  //                 permalink: "/salud/enfermedades/";
  //               }
  //             ];
  //             sponsor: null;
  //             theme: "base-deploy";
  //             published: "2022-04-19T18:00:37+02:00";
  //             modified: "2022-12-28T02:24:19+01:00";
  //           }
  //         ];
  //       }
  //     ];
  //   };
  // };
  // parent: null;
  // hreflang: null;
}
