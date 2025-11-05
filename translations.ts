import type { Language, MultilingualString, RawNavLink } from "./types";

export const translations = {
    // Header
    headerTitle: { fr: "E. Dubois | Portfolio IA", en: "E. Dubois | AI Portfolio", ar: "إ. دوبوا | ملف الذكاء الاصطناعي" },

    // Section Titles
    home: { fr: "Accueil", en: "Home", ar: "الرئيسية" },
    news: { fr: "Actualités", en: "News", ar: "الأخبار" },
    gallery: { fr: "Galerie", en: "Gallery", ar: "المعرض" },
    testimonials: { fr: "Témoignages", en: "Testimonials", ar: "الشهادات" },
    academicActivities: { fr: "Aperçu des Activités Académiques", en: "Overview of Academic Activities", ar: "نظرة عامة على الأنشطة الأكاديمية" },
    cv: { fr: "Curriculum Vitae", en: "Curriculum Vitae", ar: "السيرة الذاتية" },
    research: { fr: "Recherches", en: "Research", ar: "الأبحاث" },
    publications: { fr: "Publications", en: "Publications", ar: "المنشورات" },
    teaching: { fr: "Enseignements", en: "Teaching", ar: "التدريس" },
    contact: { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
    newsletterTitle: { fr: "Newsletter", en: "Newsletter", ar: "النشرة الإخبارية" },
    resourcesAndLinks: { fr: "Ressources & Liens", en: "Resources & Links", ar: "الموارد والروابط" },
    mediaAndInterventions: { fr: "Médias & Interventions", en: "Media & Interventions", ar: "الإعلام والمداخلات" },
    // Fix: Add missing translation for Tasks page title.
    tasks: { fr: "Tâches", en: "Tasks", ar: "المهام" },

    // Home Page
    heroSubtitle: { fr: "Maître de conférences en IA | Université de la Sorbonne", en: "Lecturer in AI | Sorbonne University", ar: "محاضرة في الذكاء الاصطناعي | جامعة السوربون" },
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
    backToHome: { fr: "Retour à l'accueil", en: "Back to Home", ar: "العودة إلى الرئيسية" },
    sendMessage: { fr: "Envoyer le Message", en: "Send Message", ar: "إرسال الرسالة" },
    downloadCV: { fr: "Télécharger mon CV (PDF)", en: "Download My CV (PDF)", ar: "تحميل سيرتي الذاتية (PDF)" },
    closeModal: { fr: "Fermer la modale", en: "Close modal", ar: "إغلاق النافذة" },
    viewAll: { fr: "Voir tout", en: "View All", ar: "عرض الكل" },
    accessResource: { fr: "Accéder", en: "Access", ar: "وصول" },
    viewMedia: { fr: "Voir / Écouter", en: "View / Listen", ar: "شاهد / استمع" },
    cancel: { fr: "Annuler", en: "Cancel", ar: "إلغاء" },
    delete: { fr: "Supprimer", en: "Delete", ar: "حذف" },
    // Fix: Add missing translation for Add Task button.
    addTask: { fr: "Ajouter Tâche", en: "Add Task", ar: "إضافة مهمة" },

    // Form & Modal
    contactForm: { fr: "Formulaire de Contact", en: "Contact Form", ar: "نموذج الاتصال" },
    name: { fr: "Nom", en: "Name", ar: "الاسم" },
    email: { fr: "Email", en: "Email", ar: "البريد الإلكتروني" },
    message: { fr: "Message", en: "Message", ar: "الرسالة" },
    formSuccess: { fr: "Merci pour votre message !", en: "Thank you for your message!", ar: "شكرا لرسالتك!" },
    // Fix: Add missing translations for delete task confirmation modal.
    deleteTaskTitle: { fr: "Supprimer la Tâche", en: "Delete Task", ar: "حذف المهمة" },
    deleteTaskMessage: { fr: "Êtes-vous sûr de vouloir supprimer cette tâche?", en: "Are you sure you want to delete this task?", ar: "هل أنت متأكد أنك تريد حذف هذه المهمة؟" },


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

    // Detail Pages
    abstract: { fr: "Résumé", en: "Abstract", ar: "الملخص" },
    content: { fr: "Contenu", en: "Content", ar: "المحتوى" },
    publishedIn: { fr: "Publié dans :", en: "Published in:", ar: "نشر في:" },
    fullDescription: { fr: "Description Complète", en: "Full Description", ar: "الوصف الكامل" },
    outcomes: { fr: "Résultats et Contributions", en: "Outcomes and Contributions", ar: "النتائج والمساهمات" },
    courseObjectives: { fr: "Objectifs du Cours", en: "Course Objectives", ar: "أهداف المقرر" },
    syllabus: { fr: "Plan de Cours (Syllabus)", en: "Course Plan (Syllabus)", ar: "خطة المقرر (المنهج)" },
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
    // Fix: Add missing translation for new task placeholder.
    newTaskPlaceholder: { fr: "Ajouter une nouvelle tâche...", en: "Add a new task...", ar: "إضافة مهمة جديدة..." },
    filterByYear: { fr: "Filtrer par année", en: "Filter by year", ar: "تصفية حسب السنة" },
    filterByType: { fr: "Filtrer par type", en: "Filter by type", ar: "تصفية حسب النوع" },
    filterByLevel: { fr: "Filtrer par niveau", en: "Filter by level", ar: "تصفية حسب المستوى" },
    noResults: { fr: "Aucun résultat trouvé.", en: "No results found.", ar: "لم يتم العثور على نتائج." },
    resetFilters: { fr: "Réinitialiser", en: "Reset", ar: "إعادة تعيين" },
    
    // Admin Panel
    admin: {
        title: { fr: "Panneau d'Administration", en: "Admin Panel", ar: "لوحة التحكم" },
        loginPrompt: { fr: "Veuillez entrer le mot de passe administrateur :", en: "Please enter the admin password:", ar: "الرجاء إدخال كلمة مرور المسؤول:" },
        wrongPassword: { fr: "Mot de passe incorrect.", en: "Incorrect password.", ar: "كلمة المرور غير صحيحة." },
        edit: { fr: "Modifier", en: "Edit", ar: "تعديل" },
        delete: { fr: "Supprimer", en: "Delete", ar: "حذف" },
        addNew: { fr: "Ajouter un nouvel élément", en: "Add New Item", ar: "إضافة عنصر جديد" },
        save: { fr: "Sauvegarder", en: "Save", ar: "حفظ" },
        cancel: { fr: "Annuler", en: "Cancel", ar: "إلغاء" },
        editItem: { fr: "Modifier l'élément", en: "Edit Item", ar: "تعديل العنصر" },
        addItem: { fr: "Ajouter un élément", en: "Add Item", ar: "إضافة عنصر" },
        deleteConfirmation: { fr: "Êtes-vous sûr de vouloir supprimer cet élément ?", en: "Are you sure you want to delete this item?", ar: "هل أنت متأكد أنك تريد حذف هذا العنصر؟" },
        deleteTitle: { fr: "Confirmer la suppression", en: "Confirm Deletion", ar: "تأكيد الحذف" },
    },
    
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