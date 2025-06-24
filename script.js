// Data konversi untuk semua kategori
const conversionData = {
    panjang: {
        units: {
            'mm': { name: 'Milimeter', factor: 0.001 },
            'cm': { name: 'Sentimeter', factor: 0.01 },
            'dm': { name: 'Desimeter', factor: 0.1 },
            'm': { name: 'Meter', factor: 1 },
            'dam': { name: 'Dekameter', factor: 10 },
            'hm': { name: 'Hektometer', factor: 100 },
            'km': { name: 'Kilometer', factor: 1000 },
            'in': { name: 'Inci', factor: 0.0254 },
            'ft': { name: 'Kaki', factor: 0.3048 },
            'yd': { name: 'Yard', factor: 0.9144 },
            'mi': { name: 'Mile', factor: 1609.344 }
        },
        info: 'Konversi satuan panjang dari sistem metrik dan imperial. Meter adalah satuan dasar dalam sistem metrik.'
    },
    berat: {
        units: {
            'mg': { name: 'Miligram', factor: 0.001 },
            'g': { name: 'Gram', factor: 1 },
            'dag': { name: 'Dekagram', factor: 10 },
            'hg': { name: 'Hektogram', factor: 100 },
            'kg': { name: 'Kilogram', factor: 1000 },
            'ton': { name: 'Ton', factor: 1000000 },
            'oz': { name: 'Ons', factor: 28.3495 },
            'lb': { name: 'Pound', factor: 453.592 },
            'st': { name: 'Stone', factor: 6350.29 }
        },
        info: 'Konversi satuan berat dari sistem metrik dan imperial. Gram adalah satuan dasar dalam sistem metrik.'
    },
    luas: {
        units: {
            'mm²': { name: 'Milimeter Persegi', factor: 0.000001 },
            'cm²': { name: 'Sentimeter Persegi', factor: 0.0001 },
            'dm²': { name: 'Desimeter Persegi', factor: 0.01 },
            'm²': { name: 'Meter Persegi', factor: 1 },
            'dam²': { name: 'Dekameter Persegi', factor: 100 },
            'hm²': { name: 'Hektometer Persegi', factor: 10000 },
            'km²': { name: 'Kilometer Persegi', factor: 1000000 },
            'ha': { name: 'Hektar', factor: 10000 },
            'in²': { name: 'Inci Persegi', factor: 0.00064516 },
            'ft²': { name: 'Kaki Persegi', factor: 0.092903 },
            'yd²': { name: 'Yard Persegi', factor: 0.836127 },
            'ac': { name: 'Acre', factor: 4046.86 }
        },
        info: 'Konversi satuan luas dari sistem metrik dan imperial. Meter persegi adalah satuan dasar dalam sistem metrik.'
    },
    volume: {
        units: {
            'mm³': { name: 'Milimeter Kubik', factor: 0.000000001 },
            'cm³': { name: 'Sentimeter Kubik', factor: 0.000001 },
            'dm³': { name: 'Desimeter Kubik', factor: 0.001 },
            'm³': { name: 'Meter Kubik', factor: 1 },
            'dam³': { name: 'Dekameter Kubik', factor: 1000 },
            'hm³': { name: 'Hektometer Kubik', factor: 1000000 },
            'km³': { name: 'Kilometer Kubik', factor: 1000000000 },
            'l': { name: 'Liter', factor: 0.001 },
            'ml': { name: 'Mililiter', factor: 0.000001 },
            'cl': { name: 'Centiliter', factor: 0.00001 },
            'dl': { name: 'Desiliter', factor: 0.0001 },
            'hl': { name: 'Hektoliter', factor: 0.1 },
            'gal': { name: 'Gallon', factor: 0.00378541 },
            'qt': { name: 'Quart', factor: 0.000946353 },
            'pt': { name: 'Pint', factor: 0.000473176 }
        },
        info: 'Konversi satuan volume dari sistem metrik dan imperial. Meter kubik adalah satuan dasar dalam sistem metrik.'
    },
    suhu: {
        units: {
            'c': { name: 'Celsius', factor: 1, offset: 0 },
            'f': { name: 'Fahrenheit', factor: 5/9, offset: -32 },
            'k': { name: 'Kelvin', factor: 1, offset: -273.15 },
            'r': { name: 'Rankine', factor: 5/9, offset: -491.67 }
        },
        info: 'Konversi suhu antar skala Celsius, Fahrenheit, Kelvin, dan Rankine. Celsius adalah skala yang paling umum digunakan.'
    },
    'mata-uang': {
        units: {
            'IDR': { name: 'Rupiah Indonesia', factor: 1 },
            'USD': { name: 'Dollar AS', factor: 1 },
            'EUR': { name: 'Euro', factor: 1 },
            'GBP': { name: 'Pound Sterling', factor: 1 },
            'JPY': { name: 'Yen Jepang', factor: 1 },
            'SGD': { name: 'Dollar Singapura', factor: 1 },
            'MYR': { name: 'Ringgit Malaysia', factor: 1 },
            'THB': { name: 'Baht Thailand', factor: 1 },
            'CNY': { name: 'Yuan China', factor: 1 },
            'KRW': { name: 'Won Korea', factor: 1 }
        },
        info: 'Konversi mata uang menggunakan data real-time dari API. Nilai tukar diperbarui secara otomatis.'
    },
    waktu: {
        units: {
            'ms': { name: 'Milidetik', factor: 0.001 },
            's': { name: 'Detik', factor: 1 },
            'min': { name: 'Menit', factor: 60 },
            'h': { name: 'Jam', factor: 3600 },
            'd': { name: 'Hari', factor: 86400 },
            'wk': { name: 'Minggu', factor: 604800 },
            'mo': { name: 'Bulan', factor: 2592000 },
            'yr': { name: 'Tahun', factor: 31536000 }
        },
        info: 'Konversi satuan waktu dari milidetik hingga tahun. Detik adalah satuan dasar dalam sistem waktu.'
    },
    kecepatan: {
        units: {
            'm/s': { name: 'Meter per Detik', factor: 1 },
            'km/h': { name: 'Kilometer per Jam', factor: 0.277778 },
            'km/s': { name: 'Kilometer per Detik', factor: 1000 },
            'mph': { name: 'Mile per Jam', factor: 0.44704 },
            'knot': { name: 'Knot', factor: 0.514444 },
            'ft/s': { name: 'Kaki per Detik', factor: 0.3048 }
        },
        info: 'Konversi satuan kecepatan dari sistem metrik dan imperial. Meter per detik adalah satuan dasar dalam sistem metrik.'
    },
    digital: {
        units: {
            'b': { name: 'Bit', factor: 1 },
            'B': { name: 'Byte', factor: 8 },
            'KB': { name: 'Kilobyte', factor: 8192 },
            'MB': { name: 'Megabyte', factor: 8388608 },
            'GB': { name: 'Gigabyte', factor: 8589934592 },
            'TB': { name: 'Terabyte', factor: 8796093022208 },
            'PB': { name: 'Petabyte', factor: 9007199254740992 }
        },
        info: 'Konversi satuan digital untuk penyimpanan data. Byte adalah satuan dasar dalam sistem digital.'
    },
    energi: {
        units: {
            'J': { name: 'Joule', factor: 1 },
            'kJ': { name: 'Kilojoule', factor: 1000 },
            'cal': { name: 'Kalori', factor: 4.184 },
            'kcal': { name: 'Kilokalori', factor: 4184 },
            'Wh': { name: 'Watt-hour', factor: 3600 },
            'kWh': { name: 'Kilowatt-hour', factor: 3600000 },
            'BTU': { name: 'British Thermal Unit', factor: 1055.06 },
            'eV': { name: 'Electron Volt', factor: 0.0000000000000000001602176634 }
        },
        info: 'Konversi satuan energi dari berbagai sistem pengukuran. Joule adalah satuan dasar dalam sistem SI.'
    }
};

