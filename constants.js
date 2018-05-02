// Endpoints
const BASE_ENDPOINT = 'http://dnd5eapi.co/api/';
exports.BASE_ENDPOINT = 'http://dnd5eapi.co/api/';

// Pass an Index ONLY
exports.ABILITY_SCORES = BASE_ENDPOINT+'ability-scores/';
exports.SKILLS = BASE_ENDPOINT+'skills/';
exports.LANGUAGES = BASE_ENDPOINT+'languages/';
exports.FEATURES = BASE_ENDPOINT+'features/';
exports.RACES = BASE_ENDPOINT+'races/';
exports.EQUIPMENT = BASE_ENDPOINT+'equipment/';
exports.CONDITIONS = BASE_ENDPOINT+'conditions/';
exports.DAMAGE_TYPES = BASE_ENDPOINT+'damage-types/';
exports.MAGIC_SCHOOLS = BASE_ENDPOINT+'magic-schools/';

// Pass an Index or  querystring
exports.SPELLS = BASE_ENDPOINT+'spells/';
exports.PROFICIENCIES = BASE_ENDPOINT+'proficiencies/';
exports.CLASSES = BASE_ENDPOINT+'classes/';
exports.SUBCLASSES = BASE_ENDPOINT+'subclasses/';
exports.SUBRACES = BASE_ENDPOINT+'subraces/';

//Level endpoint needs to be handled differently since it is bisected by 2 params.
// export const LEVEL = CLASSES+'{class name}/level/{integer 1-20}';
