export type L = { en: string; pt: string };
const l = (en: string, pt: string): L => ({ en, pt });

export const SITE = {
  name: "Mogdad Alrawi Plastic Surgery",
  tel: "07380 741080",
  telHref: "tel:+447380741080",
  email: "info@alrawiplasticsurgery.com",
  linkedin: "https://www.linkedin.com/in/mogdad-alrawi-9ab75687/",
  reviews: "https://www.realself.com/dr/mogdad-alrawi-sheriff-hill-gateshead-united-kingdom",
};

export const UI = {
  skip: l("Skip to Content", "Saltar para o conteúdo"),
  home: l("Home", "Início"),
  services: l("Services", "Serviços"),
  about: l("About", "Sobre"),
  contact: l("Contact", "Contacto"),
  book: l("Book now", "Marcar agora"),
  learn: l("Learn more", "Saber mais"),
  viewServices: l("View services", "Ver serviços"),
  moreReviews: l("For More Reviews", "Mais avaliações"),
  built: l("built by dglxss", "feito por dglxss"),
  notAffiliated: l("Independent design study. Not affiliated with or endorsed by Mogdad Alrawi Plastic Surgery.", "Estudo de design independente. Sem afiliação nem aprovação de Mogdad Alrawi Plastic Surgery."),
  followUs: l("Follow us", "Siga-nos"),
  explore: l("Explore", "Explorar"),
  aboutUs: l("About us", "Sobre nós"),
  menu: l("Menu", "Menu"),
  close: l("Close", "Fechar"),
  background: l("Background", "Percurso"),
  voice: l("Patient voice", "A voz dos pacientes"),
  where: l("Where he operates", "Onde opera"),
  consult: l("Free Telephone or Video Consultation", "Consulta gratuita por telefone ou vídeo"),
  label: l("Consultant Plastic, Reconstructive & Cosmetic Surgeon", "Cirurgião Consultor Plástico, Reconstrutivo e Estético"),
  labelSub: l("Newcastle upon Tyne · Consultant since November 2012", "Newcastle upon Tyne · Consultor desde novembro de 2012"),
  skipIntro: l("Skip", "Saltar"),
};

export const HOME = {
  title: "Mogdad Alrawi Plastic Surgery",
  description: "Mogdad Alrawi Plastic Surgery provides an extensive array of Plastic, Reconstructive, and Cosmetic Surgery options in Newcastle Upon Tyne, England. Our services are available at prestigious locations such as the Royal Victoria Infirmary, Ramsay Health at the Cobalt Hospital, and TSS-Independent House.",
  h1: l("Welcome to Mogdad Alrawi Plastic Surgery", "Bem-vindo a Mogdad Alrawi Plastic Surgery"),
  ourServices: l("Our Services", "Os nossos serviços"),
  discover: l("Discover the excellence in our clinic", "Descubra a excelência da nossa clínica"),
  discoverP: l("Unveil the artistry, precision, and innovation that define our practice. Embrace the journey towards enhancing your beauty and confidence through our specialized services.", "Conheça a arte, a precisão e a inovação que definem a nossa prática. Abrace o percurso para realçar a sua beleza e a sua confiança através dos nossos serviços especializados."),
  explore: l("Explore the world of transformations", "Explore o mundo das transformações"),
  exploreP: l("Welcome to our premier destination for enhancing your natural beauty journey. We strive to make the scheduling process seamless and stress-free, ensuring your experience is as smooth as your results.", "Bem-vindo ao nosso destino de referência para realçar a sua beleza natural. Procuramos que a marcação seja simples e sem stress, para que a sua experiência seja tão suave quanto os seus resultados."),
  contactH: l("Contact Our Expert Surgeon", "Contacte o nosso cirurgião especialista"),
  contactP: l("Are you considering Plastic, Reconstructive, or Cosmetic Surgery in Newcastle? Our skilled team offers diverse services at locations such as the Royal Victoria Infirmary, Ramsay Health at the Cobalt Hospital, and TSS-Independent House. Fill out the form below to kickstart your transformation journey with us!", "Está a considerar cirurgia plástica, reconstrutiva ou estética em Newcastle? A nossa equipa qualificada oferece diversos serviços em locais como o Royal Victoria Infirmary, a Ramsay Health no Cobalt Hospital e a TSS-Independent House. Preencha o formulário abaixo para iniciar connosco o seu percurso de transformação!"),
};

