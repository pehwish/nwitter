import create from "zustand";
import { devtools } from "zustand/middleware";

// set 함수를 통해서만 상태를 변경할 수 있다
const useStore = create(
    devtools((set) => ({
        isLogin: false,
        toggleIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),

        count: 1, //state

      
      	// set 함수 사용 #1 현재 상태를 기반으로 새로운 상태를 리턴하는 함수
        increaseCount: () => {
            // count 1만큼 증가
            // set method로 상태 변경 가능
            set((state) => ({ count: state.count + 1 }));
        },

        // set 함수 사용 #2 아예 변경하려는 상태 값
        setCnt: (input) => {
            // 입력받은 input만큼 count 설정
            set({ count: input });
        },

      

        clearCnt: () => {
            // count 초기화
            set((state) => ({ count: 0 }));
        },
    }))
);

// redux devtools 사용하기
// const useStore = create(devtools(myStore));

export default useStore;