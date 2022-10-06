const Intern = require('../lib/Intern');


test('creates an Intern object', () => {
    const intern = new Intern('Edward', 90, 'Edward.Beard@gmail', 'UNC');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Edward', 90, 'Edward.Beard@gmail', 'UNC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Edward', 90, 'Edward.Beard@gmail.com', 'UNC');

    expect(intern.getRole()).toEqual("Intern");
}); 