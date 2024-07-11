export default function Aside() {
    return (
        <div className="w-[70px] h-vdh pl-3 py-32 flex flex-col gap-5 z-10">
            <div className="flex items-center justify-center flex-1 p-4 cursor-pointer bg-mainColor rounded-l-3xl">
                <div className="text-center font-[Pretendard-bold]">
                    심문하기
                </div>
            </div>
            <div className="flex items-center justify-center flex-1 p-4 bg-white border-l-2 cursor-pointer border-y-2 rounded-l-3xl border-mainColor">
                <div className="text-center font-[Pretendard-bold] text-mainColor">
                    사건현장
                </div>
            </div>
        </div>
    );
}
