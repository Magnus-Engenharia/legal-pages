import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const updated = { pt: "21 de maio de 2026", en: "May 21, 2026", es: "21 de mayo de 2026" };

const locales = {
  pt: {
    htmlLang: "pt-BR",
    label: "Português",
    legalPath: "/legal/",
    appPath: "/legal/recibo-facil",
    brandSubtitle: "Estúdio de software",
    docsLabel: "Documentos",
    footer: "Todos os direitos reservados.",
    updatedLabel: "Atualizada em:",
    updatedTermsLabel: "Atualizados em:",
    languageLabel: "Idioma",
    nav: { apps: "Apps", approach: "Como trabalhamos", legal: "Legal", contact: "Contato" },
  },
  en: {
    htmlLang: "en",
    label: "English",
    legalPath: "/legal/en/",
    appPath: "/legal/en/recibo-facil",
    brandSubtitle: "Software studio",
    docsLabel: "Documents",
    footer: "All rights reserved.",
    updatedLabel: "Updated on:",
    updatedTermsLabel: "Updated on:",
    languageLabel: "Language",
    nav: { apps: "Apps", approach: "Approach", legal: "Legal", contact: "Contact" },
  },
  es: {
    htmlLang: "es",
    label: "Español",
    legalPath: "/legal/es/",
    appPath: "/legal/es/recibo-facil",
    brandSubtitle: "Estudio de software",
    docsLabel: "Documentos",
    footer: "Todos los derechos reservados.",
    updatedLabel: "Actualizada el:",
    updatedTermsLabel: "Actualizados el:",
    languageLabel: "Idioma",
    nav: { apps: "Apps", approach: "Cómo trabajamos", legal: "Legal", contact: "Contacto" },
  },
};

const docLabels = {
  privacy: { pt: "Política de Privacidade", en: "Privacy Policy", es: "Política de Privacidad" },
  terms: { pt: "Termos de Serviço", en: "Terms of Service", es: "Términos del Servicio" },
  support: { pt: "Suporte", en: "Support", es: "Soporte" },
  "delete-account": { pt: "Exclusão de conta", en: "Account deletion", es: "Eliminación de cuenta" },
};

const docDescriptions = {
  privacy: {
    pt: "Política de Privacidade do aplicativo Recibo Fácil MEI.",
    en: "Privacy Policy for the Recibo Fácil MEI app.",
    es: "Política de Privacidad de la aplicación Recibo Fácil MEI.",
  },
  terms: {
    pt: "Termos de Serviço do aplicativo Recibo Fácil MEI.",
    en: "Terms of Service for the Recibo Fácil MEI app.",
    es: "Términos del Servicio de la aplicación Recibo Fácil MEI.",
  },
  support: {
    pt: "Suporte do aplicativo Recibo Fácil MEI.",
    en: "Support for the Recibo Fácil MEI app.",
    es: "Soporte de la aplicación Recibo Fácil MEI.",
  },
  "delete-account": {
    pt: "Instruções para excluir a conta no aplicativo Recibo Fácil MEI.",
    en: "Instructions to delete an account in the Recibo Fácil MEI app.",
    es: "Instrucciones para eliminar una cuenta en la aplicación Recibo Fácil MEI.",
  },
};

const legalHub = {
  pt: {
    title: "Central legal",
    description: "Documentos legais e suporte dos aplicativos da Magnus Engineering.",
    lead: "Documentos públicos para políticas, termos, suporte e solicitações de privacidade.",
    appDescription: "Política de privacidade, termos de serviço, suporte e instruções de exclusão de conta.",
  },
  en: {
    title: "Legal center",
    description: "Legal documents and support for Magnus Engineering apps.",
    lead: "Public documents for policies, terms, support, and privacy requests.",
    appDescription: "Privacy policy, terms of service, support, and account deletion instructions.",
  },
  es: {
    title: "Centro legal",
    description: "Documentos legales y soporte de las aplicaciones de Magnus Engineering.",
    lead: "Documentos públicos para políticas, términos, soporte y solicitudes de privacidad.",
    appDescription: "Política de privacidad, términos del servicio, soporte e instrucciones para eliminar la cuenta.",
  },
};