export const LOCATIONS = [
  { name: "Royal Victoria Infirmary", sub: "Newcastle upon Tyne Hospitals NHS FT", href: "https://www.newcastle-hospitals.nhs.uk/consultants/mr-mogdad-alrawi/" },
  { name: "Cobalt Hospital", sub: "Ramsay Health", href: "https://www.ramsayhealth.co.uk/specialists?freeText=Mr+Mogdad++Alrawi&term=&address=NE16+5LW&latitude=&longitude=" },
  { name: "TSS Independent House", sub: "Tyneside Surgical Services", href: "https://tynesidesurgicalservices.co.uk/our-consultants/mogdad-alrawi/" },
];

export const SERVICES_PAGE = {
  kicker: l("Discover the expertise of", "Descubra a experiência de"),
  p: l("Experience the transformation you've always dreamed of. Whether it's cosmetic enhancements or reconstructive procedures, trust us to bring out the best version of you. Your journey to confidence starts here.", "Viva a transformação com que sempre sonhou. Seja um aperfeiçoamento estético ou um procedimento reconstrutivo, confie em nós para revelar a melhor versão de si. O seu percurso para a confiança começa aqui."),
  choose: l("Choose excellence. Choose Mogdad Alrawi Plastic Surgery.", "Escolha a excelência. Escolha Mogdad Alrawi Plastic Surgery."),
  bookH: l("Book your Consultation with us", "Marque connosco a sua consulta"),
};

export type Group = { id: string; name: L; items: L[] };
export const SERVICES: Group[] = [
  { id: "breast", name: l("Breast", "Mama"), items: [l("Breast Augmentation", "Aumento mamário"), l("Breast Implant Removal", "Remoção de implantes mamários"), l("Breast Implant Revision", "Revisão de implantes mamários"), l("Breast Uplift", "Mastopexia (elevação mamária)"), l("Breast Reduction", "Redução mamária"), l("Male Gynecomastia", "Ginecomastia masculina")] },
  { id: "body", name: l("Body", "Corpo"), items: [l("Body contouring surgery (Including abdominoplasty, liposuction, thigh reduction, arm reduction)", "Cirurgia de contorno corporal (incluindo abdominoplastia, lipoaspiração, redução de coxas, redução de braços)"), l("Weight loss surgery", "Cirurgia após perda de peso"), l("Scrotal reduction/lift", "Redução/elevação escrotal")] },
  { id: "facial", name: l("Facial", "Face"), items: [l("Rhinoplasty", "Rinoplastia"), l("Prominent Ear Correction", "Correção de orelhas proeminentes"), l("Ear Reconstructive Surgery", "Cirurgia reconstrutiva da orelha"), l("Eyelid rejuvenation surgery (including upper and lower blepharoplasty)", "Cirurgia de rejuvenescimento das pálpebras (incluindo blefaroplastia superior e inferior)"), l("Direct and Temporal brow lift", "Elevação direta e temporal da sobrancelha"), l("Face and neck Lift", "Lifting facial e cervical")] },
  { id: "skin", name: l("Skin", "Pele"), items: [l("Skin cancer", "Cancro de pele"), l("Benign skin lesions (moles, lipoma, cysts, etc)", "Lesões cutâneas benignas (sinais, lipomas, quistos, etc.)")] },
  { id: "reconstructive", name: l("Reconstructive Surgery", "Cirurgia reconstrutiva"), items: [l("Eyelid", "Pálpebra"), l("Ears", "Orelhas"), l("Nose", "Nariz"), l("Abdominal", "Abdominal"), l("Genital", "Genital")] },
];

