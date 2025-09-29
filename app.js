// Phoenix Fusion FRA Dashboard – Complete Multilingual & Voice Enhanced Implementation
// Government FRA Data with Multilingual Support
const governmentData = {
    "statistics": {
        "total_claims_filed": 5123104,
        "individual_claims": 4911495,
        "community_claims": 211609,
        "titles_distributed": 2511375,
        "approval_rate": 49.02,
        "rejected_claims": 1862056,
        "pending_claims": 749673,
        "last_updated": "2025-05-31"
    },
    "states": {
        "Madhya Pradesh": {
            "code": "MP",
            "center": [23.2599, 77.4126],
            "claims_data": {
                "total_claims": 627000,
                "approved_claims": 294000,
                "pending_claims": 122000,
                "rejected_claims": 322000,
                "approval_rate": 47.6,
                "titles_distributed": 294000
            },
            "forest_data": {
                "forest_cover_sq_km": 77073,
                "forest_cover_percentage": 25.11,
                "tree_cover_sq_km": 8500,
                "bamboo_bearing_area": 25000,
                "carbon_stock_million_tonnes": 608
            },
            "demographics": {
                "st_population": 15316784,
                "forest_dependent_population": 2500000,
                "tribal_districts": 20
            }
        },
        "Tripura": {
            "code": "TR",
            "center": [23.9408, 91.9882],
            "claims_data": {
                "total_claims": 23450,
                "approved_claims": 12890,
                "pending_claims": 7650,
                "rejected_claims": 2910,
                "approval_rate": 55.0,
                "titles_distributed": 12890
            },
            "forest_data": {
                "forest_cover_sq_km": 7726,
                "forest_cover_percentage": 73.68,
                "tree_cover_sq_km": 520,
                "bamboo_bearing_area": 3200,
                "carbon_stock_million_tonnes": 85
            },
            "demographics": {
                "st_population": 1166813,
                "forest_dependent_population": 550000,
                "tribal_districts": 8
            }
        },
        "Odisha": {
            "code": "OD",
            "center": [20.9517, 85.0985],
            "claims_data": {
                "total_claims": 720000,
                "approved_claims": 355000,
                "pending_claims": 185000,
                "rejected_claims": 144000,
                "approval_rate": 49.3,
                "titles_distributed": 355000
            },
            "forest_data": {
                "forest_cover_sq_km": 51619,
                "forest_cover_percentage": 33.16,
                "tree_cover_sq_km": 4800,
                "bamboo_bearing_area": 8500,
                "carbon_stock_million_tonnes": 425
            },
            "demographics": {
                "st_population": 9590756,
                "forest_dependent_population": 1800000,
                "tribal_districts": 13
            }
        },
        "Telangana": {
            "code": "TG",
            "center": [18.1124, 79.0193],
            "claims_data": {
                "total_claims": 655000,
                "approved_claims": 340000,
                "pending_claims": 145000,
                "rejected_claims": 85000,
                "approval_rate": 58.0,
                "titles_distributed": 340000
            },
            "forest_data": {
                "forest_cover_sq_km": 24575,
                "forest_cover_percentage": 22.0,
                "tree_cover_sq_km": 3200,
                "bamboo_bearing_area": 2800,
                "carbon_stock_million_tonnes": 198
            },
            "demographics": {
                "st_population": 3152716,
                "forest_dependent_population": 850000,
                "tribal_districts": 10
            }
        }
    },
    "central_schemes": [
        {
            "name": "PM-KISAN",
            "description": "Direct income support for farmers",
            "benefit": "₹6,000 per year in three installments",
            "eligible_beneficiaries": 1256000,
            "criteria": ["Valid FRA patta", "Agricultural land ownership", "Aadhaar linking"],
            "coverage_states": ["MP", "TR", "OD", "TG"],
            "url": "https://pmkisan.gov.in/"
        },
        {
            "name": "Jal Jeevan Mission",
            "description": "Providing tap water connection to every rural household",
            "benefit": "Free household water connection",
            "eligible_beneficiaries": 890000,
            "criteria": ["Rural household with FRA patta", "No existing piped water connection"],
            "coverage_states": ["MP", "TR", "OD", "TG"],
            "url": "https://jaljeevanmission.gov.in/"
        },
        {
            "name": "MGNREGA",
            "description": "Rural employment guarantee scheme",
            "benefit": "100 days guaranteed employment per household",
            "eligible_beneficiaries": 2100000,
            "criteria": ["Rural household", "Adult members available for work", "Job card registration"],
            "coverage_states": ["MP", "TR", "OD", "TG"],
            "url": "https://nrega.nic.in/"
        },
        {
            "name": "PM Awas Yojana Gramin",
            "description": "Housing for rural poor",
            "benefit": "Financial assistance for house construction",
            "eligible_beneficiaries": 450000,
            "criteria": ["BPL household", "Landless or with less than 0.43 hectare land"],
            "coverage_states": ["MP", "TR", "OD", "TG"],
            "url": "https://pmayg.gov.in/"
        }
    ]
};

