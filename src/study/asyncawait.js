const { useStore } = require("react-redux");

## 변수 = await 프로미스; 인 경우 프로미스가 resolve된 값이 변수에 저장
## 변수 await 값; 인 경우 그 값이 변수에 저장
## async 함수는 항상 promise를 반환


async function findAndSaveUser(User) {
  let user = await useStore.findOne({});
  user.name = 'sunny';
  user = await user.save();
  user = await Users.findOne({ gender: 'fm' });
}