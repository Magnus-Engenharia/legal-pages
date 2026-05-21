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

const nulevDocs = {
  privacy: {
    pt: `
      <p class="lead">Esta Política de Privacidade explica como o NuLev trata dados pessoais e dados pessoais sensíveis de saúde para operar a plataforma de acompanhamento nutricional usada por nutricionistas, equipes de clínicas e pacientes.</p>
      ${stamp("pt", "privacy")}
      <h2>Operador e contato</h2>
      <p>NuLev é a plataforma descrita nesta política. Para dúvidas, suporte, solicitações LGPD ou exclusão de conta, entre em contato pelo e-mail <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>.</p>
      <h2>Dados tratados</h2>
      <ul>
        <li>Dados de conta e contato: nome, e-mail, telefone, identificadores de conta e credenciais.</li>
        <li>Dados de saúde e acompanhamento: planos alimentares, medidas antropométricas, metas, consultas, respostas de questionários, observações clínicas, adesão alimentar e fotos de progresso escolhidas pelo paciente.</li>
        <li>Dados técnicos: tokens de notificação, identificador do dispositivo, modelo, sistema operacional, versão do app, idioma, fuso horário, logs de segurança e eventos operacionais necessários para operar o serviço.</li>
        <li>Dados de cobrança e administração quando necessários para assinatura, suporte, auditoria e operação da clínica.</li>
      </ul>
      <h2>Finalidades</h2>
      <p>Usamos dados para autenticar usuários, administrar clínicas, disponibilizar planos e consultas, registrar progresso, enviar lembretes e notificações, responder solicitações de titulares, manter segurança, cumprir obrigações legais e melhorar a confiabilidade do serviço.</p>
      <h2>Bases legais</h2>
      <p>Dados pessoais comuns podem ser tratados para execução de contrato, cumprimento de obrigação legal, legítimo interesse de segurança e consentimento quando aplicável. Dados pessoais sensíveis de saúde são tratados com consentimento específico do paciente ou para tutela da saúde por profissional habilitado, conforme a LGPD.</p>
      <h2>Compartilhamento</h2>
      <p>Dados podem ser compartilhados com a equipe de nutrição responsável pelo atendimento, operadores de hospedagem, armazenamento, e-mail, notificações, pagamentos, suporte e monitoramento de erros. O NuLev não vende dados pessoais e não usa rastreamento publicitário entre apps ou sites.</p>
      <h2>Fotos e permissões</h2>
      <p>O app mobile pede acesso à biblioteca de fotos somente quando o paciente escolhe enviar uma foto de progresso ou imagem em resposta de acompanhamento. A imagem selecionada é enviada ao backend NuLev para o fluxo de cuidado. A versão mobile atual não usa câmera, microfone, contatos, localização, ID de publicidade ou rastreamento entre apps.</p>
      <h2>Segurança</h2>
      <p>A comunicação de produção usa HTTPS, sessões exigem autenticação e tokens são armazenados em armazenamento seguro do dispositivo quando disponível. Nenhuma medida é absoluta, mas o serviço é projetado para limitar acesso a usuários autorizados e operadores necessários.</p>
      <h2 id="choices">Retenção e exclusão</h2>
      <p>Dados de conta são mantidos durante a vigência da conta e pelo período necessário para cumprir obrigações legais, fiscais, profissionais, contratuais e de segurança. Dados clínicos podem ser preservados pelo período exigido pelas normas profissionais e legais aplicáveis, com anonimização quando a exclusão direta não for possível.</p>
      <h2>Direitos do titular</h2>
      <p>O titular pode solicitar confirmação de tratamento, acesso, correção, portabilidade, informação sobre compartilhamento, revogação de consentimento, anonimização, bloqueio ou eliminação quando cabível. Solicitações podem ser feitas pelo app, pelo painel autenticado ou por <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>.</p>
      <h2>Crianças e adolescentes</h2>
      <p>Quando houver atendimento de menores de idade, o tratamento deve observar o melhor interesse do menor e exigir autorização do responsável quando aplicável.</p>
      <h2>Aviso de saúde</h2>
      <p>O NuLev apoia acompanhamento nutricional e bem-estar, mas não é dispositivo médico, não diagnostica, trata, cura ou previne condições médicas e não substitui atendimento médico ou serviços de emergência.</p>
    `,
    en: `
      <p class="lead">This Privacy Policy explains how NuLev accesses, collects, uses, shares, retains, and deletes personal and sensitive health data for its nutrition follow-up platform.</p>
      ${stamp("en", "privacy")}
      <h2>Developer and privacy contact</h2>
      <p>NuLev is the platform described in this policy. For privacy requests, account deletion, questions, or support, contact <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>.</p>
      <h2>Data we collect</h2>
      <ul>
        <li>Account and contact data, such as name, email address, phone number, account ID, and authentication data.</li>
        <li>Health and nutrition follow-up data, such as meal plans, meals, food preferences, restrictions, adherence logs, measurements, progress notes, consultation status, reminders, questionnaire answers, and messages.</li>
        <li>Photos selected by the patient for progress tracking or follow-up answers.</li>
        <li>Device and app data, such as push notification token, device identifier, device model, operating system, app version, language, timezone, and basic app usage events needed to operate the service.</li>
      </ul>
      <h2>How we use data</h2>
      <p>We use data to provide secure account access, display nutrition plans assigned by a professional or clinic, track progress and follow-up responses, send reminders and notifications, provide support, maintain security, debug the service, administer the platform, and meet legal, regulatory, and professional record obligations where applicable.</p>
      <h2>Sharing</h2>
      <p>Data may be shared with the nutrition professional, clinic, or care team responsible for the patient's follow-up, service providers used to host the backend, deliver notifications, provide support, monitor reliability, or secure the application, and authorities or third parties when required by law or to protect safety and security. NuLev does not sell personal data and does not track users for advertising across apps or websites.</p>
      <h2>Photos and permissions</h2>
      <p>The mobile app asks for photo library access only when the patient chooses to upload a progress photo or image answer. The selected image is sent to the NuLev backend for the care workflow. The current mobile app does not use device location, contacts, microphone, camera capture, advertising ID, or cross-app advertising tracking.</p>
      <h2>Security</h2>
      <p>Production network communication uses HTTPS. Session tokens are stored in secure device storage when available. Access to patient data requires authentication. No measure can guarantee absolute security, but the service is designed to limit access to authorized users and providers.</p>
      <h2 id="choices">Retention and deletion</h2>
      <p>Account and contact data is retained while the account is active and for up to 30 days after an authenticated deletion request before direct identifiers are removed, unless legal, contractual, security, or professional record obligations require a longer period. Clinical and nutrition records may be retained for the professional or legal record period applicable to the responsible clinic and then deleted or anonymized.</p>
      <h2>User rights</h2>
      <p>Patients and platform users can request access, correction, export, or deletion by contacting <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>, using the authenticated in-app account deletion request flow, or visiting the account deletion page.</p>
      <h2>Children</h2>
      <p>NuLev is intended for patients under the care of a participating professional or clinic. If the app is used by a minor, the responsible provider or guardian must ensure appropriate authorization under applicable law.</p>
      <h2>Health disclaimer</h2>
      <p>NuLev supports nutrition follow-up and wellness management. It is not a medical device and does not diagnose, treat, cure, or prevent medical conditions. It does not replace medical care or emergency services.</p>
    `,
    es: `
      <p class="lead">Esta Política de Privacidad explica cómo NuLev accede, recopila, utiliza, comparte, conserva y elimina datos personales y datos sensibles de salud para su plataforma de seguimiento nutricional.</p>
      ${stamp("es", "privacy")}
      <h2>Operador y contacto</h2>
      <p>NuLev es la plataforma descrita en esta política. Para solicitudes de privacidad, eliminación de cuenta, preguntas o soporte, contacta a <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>.</p>
      <h2>Datos que tratamos</h2>
      <ul>
        <li>Datos de cuenta y contacto, como nombre, correo electrónico, teléfono, identificadores de cuenta y credenciales.</li>
        <li>Datos de salud y seguimiento nutricional, como planes alimentarios, comidas, preferencias, restricciones, registros de adherencia, medidas, notas de progreso, consultas, recordatorios, respuestas de cuestionarios y mensajes.</li>
        <li>Fotos seleccionadas por el paciente para seguimiento de progreso o respuestas de acompañamiento.</li>
        <li>Datos técnicos del dispositivo y la app, como token de notificaciones, identificador del dispositivo, modelo, sistema operativo, versión de la app, idioma, zona horaria y eventos operativos necesarios para prestar el servicio.</li>
      </ul>
      <h2>Finalidades</h2>
      <p>Usamos datos para ofrecer acceso seguro, mostrar planes y orientaciones asignadas por un profesional o clínica, registrar progreso y respuestas, enviar recordatorios, prestar soporte, mantener seguridad, depurar fallas, administrar el servicio y cumplir obligaciones legales, regulatorias y profesionales cuando corresponda.</p>
      <h2>Compartición</h2>
      <p>Los datos pueden compartirse con el profesional de nutrición, clínica o equipo responsable del seguimiento, proveedores de hospedaje, notificaciones, soporte, monitoreo y seguridad, y autoridades o terceros cuando lo exija la ley o sea necesario para proteger seguridad. NuLev no vende datos personales ni rastrea usuarios para publicidad entre apps o sitios.</p>
      <h2>Fotos y permisos</h2>
      <p>La app móvil solicita acceso a la biblioteca de fotos solo cuando el paciente elige subir una foto de progreso o imagen de respuesta. La imagen seleccionada se envía al backend NuLev para el flujo de cuidado. La versión móvil actual no usa ubicación, contactos, micrófono, cámara, ID de publicidad ni rastreo publicitario entre apps.</p>
      <h2>Seguridad</h2>
      <p>La comunicación de producción usa HTTPS, las sesiones requieren autenticación y los tokens se almacenan en almacenamiento seguro del dispositivo cuando está disponible. Ninguna medida es absoluta, pero el servicio está diseñado para limitar el acceso a usuarios y operadores autorizados.</p>
      <h2 id="choices">Retención y eliminación</h2>
      <p>Los datos de cuenta se mantienen mientras la cuenta esté activa y hasta 30 días después de una solicitud autenticada de eliminación antes de retirar identificadores directos, salvo que una obligación legal, contractual, de seguridad o profesional exija un período mayor. Los registros clínicos y nutricionales pueden conservarse por el período profesional o legal aplicable a la clínica responsable y luego eliminarse o anonimizarse.</p>
      <h2>Derechos del usuario</h2>
      <p>Pacientes y usuarios pueden solicitar acceso, corrección, exportación o eliminación contactando <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>, usando el flujo autenticado de eliminación en la app o visitando la página de eliminación de cuenta.</p>
      <h2>Niños y adolescentes</h2>
      <p>NuLev está destinado a pacientes bajo el cuidado de un profesional o clínica participante. Si lo utiliza un menor, el proveedor o responsable debe asegurar la autorización apropiada conforme a la ley aplicable.</p>
      <h2>Aviso de salud</h2>
      <p>NuLev apoya el seguimiento nutricional y bienestar. No es un dispositivo médico, no diagnostica, trata, cura ni previene condiciones médicas y no sustituye atención médica ni servicios de emergencia.</p>
    `,
  },
  terms: {
    pt: `
      <p class="lead">Estes Termos regulam o uso do NuLev, plataforma de apoio ao acompanhamento nutricional usada por nutricionistas, equipes de clínicas e pacientes.</p>
      ${stamp("pt", "terms")}
      <h2>Uso da plataforma</h2>
      <p>Nutricionistas e equipes de clínicas devem usar a plataforma somente para fins profissionais, mantendo informações corretas, acessos individuais e confidencialidade dos dados de pacientes. Pacientes devem usar o app para acompanhar orientações, consultas, lembretes, medidas, fotos e questionários relacionados ao atendimento nutricional.</p>
      <h2>Responsabilidades clínicas</h2>
      <p>O NuLev apoia rotinas de acompanhamento e não substitui avaliação profissional, diagnóstico, atendimento médico, serviços de emergência ou decisão clínica individualizada.</p>
      <h2>Conta e segurança</h2>
      <p>Cada usuário é responsável por proteger suas credenciais, manter seus dados atualizados e informar acessos indevidos ou incidentes suspeitos.</p>
      <h2>Privacidade</h2>
      <p>O tratamento de dados pessoais segue a Política de Privacidade vigente. Consentimentos opcionais podem ser revogados nos canais disponibilizados, sem afetar tratamentos exigidos por lei, contrato, segurança ou tutela da saúde quando aplicável.</p>
      <h2>Disponibilidade e alterações</h2>
      <p>Podemos alterar, suspender ou descontinuar funcionalidades por motivos técnicos, comerciais, legais ou de segurança. Quando houver mudança relevante nos termos ou na política, o NuLev poderá solicitar novo aceite ou destacar a nova versão nos apps.</p>
      <h2>Contato</h2>
      <p>Contato de suporte e privacidade: <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>.</p>
    `,
    en: `
      <p class="lead">These Terms govern use of NuLev, a nutrition follow-up platform used by nutrition professionals, clinic teams, and patients.</p>
      ${stamp("en", "terms")}
      <h2>Platform use</h2>
      <p>Nutrition professionals and clinic teams must use the platform only for professional purposes, keep information accurate, use individual access credentials, and preserve patient data confidentiality. Patients should use the mobile app to follow guidance, consultations, reminders, measurements, photos, and questionnaires related to their nutrition care.</p>
      <h2>Clinical responsibilities</h2>
      <p>NuLev supports follow-up routines and does not replace professional assessment, diagnosis, medical care, emergency services, or individualized clinical decisions.</p>
      <h2>Account and security</h2>
      <p>Each user is responsible for protecting credentials, keeping account data updated, and reporting unauthorized access or suspected incidents.</p>
      <h2>Privacy</h2>
      <p>Personal data processing follows the current Privacy Policy. Optional consents may be revoked through available channels, without affecting processing required by law, contract, security, or health care where applicable.</p>
      <h2>Availability and changes</h2>
      <p>We may change, suspend, or discontinue features for technical, commercial, legal, or security reasons. When relevant changes occur, NuLev may request new acceptance or highlight the new version in the apps.</p>
      <h2>Contact</h2>
      <p>Support and privacy contact: <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>.</p>
    `,
    es: `
      <p class="lead">Estos Términos regulan el uso de NuLev, plataforma de apoyo al seguimiento nutricional usada por profesionales de nutrición, equipos de clínicas y pacientes.</p>
      ${stamp("es", "terms")}
      <h2>Uso de la plataforma</h2>
      <p>Los profesionales y equipos de clínicas deben usar la plataforma solo para fines profesionales, mantener información correcta, usar accesos individuales y preservar la confidencialidad de los datos de pacientes. Los pacientes deben usar la app para acompañar orientaciones, consultas, recordatorios, medidas, fotos y cuestionarios relacionados con su atención nutricional.</p>
      <h2>Responsabilidades clínicas</h2>
      <p>NuLev apoya rutinas de seguimiento y no sustituye evaluación profesional, diagnóstico, atención médica, servicios de emergencia ni decisiones clínicas individualizadas.</p>
      <h2>Cuenta y seguridad</h2>
      <p>Cada usuario es responsable de proteger sus credenciales, mantener sus datos actualizados e informar accesos indebidos o incidentes sospechosos.</p>
      <h2>Privacidad</h2>
      <p>El tratamiento de datos personales sigue la Política de Privacidad vigente. Los consentimientos opcionales pueden revocarse por los canales disponibles, sin afectar tratamientos exigidos por ley, contrato, seguridad o tutela de la salud cuando corresponda.</p>
      <h2>Disponibilidad y cambios</h2>
      <p>Podemos cambiar, suspender o discontinuar funcionalidades por motivos técnicos, comerciales, legales o de seguridad. Cuando haya cambios relevantes, NuLev podrá solicitar una nueva aceptación o destacar la nueva versión en las apps.</p>
      <h2>Contacto</h2>
      <p>Contacto de soporte y privacidad: <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a>.</p>
    `,
  },
  support: {
    pt: `
      <p class="lead">Use esta página para suporte do app NuLev, ajuda de acesso à conta, solicitações de privacidade e feedback geral.</p>
      ${stamp("pt", "support")}
      <h2>Contato</h2>
      <p>E-mail: <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a></p>
      <h2>Solicitações comuns</h2>
      <ul>
        <li>Ajuda para entrar ou ativar uma conta de paciente.</li>
        <li>Dúvidas sobre planos alimentares, lembretes, consultas, fotos de progresso ou check-ins de acompanhamento.</li>
        <li>Solicitações de privacidade, incluindo acesso, correção, exportação ou exclusão.</li>
        <li>Problemas gerais do app, feedback e sugestões.</li>
      </ul>
      <h2>Privacidade e exclusão</h2>
      <p>Política de privacidade: <a href="/legal/nulev/privacy/">https://magnusengineering.tech/legal/nulev/privacy/</a></p>
      <p>Exclusão de conta: <a href="/legal/nulev/delete-account/">https://magnusengineering.tech/legal/nulev/delete-account/</a></p>
      <h2>Urgências de saúde</h2>
      <p>Não use o suporte NuLev para emergências. Para necessidades médicas urgentes, contate serviços locais de emergência ou um profissional de saúde qualificado.</p>
    `,
    en: `
      <p class="lead">Use this page for NuLev app support, account access help, privacy requests, and general feedback.</p>
      ${stamp("en", "support")}
      <h2>Contact</h2>
      <p>Email: <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a></p>
      <h2>Common requests</h2>
      <ul>
        <li>Help signing in or activating a patient account.</li>
        <li>Questions about meal plans, reminders, consultations, progress photos, or follow-up check-ins.</li>
        <li>Privacy requests, including access, correction, export, or deletion.</li>
        <li>General app issues, feedback, and feature requests.</li>
      </ul>
      <h2>Privacy and deletion</h2>
      <p>Privacy policy: <a href="/legal/en/nulev/privacy/">https://magnusengineering.tech/legal/en/nulev/privacy/</a></p>
      <p>Account deletion: <a href="/legal/en/nulev/delete-account/">https://magnusengineering.tech/legal/en/nulev/delete-account/</a></p>
      <h2>Urgent health matters</h2>
      <p>Do not use NuLev support for emergencies. For urgent medical needs, contact local emergency services or a qualified health professional.</p>
    `,
    es: `
      <p class="lead">Usa esta página para soporte de la app NuLev, ayuda de acceso a la cuenta, solicitudes de privacidad y comentarios generales.</p>
      ${stamp("es", "support")}
      <h2>Contacto</h2>
      <p>Correo: <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a></p>
      <h2>Solicitudes comunes</h2>
      <ul>
        <li>Ayuda para iniciar sesión o activar una cuenta de paciente.</li>
        <li>Preguntas sobre planes alimentarios, recordatorios, consultas, fotos de progreso o check-ins de seguimiento.</li>
        <li>Solicitudes de privacidad, incluyendo acceso, corrección, exportación o eliminación.</li>
        <li>Problemas generales de la app, comentarios y sugerencias.</li>
      </ul>
      <h2>Privacidad y eliminación</h2>
      <p>Política de privacidad: <a href="/legal/es/nulev/privacy/">https://magnusengineering.tech/legal/es/nulev/privacy/</a></p>
      <p>Eliminación de cuenta: <a href="/legal/es/nulev/delete-account/">https://magnusengineering.tech/legal/es/nulev/delete-account/</a></p>
      <h2>Urgencias de salud</h2>
      <p>No uses el soporte de NuLev para emergencias. Para necesidades médicas urgentes, contacta servicios locales de emergencia o un profesional de salud calificado.</p>
    `,
  },
  "delete-account": {
    pt: `
      <p class="lead">O NuLev permite que pacientes solicitem a exclusão da conta do app e dos dados pessoais associados pelo próprio app ou por este recurso público.</p>
      ${stamp("pt", "delete-account")}
      <h2>Solicitar exclusão</h2>
      <p>Para solicitar exclusão fora do app, envie e-mail para <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a> a partir do endereço vinculado à conta de paciente. Inclua nome completo, e-mail da conta, telefone se disponível e a clínica ou profissional de nutrição conectado à conta.</p>
      <h2>Dados excluídos</h2>
      <p>Quando a solicitação for verificada, o NuLev excluirá ou anonimizará dados de conta e dados do app quando a exclusão for permitida, incluindo contatos, registros de dispositivo, preferências de lembretes, fotos de progresso, respostas de acompanhamento, medidas, logs de adesão e outros registros do paciente.</p>
      <h2>Dados que podem ser retidos</h2>
      <p>Alguns registros podem precisar ser mantidos por obrigações legais, segurança, prevenção de fraude, resolução de disputas, cuidado profissional ou obrigações regulatórias. Quando a retenção for necessária, o NuLev limitará os dados retidos à finalidade aplicável.</p>
      <h2>Exclusão pelo app</h2>
      <p>Se ainda tiver acesso ao app mobile, entre na conta e vá para Perfil &gt; Excluir conta e dados para enviar uma solicitação autenticada diretamente pelo NuLev.</p>
    `,
    en: `
      <p class="lead">NuLev lets patients request deletion of their app account and associated personal data from inside the mobile app and from this public web resource.</p>
      ${stamp("en", "delete-account")}
      <h2>Request deletion</h2>
      <p>To request deletion outside the app, email privacy support at <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a> from the address linked to your patient account. Include your full name, account email, phone number if available, and the clinic or nutrition professional connected to your account.</p>
      <h2>What will be deleted</h2>
      <p>When your request is verified, NuLev will delete or anonymize account data and associated app data where deletion is permitted, including account contact details, app device registrations, reminder preferences, progress photos, follow-up responses, measurements, adherence logs, and other patient app records.</p>
      <h2>Data that may be retained</h2>
      <p>Some records may need to be retained for legal, security, fraud prevention, dispute resolution, professional care, or regulatory obligations. If retention is required, NuLev will limit retained data to the purpose that requires retention.</p>
      <h2>In-app deletion path</h2>
      <p>If you can still access the mobile app, sign in and go to Profile &gt; Delete account and data to send an authenticated deletion request directly from NuLev.</p>
    `,
    es: `
      <p class="lead">NuLev permite que pacientes soliciten la eliminación de su cuenta de la app y de los datos personales asociados desde la app móvil y desde este recurso público.</p>
      ${stamp("es", "delete-account")}
      <h2>Solicitar eliminación</h2>
      <p>Para solicitar la eliminación fuera de la app, escribe a <a href="mailto:suporte@nulev.com.br">suporte@nulev.com.br</a> desde el correo vinculado a tu cuenta de paciente. Incluye nombre completo, correo de la cuenta, teléfono si está disponible y la clínica o profesional de nutrición conectado a la cuenta.</p>
      <h2>Datos eliminados</h2>
      <p>Cuando la solicitud sea verificada, NuLev eliminará o anonimizará datos de cuenta y datos asociados de la app cuando la eliminación sea permitida, incluyendo contactos, registros de dispositivo, preferencias de recordatorios, fotos de progreso, respuestas de seguimiento, medidas, registros de adherencia y otros registros del paciente.</p>
      <h2>Datos que pueden conservarse</h2>
      <p>Algunos registros pueden necesitar conservarse por obligaciones legales, seguridad, prevención de fraude, resolución de disputas, cuidado profesional u obligaciones regulatorias. Si la retención es necesaria, NuLev limitará los datos retenidos a la finalidad correspondiente.</p>
      <h2>Eliminación desde la app</h2>
      <p>Si aún puedes acceder a la app móvil, inicia sesión y ve a Perfil &gt; Eliminar cuenta y datos para enviar una solicitud autenticada directamente desde NuLev.</p>
    `,
  },
};