// Language catalog with enhanced multilingual support
const languageCatalogue = [
    {
        code: 'en', name: 'English', native: 'English',
        greeting: 'Hello! How can I help you with FRA queries?',
        roman: null,
        placeholder: 'Ask about FRA data, claims, or forest coverage...',
        sample_questions: [
            'What is the approval rate for FRA claims?',
            'Tell me about forest coverage statistics',
            'Which central schemes are available?'
        ]
    },
    {
        code: 'hi', name: 'Hindi', native: 'हिंदी',
        greeting: 'नमस्ते! मैं आपकी वन अधिकार अधिनियम से संबंधित सहायता कर सकता हूँ।',
        roman: 'Namaste! Main aapki Van Adhikaar Adhiniyam se sambandhit sahayata kar sakta hoon.',
        placeholder: 'यहाँ अपना प्रश्न लिखें...',
        sample_questions: ['FRA क्या है?', 'कैसे आवेदन करें?', 'स्थिति जाँचें']
    },
    {
        code: 'bn', name: 'Bengali', native: 'বাংলা',
        greeting: 'নমস্কার! বন অধিকার আইন নিয়ে আমি আপনাকে সাহায্য করতে পারি।',
        roman: 'Nomoskar! Bon odhikar ain niye ami apnake shahajjo korte pari.',
        placeholder: 'এখানে আপনার প্রশ্ন লিখুন...',
        sample_questions: ['FRA কী?', 'কিভাবে আবেদন করবেন?', 'স্ট্যাটাস চেক করুন']
    },
    {
        code: 'te', name: 'Telugu', native: 'తెలుగు',
        greeting: 'నమస్కారం! అటవీ హక్కుల చట్టం విషయంలో నేను మీకు సహాయం చేయగలను.',
        roman: 'Namaskāram! Aṭavī hakkula cattaṁ viṣayamlō nēnu mīku sahāyaṁ cēyagalanu.',
        placeholder: 'మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి...',
        sample_questions: ['FRA అంటే ఏమిటి?', 'అప్లై చేయడం ఎలా?', 'స్థితిని చూసుకోండి']
    },
    {
        code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ',
        greeting: 'ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କୁ ଜଙ୍ଗଲ ଅଧିକାର ଆଇନ ସମ୍ବନ୍ଧରେ ସାହାଯ୍ୟ କରିପାରିବି।',
        roman: 'Namaskār! Muṁ āpaṇanku jaṅgala adhikāra āʼina sambandhē sāhāyya karipāribi.',
        placeholder: 'ଏଠାରେ ଆପଣଙ୍କ ପ୍ରଶ୍ନ ଟାଇପ୍ କରନ୍ତୁ...',
        sample_questions: ['FRA କଣ?', 'କିପରି ଆବେଦନ କରିବେ?', 'ସ୍ଥିତି ଯାଞ୍ଚନ୍ତୁ']
    },
    {
        code: 'mr', name: 'Marathi', native: 'मराठी',
        greeting: 'नमस्कार! मी तुम्हाला वन हक्क कायद्यासंबंधी मदत करू शकते.',
        roman: 'Namaskār! Mī tumhālā Van Hakka Kāydyāsaṁbaṁdhī madat karū śakte.',
        placeholder: 'आपला प्रश्न येथे टाईप करा...',
        sample_questions: ['FRA म्हणजे काय?', 'अर्ज कसा करायचा?', 'स्थिती तपासा']
    },
    {
        code: 'gu', name: 'Gujarati', native: 'ગુજરાતી',
        greeting: 'નમસ્કાર! હું તમને વન અધિકાર અધિનિયમ અંગે મદદ કરી શકું છું.',
        roman: 'Namaskār! Huṁ tamnē Van Adhikār Adhiniyam aṅgē madad karī śakuṁ chuṁ.',
        placeholder: 'અહીં તમારો પ્રશ્ન લખો...',
        sample_questions: ['FRA શું છે?', 'અરજી કેવી રીતે કરવી?', 'સ્થિતિ તપાસો']
    },
    {
        code: 'ta', name: 'Tamil', native: 'தமிழ்',
        greeting: 'வணக்கம்! நான் வன உரிமைகள் சட்டம் தொடர்பாக உங்களுக்கு உதவ முடியும்.',
        roman: 'Vaṇakkam! Nāṉ vaṉ urimaikaḷ cattaṁ toṭarbaaga uṅkaḷukku utava muṭiyum.',
        placeholder: 'உங்கள் கேள்வியை இங்கே டைப் செய்யவும்...',
        sample_questions: ['FRA என்றால் என்ன?', 'எப்படிக் விண்ணப்பிப்பது?', 'நிலை சரிபார்க்கவும்']
    }
];

