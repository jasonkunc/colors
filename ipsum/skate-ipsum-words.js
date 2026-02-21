// Skate Ipsum Word Database
// Focused specifically on skateboarding tricks
const skateTricks = [
    // Flatground Basics
    'ollie', 'nollie', 'fakie ollie', 'switch ollie', 'manual', 'nose manual', 'fakie manual', 'pivot', 'fakie pivot',

    // Kickflips & Variations
    'kickflip', 'heelflip', 'nollie kickflip', 'nollie heelflip', 'fakie kickflip', 'fakie heelflip',
    'switch kickflip', 'switch heelflip', 'double kickflip', 'triple kickflip', 'double heelflip',

    // Pop Shove-its & Variations
    'pop shove-it', 'backside pop shove-it', 'nollie shove-it', 'fakie shove-it', 'switch shove-it',
    '360 pop shove-it', 'nollie 360 shove-it', 'fakie 360 shove-it',

    // Flip + Shove-it Combos
    'varial kickflip', 'varial heelflip', 'inward heelflip', 'hardflip', 'fakie hardflip', 'nollie hardflip',
    'switch hardflip', 'fakie inward heelflip', 'nollie inward heelflip',

    // 360 Flip Variations
    'tre flip', '360 flip', 'fakie tre flip', 'nollie tre flip', 'switch tre flip', '360 hardflip',
    'fakie 360 hardflip', 'nollie 360 hardflip', '360 inward heelflip', 'caballerial flip',

    // Body Varials & Spins
    'frontside 180', 'backside 180', 'frontside 360', 'backside 360', 'frontside 540', 'backside 540',
    'caballerial', 'nollie frontside 180', 'nollie backside 180', 'switch frontside 180', 'switch backside 180',

    // Spin + Flip Combos
    'frontside flip', 'backside flip', 'frontside heelflip', 'backside heelflip',
    'frontside 360 kickflip', 'backside 360 kickflip', 'frontside 360 heelflip', 'backside 360 heelflip',
    'nollie frontside flip', 'nollie backside flip',

    // Grinds
    '50-50 grind', '5-0 grind', 'nosegrind', 'tailslide', 'noseslide', 'boardslide', 'crooked grind',
    'smith grind', 'feeble grind', 'salad grind', 'bluntslide', 'nosebluntslide', 'overcrook',
    'willy grind', 'hurricane grind', 'darkslide', 'lipslide', 'suski grind',

    // Grind Variations
    'frontside 50-50', 'backside 50-50', 'frontside nosegrind', 'backside nosegrind',
    'frontside smith', 'backside smith', 'frontside feeble', 'backside feeble',
    'frontside boardslide', 'backside boardslide', 'frontside crooked', 'backside crooked',
    'frontside bluntslide', 'backside bluntslide',

    // Stalls
    '50-50 stall', 'nose stall', 'tail stall', 'rock to fakie', 'rock and roll', 'axle stall',
    'blunt stall', 'noseblunt stall', 'disaster', 'pivot fakie',

    // Lip Tricks (Vert/Transition)
    'feeble stall', 'smith stall', 'overcrook stall', 'lien to tail', 'lien air', 'indy air',
    'mute air', 'melon air', 'stalefish', 'kickflip indy', 'heelflip mute', 'madonna',
    'airwalk', 'japan air', 'christ air', 'mctwist', '900', '1080', 'varial mctwist',

    // Vert Tricks
    'frontside air', 'backside air', 'ollie north', 'ollie south', 'benihana', 'stiffy',
    'rocket air', 'nosegrab', 'tailgrab', 'nosepick', 'frontside invert', 'eggplant',
    'handplant', 'one-foot handplant', 'stalemasky',

    // Old School / Classic Tricks
    'casper', 'casper flip', 'helipop', 'impossible', '360 impossible', 'g-turn', 'rail flip',
    'primo slide', 'hospital flip', 'fingerflip', 'tracktor flip', 'gazelle flip',
    'half cab', 'full cab', 'kickflip underflip',

    // Freestyle / Technical
    'pogostick', 'pogo', 'spacewalk', 'handstand', 'nose wheelie', 'tail wheelie',
    'casper to wheelie', 'wrap around', 'anti-casper', 'rusty slide', 'darkslide manual', 'truckstand',

    // Flatground Classics
    'tic-tac', 'kickturn', 'boneless', 'no comply', 'fastplant', 'wallride', 'wallplant', 'tailblunt', 'noseblunt',

    // Downhill / Slide Tricks
    'coleman slide', 'pendulum slide', 'toeside slide', 'heelside slide', 'speed check',
    'glove down slide', 'stand-up slide'
];

// Get multiple random words (may include duplicates)
// @param {number} count - How many words to generate
// @param {string|null} category - The category to pull from, or null for any category
// @returns {string[]} Array of random words
function getRandomWords(count, category = null) {
    const words = [];
    for (let i = 0; i < count; i++) {
        words.push(skateTricks[Math.floor(Math.random() * skateTricks.length)]);
    }
    return words;
}