// Variabel global untuk mata uang
let currencyRates = {};
let lastCurrencyUpdate = 0;
const CURRENCY_CACHE_DURATION = 3600000; // 1 jam dalam milidetik

// Variabel global
let currentCategory = 'panjang';
let fromUnit = 'm';
let toUnit = 'cm';

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    // Load currency rates on startup
    loadCurrencyRates();
});

function initializeApp() {
    changeCategory();
    updateInfo();
}

// Fungsi untuk memuat data mata uang dari API
async function loadCurrencyRates() {
    const now = Date.now();
    
    // Cek apakah data masih fresh (kurang dari 1 jam)
    if (currencyRates && (now - lastCurrencyUpdate) < CURRENCY_CACHE_DURATION) {
        return;
    }
    
    try {
        // Gunakan API gratis dari exchangerate-api.com
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates) {
            currencyRates = data.rates;
            lastCurrencyUpdate = now;
            
            // Tambahkan USD sebagai base currency
            currencyRates.USD = 1;
            
            // Update info jika sedang di kategori mata uang
            if (currentCategory === 'mata-uang') {
                updateCurrencyInfo();
            }
            
            console.log('Currency rates updated successfully');
        }
    } catch (error) {
        console.error('Error loading currency rates:', error);
        // Fallback ke nilai statis jika API gagal
        currencyRates = {
            'IDR': 15500,
            'USD': 1,
            'EUR': 0.85,
            'GBP': 0.73,
            'JPY': 110,
            'SGD': 1.35,
            'MYR': 4.15,
            'THB': 33,
            'CNY': 6.45,
            'KRW': 1150
        };
        
        if (currentCategory === 'mata-uang') {
            updateCurrencyInfo();
        }
    }
}

