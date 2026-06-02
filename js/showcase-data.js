/**
 * TØJ SOURCING — THREAD INTELLIGENCE SHOWCASE DATABASE
 * Programmatic virtual apparel catalog containing all 100 assets from assets/CHOBI
 */

(function() {
  const SHOWCASE_FILENAMES = [
    "serial_1.webp",
    "serial_2.webp",
    "serial_3.webp",
    "serial_4.webp",
    "serial_5.webp",
    "serial_6.webp",
    "serial_7.webp",
    "serial_8.webp",
    "WhatsApp Image 2026-05-27 at 1.16.29 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.29 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.29 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.30 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.30 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.30 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.31 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.31 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.32 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.32 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.32 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.33 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.33 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.33 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.34 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.34 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.35 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.35 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.35 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.36 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.36 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.37 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.37 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.37 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.38 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.38 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.39 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.39 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.39 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.40 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.40 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.40 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.41 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.41 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.42 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.42 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.42 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.43 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.43 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.43 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.44 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.44 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.45 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.45 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.45 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.46 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.46 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.46 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.47 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.47 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.48 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.48 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.48 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.49 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.49 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.49 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.50 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.50 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.51 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.51 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.51 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.52 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.52 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.52 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.53 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.53 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.53 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.54 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.54 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.54 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.55 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.55 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.56 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.56 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.56 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.57 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.57 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.57 AM (3).webp",
    "WhatsApp Image 2026-05-27 at 1.16.57 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.58 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.58 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.16.58 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.16.59 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.16.59 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.17.00 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.17.00 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.17.00 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.17.01 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.17.01 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.17.01 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.17.02 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.17.02 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.17.02 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.17.03 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.17.03 AM (2).webp",
    "WhatsApp Image 2026-05-27 at 1.17.03 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.17.04 AM (1).webp",
    "WhatsApp Image 2026-05-27 at 1.17.04 AM.webp",
    "WhatsApp Image 2026-05-27 at 1.17.05 AM.webp",
    "denim_1.webp",
    "denim_2.webp",
    "denim_3.webp",
    "denim_4.webp",
    "denim_5.webp",
    "denim_6.webp",
    "denim_7.webp",
    "denim_8.webp",
    "denim_9.webp",
    "denim_10.webp",
    "denim_11.webp"
  ];

  const CATEGORIES = ["knitwear", "woven", "denim", "outerwear"];

  const METADATA_TEMPLATES = {
    knitwear: {
      label: "DIV.01 // KNITWEAR",
      titles: [
        "12GG Cashmere Crewneck",
        "Fine-Gauge Knit Cardigan",
        "Heavy Ribbed Knit Sweater",
        "Merino Wool Turtleneck",
        "Recycled Cotton Loopback Hoodie",
        "Lightweight Knit Polo"
      ],
      compositions: [
        "70% Mongolian Cashmere, 30% Merino Wool",
        "100% Recycled GOTS Cotton",
        "85% Organic Cotton, 15% Cashmere Blend",
        "100% Extra-Fine Merino Wool",
        "60% Upcycled Cotton, 40% Organic Jersey"
      ],
      weights: ["260 GSM", "320 GSM", "240 GSM", "280 GSM", "420 GSM"],
      leadTimes: ["75 Days", "65 Days", "70 Days", "80 Days"]
    },
    woven: {
      label: "DIV.02 // WOVEN",
      titles: [
        "80s Double-Ply Oxford Shirt",
        "Organic Linen Utility Blouse",
        "Hemp Utility Chore Jacket",
        "Structured Poplin Shirt",
        "Tactical Cargo Overshirt",
        "Classic Twill Dress Shirt"
      ],
      compositions: [
        "100% Long-Staple Organic Cotton",
        "55% Sustainable Hemp, 45% Organic Cotton",
        "100% Belgian Flax Organic Linen",
        "80% Organic Cotton, 20% Recycled Linen",
        "100% Premium Cotton Twill"
      ],
      weights: ["130 GSM", "320 GSM", "150 GSM", "115 GSM", "180 GSM"],
      leadTimes: ["60 Days", "70 Days", "65 Days", "75 Days"]
    },
    denim: {
      label: "DIV.03 // DENIM",
      titles: [
        "14oz Selvedge Raw Denim",
        "12oz Ring-Spun Denim Jacket",
        "Premium Indigo Selvedge Jeans",
        "Heavyweight Utility Denim Vest",
        "Slim-Fit Organic Denim Pants",
        "Classic Western Denim Shirt"
      ],
      compositions: [
        "100% Organic Selvedge Cotton",
        "98% GOTS Certified Cotton, 2% Eco Elastane",
        "80% Recycled Denim, 20% Virgin Organic Cotton",
        "100% Ring-Spun Indigo Cotton"
      ],
      weights: ["14 OZ", "12 OZ", "13.5 OZ", "11 OZ", "15 OZ"],
      leadTimes: ["80 Days", "85 Days", "75 Days", "90 Days"]
    },
    outerwear: {
      label: "DIV.04 // OUTERWEAR",
      titles: [
        "Engineered Micro-Grid Shell",
        "Waterproof Technical Parka",
        "Recycled Ripstop Windbreaker",
        "Insulated Sourcing Shell",
        "Modular Storm Jacket",
        "Lightweight Hybrid Anorak"
      ],
      compositions: [
        "100% Recycled Post-Consumer Nylon Ripstop",
        "3-Layer Waterproof Breathable Technical Membrane",
        "100% Recycled Polyester Outer Shell with DWR Coating",
        "80% Recycled Nylon, 20% Engineered Polyester"
      ],
      weights: ["180 GSM", "220 GSM", "200 GSM", "150 GSM", "260 GSM"],
      leadTimes: ["90 Days", "85 Days", "80 Days", "95 Days"]
    }
  };

  // Map files to dynamic but deterministic metadata objects
  window.SHOWCASE_DATA = SHOWCASE_FILENAMES.map((filename, index) => {
    // Distribute categories evenly
    let category = CATEGORIES[index % CATEGORIES.length];
    if (filename.startsWith("denim_")) {
      category = "denim";
    }
    const template = METADATA_TEMPLATES[category];

    // Select templates deterministically using prime numbers to avoid alignment patterns
    const title = template.titles[(index * 7) % template.titles.length];
    const comp = template.compositions[(index * 13) % template.compositions.length];
    const weight = template.weights[(index * 17) % template.weights.length];
    const leadTime = template.leadTimes[(index * 23) % template.leadTimes.length];

    return {
      id: `toj-shell-${index + 1}`,
      src: `assets/CHOBI/${filename}`,
      category: category,
      division: template.label,
      title: title,
      comp: comp,
      weight: weight,
      leadTime: leadTime
    };
  });
})();
