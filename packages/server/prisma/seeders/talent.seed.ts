import { TalentCreateInput, Photon } from '@prisma/photon';
import * as SPECS from './constants/specializations';
import * as TALENTS from './constants/talents';

const talents: TalentCreateInput[] = [
  {
    id: TALENTS.ADVERSARY,
    name: 'Adversary',
    description:
      'Upgrade the difficulty of any combat check targeting this character once per rank of Adversary.',
    activation: 'Passive',
    ranked: true,
    force: false,
  },
  {
    id: TALENTS.ALL_TERRAIN_DRIVER,
    name: 'All-Terrain Driver',
    description:
      'When piloting a vehicle using the Piloting (Planetary) skill, the character does not suffer the penalties for driving through difficult terrain.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.DRIVER }] },
  },
  {
    id: TALENTS.ANATOMY_LESSON,
    name: 'Anatomy Lesson',
    description:
      'After a successful attack with a personal (non-starship/vehicle) weapon, the character may spend one Destiny Point to add damage equal to his Intellect to one hit of the attack.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.ARMOR_MASTER,
    name: 'Armor Master',
    description:
      'When wearing armor, the chaaracter increases his total soak value by one.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMANDO }] },
  },
  {
    id: TALENTS.IMPROVED_ARMOR_MASTER,
    name: 'Armor Master (Improved)',
    description:
      'When wearing armor with a soak value of two or higher, the character increases his defense by one.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMANDO }] },
  },
  {
    id: TALENTS.BACTA_SPECIALIST,
    name: 'Bacta Specialist',
    description:
      'Patients under the character’s supervision regain one additional wound per rank of Bacta Specialist each time they recover a wound while recovering in a Bacta Tank or under supervised medical conditions or long-term care.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.BAD_MOTIVATOR,
    name: 'Bad Motivator',
    description:
      'Once per game session, the character may take a Bad Motivator action to make a Hard Difficulty Mechanics check. If successful, one device (subject to the GMs approval) spontaneously fails due to the character’s involvement, or because it was about to fail anyway and the character noticed it (this is the character’s decision).',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MECHANIC }] },
  },
  {
    id: TALENTS.BALANCE,
    name: 'Balance',
    description:
      'When the character recover from strain at the end of each encounter, he may roll his Force rating in Force dice. He regains additional strain equal to the number of white circles gained from the Force Die (White die).',
    activation: 'Maneuver',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.BASIC_COMBAT_TRAINING,
    name: 'Basic Combat Training',
    description: 'Brawl and Ranged (Light) become career skills.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.RECRUIT }] },
  },
  {
    id: TALENTS.BLOOEDED,
    name: 'Blooded',
    description:
      'Add a Bonus Die (Blue Die) per rank of Blooded to all check to resist or recover from the effects of poisons, venoms, and other toxins. Reduce the duration of any related ongoing effects or damage from toxins, venoms, or poisons by one round per rank of Blooded to a minimum of one.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMANDO }] },
  },
  {
    id: TALENTS.BODY_GUARD,
    name: 'Body Guard',
    description:
      'Once per round on the character’s turn, the character may perform a Body Guard maneuver to protect one ally he is engaged with. He then suffers a number of strain no greater than his ranks in Body Guard. Until the start of the character’s next turn, upgrade the difficulty if all combat checks targeting the protected ally a number of times equal to the strain suffered by the character.',
    activation: 'Maneuver',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.TACTICIAN }] },
  },
  {
    id: TALENTS.BOUGHT_INFO,
    name: 'Bought Info',
    description:
      "When required to make a Knowledge skill check, the character can instead make a Bought Info action. He spends a number of credits equal to 50 times the difficulty of the check and counts as succeeding on the sheck with one uncancelled Success. At the GM's discretion, the character may not be able to use this ability if the information sought is particularly hard to find, or if the character is in a situation where he could not purchase information (such as marooned on a planet with no access to the HoloNet).",
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.BRACE,
    name: 'Brace',
    description:
      'As a maneuver, the character may Brace himself. This allows a character to remove a Setback Die (Black Die) per rank of Brace from the next skill check based on changing conditions: inclement weather, unstable surfaces, zero gravity, heavy gravity, or other disruptive physical obstacles that would make a skill check more difficult.',
    activation: 'Maneuver',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.GUNNER }, { id: SPECS.SHARPSHOOTER }],
    },
  },
  {
    id: TALENTS.BRILLIANT_EVASION,
    name: 'Brilliant Evasion',
    description:
      'The character may make the Brilliant Evasion action when piloting a vehicle or starship. The character selects one opponent and makes an Opposed Piloting (Planetary or Space) check. If he succeeds, the opponent’s vehicle or starship cannot make any attacks against the character’s vehicle for a number of rounds equal to the character’s Agility. Brilliant Evasion can only be performed once per encounter.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.PILOT }, { id: SPECS.SQUADRON_LEADER }],
    },
  },
  {
    id: TALENTS.BYPASS_SECURITY,
    name: 'Bypass Security',
    description:
      'Remove Setback Dice (Black Dice) eqal to the character’s ranks in Bypass Security from Skulduggery or Computers skill checks made to disable a security device or open a locked door.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SLICER }] },
  },
  {
    id: TALENTS.CAREFUL_PLANNING,
    name: 'Careful Planning',
    description:
      'Once per game session, the character can choose to introduce a “fact” or additional context directing into the narrative as if he had spent a Destiny Point.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.CLEVER_SOLUTION,
    name: 'Clever Solution',
    description:
      'Once per game session, the character can choose to make one skill check using Cunning, rather than the characteristic linked to that skill. When he does this, he must explain how, in this particular instance, his cunning is helping him overcome this challenge.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.CODEBREAKER,
    name: 'Codebreaker',
    description:
      'The character removes Setback Dice (Black Dice) from any attempt to break codes or decrypt communications equal to his ranks in Codebreaker. In addition, the character decreases the difficulty of Computers or Intellect checks made to break codes or decrypt communications by one. This does not increase with additional racks of Codebreaker.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SLICER }] },
  },
  {
    id: TALENTS.COMMAND,
    name: 'Command',
    description:
      'Gain a Bonus Die (Blue Die) when making Leadership checks for other checks to inspire, lead, or rally an audience per rank of Command. Inspired targets also add a Blue Die per rank to the subsequent Discipline checks they make over the twenty-four hours. This does not increase with additional ranks of Command.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMODORE }, { id: SPECS.SQUADRON_LEADER }],
    },
  },
  {
    id: TALENTS.COMMANDING_PRESENCE,
    name: 'Commanding Presence',
    description:
      'The character removes a Setback die per rank of Commanding Presence from his Leadership and Cool checks.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMODORE }, { id: SPECS.TACTICIAN }],
    },
  },
  {
    id: TALENTS.CONFIDENCE,
    name: 'Confidence',
    description:
      'The character may decrease the difficulty of any Discipline check to avoid the effects of fear by one level per rank of Confidence. If he decreases the difficulty to zero, he does not have to make a Discipline check.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.AMBASSADOR },
        { id: SPECS.SQUADRON_LEADER },
        { id: SPECS.TACTICIAN },
      ],
    },
  },
  {
    id: TALENTS.CONTRAPTION,
    name: 'Contraption',
    description:
      'Once per game session, the character can take a Contraption action. With a successful Hard Mechanics check, the character can fashion a device to solve a current problem using the tools and parts on hand. This device must be approved by the GM and functions for the duration of the current encounter only. Those tools are destroyed in the process. A Triumph may be spent to allow the tools to be reused later.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MECHANIC }] },
  },
  {
    id: TALENTS.CONVINCING_DEMEANOR,
    name: 'Convincing Demeanor',
    description:
      'Remove Setback Dice (Black Dice) per rank of Convincing Demeanor from any Deception or Skulduggery check.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.COORDINATED_ASSAULT,
    name: 'Coordinated Assault',
    description:
      'The character may make a Coordinated Assault maneuver. If he does so, a number of allies engaged with him equal to his ranks in Leadership gain Advantage on combat checks they make until the beginning of the character’s next turn. The range of this maneuver increases by one band per rank of Coordinated Assault.',
    activation: 'Maneuver',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.TACTICIAN }] },
  },
  {
    id: TALENTS.CREATIVE_KILLER,
    name: 'Creative Killer',
    description:
      'The character reduces the critical rating of all improvised weapons he is wielding by 2 (to a minimum of 1).',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.RECRUIT }] },
  },
  {
    id: TALENTS.CRIPPLING_BLOW,
    name: 'Crippling Blow',
    description:
      'The character may voluntarily increase the difficulty of a combat check by one to deal a crippling blow. If he succeeds and deals damage to the target’s wound threshold, the target suffers one strain whenever he moves for the remainder of the encounter.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SHARPSHOOTER }] },
  },
  {
    id: TALENTS.DEAD_TO_RIGHTS,
    name: 'Dead to Rights',
    description:
      'The character may spend one Destiny Point to add additional damage equal to half his Agility rating (rounded up) to one hit of a successful attack made by ship or vehicle-mounted weaponry.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.PILOT }] },
  },
  {
    id: TALENTS.IMPROVED_DEAD_TO_RIGHTS,
    name: 'Dead to Rights (Improved)',
    description:
      'The character may spend one Destiny Point to add additional damage equal to his Agility rating to one hit of a successful attack made by ship or vehicle-mounted weaponry. This replaces the normal ability for Dead to Rights.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.PILOT }] },
  },
  {
    id: TALENTS.DEADLY_ACCURACY,
    name: 'Deadly Accuracy',
    description:
      'Each time the character gains a rank of Deadly Accuracy, he must choose one combat skill. The character may add his basic training ranks in that combat skill as additional damage to one hit of a successful attack made with that skill with non-starship/vehicle weapons. He cannot choose the same combat skill twice.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SHARPSHOOTER }] },
  },
  {
    id: TALENTS.DEBILITATING_SHOT,
    name: 'Debilitating Shot',
    description:
      'Upon making a successful attack with a starship or vehicle weapon, may spend two Advantage to reduce the maximum speed of the target by 1 (to a minimum of 1) until the end of the next round. If the starship or vehicle was traveling its maximum speed, it has its current speed reduced to the new maximum.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.GUNNER }] },
  },
  {
    id: TALENTS.DEDICATION,
    name: 'Dedication',
    description:
      'Each rank permanently increases a single characteristic of the player’s choice by one point. This cannot bring a characteristic above six.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.DRIVER },
        { id: SPECS.GUNNER },
        { id: SPECS.PILOT },
        { id: SPECS.COMMODORE },
        { id: SPECS.SQUADRON_LEADER },
        { id: SPECS.TACTICIAN },
        { id: SPECS.AMBASSADOR },
        { id: SPECS.AGITATOR },
        { id: SPECS.QUARTERMASTER },
        { id: SPECS.MECHANIC },
        { id: SPECS.SABOTEUR },
        { id: SPECS.SCIENTIST },
        { id: SPECS.COMMANDO },
        { id: SPECS.MEDIC },
        { id: SPECS.SHARPSHOOTER },
        { id: SPECS.INFILTRATOR },
        { id: SPECS.SCOUT },
        { id: SPECS.SLICER },
        { id: SPECS.RECRUIT },
        { id: SPECS.FORCE_SENSITIVE_EMERGENT },
      ],
    },
  },
  {
    id: TALENTS.DEFENSIVE_DRIVING,
    name: 'Defensive Driving',
    description:
      'Any vehicle the character pilots has its defense rating on all zones increased by one per rank of Defensive Driving.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.DRIVER },
        { id: SPECS.PILOT },
        { id: SPECS.SQUADRON_LEADER },
      ],
    },
  },
  {
    id: TALENTS.DEFENSIVE_SLICING,
    name: 'Defensive Slicing',
    description:
      'When attempting to defend a computer system against intrusion (or when an opponent attempts to slice a computer) the character adds Setback Dice (Black Dice) equal to his rank of Defensive Rating to his opponent’s checks.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SLICER }] },
  },
  {
    id: TALENTS.IMPROVED_DEFENSIVE_SLICING,
    name: 'Defensive Slicing (Improved)',
    description:
      'When attempting to defend a computer system against intrusion, the character upgrades the difficulty of an opponent’s dice pool a number of times equal to his rank of Defensive Slicing. This replaces the usual benefits from Defensive Slicing.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SLICER }] },
  },
  {
    id: TALENTS.DEFENSIVE_STANCE,
    name: 'Defensive Stance',
    description:
      'One per round on the character’s turn, the character may perform a Defensive Stance maneuver to assume a defensive stance against incoming melee attacks. He then suffers a number of strain no greater than his ranks in Defensive Stance. Until the start of the character’s next turn, upgrade the difficulty of all melee combat checks targeting the character a number of time equal to the strain suffered by the character in this way.',
    activation: 'Maneuver',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.DISORIENT,
    name: 'Disorient',
    description:
      'After hitting with a combat check, the character may spend two Advantages to disorient his foe. Disoriented targets add a Setback Die (Black Die) to all skill checks. The target is disoriented for a number of round equal to the attacker’s ranks in Disorient.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCOUT }] },
  },
  {
    id: TALENTS.DODGE,
    name: 'Dodge',
    description:
      'When targeted by a combat check (ranged or melee) the character may choose to immediately perform a Dodge incidental to suffer a number of strain, them upgrade the difficulty of the combat check by that number. The number of strain suffered cannot exceed his ranks in Dodge.',
    activation: 'OutOfTurn',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.AMBASSADOR },
        { id: SPECS.MEDIC },
        { id: SPECS.INFILTRATOR },
      ],
    },
  },
  {
    id: TALENTS.DURABLE,
    name: 'Durable',
    description:
      'The character may reduce a Critical Injury result suffered by 10 per rank of Durable, to a minimum of one.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMANDO }, { id: SPECS.GUNNER }],
    },
  },
  {
    id: TALENTS.DYNAMIC_FIRE,
    name: 'Dynamic Fire',
    description:
      'When making a ranged attack while engaged with an opponent, the character may suffer 2 Strain to reduce the ranged modifier added for being engaged by 1 for the attack. So, when firing a Ranged (Heavy) weapon, the character only increases the difficulty by 1 when engaged, and when firing a Ranged (Light) weapon, he doesn’t increase the difficulty at all.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.RECRUIT }] },
  },
  {
    id: TALENTS.ENDURING,
    name: 'Enduring',
    description: 'Character gains +1 soak value per rank of Enduring.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.GUNNER },
        { id: SPECS.MECHANIC },
        { id: SPECS.RECRUIT },
      ],
    },
  },
  {
    id: TALENTS.EXHAUST_PORT,
    name: 'Exhaust Port',
    description:
      'Before attacking a starship or vehicle, the character may spend 1 Destiny Point to ignore the effects of the Massive rule for the attack.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.GUNNER }] },
  },
  {
    id: TALENTS.EXPERT_TRACKER,
    name: 'Expert Tracker',
    description:
      'Remove a Setback Die (Black Die) per rank of Expert tracker from check to find or follow tracks. Survival checks made to track targets take 50% less time than normal. This does not decrease with additional ranks of Expert Tracker.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SHARPSHOOTER }] },
  },
  {
    id: TALENTS.FAMILIAR_SUNS,
    name: 'Familiar Suns',
    description:
      'Once per game session the character may spend a maneuver to make a Hard Knowledge (Outer Rim) or Knowledge (Core Worlds) check. If successful, the character is familiar with the type of planetary environment he finds himself in. He knows wheter the planet is likely to be inhabited and, if so, where habitation could be found. He also knows about unusual environmental effects, hostile predators, or sources of potential profit.',
    activation: 'Maneuver',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMODORE }, { id: SPECS.SCOUT }],
    },
  },
  {
    id: TALENTS.FERAL_STRENGTH,
    name: 'Feral Strength',
    description:
      'The character deals +1 damage to one hit on all successful Brawl and Melee checks per rank of Feral Strength.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMANDO }] },
  },
  {
    id: TALENTS.FIELD_COMMANDER,
    name: 'Field Commander',
    description:
      'The character may take a Field Commander action. By successfully passing an Average Leadership check, a number of allies equal to his Presence may immediately suffer one strain to perform one maneuver. This does not count against the number of maneuvers they may perform in their turn. If there are any questions as to the order in which the allies act, the character using Field Commander is the final arbitrator.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.SQUADRON_LEADER }, { id: SPECS.TACTICIAN }],
    },
  },
  {
    id: TALENTS.IMPROVED_FIELD_COMMANDER,
    name: 'Field Commander (Improved)',
    description:
      'When taking a Field Commander action, the cahracter may affect allies equal to twice his Presence. In addition, he may spend a Triumph generated on his Leadership checks to allow only one ally to suffer one strain to perform an action, rather than a maneuver.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.SQUADRON_LEADER }, { id: SPECS.TACTICIAN }],
    },
  },
  {
    id: TALENTS.FINE_TUNING,
    name: 'Fine Tuning',
    description:
      'Whenever a character reduces the amount of strain a starship or vehicle suffers, he reduces one additional strain per rank of Fine Tuning.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.DRIVER }, { id: SPECS.MECHANIC }],
    },
  },
  {
    id: TALENTS.FIRE_CONTROL,
    name: 'Fire Control',
    description:
      'When in a starship or vehicle, the character can make a Fire Control maneuver. If he does so, all combat checks from the starship or vehicle count the silhouette of the target as one higher than normal until the beginning of the character’s next turn. This effect does not stack with multiple uses of the Fire Control maneuver.',
    activation: 'Maneuver',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMODORE }] },
  },
  {
    id: TALENTS.FORAGER,
    name: 'Forager',
    description:
      'Remove up to two Setback Dice (Black Dice) from skill checks to find food, water, or shelter. Survival checks to forage take half the time.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }, { id: SPECS.SCOUT }] },
  },
  {
    id: TALENTS.FORCE_OF_WILL,
    name: 'Force of Will',
    description:
      'Once per game session, the character can choose to make one skill check using Willpower, rather than the characteristic linked to that skill. When he does this, he must explain how, in this particular instance, his willpower is helping him overcome this challenge.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.FORCE_RATING,
    name: 'Force Rating',
    description: 'Each rank permanently increases Force rating by one.',
    activation: 'Passive',
    ranked: true,
    force: true,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.FORM_ON_ME,
    name: 'Form on Me',
    description:
      'When the character performs that Gain the Advantage action, a number of allied vehicles equal to his ranks in Leadership and within Close Range also gain the benefits of the action on the target. These allied vehicles maintain the benefits until they leave close range with the character or the character loses the benefits of Gain the Advantage.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SQUADRON_LEADER }] },
  },
  {
    id: TALENTS.FRENZIED_ATTACK,
    name: 'Frenzied Attack',
    description:
      'When making a Melee or Brawl combat check, the character may suffer a number of strain, then upgrade the ability of his combat check by that number. The number cannot exceed his ranks in Frenzied Attack.',
    activation: 'Incidental',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.FULL_STOP,
    name: 'Full Stop',
    description:
      'When piloting a ship or vehicle, the character may take the Full Stop maneuver to immediately reduce the speed of the ship or vehicle to zero. The ship or vehicle then suffers one point of system strain for every point of speed it had before stopping.',
    activation: 'Maneuver',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.DRIVER }, { id: SPECS.SQUADRON_LEADER }],
    },
  },
  {
    id: TALENTS.FULL_THROTTLE,
    name: 'Full Throttle',
    description:
      'The character may push a starship or vehicle past its limits of speed. He may perform the Full Throttle action, attempting a Hard Piloting check. With success, the ship’s top speed increases by one for a number of rounds equal to Cunning. The ship still cannot perform actions or maneuvers it could not perform normally (i.e. actions that have a minimum speed requirements)',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.DRIVER }, { id: SPECS.PILOT }] },
  },
  {
    id: TALENTS.IMPROVED_FULL_THROTTLE,
    name: 'Full Throttle (Improved)',
    description:
      'The character may voluntarily suffer one strain to attempt Full Throttle as a maneuver. In addition, the difficulty of Full Throttle is reduce to Average Difficulty.',
    activation: 'Maneuver',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.DRIVER }, { id: SPECS.PILOT }] },
  },
  {
    id: TALENTS.SUPREME_FULL_THROTTLE,
    name: 'Full Throttle (Supreme)',
    description:
      'When the pilot successfully performs a Full Throttle, the ship’s top speed increases by two for a number of rounds equal to his Cunning, instead of one.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.DRIVER }, { id: SPECS.PILOT }] },
  },
  {
    id: TALENTS.GALAXY_MAPPER,
    name: 'Galaxy Mapper',
    description:
      'Remover a Setback Die (Black Die) per rank of Galaxy Mapper from all Astrogation checks. In addition, Astrogation checks take 50% less time. This does not increase with multiple ranks of Galaxy Mapper.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMODORE }, { id: SPECS.PILOT }],
    },
  },
  {
    id: TALENTS.GEARHEAD,
    name: 'Gearhead',
    description:
      'Remove a Setback Die (Black Die) per rank of Gearhead from all Mechanics checks. In addition, the credit cost to add mods to attachments decreases by 50%. This does not increase with multiple ranks of Gearhead.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.DRIVER }, { id: SPECS.MECHANIC }],
    },
  },
  {
    id: TALENTS.GREASED_PALMS,
    name: 'Greased Palms',
    description:
      'Before making a social interaction check, the character may perform a Greased Palms maneuver and spend up to 50 credits per rank of Greased Palms. For every 50 credits spent, the character upgrades the ability of the skill check once. How the money accomplishes this can be up to the player and the GM, but could take the form of bribes, buying gifts, or even purchasing information that gives the character an advantage in the ensuing interaction.',
    activation: 'Maneuver',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.GRIT,
    name: 'Grit',
    description:
      'Each rank of Grit increases a character’s strain threshold by one.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.AGITATOR },
        { id: SPECS.AMBASSADOR },
        { id: SPECS.COMMANDO },
        { id: SPECS.COMMODORE },
        { id: SPECS.DRIVER },
        { id: SPECS.FORCE_SENSITIVE_EMERGENT },
        { id: SPECS.GUNNER },
        { id: SPECS.INFILTRATOR },
        { id: SPECS.MECHANIC },
        { id: SPECS.MEDIC },
        { id: SPECS.PILOT },
        { id: SPECS.QUARTERMASTER },
        { id: SPECS.RECRUIT },
        { id: SPECS.SABOTEUR },
        { id: SPECS.SCOUT },
        { id: SPECS.SHARPSHOOTER },
        { id: SPECS.SLICER },
        { id: SPECS.SQUADRON_LEADER },
      ],
    },
  },
  {
    id: TALENTS.HARD_HEADED,
    name: 'Hard Headed',
    description:
      'The character may perform the Hard Headed action. On any turn in which the character is staggered or disoriented, he may perform the Hard Headed action (this action may be specifically performed even though he is normally barred from performing actions when staggered). He makes a Daunting (4 Difficulty Dice) Discipline check. If he succeeds, he is no longer staggered or disoriented. The difficulty of this check decreases by one per additional rank of Hard Headed, to a minimum of Easy.',
    activation: 'Action',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.MECHANIC }, { id: SPECS.SABOTEUR }],
    },
  },
  {
    id: TALENTS.IMPROVED_HARD_HEADED,
    name: 'Hard Headed (Improved)',
    description:
      'The character may use his Hard Headed action to recover from being incapacitated due to exceeding his strain threshold, he may make a Formidable (5 Difficulty Dice) Discipline check as his Hard Headed action (this action can be specifically be performed even though he is normally barred from performing actions.) If he succeeds, decrease his strain to one below his strain threshold. The difficulty of this check decreases by one per rank of Hard Headed, to a minimum of Easy.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.MECHANIC }, { id: SPECS.SABOTEUR }],
    },
  },
  {
    id: TALENTS.HEIGHTENED_AWARENESS,
    name: 'Heightened Awareness',
    description:
      'Allies within close range of the character add a Bonus Die (Blue Die) to their Perception and Vigilance checks. Allies engaged with him add two Bonus Dice instead.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SCOUT }] },
  },
  {
    id: TALENTS.HEROIC_FORTITUDE,
    name: 'Heroic Fortitude',
    description:
      'The character may spend one Destiny Point to ignore the effects of ongoing Critical Injuries on any Brawn or Agility related checks until the end of the encounter. He still suffers from the injury itself.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMANDO }, { id: SPECS.GUNNER }],
    },
  },
  {
    id: TALENTS.HIDDEN_STORAGE,
    name: 'Hidden Storage',
    description:
      'Any large equipment, vehicle, or droid that the character owns has one or more hidden compartments for smuggling appropriately sized gear. The number of compartments is up to the player, but cannot be enough to old a total encumberance value of items more than the character’s ranks in Hidden Storage. The size of the compartments are proportional to the size of the vehicle or droid in question. Most humanoid droids can only hold items equivalent in size to a one-handed weapon, whereas a silhouette 4 starship could conceal humanoids within its compartments. Any checks to detect these compartments have a Formidable (5 Difficulty Dice) difficulty.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.HOLD_TOGETHER,
    name: 'Hold Together',
    description:
      'The character may spend one Destiny Point to make a Hold Together incidental immediately after a vehicle or starship he has repaired this encounter takes damage. The character explains why the apparently serious damage was in fact superficial, and the damage from the attack becomes system strain instead.',
    activation: 'OutOfTurn',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMODORE }, { id: SPECS.MECHANIC }],
    },
  },
  {
    id: TALENTS.INCITE_REBELLION,
    name: 'Incite Rebellion',
    description:
      'Once per game session, the character can take an Incite Rebellion action to make a Hard Coercion check. If successful, a number of beings up to his rank in Coercion become unhappy and try to take action against an organization or authority with power over them until the end of the encounter. This could be due to something the character did or said, or just because the beings were already unhappy with their position.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.INDISTINGUISHABLE,
    name: 'Indistinguishable',
    description:
      'The character’s appearance is so common that people have a hard time identifying distinguishing traits. Opposing characters upgrade the difficulty of any checks made to identify him once per rank of Indistinguishable.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.AMBASSADOR },
        { id: SPECS.FORCE_SENSITIVE_EMERGENT },
      ],
    },
  },
  {
    id: TALENTS.INSIGHT,
    name: 'Insight',
    description:
      'Perception and Discipline become career skills if they were not already.',
    activation: 'Passive',
    ranked: false,
    force: true,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.INSPIRING_RHETORIC,
    name: 'Inspiring Rhetoric',
    description:
      'The character may take the Inspiring Rhetoric action; making an Average Leadership check. For each Success, one ally within close range recovers one strain. For each Advantage, one ally benefiting from Inspiring Rhetoric recovers one additional strain.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
  {
    id: TALENTS.IMPROVED_INSPIRING_RHETORIC,
    name: 'Inspiring Rhetoric (Improved)',
    description:
      'Each ally affected by Inspiring Rhetoric gains a Bonus Die (Blue Die) on all skill checks for a number of rounds equal to the character’s ranks in Leadership; this does not stack with itself.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
  {
    id: TALENTS.SUPREME_INSPIRING_RHETORIC,
    name: 'Inspiring Rhetoric (Supreme)',
    description:
      'The character may voluntarily suffer one strain to perform Inspiring Rhetoric as a maneuver instead of an action.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
  {
    id: TALENTS.INTENSE_FOCUS,
    name: 'Intense Focus',
    description:
      'Before making a skill check, the character may perform the Intense Focus maneuver. The character suffers one strain to upgrade the ability of the skill check once.',
    activation: 'Maneuver',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.QUARTERMASTER }, { id: SPECS.SCIENTIST }],
    },
  },
  {
    id: TALENTS.INTENSE_PRESENCE,
    name: 'Intense Presence',
    description:
      'The character may spend one Destiny Point to recover strain equal to his Presence rating.',
    activation: 'OutOfTurn',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
  {
    id: TALENTS.INTIMIDATING,
    name: 'Intimidating',
    description:
      'When attempting a Coercion check, the character may suffer a number of strain to downgrade the difficulty of the check a number of times equal to the strain suffered. This number cannot exceed his ranks in Intimidating. When the character is the target of a Coercion check, the character may suffer a number of strain to upgrade the difficulty of the check a number of time equal to the strain suffered. This number cannot exceed his ranks in Intimidating.',
    activation: 'OutOfTurn',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.INVENTOR,
    name: 'Inventor',
    description:
      'When constructing new items or modifying existing attachments, the character may choose to add a Bonus Die (Blue Die) or remove a Setback Die (Black Die) from the check per rank of Inventor.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.INVIGORATE,
    name: 'Invigorate',
    description:
      'Once per encounter, when an ally within short range attempts a skill check using the Brawn or Agility characteristic, the character may roll a Force die. Each white dot adds a Success whilst each black dot adds a threat to the target’s check.',
    activation: 'OutOfTurn',
    ranked: false,
    force: true,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.ITS_NOT_THAT_BAD,
    name: "It's Not That Bad",
    description:
      'Once per game session, when an ally is about to suffer a critical injury, the character can take an It’s Not That Bad incidental to make a Hard Medicine check. If successful, the ally does not gain the Critical Injury and does not suffer any of its normal effects (although the attack that caused the Critical Injury still deals its damage as normal).',
    activation: 'OutOfTurn',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.JUMP_UP,
    name: 'Jump Up',
    description:
      'Once per round on the character’s turn, the character may stand up from prone or a seated position as an Incidental.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.INFILTRATOR }, { id: SPECS.RECRUIT }],
    },
  },
  {
    id: TALENTS.JURY_RIGGED,
    name: 'Jury Rigged',
    description:
      'The character chooses one personal weapon or piece of armor per rank of Jury Rigged. He may increase the damage of the weapon by one; decrease the Advantage cost on its Critical, or any single other effect by one to a minimum of one; or increase armor’s ranged or melee defense by one. Alternatively, he can decrease the encumbrance of the item by two to a minimum of one. The bonus only applies so long as the character using the item. If the item is ever lost, or destroyed, the character may apply Jury Rigged to a new personal weapon or piece of armor.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.GUNNER }] },
  },
  {
    id: TALENTS.KILL_WITH_KINDNESS,
    name: 'Kill with Kindness',
    description:
      'Remove a Setback Die (Black Die) per rank of Kill with Kindness from all Charm and Leadership checks the character attempts.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
  {
    id: TALENTS.KNOCKDOWN,
    name: 'Knockdown',
    description:
      'After hitting with a melee attack, the character may knock the target prone by spending a Triumph. If the target is larger than the acting character, it requires an additional Triumph for each silhouette larger.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMANDO }, { id: SPECS.INFILTRATOR }],
    },
  },
  {
    id: TALENTS.KNOW_SOMEBODY,
    name: 'Know Somebody',
    description:
      'Once per game session, when attempting to purchase a legally available item, the character may reduce its rarity by one step per rank of Know Somebody.',
    activation: 'Incidental',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.KNOWLEDGE_SPECIALIZATION,
    name: 'Knowledge Specialization',
    description:
      'When the character first acquires this talent, he may choose one Knowledge skill. When making checks with that skill, he may spend a Triumph to gain additional successes equal to his ranks in Knowledge Specialization.',
    activation: 'Incidental',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.KNOWN_SCHEMATICS,
    name: 'Known Schematics',
    description:
      'Once per game session, the character may spend a maneuver to make a Hard Knowledge (Education) check. Success means the character is familiar with a building or capital ship’s design. He now knows the location of critical components or facilities within the ship or vehicle, as well as his own location. He can also plan unconventional routes around onstacles. Additional Successes, Advantages, or Triumphs results can reveal other useful information at the GMs discretion.',
    activation: 'Maneuver',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMODORE }] },
  },
  {
    id: TALENTS.LETS_RIDE,
    name: "Let's Ride",
    description:
      'Once per round on the character’s turn, the character may mount or dismount from a vehicle or beast, or slide into the cockpit or weapon station aboard a starship, as an incidental instead of a maneuver.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.PILOT },
        { id: SPECS.SCOUT },
        { id: SPECS.SQUADRON_LEADER },
      ],
    },
  },
  {
    id: TALENTS.LETHAL_BLOWS,
    name: 'Lethal Blows',
    description:
      'The character adds +10 per rank of Lethal Blows to any Critical Injury rolls inflicted on opponents.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SHARPSHOOTER }] },
  },
  {
    id: TALENTS.MASTER_DOCTOR,
    name: 'Master Doctor',
    description:
      'Once per round, the character may suffer two strain to decrease the difficulty of his next Medicine check by one to a minimum of an Easy difficulty.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.MASTER_DRIVER,
    name: 'Master Driver',
    description:
      'Once per round when piloting a vehicle using the Piloting (Planetary) skill, the character may voluntarily suffer two strain to perform any action as maneuver instead.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.DRIVER }] },
  },
  {
    id: TALENTS.MASTER_GRENADIER,
    name: 'Master Grenadier',
    description:
      'The character decreases the Advantage cost to active the Blast quality on any weapon he uses by 1 to a minimum of 1. This includes the cost to activate the Blast quality if the weapon misses.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SABOTEUR }] },
  },
  {
    id: TALENTS.MASTER_LEADER,
    name: 'Master Leader',
    description:
      'Once per round, the character may suffer two strain to decrease the difficulty of his next Leadership check by one, to a minimum of an Easy difficulty.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SQUADRON_LEADER }] },
  },
  {
    id: TALENTS.MASTER_MERCHANT,
    name: 'Master Merchant',
    description:
      'Before making a check when buying or selling items, or undertaking or paying off Obligation, the character may choose to suffer two strain. If the check succeeds, he sells the item for 25% more than base cost, buys it for 25% less, pays off an additional one Obligation point, or undertakes one less Obligation point.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.MASTER_OF_SHADOWS,
    name: 'Master of Shadows',
    description:
      'Once per round, the character may voluntarily suffer two strain to decrease the difficulty of the next Stealth or Skulduggery check by one, to a minimum of Easy.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.MASTER_PILOT,
    name: 'Master Pilot',
    description:
      'Once per round when piloting a starship (a ship piloted using the Piloting (Space) skill), the character may voluntarily suffer two strain to perform any action as a maneuver instead.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.PILOT }] },
  },
  {
    id: TALENTS.MASTER_SLICER,
    name: 'Master Slicer',
    description:
      'Once per round, the character may perform a Master Slicer incidental to suffer two strain and decrease the difficulty of the next Computers or other slicing-related check by one, to a minimum of Easy.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SLICER }] },
  },
  {
    id: TALENTS.MASTER_STARHOPPER,
    name: 'Master Starhopper',
    description:
      'Once per round, the character may suffer two strain to decrease the difficulty of his next Astrogation check by one, to a minimum of Easy.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMODORE }] },
  },
  {
    id: TALENTS.MENTAL_FORTRESS,
    name: 'Mental Fortress',
    description:
      'The character may spend one Destiny Point to ignore the effects of ongoing Critical Injuries on any Intellect or Cunning related checks until the end of the encounter. He still suffers from the injury itself.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.SCIENTIST }, { id: SPECS.SLICER }],
    },
  },
  {
    id: TALENTS.NATURAL_BRAWLER,
    name: 'Natural Brawler',
    description:
      'Once per game session, the character may reroll any one Brawl or Melee check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.NATURAL_CHARMER,
    name: 'Natural Charmer',
    description:
      'Once per game session, the character may reroll any one Charm or Deception check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
  {
    id: TALENTS.NATURAL_DOCTOR,
    name: 'Natural Doctor',
    description:
      'Once per game session, the character may reroll any one Medicine check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.NATURAL_DRIVER,
    name: 'Natural Driver',
    description:
      'Once per game session, the character may reroll any one Piloting (Planetary) or Gunnery check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.DRIVER }] },
  },
  {
    id: TALENTS.NATURAL_ENFORCER,
    name: 'Natural Enforcer',
    description:
      'Once per game session, the character may reroll any one Coercion or Streetwise check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.NATURAL_HUNTER,
    name: 'Natural Hunter',
    description:
      'Once per game session, the character may reroll any one Perception or Vigilance check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SCOUT }] },
  },
  {
    id: TALENTS.NATURAL_LEADER,
    name: 'Natural Leader',
    description:
      'Once per game session, the character may reroll any one Cool or Leadership check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.TACTICIAN }] },
  },
  {
    id: TALENTS.NATURAL_MARKSMAN,
    name: 'Natural Marksman',
    description:
      'Once per game session, the character may reroll any one Ranged (Light) or Ranged (Heavy) check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SHARPSHOOTER }] },
  },
  {
    id: TALENTS.NATURAL_NEGOTIATOR,
    name: 'Natural Negotiator',
    description:
      'Once per game session, the character can reroll any one Cool or Negotiation check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.NATURAL_OUTDOORSMAN,
    name: 'Natural Outdoorsman',
    description:
      'Once per game session, the character may reroll any one Resilience or Survival check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMANDO }, { id: SPECS.TACTICIAN }],
    },
  },
  {
    id: TALENTS.NATURAL_PILOT,
    name: 'Natural Pilot',
    description:
      'Once per game session, the character may reroll any one Piloting (Space) or Gunnery check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.PILOT }] },
  },
  {
    id: TALENTS.NATURAL_PROGRAMMER,
    name: 'Natural Programmer',
    description:
      'Once per game session, the character may reroll any one Computer or Astrogation check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SLICER }] },
  },
  {
    id: TALENTS.NATURAL_ROGUE,
    name: 'Natural Rogue',
    description:
      'Once per game session, the character may reroll any one Skulduggery or Stealth check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.NATURAL_SCHOLAR,
    name: 'Natural Scholar',
    description:
      'Once per game session, the character may reroll any one Knowledge check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.NATURAL_TINKERER,
    name: 'Natural Tinkerer',
    description:
      'Once per game session, the character may reroll any one Mechanics check.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MECHANIC }] },
  },
  {
    id: TALENTS.NOBODYS_FOOL,
    name: "Nobody's Fool",
    description:
      'The difficulty of any Charm, Coercion or Deception checks attempted against the character is upgraded once for each rank of Nobody’s Fool.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.AMBASSADOR }, { id: SPECS.AGITATOR }],
    },
  },
  {
    id: TALENTS.OUTDOORSMAN,
    name: 'Outdoorsman',
    description:
      'The character removes a Setback Die (Black Die) per rank of Outdoorsman from checks to move through terrain or manage terrain or environmental effects. Decrease overland travel times by 50% (this does not decrease with multiple ranks of Outdoorsman).',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.RECRUIT }, { id: SPECS.TACTICIAN }],
    },
  },
  {
    id: TALENTS.OVERWHELM_DEFENSES,
    name: 'Overwhelm Defenses',
    description:
      'Upon making an unsuccessful attack with a starship or vehicle weapon, the character may spend two Advantage per rank of Overwhelm Defenses to reduce the defense rating in the defense zone targeted by the check by one for every two Advantage spent.',
    activation: 'Incidental',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.GUNNER }] },
  },
  {
    id: TALENTS.PHYSICAL_TRAINING,
    name: 'Physical Training',
    description:
      'This character add a Bonus Die per rank of Physical Training to his Athletics and Resilience checks.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMANDO }] },
  },
  {
    id: TALENTS.PLAUSIBLE_DENIABILITY,
    name: 'Plausible Deniability',
    description:
      'Remove a Setback Die (Black Die) per rank of Plausible Deniability from all Coercion and Deception checks the character attempts.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.POINT_BLANK,
    name: 'Point Blank',
    description:
      'The character adds one damage per rank of Point Blank to one hit of successful Ranged (Heavy) or Ranged (Light) attacks made while at short range or engaged.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMANDO }] },
  },
  {
    id: TALENTS.POWERFUL_BLAST,
    name: 'Powerful Blast',
    description:
      'The character increases the Blast quality damage dealt by explosives, explosive weapons, and grenades he uses by 1 per rank of Powerful Blast.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SABOTEUR }] },
  },
  {
    id: TALENTS.QUICK_DRAW,
    name: 'Quick Draw',
    description:
      'Once per round on the character’s turn, he may draw or holster an easily accessible weapon as an incidental, not a maneuver. This talent also reduces the amount of time to draw or stow a weapon that usually requires more than one maneuver to properly prepare or stow, by one maneuver.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.RECRUIT }, { id: SPECS.TACTICIAN }],
    },
  },
  {
    id: TALENTS.QUICK_FIX,
    name: 'Quick Fix',
    description:
      'Once per game session, the character can choose to make one skill check using Agility, rather than the characteristic linked to that skill. When he does this, he must explain how, in this particular instance, his Agility is helping him overcome this challenge.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SHARPSHOOTER }] },
  },
  {
    id: TALENTS.QUICK_STRIKE,
    name: 'Quick Strike',
    description:
      'When performing a combat check during combat, the character adds a Bonus Die (Blue Die) per rank of Quick Strike to combat checks against any target that has not yet acted in the encounter.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.SCOUT }, { id: SPECS.SQUADRON_LEADER }],
    },
  },
  {
    id: TALENTS.RAPID_REACTION,
    name: 'Rapid Reaction',
    description:
      'The character may suffer a number of strain to add an equal number of Successes to any Vigilance or Cool check to determine initiative order. The number may not exceed his ranks in Rapid Reaction.',
    activation: 'OutOfTurn',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.DRIVER }, { id: SPECS.COMMODORE }],
    },
  },
  {
    id: TALENTS.RAPID_RECOVERY,
    name: 'Rapid Recovery',
    description:
      'When this character heals strain after an encounter has concluded, he heals one additional strain per rank in Rapid Recovery.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.PILOT },
        { id: SPECS.SABOTEUR },
        { id: SPECS.SCOUT },
      ],
    },
  },
  {
    id: TALENTS.REDUNDANT_SYSTEMS,
    name: 'Redundant Systems',
    description:
      'With an Easy Mechanics Check, the character may harvest components from a functioning device to repair a broken one, without breaking the functioning device. This allows the character to repair a broken device without having required spare parts, raw materials, or repair kits (the initial check does not suffer penalties for lacking repair kits, either). This only works, however, if the functioning device is at least the same size and technological level as the device being repaired (it is impossible to repair a starship with a blaster pistol, or a lightsaber with parts from a water wheel).',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MECHANIC }] },
  },
  {
    id: TALENTS.RESEARCHER,
    name: 'Researcher',
    description:
      'The character removes a Setback Die (Black Die) per rank of Researcher from all Knowledge checks. Researching takes 50% less time (this does not increase with multiple ranks of researcher).',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.RESOLVE,
    name: 'Resolve',
    description:
      'When the character suffers strain, he suffers one less strain per rank of Resolve, to a minimum of one. This does no apply to voluntary strain loss.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.SABOTEUR }, { id: SPECS.SLICER }],
    },
  },
  {
    id: TALENTS.RESPECTED_SCHOLAR,
    name: 'Respected Scholar',
    description:
      'The character downgrades the difficulty of checks to interact with institutions of learning by one per rank of Respected Scholar.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.SCATHING_TIRADE,
    name: 'Scathing Tirade',
    description:
      'The character may take the Scathing Tirade action by making an Average Coercion check. For each Success, one enemy within Short range suffers one strain. The character can also spend Advantage, and for every Advantage spent, one target already affected suffers one additional strain.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.IMPROVED_SCATHING_TIRADE,
    name: 'Scathing Tirade (Improved)',
    description:
      'Each enemy affected by Scathing Tirade suffers a Setback die on all skill ranks for a number of rounds equal to the character’s ranks in Coercion; this doesn’t stack with itself.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.SUPREME_SCATHING_TIRADE,
    name: 'Scathing Tirade (Supreme)',
    description:
      'The character may voluntarily suffer one strain to perform Scathing Tirade as a maneuver instead of an action.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.SECOND_WIND,
    name: 'Second Wind',
    description:
      'Once per encounter, the character may use a Second Wind incidental to recover an amount of strain equal to his ranks in Second Wind.',
    activation: 'Incidental',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.RECRUIT }, { id: SPECS.SABOTEUR }],
    },
  },
  {
    id: TALENTS.SELECTIVE_DETONATION,
    name: 'Selective Detonation',
    description:
      'When using weapons with the Blast quality or explosive devices, the character may spend Advantage to exclude one target that would normally be affected by the explosion. Multiple targets may be excluded in this manner, but the total number may not exceed his ranks in Selective Detonation. The character may also spend Triumph’s to exclude multiple targets, as long as the total number of targets excluded does not exceed his ranks in Selective Detonation.',
    activation: 'Incidental',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SABOTEUR }] },
  },
  {
    id: TALENTS.SENSE_DANGER,
    name: 'Sense Danger',
    description:
      'Once per game session, the character may remove two Setback Dice from any one skill check.',
    activation: 'Incidental',
    ranked: false,
    force: true,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.SHORTCUT,
    name: 'Shortcut',
    description:
      'During a chase, the character adds a Bonus die per rank of Shortcut to his checks made to catch or escape an opponent.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCOUT }] },
  },
  {
    id: TALENTS.SIDE_STEP,
    name: 'Side Step',
    description:
      'Once per round on the character’s turn, the character may perform a Side Step maneuver to try to avoid incoming ranged attacks. He then suffers a number of strain no greater than his ranks in Side Step. Until the start of the character’s next turn, upgrade the difficulty of all ranged combat checks targeting the character a number of times equal to the strain suffered by the character.',
    activation: 'Maneuver',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.TACTICIAN }] },
  },
  {
    id: TALENTS.SITUATIONAL_AWARENESS,
    name: 'Situational Awareness',
    description:
      'When in a starship or vehicle with functional comms, allies within short range add a Bonus die to their Perception and Vigilance checks. Allies within Close Range add two Bonus Dice instead. This talent operates on Planetary scale, not personal scale.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SQUADRON_LEADER }] },
  },
  {
    id: TALENTS.SIXTH_SENSE,
    name: 'Sixth Sense',
    description: 'The character gain +1 to ranged defense.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
  {
    id: TALENTS.SKILLED_JOCKEY,
    name: 'Skilled Jockey',
    description:
      'The character removes a Setback die per rank of Skilled Jockey from his Piloting (Planetary) and Piloting (Space) checks.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.DRIVER }, { id: SPECS.PILOT }] },
  },
  {
    id: TALENTS.SKILLED_SLICER,
    name: 'Skilled Slicer',
    description:
      'When making a Computers check, the character may spend a Triumph to gain some measure of control over the target system. Any further Computers checks within this system can be made as maneuvers.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SLICER }] },
  },
  {
    id: TALENTS.SLEIGHT_OF_MIND,
    name: 'Sleight of Mind',
    description:
      'The character adds a Bonus die per rank of Sleight of Mind to his Stealth checks unless the being attempting to detect the character is immune to Force Powers.',
    activation: 'Passive',
    ranked: true,
    force: true,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.SMOOTH_TALKER,
    name: 'Smooth Talker',
    description:
      'When a character first acquires this talent, he chooses one skill: Charm, Coercion, Negotiation or Deception. When making skill checks with that skill, he may spend a Triumph to get a number of Successes equal to his ranks in Smooth Talker.',
    activation: 'Incidental',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.SNIPER_SHOT,
    name: 'Sniper Shot',
    description:
      'Once per round before making a non-thrown ranged attack, the character may perform a maneuver to attempt a Sniper Shot. Sniper Shot increases the maximum range of his ranged weapon up to one range band per rank. For each rank beyond the normal maximum of the weapon, upgrade the difficulty of the check by one (this is in addition to the increased difficulty of the shot due to longer range).',
    activation: 'Maneuver',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SHARPSHOOTER }] },
  },
  {
    id: TALENTS.SOFT_SPOT,
    name: 'Soft Spot',
    description:
      'After making a successful attack with a non-starship/vehicle weapon, the character may spend one Destiny Point to add damage equal to his Cunning to one hit of the successful attack.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.SOLID_REPAIRS,
    name: 'Solid Repairs',
    description:
      'Whenever the character repairs hull trauma on a starship or vehicle, he repairs one additional hull trauma per rank of Solid Repairs.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.COMMODORE }, { id: SPECS.MECHANIC }],
    },
  },
  {
    id: TALENTS.SOUND_INVESTMENTS,
    name: 'Sound Investments',
    description:
      'At the beginning of each game session, the character gains credits equal to his ranks in Sound Investments time 100. How this money is earned is up to the player and GM, and could be actual investments, business dealings, or even a small legal/illegal side business. The GM can also decide that the current events of the adventure may make these funds temporarily unavailable.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.SPARE_CLIP,
    name: 'Spare Clip',
    description:
      'The character does not run out of ammo on a Despair. Items with Limited Ammo quality run out of ammo as normal.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.GUNNER }, { id: SPECS.RECRUIT }] },
  },
  {
    id: TALENTS.SPEAKS_BINARY,
    name: 'Speaks Binary',
    description:
      'The character gains a Bonus die per rank of Speaks Binary to any tasks he directs Non-Player Character droids to perform.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.STALKER,
    name: 'Stalker',
    description:
      'The character adds a Bonus die per rank of Stalker to his Coordination and Stealth checks.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCOUT }] },
  },
  {
    id: TALENTS.STEELY_NERVES,
    name: 'Steely Nerves',
    description:
      'The character may spend one Destiny Point to ignore the effects of ongoing Critical Injuries on any Presence or Willpower related checks until the end of the encounter. He still suffers from the injury itself.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
  {
    id: TALENTS.STIM_APPLICATION,
    name: 'Stim Application',
    description:
      'The character may take the Stim Application action. To perform this action, he must have access to drugs. a medpac, or stimpacks. He makes an Average Medicine check. If successful, one ally he is engaged with (including himself) increases one characteristic of the character’s choice by one for the remainder of the encounter, and suffers four strain. A single character’s individual characteristics may each only be increased once by Stim Application during an encounter.',
    activation: 'Action',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.IMPROVED_STIM_APPLICATION,
    name: 'Stim Application (Improved)',
    description:
      'As an incidental, when performing a Stim Application action, the character may increase the difficulty of the Medicine check to Hard. If he does so, the target of the action suffers one point of strain instead of four.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.SUPREME_STIM_APPLICATION,
    name: 'Stim Application (Supreme)',
    description:
      'When performing the Stim Application action, each Triumph may be spent to increase an additional characteristic by one.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.STIMPACK_SPECIALIZATION,
    name: 'Stimpack Specialization',
    description:
      'Whenever the character uses a stimpack, the target equal an additional wound per rank of Stimpack Specialization. The sixth stimpack and beyond each day still have no effect.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.STREET_SMARTS,
    name: 'Street Smarts',
    description:
      'Remove a Setback Die (Black Die) per rank of Street Smarts from any Streetwise or Knowledge (Underworld) checks the character attempts.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.AGITATOR }] },
  },
  {
    id: TALENTS.STROKE_OF_GENIUS,
    name: 'Stroke of Genius',
    description:
      'Once per game session, the character can choose to make one skill check using Intellect, rather than the characteristic linked to that skill. When he does this, he must explain how, in this particular instance, his intelligence is helping him overcome this challenge.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.STRONG_ARM,
    name: 'Strong Arm',
    description:
      'Characters with the Strong Arm talent treat thrown weapons as if they had one step greater range, to a maximum of medium range.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMANDO }] },
  },
  {
    id: TALENTS.STUNNING_BLOW,
    name: 'Stunning Blow',
    description:
      'When making Melee checks, the character may choose to deal damage as strain instead of wounds. This does not ignore soak.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.IMPROVED_STUNNING_BLOW,
    name: 'Stunning Blow (Improved)',
    description:
      'When dealing strain damage with Melee or Brawl checks, the character may spend a Triumph result to stagger his target for one round per Triumph.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.INFILTRATOR }] },
  },
  {
    id: TALENTS.SUPERIOR_REFLEXES,
    name: 'Superior Reflexes',
    description: 'The character gains +1 melee defense.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.SURGEON,
    name: 'Surgeon',
    description:
      'When this character makes a Medicine check to help a character heal wounds, the target heals one additional wound per rank of Surgeon.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.MEDIC }] },
  },
  {
    id: TALENTS.SWIFT,
    name: 'Swift',
    description:
      'The character does not suffer the penalties for moving through difficult terrain (he moves through it at normal speed, without spending additional maneuvers)',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.TACTICIAN }] },
  },
  {
    id: TALENTS.TACTICAL_COMBAT_TRAINING,
    name: 'Tactical Combat Training',
    description: 'Melee and Ranged (Heavy) become career skills.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.RECRUIT }] },
  },
  {
    id: TALENTS.TARGETED_BLOW,
    name: 'Targeted Blow',
    description:
      'On a successful attack during combat with a non-starship/vehicle weapon, the character may spend one Destiny Point to add damage equal to his Agility to one hit of the successful attack.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SHARPSHOOTER }] },
  },
  {
    id: TALENTS.TECHNICAL_APTITUDE,
    name: 'Technical Aptitude',
    description:
      'For each rank, the character reduces the amount of time needed to complete Computer-related tasks by 25%.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SLICER }] },
  },
  {
    id: TALENTS.TIME_TO_GO,
    name: 'Time to Go',
    description:
      'The character may spend 1 Destiny Point to perform a Move maneuver as an incidental to attempt to move into cover or out of the blast range of a weapon or explosion. This may be performed out of turn. This incidental occurs after he character determines he would be hit by the blast, but before damage is applied.',
    activation: 'OutOfTurn',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SABOTEUR }] },
  },
  {
    id: TALENTS.IMPROVED_TIME_TO_GO,
    name: 'Time to Go (Improved)',
    description:
      'When activating Time to Go, the character may allow one ally he is engaged with to also perform an out of turn Move maneuver as an incidental to attempt to move into cover or out of the blast range of a weapon or explosion. This incidental occurs after the ally determines he would be hit by the blast, but before damage is applied.',
    activation: 'OutOfTurn',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.SABOTEUR }] },
  },
  {
    id: TALENTS.TINKERER,
    name: 'Tinkerer',
    description:
      'The character makes one piece of equipment more modifiable. He chooses one piece of equipment and increases its number of hard points by one. He can only do this once per piece of equipment, but can modify a number of pieces of equipment equal to his ranks in Tinkerer. If he loses a modified piece of equipment, he may apply Tinkerer to a new one.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.SCIENTIST }] },
  },
  {
    id: TALENTS.TOUCH_OF_FATE,
    name: 'Touch of Fate',
    description:
      'Once per game session, the character may add two Bonus Dice (Blue Dice) to any one skill check.',
    activation: 'Incidental',
    ranked: false,
    force: true,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.TOUGHENED,
    name: 'Toughened',
    description:
      'Once per game session, the character may add two Bonus Dice (Blue Dice) to any one skill check.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.COMMANDO },
        { id: SPECS.DRIVER },
        { id: SPECS.FORCE_SENSITIVE_EMERGENT },
        { id: SPECS.GUNNER },
        { id: SPECS.INFILTRATOR },
        { id: SPECS.MECHANIC },
        { id: SPECS.MEDIC },
        { id: SPECS.PILOT },
        { id: SPECS.QUARTERMASTER },
        { id: SPECS.RECRUIT },
        { id: SPECS.SABOTEUR },
        { id: SPECS.SCOUT },
        { id: SPECS.SHARPSHOOTER },
        { id: SPECS.TACTICIAN },
      ],
    },
  },
  {
    id: TALENTS.TRICKY_TARGET,
    name: 'Tricky Target',
    description:
      'Any vehicle the character pilots counts as having a silhouette of one lower than normal when being attacked, to a minimum of 0.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: {
      connect: [
        { id: SPECS.DRIVER },
        { id: SPECS.PILOT },
        { id: SPECS.SQUADRON_LEADER },
      ],
    },
  },
  {
    id: TALENTS.TRUE_AIM,
    name: 'True Aim',
    description:
      'Once per round, before the character makes a ranged attack, he may perform a True Aim maneuver. By performing this maneuver, the character gains all the benefits for aiming and also upgrades his attack roll once per rank of True Aim.',
    activation: 'Maneuver',
    ranked: true,
    force: false,
    specializations: {
      connect: [{ id: SPECS.GUNNER }, { id: SPECS.SHARPSHOOTER }],
    },
  },
  {
    id: TALENTS.UNCANNY_REACTIONS,
    name: 'Uncanny Reactions',
    description:
      'The character adds a Bonus Die (Blue Die) per rank of Uncanny Reactions to all Vigilance checks.',
    activation: 'Passive',
    ranked: true,
    force: true,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.UNCANNY_SENSES,
    name: 'Uncanny Senses',
    description:
      'The character adds a Bonus Die (Blue Die) per rank of Uncanny Senses to all Perception checks.',
    activation: 'Passive',
    ranked: true,
    force: true,
    specializations: { connect: [{ id: SPECS.FORCE_SENSITIVE_EMERGENT }] },
  },
  {
    id: TALENTS.UNSTOPPABLE,
    name: 'Unstoppable',
    description:
      'If the percentile roll made when the character receives a Critical Injury is 1, or is reduced to 1, the character does not receive the Critical Injury and suffers none of the effects.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.COMMANDO }] },
  },
  {
    id: TALENTS.UTILITY_BELT,
    name: 'Utility Belt',
    description:
      'The character may spend one Destiny Point to perform a Utility Belt incidental to produce a previously undocumented – but essential – small tool from his utility belt, satchel, or pockets, with a rarity no greater than 4. This cannot be a weapon unless the weapon has the Limited Ammo 1 quality.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: {
      connect: [{ id: SPECS.SCIENTIST }, { id: SPECS.SCOUT }],
    },
  },
  {
    id: TALENTS.VEHICLE_COMBAT_TRAINING,
    name: 'Vehicle Combat Training',
    description: 'Gunnery and Piloting (Planetary) become career skills.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: 19 }] },
  },
  {
    id: TALENTS.WELL_ROUNDED,
    name: 'Well Rounded',
    description:
      'The character chooses any two skills. They permanently become career skills.',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: 14 }] },
  },
  {
    id: TALENTS.WELL_TRAVELED,
    name: 'Well Traveled',
    description:
      'Knowledge (Core Worlds) and Knowledge (Outer Rim) become career skills.',
    activation: 'Passive',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: 19 }] },
  },
  {
    id: TALENTS.WHEEL_AND_DEAL,
    name: 'Wheel and Deal',
    description:
      'When he sells legal goods to a reputable merchant or business, the character gains an additional 10% more credits per rank of Wheel and Deal (based on the original sell price of the good or item)',
    activation: 'Passive',
    ranked: true,
    force: false,
    specializations: { connect: [{ id: SPECS.QUARTERMASTER }] },
  },
  {
    id: TALENTS.WORKS_LIKE_A_CHARM,
    name: 'Works Like a Charm',
    description:
      'Once per game session, the character can choose to make one skill check using Presence, rather than the characteristic linked to that skill. When he does this, he must explain how, in this particular instance, his social ability is helping him overcome this challenge.',
    activation: 'Incidental',
    ranked: false,
    force: false,
    specializations: { connect: [{ id: SPECS.AMBASSADOR }] },
  },
];

export default async function(photon: Photon): Promise<boolean> {
  for (const talent of talents) {
    await photon.talents.upsert({
      where: { id: talent.id },
      update: talent,
      create: talent,
    });
    console.log(`${talent.name} added to database`); // eslint-disable-line
  }
  return Promise.resolve(true);
}