const docs = {
  privacy: {
    pt: `
      <p class="lead">Esta Política de Privacidade explica como o Recibo Fácil MEI coleta, usa, armazena e compartilha dados ao oferecer criação, armazenamento e compartilhamento de recibos de pagamento.</p>
      ${stamp("pt", "privacy")}
      <h2>Controlador e contato</h2>
      <p>Recibo Fácil MEI é o aplicativo descrito nesta política. Para dúvidas, solicitações de privacidade, exclusão de conta ou suporte, entre em contato por:</p>
      <ul>
        <li>E-mail de suporte: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></li>
        <li>E-mail de privacidade: <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a></li>
        <li>Página de suporte: <a href="/legal/recibo-facil/support/">https://magnusengineering.tech/legal/recibo-facil/support/</a></li>
      </ul>
      <h2>Dados coletados</h2>
      <p>Podemos coletar:</p>
      <ul>
        <li>Dados de conta: e-mail, identificador de usuário e nome informado no cadastro.</li>
        <li>Dados do emissor: nome ou razão social, CPF/CNPJ, telefone, e-mail, endereço, cidade, estado, chave PIX, logo e assinatura.</li>
        <li>Dados de clientes e serviços cadastrados: nome, documento, telefone, e-mail, endereço, observações, descrições e valores.</li>
        <li>Dados de recibos: valor, descrição, forma de pagamento, data, cidade, estado, assinatura, PDFs, status, numeração e histórico.</li>
        <li>Dados de assinatura Pro: produto comprado, status, período, loja de origem e identificadores necessários para validação.</li>
        <li>Dados técnicos e diagnósticos: dispositivo, sistema operacional, eventos de uso, erros, performance e identificadores técnicos necessários para analytics, segurança e prevenção de abuso.</li>
      </ul>
      <h2>Finalidades</h2>
      <p>Usamos dados para autenticar usuários, criar e armazenar recibos, gerar PDFs, sincronizar dados na nuvem, aplicar limites do plano grátis, liberar recursos Pro, restaurar compras, proteger o app, depurar falhas, melhorar o produto, prestar suporte e cumprir obrigações legais.</p>
      <h2>Compartilhamento e operadores</h2>
      <p>Não vendemos dados pessoais. Compartilhamos dados somente quando necessário com Supabase, Apple App Store, Google Play, PostHog e provedores de e-mail, hospedagem ou suporte necessários para atendimento e operação.</p>
      <h2>Segurança</h2>
      <p>Usamos transmissão por HTTPS, autenticação, políticas de acesso por usuário no banco, buckets privados para arquivos e URLs assinadas para acesso temporário a PDFs. Nenhum método é infalível, mas adotamos medidas proporcionais ao tipo de dado tratado.</p>
      <h2>Retenção e exclusão</h2>
      <p>Mantemos dados enquanto a conta estiver ativa ou enquanto forem necessários para funcionamento, obrigações legais, suporte, auditoria, prevenção de fraude e resolução de disputas. O usuário pode iniciar a exclusão da conta dentro do app em Perfil &gt; Conta, compras e documentos &gt; Excluir conta. Também é possível solicitar exclusão pelos contatos acima.</p>
      <h2>Direitos do usuário</h2>
      <p>O usuário pode solicitar acesso, correção, portabilidade, informações sobre compartilhamento, revogação de consentimento quando aplicável e exclusão de dados. Responderemos conforme a legislação aplicável, incluindo a LGPD.</p>
      <h2>Crianças</h2>
      <p>O app não é direcionado a crianças. Menores de idade só devem usar o app com autorização de responsável legal.</p>
      <h2>Alterações</h2>
      <p>Podemos atualizar esta política. Quando houver mudanças relevantes, a data de atualização será alterada e poderemos avisar no app ou por outros meios apropriados.</p>
    `,
    en: `
      <p class="lead">This Privacy Policy explains how Recibo Fácil MEI collects, uses, stores, and shares data while providing receipt creation, storage, and sharing features.</p>
      ${stamp("en", "privacy")}
      <h2>Controller and contact</h2>
      <p>Recibo Fácil MEI is the app described in this policy. For privacy requests, account deletion, questions, or support, contact us at:</p>
      <ul>
        <li>Support email: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></li>
        <li>Privacy email: <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a></li>
        <li>Support page: <a href="/legal/en/recibo-facil/support/">https://magnusengineering.tech/legal/en/recibo-facil/support/</a></li>
      </ul>
      <h2>Data we collect</h2>
      <p>We may collect:</p>
      <ul>
        <li>Account data: email, user identifier, and name provided during registration.</li>
        <li>Issuer data: name or legal name, CPF/CNPJ, phone, email, address, city, state, PIX key, logo, and signature.</li>
        <li>Customer and service data: name, document number, phone, email, address, notes, descriptions, and amounts.</li>
        <li>Receipt data: amount, description, payment method, date, city, state, signature, PDFs, status, numbering, and history.</li>
        <li>Pro subscription data: purchased product, status, period, store source, and identifiers needed for validation.</li>
        <li>Technical and diagnostic data: device, operating system, usage events, errors, performance, and technical identifiers needed for analytics, security, and abuse prevention.</li>
      </ul>
      <h2>Purposes</h2>
      <p>We use data to authenticate users, create and store receipts, generate PDFs, sync cloud data, apply free plan limits, unlock Pro features, restore purchases, protect the app, debug failures, improve the product, provide support, and comply with legal obligations.</p>
      <h2>Sharing and processors</h2>
      <p>We do not sell personal data. We share data only when necessary with Supabase, Apple App Store, Google Play, PostHog, and email, hosting, or support providers needed for service operation and support.</p>
      <h2>Security</h2>
      <p>We use HTTPS transmission, authentication, per-user database access policies, private storage buckets, and signed URLs for temporary access to PDFs. No method is infallible, but we use measures proportional to the type of data processed.</p>
      <h2>Retention and deletion</h2>
      <p>We keep data while the account is active or while it is needed for operation, legal obligations, support, audit, fraud prevention, and dispute resolution. Users can start account deletion in the app under Profile &gt; Account, purchases and documents &gt; Delete account. Deletion can also be requested through the contacts above.</p>
      <h2>User rights</h2>
      <p>Users may request access, correction, portability, information about sharing, withdrawal of consent where applicable, and deletion of data. We respond according to applicable law, including Brazil's LGPD when applicable.</p>
      <h2>Children</h2>
      <p>The app is not directed to children. Minors should use the app only with permission from a legal guardian.</p>
      <h2>Changes</h2>
      <p>We may update this policy. When relevant changes occur, the update date will change and we may notify users in the app or by other appropriate means.</p>
    `,
    es: `
      <p class="lead">Esta Política de Privacidad explica cómo Recibo Fácil MEI recopila, utiliza, almacena y comparte datos al ofrecer funciones para crear, guardar y compartir recibos de pago.</p>
      ${stamp("es", "privacy")}
      <h2>Responsable y contacto</h2>
      <p>Recibo Fácil MEI es la aplicación descrita en esta política. Para solicitudes de privacidad, eliminación de cuenta, preguntas o soporte, contáctanos en:</p>
      <ul>
        <li>Correo de soporte: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></li>
        <li>Correo de privacidad: <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a></li>
        <li>Página de soporte: <a href="/legal/es/recibo-facil/support/">https://magnusengineering.tech/legal/es/recibo-facil/support/</a></li>
      </ul>
      <h2>Datos que recopilamos</h2>
      <p>Podemos recopilar:</p>
      <ul>
        <li>Datos de cuenta: correo electrónico, identificador de usuario y nombre informado en el registro.</li>
        <li>Datos del emisor: nombre o razón social, CPF/CNPJ, teléfono, correo electrónico, dirección, ciudad, estado, clave PIX, logotipo y firma.</li>
        <li>Datos de clientes y servicios: nombre, documento, teléfono, correo electrónico, dirección, notas, descripciones y valores.</li>
        <li>Datos de recibos: valor, descripción, forma de pago, fecha, ciudad, estado, firma, PDFs, estado, numeración e historial.</li>
        <li>Datos de suscripción Pro: producto comprado, estado, período, tienda de origen e identificadores necesarios para validación.</li>
        <li>Datos técnicos y de diagnóstico: dispositivo, sistema operativo, eventos de uso, errores, rendimiento e identificadores técnicos necesarios para analítica, seguridad y prevención de abuso.</li>
      </ul>
      <h2>Finalidades</h2>
      <p>Usamos datos para autenticar usuarios, crear y guardar recibos, generar PDFs, sincronizar datos en la nube, aplicar límites del plan gratuito, habilitar funciones Pro, restaurar compras, proteger la app, depurar fallas, mejorar el producto, prestar soporte y cumplir obligaciones legales.</p>
      <h2>Compartición y encargados</h2>
      <p>No vendemos datos personales. Compartimos datos solo cuando es necesario con Supabase, Apple App Store, Google Play, PostHog y proveedores de correo, hospedaje o soporte necesarios para la operación y atención.</p>
      <h2>Seguridad</h2>
      <p>Usamos transmisión por HTTPS, autenticación, políticas de acceso por usuario en la base de datos, buckets privados para archivos y URLs firmadas para acceso temporal a PDFs. Ningún método es infalible, pero adoptamos medidas proporcionales al tipo de dato tratado.</p>
      <h2>Retención y eliminación</h2>
      <p>Mantenemos datos mientras la cuenta esté activa o mientras sean necesarios para funcionamiento, obligaciones legales, soporte, auditoría, prevención de fraude y resolución de disputas. El usuario puede iniciar la eliminación dentro de la app en Perfil &gt; Cuenta, compras y documentos &gt; Eliminar cuenta. También puede solicitarla por los contactos anteriores.</p>
      <h2>Derechos del usuario</h2>
      <p>El usuario puede solicitar acceso, corrección, portabilidad, información sobre compartición, revocación del consentimiento cuando corresponda y eliminación de datos. Responderemos conforme a la legislación aplicable, incluida la LGPD de Brasil cuando corresponda.</p>
      <h2>Niños</h2>
      <p>La app no está dirigida a niños. Los menores solo deben usar la app con autorización de un responsable legal.</p>
      <h2>Cambios</h2>
      <p>Podemos actualizar esta política. Cuando haya cambios relevantes, se modificará la fecha de actualización y podremos avisar en la app o por otros medios apropiados.</p>
    `,
  },
  terms: {
    pt: `
      <p class="lead">Estes Termos regulam o uso do Recibo Fácil MEI, aplicativo para criação, armazenamento e compartilhamento de recibos de pagamento.</p>
      ${stamp("pt", "terms")}
      <h2>Natureza do serviço</h2>
      <p>O app ajuda microempreendedores, autônomos e prestadores de serviço a criar recibos simples. O app não emite nota fiscal, não substitui contador, advogado ou consultor tributário, e não garante que um recibo seja suficiente para todos os fins legais.</p>
      <h2>Conta</h2>
      <p>O usuário deve fornecer informações corretas, manter suas credenciais seguras e avisar sobre uso não autorizado da conta. Podemos suspender contas em caso de abuso, fraude, violação destes Termos ou risco à segurança.</p>
      <h2>Responsabilidades do usuário</h2>
      <ul>
        <li>Veracidade dos dados inseridos em perfil, clientes, serviços e recibos.</li>
        <li>Obter autorizações necessárias para cadastrar dados de terceiros.</li>
        <li>Cumprir leis tributárias, civis, trabalhistas, contábeis e de proteção de dados.</li>
        <li>Conferir recibos antes de emitir e compartilhar.</li>
        <li>Não usar o app para fraude, falsificação, lavagem de dinheiro, assédio, spam ou atividade ilegal.</li>
      </ul>
      <h2>Plano grátis</h2>
      <p>O plano grátis pode incluir limites de recibos mensais, número de clientes, histórico, marca d'água em PDFs e outros limites exibidos no app.</p>
      <h2>Plano Pro e compras no app</h2>
      <p>O Plano Pro libera recursos adicionais enquanto a assinatura ou compra elegível estiver ativa. Os valores, períodos, impostos e condições finais são exibidos pela App Store ou Google Play no momento da compra. Assinaturas renovam automaticamente, salvo cancelamento pelo usuário na conta Apple ID ou Google Play.</p>
      <h2>Reembolsos e cancelamentos</h2>
      <p>Compras feitas pela App Store seguem as políticas da Apple. Compras feitas pelo Google Play seguem as políticas do Google Play. O usuário pode gerenciar ou cancelar assinaturas pelas configurações da respectiva loja.</p>
      <h2>Disponibilidade e alterações</h2>
      <p>Podemos alterar, suspender ou descontinuar funcionalidades por motivos técnicos, comerciais, legais ou de segurança. Faremos esforços razoáveis para manter o serviço disponível e preservar dados, mas não garantimos operação ininterrupta.</p>
      <h2>Propriedade intelectual</h2>
      <p>O app, marca, interface, código e materiais relacionados pertencem aos seus titulares. O usuário mantém responsabilidade e direitos sobre os dados que inserir, concedendo ao app autorização para processá-los somente para prestar o serviço.</p>
      <h2>Limitação de responsabilidade</h2>
      <p>Na extensão permitida por lei, o app é fornecido "como está". Não somos responsáveis por perdas indiretas, lucros cessantes, uso fiscal incorreto, dados inseridos incorretamente pelo usuário, indisponibilidade de lojas ou serviços de terceiros.</p>
      <h2>Suporte</h2>
      <p>Contato: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></p>
    `,
    en: `
      <p class="lead">These Terms govern the use of Recibo Fácil MEI, an app for creating, storing, and sharing payment receipts.</p>
      ${stamp("en", "terms")}
      <h2>Nature of the service</h2>
      <p>The app helps micro-entrepreneurs, independent professionals, and service providers create simple receipts. The app does not issue invoices, does not replace an accountant, lawyer, or tax advisor, and does not guarantee that a receipt is sufficient for every legal purpose.</p>
      <h2>Account</h2>
      <p>Users must provide accurate information, keep credentials secure, and report unauthorized account use. We may suspend accounts in case of abuse, fraud, violation of these Terms, or security risk.</p>
      <h2>User responsibilities</h2>
      <ul>
        <li>Accuracy of data entered in profiles, customers, services, and receipts.</li>
        <li>Obtaining necessary authorizations to register third-party data.</li>
        <li>Complying with tax, civil, labor, accounting, and data protection laws.</li>
        <li>Reviewing receipts before issuing and sharing them.</li>
        <li>Not using the app for fraud, forgery, money laundering, harassment, spam, or illegal activity.</li>
      </ul>
      <h2>Free plan</h2>
      <p>The free plan may include limits on monthly receipts, number of customers, history, PDF watermarking, and other limits displayed in the app.</p>
      <h2>Pro plan and in-app purchases</h2>
      <p>The Pro Plan unlocks additional features while an eligible subscription or purchase is active. Prices, periods, taxes, and final conditions are displayed by the App Store or Google Play at the time of purchase. Subscriptions renew automatically unless canceled by the user through Apple ID or Google Play.</p>
      <h2>Refunds and cancellations</h2>
      <p>Purchases made through the App Store follow Apple's policies. Purchases made through Google Play follow Google Play policies. Users can manage or cancel subscriptions through the settings of the respective store.</p>
      <h2>Availability and changes</h2>
      <p>We may change, suspend, or discontinue features for technical, commercial, legal, or security reasons. We make reasonable efforts to keep the service available and preserve data, but we do not guarantee uninterrupted operation.</p>
      <h2>Intellectual property</h2>
      <p>The app, brand, interface, code, and related materials belong to their respective owners. Users remain responsible for and retain rights to the data they enter, granting the app permission to process it only to provide the service.</p>
      <h2>Limitation of liability</h2>
      <p>To the extent permitted by law, the app is provided "as is." We are not responsible for indirect losses, lost profits, incorrect tax use, incorrect data entered by users, or unavailability of stores or third-party services.</p>
      <h2>Support</h2>
      <p>Contact: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></p>
    `,
    es: `
      <p class="lead">Estos Términos regulan el uso de Recibo Fácil MEI, una aplicación para crear, guardar y compartir recibos de pago.</p>
      ${stamp("es", "terms")}
      <h2>Naturaleza del servicio</h2>
      <p>La app ayuda a microemprendedores, profesionales independientes y prestadores de servicios a crear recibos simples. La app no emite facturas, no sustituye a un contador, abogado o asesor tributario, y no garantiza que un recibo sea suficiente para todos los fines legales.</p>
      <h2>Cuenta</h2>
      <p>El usuario debe proporcionar información correcta, mantener sus credenciales seguras y avisar sobre uso no autorizado de la cuenta. Podemos suspender cuentas en caso de abuso, fraude, violación de estos Términos o riesgo de seguridad.</p>
      <h2>Responsabilidades del usuario</h2>
      <ul>
        <li>Veracidad de los datos ingresados en perfil, clientes, servicios y recibos.</li>
        <li>Obtener las autorizaciones necesarias para registrar datos de terceros.</li>
        <li>Cumplir leyes tributarias, civiles, laborales, contables y de protección de datos.</li>
        <li>Revisar recibos antes de emitirlos y compartirlos.</li>
        <li>No usar la app para fraude, falsificación, lavado de dinero, acoso, spam o actividad ilegal.</li>
      </ul>
      <h2>Plan gratuito</h2>
      <p>El plan gratuito puede incluir límites de recibos mensuales, número de clientes, historial, marca de agua en PDFs y otros límites mostrados en la app.</p>
      <h2>Plan Pro y compras dentro de la app</h2>
      <p>El Plan Pro habilita funciones adicionales mientras una suscripción o compra elegible esté activa. Los valores, períodos, impuestos y condiciones finales son mostrados por App Store o Google Play al momento de la compra. Las suscripciones se renuevan automáticamente salvo cancelación por el usuario en Apple ID o Google Play.</p>
      <h2>Reembolsos y cancelaciones</h2>
      <p>Las compras realizadas por App Store siguen las políticas de Apple. Las compras realizadas por Google Play siguen las políticas de Google Play. El usuario puede administrar o cancelar suscripciones desde la configuración de la tienda correspondiente.</p>
      <h2>Disponibilidad y cambios</h2>
      <p>Podemos cambiar, suspender o discontinuar funcionalidades por motivos técnicos, comerciales, legales o de seguridad. Haremos esfuerzos razonables para mantener el servicio disponible y preservar datos, pero no garantizamos operación ininterrumpida.</p>
      <h2>Propiedad intelectual</h2>
      <p>La app, marca, interfaz, código y materiales relacionados pertenecen a sus titulares. El usuario mantiene responsabilidad y derechos sobre los datos que ingresa, otorgando a la app autorización para procesarlos solo para prestar el servicio.</p>
      <h2>Limitación de responsabilidad</h2>
      <p>En la medida permitida por la ley, la app se proporciona "tal cual". No somos responsables por pérdidas indirectas, lucro cesante, uso fiscal incorrecto, datos ingresados incorrectamente por el usuario, indisponibilidad de tiendas o servicios de terceros.</p>
      <h2>Soporte</h2>
      <p>Contacto: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></p>
    `,
  },
  support: {
    pt: `
      <p class="lead">Canais de atendimento para dúvidas, compras, assinatura, privacidade e exclusão de conta.</p>
      ${stamp("pt", "support")}
      <h2>Contato</h2>
      <ul>
        <li>E-mail: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></li>
        <li>Solicitações de privacidade: <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a></li>
      </ul>
      <h2>Prazos de resposta</h2>
      <p>A meta inicial de atendimento é responder solicitações em até 3 dias úteis.</p>
      <h2>Compras e assinatura</h2>
      <ul>
        <li>iOS: o usuário deve gerenciar ou cancelar pelo Apple ID em Assinaturas.</li>
        <li>Android: o usuário deve gerenciar ou cancelar pelo Google Play em Pagamentos e assinaturas.</li>
        <li>O app oferece restauração de compras na tela Plano Pro.</li>
      </ul>
      <h2>Solicitações de privacidade</h2>
      <p>O usuário pode excluir a conta dentro do app em Perfil &gt; Conta, compras e documentos &gt; Excluir conta. Pedidos de acesso, correção, exportação e exclusão de dados também podem ser enviados pelo e-mail de privacidade com o e-mail da conta no app.</p>
    `,
    en: `
      <p class="lead">Support channels for questions, purchases, subscriptions, privacy, and account deletion.</p>
      ${stamp("en", "support")}
      <h2>Contact</h2>
      <ul>
        <li>Email: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></li>
        <li>Privacy requests: <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a></li>
      </ul>
      <h2>Response time</h2>
      <p>Our initial support goal is to respond to requests within 3 business days.</p>
      <h2>Purchases and subscription</h2>
      <ul>
        <li>iOS: users should manage or cancel through Apple ID under Subscriptions.</li>
        <li>Android: users should manage or cancel through Google Play under Payments and subscriptions.</li>
        <li>The app offers purchase restoration on the Pro Plan screen.</li>
      </ul>
      <h2>Privacy requests</h2>
      <p>Users can delete the account in the app under Profile &gt; Account, purchases and documents &gt; Delete account. Requests for access, correction, export, and deletion can also be sent to the privacy email with the account email used in the app.</p>
    `,
    es: `
      <p class="lead">Canales de atención para dudas, compras, suscripción, privacidad y eliminación de cuenta.</p>
      ${stamp("es", "support")}
      <h2>Contacto</h2>
      <ul>
        <li>Correo: <a href="mailto:support@magnusengineering.tech">support@magnusengineering.tech</a></li>
        <li>Solicitudes de privacidad: <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a></li>
      </ul>
      <h2>Plazo de respuesta</h2>
      <p>La meta inicial de soporte es responder solicitudes en hasta 3 días hábiles.</p>
      <h2>Compras y suscripción</h2>
      <ul>
        <li>iOS: el usuario debe administrar o cancelar desde Apple ID en Suscripciones.</li>
        <li>Android: el usuario debe administrar o cancelar desde Google Play en Pagos y suscripciones.</li>
        <li>La app ofrece restauración de compras en la pantalla Plan Pro.</li>
      </ul>
      <h2>Solicitudes de privacidad</h2>
      <p>El usuario puede eliminar la cuenta dentro de la app en Perfil &gt; Cuenta, compras y documentos &gt; Eliminar cuenta. Las solicitudes de acceso, corrección, exportación y eliminación también pueden enviarse al correo de privacidad con el correo de la cuenta usada en la app.</p>
    `,
  },
  "delete-account": {
    pt: `
      <p class="lead">Instruções públicas para solicitar ou iniciar a exclusão da conta e dos dados associados ao Recibo Fácil MEI.</p>
      ${stamp("pt", "delete-account")}
      <h2>Excluir pelo aplicativo</h2>
      <p>O usuário pode iniciar a exclusão dentro do app em Perfil &gt; Conta, compras e documentos &gt; Excluir conta. O app poderá solicitar confirmação antes de concluir a solicitação.</p>
      <h2>Solicitar por e-mail</h2>
      <p>Também é possível solicitar a exclusão pelo e-mail <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a>. Para localizar a conta, envie a solicitação usando o mesmo e-mail cadastrado no app ou informe o e-mail da conta no corpo da mensagem.</p>
      <h2>Dados excluídos</h2>
      <p>A exclusão pode abranger dados de conta, perfil do emissor, clientes, serviços, recibos e arquivos relacionados, conforme aplicável ao funcionamento do app.</p>
      <h2>Dados que podem ser retidos</h2>
      <p>Algumas informações podem ser retidas quando exigido por lei ou necessário para segurança, prevenção de fraude, registros de compra, suporte, auditoria, resolução de disputas ou cumprimento de obrigações legais.</p>
      <h2>Compras e assinaturas</h2>
      <p>A exclusão da conta no app não cancela automaticamente uma assinatura gerenciada pela Apple App Store ou pelo Google Play. O usuário deve cancelar assinaturas recorrentes diretamente nas configurações da respectiva loja.</p>
    `,
    en: `
      <p class="lead">Public instructions to request or start deletion of an account and associated Recibo Fácil MEI data.</p>
      ${stamp("en", "delete-account")}
      <h2>Delete through the app</h2>
      <p>Users can start deletion in the app under Profile &gt; Account, purchases and documents &gt; Delete account. The app may request confirmation before completing the request.</p>
      <h2>Request by email</h2>
      <p>Deletion can also be requested by emailing <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a>. To locate the account, send the request from the same email registered in the app or include the account email in the message.</p>
      <h2>Data deleted</h2>
      <p>Deletion may cover account data, issuer profile, customers, services, receipts, and related files, as applicable to the app's operation.</p>
      <h2>Data that may be retained</h2>
      <p>Some information may be retained when required by law or necessary for security, fraud prevention, purchase records, support, audit, dispute resolution, or compliance with legal obligations.</p>
      <h2>Purchases and subscriptions</h2>
      <p>Deleting the account in the app does not automatically cancel a subscription managed by Apple App Store or Google Play. Users must cancel recurring subscriptions directly in the settings of the respective store.</p>
    `,
    es: `
      <p class="lead">Instrucciones públicas para solicitar o iniciar la eliminación de la cuenta y de los datos asociados a Recibo Fácil MEI.</p>
      ${stamp("es", "delete-account")}
      <h2>Eliminar desde la app</h2>
      <p>El usuario puede iniciar la eliminación dentro de la app en Perfil &gt; Cuenta, compras y documentos &gt; Eliminar cuenta. La app puede solicitar confirmación antes de concluir la solicitud.</p>
      <h2>Solicitar por correo</h2>
      <p>También es posible solicitar la eliminación por correo a <a href="mailto:privacy@magnusengineering.tech">privacy@magnusengineering.tech</a>. Para localizar la cuenta, envía la solicitud desde el mismo correo registrado en la app o informa el correo de la cuenta en el mensaje.</p>
      <h2>Datos eliminados</h2>
      <p>La eliminación puede abarcar datos de cuenta, perfil del emisor, clientes, servicios, recibos y archivos relacionados, según corresponda al funcionamiento de la app.</p>
      <h2>Datos que pueden conservarse</h2>
      <p>Algunas informaciones pueden conservarse cuando lo exija la ley o sea necesario para seguridad, prevención de fraude, registros de compra, soporte, auditoría, resolución de disputas o cumplimiento de obligaciones legales.</p>
      <h2>Compras y suscripciones</h2>
      <p>Eliminar la cuenta en la app no cancela automáticamente una suscripción administrada por Apple App Store o Google Play. El usuario debe cancelar suscripciones recurrentes directamente en la configuración de la tienda correspondiente.</p>
    `,
  },
};

