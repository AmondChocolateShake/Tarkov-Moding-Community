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

CREATE TABLE posts( 
  postId INT PRIMARY KEY,
  id VARCHAR(100),
  title TEXT,
  imageLink TEXT,
  context TEXT, 
  tags TEXT, 
  ergomics INT(2), 
  price INT(4), 
  verticalRecoil INT(2), 
  horizontalRecoil INT(2), 
  likes INT(4), 
  favoirte TEXT );




INSERT INTO posts (postId,title,imageLink,
context,tags,ergomics,
price,verticalRecoil,
horizontalRecoil,favoirte,
modingDataId,id,likes,author)
VALUES (2,'너무 비싼 모딩','https://assets.tarkov.dev/5acf7dd986f774486e1281bf-image.webp',
'너무 비싼 모딩 입니다.','브루주아','50', 
'3000000','40',
'60','',
2,'5acf7dd986f774486e1281bf','999','DJ');
