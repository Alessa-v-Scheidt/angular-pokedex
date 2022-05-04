const types: any = {
    'normal': 'Normal',
    'fire': 'Feuer',
    'water': 'Wasser',
    'electric': 'Elektro',
    'grass': 'Pflanze',
    'ice': 'Eis',
    'fighting': 'Kampf',
    'poison': 'Gift',
    'ground': 'Boden',
    'flying': 'Flug',
    'psychic': 'Psycho',
    'bug': 'Käfer',
    'rock': 'Gestein',
    'ghost': 'Geist',
    'dragon': 'Drache',
    'dark': 'Unlicht',
    'steel': 'Stahl',
    'fairy': 'Fee'
}

export function getGermanType(type: string): string {
    return types[type]
}