// UI translation dictionary
const uiTranslations = {
    title: {
        hi: 'Phoenix Fusion FRA', bn: 'Phoenix Fusion FRA', te: 'Phoenix Fusion FRA', 
        or: 'Phoenix Fusion FRA', mr: 'Phoenix Fusion FRA', gu: 'Phoenix Fusion FRA', ta: 'Phoenix Fusion FRA'
    },
    subtitle: {
        hi: 'वन अधिकार अधिनियम निगरानी प्रणाली',
        bn: 'বন অধিকার আইন পর্যবেক্ষণ ব্যবস্থা',
        te: 'అటవీ హక్కుల చట్ట పర్యవేక్షణ వ్యవస్థ',
        or: 'ଜଙ୍ଗଲ ଅଧିକାର ଆଇନ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ',
        mr: 'वन हक्क कायदा निरीक्षण प्रणाली',
        gu: 'વન અધિકાર અધિનિયમ મોનિટરિંગ સિસ્ટમ',
        ta: 'வன உரிமைகள் சட்ட கண்காணிப்பு அமைப்பு'
    },
    total_claims: {
        hi: 'कुल दावे', bn: 'মোট দাবি', te: 'మొత్తం క్లెయిమ్‌లు', 
        or: 'କୁଲ ଦାବି', mr: 'एकूण दावे', gu: 'કુલ દાવા', ta: 'மொத்த கோரிக்கைகள்'
    },
    titles_distributed: {
        hi: 'वितरित पट्टे', bn: 'বিতরণকৃত শিরোনাম', te: 'వితరించబడిన పట్టాలు', 
        or: 'ବଣ୍ଟନ ହୋଇଥିବା ପଟ୍ଟା', mr: 'वाटप झालेले पट्टे', gu: 'વિતરિત પ્લોટ ટાઈટલ', ta: 'வழங்கப்பட்ட உரிமைகள்'
    },
    ai_assistant: {
        hi: 'AI सहायक', bn: 'AI সহায়ক', te: 'AI సహాయకుడు', 
        or: 'AI ସହାୟକ', mr: 'AI सहाय्यक', gu: 'AI સહાયક', ta: 'AI உதவியாளர்'
    },
    send: {
        hi: 'भेजें', bn: 'পাঠান', te: 'పంపండి', 
        or: 'ପଠାନ୍ତୁ', mr: 'पाठवा', gu: 'મોકલો', ta: 'அனுப்பு'
    }
};

// Global variables
let map;
let markers = [];
let charts = {};
let currentLanguage = 'en';
let recognition;
let isListening = false;
let currentLayer = 'street';
let tileLayers = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Phoenix Fusion FRA Dashboard initializing...');
    
    setTimeout(() => {
        try {
            initializePhoenixLogo();
            initializeColorPalette();
            initializeMap();
            initializeCharts();
            initializeOCRSimulator();
            initializeMultilingualAI();
            initializeSchemeCards();
            setupEventListeners();
            setupVoiceControls();
            setupLanguageSelector();
            
            // Set default language
            setLanguage('en');
            
            console.log('All components initialized successfully');
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }, 100);
});

// Color Palette Initialization
function initializeColorPalette() {
    console.log('Initializing color palette...');
    try {
        const paletteToggle = document.getElementById('palette-toggle');
        const paletteContent = document.getElementById('color-palette-content');
        
        if (paletteToggle && paletteContent) {
            paletteToggle.addEventListener('click', function() {
                const isHidden = paletteContent.classList.contains('hidden');
                
                if (isHidden) {
                    paletteContent.classList.remove('hidden');
                    paletteToggle.classList.add('expanded');
                } else {
                    paletteContent.classList.add('hidden');
                    paletteToggle.classList.remove('expanded');
                }
            });
        }
        
        console.log('Color palette initialized successfully');
    } catch (error) {
        console.error('Color palette initialization error:', error);
    }
}

