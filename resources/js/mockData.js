// resources/js/mockData.js
import { Trees, Award, Users2, FileCheck, MapPin, TrendingUp, Clock, CircleCheck, TriangleAlert, Receipt, ShieldCheck, Cloud, RotateCcw, FileText, CreditCard, Mountain, CloudLightning, ShieldAlert, Users, Wallet, QrCode, Building2, Map, Phone, Leaf } from 'lucide-react';


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
        id: 'user_hiker',
        name: 'Jon Eric Tripulca',
        email: 'hiker@example.com',
        role: 3, // Role 3: User Hiker
        subtitle: 'Hiker',
        password: 'HIKER1',
    },
    {
        id: 'user_staff',
        name: 'Maria Santos',
        email: 'staff@masaraga.gov.ph',
        role: 2, // Role 2: Hiker Staff / Guide
        subtitle: 'Park Staff / Guide',
        password: 'STAFF1',

    },
    {
        id: 'user_admin',
        name: 'Juan Dela Cruz',
        email: 'admin@masaraga.gov.ph',
        role: 1, // Role 1: Admin
        subtitle: 'System Administrator',
        password: 'ADmin1',
        secondaryPin: '123456'
    },

];

export const AWARDS = [
    {
        id: 'denr-pamb-recognition-2023',
        iconKey: 'workspace_premium',
        badge: '2023 Recognition',
        title: 'DENR-PAMB Recognition',
        name: 'DENR-PAMB Recognition',
        awardingBody: 'DENR & Protected Area Management Board',
        dateReceived: 'December 15, 2023',
        category: 'Protected Landscape Management',
        summary: 'Awarded for outstanding management of protected landscapes in the Bicol Region (2023). Recognized by the Department of Environment and Natural Resources for habitat protection and biodiversity monitoring.',
        description: 'Awarded for outstanding management of protected landscapes in the Bicol Region (2023).',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeB3ZblugQwbPIF9ls2WH9qrKx3Gk9xggmUMyj_7LzQ5Fx9XMNEFWdsHrkf8t5Ze0VMqsE50ICiRY7d008yss-3VnkOmEPQSlB1t7ut3eh7PbK-a36MQUKh1ByJ7vcGX1HGiLEnuXsJJM5uoQo1kYZsb8guKFdM2D_CKFH6pczo5tjlvqU73c-kYl6uY5sXbaVq1F363CmLDrYLH53N6vZ_BNoycxJ51gTlRhW1FINe9CnEClq1rATjw',
        imageAlt: 'DENR-PAMB Environmental Excellence Plaque awarded to Mt. Masaraga',
        story: {
            title: 'Pioneering Protected Landscape Stewardship',
            paragraphs: [
                'The DENR-PAMB recognition marks a major milestone for the Mt. Masaraga Protected Landscape. Over the past several years, joint conservation efforts between local rangers and regional environmental units established stricter boundary monitoring to prevent illegal flora harvesting and encroachment.',
                'Through continuous forest patrol logging, community-led reforestation campaigns, and wildlife sanctuary designations, the park maintained peak forest canopy health while safely hosting thousands of outdoor enthusiasts across the Bicol Region.'
            ]
        },
        metrics: [
            {
                id: 'canopy',
                value: '98%',
                label: 'Protected Forest Canopy',
                icon: Trees
            },
            {
                id: 'patrols',
                value: '350+',
                label: 'Annual Ranger Patrols',
                icon: ShieldCheck
            }
        ]
    },
    {
        id: 'eco-tourism-excellence',
        iconKey: 'eco',
        badge: 'National Certification',
        title: 'Eco-Tourism Excellence',
        name: 'Eco-Tourism Excellence',
        awardingBody: 'National Ecotourism Steering Committee',
        dateReceived: 'August 20, 2024',
        category: 'Sustainable Ecotourism Destination',
        summary: 'Certified Sustainable Destination by the National Ecotourism Steering Committee. Honored for zero-waste trail management, mandatory guide deployment, and sustainable community livelihood integration.',
        description: 'Certified Sustainable Destination by the National Ecotourism Steering Committee.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx58jMKv8xlkDEyNHDKNiXJjYn0NidutYK_dDbexJKelvXUpFsVpmDwTt8Q5tP5wXx6Rn76iZxLCxnVqGAq2XKx53JtHvz3CHpRc3Q3P9jw4RhB9nbG3a9hBSv-aI19vhUl7mDuP1EXDzPpQ1G0w-hH8a--Iczrmi2tszKoSJovleF2bGjWQDxmOp0mywUZVyPEuLW3L_aGmSY_oCikOS1GbFHYfdnM4ayp917gqttM2U9k3AkxKG7Pw',
        imageAlt: 'Sustainable Eco-Tourism Excellence certificate presented to Mt. Masaraga office',
        story: {
            title: 'Community-Led Sustainable Tourism',
            paragraphs: [
                'Ecotourism excellence was achieved by shifting park policies toward direct community engagement. Every hike conducted on Mt. Masaraga directly supports accredited local guides, porter networks, and nearby barangay eco-initiatives.',
                'Our strict "Leave No Trace" check-in policy requires hikers to declare all single-use plastics before entering the trailheads. This initiative successfully eliminated solid waste build-up along peak summit trails.'
            ]
        },
        metrics: [
            {
                id: 'waste',
                value: '0%',
                label: 'Trail Waste Tolerance',
                icon: Leaf
            },
            {
                id: 'guides',
                value: '120+',
                label: 'Local Guides Employed',
                icon: Users2
            }
        ]
    },
    {
        id: 'iso-14001-certified',
        iconKey: 'verified_user',
        badge: 'Global Compliance',
        title: 'ISO 14001 Certified',
        name: 'ISO 14001 Certified',
        awardingBody: 'International Organization for Standardization',
        dateReceived: 'May 10, 2024',
        category: 'Environmental Management System',
        summary: 'International standard for effective environmental management systems. Certified for rigorous risk mitigation, trail erosion control, and sustainable resource allocation.',
        description: 'International standard for effective environmental management systems.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO915Ka3cjQMZlDZw0OEVZwbJpI-YctaQy8GlwTDNw0NdRjMpB9XNKqnVGuCw8fZnNG6osqoV8Y7iKbSCd9bDTg_-qY0gnOOQPpJt64yB3l_XB18b6WtaUm44AkWAOp1n9NQIge83u-zMcQ3vbSWjumtiS4JkAQc2jh50VEPIXUM0giQGq-pimE4eacDuLJD0mDDgqpUZnG4jNPtmXRNhpImJr3fuXHiNxk5THrVtbLySptu2TZ_pJRA',
        imageAlt: 'ISO 14001 Environmental System audit documentation at park headquarters',
        story: {
            title: 'International Environmental Standards',
            paragraphs: [
                'Achieving ISO 14001 certification required auditing every operational process within the protected area. From digital permit processing to emergency evacuation readiness, our administrative infrastructure meets international standards.',
                'This certification guarantees that all trail maintenance, summit access caps, and environmental assessments are systematically logged, reviewed, and updated annually to minimize ecological footprints.'
            ]
        },
        metrics: [
            {
                id: 'compliance',
                value: '100%',
                label: 'Audit Standard Met',
                icon: FileCheck
            },
            {
                id: 'standard',
                value: 'ISO 14001',
                label: 'Global Standard',
                icon: Award
            }
        ]
    }
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

export const TRAILS = {
    amtic: {
        id: 'amtic',
        name: 'Amtic Trail (or Sabluyon Trail)',
        difficulty: 'Major Climb',
        difficultyClass: 'bg-primary-container text-on-primary-container',
        trailClass: 'Class 3 - Technical Scramble',
        technicality: 'High (Rope sections, exposed ridges)',
        description:
            'The primary and most established route up Mt. Masaraga, starting at Sitio Sabluyon, Brgy. Amtic, Ligao City. Known for its relentless steep inclines, dense jungle canopy, and technical rope-assisted ridge assault leading to the summit.',
        statIcon: 'height',
        stats: [
            { id: 'elevation', value: "1,328m" },
            { id: 'difficulty', value: "7/9" },
            { id: 'duration', value: "8-10h" },
            { id: 'distance', value: "9.2km" }
        ],
        image: SabluyonRoute,
        subtitle: 'Continuous steep assault through tropical rain forest and technical mossy ridgelines.',
        waypoints: [
            { name: 'Sitio Sabluyon Jump-off', description: 'Registration, guide assignment & safety briefing', icon: 'start' },
            { name: 'Camp 1 (Bamboos)', description: 'First rest area near lower stream', icon: 'camp' },
            { name: 'Camp 2 (Assault Base)', description: 'Staging ground before steep ridge climb', icon: 'camp' },
            { name: 'Mt. Masaraga Summit', description: '360° view of Mayon Volcano and Albay Gulf', icon: 'summit' },
        ],
        elevationPoints: [
            { label: 'Sabluyon Base', elevation: '220m', x: 70, y: 260 },
            { label: 'Amintao Rest Stop', elevation: '580m', x: 220, y: 195 },
            { label: 'Fixed Ropes Pitch', elevation: '920m', x: 390, y: 140 },
            { label: 'Mossy Forest Spine', elevation: '1,180m', x: 530, y: 95 },
            { label: 'Masaraga Peak', elevation: '1,328m', x: 660, y: 35, isSummit: true },
        ],
        paragraphs: [
            'The Amtic Trail serves as the official, standard route to the summit of Mt. Masaraga. Commencing at Sitio Sabluyon in Barangay Amtic, Ligao City, the trail immediately engages hikers with sustained uphill gradients through dense dipterocarp forest before transitioning into steep, razor-back ridges.',
            'Requires strong physical conditioning and surefootedness. Climbers negotiate exposed roots, loose volcanic soil, and several vertical pitches equipped with fixed ropes. The high canopy shelters diverse wildlife, leading up to an unshaded peak offering an unobstructed panorama of Mayon Volcano, Mt. Malinao, and the surrounding Albay plains.',
        ],
        highlights: [
            { id: 'flora-fauna', label: 'Flora & Fauna:', description: 'Home to Nepenthes pitcher plants, wild orchids, endemic Rufous Hornbills, and Philippine Macaques.' },
            { id: 'water-sources', label: 'Water Sources:', description: 'Last reliable water source is located near Camp 1 (Seasonal stream). Filtration mandatory.' },
            { id: 'campsites', label: 'Campsites:', description: 'Limited summit space fits 4-5 tents. Base camp at Camp 2 offers better wind shelter.' },
        ],
        gallery: [
            { id: 1, src: mtMasaragaSummit, alt: "Hikers negotiating steep dirt trail shaded by thick jungle tree cover", title: "Trail Assault", subtitle: "Near the point elevation trail" },
            { id: 2, src: mtMasaragaCampsite, alt: "Dense mossy branches and ferns along high altitude ridge line", title: "Campsite", subtitle: "The Mt. Masaraga Campsite" },
            { id: 3, src: mtMasaragaVanishingFalls, alt: "Overlook of Albay plains and Mayon Volcano from Masaraga summit", title: "Vanishing Falls", subtitle: "The Vanishing Falls of MT. Masaraga" },
            { id: 4, src: mtMasaragaNaturalSpring, alt: "Freshwater stream flowing over rocks along lower trail", title: "Sabluyon Spring", subtitle: "Mid-way hydration point" },
        ],
        reviews: [
            { id: 1, initials: 'ES', name: 'Elena Santos', quote: 'A brutal pure-assault climb! The rope sections tested our grip, but standing at the summit with Mayon in full view was surreal.', date: 'Oct 12, 2024', rating: 5 },
            { id: 2, initials: 'MC', name: 'Marcus Chen', quote: 'Strenuous hike with zero flat sections. Excellent PAMB local guides who kept our pace safe through the mossy ridge.', date: 'Sep 28, 2024', rating: 5 },
            { id: 3, initials: 'SJ', name: 'Sarah Johnson', quote: 'Trail is technical and slippery when wet. Bring gloves for the rope segments and plenty of water!', date: 'Sep 15, 2024', rating: 4 },
            { id: 4, initials: 'RV', name: 'Ramon Valdez', quote: 'Challenging day-climb. Completed in 9 hours total. The forest cover keeps you cool until the final ridge assault.', date: 'Aug 30, 2024', rating: 4.5 },
            { id: 5, initials: 'AL', name: 'Anna Lopez', quote: 'Top-tier adventure in Albay. The pitcher plants near the top were amazing to see in their natural habitat.', date: 'Aug 14, 2024', rating: 5 },
        ],
    },
    ligao: {
        id: 'ligao',
        name: 'Balogo Trail',
        difficulty: 'Moderate-Major',
        difficultyClass: 'bg-primary text-white',
        trailClass: 'Class 2 - Steep Hiking',
        technicality: 'Moderate (Steep sections, some exposed roots)',
        description:
            'A scenic alternative route initiating near Brgy. Balogo East. This path winds through quiet agricultural farmlands and open cogon grasslands before merging into the forested upper slopes of Mt. Masaraga.',
        statIcon: 'nature',
        stats: [
            { id: 'elevation', value: "1,328m" },
            { id: 'difficulty', value: "5/9" },
            { id: 'duration', value: "7-9h" },
            { id: 'distance', value: "8.1km" }
        ],
        image: BalogoRoute,
        subtitle: 'A balanced route blending agricultural countryside paths with forested ridgelines.',
        waypoints: [
            { name: 'Brgy. Balogo Jump-off', description: 'Logbook sign-in & guide briefing', icon: 'start' },
            { name: 'Coconut Plantation Gate', description: 'Gentle incline through local farmlands', icon: 'camp' },
            { name: 'Balogo Ridge Viewpoint', description: 'Open clearing facing Ligao City valleys', icon: 'camp' },
            { name: 'Mt. Masaraga Summit', description: 'Peak junction with 360° panorama', icon: 'summit' },
        ],
        elevationPoints: [
            { label: 'Balogo Elementary', elevation: '280m', x: 70, y: 255 },
            { label: 'Coconut Grove', elevation: '520m', x: 220, y: 200 },
            { label: 'Cogon Ridgeline', elevation: '810m', x: 390, y: 150 },
            { label: 'High Junction', elevation: '1,050m', x: 530, y: 100 },
            { label: 'Masaraga Peak', elevation: '1,328m', x: 660, y: 35, isSummit: true },
        ],
        paragraphs: [
            'The Balogo Trail presents a varied landscape trek starting from the eastern foothills of Ligao. Hikers traverse coconut groves, small mountain communities, and open brushlands, gaining steady elevation before entering the rainforest zone near the mid-way point.',
            'Although offering a slightly more gradual start than the Amtic route, the trail merges into steep terrain near the upper ridge. Sun protection is essential during the early stages due to open plantation stretches, while the upper section requires careful footwork over exposed roots and rocky ledges.',
        ],
        highlights: [
            { id: 'flora-fauna', label: 'Flora & Fauna:', description: 'Abundant wild orchids, tree ferns, fruit bats, and native songbirds along the forest boundary.' },
            { id: 'water-sources', label: 'Water Sources:', description: 'No reliable water sources along the open ridge. Carry minimum 3L of water per person.' },
            { id: 'campsites', label: 'Campsites:', description: 'Shaded resting spots available at Coconut Grove. No established camping on open ridges.' },
        ],
        gallery: [
            { id: 1, src: mtMasaragaSummit, alt: "Path passing through open coconut fields toward mountain base", title: "Farmland Approach", subtitle: "Balogo lower trail section" },
            { id: 2, src: mtMasaragaCampsite, alt: "Open ridge trail surrounded by tall cogon grass and distant hills", title: "Balogo Ridgeline", subtitle: "Mid-trail observation area" },
            { id: 3, src: mtMasaragaVanishingFalls, alt: "High altitude vantage point showing surrounding Albay landscape", title: "Valley Overlook", subtitle: "Upper ridge viewpoint" },
            { id: 4, src: mtMasaragaNaturalSpring, alt: "Shaded rest station under rainforest canopy", title: "Forest Junction", subtitle: "Upper trail canopy zone" },
        ],
        reviews: [
            { id: 1, initials: 'JM', name: 'Jayson Mendoza', quote: 'Great alternative to Amtic! The initial walk through the farmlands was pleasant before we hit the steep forest trail.', date: 'Nov 04, 2024', rating: 5 },
            { id: 2, initials: 'KL', name: 'Kristine Lim', quote: 'Start early to beat the heat on the open plantation sections. Gorgeous views of the valley as you gain height!', date: 'Oct 19, 2024', rating: 4.5 },
            { id: 3, initials: 'DR', name: 'Danilo Reyes', quote: 'Well-marked trail guided by local Balogo rangers. A bit muddy near the high junction, but manageable.', date: 'Sep 02, 2024', rating: 4 },
            { id: 4, initials: 'CP', name: 'Clara Pascual', quote: 'Less crowded route with wonderful countryside scenery. Highly recommended for experienced day hikers!', date: 'Aug 22, 2024', rating: 5 },
            { id: 5, initials: 'BT', name: 'Ben Torres', quote: 'Challenging yet rewarding trek. Make sure to bring enough water as there are no streams along this ridge.', date: 'Jul 11, 2024', rating: 4.5 },
        ],
    },
};

export const GALLERY_ITEMS = [
    {
        src: '/images/gallery/morning-mist.jpg',
        alt: "Mt. Masaraga's peak shrouded in soft morning mist",
        caption: 'Morning Mist over Mt. Masaraga',
    },
    {
        src: '/images/gallery/Spilornis-holospilus.jpg',
        alt: 'Spilornis holospilus',
        caption: 'Spilornis holospilus',
    },
    {
        src: '/images/gallery/boardwalk.jpg',
        alt: 'Hikers on wooden boardwalk trail',
        caption: 'Protected Canopy Boardwalk',
    },
    {
        src: '/images/gallery/mt-masaraga-vanishing-falls.jpg',
        alt: 'Mt. Masaraga Vanishing Falls',
        caption: 'Mt. Masaraga Vanishing Falls',
    },
    {
        src: '/images/gallery/rafflesia-lagascae.jpg',
        alt: 'Rafflesia lagascae',
        caption: 'Rafflesia lagascae',
    },
    {
        src: '/images/gallery/cloud-forest.jpg',
        alt: 'Lush green ferns and moss-covered forest',
        caption: 'Ancient Cloud Forest Canopy',
    },
    {
        src: '/images/gallery/gonocephalus-sophiae.jpg',
        alt: 'Gonocephalus sophiae',
        caption: 'Gonocephalus sophiae',
    },
    {
        src: '/images/gallery/loriculus-philippensis.jpg',
        alt: 'Loriculus philippensis',
        caption: 'Loriculus philippensis',
    },
    {
        src: '/images/gallery/mt-masaraga-campsite-3.jpg',
        alt: 'Mt. Masaraga Campsite',
        caption: 'Mt. Masaraga Campsite',
    },
    {
        src: '/images/gallery/trimeresurus-flavomaculatus.jpg',
        alt: 'Trimeresurus flavomaculatus',
        caption: 'Trimeresurus flavomaculatus',
    }
];

export const NEWS = [
    {
        id: 'scheduled-trail-maintenance',
        category: 'Advisory',
        badgeClass: 'bg-red-50 text-red-700 border-red-200',
        date: 'Oct 24, 2024',
        title: 'Scheduled Trail Maintenance',
        leadParagraph: 'The Eco-Trail Loop will be partially closed for boardwalk repairs from Oct 28-30. Please review the impacted sections and safety guidelines.',
        leadImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx58jMKv8xlkDEyNHDKNiXJjYn0NidutYK_dDbexJKelvXUpFsVpmDwTt8Q5tP5wXx6Rn76iZxLCxnVqGAq2XKx53JtHvz3CHpRc3Q3P9jw4RhB9nbG3a9hBSv-aI19vhUl7mDuP1EXDzPpQ1G0w-hH8a--Iczrmi2tszKoSJovleF2bGjWQDxmOp0mywUZVyPEuLW3L_aGmSY_oCikOS1GbFHYfdnM4ayp917gqttM2U9k3AkxKG7Pw',
        leadImageAlt: 'Trail maintenance team replacing wooden boardwalk footings in green forest',
        sections: [
            {
                type: 'paragraph',
                text: 'The Mt. Masaraga Park Maintenance Team will conduct scheduled repairs on the Eco-Trail Loop to replace weathered wooden planks and reinforce trail safety barriers.'
            },
            {
                type: 'heading',
                text: 'Closure Details & Schedule'
            },
            {
                type: 'paragraph',
                text: 'Work will begin promptly on October 28 and is scheduled to wrap up on October 30. During this window, specific trail zones will be restricted:'
            },
            {
                type: 'list',
                items: [
                    { label: 'Oct 28 - Oct 29', text: 'Eco-Trail Lower Loop & Wooden Boardwalk Section' },
                    { label: 'Oct 30', text: 'Final Inspection & Reopening of Lower Junction' }
                ]
            },
            {
                type: 'heading',
                text: 'Recommended Detours'
            },
            {
                type: 'paragraph',
                text: 'Hikers planning trips during these dates should use the Ridge Trail connection as an alternative route to access the upper summit paths.'
            }
        ],
        contact: {
            phone: '+63 917-EMS-SAFE',
            email: 'support@masaraga.gov.ph'
        }
    },
    {
        id: 'favorable-climbing-conditions',
        category: 'Weather',
        badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
        date: 'Oct 23, 2024',
        title: 'Favorable Climbing Conditions',
        leadParagraph: 'Clear skies expected for the weekend. Perfect conditions for the Standard Summit trail with low humidity and high visibility.',
        leadImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJs6fNWag19aRj8sSThWOMTqvKHld5c3vP9m0JAIkbonWysDMux17Zyhz5NMxkPCLo-qmLST2YTWOo2V77vbcJdsLJGJ4cm47esAqBjlUu2VmIrNHF-ZPkTEPv1HZIi2PgQlPTF72NFmwiM2ggKEJ-bFbxh2TDcvk_JFlbYqjDmjlVDn7N6ei9yBoslECA0K65EapHSgcTMl-elU89nmF-TFJoBcHOjK7p3doeIwes8ptV4X99S80cZA',
        leadImageAlt: 'Sunlit mountain peak under clear blue sky with crisp trail visibility',
        sections: [
            {
                type: 'paragraph',
                text: 'The local meteorological station reports stable high-pressure systems moving across the region, bringing ideal hiking weather for Mt. Masaraga throughout the upcoming weekend.'
            },
            {
                type: 'heading',
                text: 'Weekend Forecast Overview'
            },
            {
                type: 'paragraph',
                text: 'Hikers can expect optimal trail conditions across all main ascent routes:'
            },
            {
                type: 'list',
                items: [
                    { label: 'Temperature', text: 'Comfortable 22°C - 27°C during peak daytime hours' },
                    { label: 'Wind & Visibility', text: 'Light breezes under 10 km/h with clear cloudless views at the peak' }
                ]
            },
            {
                type: 'heading',
                text: 'Preparation Checklist'
            },
            {
                type: 'paragraph',
                text: 'While conditions are clear, temperatures remain cool near the summit during early morning hours. Pack adequate hydration, sun protection, and a light jacket.'
            }
        ],
        contact: {
            phone: '+63 (052) 555-0198',
            email: 'ranger.station@masaraga.gov'
        }
    },
    {
        id: 'new-online-permit-system',
        category: 'Update',
        badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        date: 'Oct 20, 2024',
        title: 'New Online Permit System',
        leadParagraph: 'We have upgraded our booking portal for faster processing of climbing permits, digital QR pass issuance, and instant guide allocations.',
        leadImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO915Ka3cjQMZlDZw0OEVZwbJpI-YctaQy8GlwTDNw0NdRjMpB9XNKqnVGuCw8fZnNG6osqoV8Y7iKbSCd9bDTg_-qY0gnOOQPpJt64yB3l_XB18b6WtaUm44AkWAOp1n9NQIge83u-zMcQ3vbSWjumtiS4JkAQc2jh50VEPIXUM0giQGq-pimE4eacDuLJD0mDDgqpUZnG4jNPtmXRNhpImJr3fuXHiNxk5THrVtbLySptu2TZ_pJRA',
        leadImageAlt: 'Digital permit verification screen displayed on a mobile tablet at ranger station',
        sections: [
            {
                type: 'paragraph',
                text: 'In our commitment to digital modernization and seamless visitor management, the Mt. Masaraga Protected Landscape Management Office has launched an upgraded Online Permit Portal.'
            },
            {
                type: 'heading',
                text: 'Key Enhancements'
            },
            {
                type: 'paragraph',
                text: 'The new system streamlined several core registration steps:'
            },
            {
                type: 'list',
                items: [
                    { label: 'Instant Approval', text: 'Automated document verification for standard permits' },
                    { label: 'Digital E-Passes', text: 'Downloadable QR-coded tickets sent directly to mobile' },
                    { label: 'Online Payments', text: 'Integrated e-wallet payment methods including GCash and Maya' }
                ]
            },
            {
                type: 'heading',
                text: 'How to Book'
            },
            {
                type: 'paragraph',
                text: 'Hikers can visit the main navigation menu, select "Book New Hike", choose an available calendar slot, and complete payment within minutes.'
            }
        ],
        contact: {
            phone: '+63 (052) 555-0198',
            email: 'ranger.station@masaraga.gov'
        }
    }
];

export const RELATED_UPDATES = [
    {
        id: 'news-1',
        category: 'News',
        date: 'Oct 05',
        title: 'New Rest Stations Completed at Camp 1',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJs6fNWag19aRj8sSThWOMTqvKHld5c3vP9m0JAIkbonWysDMux17Zyhz5NMxkPCLo-qmLST2YTWOo2V77vbcJdsLJGJ4cm47esAqBjlUu2VmIrNHF-ZPkTEPv1HZIi2PgQlPTF72NFmwiM2ggKEJ-bFbxh2TDcvk_JFlbYqjDmjlVDn7N6ei9yBoslECA0K65EapHSgcTMl-elU89nmF-TFJoBcHOjK7p3doeIwes8ptV4X99S80cZA',
        alt: 'Close-up view of freshly cleared hiking trail section with wooden steps'
    },
    {
        id: 'news-2',
        category: 'Advisory',
        date: 'Sep 28',
        title: 'Mandatory Guide Policy Update for Q4',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO915Ka3cjQMZlDZw0OEVZwbJpI-YctaQy8GlwTDNw0NdRjMpB9XNKqnVGuCw8fZnNG6osqoV8Y7iKbSCd9bDTg_-qY0gnOOQPpJt64yB3l_XB18b6WtaUm44AkWAOp1n9NQIge83u-zMcQ3vbSWjumtiS4JkAQc2jh50VEPIXUM0giQGq-pimE4eacDuLJD0mDDgqpUZnG4jNPtmXRNhpImJr3fuXHiNxk5THrVtbLySptu2TZ_pJRA',
        alt: 'Park rangers gathered around a topographical map inside ranger station'
    }
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

export const BOOKING_DETAILS = {
    amtic: {
        id: 'amtic',
        selectedTrail: 'Amtic Trail (or Sabluyon Trail)',
        baseFeePerPax: 500.0,
        note: '*Total calculated on next step based on pax count.',
    },
    ligao: {
        id: 'ligao',
        selectedTrail: 'Balogo Trail',
        baseFeePerPax: 500.0,
        note: '*Total calculated on next step based on pax count.',
    },
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
        id: 'maya',
        label: 'Maya',
        icon: QrCode,
    },
    {
        id: 'landbank',
        label: 'Landbank',
        icon: Building2,
    },
    {
        id: 'visa',
        label: 'Visa',
        icon: CreditCard,
    },
    {
        id: 'mastercard',
        label: 'Mastercard',
        icon: CreditCard,
    },
    {
        id: 'cash',
        label: 'Cash',
        icon: Wallet,
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

// Admin mock database: powers the Admin Console. Amounts and slot counts below
// are this app's seeded data (mirrored by adminStore.js), matching the names,
// trails, and dates already used across the public booking datasets.
export const ADMIN_USERS = [
    {
        id: 'user_admin',
        name: 'Juan Dela Cruz',
        email: 'admin@masaraga.gov.ph',
        role: 1,
        subtitle: 'System Administrator',
        status: 'Active',
        permissions: null,
    },
    {
        id: 'user_staff',
        name: 'Maria Santos',
        email: 'staff@masaraga.gov.ph',
        role: 2,
        subtitle: 'Park Staff / Guide',
        status: 'Active',
        permissions: ['bookings', 'trails', 'guides'],
    },
    {
        id: 'user_hiker',
        name: 'Jon Eric Tripulca',
        email: 'hiker@example.com',
        role: 3,
        subtitle: 'Hiker',
        status: 'Active',
        permissions: null,
    },
    {
        id: 'user_jane',
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        role: 3,
        subtitle: 'Hiker',
        status: 'Active',
        permissions: null,
    },
    {
        id: 'user_marcus',
        name: 'Marcus Chen',
        email: 'marcus.chen@example.com',
        role: 3,
        subtitle: 'Hiker',
        status: 'Active',
        permissions: null,
    },
    {
        id: 'user_elena',
        name: 'Elena Santos',
        email: 'elena.santos@example.com',
        role: 3,
        subtitle: 'Hiker',
        status: 'Active',
        permissions: null,
    },
];

export const ADMIN_BOOKINGS = [
    {
        id: 'BK-2026-1024-01',
        scheduleId: 'sch-amtic-2026-10-24',
        reference: 'TXN-2026-0928',
        leadHiker: 'Jane Doe',
        contact: 'jane.doe@example.com',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 24, 2026',
        participants: 2,
        totalPaid: 1850,
        paymentMethod: 'GCash',
        status: 'Upcoming',
        feeBreakdown: [
            { label: 'Environmental fee (2 pax)', amount: 500 },
            { label: 'Guide fee', amount: 1300 },
            { label: 'Processing fee', amount: 50 },
        ],
        documents: [
            { id: 'id_card', title: 'Valid Government-Issued ID card', status: 'Complete' },
            { id: 'booking_ticket', title: 'Booking Ticket Copy', status: 'Complete' },
            { id: 'barangay_clearance', title: 'Barangay Clearance / Community Tax Certificate', status: 'Complete' },
            { id: 'health_declaration', title: 'Health Declaration', status: 'Missing' },
        ],
        hikers: [
            {
                fullName: 'Jane Doe',
                dateOfBirth: '1994-05-12',
                address: 'Ligao City, Albay',
                emergencyName: 'Maria Doe',
                emergencyRelationship: 'Mother',
                emergencyContact: '+63 900 123 4567',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
            {
                fullName: 'John Smith',
                dateOfBirth: '1991-08-23',
                address: 'Ragay, Albay',
                emergencyName: 'Michael Smith',
                emergencyRelationship: 'Brother',
                emergencyContact: '+63 900 765 4321',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
        ],
    },
    {
        id: 'BK-2026-1024-02',
        scheduleId: 'sch-amtic-2026-10-24',
        reference: 'TXN-2026-0930',
        leadHiker: 'Marcus Chen',
        contact: 'marcus.chen@example.com',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 24, 2026',
        participants: 5,
        totalPaid: 2000,
        paymentMethod: 'Maya',
        status: 'Upcoming',
        feeBreakdown: [
            { label: 'Environmental fee (5 pax)', amount: 1250 },
            { label: 'Guide fee', amount: 700 },
            { label: 'Processing fee', amount: 50 },
        ],
        documents: [
            { id: 'id_card', title: 'Valid Government-Issued ID card', status: 'Complete' },
            { id: 'booking_ticket', title: 'Booking Ticket Copy', status: 'Complete' },
            { id: 'health_declaration', title: 'Health Declaration', status: 'Complete' },
            { id: 'barangay_clearance', title: 'Barangay Clearance / Community Tax Certificate', status: 'Missing' },
        ],
        hikers: [
            {
                fullName: 'Marcus Chen',
                dateOfBirth: '1989-02-14',
                address: 'Ligao City, Albay',
                emergencyName: 'Linda Chen',
                emergencyRelationship: 'Mother',
                emergencyContact: '+63 900 234 5678',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
            {
                fullName: 'Ana Reyes',
                dateOfBirth: '1996-11-03',
                address: 'Bacoor, Cavite',
                emergencyName: 'Jose Reyes',
                emergencyRelationship: 'Father',
                emergencyContact: '+63 900 345 6789',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
            {
                fullName: 'Luis Santos',
                dateOfBirth: '1993-07-19',
                address: 'Daet, Camarines Norte',
                emergencyName: 'Rosa Santos',
                emergencyRelationship: 'Sister',
                emergencyContact: '+63 900 456 7890',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
            {
                fullName: 'Carla Gomez',
                dateOfBirth: '2000-01-27',
                address: 'Manila',
                emergencyName: 'Pedro Gomez',
                emergencyRelationship: 'Father',
                emergencyContact: '+63 900 567 8901',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
            {
                fullName: 'Paolo Cruz',
                dateOfBirth: '1998-09-08',
                address: 'Naga City',
                emergencyName: 'Teresa Cruz',
                emergencyRelationship: 'Mother',
                emergencyContact: '+63 900 678 9012',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
        ],
    },
    {
        id: 'BK-2026-1024-03',
        scheduleId: 'sch-ligao-2026-10-24',
        reference: 'TXN-2026-1002',
        leadHiker: 'Elena Santos',
        contact: 'elena.santos@example.com',
        trail: 'Balogo Trail',
        date: 'Oct 24, 2026',
        participants: 3,
        totalPaid: 1700,
        paymentMethod: 'LandBank',
        status: 'Upcoming',
        feeBreakdown: [
            { label: 'Environmental fee (3 pax)', amount: 750 },
            { label: 'Guide fee', amount: 900 },
            { label: 'Processing fee', amount: 50 },
        ],
        documents: [
            { id: 'id_card', title: 'Valid Government-Issued ID card', status: 'Complete' },
            { id: 'booking_ticket', title: 'Booking Ticket Copy', status: 'Complete' },
            { id: 'barangay_clearance', title: 'Barangay Clearance / Community Tax Certificate', status: 'Complete' },
            { id: 'health_declaration', title: 'Health Declaration', status: 'Complete' },
        ],
        hikers: [
            {
                fullName: 'Elena Santos',
                dateOfBirth: '1995-04-16',
                address: 'Ligao City, Albay',
                emergencyName: 'Jose Santos',
                emergencyRelationship: 'Father',
                emergencyContact: '+63 900 789 0123',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
            {
                fullName: 'Diego Ramos',
                dateOfBirth: '1992-12-05',
                address: 'Irosin, Sorsogon',
                emergencyName: 'Carmen Ramos',
                emergencyRelationship: 'Mother',
                emergencyContact: '+63 900 890 1234',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
            {
                fullName: 'Nina Villanueva',
                dateOfBirth: '1999-06-30',
                address: 'Polangui, Albay',
                emergencyName: 'Carlos Villanueva',
                emergencyRelationship: 'Brother',
                emergencyContact: '+63 900 901 2345',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
        ],
    },
    {
        id: 'BK-2026-1024-04',
        scheduleId: 'sch-amtic-2026-10-24',
        reference: 'TXN-2026-1024',
        leadHiker: 'Jane Doe',
        contact: 'jane.doe@example.com',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 24, 2026',
        participants: 2,
        totalPaid: 1850,
        paymentMethod: 'VISA',
        status: 'Confirmed',
        guide: 'R. Villanueva',
        feeBreakdown: [
            { label: 'Environmental fee (2 pax)', amount: 500 },
            { label: 'Guide fee', amount: 1300 },
            { label: 'Processing fee', amount: 50 },
        ],
        documents: [
            { id: 'id_card', title: 'Valid Government-Issued ID card', status: 'Complete' },
            { id: 'booking_ticket', title: 'Booking Ticket Copy', status: 'Complete' },
            { id: 'barangay_clearance', title: 'Barangay Clearance / Community Tax Certificate', status: 'Complete' },
            { id: 'health_declaration', title: 'Health Declaration', status: 'Complete' },
        ],
        hikers: [
            {
                fullName: 'Jane Doe',
                dateOfBirth: '1994-05-12',
                address: 'Ligao City, Albay',
                emergencyName: 'Maria Doe',
                emergencyRelationship: 'Mother',
                emergencyContact: '+63 900 123 4567',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
            {
                fullName: 'John Smith',
                dateOfBirth: '1991-08-23',
                address: 'Ragay, Albay',
                emergencyName: 'Michael Smith',
                emergencyRelationship: 'Brother',
                emergencyContact: '+63 900 765 4321',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
        ],
    },
    {
        id: 'BK-2026-0812-01',
        scheduleId: 'sch-ligao-2026-08-12',
        reference: 'TXN-2026-0812',
        leadHiker: 'Elena Santos',
        contact: 'elena.santos@example.com',
        trail: 'Balogo Trail',
        date: 'Aug 12, 2026',
        participants: 1,
        totalPaid: 650,
        paymentMethod: 'Mastercard',
        status: 'Completed',
        guide: 'M. Santos',
        feeBreakdown: [
            { label: 'Environmental fee (1 pax)', amount: 250 },
            { label: 'Guide fee', amount: 350 },
            { label: 'Processing fee', amount: 50 },
        ],
        documents: [
            { id: 'id_card', title: 'Valid Government-Issued ID card', status: 'Complete' },
            { id: 'booking_ticket', title: 'Booking Ticket Copy', status: 'Complete' },
            { id: 'barangay_clearance', title: 'Barangay Clearance / Community Tax Certificate', status: 'Complete' },
            { id: 'health_declaration', title: 'Health Declaration', status: 'Complete' },
        ],
        hikers: [
            {
                fullName: 'Elena Santos',
                dateOfBirth: '1995-04-16',
                address: 'Ligao City, Albay',
                emergencyName: 'Jose Santos',
                emergencyRelationship: 'Father',
                emergencyContact: '+63 900 789 0123',
                healthAnswers: {
                    health1: 'no', health2: 'yes', health3: 'no', health4: 'no', health5: 'no', health6: 'no',
                },
                agreeWaiver: true,
            },
        ],
    },
];

export const ADMIN_DAILY_QUOTA = [
    {
        trailId: 'amtic',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 24, 2026',
        booked: 44,
        capacity: 50,
        status: 'Limited',
    },
    {
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Oct 24, 2026',
        booked: 11,
        capacity: 30,
        status: 'Available',
    },
];

// Published climb schedules per trail. Each row is one date the park has
// opened for booking: capacity (slots), how many are taken, and the assigned
// guide. The hiker-facing booking calendar reads these to decide which dates
// are selectable. status derives from remaining slots (Available, Limited, Full).
export const ADMIN_SCHEDULES = [
    {
        id: 'sch-amtic-2026-10-05',
        trailId: 'amtic',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 05, 2026',
        dateKey: '2026-10-05',
        capacity: 20,
        booked: 8,
        guide: 'R. Villanueva',
        status: 'Available',
    },
    {
        id: 'sch-amtic-2026-10-06',
        trailId: 'amtic',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 06, 2026',
        dateKey: '2026-10-06',
        capacity: 20,
        booked: 12,
        guide: 'R. Villanueva',
        status: 'Available',
    },
    {
        id: 'sch-amtic-2026-10-07',
        trailId: 'amtic',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 07, 2026',
        dateKey: '2026-10-07',
        capacity: 20,
        booked: 20,
        guide: 'R. Villanueva',
        status: 'Full',
    },
    {
        id: 'sch-amtic-2026-10-08',
        trailId: 'amtic',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 08, 2026',
        dateKey: '2026-10-08',
        capacity: 20,
        booked: 18,
        guide: 'R. Villanueva',
        status: 'Limited',
    },
    {
        id: 'sch-amtic-2026-10-09',
        trailId: 'amtic',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 09, 2026',
        dateKey: '2026-10-09',
        capacity: 20,
        booked: 5,
        guide: 'R. Villanueva',
        status: 'Available',
    },
    {
        id: 'sch-amtic-2026-10-10',
        trailId: 'amtic',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 10, 2026',
        dateKey: '2026-10-10',
        capacity: 20,
        booked: 20,
        guide: 'R. Villanueva',
        status: 'Full',
    },
    {
        id: 'sch-amtic-2026-10-24',
        trailId: 'amtic',
        trail: 'Amtic Trail (or Sabluyon Trail)',
        date: 'Oct 24, 2026',
        dateKey: '2026-10-24',
        capacity: 50,
        booked: 44,
        guide: 'R. Villanueva',
        status: 'Limited',
    },
    {
        id: 'sch-ligao-2026-10-05',
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Oct 05, 2026',
        dateKey: '2026-10-05',
        capacity: 15,
        booked: 11,
        guide: 'M. Santos',
        status: 'Available',
    },
    {
        id: 'sch-ligao-2026-10-06',
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Oct 06, 2026',
        dateKey: '2026-10-06',
        capacity: 15,
        booked: 10,
        guide: 'M. Santos',
        status: 'Available',
    },
    {
        id: 'sch-ligao-2026-10-07',
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Oct 07, 2026',
        dateKey: '2026-10-07',
        capacity: 15,
        booked: 15,
        guide: 'M. Santos',
        status: 'Full',
    },
    {
        id: 'sch-ligao-2026-10-08',
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Oct 08, 2026',
        dateKey: '2026-10-08',
        capacity: 15,
        booked: 14,
        guide: 'M. Santos',
        status: 'Limited',
    },
    {
        id: 'sch-ligao-2026-10-09',
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Oct 09, 2026',
        dateKey: '2026-10-09',
        capacity: 15,
        booked: 9,
        guide: 'M. Santos',
        status: 'Available',
    },
    {
        id: 'sch-ligao-2026-10-10',
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Oct 10, 2026',
        dateKey: '2026-10-10',
        capacity: 15,
        booked: 15,
        guide: 'M. Santos',
        status: 'Full',
    },
    {
        id: 'sch-ligao-2026-10-24',
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Oct 24, 2026',
        dateKey: '2026-10-24',
        capacity: 30,
        booked: 11,
        guide: 'M. Santos',
        status: 'Available',
    },
    {
        id: 'sch-ligao-2026-08-12',
        trailId: 'ligao',
        trail: 'Balogo Trail',
        date: 'Aug 12, 2026',
        dateKey: '2026-08-12',
        capacity: 30,
        booked: 1,
        guide: 'M. Santos',
        status: 'Full',
    },
];

export const ADMIN_GUIDES = [
    {
        id: 'guide-001',
        name: 'Rodel Villanueva',
        email: 'r.villanueva@masaraga.gov.ph',
        phone: '+63 917 123 4567',
        specialization: 'Summit Assault',
        certification: 'DENR Accredited',
        status: 'Active',
        assignedTrails: ['amtic'],
        dateAccredited: '2023-06-15',
        totalClimbs: 187,
        rating: 4.9,
        emergencyContact: '+63 917 111 2222',
        notes: 'Lead guide for Amtic Trail. Expert in rope-assisted ridge sections.',
    },
    {
        id: 'guide-002',
        name: 'Maria Santos',
        email: 'm.santos@masaraga.gov.ph',
        phone: '+63 918 234 5678',
        specialization: 'Eco-Trail & Flora/Fauna',
        certification: 'DENR Accredited',
        status: 'Active',
        assignedTrails: ['ligao'],
        dateAccredited: '2023-08-20',
        totalClimbs: 142,
        rating: 4.8,
        emergencyContact: '+63 918 222 3333',
        notes: 'Specializes in Balogo Trail. Certified wildlife spotter and Leave No Trace trainer.',
    },
    {
        id: 'guide-003',
        name: 'Jose Reyes',
        email: 'j.reyes@masaraga.gov.ph',
        phone: '+63 919 345 6789',
        specialization: 'First Aid & Safety',
        certification: 'DENR Accredited',
        status: 'Active',
        assignedTrails: ['amtic', 'ligao'],
        dateAccredited: '2024-01-10',
        totalClimbs: 98,
        rating: 4.7,
        emergencyContact: '+63 919 333 4444',
        notes: 'Wilderness first aid certified. Covers both Amtic and Balogo trails.',
    },
    {
        id: 'guide-004',
        name: 'Ana Delos Santos',
        email: 'a.delsantos@masaraga.gov.ph',
        phone: '+63 920 456 7890',
        specialization: 'Beginner Groups',
        certification: 'DENR Accredited',
        status: 'Active',
        assignedTrails: ['ligao'],
        dateAccredited: '2024-03-05',
        totalClimbs: 64,
        rating: 4.6,
        emergencyContact: '+63 920 444 5555',
        notes: 'Patient guide experienced with first-time hikers. Fluent in Bicolano and Tagalog.',
    },
    {
        id: 'guide-005',
        name: 'Paolo Cruz',
        email: 'p.cruz@masaraga.gov.ph',
        phone: '+63 921 567 8901',
        specialization: 'Summit Assault',
        certification: 'Provisional',
        status: 'On Leave',
        assignedTrails: ['amtic'],
        dateAccredited: '2024-06-18',
        totalClimbs: 31,
        rating: 4.5,
        emergencyContact: '+63 921 555 6666',
        notes: 'Provisional accreditation pending completion of 50 solo climb requirement.',
    },
    {
        id: 'guide-006',
        name: 'Ramon Valdez',
        email: 'r.valdez@masaraga.gov.ph',
        phone: '+63 922 678 9012',
        specialization: 'Emergency Response',
        certification: 'DENR Accredited',
        status: 'Active',
        assignedTrails: ['amtic', 'ligao'],
        dateAccredited: '2023-11-01',
        totalClimbs: 156,
        rating: 4.9,
        emergencyContact: '+63 922 666 7777',
        notes: 'Trained emergency responder. Handles trail evacuations and weather-related incidents.',
    },
];

export const ADMIN_ANNOUNCEMENTS = [
    {
        id: 'ANN-2026-1015-01',
        title: 'Trail Maintenance Schedule - October 2026',
        category: 'Advisory',
        audience: 'all',
        content: 'Please be advised that scheduled maintenance will be conducted on the Amtic Trail from October 28-30, 2026. During this period, the lower loop and wooden boardwalk sections will be temporarily closed for repairs. Hikers are advised to use the Ridge Trail connection as an alternative route. We apologize for any inconvenience and appreciate your understanding as we work to improve trail safety.',
        status: 'sent',
        createdAt: '2026-10-15T08:00:00.000Z',
        sentAt: '2026-10-15T08:00:00.000Z',
        author: 'Juan Dela Cruz',
    },
    {
        id: 'ANN-2026-1020-02',
        title: 'New Online Permit System Now Live',
        category: 'Update',
        audience: 'hikers',
        content: 'We are excited to announce that our new Online Permit System is now live! Hikers can now book permits, receive digital QR passes, and make payments through GCash and Maya directly from our website. The system features instant approval for standard permits, downloadable e-passes, and integrated payment methods. Visit the booking page to experience the streamlined process.',
        status: 'sent',
        createdAt: '2026-10-20T10:30:00.000Z',
        sentAt: '2026-10-20T10:30:00.000Z',
        author: 'Juan Dela Cruz',
    },
    {
        id: 'ANN-2026-1022-03',
        title: 'Weather Advisory: Typhoon Kristine',
        category: 'Weather',
        audience: 'all',
        content: 'PAGASA has raised Tropical Cyclone Wind Signal (TCWS) #1 for Albay Province due to Typhoon Kristine. As a precautionary measure, all trails in Mt. Masaraga Protected Landscape will be closed effective immediately until further notice. Affected bookings are eligible for free rescheduling within 6 months or a full refund. Please monitor official channels for updates.',
        status: 'sent',
        createdAt: '2026-10-22T14:00:00.000Z',
        sentAt: '2026-10-22T14:00:00.000Z',
        author: 'Juan Dela Cruz',
    },
    {
        id: 'ANN-2026-1023-04',
        title: 'Staff Meeting - Trail Safety Protocols',
        category: 'Announcement',
        audience: 'staff',
        content: 'Reminder to all park staff and guides: Monthly safety protocol review meeting scheduled for October 25, 2026 at 9:00 AM at the Ranger Station. Agenda includes emergency response procedures, first aid refresher, and updated trail condition reporting. Attendance is mandatory for all active guides. Please bring your certification cards for verification.',
        status: 'draft',
        createdAt: '2026-10-23T09:00:00.000Z',
        sentAt: null,
        author: 'Maria Santos',
    },
    {
        id: 'ANN-2026-1024-05',
        title: 'Year-End Report Submission',
        category: 'Announcement',
        audience: 'admins',
        content: 'All department heads are required to submit their year-end reports by November 15, 2026. Reports should include: visitor statistics, revenue breakdown, trail condition assessments, incident reports, and 2027 projections. Templates have been distributed via email. Please coordinate with the admin office for any clarifications.',
        status: 'draft',
        createdAt: '2026-10-24T11:00:00.000Z',
        sentAt: null,
        author: 'Juan Dela Cruz',
    },
];