function stamp(locale, docKey) {
  const meta = locales[locale];
  const label = docKey === "terms" ? meta.updatedTermsLabel : meta.updatedLabel;
  return `<p class="updated">${label} ${updated[locale]}</p>`;
}

function write(path, content) {
  const absolute = join(root, path);
  mkdirSync(dirname(absolute), { recursive: true });
  writeFileSync(absolute, `${content.trim()}\n`, "utf8");
}

function head({ title, description, alternates = "" }) {
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <meta name="description" content="${description}">
    ${alternates}
    <link rel="icon" href="/assets/recibo-facil-icon.png">
    <link rel="stylesheet" href="/styles.css">
  `;
}

function header(locale = "pt") {
  const meta = locales[locale];
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/">
          <img src="/assets/recibo-facil-icon.png" alt="">
          <span class="brand-text">
            <span class="brand-name">Magnus Engineering</span>
            <span class="brand-subtitle">${meta.brandSubtitle}</span>
          </span>
        </a>
        <nav class="nav" aria-label="${meta.docsLabel}">
          <a href="/#apps">${meta.nav.apps}</a>
          <a href="/#approach">${meta.nav.approach}</a>
          <a href="${meta.legalPath}">${meta.nav.legal}</a>
          <a href="mailto:support@magnusengineering.tech">${meta.nav.contact}</a>
        </nav>
      </div>
    </header>
  `;
}

