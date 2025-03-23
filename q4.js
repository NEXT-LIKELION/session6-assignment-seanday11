const jsonString = `
[
  {"id":1, "name": "Alice", "age":25, "email": "alice@example.com"},
  {"id":2, "name": "Bob", "age":30, "email": "bob@example.com" },
  {"id":3, "name": "Charlie", "age" : 35, "email": "charlie@example.com"}
]
`;

// JSON 문자열을 객체로 파싱
const parsedData = JSON.parse(jsonString);

// 구조 분해 할당으로 id, name, age만 추출 후 새로운 배열 생성
const result = parsedData.map(({ id, name, age }) => ({
    id,
    name,
    age,
}));

console.log(result);