const nulevDocDescriptions = {
  privacy: {
    pt: "Política de Privacidade da plataforma NuLev.",
    en: "Privacy Policy for the NuLev platform.",
    es: "Política de Privacidad de la plataforma NuLev.",
  },
  terms: {
    pt: "Termos de Uso da plataforma NuLev.",
    en: "Terms of Use for the NuLev platform.",
    es: "Términos de Uso de la plataforma NuLev.",
  },
  support: {
    pt: "Suporte da plataforma e app NuLev.",
    en: "Support for the NuLev platform and app.",
    es: "Soporte de la plataforma y app NuLev.",
  },
  "delete-account": {
    pt: "Instruções para excluir a conta de paciente no NuLev.",
    en: "Instructions to delete a patient account in NuLev.",
    es: "Instrucciones para eliminar una cuenta de paciente en NuLev.",
  },
};

const products = {
  "recibo-facil": {
    name: "Recibo Fácil MEI",
    icon: "/assets/recibo-facil-icon.png",
    hubDescription: legalHub.pt.appDescription,
    hubDescriptions: {
      pt: legalHub.pt.appDescription,
      en: legalHub.en.appDescription,
      es: legalHub.es.appDescription,
    },
    docDescriptions,
  },
  nulev: {
    name: "NuLev",
    icon: "/assets/nulev-icon.png",
    hubDescriptions: {
      pt: "Política de privacidade, termos de uso, suporte e instruções de exclusão de conta para a plataforma e app mobile.",
      en: "Privacy policy, terms of use, support, and account deletion instructions for the platform and mobile app.",
      es: "Política de privacidad, términos de uso, soporte e instrucciones para eliminar cuenta de la plataforma y app móvil.",
    },
    docDescriptions: nulevDocDescriptions,
  },
};