// Language selector setup
function setupLanguageSelector() {
    const mainLangSelect = document.getElementById('main-language-select');
    if (mainLangSelect) {
        mainLangSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    }
}

// Set language function
function setLanguage(langCode) {
    const langMeta = languageCatalogue.find(l => l.code === langCode);
    if (!langMeta) return;

    currentLanguage = langCode;

    // Update header dropdown selected value
    const mainSelect = document.getElementById('main-language-select');
    if (mainSelect && mainSelect.value !== langCode) mainSelect.value = langCode;

    translatePage();
    updateAIForLanguage(langMeta);
    
    console.log(`Language changed to: ${langMeta.native}`);
}

// Translate page elements
function translatePage() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const translation = (uiTranslations[key] && uiTranslations[key][currentLanguage]) || el.textContent;
        el.textContent = translation;
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        const langMeta = languageCatalogue.find(l => l.code === currentLanguage);
        if (langMeta && key === 'ai_placeholder') {
            el.placeholder = langMeta.placeholder;
        }
    });
}

// Phoenix Logo Initialization
function initializePhoenixLogo() {
    console.log('Initializing Phoenix logo...');
    try {
        const phoenixLogo = document.querySelector('.phoenix-logo-circular');
        if (phoenixLogo) {
            phoenixLogo.addEventListener('mouseenter', function() {
                this.style.filter = 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.6))';
            });
            
            phoenixLogo.addEventListener('mouseleave', function() {
                this.style.filter = '';
            });
            
            phoenixLogo.addEventListener('click', function() {
                console.log('Phoenix logo clicked');
                this.style.transform = 'scale(1.15) rotate(360deg)';
                this.style.filter = 'drop-shadow(0 0 30px rgba(255, 107, 107, 0.8)) brightness(1.1)';
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.filter = '';
                }, 800);
            });
            
            console.log('Phoenix logo initialized successfully');
        }
    } catch (error) {
        console.error('Phoenix logo initialization error:', error);
    }
}

// Map Initialization
function initializeMap() {
    console.log('Initializing map...');
    try {
        map = L.map('india-map').setView([21.0, 78.0], 5);

        // Initialize tile layers with working URLs
        tileLayers.street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        });

        tileLayers.satellite1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            maxZoom: 18
        });

        tileLayers.satellite2 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            attribution: '© Google',
            maxZoom: 20
        });

        // Add default layer
        tileLayers.street.addTo(map);
        currentLayer = 'street';

        // Add state markers
        Object.entries(governmentData.states).forEach(([stateName, stateData]) => {
            const approvalRate = stateData.claims_data.approval_rate;
            let markerColor = '#DC3545';
            if (approvalRate >= 55) markerColor = '#138808';
            else if (approvalRate >= 45) markerColor = '#FF9933';

            const marker = L.circleMarker(stateData.center, {
                radius: 15,
                fillColor: markerColor,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map);

            marker.bindPopup(`
                <div style="padding: 10px; max-width: 250px;">
                    <h3 style="margin: 0 0 10px 0; color: #1f3b3b;">${stateName}</h3>
                    <p style="margin: 5px 0;"><strong>Total Claims:</strong> ${stateData.claims_data.total_claims.toLocaleString()}</p>
                    <p style="margin: 5px 0;"><strong>Approval Rate:</strong> ${stateData.claims_data.approval_rate}%</p>
                    <p style="margin: 5px 0;"><strong>Forest Cover:</strong> ${stateData.forest_data.forest_cover_percentage}%</p>
                    <button onclick="showStateDetails('${stateName}')" style="background: #21808d; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin-top: 8px;">View Details</button>
                </div>
            `);

            markers.push({
                marker,
                stateName,
                stateCode: stateData.code
            });
        });

        // Setup layer controls
        setupLayerControls();
        
        console.log('Map initialized successfully');
    } catch (error) {
        console.error('Map initialization error:', error);
    }
}