export const ABOUT = {
  h1: l("About Mogdad Alrawi Plastic Surgery", "Sobre Mogdad Alrawi Plastic Surgery"),
  p1: l("Explore our range of Plastic, Reconstructive & Cosmetic Surgery services offered in Newcastle Upon Tyne and Gateshead at premier locations such as the Royal Victoria Infirmary, Ramsay Health at the Cobalt Hospital, and TSS-Independent House. Let us guide you on a transformative journey towards a more confident and empowered you.", "Explore a nossa gama de serviços de cirurgia plástica, reconstrutiva e estética em Newcastle Upon Tyne e Gateshead, em locais de referência como o Royal Victoria Infirmary, a Ramsay Health no Cobalt Hospital e a TSS-Independent House. Deixe-nos guiá-lo num percurso transformador rumo a uma versão de si mais confiante e capacitada."),
  p2: l("Our team is dedicated to providing exceptional care and results, ensuring you feel supported and informed every step of the way. Your unique story is what drives us to create personalized treatment plans that cater to your individual needs and goals.", "A nossa equipa dedica-se a prestar cuidados e resultados excecionais, para que se sinta apoiado e informado em cada etapa. A sua história única é o que nos leva a criar planos de tratamento personalizados, à medida das suas necessidades e objetivos."),
  hospitalLinks: l("Hospital Links:", "Ligações hospitalares:"),
  additional: l("Additional Link:", "Ligações adicionais:"),
  aboutDr: l("About Dr. Mogdad Alrawi:", "Sobre o Dr. Mogdad Alrawi:"),
  nhsH: l("NHS Practice:", "Prática no NHS:"),
  nhs: l("Mogdad Alrawi has been a Consultant Plastic Surgeon at Newcastle upon Tyne Hospitals Foundation NHS Trust since November 2012. Based at the Royal Victoria Infirmary, he specializes in skin cancer and lymph node surgery, hidradenitis suppurativa, facial defect reconstruction, abdominal hernia, perineal defect repair, and genital skin reconstructive surgery", "Mogdad Alrawi é Cirurgião Plástico Consultor no Newcastle upon Tyne Hospitals Foundation NHS Trust desde novembro de 2012. Sediado no Royal Victoria Infirmary, é especialista em cirurgia do cancro de pele e dos gânglios linfáticos, hidradenite supurativa, reconstrução de defeitos faciais, hérnia abdominal, reparação de defeitos perineais e cirurgia reconstrutiva da pele genital"),
  cosH: l("Cosmetic Surgery Practice:", "Prática de cirurgia estética:"),
  cos: l("Mr. Alrawi’s independent practice is primarily at the Cobalt Hospital Ramsay Health Care Centre in Silverlink, the Peter Smith Surgery Centre at Queen Elizabeth Hospital (Tyne Surgical Services), and the Private Lodge at the Royal Victoria Infirmary. He excels in facial cosmetic and reconstructive surgery, including eyelid rejuvenation, brow lifts, facelifts, prominent ear corrections, and Rhinoplasty. His expertise extends to breast surgeries like Breast implant augmentation, Breast reduction, Breast up-lifts, inverted nipple correction, and gynaecomastia correction. Additionally, he is skilled in body contouring procedures such as liposuction, tummy tucks (Abdominoplasty), thigh lifts/reduction, Aesthetic Genital Surgery and arm reductions.", "A prática independente do Sr. Alrawi decorre sobretudo no Cobalt Hospital Ramsay Health Care Centre, em Silverlink, no Peter Smith Surgery Centre do Queen Elizabeth Hospital (Tyne Surgical Services) e no Private Lodge do Royal Victoria Infirmary. Destaca-se na cirurgia estética e reconstrutiva facial, incluindo rejuvenescimento das pálpebras, elevação da sobrancelha, liftings faciais, correção de orelhas proeminentes e rinoplastia. A sua experiência estende-se à cirurgia mamária, como aumento com implantes, redução mamária, mastopexia, correção do mamilo invertido e correção de ginecomastia. É ainda especialista em procedimentos de contorno corporal como lipoaspiração, abdominoplastia, lifting/redução de coxas, cirurgia genital estética e redução de braços."),
  trainH: l("Training in Plastic Surgery:", "Formação em cirurgia plástica:"),
  train: l("Mr. Alrawi completed his extensive plastic surgery training in the North East of England through a British national program sponsored by the Northern Deanery, earning his Certificate of Completion of Training (CCT) in November 2012. His training included rotations at Newcastle Upon Tyne Hospitals NHS Foundation Trust, University Hospital of North Durham, and James Cook University Hospital. In 2009, he also completed a fellowship in cosmetic reconstructive surgery at Sheffield’s NHS and independent practice hospitals.", "O Sr. Alrawi concluiu a sua extensa formação em cirurgia plástica no Nordeste de Inglaterra, num programa nacional britânico patrocinado pela Northern Deanery, obtendo o Certificate of Completion of Training (CCT) em novembro de 2012. A formação incluiu estágios no Newcastle Upon Tyne Hospitals NHS Foundation Trust, no University Hospital of North Durham e no James Cook University Hospital. Em 2009 concluiu ainda um fellowship em cirurgia estética reconstrutiva nos hospitais do NHS e de prática independente de Sheffield."),
  qualH: l("Qualifications:", "Qualificações:"),
  qual: "MBChB, FRCSI, MSc, EBOPRAS, FRCS(Plast)",
  memH: l("Professional Memberships:", "Filiações profissionais:"),
  mem: [
    l("Full registration with General Medical Council since 2003 (6063454)", "Registo pleno no General Medical Council desde 2003 (6063454)"),
    l("GMC specialist Register as Plastic Surgeon since January 2013.", "Registo de especialista do GMC como Cirurgião Plástico desde janeiro de 2013."),
    l("Fellow of the Royal College of Surgeons in Ireland since July 1999", "Fellow do Royal College of Surgeons in Ireland desde julho de 1999"),
    l("Fellow of the European Board of Plastic, Reconstructive and Aesthetic Surgery November 2011.", "Fellow do European Board of Plastic, Reconstructive and Aesthetic Surgery, novembro de 2011."),
    l("Awarded CCT (certificate of completion of higher surgical training in plastic surgery) November 2012", "CCT (certificado de conclusão da formação cirúrgica avançada em cirurgia plástica), novembro de 2012"),
    l("Awarded (FRCS Plast) the Intercollegiate Board in Plastic and Reconstructive and Aesthetic Surgery December 2012.", "FRCS (Plast) pelo Intercollegiate Board in Plastic and Reconstructive and Aesthetic Surgery, dezembro de 2012."),
    l("Full member of the British Association of Plastic Reconstructive and Aesthetic Surgery 2013 (BAPRAS)", "Membro efetivo da British Association of Plastic Reconstructive and Aesthetic Surgery, 2013 (BAPRAS)"),
    l("Full Member of the British Association Aesthetic Plastic Surgery 2022", "Membro efetivo da British Association of Aesthetic Plastic Surgeons, 2022"),
    l("Member of the Melanoma Focus group", "Membro do grupo Melanoma Focus"),
  ],
  clients: l("Our satisfied clients", "Os nossos clientes satisfeitos"),
  closer1: l("Transform your beauty,", "Transforme a sua beleza,"),
  closer2: l("Enhance your confidence.", "Realce a sua confiança."),
};

