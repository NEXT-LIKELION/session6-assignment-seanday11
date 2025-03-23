const user = {
    id: 101,
    name: "Eve",
    email: "eve@example.com",
    role: "admin",
};

function getUserData(obj, key) {
    // 점 표기법으로 객체 타입 확인
    if (typeof obj.id !== "undefined") {
        // 대괄호 표기법으로 key 값 조회
        return key in obj ? obj[key] : "키 없음";
    } else {
        return "잘못된 객체";
    }
}

// 테스트
console.log(getUserData(user, "name")); // Eve
console.log(getUserData(user, "email")); // eve@example.com
console.log(getUserData(user, "age")); // 키 없음