function footer(locale = "pt") {
  return `<footer class="site-footer">© 2026 Magnus Engineering. ${locales[locale].footer}</footer>`;
}

function page({ locale = "pt", title, description, body, alternates = "" }) {
  return `<!doctype html>
<html lang="${locales[locale].htmlLang}">
  <head>
    ${head({ title, description, alternates })}
  </head>
  <body>
    ${header(locale)}
    ${body}
    ${footer(locale)}
  </body>
</html>`;
}

function landingPage() {
  return page({
    title: "Magnus Engineering | Estúdio de software",
    description: "Magnus Engineering cria produtos de software práticos para operadores independentes e pequenos negócios.",
    body: `
      <main>
        <section class="hero page-shell">
          <div class="hero-copy">
            <h1>Magnus Engineering</h1>
            <p class="lead">Um estúdio de software focado em produtos simples de operar, fáceis de confiar e prontos para negócios reais.</p>
            <div class="hero-actions">
              <a class="button primary" href="/legal/">Documentos legais</a>
              <a class="button secondary" href="mailto:support@magnusengineering.tech">Contato</a>
            </div>
          </div>
          <div class="hero-visual" aria-hidden="true">
            <div class="visual-panel visual-panel-main">
              <span class="visual-label">Produto ativo</span>
              <strong>Recibo Fácil MEI</strong>
              <span>Recibos, clientes, PDFs, assinaturas</span>
            </div>
            <div class="visual-grid">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
        </section>

        <section id="approach" class="section-band">
          <div class="page-shell split-section">
            <div>
              <h2>Produtos enxutos, utilitários e duráveis.</h2>
              <p>Construímos software com atenção ao fluxo real de uso: dados claros, interfaces objetivas, infraestrutura confiável e documentação pública desde o início.</p>
            </div>
            <ul class="feature-list">
              <li><strong>Aplicativos móveis</strong><span>Experiências para tarefas recorrentes, assinaturas e fluxos de conta.</span></li>
              <li><strong>Backend e dados</strong><span>Autenticação, banco, armazenamento, políticas de acesso e automações.</span></li>
              <li><strong>Operação pública</strong><span>Páginas legais, suporte, distribuição e preparação para lojas.</span></li>
            </ul>
          </div>
        </section>

        <section id="apps" class="page-shell app-section">
          <div>
            <h2>Apps</h2>
            <p>Produtos em operação ou preparação pública pela Magnus Engineering.</p>
          </div>
          <article class="app-card">
            <img src="/assets/recibo-facil-icon.png" alt="">
            <div>
              <h3>Recibo Fácil MEI</h3>
              <p>Aplicativo para criação, armazenamento e compartilhamento de recibos de pagamento.</p>
              <a href="/legal/">Ver documentos legais</a>
            </div>
          </article>
        </section>
      </main>
    `,
  });
}

