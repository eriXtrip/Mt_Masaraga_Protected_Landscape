// resources/js/mockData.js
import { CircleCheck, TriangleAlert, Receipt, ShieldCheck, Cloud, RotateCcw, FileText, CreditCard, Mountain, CloudLightning, ShieldAlert, Users, Wallet, QrCode, Building2, Map, Phone, Leaf } from 'lucide-react';


import SabluyonRoute from '../../public/images/trail/SabluyonTrail.jpg';
import BalogoRoute from '../../public/images/trail/BalogoTrail.jpg';
import QR from '../../public/images/QR_Code_Example.svg.webp';
import mtMasaragaSummit from '../../public/images/about/mt-masaraga-summit.jpg';
import mtMasaragaCampsite from '../../public/images/about/mt-masaraga-campsite-3.jpg';
import mtMasaragaVanishingFalls from '../../public/images/about/mt-masaraga-vanishing-falls.jpg';
import mtMasaragaNaturalSpring from '../../public/images/about/mt-masaraga-natural-springs-trail.jpg';

// Sample Mock Database / Credentials List
export const MOCK_USERS = [
    {
        id: 'user_admin',
        name: 'Juan Dela Cruz',
        email: 'admin@masaraga.gov.ph',
        role: 1, // Role 1: Admin
        subtitle: 'System Administrator',
    },
    {
        id: 'user_staff',
        name: 'Maria Santos',
        email: 'staff@masaraga.gov.ph',
        role: 2, // Role 2: Hiker Staff / Guide
        subtitle: 'Park Staff / Guide',
    },
    {
        id: 'user_hiker',
        name: 'Jane Doe',
        email: 'hiker@example.com',
        role: 3, // Role 3: User Hiker
        subtitle: 'Lead Hiker',
    },
];

export const AWARDS = [
    {
        icon: 'workspace_premium',
        name: 'DENR-PAMB Recognition',
        description:
            'Awarded for outstanding management of protected landscapes in the Bicol Region (2023).',
    },
    {
        icon: 'eco',
        name: 'Eco-Tourism Excellence',
        description:
            'Certified Sustainable Destination by the National Ecotourism Steering Committee.',
    },
    {
        icon: 'verified_user',
        name: 'ISO 14001 Certified',
        description:
            'International standard for effective environmental management systems.',
    },
];

export const ICON_PATHS = {
    workspace_premium: 'M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z',
    eco: 'M22 5v2h-3v3h-2V7h-3V5h3V2h2v3h3zm-6.5 7.5C16 15 14 17 10.5 17 8 17 5 14 5 11.5 5 8 7 6 9.5 6c3.5 0 5 3.5 6 6.5zM2 22c0-5 3-8.5 8-10.5C6 13 4 16 2 22z',
    verified_user: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
};

export const EXPERIENCES = [
    {
        initials: 'ES',
        name: 'Elena Santos',
        quote:
            'The summit view was breathtaking! A challenging climb but the panoramic views of Bicol are worth every step.',
        rating: 4.5,
    },
    {
        initials: 'MC',
        name: 'Marcus Chen',
        quote:
            'Well-maintained trails and friendly guides. The permit process was smooth and the safety briefing was very thorough.',
        rating: 5,
    },
    {
        initials: 'SJ',
        name: 'Sarah Johnson',
        quote:
            'The Eco-Trail Loop was perfect for my family. My kids loved seeing the rare birds and learning about local plants.',
        rating: 4,
    },
];

export const TRAILS = [
    {
        name: 'Amtic Trail (or Sabluyon Trail)',
        difficulty: 'Major Climb',
        difficultyClass: 'bg-primary-container text-on-primary-container',
        description:
            'This is the most popular, standard route. It begins in Sitio Sabluyon, Barangay Amtic, Ligao City. This trail is home to the famous Mt. Masaraga Campsite and features a grueling, pure uphill assault to the summit.',
        statIcon: 'height',
        stats: ['3-4 Hours', '12.4km'],
        image: SabluyonRoute,
    },
    {
        name: 'Balogo Trail',
        difficulty: 'Major Climb',
        difficultyClass: 'bg-primary text-white',
        description:
            'This is the alternative route that starts near Balogo East Elementary School. Depending on the path mapped out by local guides, it can cross the boundary areas near Oas or Ligao, passing through open fields and residential areas before hitting the steep mountain slopes.',
        statIcon: 'nature',
        stats: ['4-5 Hours', '14km'],
        image: BalogoRoute,
    },
];

