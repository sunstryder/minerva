// Endpoints for the dnd5e resources

const BASE_ENDPOINT = 'http://dnd5eapi.co/api/';

// Pass an Index ONLY
const ABILITY_SCORES = BASE_ENDPOINT+'ability-scores/';
const SKILLS = BASE_ENDPOINT+'skills/';
const LANGUAGES = BASE_ENDPOINT+'languages/';
const FEATURES = BASE_ENDPOINT+'features/';
const RACES = BASE_ENDPOINT+'races/';
const EQUIPMENT = BASE_ENDPOINT+'equipment/';
const CONDITIONS = BASE_ENDPOINT+'conditions/';
const DAMAGE_TYPES = BASE_ENDPOINT+'damage-types/';
const MAGIC_SCHOOLS = BASE_ENDPOINT+'magic-schools/';


// Pass an Index or  querystring

const SPELLS = BASE_ENDPOINT+'spells/';
const PROFICIENCIES = BASE_ENDPOINT+'proficiencies/';
const CLASSES = BASE_ENDPOINT+'classes/';
const SUBCLASSES = BASE_ENDPOINT+'subclasses/';
const SUBRACES = BASE_ENDPOINT+'subraces/';
const LEVEL = CLASSES+'{class name}/level/{integer 1-20}';



console.log (SPELLS_ENDPOINT);