function langHubSwitch(locale) {
  return `<nav class="language-switcher compact" aria-label="${locales[locale].languageLabel}">
    ${Object.entries(locales)
      .map(([key, meta]) => `<a href="${meta.legalPath}" hreflang="${meta.htmlLang}"${key === locale ? " aria-current=\"true\"" : ""}>${meta.label}</a>`)
      .join("")}
  </nav>`;
}

function legalHubPage(locale) {
  const meta = locales[locale];
  const hub = legalHub[locale];
  const links = Object.keys(docLabels)
    .map((docKey) => `<li><a href="${meta.appPath}/${docKey}/">${docLabels[docKey][locale]}<span aria-hidden="true">›</span></a></li>`)
    .join("");
  const alternates = Object.values(locales)
    .map((item) => `<link rel="alternate" hreflang="${item.htmlLang}" href="${item.legalPath}">`)
    .join("\n    ");

  return page({
    locale,
    title: `${hub.title} | Magnus Engineering`,
    description: hub.description,
    alternates,
    body: `
      <main class="page">
        <section class="document legal-hub">
          <div class="doc-topline">
            <p class="section-label">Magnus Engineering</p>
            ${langHubSwitch(locale)}
          </div>
          <h1>${hub.title}</h1>
          <p class="lead">${hub.lead}</p>
          <div class="product-summary">
            <img src="/assets/recibo-facil-icon.png" alt="">
            <div>
              <h2>Recibo Fácil MEI</h2>
              <p>${hub.appDescription}</p>
            </div>
          </div>
          <ul class="link-list">${links}</ul>
        </section>
      </main>
    `,
  });
}

