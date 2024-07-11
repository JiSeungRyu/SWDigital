import Suspect_1 from "../../imgs/suspect_1.png";
import Suspect_2 from "../../imgs/suspect_2.png";
import Suspect_3 from "../../imgs/suspect_3.png";
import Suspect_4 from "../../imgs/suspect_4.png";

export default function CardComponent() {
    const suspectArray: Suspect[] = [
        {
            suspectName: "박찬호",
            suspectAge: 33,
            suspectGender: "남성",
            suspectOccupation: "매니저",
            suspectTrait:
                "김하영과 저는 5년 동안 같이 일해왔습니다. 우리는 서로 알만큼 알고, 이번 사건은 믿기지 않아요.",
            suspectImage: Suspect_1,
        },
        {
            suspectName: "정수진",
            suspectAge: 29,
            suspectGender: "여성",
            suspectOccupation: "김하영의 스타일리스트",
            suspectTrait:
                "하영씨와 일하면서 친해지려고 노력했지만, 항상 거리감이 느껴졌어요. 이번 촬영 준비도 예민하게 굴어서 좀 힘들었죠.",
            suspectImage: Suspect_2,
        },
        {
            suspectName: "박준형",
            suspectAge: 32,
            suspectGender: "남성",
            suspectOccupation: "경호원",
            suspectTrait:
                "그날 김하영씨 주변에 수상한 사람이 많았어. 내 임무는 그녀를 지키는 것이었고, 그 임무에 충실했을 뿐이야.",
            suspectImage: Suspect_3,
        },
        {
            suspectName: "최유리",
            suspectAge: 32,
            suspectGender: "여성",
            suspectOccupation: "방송작가",
            suspectTrait:
                "생방송 대본을 수정하느라 계속 바빴어요. 김하영 씨와는 별로 개인적인 대화는 없었습니다.",
            suspectImage: Suspect_4,
        },
    ];
    return <div className="flex justify-between"></div>;
}
