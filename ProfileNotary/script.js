const translations = {
  en: {
    name: "Ketan Kumar R. Shah",
    title: "Advocate and Notary – Government of India",
    legalServices: "Legal Services",
    legalItems: [
      "Rent Agreement", "Banakhat", "Sale Deed", "Sales Document",
      "Mortgage Document", "Property Search", "Title Clear Certificate"
    ],
    otherServices: "Other Services",
    otherItems: [
      "All Type of Agreements", "All Type of Affidavits",
      "Legal Heirs Certificate", "Will", "Power of Attorney",
      "Divorce", "Property Card"
    ],
    contactTitle: "Contact Information",
    address: "3, Ajmera Chambers, Old Power House Road, Surendranagar 363001"
  },
  hi: {
    name: "केतन कुमार आर. शाह",
    title: "अधिवक्ता और नोटरी – भारत सरकार",
    legalServices: "कानूनी सेवाएं",
    legalItems: [
      "किराया समझौता", "बनखत", "बिक्री विलेख", "बिक्री दस्तावेज",
      "बंधक दस्तावेज", "संपत्ति खोज", "टाइटल क्लियर प्रमाणपत्र"
    ],
    otherServices: "अन्य सेवाएं",
    otherItems: [
      "सभी प्रकार के समझौते", "सभी प्रकार के हलफनामे",
      "कानूनी उत्तराधिकारी प्रमाणपत्र", "वसीयत", "पॉवर ऑफ अटॉर्नी",
      "तलाक", "संपत्ति कार्ड"
    ],
    contactTitle: "संपर्क जानकारी",
    address: "3, अजमेरा चेम्बर्स, ओल્ડ पावर हाउस रोड, सुरेन्द्रनगर 363001"
  },
  gu: {
    name: "કેતન કુમાર આર. શાહ",
    title: "એડવોકેટ અને નોટરી – ભારત સરકાર",
    legalServices: "કાનૂની સેવાઓ",
    legalItems: [
      "ભાડા કરાર", "બનાખત", "વેચાણ પત્ર", "વેચાણ દસ્તાવેજ",
      "ગુણતેર દસ્તાવેજ", "મિલ્કત શોધ", "ટાઇટલ ક્લીયર સર્ટિફિકેટ"
    ],
    otherServices: "અન્ય સેવાઓ",
    otherItems: [
      "બધા પ્રકારના કરારો", "બધા પ્રકારના હલફનામા",
      "કાનૂની વારસદાર પ્રમાણપત્ર", "ઈચ્છાપત્ર (Will)",
      "પાવર ઓફ એટોર્ની", "છૂટાછેડા", "પ્રોપર્ટી કાર્ડ"
    ],
    contactTitle: "સંપર્ક માહિતી",
    address: "3, અજમેરા ચેમ્બર્સ, ઓલ્ડ પાવર હાઉસ રોડ, સુરેન્દ્રનગર 363001"
  }
};

function render(lang = 'en') {
  const t = translations[lang];
  document.getElementById('name').textContent = t.name;
  document.getElementById('title').textContent = t.title;
  document.getElementById('legalHeading').textContent = t.legalServices;
  document.getElementById('legalList').innerHTML = t.legalItems.map(item => `<li>${item}</li>`).join('');
  document.getElementById('otherHeading').textContent = t.otherServices;
  document.getElementById('otherList').innerHTML = t.otherItems.map(item => `<li>${item}</li>`).join('');
  document.getElementById('contactHeading').textContent = t.contactTitle;
  document.getElementById('address').textContent = t.address;
}

function toggleDropdown(id) {
  const element = document.getElementById(id);
  element.classList.toggle('hidden');
}

document.getElementById('languageSelect').addEventListener('change', (e) => {
  render(e.target.value);
});

render(); // initial load
