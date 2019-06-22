SET NAMES UTF8;
DROP DATABASE IF EXISTS al;
CREATE DATABASE al CHARSET=UTF8;
use al;

/*用户信息*/
CREATE TABLE al_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,   #用户id
	uname VARCHAR(32),      #用户名
	upwd VARCHAR(32),      #用户密码
	phone VARCHAR(16),     #用户手机号
	gender INT         #性别   0-女  1-男
);




/*用户信息*/
INSERT INTO al_user VALUES
(NULL,'zlal','12345678','11111111111','1'),
(NULL,'aaal','12345678','12222222222','0'),
(NULL,'aaab','12345678','11111111121','1');



/*图片*/
CREATE TABLE al_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  iid INT,              #编号
  sm VARCHAR(128)           #图片路径
);

/*第一行的图片*/
INSERT INTO al_pic VALUES
(NULL,1,'../../picture/10.jpg'),
(NULL,1,'../../picture/a9.jpg'),
(NULL,1,'../../picture/a5.jpg'),
(NULL,1,'../../picture/a4.jpg');
