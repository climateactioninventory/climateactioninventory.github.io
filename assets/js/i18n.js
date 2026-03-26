(function() {
    const TRANSLATIONS = {
        en: {
            selectProvince: 'Select a province:',
            selectCity: 'Select a municipality',
            selectLever: 'Select a policy lever:',
            selectLeverOption: 'Select a policy lever:',
            selectLeverToViewStrategies: 'Select a policy lever to view the distribution of strategies.',
            strategiesByProvinceTitle: 'Strategies by Province (National)',
            strategiesByProvinceDesc: 'This stacked bar chart shows the proportional (%) use of each strategy within the selected policy lever across the provinces and territories studied.',
            strategiesProvincialTitle: 'Strategies — Selected province vs National',
            strategiesProvincialDesc: 'This stacked bar chart shows the proportional (%) use of each strategy within the selected policy lever in the selected province, as well as the overall use of each strategy nationally for comparison.',
            strategiesMunicipalTitle: 'Strategies — City, Province, National',
            strategiesMunicipalDesc: 'This stacked bar chart shows the proportional (%) use of each strategy within the selected policy lever in the selected municipality as well as the overall use of each strategy provincially and nationally for comparison.',
            provinceNoDataMessage: '{province} does not use the {lever} policy lever at all, according to our analysis.',
            cityNoDataMessage: '{city} does not use {lever} at all',
            selectedProvinceLabel: 'Selected province',
            canadaLabel: 'Canada',
            selectedCityLabel: 'Selected city',
            provinceLabel: 'Province',
            mapPopupActionText: 'View actions'
        },
        fr: {
            selectProvince: 'Sélectionnez une province:',
            selectCity: 'Sélectionnez une municipalité',
            selectLever: 'Sélectionnez un levier politique:',
            selectLeverOption: 'Sélectionnez un levier politique:',
            selectLeverToViewStrategies: 'Sélectionnez un levier de politique pour afficher la distribution des stratégies.',
            strategiesByProvinceTitle: 'Stratégies — Province, National',
            strategiesByProvinceDesc: 'Ce diagramme montre l’utilisation proportionnelle (%) de chaque stratégie dans le cadre du levier politique sélectionné dans la province choisie, ainsi que l’utilisation globale de chaque stratégie à l’échelle nationale à des fins de comparaison',
            strategiesProvincialTitle: 'Stratégies — Province, National',
            strategiesProvincialDesc: 'Ce diagramme montre l’utilisation proportionnelle (%) de chaque stratégie dans le cadre du levier politique sélectionné dans la province choisie, ainsi que l’utilisation globale de chaque stratégie à l’échelle nationale à des fins de comparaison',
            strategiesMunicipalTitle: 'Stratégies — Municipalité, Province, National',
            strategiesMunicipalDesc: 'Ce diagramme montre l’utilisation proportionnelle (%) de chaque stratégie dans le cadre du levier politique sélectionné dans la municipalité sélectionnée, ainsi que l’utilisation globale de chaque stratégie à l’échelle provinciale et nationale à des fins de comparaison.',
            provinceNoDataMessage: '{province} n’utilise pas du tout {lever}, selon notre analyse',
            cityNoDataMessage: '{city} n’utilise pas du tout {lever}, selon notre analyse',
            selectedProvinceLabel: 'Province sélectionnée',
            canadaLabel: 'Canada',
            selectedCityLabel: 'Municipalité sélectionnée',
            provinceLabel: 'Province',
            mapPopupActionText: 'Voir les mesures'
        }
    };

    function getLang() {
        return (document.documentElement.getAttribute('lang') || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
    }

    function t(key) {
        const lang = getLang();
        return TRANSLATIONS[lang][key] || TRANSLATIONS.en[key] || key;
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = t(key);
        });
        // Set global for map
        window.mapPopupActionText = t('mapPopupActionText');
    }

    // Apply on load
    if (document.readyState !== 'loading') {
        applyTranslations();
    } else {
        document.addEventListener('DOMContentLoaded', applyTranslations);
    }

    // Expose
    window.t = t;
})();