function langAlternates(docKey, locale) {
  return `<nav class="language-switcher" aria-label="${locales[locale].languageLabel}">
    ${Object.entries(locales)
      .map(([key, meta]) => `<a href="${meta.appPath}/${docKey}/" hreflang="${meta.htmlLang}"${key === locale ? " aria-current=\"true\"" : ""}>${meta.label}</a>`)
      .join("")}
  </nav>`;
}

function docPage(locale, docKey) {
  const meta = locales[locale];
  const title = docLabels[docKey][locale];
  const alternates = Object.values(locales)
    .map((item) => `<link rel="alternate" hreflang="${item.htmlLang}" href="${item.appPath}/${docKey}/">`)
    .join("\n    ");

  return page({
    locale,
    title: `${title} | Recibo Fácil MEI`,
    description: docDescriptions[docKey][locale],
    alternates,
    body: `
      <main class="page">
        <article class="document">
          <div class="doc-topline">
            <p class="section-label">Recibo Fácil MEI</p>
            ${langAlternates(docKey, locale)}
          </div>
          <h1>${title}</h1>
          ${docs[docKey][locale]}
        </article>
      </main>
    `,
  });
}

function notFoundPage() {
  return page({
    title: "Página não encontrada | Magnus Engineering",
    description: "Página não encontrada.",
    body: `
      <main class="page">
        <section class="document">
          <p class="section-label">404</p>
          <h1>Página não encontrada</h1>
          <p class="lead">O documento solicitado não está disponível neste endereço.</p>
          <p><a href="/">Voltar para a página inicial</a></p>
        </section>
      </main>
    `,
  });
}

write("index.html", landingPage());
write("legal/index.html", legalHubPage("pt"));
write("legal/en/index.html", legalHubPage("en"));
write("legal/es/index.html", legalHubPage("es"));
write("404.html", notFoundPage());

for (const docKey of Object.keys(docs)) {
  write(`legal/recibo-facil/${docKey}/index.html`, docPage("pt", docKey));
  write(`legal/en/recibo-facil/${docKey}/index.html`, docPage("en", docKey));
  write(`legal/es/recibo-facil/${docKey}/index.html`, docPage("es", docKey));
}
