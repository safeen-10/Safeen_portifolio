document.addEventListener('DOMContentLoaded', () => {
    // --- Translations ---
    const translations = {
        en: {
            nav_about: "About",
            nav_experience: "Experience",
            nav_achievements: "Achievements",
            nav_skills: "Skills",
            nav_contact: "Contact",
            nav_hire: "Hire Me",
            hero_badge: "Finance & Operations Professional",
            hero_name: "Safeen Hussein",
            hero_title: "Finance & Operations Coordinator | Banking & Client Experience",
            hero_intro: "I help organizations improve financial accuracy, optimize operations, and make data-driven decisions.",
            hero_btn_exp: "View Experience",
            hero_btn_contact: "Contact Me",
            about_header: "About Me",
            about_intro: "I am a finance professional with experience in logistics, banking, and accounting environments. I specialize in financial analysis, operational efficiency, and resolving financial discrepancies.",
            about_item1: "Financial Accuracy",
            about_item2: "Process Optimization",
            about_item3: "Data-Driven Strategy",
            exp_header: "Experience",
            exp1_title: "Finance & Logistics Coordinator",
            exp1_company: "Lezzoo",
            exp1_l1: "Managed payroll for 2,000+ drivers",
            exp1_l2: "Financial analysis and reporting",
            exp1_l3: "Solved financial discrepancies",
            exp2_title: "Customer Service Officer / Credit Coordinator",
            exp2_company: "RT Bank",
            exp2_l1: "KYC & AML compliance",
            exp2_l2: "Loans and financial services",
            exp2_l3: "Customer issue resolution",
            exp3_title: "Warehouse Accountant",
            exp3_company: "Chinar Company",
            exp3_l1: "Automated reporting using Excel",
            exp3_l2: "Reduced reporting time from 2h to 30m",
            exp3_l3: "Led a team of accounting professionals",
            ach_header: "Key Achievements",
            ach_p1: "Reduced cost (IQD)",
            ach_p2: "Time saved via automation",
            ach_p3: "Payroll errors resolved",
            ach_p4: "Improved reporting efficiency",
            skills_header: "Skills",
            skills_tech: "Technical Skills",
            skill_t1: "Excel",
            skill_t2: "Financial Analysis",
            skill_t3: "Data Reporting",
            skill_t4: "SAP",
            skill_t5: "Banking Systems",
            skills_soft: "Soft Skills",
            skill_s1: "Problem Solving",
            skill_s2: "Communication",
            skill_s3: "Attention to Detail",
            skill_s4: "Time Management",
            contact_header: "Get In Touch",
            contact_intro: "I am available for new opportunities and collaborations. Feel free to reach out!",
            contact_cv: "Download CV",
            form_name: "Name",
            form_name_ph: "Your Name",
            form_email: "Email",
            form_email_ph: "Your Email",
            form_message: "Message",
            form_message_ph: "Your Message",
            form_submit: "Send Message",
            footer_copy: "© 2026 Safeen Hussein. All rights reserved."
        },
        ar: {
            nav_about: "من أنا",
            nav_experience: "الخبرة",
            nav_achievements: "الإنجازات",
            nav_skills: "المهارات",
            nav_contact: "اتصل بي",
            nav_hire: "وظفني",
            hero_badge: "خبير في المالية والعمليات",
            hero_name: "سفين حسين",
            hero_title: "منسق الشؤون المالية والعمليات | الخدمات المصرفية وتجربة العملاء",
            hero_intro: "أساعد المؤسسات على تحسين الدقة المالية، وتحسين العمليات، واتخاذ قرارات قائمة على البيانات.",
            hero_btn_exp: "عرض الخبرات",
            hero_btn_contact: "اتصل بي",
            about_header: "من أنا",
            about_intro: "أنا محترف مالي ذو خبرة في بيئات الخدمات اللوجستية والمصرفية والمحاسبية. أتخصص في التحليل المالي والكفاءة التشغيلية وحل التناقضات المالية.",
            about_item1: "الدقة المالية",
            about_item2: "تحسين العمليات",
            about_item3: "استراتيجية قائمة على البيانات",
            exp_header: "الخبرة العملية",
            exp1_title: "منسق الشؤون المالية والخدمات اللوجستية",
            exp1_company: "ليزو (Lezzoo)",
            exp1_l1: "إدارة كشوف المرتبات لأكثر من 2000 سائق",
            exp1_l2: "التحليل المالي والتقارير",
            exp1_l3: "حل التناقضات المالية",
            exp2_title: "مسؤول خدمة العملاء / منسق الائتمان",
            exp2_company: "مصرف آر تي (RT Bank)",
            exp2_l1: "الالتزام بمعايير KYC و AML",
            exp2_l2: "القروض والخدمات المالية",
            exp2_l3: "حل مشكلات العملاء",
            exp3_title: "محاسب مستودع",
            exp3_company: "شركة چنار",
            exp3_l1: "أتمتة التقارير باستخدام برنامج إكسل",
            exp3_l2: "تقليل وقت إعداد التقارير من ساعتين إلى 30 دقيقة",
            exp3_l3: "قيادة فريق من المحاسبين المحترفين",
            ach_header: "أبرز الإنجازات",
            ach_p1: "تقليل التكاليف (دينار عراقي)",
            ach_p2: "الوقت الموفر من خلال الأتمتة",
            ach_p3: "حل أخطاء كشوف المرتبات",
            ach_p4: "تحسين كفاءة إعداد التقارير",
            skills_header: "المهارات",
            skills_tech: "المهارات التقنية",
            skill_t1: "إكسل (Excel)",
            skill_t2: "التحليل المالي",
            skill_t3: "تقارير البيانات",
            skill_t4: "نظام ساب (SAP)",
            skill_t5: "الأنظمة المصرفية",
            skills_soft: "المهارات الشخصية",
            skill_s1: "حل المشكلات",
            skill_s2: "التواصل",
            skill_s3: "الدقة والتفاصيل",
            skill_s4: "إدارة الوقت",
            contact_header: "اتصل بي",
            contact_intro: "أنا متاح للفرص والتعاون الجديد. لا تتردد في التواصل معي!",
            contact_cv: "تحميل السيرة الذاتية",
            form_name: "الاسم",
            form_name_ph: "اسمك الكريم",
            form_email: "البريد الإلكتروني",
            form_email_ph: "بريدك الإلكتروني",
            form_message: "الرسالة",
            form_message_ph: "رسالتك هنا",
            form_submit: "إرسال الرسالة",
            footer_copy: "© 2026 سفين حسين. جميع الحقوق محفوظة."
        }
    };

    const languageToggle = document.getElementById('language-toggle');
    const langText = languageToggle.querySelector('.lang-text');
    
    let currentLang = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // If the element has children (like icons), preserve them
                const icon = element.querySelector('i') || element.querySelector('svg');
                if (icon) {
                    element.innerHTML = '';
                    element.appendChild(icon);
                    element.appendChild(document.createTextNode(' ' + translations[lang][key]));
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        langText.textContent = lang === 'en' ? 'AR' : 'EN';
        
        // Update Lucide icons after DOM changes
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    languageToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('language', currentLang);
        updateLanguage(currentLang);
    });

    // Initialize language
    updateLanguage(currentLang);

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    htmlElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // --- Intersection Observer for Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- Sticky Navbar & Active Links ---
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Sticky logic
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = 'var(--shadow)';
        } else {
            navbar.style.padding = '0';
            navbar.style.boxShadow = 'none';
        }

        // Active link logic
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (current && link.getAttribute('href') === `#${current}`) {
                link.classList.add('nav-active');
            }
        });
    });

    // --- Mobile Menu (Simple toggle) ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksList = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        alert('Mobile menu functionality would be added here for a full production site!');
    });

    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Contact Form Handling ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const subject = encodeURIComponent(`Portfolio Message from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            // Construct mailto link
            const mailtoLink = `mailto:Safeen.hussein@hotmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form
            contactForm.reset();
        });
    }
});