export const HOSPITAL_LINKS = [
  { name: "Tyneside Surgical Services (TSS)", href: LOCATIONS[2].href },
  { name: "Ramsay Health", href: LOCATIONS[1].href },
  { name: "Royal Victoria Infirmary", href: LOCATIONS[0].href },
];
export const ADDITIONAL_LINKS = [
  { name: "British Association of Aesthetic Plastic Surgery (BAAPS)", href: "https://baaps.org.uk/patients/surgeons/b1825dce-7261-4a3e-b8eb-7b6d2890652c" },
  { name: "BAPRAS (Patient Information)", href: "https://www.bapras.org.uk/public/patient-information" },
  { name: "Private Patient Information Network Profile", href: "https://www.phin.org.uk/profiles/consultants/mogdad-foad-alrawi-209260?" },
  { name: "GMC Specialist Register", href: "https://www.gmc-uk.org/doctors/6063454" },
  { name: "Top Doctors", href: "https://www.topdoctors.co.uk/doctor/mogdad-alrawi" },
];

/** Dated facts, every one from the client's About page (Motionsites "Background" timeline, remapped). */
export const TIMELINE = [
  { y: "1999", t: l("Fellow, Royal College of Surgeons in Ireland", "Fellow, Royal College of Surgeons in Ireland") },
  { y: "2003", t: l("Full GMC registration · 6063454", "Registo pleno no GMC · 6063454") },
  { y: "2009", t: l("Fellowship, cosmetic reconstructive surgery · Sheffield", "Fellowship, cirurgia estética reconstrutiva · Sheffield") },
  { y: "2012", t: l("CCT · Consultant Plastic Surgeon, RVI", "CCT · Cirurgião Plástico Consultor, RVI") },
  { y: "2013", t: l("GMC Specialist Register · BAPRAS", "Registo de especialista GMC · BAPRAS") },
  { y: "2022", t: l("Full Member, BAAPS", "Membro efetivo, BAAPS") },
];