// Update info untuk mata uang
function updateCurrencyInfo() {
    const infoContainer = document.getElementById('categoryInfo');
    const lastUpdate = new Date(lastCurrencyUpdate).toLocaleString('id-ID');
    
    if (currencyRates && Object.keys(currencyRates).length > 0) {
        infoContainer.innerHTML = `
            <p>Konversi mata uang menggunakan data real-time. 
            <br>Terakhir diperbarui: ${lastUpdate}
            <br>Basis: USD (Dollar AS)</p>
            <button onclick="refreshCurrencyRates()" class="refresh-btn">
                <i class="fas fa-sync-alt"></i> Perbarui Kurs
            </button>
        `;
    } else {
        infoContainer.innerHTML = `
            <p>Konversi mata uang menggunakan data real-time. 
            <br>Memuat data...</p>
            <button onclick="refreshCurrencyRates()" class="refresh-btn">
                <i class="fas fa-sync-alt"></i> Muat Ulang
            </button>
        `;
    }
}

// Fungsi untuk refresh currency rates
async function refreshCurrencyRates() {
    // Reset cache untuk memaksa update
    lastCurrencyUpdate = 0;
    
    // Tampilkan loading state
    const infoContainer = document.getElementById('categoryInfo');
    infoContainer.innerHTML = `
        <p>Memperbarui data mata uang...</p>
        <button onclick="refreshCurrencyRates()" class="refresh-btn" disabled>
            <i class="fas fa-spinner fa-spin"></i> Memuat...
        </button>
    `;
    
    // Load currency rates
    await loadCurrencyRates();
    
    // Konversi ulang jika ada nilai input
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue) {
        convert();
    }
    
    // Tampilkan notifikasi
    showNotification('Data mata uang berhasil diperbarui!');
}

// Fungsi untuk mengubah kategori
function changeCategory() {
    currentCategory = document.getElementById('category').value;
    const units = conversionData[currentCategory].units;
    
    // Reset unit selections
    const unitKeys = Object.keys(units);
    fromUnit = unitKeys[0];
    toUnit = unitKeys[1] || unitKeys[0];
    
    // Update dropdown units
    updateUnitDropdowns();
    
    // Update quick conversions
    updateQuickConversions();
    
    // Update info berdasarkan kategori
    if (currentCategory === 'mata-uang') {
        // Load currency rates jika belum ada atau sudah expired
        loadCurrencyRates();
        updateCurrencyInfo();
    } else {
        updateInfo();
    }
    
    // Reset input and result
    document.getElementById('inputValue').value = '';
    document.getElementById('result').textContent = '0';
}

