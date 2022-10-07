 const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Edward', 90, 'Edward.Beard@gmail', 'EdwardBeard09');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Edward', 90, 'Edward.Beard@gmail', 'EdwardBeard09');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Edward', 90, 'Edward.Beardw@gmail', 'EdwardBeard09');

    expect(engineer.getRole()).toEqual("Engineer");
});