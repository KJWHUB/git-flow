// 리스트 가공 기능
const processArray = (obj) => {
  if (typeof obj !== "object") {
    return console.error("잘못된 파라미터 타입 입니다.");
  }
  return Object.values(obj).map((el) => el.stock === 0);
};
