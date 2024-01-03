import {ref} from 'vue';

/**
 * 이 함수는 Vue 3에서 클래스 컴포넌트의 인스턴스 또는 null을 저장할 수 있는 반응형 참조를 생성하기 위해 사용됩니다.
 * @param _component
 */
export function refs<T extends abstract new (...args: any) => any>(_component?: T) {
    return ref<InstanceType<T> | null>(null);
}

export function refsE<T>() {
    return ref<T | null>(null);
}