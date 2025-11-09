import type { Language, MultilingualString, RawNavLink } from "./types";

export const translations = {
    // Section Titles
    home: { fr: "Accueil", en: "Home", ar: "الرئيسية" },
    news: { fr: "Actualités", en: "News", ar: "الأخبار" },
    gallery: { fr: "Galerie", en: "Gallery", ar: "المعرض" },
    messages: { fr: "Messages", en: "Messages", ar: "الرسائل" },
    testimonials: { fr: "Témoignages", en: "Testimonials", ar: "الشهادات" },
    academicActivities: { fr: "Aperçu des Activités Académiques", en: "Overview of Academic Activities", ar: "نظرة عامة على الأنشطة الأكاديمية" },
    cv: { fr: "Curriculum Vitae", en: "Curriculum Vitae", ar: "السيرة الذاتية" },
    research: { fr: "Recherches", en: "Research", ar: "الأبحاث" },
    publications: { fr: "Publications", en: "Publications", ar: "المنشورات" },
    teaching: { fr: "Enseignements", en: "Teaching", ar: "التدريس" },
    contact: { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
    phone: { fr: "Téléphone", en: "Phone", ar: "الهاتف" },
    office: { fr: "Bureau", en: "Office", ar: "المكتب" },
    newsletterTitle: { fr: "Newsletter", en: "Newsletter", ar: "النشرة الإخبارية" },
    newsletterSubscribers: { fr: "Abonnés Newsletter", en: "Newsletter Subscribers", ar: "مشتركو النشرة الإخبارية" },
    resourcesAndLinks: { fr: "Ressources & Liens", en: "Resources & Links", ar: "الموارد والروابط" },
    mediaAndInterventions: { fr: "Médias & Interventions", en: "Media & Interventions", ar: "الإعلام والمداخلات" },

    // Home Page
    myMission: { fr: "Ma Mission", en: "My Mission", ar: "مهمتي" },
    missionText: { fr: `"Repousser les frontières de l'IA pour créer des systèmes plus intelligents, éthiques et bénéfiques pour la société."`, en: `"Pushing the boundaries of AI to create more intelligent, ethical, and beneficial systems for society."`, ar: `"دفع حدود الذكاء الاصطناعي لإنشاء أنظمة أكثر ذكاءً وأخلاقية وفائدة للمجتمع."` },
    latestWorks: { fr: "Derniers Travaux", en: "Latest Works", ar: "أحدث الأعمال" },
    exploreMyWork: { fr: "Explorer mes travaux", en: "Explore my work", ar: "اكتشف أعمالي" },

    // Buttons & Actions
    readMore: { fr: "Lire plus", en: "Read More", ar: "اقرأ المزيد" },
    download: { fr: "Télécharger", en: "Download", ar: "تحميل" },
    all: { fr: "Tous", en: "All", ar: "الكل" },
    backToPublications: { fr: "Retour aux publications", en: "Back to publications", ar: "العودة إلى المنشورات" },
    backToProjects: { fr: "Retour aux projets", en: "Back to projects", ar: "العودة إلى المشاريع" },
    backToCourses: { fr: "Retour aux enseignements", en: "Back to courses", ar: "العودة إلى المقررات" },
    backToSupervisions: { fr: "Retour aux encadrements", en: "Back to supervisions", ar: "العودة إلى الإشراف" },
    backToHome: { fr: "Retour à l'accueil", en: "Back to Home", ar: "العودة إلى الرئيسية" },
    sendMessage: { fr: "Envoyer le Message", en: "Send Message", ar: "إرسال الرسالة" },
    downloadCV: { fr: "Télécharger mon CV (PDF)", en: "Download My CV (PDF)", ar: "تحميل سيرتي الذاتية (PDF)" },
    closeModal: { fr: "Fermer la modale", en: "Close modal", ar: "إغلاق النافذة" },
    viewAll: { fr: "Voir tout", en: "View All", ar: "عرض الكل" },
    accessResource: { fr: "Accéder", en: "Access", ar: "وصول" },
    viewMedia: { fr: "Voir / Écouter", en: "View / Listen", ar: "شاهد / استمع" },
    cancel: { fr: "Annuler", en: "Cancel", ar: "إلغاء" },
    delete: { fr: "Supprimer", en: "Delete", ar: "حذف" },

    // Form & Modal
    contactForm: { fr: "Formulaire de Contact", en: "Contact Form", ar: "نموذج الاتصال" },
    name: { fr: "Nom", en: "Name", ar: "الاسم" },
    email: { fr: "Email", en: "Email", ar: "البريد الإلكتروني" },
    message: { fr: "Message", en: "Message", ar: "الرسالة" },
    formSuccess: { fr: "Merci pour votre message !", en: "Thank you for your message!", ar: "شكرا لرسالتك!" },

    // CV Section
    education: { fr: "Formation", en: "Education", ar: "التعليم" },
    experience: { fr: "Expériences", en: "Experience", ar: "الخبرة" },
    projects: { fr: "Projets", en: "Projects", ar: "المشاريع" },
    awards: { fr: "Distinctions", en: "Awards", ar: "الجوائز" },
    skills: { fr: "Compétences", en: "Skills", ar: "المهارات" },

    // Research Section
    researchDomains: { fr: "Domaines de Recherche", en: "Research Areas", ar: "مجالات البحث" },
    researchProjects: { fr: "Projets de Recherche", en: "Research Projects", ar: "مشاريع البحث" },
    
    // Teaching Section
    taughtCourses: { fr: "Cours Enseignés", en: "Taught Courses", ar: "المقررات التي تم تدريسها" },
    supervisions: { fr: "Encadrements", en: "Supervisions", ar: "الإشراف" },
    pedagogicalMethods: { fr: "Méthodes Pédagogiques", en: "Pedagogical Methods", ar: "الأساليب التربوية" },
    
    // Contact Page
    coordinates: { fr: "Coordonnées", en: "Coordinates", ar: "معلومات الاتصال" },
    socialAndAcademicNetworks: { fr: "Réseaux Sociaux & Académiques", en: "Social & Academic Networks", ar: "الشبكات الاجتماعية والأكاديمية" },
    
    // Footer
    universityName: { fr: "Université de la Sorbonne", en: "Sorbonne University", ar: "جامعة السوربون" },
    usefulLinks: { fr: "Liens Utiles", en: "Useful Links", ar: "روابط مفيدة" },
    universityLinks: { fr: "Liens Universitaires", en: "University Links", ar: "روابط جامعية" },
    followMe: { fr: "Suivez-moi", en: "Follow Me", ar: "تابعني" },
    copyright: { fr: "Tous droits réservés.", en: "All rights reserved.", ar: "كل الحقوق محفوظة." },
    webmail: { fr: "Webmail", en: "Webmail", ar: "ويب ميل" },

    // Detail Pages
    abstract: { fr: "Résumé", en: "Abstract", ar: "الملخص" },
    content: { fr: "Contenu", en: "Content", ar: "المحتوى" },
    publishedIn: { fr: "Publié dans :", en: "Published in:", ar: "نشر في:" },
    fullDescription: { fr: "Description Complète", en: "Full Description", ar: "الوصف الكامل" },
    outcomes: { fr: "Résultats et Contributions", en: "Outcomes and Contributions", ar: "النتائج والمساهمات" },
    courseObjectives: { fr: "Objectifs du Cours", en: "Course Objectives", ar: "أهداف المقرر" },
    syllabus: { fr: "Plan de Cours (Syllabus)", en: "Course Plan (Syllabus)", ar: "خطة المقرر (المنهج)" },
    student: { fr: "Étudiant(e)", en: "Student", ar: "الطالب/الطالبة" },
    supervisionDetails: { fr: "Détails de l'encadrement", en: "Supervision Details", ar: "تفاصيل الإشراف" },
    associatedProject: { fr: "Projet Associé", en: "Associated Project", ar: "المشروع المرتبط" },
    associatedPublications: { fr: "Publications Associées", en: "Associated Publications", ar: "المنشورات المرتبطة" },
    viewPublication: { fr: "Voir la publication", en: "View Publication", ar: "عرض المنشور" },
    viewProject: { fr: "Voir le projet", en: "View Project", ar: "عرض المشروع" },

    // Newsletter Section
    newsletter: {
        title: { fr: "S'inscrire à la Newsletter", en: "Subscribe to the Newsletter", ar: "اشترك في النشرة الإخبارية" },
        description: { fr: "Recevez les dernières actualités et publications directement dans votre boîte de réception.", en: "Receive the latest news and publications directly in your inbox.", ar: "استقبل آخر الأخبار والمنشورات مباشرة في بريدك الوارد." },
        placeholder: { fr: "Votre adresse e-mail", en: "Your email address", ar: "عنوان بريدك الإلكتروني" },
        button: { fr: "S'abonner", en: "Subscribe", ar: "اشتراك" },
        successTitle: { fr: "Merci !", en: "Thank you!", ar: "شكراً لك!" },
        successMessage: { fr: "Vous avez bien été inscrit(e) à notre newsletter.", en: "You have been successfully subscribed to our newsletter.", ar: "لقد تم اشتراكك بنجاح في نشرتنا الإخبارية." },
    },
    
    // Gallery Section
    galleryCategories: {
        all: { fr: "Tous", en: "All", ar: "الكل" },
        research: { fr: "Recherche", en: "Research", ar: "بحث" },
        conference: { fr: "Conférences", en: "Conferences", ar: "مؤتمرات" },
        teaching: { fr: "Enseignement", en: "Teaching", ar: "تدريس" },
        lab: { fr: "Laboratoire", en: "Lab", ar: "مختبر" },
    },

    // Chatbot
    chatbot: {
        title: { fr: "Assistant IA", en: "AI Assistant", ar: "مساعد الذكاء الاصطناعي" },
        greeting: { fr: "Bonjour ! Comment puis-je vous aider à propos du Dr. Dubois ?", en: "Hello! How can I help you regarding Dr. Dubois?", ar: "مرحباً! كيف يمكنني مساعدتك بخصوص الدكتورة دوبوا؟" },
        placeholder: { fr: "Posez votre question...", en: "Ask your question...", ar: "اطرح سؤالك..." }
    },

    // Search & Filter
    searchPlaceholder: { fr: "Rechercher par mot-clé...", en: "Search by keyword...", ar: "ابحث بالكلمة المفتاحية..." },
    filterByYear: { fr: "Filtrer par année", en: "Filter by year", ar: "تصفية حسب السنة" },
    filterByType: { fr: "Filtrer par type", en: "Filter by type", ar: "تصفية حسب النوع" },
    filterByLevel: { fr: "Filtrer par niveau", en: "Filter by level", ar: "تصفية حسب المستوى" },
    noResults: { fr: "Aucun résultat trouvé.", en: "No results found.", ar: "لم يتم العثور على نتائج." },
    resetFilters: { fr: "Réinitialiser", en: "Reset", ar: "إعادة تعيين" },
    
    // Admin Panel
    admin: {
        title: { fr: "Nexus", en: "Nexus", ar: "Nexus" },
        loginTitle: { fr: "Connexion Nexus", en: "Nexus Login", ar: "تسجيل الدخول إلى Nexus" },
        loginButton: { fr: "Se connecter", en: "Login", ar: "تسجيل الدخول" },
        logoutButton: { fr: "Se déconnecter", en: "Logout", ar: "تسجيل الخروج" },
        loginFailed: { fr: "Email ou mot de passe incorrect.", en: "Incorrect email or password.", ar: "البريد الإلكتروني أو كلمة المرور غير صحيحة." },
        password: { fr: "Mot de passe", en: "Password", ar: "كلمة المرور" },
        edit: { fr: "Modifier", en: "Edit", ar: "تعديل" },
        delete: { fr: "Supprimer", en: "Delete", ar: "حذف" },
        addNew: { fr: "Ajouter", en: "Add New", ar: "إضافة جديد" },
        save: { fr: "Sauvegarder", en: "Save", ar: "حفظ" },
        cancel: { fr: "Annuler", en: "Cancel", ar: "إلغاء" },
        editItem: { fr: "Modifier l'élément", en: "Edit Item", ar: "تعديل العنصر" },
        addItem: { fr: "Ajouter un élément", en: "Add Item", ar: "إضافة عنصر" },
        deleteConfirmation: { fr: "Êtes-vous sûr de vouloir supprimer cet élément ?", en: "Are you sure you want to delete this item?", ar: "هل أنت متأكد أنك تريد حذف هذا العنصر؟" },
        deleteTitle: { fr: "Confirmer la suppression", en: "Confirm Deletion", ar: "تأكيد الحذف" },
        cvEducation: { fr: "CV - Formation", en: "CV - Education", ar: "السيرة الذاتية - التعليم" },
        cvExperience: { fr: "CV - Expériences", en: "CV - Experience", ar: "السيرة الذاتية - الخبرة" },
        cvProjects: { fr: "CV - Projets", en: "CV - Projects", ar: "السيرة الذاتية - المشاريع" },
        cvAwards: { fr: "CV - Distinctions", en: "CV - Awards", ar: "السيرة الذاتية - الجوائز" },
        cvSkills: { fr: "CV - Compétences", en: "CV - Skills", ar: "السيرة الذاتية - المهارات" },
        uploadImage: { fr: "Téléverser une image", en: "Upload an image", ar: "تحميل صورة" },
        uploadFile: { fr: "Téléverser un fichier", en: "Upload a file", ar: "تحميل ملف" },
        change: { fr: "Changer", en: "Change", ar: "تغيير" },
        currentFile: { fr: "Fichier actuel", en: "Current file", ar: "الملف الحالي" },
        browse: { fr: "Parcourir...", en: "Browse...", ar: "تصفح..." },
        siteSettings: { fr: "Paramètres du Site", en: "Site Settings", ar: "إعدادات الموقع" },
        headerTitleLabel: { fr: "Titre de l'en-tête", en: "Header Title", ar: "عنوان الترويسة" },
        authorNameLabel: { fr: "Nom de l'auteur", en: "Author Name", ar: "اسم المؤلف" },
        heroSubtitleLabel: { fr: "Sous-titre de la page d'accueil", en: "Home Page Subtitle", ar: "العنوان الفرعي للصفحة الرئيسية" },
        profilePicLabel: { fr: "Photo de profil", en: "Profile Picture", ar: "الصورة الشخصية" },
        contactEmailLabel: { fr: "Email de contact", en: "Contact Email", ar: "البريد الإلكتروني للتواصل" },
        contactPhoneLabel: { fr: "Téléphone de contact", en: "Contact Phone", ar: "هاتف التواصل" },
        contactOfficeLabel: { fr: "Bureau", en: "Office", ar: "المكتب" },
        socialLinksTitle: { fr: "Liens des réseaux sociaux", en: "Social Network Links", ar: "روابط الشبكات الاجتماعية" },
        linkedinUrl: { fr: "URL LinkedIn", en: "LinkedIn URL", ar: "رابط لينكد إن" },
        googleScholarUrl: { fr: "URL Google Scholar", en: "Google Scholar URL", ar: "رابط جوجل سكولار" },
        twitterUrl: { fr: "URL Twitter", en: "Twitter URL", ar: "رابط تويتر" },
        githubUrl: { fr: "URL GitHub", en: "GitHub URL", ar: "رابط جيت هب" },
        researchGateUrl: { fr: "URL ResearchGate", en: "ResearchGate URL", ar: "رابط ريسيرش جيت" },
        saveSettings: { fr: "Sauvegarder les paramètres", en: "Save Settings", ar: "حفظ الإعدادات" },
        settingsSaved: { fr: "Paramètres sauvegardés !", en: "Settings saved!", ar: "تم حفظ الإعدادات!" },
        webmailLink: { fr: "Accès Webmail", en: "Webmail Access", ar: "الوصول إلى البريد الإلكتروني" },
        userManagement: { fr: "Gestion des Utilisateurs", en: "User Management", ar: "إدارة المستخدمين" },
        addUser: { fr: "Ajouter un utilisateur", en: "Add User", ar: "إضافة مستخدم" },
        editUser: { fr: "Modifier l'utilisateur", en: "Edit User", ar: "تعديل المستخدم" },
        deleteUserTitle: { fr: "Supprimer l'utilisateur", en: "Delete User", ar: "حذف المستخدم" },
        deleteUserMessage: { fr: "Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.", en: "Are you sure you want to delete this user? This action is irreversible.", ar: "هل أنت متأكد أنك تريد حذف هذا المستخدم؟ هذا الإجراء لا يمكن التراجع عنه." },
        role: { fr: "Rôle", en: "Role", ar: "الدور" },
        user: { fr: "Utilisateur", en: "User", ar: "مستخدم" },
        adminRole: { fr: "Admin", en: "Admin", ar: "مدير" },
        actions: { fr: "Actions", en: "Actions", ar: "الإجراءات" },
        cannotDeleteAdmin: { fr: "Impossible de supprimer le compte administrateur principal.", en: "Cannot delete the main administrator account.", ar: "لا يمكن حذف حساب المسؤول الرئيسي." },
        passwordOptional: { fr: "Laissez vide pour ne pas changer", en: "Leave blank to keep unchanged", ar: "اتركه فارغاً لعدم التغيير" },
        adminGroups: {
            mainContent: { fr: "Contenu Principal", en: "Main Content", ar: "المحتوى الرئيسي" },
            teachingActivities: { fr: "Activités Pédagogiques", en: "Teaching Activities", ar: "الأنشطة التعليمية" },
            cvManagement: { fr: "Gestion du CV", en: "CV Management", ar: "إدارة السيرة الذاتية" },
            additionalContent: { fr: "Contenu Additionnel", en: "Additional Content", ar: "محتوى إضافي" },
            siteManagement: { fr: "Gestion du Site", en: "Site Management", ar: "إدارة الموقع" },
        }
    },
    
    // Tasks Page
    tasks: { fr: "Tâches", en: "Tasks", ar: "المهام" },
    newTaskPlaceholder: { fr: "Ajouter une nouvelle tâche", en: "Add a new task", ar: "إضافة مهمة جديدة" },
    addTask: { fr: "Ajouter la tâche", en: "Add Task", ar: "إضافة مهمة" },
    deleteTaskTitle: { fr: "Supprimer la tâche", en: "Delete Task", ar: "حذف المهمة" },
    deleteTaskMessage: { fr: "Êtes-vous sûr de vouloir supprimer cette tâche ?", en: "Are you sure you want to delete this task?", ar: "هل أنت متأكد من حذف هذه المهمة؟" },

    // Nav Links - Keep last
    navLinks: [
        { name: { fr: "Accueil", en: "Home", ar: "الرئيسية" }, page: 'Accueil' },
        { name: { fr: "Actualités", en: "News", ar: "الأخبار" }, page: 'Actualités' },
        { name: { fr: "CV", en: "CV", ar: "السيرة الذاتية" }, page: 'CV' },
        { name: { fr: "Publications", en: "Publications", ar: "المنشورات" }, page: 'Publications' },
        {
            name: { fr: "Activités Académiques", en: "Academic Activities", ar: "الأنشطة الأكاديمية" },
            subLinks: [
                { name: { fr: "Recherches", en: "Research", ar: "الأبحاث" }, page: 'Recherches' },
                { name: { fr: "Enseignements", en: "Teaching", ar: "التدريس" }, page: 'Enseignements' },
                { name: { fr: "Encadrements", en: "Supervisions", ar: "الإشراف" }, page: 'Encadrements' },
            ],
        },
        { name: { fr: "Contact", en: "Contact", ar: "اتصل بنا" }, page: 'Contact' },
    ] as RawNavLink[],
};