// Setup layer controls
function setupLayerControls() {
    const layerBtns = document.querySelectorAll('.layer-btn');
    
    layerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const layerType = e.target.dataset.layer;
            switchMapLayer(layerType);
            
            // Update active button
            layerBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

// Switch map layer
function switchMapLayer(layerType) {
    if (currentLayer === layerType) return;
    
    console.log(`Switching from ${currentLayer} to ${layerType} layer`);
    
    // Remove current layer
    if (tileLayers[currentLayer]) {
        map.removeLayer(tileLayers[currentLayer]);
    }
    
    // Add new layer
    if (tileLayers[layerType]) {
        tileLayers[layerType].addTo(map);
        currentLayer = layerType;
        console.log(`Successfully switched to ${layerType} layer`);
    } else {
        console.error(`Layer ${layerType} not found`);
    }
}

// Chart Initialization
function initializeCharts() {
    console.log('Initializing charts...');
    try {
        if (typeof Chart === 'undefined') {
            console.error('Chart.js not loaded');
            return;
        }

        createClaimsChart();
        createForestChart();
        createApprovalRateChart();
        createSchemeBeneficiariesChart();
        console.log('All charts initialized successfully');
    } catch (error) {
        console.error('Charts initialization error:', error);
    }
}

function createClaimsChart() {
    try {
        const ctx = document.getElementById('claims-chart');
        if (!ctx) return;
        
        const stateNames = Object.keys(governmentData.states);
        const claimsData = stateNames.map(state => governmentData.states[state].claims_data.total_claims);

        charts.claims = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: stateNames,
                datasets: [{
                    label: 'Total Claims',
                    data: claimsData,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'FRA Claims by State',
                        font: { size: 16 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Claims chart error:', error);
    }
}

function createForestChart() {
    try {
        const ctx = document.getElementById('forest-chart');
        if (!ctx) return;
        
        const stateNames = Object.keys(governmentData.states);
        const forestData = stateNames.map(state => governmentData.states[state].forest_data.forest_cover_percentage);

        charts.forest = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: stateNames,
                datasets: [{
                    data: forestData,
                    backgroundColor: ['#5D878F', '#DB4545', '#D2BA4C', '#964325']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Forest Cover Percentage',
                        font: { size: 16 }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Forest chart error:', error);
    }
}

function createApprovalRateChart() {
    try {
        const ctx = document.getElementById('approval-rate-chart');
        if (!ctx) return;
        
        const stateNames = Object.keys(governmentData.states);
        const approvalRates = stateNames.map(state => governmentData.states[state].claims_data.approval_rate);

        charts.approvalRate = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: stateNames,
                datasets: [{
                    label: 'Approval Rate (%)',
                    data: approvalRates,
                    borderColor: '#944454',
                    backgroundColor: '#944454',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'FRA Approval Rates',
                        font: { size: 16 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Approval rate chart error:', error);
    }
}

function createSchemeBeneficiariesChart() {
    try {
        const ctx = document.getElementById('scheme-beneficiaries-chart');
        if (!ctx) return;
        
        const schemes = governmentData.central_schemes;
        const schemeNames = schemes.map(scheme => scheme.name);
        const beneficiaries = schemes.map(scheme => scheme.eligible_beneficiaries);

        charts.schemeBeneficiaries = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: schemeNames,
                datasets: [{
                    label: 'Eligible Beneficiaries',
                    data: beneficiaries,
                    backgroundColor: ['#13343B', '#1FB8CD', '#FFC185', '#B4413C'],
                    borderColor: ['#13343B', '#1FB8CD', '#FFC185', '#B4413C'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Central Scheme Beneficiaries',
                        font: { size: 16 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return (value / 100000).toFixed(1) + 'L';
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Scheme beneficiaries chart error:', error);
    }
}

// AI Assistant Initialization
function initializeMultilingualAI() {
    console.log('Initializing Multilingual AI Assistant...');
    try {
        const aiToggle = document.getElementById('ai-toggle');
        const aiChat = document.getElementById('ai-chat');
        const aiClose = document.getElementById('ai-close');
        const aiInput = document.getElementById('ai-input');
        const aiSend = document.getElementById('ai-send');

        if (!aiToggle) return;

        aiToggle.addEventListener('click', (e) => {
            e.preventDefault();
            aiChat.classList.toggle('hidden');
        });

        if (aiClose) {
            aiClose.addEventListener('click', () => {
                aiChat.classList.add('hidden');
            });
        }

        if (aiSend && aiInput) {
            aiSend.addEventListener('click', sendAIMessage);
            aiInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendAIMessage();
                }
            });
        }

        // Sample question clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('sample-question')) {
                const question = e.target.dataset.question;
                if (question && aiInput) {
                    aiInput.value = question;
                    sendAIMessage();
                }
            }
        });

        console.log('Multilingual AI Assistant initialized successfully');
    } catch (error) {
        console.error('Multilingual AI Assistant initialization error:', error);
    }
}

// Update AI for selected language
function updateAIForLanguage(langMeta) {
    const welcome = document.getElementById('welcome-message');
    const pronTip = document.getElementById('pronunciation-tip');
    const aiInput = document.getElementById('ai-input');
    const currLang = document.getElementById('current-language');

    if (welcome) welcome.textContent = langMeta.greeting;
    
    if (pronTip) {
        if (langMeta.roman) {
            pronTip.textContent = langMeta.roman;
            pronTip.style.display = 'block';
        } else {
            pronTip.style.display = 'none';
        }
    }

    if (aiInput) aiInput.placeholder = langMeta.placeholder;
    if (currLang) currLang.textContent = `🌐 ${langMeta.native}`;

    // Update sample questions
    const sampleWrap = document.getElementById('sample-questions');
    if (sampleWrap) {
        sampleWrap.innerHTML = '';
        langMeta.sample_questions.forEach(q => {
            const d = document.createElement('div');
            d.className = 'sample-question';
            d.dataset.question = q;
            d.textContent = `💡 ${q}`;
            sampleWrap.appendChild(d);
        });
    }
}

// Send AI message
function sendAIMessage() {
    const aiInput = document.getElementById('ai-input');
    const aiMessages = document.getElementById('ai-messages');
    const msg = aiInput.value.trim();
    if (!msg) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'ai-message user';
    userMessage.innerHTML = `<p>${msg}</p>`;
    aiMessages.appendChild(userMessage);

    aiInput.value = '';

    // Simulate AI response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'ai-message bot';
        botMessage.innerHTML = `<p>${generateMultilingualAIResponse(msg)}</p>`;
        aiMessages.appendChild(botMessage);
        aiMessages.scrollTop = aiMessages.scrollHeight;

        // Voice synthesis
        speakOutLoud(botMessage.textContent);
    }, 1000);

    aiMessages.scrollTop = aiMessages.scrollHeight;
}

// Generate multilingual AI response
function generateMultilingualAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    const langMeta = languageCatalogue.find(l => l.code === currentLanguage);

    // Define responses in different languages
    const responses = {
        en: {
            claims: 'Based on the latest data, we have processed 51.2L total FRA claims across the four focus states. Telangana has the highest approval rate at 58%, while Madhya Pradesh has the most total claims at 6.27L.',
            forest: 'Forest coverage varies significantly across states: Tripura leads with 73.68% coverage, followed by Odisha at 33.16%, Madhya Pradesh at 25.11%, and Telangana at 22%.',
            schemes: 'Major central schemes integrated with FRA include PM-KISAN (12.56L beneficiaries), MGNREGA (21L beneficiaries), Jal Jeevan Mission (8.9L beneficiaries), and PM Awas Yojana (4.5L beneficiaries).',
            default: 'I can help you with information about FRA claims, forest coverage, approval rates, demographics, central scheme integration, and official portal links in multiple languages.'
        },
        hi: {
            claims: 'नवीनतम डेटा के आधार पर, हमने चार मुख्य राज्यों में कुल 51.2 लाख FRA दावों को संसाधित किया है। तेलंगाना में सबसे अधिक 58% अनुमोदन दर है।',
            forest: 'राज्यों में वन आवरण काफी भिन्न है: त्रिपुरा 73.68% कवरेज के साथ अग्रणी है, इसके बाद ओडिशा 33.16% पर है।',
            schemes: 'FRA के साथ एकीकृत प्रमुख केंद्रीय योजनाओं में PM-KISAN, MGNREGA, जल जीवन मिशन, और PM आवास योजना शामिल हैं।',
            default: 'मैं FRA दावों, वन कवरेज, अनुमोदन दरों के बारे में जानकारी के साथ आपकी सहायता कर सकता हूं।'
        },
        bn: {
            claims: 'সর্বশেষ তথ্য অনুযায়ী, আমরা চারটি মূল রাজ্যে মোট ৫১.২ লক্ষ এফআরএ দাবি প্রক্রিয়া করেছি।',
            forest: 'রাজ্যগুলিতে বনের আচ্ছাদন উল্লেখযোগ্যভাবে পরিবর্তিত হয়: ত্রিপুরা ৭৩.৬৮% কভারেজ নিয়ে এগিয়ে।',
            schemes: 'এফআরএর সাথে সমন্বিত প্রধান কেন্দ্রীয় প্রকল্পগুলির মধ্যে রয়েছে পিএম-কিসান, MGNREGA।',
            default: 'আমি FRA দাবি, বনের আচ্ছাদন সম্পর্কে তথ্য দিয়ে সাহায্য করতে পারি।'
        }
    };

    const currentResponses = responses[currentLanguage] || responses['en'];

    if (message.includes('claims') || message.includes('approved') || message.includes('approval')) {
        return currentResponses.claims;
    } else if (message.includes('forest') || message.includes('coverage') || message.includes('cover')) {
        return currentResponses.forest;
    } else if (message.includes('scheme') || message.includes('benefit')) {
        return currentResponses.schemes;
    } else {
        return currentResponses.default;
    }
}

// Voice Controls Setup
function setupVoiceControls() {
    const voiceBtn = document.getElementById('voice-btn');
    const voiceStatus = document.getElementById('voice-status');

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        if (voiceBtn) voiceBtn.style.display = 'none';
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
        isListening = true;
        voiceBtn.classList.add('listening');
        voiceStatus.textContent = 'Listening...';
    };

    recognition.onerror = (e) => {
        console.error('Speech recognition error:', e);
        isListening = false;
        voiceBtn.classList.remove('listening');
        voiceStatus.textContent = 'Click to speak';
    };

    recognition.onend = () => {
        isListening = false;
        voiceBtn.classList.remove('listening');
        voiceStatus.textContent = 'Click to speak';
    };

    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
        
        const aiInput = document.getElementById('ai-input');
        if (aiInput) {
            aiInput.value = transcript;
            sendAIMessage();
        }
    };

    if (voiceBtn) {
        voiceBtn.addEventListener('click', () => {
            if (isListening) {
                recognition.stop();
                return;
            }
            
            recognition.lang = mapToSpeechLang(currentLanguage);
            recognition.start();
        });
    }
}

// Speak out loud function
function speakOutLoud(text) {
    if (!('speechSynthesis' in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = mapToSpeechLang(currentLanguage);
    
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang === utterance.lang) || voices.find(v => v.lang.startsWith(utterance.lang.split('-')[0]));
    if (voice) utterance.voice = voice;
    
    window.speechSynthesis.speak(utterance);
}

// Map language code to speech language
function mapToSpeechLang(code) {
    const mapping = {
        en: 'en-IN', hi: 'hi-IN', bn: 'bn-IN', te: 'te-IN', 
        or: 'or-IN', mr: 'mr-IN', gu: 'gu-IN', ta: 'ta-IN'
    };
    return mapping[code] || 'en-IN';
}

// OCR Simulator Initialization
function initializeOCRSimulator() {
    console.log('Initializing OCR Simulator...');
    try {
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');
        
        if (!uploadArea || !fileInput) return;

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(files);
            }
        });

        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileUpload(e.target.files);
            }
        });

        console.log('OCR Simulator initialized successfully');
    } catch (error) {
        console.error('OCR Simulator initialization error:', error);
    }
}

