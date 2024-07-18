export async function postSuspectsQuestion(
    suspectNumber: number,
    inputValue: string,
) {
    let userId = localStorage.getItem("userId");
    if (!userId) {
        userId = "454";
    }

    try {
        const url = `/api/suspects/${suspectNumber}/question`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

                // "Content-Type": "text/event-stream" 헤더를 원한다면 주석을 해제하세요
            },
            body: JSON.stringify({
                userId: userId,
                question: inputValue,
            }),
        });

        if (response.ok && response.body) {
            return response;
        }
    } catch (error) {
        console.log(error);
    }
}