export const GALLERY_ITEMS = [
    {
        src: '/images/gallery/morning-mist.jpg',
        alt: "Mt. Masaraga's peak shrouded in soft morning mist",
        caption: 'Morning Mist over Mt. Masaraga',
    },
    {
        src: '/images/gallery/tropical-bird.jpg',
        alt: 'Rare tropical bird in rainforest',
        caption: 'Native Flora & Avian Wildlife',
    },
    {
        src: '/images/gallery/boardwalk.jpg',
        alt: 'Hikers on wooden boardwalk trail',
        caption: 'Protected Canopy Boardwalk',
    },
    {
        src: '/images/gallery/forest-stream.jpg',
        alt: 'Mountain stream with crystal water',
        caption: 'Pristine Forest Streams',
    },
    {
        src: '/images/gallery/sunrise-deck.jpg',
        alt: 'Wooden viewing deck overlooking sea of clouds at sunrise',
        caption: 'Sunrise View Deck & Cloud Sea',
    },
    {
        src: '/images/gallery/cloud-forest.jpg',
        alt: 'Lush green ferns and moss-covered forest',
        caption: 'Ancient Cloud Forest Canopy',
    },
];

export const NEWS = [
    {
        badge: 'ADVISORY',
        badgeClass: 'bg-red-50 text-red-700 border-red-200',
        date: 'Oct 24, 2024',
        title: 'Scheduled Trail Maintenance',
        description:
            'The Eco-Trail Loop will be partially closed for boardwalk repairs from Oct 28-30.',
    },
    {
        badge: 'WEATHER',
        badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
        date: 'Oct 23, 2024',
        title: 'Favorable Climbing Conditions',
        description:
            'Clear skies expected for the weekend. Perfect conditions for the Standard Summit trail.',
    },
    {
        badge: 'UPDATE',
        badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        date: 'Oct 20, 2024',
        title: 'New Online Permit System',
        description:
            'We have upgraded our booking portal for faster processing of climbing permits.',
    },
];

export const TRAIL_EXPERIENCES = [
    {
        id: 1,
        initials: 'ES',
        name: 'Elena Santos',
        quote:
            'The summit view was breathtaking! A challenging climb but the panoramic views of Bicol are worth every step.',
        date: 'Oct 12, 2024',
        rating: 5,
    },
    {
        id: 2,
        initials: 'MC',
        name: 'Marcus Chen',
        quote:
            'Well-maintained trails and friendly guides. The permit process was smooth and the safety briefing was very thorough.',
        date: 'Sep 28, 2024',
        rating: 4,
    },
    {
        id: 3,
        initials: 'SJ',
        name: 'Sarah Johnson',
        quote:
            'The Eco-Trail Loop was perfect for my family. My kids loved seeing the rare birds and learning about local plants.',
        date: 'Sep 15, 2024',
        rating: 5,
    },
    {
        id: 4,
        initials: 'RV',
        name: 'Ramon Valdez',
        quote:
            'Great trail condition overall. Prepare for steep inclines toward the summit. Hydration is key!',
        date: 'Aug 30, 2024',
        rating: 4.5,
    },
    {
        id: 5,
        initials: 'AL',
        name: 'Anna Lopez',
        quote:
            'Highly recommend hiring a guide. Very knowledgeable about local flora and kept our group safe throughout.',
        date: 'Aug 14, 2024',
        rating: 5,
    },
];