// Handle file upload
function handleFileUpload(files) {
    console.log('Processing file upload:', files[0].name);
    const file = files[0];
    const ocrResults = document.getElementById('ocr-results');
    const progressFill = document.querySelector('.progress-fill');
    const statusText = document.querySelector('.status-text');
    const extractedData = document.querySelector('.extracted-data');

    if (!ocrResults || !progressFill || !statusText || !extractedData) return;

    ocrResults.style.display = 'block';

    // Simulate OCR processing
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;

        progressFill.style.width = progress + '%';

        if (progress < 30) {
            statusText.textContent = 'Analyzing document...';
        } else if (progress < 70) {
            statusText.textContent = 'Extracting text...';
        } else if (progress < 90) {
            statusText.textContent = 'Validating data...';
        } else {
            statusText.textContent = 'Complete!';
        }

        if (progress >= 100) {
            clearInterval(progressInterval);
            showExtractedData(file.name);
        }
    }, 200);
}

// Show extracted data
function showExtractedData(fileName) {
    const extractedData = document.querySelector('.extracted-data');
    if (!extractedData) return;
    
    let sampleData = '';
    if (fileName.toLowerCase().includes('aadhaar')) {
        sampleData = `Document: Aadhaar Card
Name: राम कुमार / Ram Kumar
Aadhaar: 1234 5678 9012
DOB: 15/08/1985
Address: Village Rampur
District: Balaghat, MP
Mobile: +91 98765*****
Status: Verified ✓`;
    } else if (fileName.toLowerCase().includes('patta') || fileName.toLowerCase().includes('fra')) {
        sampleData = `Document: FRA Patta/Title
Beneficiary: श्री राम कुमार
Survey No: 123/45
Area: 2.5 acres
Location: Village Rampur
District: Balaghat, MP
Issue Date: 12/03/2023
Type: Individual Rights
Status: Valid ✓`;
    } else {
        sampleData = `Document: ${fileName}
Status: Text extracted
Language: Multilingual support
Confidence: 96.5%
Fields: 8 identified
Verification: Pending`;
    }

    extractedData.textContent = sampleData;
}

