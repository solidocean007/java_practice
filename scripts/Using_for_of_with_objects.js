const skater = {
  name: 'JRAD',
  stance: 'regular',
  fractures: 5,
  bonesBroken: 0,
  ankleInjuries: 57,
};

for(const [prop] of Object.entries(skater)) {
  console.log(prop);
}