export const REVIEWS = [
  { q: l("Mr Mogdad is just amazing! Had no pain & scarring is brilliant", "O Sr. Mogdad é simplesmente fantástico! Não tive dor e a cicatriz está ótima"), p: l("Breast Reduction", "Redução mamária") },
  { q: l("I couldn’t be happier with the outcome of my breast augmentation", "Não podia estar mais feliz com o resultado do meu aumento mamário"), p: l("Breast Augmentation", "Aumento mamário") },
  { q: l("Experienced and Skilled Surgeon Who I Highly Recommend.", "Cirurgião experiente e competente, que recomendo vivamente."), p: l("Breast Implant", "Implante mamário") },
  { q: l("Ear surgery changed my life! Results speak for themselves & aftercare was 10/10", "A cirurgia às orelhas mudou a minha vida! Os resultados falam por si e o acompanhamento foi 10/10"), p: l("Ear Surgery", "Cirurgia das orelhas") },
  { q: l("Fantastic results - couldn’t be happier with the way they look", "Resultados fantásticos — não podia estar mais feliz com o aspeto"), p: l("Breast Implant Removal", "Remoção de implantes mamários") },
  { q: l("Dr. Alrawi has changed my life completely", "O Dr. Alrawi mudou completamente a minha vida"), p: l("Rhinoplasty", "Rinoplastia") },
];

export const CONTACT = {
  h1: l("Contact Us", "Contacte-nos"),
  p: l("Discover the transformation possibilities and exceptional care available at Mogdad Alrawi Plastic Surgery. Reach out to learn more and book your journey towards confidence and beauty today.", "Descubra as possibilidades de transformação e os cuidados excecionais de Mogdad Alrawi Plastic Surgery. Contacte-nos para saber mais e marque hoje o seu percurso rumo à confiança e à beleza."),
  first: l("First Name", "Nome"), last: l("Last Name", "Apelido"), email: l("Email", "Email"), msg: l("Message", "Mensagem"), send: l("Send", "Enviar"),
  demo: l("Design study: this form is not connected, so nothing is sent. Please call or email the clinic directly.", "Estudo de design: este formulário não está ligado, por isso nada é enviado. Contacte a clínica por telefone ou email."),
};

export const APPT = {
  h1a: l("Request a", "Pedir uma"), h1b: l("Consultation", "consulta"),
  freeH: l("Free Telephone or Video Consultation", "Consulta gratuita por telefone ou vídeo"),
  free: [l("Thursday: 17:30 - 20:00", "Quinta-feira: 17:30 - 20:00"), l("Friday: 17:30 - 20:00", "Sexta-feira: 17:30 - 20:00")],
  f2fH: l("30 minute Face to Face consultation", "Consulta presencial de 30 minutos"),
  f2fAt: ["Cobalt Hospital Ramsay Health", "Royal Victoria Infirmary", "Tyne Surgical Services - Independent House"],
  f2f: [l("Monday: TBC via Phone call or Email", "Segunda-feira: a confirmar por telefone ou email"), l("Tuesday: TBC via Phone call or Email", "Terça-feira: a confirmar por telefone ou email"), l("Wednesday: TBC via Phone call or Email", "Quarta-feira: a confirmar por telefone ou email")],
  telephone: l("Telephone", "Telefone"),
};
