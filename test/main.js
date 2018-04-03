const nearley = require("nearley");
const grammar = require("../grammar.js");

const formulas = [
    'D',
    'R',
    'OR',
    'D*F',
    'DF', // condensed form
    'OR*DF*F5', //(unclear if 'F5x' is needed)
    'OR*RF*(N73111 + N7318)', // RF-1-1 en gironde
    'OR*DF*(C012 + ((N64x + N6218 + N6336)*(C015 + C016 + C017) - ((N64x + N6336)*F51)))' // début de DF-4
];

formulas.forEach(f => {
    console.log('# ', f)

    // Create a Parser object from our grammar.
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    // Parse something!
    parser.feed(f);

    // parser.results is an array of possible parsings.
    console.log(JSON.stringify(parser.results, null, 2), '\n');
})

