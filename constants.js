// Endpoints
export const BASE_ENDPOINT = 'http://dnd5eapi.co/api/';

// Pass an Index ONLY
export const ABILITY_SCORES = BASE_ENDPOINT+'ability-scores/';
export const SKILLS = BASE_ENDPOINT+'skills/';
export const LANGUAGES = BASE_ENDPOINT+'languages/';
export const FEATURES = BASE_ENDPOINT+'features/';
export const RACES = BASE_ENDPOINT+'races/';
export const EQUIPMENT = BASE_ENDPOINT+'equipment/';
export const CONDITIONS = BASE_ENDPOINT+'conditions/';
export const DAMAGE_TYPES = BASE_ENDPOINT+'damage-types/';
export const MAGIC_SCHOOLS = BASE_ENDPOINT+'magic-schools/';

// Pass an Index or  querystring
export const SPELLS = BASE_ENDPOINT+'spells/';
export const PROFICIENCIES = BASE_ENDPOINT+'proficiencies/';
export const CLASSES = BASE_ENDPOINT+'classes/';
export const SUBCLASSES = BASE_ENDPOINT+'subclasses/';
export const SUBRACES = BASE_ENDPOINT+'subraces/';

//Level endpoint needs to be handled differently since it is bisected by 2 params.
// export const LEVEL = CLASSES+'{class name}/level/{integer 1-20}';
