## Promise
- 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
- Then을 붙이면 결과를 반환함
- 실행이 완료되지 않았으면 완료된 후에 Then 내부 함수가 실행됨
- Resolve(성공 리턴값) -> then으로 연결
- Reject(실패 리턴값) -> catch로 연결
- Finally 부분은 무조건 실행됨