// Initialize Scheme Cards
function initializeSchemeCards() {
    console.log('Initializing scheme cards...');
    try {
        const schemeCards = document.querySelectorAll('.scheme-card');
        
        schemeCards.forEach((card, index) => {
            const schemeData = governmentData.central_schemes[index];
            if (!schemeData) return;
            
            card.addEventListener('click', function(e) {
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }
                
                card.style.transform = 'translateY(-2px)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
                
                console.log(`Clicked on ${schemeData.name} scheme card`);
            });
            
            card.addEventListener('mouseenter', function() {
                card.style.borderColor = '#21808d';
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.borderColor = '';
            });
        });
        
        console.log('Scheme cards initialized successfully');
    } catch (error) {
        console.error('Scheme cards initialization error:', error);
    }
}

// State Details Modal
function showStateDetails(stateName) {
    console.log('Showing details for:', stateName);
    const modal = document.getElementById('state-modal');
    const stateData = governmentData.states[stateName];

    if (!modal || !stateData) return;

    document.getElementById('modal-state-name').textContent = stateName;
    document.getElementById('total-claims').textContent = stateData.claims_data.total_claims.toLocaleString();
    document.getElementById('approved-claims').textContent = stateData.claims_data.approved_claims.toLocaleString();
    document.getElementById('pending-claims').textContent = stateData.claims_data.pending_claims.toLocaleString();
    document.getElementById('rejected-claims').textContent = stateData.claims_data.rejected_claims.toLocaleString();
    document.getElementById('approval-rate').textContent = stateData.claims_data.approval_rate + '%';
    
    document.getElementById('forest-cover').textContent = stateData.forest_data.forest_cover_sq_km.toLocaleString() + ' sq km';
    document.getElementById('forest-percentage').textContent = stateData.forest_data.forest_cover_percentage + '%';
    document.getElementById('tree-cover').textContent = stateData.forest_data.tree_cover_sq_km.toLocaleString() + ' sq km';
    document.getElementById('carbon-stock').textContent = stateData.forest_data.carbon_stock_million_tonnes + ' MT';
    
    document.getElementById('st-population').textContent = stateData.demographics.st_population.toLocaleString();
    document.getElementById('forest-dependent').textContent = stateData.demographics.forest_dependent_population.toLocaleString();
    document.getElementById('tribal-districts').textContent = stateData.demographics.tribal_districts;

    modal.classList.remove('hidden');
}