const productDocs = {
  "recibo-facil": docs,
  nulev: nulevDocs,
};

function productBasePath(locale, productKey) {
  return `${locales[locale].legalPath}${productKey}`;
}

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

function head({ title, description, alternates = "", icon = "/assets/recibo-facil-icon.png" }) {
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <meta name="description" content="${description}">
    ${alternates}
    <link rel="icon" href="${icon}">
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

function page({ locale = "pt", title, description, body, alternates = "", icon = "/assets/recibo-facil-icon.png" }) {
  return `<!doctype html>
<html lang="${locales[locale].htmlLang}">
  <head>
    ${head({ title, description, alternates, icon })}
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
              <span class="visual-label">Produtos ativos</span>
              <strong>Recibo Fácil MEI · NuLev</strong>
              <span>Apps, APIs, documentos legais, suporte</span>
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
          <div class="app-stack">
            <article class="app-card">
              <img src="/assets/recibo-facil-icon.png" alt="">
              <div>
                <h3>Recibo Fácil MEI</h3>
                <p>Aplicativo para criação, armazenamento e compartilhamento de recibos de pagamento.</p>
                <a href="/legal/recibo-facil/privacy/">Ver documentos legais</a>
              </div>
            </article>
            <article class="app-card">
              <img src="/assets/nulev-icon.png" alt="">
              <div>
                <h3>NuLev</h3>
                <p>Plataforma e app mobile para acompanhamento nutricional entre profissionais, clínicas e pacientes.</p>
                <a href="/legal/nulev/privacy/">Ver documentos legais</a>
              </div>
            </article>
          </div>
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
  const productSections = Object.entries(products)
    .map(([productKey, product]) => {
      const basePath = productBasePath(locale, productKey);
      const links = Object.keys(productDocs[productKey])
        .map((docKey) => `<li><a href="${basePath}/${docKey}/">${docLabels[docKey][locale]}<span aria-hidden="true">›</span></a></li>`)
        .join("");

      return `
        <div class="product-summary">
          <img src="${product.icon}" alt="">
          <div>
            <h2>${product.name}</h2>
            <p>${product.hubDescriptions[locale]}</p>
          </div>
        </div>
        <ul class="link-list">${links}</ul>
      `.trim();
    })
    .join("\n          ");
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
          ${productSections}
        </section>
      </main>
    `,
  });
}

