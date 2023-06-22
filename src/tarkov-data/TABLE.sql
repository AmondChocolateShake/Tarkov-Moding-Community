CREATE TABLE item(
  id VARCHAR(100) PRIMARY KEY,
  categoryId VARCHAR(50),
  shortName VARCHAR(50),
  name VARCHAR(150),
  conflictingitemIds TEXT,
  iconLink TEXT,
  imageLink TEXT,
  caliber VARCHAR(50),
  fireRate INT(2),
  ergonomics INT(1),
  verticalRecoil INT(2),
  horizontalRecoil INT(2),
  accuracyPercentageModifier INT(1),
  capacity INT(1),
  loadSpeedPercentageModifier INT(1),
  checkSpeedPercentageModifier INT(1),
  fleshDamage INT(1),
  penetrationPower INT(1),
  class TEXT,
  fragmentationChancePercentage INT(1),
  modSlots INT
);