// Update dropdown units
function updateUnitDropdowns() {
    const units = conversionData[currentCategory].units;
    const fromSelect = document.getElementById('fromUnit');
    const toSelect = document.getElementById('toUnit');
    
    // Clear existing options
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    
    // Add new options
    Object.keys(units).forEach(unit => {
        const fromOption = document.createElement('option');
        fromOption.value = unit;
        fromOption.textContent = `${unit} - ${units[unit].name}`;
        fromSelect.appendChild(fromOption);
        
        const toOption = document.createElement('option');
        toOption.value = unit;
        toOption.textContent = `${unit} - ${units[unit].name}`;
        toSelect.appendChild(toOption);
    });
    
    // Set selected values
    fromSelect.value = fromUnit;
    toSelect.value = toUnit;
}

// Update quick conversion buttons
function updateQuickConversions() {
    const quickContainer = document.getElementById('quickConversions');
    const units = conversionData[currentCategory].units;
    const unitKeys = Object.keys(units);
    
    quickContainer.innerHTML = '';
    
    // Create quick conversion buttons for common conversions
    const quickConversions = getQuickConversions(currentCategory);
    
    quickConversions.forEach(conversion => {
        const button = document.createElement('button');
        button.className = 'quick-btn';
        button.textContent = `${conversion.from} → ${conversion.to}`;
        button.onclick = () => {
            fromUnit = conversion.from;
            toUnit = conversion.to;
            document.getElementById('fromUnit').value = fromUnit;
            document.getElementById('toUnit').value = toUnit;
            convert();
        };
        quickContainer.appendChild(button);
    });
}

// Get quick conversions for each category
function getQuickConversions(category) {
    const quickConversions = {
        panjang: [
            { from: 'm', to: 'cm' },
            { from: 'km', to: 'm' },
            { from: 'cm', to: 'mm' },
            { from: 'm', to: 'ft' },
            { from: 'km', to: 'mi' }
        ],
        berat: [
            { from: 'kg', to: 'g' },
            { from: 'g', to: 'mg' },
            { from: 'kg', to: 'lb' },
            { from: 'lb', to: 'oz' },
            { from: 'ton', to: 'kg' }
        ],
        luas: [
            { from: 'm²', to: 'cm²' },
            { from: 'km²', to: 'm²' },
            { from: 'ha', to: 'm²' },
            { from: 'm²', to: 'ft²' },
            { from: 'ac', to: 'm²' }
        ],
        volume: [
            { from: 'l', to: 'ml' },
            { from: 'm³', to: 'l' },
            { from: 'l', to: 'gal' },
            { from: 'ml', to: 'cm³' },
            { from: 'm³', to: 'ft³' }
        ],
        suhu: [
            { from: 'c', to: 'f' },
            { from: 'c', to: 'k' },
            { from: 'f', to: 'c' },
            { from: 'k', to: 'c' },
            { from: 'f', to: 'k' }
        ],
        'mata-uang': [
            { from: 'IDR', to: 'USD' },
            { from: 'USD', to: 'IDR' },
            { from: 'IDR', to: 'EUR' },
            { from: 'IDR', to: 'SGD' },
            { from: 'USD', to: 'EUR' }
        ],
        waktu: [
            { from: 'h', to: 'min' },
            { from: 'd', to: 'h' },
            { from: 'min', to: 's' },
            { from: 'yr', to: 'd' },
            { from: 'wk', to: 'd' }
        ],
        kecepatan: [
            { from: 'km/h', to: 'm/s' },
            { from: 'm/s', to: 'km/h' },
            { from: 'mph', to: 'km/h' },
            { from: 'km/h', to: 'mph' },
            { from: 'knot', to: 'km/h' }
        ],
        digital: [
            { from: 'B', to: 'b' },
            { from: 'KB', to: 'B' },
            { from: 'MB', to: 'KB' },
            { from: 'GB', to: 'MB' },
            { from: 'TB', to: 'GB' }
        ],
        energi: [
            { from: 'J', to: 'cal' },
            { from: 'kcal', to: 'J' },
            { from: 'kWh', to: 'J' },
            { from: 'BTU', to: 'J' },
            { from: 'cal', to: 'J' }
        ]
    };
    
    return quickConversions[category] || [];
}

// Update info text
function updateInfo() {
    const infoContainer = document.getElementById('categoryInfo');
    const info = conversionData[currentCategory].info;
    infoContainer.innerHTML = `<p>${info}</p>`;
}