// Event Listeners Setup
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // State filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const stateCode = e.target.dataset.state;
            filterMapByState(stateCode);
        });
    });

    // Modal close
    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            document.getElementById('state-modal').classList.add('hidden');
        });
    }

    // Modal overlay click to close
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            document.getElementById('state-modal').classList.add('hidden');
        });
    }

    // ESC key to close modal and AI chat
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('state-modal');
            const aiChat = document.getElementById('ai-chat');
            if (modal) modal.classList.add('hidden');
            if (aiChat) aiChat.classList.add('hidden');
        }
    });

    console.log('Event listeners set up successfully');
}

// Filter map by state
function filterMapByState(stateCode) {
    if (stateCode === 'all') {
        markers.forEach(({marker}) => {
            map.addLayer(marker);
        });
        map.setView([21.0, 78.0], 5);
    } else {
        markers.forEach(({marker}) => {
            map.removeLayer(marker);
        });

        const selectedMarker = markers.find(m => m.stateCode === stateCode);
        if (selectedMarker) {
            map.addLayer(selectedMarker.marker);
            const stateData = Object.values(governmentData.states).find(s => s.code === stateCode);
            if (stateData) {
                map.setView(stateData.center, 7);
            }
        }
    }
}

// Make functions globally available
window.showStateDetails = showStateDetails;
window.setLanguage = setLanguage;