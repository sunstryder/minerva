const _ = require('lodash');

const spellMapping = {
    "acid arrow": 1,
        "acid splash": 2,
        "aid": 3,
        "alarm": 4,
        "alter self": 5,
        "animal messenger": 6,
        "animal shapes": 7,
        "animate dead": 8,
        "animate objects": 9,
        "antilife shell": 10,
        "antimagic field": 11,
        "antipathy/sympathy": 12,
        "arcane eye": 13,
        "arcane hand": 14,
        "arcane lock": 15,
        "arcane sword": 16,
        "arcanist's magic aura": 17,
        "astral projection": 18,
        "augury": 19,
        "awaken": 20,
        "bane": 21,
        "banishment": 22,
        "barkskin": 23,
        "beacon of hope": 24,
        "bestow curse": 25,
        "black tentacles": 26,
        "blade barrier": 27,
        "bless": 28,
        "blight": 29,
        "blindness/deafness": 30,
        "blink": 31,
        "blur": 32,
        "burning hands": 33,
        "call lightning": 34,
        "calm emotions": 35,
        "chain lightning": 36,
        "charm person": 37,
        "chill touch": 38,
        "circle of death": 39,
        "clairvoyance": 40,
        "clone": 41,
        "cloudkill": 42,
        "color spray": 43,
        "command": 44,
        "commune": 45,
        "commune with nature": 46,
        "comprehend languages": 47,
        "cone of cold": 48,
        "confusion": 49,
        "conjure animals": 50,
        "conjure celestial": 51,
        "conjure elemental": 52,
        "conjure fey": 53,
        "conjure minor elementals": 54,
        "conjure woodland beings": 55,
        "contact other plane": 56,
        "contagion": 57,
        "contingency": 58,
        "continual flame": 59,
        "control water": 60,
        "control weather": 61,
        "create food and water": 62,
        "create or destroy water": 63,
        "create undead": 64,
        "creation": 65,
        "cure wounds": 66,
        "dancing lights": 67,
        "darkness": 68,
        "darkvision": 69,
        "daylight": 70,
        "death ward": 71,
        "delayed blast fireball": 72,
        "demiplane": 73,
        "detect evil and good": 74,
        "detect magic": 75,
        "detect poison and disease": 76,
        "detect thoughts": 77,
        "dimension door": 78,
        "disguise self": 79,
        "disintegrate": 80,
        "dispel evil and good": 81,
        "dispel magic": 82,
        "divination": 83,
        "divine favor": 84,
        "divine word": 85,
        "dominate beast": 86,
        "dominate monster": 87,
        "dominate person": 88,
        "dream": 89,
        "earthquake": 90,
        "eldritch blast": 91,
        "enhance ability": 92,
        "enlarge/reduce": 93,
        "entangle": 94,
        "enthrall": 95,
        "etherealness": 96,
        "expeditious retreat": 97,
        "eyebite": 98,
        "fabricate": 99,
        "faerie fire": 100,
        "faithful hound": 101,
        "false life": 102,
        "fear": 103,
        "feather fall": 104,
        "feeblemind": 105,
        "find steed": 106,
        "find the path": 107,
        "find traps": 108,
        "finger of death": 109,
        "fireball": 110,
        "fire shield": 111,
        "fire storm": 112,
        "flame blade": 113,
        "flame strike": 114,
        "flaming sphere": 115,
        "flesh to stone": 116,
        "floating disk": 117,
        "fly": 118,
        "fog cloud": 119,
        "forbiddance": 120,
        "forcecage": 121,
        "foresight": 122,
        "freedom of movement": 123,
        "freezing sphere": 124,
        "gaseous form": 125,
        "gate": 126,
        "geas": 127,
        "gentle repose": 128,
        "giant insect": 129,
        "glibness": 130,
        "globe of invulnerability": 131,
        "glyph of warding": 132,
        "grease": 133,
        "greater invisibility": 134,
        "greater restoration": 135,
        "guards and wards": 136,
        "guidance": 137,
        "guiding bolt": 138,
        "gust of wind": 139,
        "hallow": 140,
        "hallucinatory terrain": 141,
        "harm": 142,
        "haste": 143,
        "heal": 144,
        "healing word": 145,
        "heat metal": 146,
        "heroes' feast": 147,
        "heroism": 148,
        "hideous laughter": 149,
        "hold monster": 150,
        "hold person": 151,
        "holy aura": 152,
        "hypnotic pattern": 153,
        "ice storm": 154,
        "identify": 155,
        "illusory script": 156,
        "imprisonment": 157,
        "incendiary cloud": 158,
        "inflict wounds": 159,
        "insect plague": 160,
        "instant summons": 161,
        "invisibility": 162,
        "irresistible dance": 163,
        "jump": 164,
        "knock": 165,
        "legend lore": 166,
        "lesser restoration": 167,
        "levitate": 168,
        "light": 169,
        "lightning bolt": 170,
        "locate animals or plants": 171,
        "locate creature": 172,
        "locate object": 173,
        "longstrider": 174,
        "mage armor": 175,
        "mage hand": 176,
        "magic circle": 177,
        "magic jar": 178,
        "magic missile": 179,
        "magic mouth": 180,
        "magic weapon": 181,
        "magnificent mansion": 182,
        "major image": 183,
        "mass cure wounds": 184,
        "mass heal": 185,
        "mass healing word": 186,
        "mass suggestion": 187,
        "maze": 188,
        "meld into stone": 189,
        "mending": 190,
        "message": 191,
        "meteor swarm": 192,
        "mind blank": 193,
        "minor illusion": 194,
        "mirage arcane": 195,
        "mirror image": 196,
        "mislead": 197,
        "misty step": 198,
        "modify memory": 199,
        "moonbeam": 200,
        "move earth": 201,
        "nondetection": 202,
        "pass without trace": 203,
        "passwall": 204,
        "phantasmal killer": 205,
        "phantom steed": 206,
        "planar ally": 207,
        "planar binding": 208,
        "plane shift": 209,
        "plant growth": 210,
        "polymorph": 211,
        "power word kill": 212,
        "power word stun": 213,
        "prayer of healing": 214,
        "prestidigitation": 215,
        "prismatic spray": 216,
        "prismatic wall": 217,
        "private sanctum": 218,
        "produce flame": 219,
        "programmed illusion": 220,
        "project image": 221,
        "protection from energy": 222,
        "protection from evil and good": 223,
        "protection from poison": 224,
        "purify food and drink": 225,
        "raise dead": 226,
        "ray of enfeeblement": 227,
        "ray of frost": 228,
        "regenerate": 229,
        "reincarnate": 230,
        "remove curse": 231,
        "resilient sphere": 232,
        "resistance": 233,
        "resurrection": 234,
        "reverse gravity": 235,
        "revivify": 236,
        "rope trick": 237,
        "sacred flame": 238,
        "sanctuary": 239,
        "scorching ray": 240,
        "scrying": 241,
        "secret chest": 242,
        "see invisibility": 243,
        "seeming": 244,
        "sending": 245,
        "sequester": 246,
        "shapechange": 247,
        "shatter": 248,
        "shield": 249,
        "shield of faith": 250,
        "shillelagh": 251,
        "shocking grasp": 252,
        "silence": 253,
        "silent image": 254,
        "simulacrum": 255,
        "sleep": 256,
        "sleet storm": 257,
        "slow": 258,
        "speak with animals": 259,
        "speak with dead": 260,
        "speak with plants": 261,
        "spider climb": 262,
        "spike growth": 263,
        "spirit guardians": 264,
        "spiritual weapon": 265,
        "stinking cloud": 266,
        "stone shape": 267,
        "stoneskin": 268,
        "storm of vengeance": 269,
        "suggestion": 270,
        "sunbeam": 271,
        "sunburst": 272,
        "symbol": 273,
        "telekinesis": 274,
        "telepathic bond": 275,
        "teleport": 276,
        "teleportation circle": 277,
        "thaumaturgy": 278,
        "thunderwave": 279,
        "time stop": 280,
        "tiny hut": 281,
        "tongues": 282,
        "transport via plants": 283,
        "tree stride": 284,
        "true polymorph": 285,
        "true resurrection": 286,
        "true seeing": 287,
        "true strike": 288,
        "unseen servant": 289,
        "vampiric touch": 290,
        "wall of fire": 291,
        "wall of force": 292,
        "wall of ice": 293,
        "wall of stone": 294,
        "wall of thorns": 295,
        "warding bond": 296,
        "water breathing": 297,
        "water walk": 298,
        "web": 299,
        "weird": 300,
        "wind walk": 301,
        "wind wall": 302,
        "wish": 303,
        "word of recall": 304,
        "zone of truth": 305
};


// Input: spell name from this array
// Output: spell index from this array.
exports.getSpellIndex = (spellName) => {
    const lowerSpellName = spellName.toLowerCase();
    const spellIndex = _.get(spellMapping, lowerSpellName);
    return spellIndex ? spellIndex : 'Spell does not exist';
};

//SpellParser formats the JSON response of a spell resource.
exports.spellParser = (spell) => {
    return {
        attachments: [
            {
                "title": `${spell.name}`,
                "text": `*Description* \n\n _${spell.desc}_`,
                "mrkdwn_in": [
                    "text",
                    "title"
                ],
                "color": "#4286f4",
                "fields": [
                    {
                        "title": "\n\n*Range*",
                        "value": `${spell.range}`,
                        "short": true
                    },
                    {
                        "title": "\n\n*Duration*",
                        "value": `${spell.duration}`,
                        "short": true
                    }
                ]
            }
        ],
    }
};
