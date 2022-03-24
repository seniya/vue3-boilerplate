import { HttpResponseInterface } from '@/utils/common.interface'

/**
 * @description: 직원 정보
 * MemberInfoInterface
 */
export interface MemberInfoInterface {
  id: number; // 직원 ID
  name: string; // 성명 사용자 한글 명
  gender: string | null; // 성별 M, F, NULL
  birthDay: string; // 생년월일 19500713
  email: string; // 이메일 xxx@xxx.xxx 형식
  imageUrl: string | null; // 프로필 이미지
  memberNum: string; // 사번 최대 50글자
  telMain: string | null; // 대표 연락처 01011112222
  telMobile: string | null; // 휴대전화 연락처 01011112222
  joinDay: string; // 입사일 19940119
  empType: string | null; // 직원 구분 NULL
  jobTitle: string; // 직함
  schPubType: string; // 일정 공개 여부 P:공개, 나머지 비공개
  impp: string; // 메신저 ID
  deptId: number; // 부서 ID
  deptLvl: number; // 부서 레벨 최상위 부서 0
  deptName: string; // 부서명
  fullDeptName: string; // 부서명 전체 aa그룹 > bb부서 > cc팀 형식
  managerId: number | null; // 부서장 직원 ID
}

/**
 * @description: 직원 정보 API 응답
 * MemberResponseInterface
 */
export interface MemberResponseInterface extends HttpResponseInterface {
  items?: MemberInfoInterface[];
}
