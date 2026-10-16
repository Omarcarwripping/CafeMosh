// Transcribed from the print menus 20261009_HerbstKarte_2.ai and 20260601_Menukarte_3.ai.
// Edit items and prices here.

export type Item = { name: string; price?: string; desc?: string }
export type Section = {
  title: string
  items: Item[]
  /** price for the whole section, shown next to the heading */
  price?: string
  /** intro line under the heading */
  note?: string
  /** small print under the list */
  footnote?: string
  tone?: 'matcha'
}
export type Art = 'pumpkin' | 'cinnamon' | 'martini' | 'burger' | 'badge'
export type Panel = { id: string; tab: string; subtitle: string; art: Art; seasonal?: boolean; sections: Section[] }

export const PANELS: Panel[] = [
  {
    "id": "herbst",
    "tab": "Herbst & Winter",
    "subtitle": "Herbst & Winter Specials",
    "art": "pumpkin",
    "seasonal": true,
    "sections": [
      {
        "title": "Latte",
        "items": [
          {
            "name": "Pumpkin Spice Latte",
            "price": "6,20 €"
          },
          {
            "name": "Apple Pie Latte",
            "price": "6,20 €"
          },
          {
            "name": "Cinnamon Roll Latte",
            "price": "6,20 €"
          },
          {
            "name": "Maple Latte",
            "price": "6,20 €"
          },
          {
            "name": "Spekulatius Latte",
            "price": "6,20 €"
          },
          {
            "name": "Toffee Nut Latte",
            "price": "6,30 €"
          },
          {
            "name": "Biscoff Latte",
            "price": "6,50 €"
          },
          {
            "name": "Milchalternative",
            "price": "+0,70 €"
          }
        ]
      },
      {
        "title": "Chai Latte",
        "items": [
          {
            "name": "Classic Chai Latte",
            "price": "5,90 €"
          },
          {
            "name": "Vanilla Chai Latte",
            "price": "6,20 €"
          },
          {
            "name": "Pumpkin Spice Chai Latte",
            "price": "6,50 €"
          },
          {
            "name": "Apple Pie Chai Latte",
            "price": "6,50 €"
          },
          {
            "name": "Cinnamon Roll Chai Latte",
            "price": "6,50 €"
          },
          {
            "name": "Spekulatius Chai Latte",
            "price": "6,50 €"
          },
          {
            "name": "Biscoff Chai Latte",
            "price": "6,80 €"
          },
          {
            "name": "Milchalternative",
            "price": "+0,70 €"
          }
        ]
      },
      {
        "title": "Hot Chocolate",
        "items": [
          {
            "name": "Hot Chocolate",
            "price": "5,90 €"
          },
          {
            "name": "Pumpkin Spice Hot Chocolate",
            "price": "6,50 €"
          },
          {
            "name": "Apple Pie Hot Chocolate",
            "price": "6,50 €"
          },
          {
            "name": "Cinnamon Roll Hot Chocolate",
            "price": "6,50 €"
          },
          {
            "name": "Maple Hot Chocolate",
            "price": "6,50 €"
          },
          {
            "name": "Spekulatius Hot Chocolate",
            "price": "6,50 €"
          },
          {
            "name": "Toffee Nut Hot Chocolate",
            "price": "6,60 €"
          },
          {
            "name": "Marshmallow Hot Chocolate",
            "price": "6,80 €"
          },
          {
            "name": "Biscoff Chocolate",
            "price": "6,80 €"
          },
          {
            "name": "Marshmallow Hot Chocolate",
            "price": "7,80 €",
            "desc": "Mit Marshmallow-Rand & Sahne"
          }
        ]
      },
      {
        "title": "Cappuccino Specials",
        "items": [
          {
            "name": "Brûlée Cappuccino",
            "price": "6,50 €",
            "desc": "Mit karamellisierter Zuckerkruste"
          },
          {
            "name": "Marshmallow Cappuccino",
            "price": "6,50 €"
          },
          {
            "name": "Marshmallow Cappuccino",
            "price": "7,50 €",
            "desc": "Mit Marshmallow-Rand & Sahne"
          }
        ],
        "footnote": "Alle Latte & Hot-Chocolate Sorten auch als Cappuccino erhältlich."
      },
      {
        "title": "Espresso",
        "items": [
          {
            "name": "Espresso Marshmallow",
            "price": "4,90 €"
          }
        ]
      },
      {
        "title": "Crêpes",
        "items": [
          {
            "name": "Classic",
            "price": "5,90 €"
          },
          {
            "name": "Biscoff Crêpe",
            "price": "7,90 €"
          },
          {
            "name": "Apple Pie Crêpe",
            "price": "8,50 €",
            "desc": "Apfelmus · Zimt · Karamell · Sahne · Streusel"
          },
          {
            "name": "Nutella Deluxe",
            "price": "8,90 €"
          }
        ]
      },
      {
        "title": "Pancakes",
        "items": [
          {
            "name": "Classic",
            "price": "9,90 €"
          },
          {
            "name": "Biscoff Pancakes",
            "price": "11,90 €",
            "desc": "Biscoff-Creme · Biscoff-Crunch · Sahne"
          },
          {
            "name": "Apple Pie Pancakes",
            "price": "12,90 €",
            "desc": "Apfelmus · Zimt · Karamell · Sahne · Streusel"
          },
          {
            "name": "Deluxe Pancakes",
            "price": "13,90 €"
          }
        ]
      },
      {
        "title": "French Toast",
        "items": [
          {
            "name": "Biscoff French Toast",
            "price": "11,90 €",
            "desc": "Biscoff-Creme · Biscoff-Crunch · Sahne"
          },
          {
            "name": "Apple Pie French Toast",
            "price": "12,90 €",
            "desc": "Apfelmus · Zimt · Karamell · Sahne · Streusel"
          }
        ]
      },
      {
        "title": "Dessert Cup",
        "items": [
          {
            "name": "Lotus Biscoff Cup",
            "price": "6,90 €",
            "desc": "Samtige Mascarpone-Creme geschichtet mit knusprigem Lotus-Biscoff & feinem Caramel"
          }
        ]
      },
      {
        "title": "Farmbreads",
        "items": [
          {
            "name": "Winter Goat & Cranberry Farm Bread",
            "price": "14,90 €",
            "desc": "Geröstetes Bauernbrot mit Preiselbeer-Frischkäse, gratiniertem Ziegenkäse, knackigen Walnüssen, frischem Rucola und feinem Honig."
          },
          {
            "name": "Winter Burrata & Bresaola Farm Bread",
            "price": "14,90 €",
            "desc": "Geröstetes Bauernbrot mit Frischkäse, hauchdünner Bresaola, ganzer cremiger Burrata, einem Klecks Feigensenf, Walnüssen und Rucola."
          }
        ]
      },
      {
        "title": "LOFTEA",
        "items": [
          {
            "name": "Eli Erdbeere",
            "desc": "Erdbeer · Papaya"
          },
          {
            "name": "Timo Weltklasse",
            "desc": "Hanf-Zitrone"
          },
          {
            "name": "Horst-Himbeere",
            "desc": "Himbeere · Minze"
          },
          {
            "name": "Hanna-Colada",
            "desc": "Ananas · Kokos · Hibiskus"
          },
          {
            "name": "Leni Marie",
            "desc": "Mango · Mandarine"
          },
          {
            "name": "Lofly Kamille",
            "desc": "Kamille"
          },
          {
            "name": "Earl Grey",
            "desc": "Schwarztee · Bergamotte"
          },
          {
            "name": "Björn Blaubeere",
            "desc": "Kiwi · Blaubeere"
          },
          {
            "name": "Nana Mint",
            "desc": "Minze"
          },
          {
            "name": "Nikolaus",
            "desc": "Apfel · Zimt"
          },
          {
            "name": "Pfirsich Pauli",
            "desc": "Pfirsich · Rooibos"
          }
        ],
        "note": "Loser Tee, frisch aufgebrüht mit echten Fruchtstücken. Jede Sorte 4,80 €.",
        "price": "4,80 €"
      },
      {
        "title": "LOFTEA Eistee",
        "items": [
          {
            "name": "Pfirsich"
          },
          {
            "name": "Himbeere"
          },
          {
            "name": "Kiwi, Blaubeere"
          }
        ],
        "note": "Frisch aufgebrüht. Ohne Zuckerzusatz. Ohne Sirup. Voller Geschmack.",
        "price": "6,00 €"
      }
    ]
  },
  {
    "id": "coffee",
    "tab": "Coffee & More",
    "subtitle": "Coffee & More",
    "art": "cinnamon",
    "sections": [
      {
        "title": "Coffee",
        "items": [
          {
            "name": "Espresso",
            "price": "2,90 €"
          },
          {
            "name": "Doppio",
            "price": "3,90 €"
          },
          {
            "name": "Espresso Macchiato",
            "price": "3,90 €"
          },
          {
            "name": "Cappuccino",
            "price": "4,10 €"
          },
          {
            "name": "Latte Macchiato",
            "price": "4,20 €"
          },
          {
            "name": "Latte Macchiato Doppio",
            "price": "5,40 €"
          },
          {
            "name": "Americano",
            "price": "3,60 €"
          },
          {
            "name": "Long Black",
            "price": "4,00 €"
          },
          {
            "name": "Cortado",
            "price": "4,30 €"
          },
          {
            "name": "Flat White",
            "price": "4,70 €"
          },
          {
            "name": "Dirty Chai Latte",
            "price": "5,70 €"
          },
          {
            "name": "Chai Latte",
            "price": "5,20 €"
          },
          {
            "name": "Hot Chocolate",
            "price": "4,20 €"
          }
        ],
        "footnote": "*Wahlweise auch entkoffeiniert."
      },
      {
        "title": "Iced Coffee",
        "items": [
          {
            "name": "Salted Caramel Latte",
            "price": "6,20 €"
          },
          {
            "name": "Haselnuss Latte",
            "price": "5,80 €"
          },
          {
            "name": "Spanish Chocolate Latte",
            "price": "6,30 €"
          },
          {
            "name": "Frappé",
            "price": "5,60 €"
          },
          {
            "name": "Pistacchio Latte",
            "price": "6,50 €"
          },
          {
            "name": "Caramel Latte",
            "price": "5,80 €"
          },
          {
            "name": "Oreo Latte",
            "price": "6,20 €"
          },
          {
            "name": "Vanilla Latte",
            "price": "5,70 €"
          }
        ]
      },
      {
        "title": "Matcha",
        "items": [
          {
            "name": "Classic Matcha",
            "price": "5,50 €"
          },
          {
            "name": "Vanilla Matcha",
            "price": "5,90 €"
          },
          {
            "name": "Strawberry Matcha",
            "price": "6,10 €"
          },
          {
            "name": "Raspberry Matcha",
            "price": "6,10 €"
          },
          {
            "name": "Mango Matcha",
            "price": "6,10 €"
          }
        ],
        "tone": "matcha"
      },
      {
        "title": "Add-on",
        "items": [
          {
            "name": "Milchoptionen",
            "price": "+0,70 €",
            "desc": "Hafer, Mandel, Kokos, Soya, Laktosefrei"
          },
          {
            "name": "Monin Syrups",
            "price": "+0,40 €"
          }
        ]
      },
      {
        "title": "Tea",
        "items": [
          {
            "name": "Versch. Sorten",
            "price": "2,90 €",
            "desc": "Grün, Schwarz, Früchte, Ingwer, Kamille oder Pfefferminze"
          },
          {
            "name": "Frischer Tee",
            "price": "3,90 €",
            "desc": "Ingwer-Zitrone mit Honig"
          }
        ]
      }
    ]
  },
  {
    "id": "drinks",
    "tab": "Drinks",
    "subtitle": "Drinks",
    "art": "martini",
    "sections": [
      {
        "title": "Non-Coffee",
        "items": [
          {
            "name": "Säfte 0,3l",
            "price": "4,20 €",
            "desc": "Apfelsaft, Mangosaft, Maracujasaft, Ananassaft, Orangensaft, Johannisbeersaft"
          },
          {
            "name": "Schorlen 0,3l",
            "price": "3,90 €",
            "desc": "Apfelschorle, Mangoschorle, Maracujaschorle, Ananasschorle, Orangenschorle, Johannisbeerschorle"
          },
          {
            "name": "Soft Drinks 0,2l",
            "price": "3,30 €",
            "desc": "Coca Cola / Coca Cola Zero, Mezzo Mix, Fanta, Sprite, Eistee, Bitter Lemon, Ginger Ale, Tonic Water"
          },
          {
            "name": "Red Bull 0,25l",
            "price": "4,50 €"
          },
          {
            "name": "Wasser Still",
            "price": "0,25l 3,10 € · 0,75l 6,40 €"
          },
          {
            "name": "Wasser Sprudel",
            "price": "0,25l 3,10 € · 0,75l 6,40 €"
          }
        ]
      },
      {
        "title": "Beer",
        "items": [
          {
            "name": "Chiemsee Helles 0,5l",
            "price": "4,50 €"
          },
          {
            "name": "Radler naturtrüb 0,5l",
            "price": "4,50 €"
          },
          {
            "name": "Hefeweizen 0,5l",
            "price": "4,50 €"
          },
          {
            "name": "Corona 0,3l",
            "price": "5,00 €"
          },
          {
            "name": "Alkoholfrei 0,3l",
            "price": "3,90 €"
          }
        ]
      },
      {
        "title": "Aperitifs",
        "items": [
          {
            "name": "Wildberry Lillet",
            "price": "8,90 €"
          },
          {
            "name": "Limoncello",
            "price": "8,90 €"
          },
          {
            "name": "Aperol Spritz",
            "price": "8,90 €"
          },
          {
            "name": "Hugo",
            "price": "8,90 €"
          },
          {
            "name": "Sarti Spritz",
            "price": "8,90 €"
          }
        ]
      },
      {
        "title": "Wine",
        "items": [
          {
            "name": "Weiß · Riesling",
            "price": "0,2l 6,10 € · 0,75l 20,00 €",
            "desc": "Felsengartenkellerei"
          },
          {
            "name": "Weiß · Sauvignon Blanc",
            "price": "0,2l 7,50 € · 0,75l 28,00 €",
            "desc": "Fortant de France"
          },
          {
            "name": "Weiß · Grauburgunder",
            "price": "0,2l 6,30 € · 0,75l 22,00 €",
            "desc": "Felsengartenkellerei"
          },
          {
            "name": "Weißweinschorle",
            "price": "0,2l 5,50 €"
          },
          {
            "name": "Weiß · Cà dei Frati Lugana",
            "price": "0,75l 32,00 €"
          },
          {
            "name": "Rosé",
            "price": "0,2l 6,30 € · 0,75l 21,00 €",
            "desc": "Felsengartenkellerei Besigheim"
          },
          {
            "name": "Roséweinschorle",
            "price": "0,2l 5,70 €"
          },
          {
            "name": "Rot · Lemberger",
            "price": "0,2l 6,30 €",
            "desc": "Felsengartenkellerei"
          },
          {
            "name": "Rot · Primitivo Salento",
            "price": "0,2l 6,40 €"
          },
          {
            "name": "Schaumwein · Kessler Sekt Brut",
            "price": "0,1l 5,70 € · 0,75l 29,00 €"
          },
          {
            "name": "Schaumwein · Kessler Sekt Rosé Brut",
            "price": "0,1l 5,70 € · 0,75l 29,00 €"
          },
          {
            "name": "Alkoholfreier Sekt",
            "price": "0,1l 5,50 €"
          }
        ]
      },
      {
        "title": "Longdrinks",
        "items": [
          {
            "name": "Vodka Bull",
            "price": "10,50 €"
          },
          {
            "name": "Jacky Cola",
            "price": "8,90 €"
          },
          {
            "name": "Gin Tonic",
            "price": "9,50 €"
          },
          {
            "name": "Vodka Soda",
            "price": "8,50 €"
          }
        ]
      },
      {
        "title": "Cocktails",
        "items": [
          {
            "name": "Espresso Martini",
            "price": "12,90 €"
          },
          {
            "name": "Pornstar Martini",
            "price": "12,90 €"
          },
          {
            "name": "Raspberry Mojito",
            "price": "10,90 €"
          },
          {
            "name": "Mosh Exotic",
            "price": "12,90 €"
          },
          {
            "name": "Pink Gin Sour",
            "price": "10,90 €"
          },
          {
            "name": "Moscow Mule",
            "price": "11,20 €"
          },
          {
            "name": "Whiskey Sour",
            "price": "11,50 €"
          },
          {
            "name": "Amaretto Sour",
            "price": "11,90 €"
          },
          {
            "name": "Aperol Sour",
            "price": "11,90 €"
          },
          {
            "name": "Mosh Sour",
            "price": "12,90 €"
          },
          {
            "name": "Rucola Smash",
            "price": "11,90 €"
          },
          {
            "name": "Lychee Martini",
            "price": "12,90 €"
          },
          {
            "name": "Gin Sour",
            "price": "11,90 €"
          }
        ]
      },
      {
        "title": "Non-Alcohol",
        "items": [
          {
            "name": "Floreale Tonic",
            "price": "8,70 €"
          },
          {
            "name": "Mosh Peach",
            "price": "9,20 €"
          },
          {
            "name": "Berry Floreale",
            "price": "8,90 €"
          }
        ]
      },
      {
        "title": "Mocktails",
        "items": [
          {
            "name": "Berry Mojito",
            "price": "8,90 €"
          },
          {
            "name": "Ipanema",
            "price": "8,70 €"
          },
          {
            "name": "Hugo",
            "price": "8,90 €"
          },
          {
            "name": "Rucola Smash",
            "price": "9,20 €"
          },
          {
            "name": "Aperol",
            "price": "7,50 €"
          }
        ]
      },
      {
        "title": "Shots",
        "items": [
          {
            "name": "Berliner Luft",
            "price": "3,50 €"
          },
          {
            "name": "Limoncello",
            "price": "3,50 €"
          },
          {
            "name": "Tequila",
            "price": "3,50 €"
          },
          {
            "name": "Amaretto",
            "price": "3,50 €"
          },
          {
            "name": "Erdbeerlime",
            "price": "3,50 €"
          },
          {
            "name": "Ficken",
            "price": "3,50 €"
          }
        ]
      }
    ]
  },
  {
    "id": "classics",
    "tab": "Classics",
    "subtitle": "Classics",
    "art": "burger",
    "sections": [
      {
        "title": "Signatures",
        "items": [
          {
            "name": "Scrambled Eggs",
            "price": "7,90 €",
            "desc": "Rührei aus Bio-Eiern, serviert mit Brot & Schnittlauch."
          },
          {
            "name": "Egg Drop Sandwich",
            "price": "8,50 €",
            "desc": "Brioche mit Rührei, Chester-Käse, hausgemachte Soße & Schnittlauch."
          },
          {
            "name": "Chili Cheese Egg Drop Sandwich",
            "price": "9,50 €",
            "desc": "Brioche mit Rührei, Cheddar-Käse, feurigen Jalapeños, hausgemachter Chili-Cheese-Soße & Schnittlauch."
          },
          {
            "name": "Eggs Benedict",
            "price": "10,00 €",
            "desc": "Pochiertes Bio Ei & Sauce Hollandaise auf getoastetem Brioche Toast."
          },
          {
            "name": "Mosh Breakfast",
            "price": "12,90 €",
            "desc": "2 Spiegeleier, Avocado, Salat, Tomate & Brot"
          },
          {
            "name": "Mosh Brioche",
            "price": "15,50 €",
            "desc": "1x Brioche mit Trüffel-Pesto-Creme, Carpaccio, pochiertem Ei, Rucola & Parmesan."
          }
        ]
      },
      {
        "title": "Add-on zu jedem Signature",
        "items": [
          {
            "name": "Avocado",
            "price": "+2,00 €"
          },
          {
            "name": "Bacon / Sucuk",
            "price": "+2,50 €"
          },
          {
            "name": "Lachs",
            "price": "+3,50 €"
          },
          {
            "name": "Crunchy Chicken",
            "price": "+4,50 €"
          },
          {
            "name": "Hähnchenbrust",
            "price": "+4,50 €"
          }
        ]
      },
      {
        "title": "Salads & Bowls",
        "items": [
          {
            "name": "Classic Caesar Salad",
            "price": "9,90 €",
            "desc": "Römersalat mit Croutons, Parmesan & Caesar-Dressing. Add-on Crunchy Chicken +4,50 €"
          },
          {
            "name": "Mosh Signature Salad",
            "price": "15,90 €",
            "desc": "Salat mit Tulumkäse, Walnüssen, Cranberries, Cherrytomaten, Apfelstreifen & Granatapfelsirup."
          },
          {
            "name": "Honey Ocean",
            "price": "14,50 €",
            "desc": "Salat mit Thunfisch, Cherrytomaten, Gurken, Mais, roten Zwiebeln & Honig-Senf-Dressing."
          },
          {
            "name": "Vegan Fresh Bowl",
            "price": "11,90 €",
            "desc": "Vegane Bowl mit Kichererbsen, Avocado & Zitronen-Tahini-Dressing."
          },
          {
            "name": "Grand Bowl",
            "price": "13,90 €",
            "desc": "Cremiger Weißkäse mit Cranberries, Walnüssen, Cherrytomaten, edlem Kürbiskernöl & feiner Balsamico-Creme."
          },
          {
            "name": "Burrata Salad",
            "price": "15,90 €",
            "desc": "Frischer Rucola mit cremiger Burrata, Cherrytomaten, Walnüssen, Olivenöl & Balsamico-Creme, serviert mit geröstetem Brot."
          }
        ]
      },
      {
        "title": "Farm Bread",
        "items": [
          {
            "name": "Burrata Farm Bread",
            "price": "13,90 €",
            "desc": "Knuspriges Bauernbrot mit würziger Guacamole, cremiger Burrata, Blattsalat & getrockneten Tomaten, verfeinert mit einem Hauch Balsamico."
          },
          {
            "name": "Salmon Farm Bread",
            "price": "13,90 €",
            "desc": "Geröstetes Bauernbrot mit Zitronen-Schmand, frischer Avocado & zartem Lachs, getoppt mit Pickles, Microgreens & knusprigen Croutons."
          },
          {
            "name": "Pink Farm Bread",
            "price": "13,90 €",
            "desc": "Geröstetes Bauernbrot mit frischer Rote-Beete-Limettencreme, Räucherlachs, Avocado & Ei, verfeinert mit Pickles, Microgreens & Saatenmix."
          },
          {
            "name": "Bresaola Farm Bread",
            "price": "14,90 €",
            "desc": "Geröstetes Bauernbrot mit Pesto-Frischkäse, Bresaola, Rucola & Kirschtomaten, abgerundet mit Parmesan."
          },
          {
            "name": "Truffle Egg & Bacon Farm Bread",
            "price": "15,90 €",
            "desc": "Geröstetes Bauernbrot mit Trüffel-Pesto-Creme, saftigem Rührei, krisp gebratenem Bacon, Kirschtomaten, Schnittlauch und gehobeltem Parmesan."
          },
          {
            "name": "Guacamole & Egg Farm Bread",
            "price": "14,90 €",
            "desc": "Geröstetes Bauernbrot mit würziger Guacamole, saftigem Rührei, frischem Wildkräutersalat, Kirschtomaten und feiner Balsamico-Creme."
          },
          {
            "name": "Smoked Salmon & Horseradish Farm Bread",
            "price": "14,90 €",
            "desc": "Geröstetes Bauernbrot mit natürlichem Frischkäse, saftigem Räucherlachs, feinen Sahnemeerrettich-Tupfern, hauchdünnen Gurkenscheiben und frischem Dill."
          }
        ]
      },
      {
        "title": "Fitness Breads",
        "items": [
          {
            "name": "Guacamole Fitness Bread",
            "price": "14,90 €",
            "desc": "Eiweißbrot mit frischer Guacamole, zwei pochierten Eiern, Kirschtomaten, Rucola und Balsamico-Glace."
          },
          {
            "name": "Fitness Egg & Bresaola Bread",
            "price": "14,90 €",
            "desc": "Eiweißbrot mit Zitronen-Schmand, saftigem Rührei, hauchdünner Bresaola und Rucola."
          },
          {
            "name": "Fitness Bread",
            "price": "13,90 €",
            "desc": "Eiweißbrot mit Frischkäse, leichtem Pesto, Putenbrust, Mozzarella Light, 2 pochierten Eiern, Salat, Tomate, Gurke & Balsamico."
          }
        ]
      },
      {
        "title": "Sides & Snacks",
        "items": [
          {
            "name": "Chicken Tenders",
            "price": "9,90 €",
            "desc": "6 knusprige Tenders mit Dip nach Wahl."
          },
          {
            "name": "Classic French Fries",
            "price": "5,00 €",
            "desc": "Knusprige Pommes mit Ketchup & Mayo."
          },
          {
            "name": "Sweet Potato Fries",
            "price": "6,40 €",
            "desc": "Knusprige Süßkartoffel Pommes serviert mit Dip."
          },
          {
            "name": "Truffle Parmesan Fries",
            "price": "7,50 €",
            "desc": "Knusprige Pommes mit Trüffelmayo & frisch geriebenem Parmesan."
          }
        ]
      }
    ]
  },
  {
    "id": "delights",
    "tab": "Delights",
    "subtitle": "Delights",
    "art": "badge",
    "sections": [
      {
        "title": "Sweet Bowls",
        "items": [
          {
            "name": "Berry Açaí Bowl",
            "price": "9,90 €",
            "desc": "Cremige Açaí-Basis mit Banane & Beeren, getoppt mit Granola, Banane, Blaubeeren & Kokosraspeln."
          },
          {
            "name": "Banana Peanut Power",
            "price": "9,90 €",
            "desc": "Banane mit feiner Erdnussnote, getoppt mit Banane, Granola, Peanut Crumble & Honig."
          }
        ]
      },
      {
        "title": "Pancakes",
        "items": [
          {
            "name": "Classic",
            "price": "9,90 €",
            "desc": "Puderzucker, Ahornsirup & Früchte."
          },
          {
            "name": "Nutella",
            "price": "10,90 €",
            "desc": "Nutella, Früchte & Puderzucker."
          },
          {
            "name": "Pistazie",
            "price": "11,90 €",
            "desc": "Pistazien-Creme & Früchte."
          },
          {
            "name": "Deluxe",
            "price": "13,90 €",
            "desc": "Nutella, Pistaziencreme & Vanilleeis."
          }
        ]
      },
      {
        "title": "Crêpes *sweet*",
        "items": [
          {
            "name": "Classic",
            "price": "5,90 €",
            "desc": "Crêpe mit Zimt & Zucker."
          },
          {
            "name": "Apple Cinnamon",
            "price": "6,90 €",
            "desc": "Crêpe mit Apfelmus, Zimt & Zucker."
          },
          {
            "name": "Nutella",
            "price": "7,50 €",
            "desc": "Crêpe mit Nutella."
          },
          {
            "name": "Strawberry Nutella",
            "price": "7,90 €",
            "desc": "Crêpe mit Nutella & frischen Erdbeeren."
          },
          {
            "name": "Pistachio Dream",
            "price": "8,50 €",
            "desc": "Crêpe mit cremiger Pistaziencreme & Topping."
          },
          {
            "name": "Nutella Deluxe",
            "price": "8,90 €",
            "desc": "Crêpe mit Nutella, Banane, Walnüssen & Vanilleeis."
          }
        ]
      },
      {
        "title": "Crêpes *salty*",
        "items": [
          {
            "name": "Classic",
            "price": "7,90 €",
            "desc": "Putenschinken & Gouda."
          },
          {
            "name": "Mosh Special",
            "price": "9,50 €",
            "desc": "Putenschinken, Schmelzkäse & Sauce Hollandaise."
          },
          {
            "name": "Vegetarisch",
            "price": "9,50 €",
            "desc": "Avocado, Frischkäse & Rucola."
          }
        ]
      },
      {
        "title": "French Toast",
        "items": [
          {
            "name": "Classic French Toast",
            "price": "8,90 €",
            "desc": "Goldbraun gebackener French Toast mit Puderzucker & Ahornsirup."
          },
          {
            "name": "Add-on Nutella Banana",
            "price": "+2,00 €"
          },
          {
            "name": "Add-on Berry Cream",
            "price": "+2,60 €"
          },
          {
            "name": "Add-on Pistachio",
            "price": "+3,00 €"
          }
        ]
      },
      {
        "title": "Special",
        "items": [
          {
            "name": "Tiramisu",
            "price": "5,00 €",
            "desc": "Hausgemachtes Tiramisu."
          },
          {
            "name": "Banana Pudding",
            "price": "5,00 €",
            "desc": "Cremiger Banana Pudding mit Banane & Vanille-Crunch."
          }
        ]
      }
    ]
  }
]