export const MOCK_TRANSACTIONS = [
    {
        transactionId: 'TXN-2026-1024',
        dateBooked: 'Oct 20, 2026',
        hikeDate: 'Oct 24, 2026',
        trail: 'Masaraga Summit Trail',
        participantCount: 2,
        status: 'Confirmed',
        totalPaid: '₱1,850.00',
        paymentMethod: 'GCash',
        referenceNo: 'Ref: GCASH9928172',
        passesData: [
            {
                id: 'MMPL-2026-1024-1',
                qrCodeUrl: QR,
                status: 'Valid',
                date: 'Oct 24, 2026',
                trail: 'Masaraga Summit Trail',
                leadHiker: 'Jane Doe',
                hikerName: 'Jane Doe',
            },
            {
                id: 'MMPL-2026-1024-2',
                qrCodeUrl: QR,
                status: 'Valid',
                date: 'Oct 24, 2026',
                trail: 'Masaraga Summit Trail',
                leadHiker: 'Jane Doe',
                hikerName: 'John Smith',
            },
        ],
        receiptData: {
            breakdown: [
                { label: 'Environmental Fee (2 x ₱150)', amount: '₱300.00' },
                { label: 'Guide Fee (1 Guide)', amount: '₱1,500.00' },
                { label: 'Processing Fee', amount: '₱50.00' },
            ],
            totalPaid: '₱1,850.00',
            paymentMethod: 'Paid via GCash',
            referenceNo: 'Ref: GCASH9928172',
        },
    },
    {
        transactionId: 'TXN-2026-0812',
        dateBooked: 'Aug 05, 2026',
        hikeDate: 'Aug 12, 2026',
        trail: 'Ambot Trail',
        participantCount: 1,
        status: 'Completed',
        totalPaid: '₱650.00',
        paymentMethod: 'Maya',
        referenceNo: 'Ref: MYA88301923',
        passesData: [
            {
                id: 'MMPL-2026-0812-1',
                qrCodeUrl: QR,
                status: 'Used',
                date: 'Aug 12, 2026',
                trail: 'Ambot Trail',
                leadHiker: 'Jane Doe',
                hikerName: 'Jane Doe',
            },
        ],
        receiptData: {
            breakdown: [
                { label: 'Environmental Fee (1 x ₱150)', amount: '₱150.00' },
                { label: 'Guide Fee (Shared Group)', amount: '₱450.00' },
                { label: 'Processing Fee', amount: '₱50.00' },
            ],
            totalPaid: '₱650.00',
            paymentMethod: 'Paid via Maya',
            referenceNo: 'Ref: MYA88301923',
        },
    },
];

export const TRAIL_GALLERY_IMAGES = [
    {
        id: 1,
        src: mtMasaragaSummit,
        alt: "Hikers walking along wooden boardwalk through lush tropical canopy",
        title: "Boardwalk Trek",
        subtitle: "Sub-canopy trail section"
    },
    {
        id: 2,
        src: mtMasaragaCampsite,
        alt: "Lush moss-covered tree trunks and fern details in cloud forest",
        title: "Moss & Flora",
        subtitle: "Primary cloud forest zone"
    },
    {
        id: 3,
        src: mtMasaragaVanishingFalls,
        alt: "Summit view of volcanic ridges and sunrise clouds",
        title: "Summit Caldera",
        subtitle: "Observation ridge viewpoint"
    },
    {
        id: 4,
        src: mtMasaragaNaturalSpring,
        alt: "Natural spring water source along the trail",
        title: "Natural Spring",
        subtitle: "Mid-trail water station"
    }
];

export const TRAIL_PARAGRAPHS = [
    "The Standard Summit Trail offers the most direct and well-maintained route to the peak of Mt. Masaraga. Beginning at the designated ranger station in Ligao City, the trail immediately immerses hikers in dense, secondary forest before transitioning into a more challenging, steeper ascent characterized by loose volcanic soil and cogon grass near the summit.",
    "While considered manageable for experienced beginners, the constant incline requires good cardiovascular endurance. The final stretch provides little tree cover, exposing hikers to the elements but rewarding them with panoramic views of the surrounding Bicol region, including Mt. Mayon on clear days."
];

export const TRAIL_HIGHLIGHTS = [
    {
        id: 'flora-fauna',
        label: 'Flora & Fauna:',
        description: 'Look out for pitcher plants near the summit and various endemic bird species in the lower canopy.'
    },
    {
        id: 'water-sources',
        label: 'Water Sources:',
        description: 'One reliable spring is located roughly halfway up the trail. Treat water before consuming.'
    },
    {
        id: 'campsites',
        label: 'Campsites:',
        description: 'A small campsite exists near the summit, accommodating up to 10 tents.'
    }
];

