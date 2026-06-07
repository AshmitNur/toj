/**
 * TØJ SOURCING — THREAD INTELLIGENCE SHOWCASE DATABASE
 * Programmatic virtual apparel catalog containing all assets from assets/CHOBI
 */

(function() {
  const SHOWCASE_ITEMS = [
    {
        "file": "P1.webp",
        "category": "knit"
    },
    {
        "file": "P2.webp",
        "category": "knit"
    },
    {
        "file": "P3.webp",
        "category": "knit"
    },
    {
        "file": "P4.webp",
        "category": "knit"
    },
    {
        "file": "P5.webp",
        "category": "knit"
    },
    {
        "file": "P6.webp",
        "category": "knit"
    },
    {
        "file": "P7.webp",
        "category": "knit"
    },
    {
        "file": "P8.webp",
        "category": "knit"
    },
    {
        "file": "P9.webp",
        "category": "knit"
    },
        {
        "file": "WhatsApp Image 2026-05-27 at 1.16.29 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.29 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.29 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.30 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.30 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.30 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.31 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.31 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.32 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.32 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.32 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.33 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.33 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.33 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.34 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.34 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.35 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.35 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.35 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.36 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.36 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.37 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.37 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.37 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.38 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.38 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.39 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.39 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.39 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.40 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.40 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.40 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.41 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.41 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.42 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.42 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.42 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.43 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.43 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.43 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.44 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.44 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.45 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.45 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.45 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.46 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.46 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.46 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.47 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.47 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.48 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.48 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.48 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.49 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.49 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.49 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.50 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.50 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.51 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.51 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.51 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.52 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.52 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.52 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.53 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.53 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.53 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.54 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.54 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.54 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.55 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.55 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.56 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.56 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.56 AM.webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.57 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.57 AM (2).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.57 AM (3).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.57 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.58 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.58 AM (2).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.58 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.59 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.16.59 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.00 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.00 AM (2).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.00 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.01 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.01 AM (2).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.01 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.02 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.02 AM (2).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.02 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.03 AM (1).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.03 AM (2).webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.03 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.04 AM (1).webp",
        "category": "knit"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.04 AM.webp",
        "category": "woven"
    },
    {
        "file": "WhatsApp Image 2026-05-27 at 1.17.05 AM.webp",
        "category": "knit"
    },
    {
        "file": "denim_1.webp",
        "category": "denim"
    },
    {
        "file": "denim_10.webp",
        "category": "denim"
    },
    {
        "file": "denim_11.webp",
        "category": "woven"
    },
    {
        "file": "denim_2.webp",
        "category": "denim"
    },
    {
        "file": "denim_3.webp",
        "category": "woven"
    },
    {
        "file": "denim_4.webp",
        "category": "denim"
    },
    {
        "file": "denim_5.webp",
        "category": "denim"
    },
    {
        "file": "denim_6.webp",
        "category": "denim"
    },
    {
        "file": "denim_7.webp",
        "category": "woven"
    },
    {
        "file": "denim_8.webp",
        "category": "denim"
    },
    {
        "file": "denim_9.webp",
        "category": "denim"
    },
    {
        "file": "serial_1.webp",
        "category": "knit"
    },
    {
        "file": "serial_3.webp",
        "category": "denim"
    },
    {
        "file": "serial_4.webp",
        "category": "woven"
    },
    {
        "file": "serial_5.webp",
        "category": "woven"
    },
    {
        "file": "serial_6.webp",
        "category": "knit"
    },
    {
        "file": "serial_7.webp",
        "category": "woven"
    },
    {
        "file": "fabrics_2.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_3.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_4.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_5.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_6.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_7.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_8.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_9.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_10.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_11.webp",
        "category": "fabrics"
    },
    {
        "file": "fabrics_12.webp",
        "category": "fabrics"
    },
 {
        "file": "fabrics_1.webp",
        "category": "fabrics"
    },

];

  const METADATA_TEMPLATES = {
    knit: {
      label: "DIV.01 // KNITWEAR",
      titles: [
        "12GG Cashmere Crewneck",
        "Fine-Gauge Knit Cardigan",
        "Heavy Ribbed Knit Sweater",
        "Merino Wool Turtleneck",
        "Recycled Cotton Loopback Hoodie",
        "Lightweight Knit Polo",
        "Premium Cotton Pullover",
        "Bouclé Knit Overshirt",
        "Textured Cable-Knit Crew"
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
        "Classic Twill Dress Shirt",
        "Waterproof Technical Parka",
        "Recycled Ripstop Windbreaker",
        "Engineered Micro-Grid Shell",
        "Modular Storm Jacket"
      ],
      compositions: [
        "100% Long-Staple Organic Cotton",
        "55% Sustainable Hemp, 45% Organic Cotton",
        "100% Belgian Flax Organic Linen",
        "80% Organic Cotton, 20% Recycled Linen",
        "100% Premium Cotton Twill",
        "100% Recycled Post-Consumer Nylon Ripstop",
        "3-Layer Waterproof Breathable Technical Membrane"
      ],
      weights: ["130 GSM", "320 GSM", "150 GSM", "115 GSM", "180 GSM", "220 GSM", "200 GSM"],
      leadTimes: ["60 Days", "70 Days", "65 Days", "75 Days", "90 Days", "85 Days"]
    },
    denim: {
      label: "DIV.03 // DENIM",
      titles: [
        "14oz Selvedge Raw Denim",
        "12oz Ring-Spun Denim Jacket",
        "Premium Indigo Selvedge Jeans",
        "Heavyweight Utility Denim Vest",
        "Slim-Fit Organic Denim Pants",
        "Classic Western Denim Shirt",
        "Distressed Denim Chore Coat"
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
    fabrics: {
      label: "DIV.04 // FABRICS & ACCESSORIES",
      titles: [
        "Premium Combed Organic Cotton Yarn",
        "Recycled Polyester Sewing Threads",
        "Eco-Friendly Horn Button Assemblies",
        "High-Tensile Brass Zipper Elements",
        "GOTS Certified Cotton Canvas Fabric",
        "Sustainable Hemp Canvas Roll",
        "Soft Bamboo Jersey Knit Fabric",
        "Structured Wool Blend Interlining",
        "Recycled Cotton Pocketing Twill",
        "Heavyweight Selvedge Canvas Roll"
      ],
      compositions: [
        "100% GOTS Certified Organic Cotton",
        "100% Recycled Post-Consumer Polyester",
        "Natural Eco-Harvested Buffalo Horn",
        "Solid Lead-Free Recycled Brass",
        "100% Belgian Flax Flax Fabric",
        "55% Hemp, 45% Organic Cotton Blend",
        "70% Bamboo Viscose, 30% Organic Cotton"
      ],
      weights: ["180 GSM", "240 GSM", "300 GSM", "120 GSM", "150 GSM", "400 GSM"],
      leadTimes: ["45 Days", "50 Days", "60 Days", "55 Days"]
    }
  };

  // Map files to dynamic but deterministic metadata objects
  window.SHOWCASE_DATA = SHOWCASE_ITEMS.map((item, index) => {
    const template = METADATA_TEMPLATES[item.category];

    // Select templates deterministically using prime numbers to avoid alignment patterns
    const title = template.titles[(index * 7) % template.titles.length];
    const comp = template.compositions[(index * 13) % template.compositions.length];
    const weight = template.weights[(index * 17) % template.weights.length];
    const leadTime = template.leadTimes[(index * 23) % template.leadTimes.length];

    return {
      id: "toj-shell-" + (index + 1),
      src: "assets/CHOBI/" + item.file,
      category: item.category,
      division: template.label,
      title: title,
      comp: comp,
      weight: weight,
      leadTime: leadTime
    };
  });
})();