function langAlternates(productKey, docKey, locale) {
  return `<nav class="language-switcher" aria-label="${locales[locale].languageLabel}">
    ${Object.entries(locales)
      .map(([key, meta]) => `<a href="${productBasePath(key, productKey)}/${docKey}/" hreflang="${meta.htmlLang}"${key === locale ? " aria-current=\"true\"" : ""}>${meta.label}</a>`)
      .join("")}
  </nav>`;
}

function docPage(locale, productKey, docKey) {
  const product = products[productKey];
  const title = docLabels[docKey][locale];
  const alternates = Object.entries(locales)
    .map(([alternateLocale, item]) => `<link rel="alternate" hreflang="${item.htmlLang}" href="${productBasePath(alternateLocale, productKey)}/${docKey}/">`)
    .join("\n    ");

  return page({
    locale,
    title: `${title} | ${product.name}`,
    description: product.docDescriptions[docKey][locale],
    alternates,
    icon: product.icon,
    body: `
      <main class="page">
        <article class="document">
          <div class="doc-topline">
            <p class="section-label">${product.name}</p>
            ${langAlternates(productKey, docKey, locale)}
          </div>
          <h1>${title}</h1>
          ${productDocs[productKey][docKey][locale]}
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

for (const [productKey, productDocSet] of Object.entries(productDocs)) {
  for (const docKey of Object.keys(productDocSet)) {
    write(`legal/${productKey}/${docKey}/index.html`, docPage("pt", productKey, docKey));
    write(`legal/en/${productKey}/${docKey}/index.html`, docPage("en", productKey, docKey));
    write(`legal/es/${productKey}/${docKey}/index.html`, docPage("es", productKey, docKey));
  }
}