export const REQUIREMENTS = [
    {
        id: 1,
        title: 'Mandatory Local Guide (1 per 5 hikers)',
        icon: CircleCheck,
        isWarning: false,
    },
    {
        id: 2,
        title: 'Environmental Fee (₱150/head)',
        icon: CircleCheck,
        isWarning: false,
    },
    {
        id: 3,
        title: 'Valid ID presented at Jump-off',
        icon: CircleCheck,
        isWarning: false,
    },
    {
        id: 4,
        title: 'Strictly no walk-ins during weekends',
        icon: TriangleAlert,
        isWarning: true,
    },
];

export const FAQ_CATEGORIES = [
    {
        icon: Receipt,
        title: 'Booking & Payments',
        items: [
            {
                question: 'How do I secure a permit?',
                answer:
                    'Permits can be reserved online through our official booking engine by selecting an authorized trail schedule, registering hiker details, and paying the required fees. We recommend booking at least 5 to 7 days before your target climb date as daily climber quotas are strictly observed by the PAMB-DENR office.',
            },
            {
                question: 'What payment methods are accepted?',
                answer:
                    'We accept GCash, Maya, major Credit/Debit cards (Visa & Mastercard), and Landbank / BDO direct bank transfer through our government merchant gateway.',
            },
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Physical Requirements',
        items: [
            {
                question: 'Do I need to upload my Health Certificate?',
                answer: 'No digital upload is required during online booking. However, you must bring physical hard copies of your valid Medical Certificate ("Fit to Climb") issued within 7 days of the hike date to present to rangers at the jump-off registration desk.',
            },
            {
                question: 'What are the mandatory documents to bring?',
                answer:
                    'Hikers must present: (1) Official Booking Ticket / Digital Hike Pass, (2) One Valid Government-issued ID, (3) Physician-signed Health Declaration / Medical Clearance, and (4) Valid Barangay Clearance or Cedula (Community Tax Certificate).',
            },
        ],
    },
    {
        icon: Cloud,
        title: 'Weather & Safety Policies',
        items: [
            {
                question: 'What happens if there is a Typhoon alert?',
                answer:
                    'Under PAGASA Tropical Cyclone Wind Signal (TCWS) #1 or higher, all mountain trails are automatically closed for safety by the DENR-PAMB office. Affected bookings are eligible for free rescheduling within 6 months or a full refund.',
            },
            {
                question: 'Are guides mandatory?',
                answer:
                    'Yes, accredited local DENR ecotourism guides are mandatory at a ratio of 1 guide per 5 hikers to ensure trail safety and environmental preservation.',
            },
        ],
    },
    {
        icon: RotateCcw,
        title: 'Cancellations & Refunds',
        items: [
            {
                question: 'Can I reschedule my hike?',
                answer:
                    'Hike schedules can be rescheduled up to 48 hours prior to your hike date through your Hiker Dashboard or by contacting support, subject to slot availability.',
            },
            {
                question: 'What is the refund policy for weather-related closures?',
                answer:
                    'If trails are closed by PAMB/DENR due to severe weather, force majeure, or volcanic advisories, 100% of registration fees are refunded or credited towards a rescheduled date.',
            },
        ],
    },
];

export const POPULAR_TOPICS = [
    { icon: FileText, label: 'Permit Requirements' },
    { icon: CreditCard, label: 'Payment Methods' },
    { icon: Mountain, label: 'Trail Difficulty' },
    { icon: CloudLightning, label: 'Weather & Alerts' },
];

export const FORGOT_PASSWORD_STEPS = [
    'Find Account',
    'Reset Code',
    'New Password',
];

export const SIGNUP_STEPS = [
    'Personal Name',
    'Select Gender',
    'Contact Email',
    'Verify Code',
    'Create Password',
    'Trek Ready',
];

export const ABOUT_ZONES = [
    {
        id: 'summit',
        title: 'Mount Masaraga Summit',
        desc: 'An inactive 1,328-meter stratovolcano featuring steep, rugged ridges and mossy forests. Regulated trekking trails lead to the summit crest, offering a stunning 360-degree view of Mt. Mayon and Mt. Malinao.',
        image: mtMasaragaSummit,
    },
    {
        id: 'campsite',
        title: 'The Campsite',
        desc: 'An established, open-air grassy campground situated right on the mountains accessible slopes. It serves as the primary jump-off point for visitors wanting to safely observe the pristine mountain environment.',
        image: mtMasaragaCampsite,
    },
    {
        id: 'watershed',
        title: 'Natural Springs Trail',
        desc: 'An eco-trail navigating the mountains lower primary forest slopes, which house 27 natural springs and 4 major rivers supplying clean, crystalline volcanic water to the Bicol River Basin.',
        image: mtMasaragaNaturalSpring,
    },
    {
        id: 'falls',
        title: 'The Vanishing Falls',
        desc: 'A hidden, ephemeral waterfall deep within the rainforest that flows exclusively after heavy rains. Reaching this seasonal wonder requires a guided 1-hour eco-trek through protected mountain trails.',
        image: mtMasaragaVanishingFalls,
    }
];

export const ABOUT_RESOURCES = [
    {
        icon: Map,
        title: 'Offline Trail Maps',
        description: 'High-resolution GPX and PDF maps for offline navigation.',
        href: '#download-maps',
    },
    {
        icon: Phone,
        title: 'Emergency Guide',
        description: 'Local rescue contacts, protocols, and nearest medical facilities.',
        href: '#download-emergency',
    },
    {
        icon: Leaf,
        title: 'Flora & Fauna Checklist',
        description: 'Identify endemic species and follow Leave No Trace principles.',
        href: '#download-checklist',
    },
];

export const ABOUT_TRAILS = {
    amtic: {
        name: 'Amtic Trail',
        subtitle: 'Continuous forested ascent with scenic viewpoints and technical ridge sections.',
        difficulty: '6/9',
        difficultyLabel: 'Major Climb',
        duration: '2-3 Days',
        trailClass: 'Class 1-4',
        technicality: 'High (Ropes req.)',
        waypoints: [
            {
                name: 'Brgy. Amtic Jump-off',
                description: 'Registration & Briefing',
                icon: 'start',
            },
            {
                name: 'Camp 1',
                description: 'Water source available',
                icon: 'camp',
            },
            {
                name: 'Camp 2 (Assault Base)',
                description: 'Dense mossy forest',
                icon: 'camp',
            },
            {
                name: 'Summit',
                description: '360° view of Mayon',
                icon: 'summit',
            },
        ],
        elevationPoints: [
            { label: 'Jump-off', elevation: '250m', x: 70, y: 260 },
            { label: 'Amintao Viewdeck', elevation: '680m', x: 220, y: 195 },
            { label: 'Rope Section', elevation: '950m', x: 390, y: 140 },
            { label: 'Mossy Forest Ridge', elevation: '1,150m', x: 530, y: 95 },
            { label: 'Mt. Masaraga Summit', elevation: '1,328m', x: 660, y: 35, isSummit: true },
        ],
    },
    ligao: {
        name: 'Ligao Summit Trail',
        subtitle: 'A scenic route passing through lush forests and panoramic ridgelines.',
        difficulty: '5/9',
        difficultyLabel: 'Moderate Climb',
        duration: '1-2 Days',
        trailClass: 'Class 1-3',
        technicality: 'Moderate',
        waypoints: [
            {
                name: 'Brgy. Ligao Jump-off',
                description: 'Registration & gear check',
                icon: 'start',
            },
            {
                name: 'Forest Gate Camp',
                description: 'Sheltered resting area',
                icon: 'camp',
            },
            {
                name: 'Ridge Trail',
                description: 'Open ridgeline views',
                icon: 'camp',
            },
            {
                name: 'Summit',
                description: 'Panoramic Albay landscape',
                icon: 'summit',
            },
        ],
        elevationPoints: [
            { label: 'Jump-off', elevation: '300m', x: 70, y: 255 },
            { label: 'Forest Gate', elevation: '580m', x: 220, y: 200 },
            { label: 'Ridge Trail', elevation: '870m', x: 390, y: 150 },
            { label: 'Lookout Point', elevation: '1,080m', x: 530, y: 100 },
            { label: 'Summit', elevation: '1,328m', x: 660, y: 35, isSummit: true },
        ],
    },
};


export const BOOKING_DETAILS = {
    selectedTrail: 'Masaraga Summit Trail',
    baseFeePerPax: 500.0,
    note: '*Total calculated on next step based on pax count.',
};

export const DEFAULT_MESSAGES = [
    {
        id: 1,
        sender: 'Park Admin',
        avatar: 'PA',
        message: 'Welcome hikers! Please make sure to arrive at the jump-off point 30 minutes before your scheduled climb for the safety briefing.',
        timestamp: '08:00 AM',
        isAdmin: true,
    },
    {
        id: 2,
        sender: 'Jane Doe (Lead Hiker)',
        avatar: 'JD',
        message: 'Copy admin! Are we required to bring physical copies of our IDs?',
        timestamp: '08:15 AM',
        isAdmin: false,
        isSelf: true,
    },
    {
        id: 3,
        sender: 'Park Admin',
        avatar: 'PA',
        message: 'Yes, Jane. Please present your digital ID.',
        timestamp: '08:18 AM',
        isAdmin: true,
    }
];

export const DEFAULT_CONVERSATIONS = [
    {
        id: 'admin-announcements',
        type: 'admin',
        title: 'Park Announcements',
        subtitle: 'Official updates from Ecotourism Guest',
        lastMessage: 'Reminder: wear face mask and observe Leave No Trace principles.',
        timestamp: '9:30 AM',
        unreadCount: 1,
        icon: ShieldAlert,
    },
    {
        id: 'hikers-gc',
        type: 'gc',
        title: 'GC Summit Trail Oct 24,2026',
        subtitle: 'Discussion with trail companions',
        lastMessage: 'Yes, Jane. Please present your digital ID.',
        timestamp: '08:18 AM',
        unreadCount: 0,
        icon: Users,
    },
];

export const DEFAULT_MEMBERS = [
    {
        id: 'admin_1',
        name: 'Park Admin',
        avatar: 'PA',
        role: 'Station Staff',
        isAdmin: true,
        isOnline: true,
    },
    {
        id: 'hiker_1',
        name: 'Jane Doe',
        avatar: 'JD',
        role: 'Lead Hiker',
        isAdmin: false,
        isOnline: true,
    },
    {
        id: 'hiker_2',
        name: 'John Smith',
        avatar: 'JS',
        role: 'Hiker',
        isAdmin: false,
        isOnline: false,
    },
];

export const CHECKLIST_ITEMS = [
    {
        id: 'id_card',
        title: 'Valid Government-Issued ID card',
        description: 'Original copy for verification purposes.',
    },
    {
        id: 'health_declaration',
        title: 'Health Declaration',
        description: 'System Generated',
    },
    {
        id: 'barangay_clearance',
        title: 'Barangay Clearance / Community Tax Certificate',
        description: 'Recent copy applicable for the current year.',
    },
    {
        id: 'booking_ticket',
        title: 'Booking Ticket Copy',
        description: 'System Generated Ticket',
    },
];

export const HEALTH_QUESTIONS = [
    {
        id: 'health1',
        question:
            'Do you have a history of asthma, hypertension, heart disease, or irregular heartbeats?',
    },
    {
        id: 'health2',
        question:
            'Can you comfortably walk or jog for 1 hour without experiencing severe shortness of breath or dizziness?',
    },
    {
        id: 'health3',
        question:
            'Do you have any chronic joint, knee, or back injuries that limit your balance or ability to climb steep slopes?',
    },
    {
        id: 'health4',
        question:
            'Do you have hemophilia, a bleeding disorder, or take blood thinners that might cause prolonged bleeding from limatik bites?',
    },
    {
        id: 'health5',
        question:
            'Do you carry an EpiPen, inhaler, or specific antihistamines for known severe allergic reactions (Anaphylaxis)?',
    },
    {
        id: 'health6',
        question:
            'Have you undergone any major surgical procedures or suffered a debilitating illness within the past six (6) months?',
    },
];

export const PAYMENT_METHODS = [
    {
        id: 'gcash',
        label: 'GCash',
        icon: Wallet,
    },
    {
        id: 'card',
        label: 'Credit/Debit Card',
        icon: CreditCard,
    },
    {
        id: 'maya',
        label: 'Maya',
        icon: QrCode,
    },
    {
        id: 'bank',
        label: 'Bank Transfer (Landbank, BDO)',
        icon: Building2,
    },
];

export const DEFAULT_BOOKING_SUMMARY = {
    trail: 'Ambot Trail',
    date: 'Oct 24, 2024',
    participants: '4 Pax',
    breakdown: [
        { label: 'Environmental Fee (4 x ₱150)', amount: 600.0 },
        { label: 'Guide Fee (1 Guide)', amount: 1200.0 },
        { label: 'Processing Fee', amount: 50.0 },
    ],
    totalAmount: 1850.0,
};