// Fungsi konversi utama
function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value) || 0;
    fromUnit = document.getElementById('fromUnit').value;
    toUnit = document.getElementById('toUnit').value;
    
    let result;
    
    if (currentCategory === 'suhu') {
        result = convertTemperature(inputValue, fromUnit, toUnit);
    } else if (currentCategory === 'mata-uang') {
        result = convertCurrency(inputValue, fromUnit, toUnit);
    } else {
        result = convertStandard(inputValue, fromUnit, toUnit);
    }
    
    // Format hasil
    const formattedResult = formatResult(result);
    document.getElementById('result').textContent = formattedResult;
}

// Konversi mata uang dengan data real-time
function convertCurrency(value, fromUnit, toUnit) {
    // Pastikan data mata uang sudah dimuat
    if (!currencyRates || Object.keys(currencyRates).length === 0) {
        // Jika belum ada data, coba load lagi
        loadCurrencyRates();
        return value; // Return nilai asli sementara
    }
    
    // Konversi ke USD dulu (base currency), lalu ke mata uang target
    const fromRate = currencyRates[fromUnit];
    const toRate = currencyRates[toUnit];
    
    if (!fromRate || !toRate) {
        console.error('Currency rate not found for:', fromUnit, 'or', toUnit);
        return value;
    }
    
    // Konversi: value * (toRate / fromRate)
    return value * (toRate / fromRate);
}

// Konversi standar (panjang, berat, luas, volume, dll)
function convertStandard(value, fromUnit, toUnit) {
    const units = conversionData[currentCategory].units;
    const fromFactor = units[fromUnit].factor;
    const toFactor = units[toUnit].factor;
    
    // Konversi ke satuan dasar, lalu ke satuan target
    const baseValue = value * fromFactor;
    return baseValue / toFactor;
}

// Konversi suhu (karena menggunakan offset)
function convertTemperature(value, fromUnit, toUnit) {
    const units = conversionData[currentCategory].units;
    
    // Konversi ke Celsius dulu
    let celsius = (value - units[fromUnit].offset) / units[fromUnit].factor;
    
    // Konversi dari Celsius ke satuan target
    return celsius * units[toUnit].factor + units[toUnit].offset;
}

// Format hasil dengan angka yang sesuai
function formatResult(value) {
    if (value === 0) return '0';
    
    // Untuk nilai yang sangat kecil atau sangat besar
    if (Math.abs(value) < 0.000001 || Math.abs(value) > 999999999) {
        return value.toExponential(6);
    }
    
    // Untuk nilai normal
    if (Number.isInteger(value)) {
        // Tambahkan pemisah ribuan dengan titik
        return value.toLocaleString('id-ID');
    }
    
    // Untuk nilai desimal, maksimal 6 digit
    const fixedValue = parseFloat(value.toFixed(6));
    
    // Format dengan pemisah ribuan dan koma untuk desimal
    return fixedValue.toLocaleString('id-ID', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 6
    });
}

// Fungsi untuk menukar unit
function swapUnits() {
    const fromSelect = document.getElementById('fromUnit');
    const toSelect = document.getElementById('toUnit');
    const inputValue = document.getElementById('inputValue');
    
    // Tukar nilai unit
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    
    // Update variabel global
    fromUnit = fromSelect.value;
    toUnit = toSelect.value;
    
    // Konversi ulang jika ada nilai input
    if (inputValue.value) {
        convert();
    }
}

// Event listeners untuk dropdown
document.getElementById('fromUnit').addEventListener('change', function() {
    fromUnit = this.value;
    convert();
});

document.getElementById('toUnit').addEventListener('change', function() {
    toUnit = this.value;
    convert();
});

// Event listener untuk input value
document.getElementById('inputValue').addEventListener('input', convert);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Enter untuk fokus ke input
    if (e.key === 'Enter') {
        document.getElementById('inputValue').focus();
    }
    
    // Escape untuk clear input
    if (e.key === 'Escape') {
        document.getElementById('inputValue').value = '';
        document.getElementById('result').textContent = '0';
    }
});

// Tambahan: Fungsi untuk menyalin hasil
function copyResult() {
    const result = document.getElementById('result').textContent;
    navigator.clipboard.writeText(result).then(() => {
        // Tampilkan notifikasi
        showNotification('Hasil berhasil disalin!');
    });
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// CSS untuk animasi notifikasi
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style); 