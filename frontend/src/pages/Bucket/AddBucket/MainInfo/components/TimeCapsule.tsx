import React, { ChangeEvent, useState } from 'react'

const TimeCapsule = () => {
	// Todo : zustand로 변환하기
	const [timeCapsule, setTimeCapsule] = useState('')

	const handleChangeTimeCapsule = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const input = event.currentTarget.value
		if (input) setTimeCapsule(timeCapsule)
	}

	// placeholder를 여러 줄로 입력하기 위해 textarea 사용
	return (
		<label>
			<p className="mb-3 text-sm font-bold leading-none text-point1"> 타입캡슐</p>
			<textarea
				name="timeCapsule"
				id="timeCapsule"
				placeholder="버킷을 이뤘을 미래의 나에게 어떤 마음으로 버킷을 시작했는지 알려주세요. 작성해주신 글은 버킷을 달성한 나에게 전달됩니다."
				onChange={handleChangeTimeCapsule}
				// Todo : 최대 글자수 백앤드 협의 후 지정
				// maxLength={}
				className="w-[350px] h-36 px-5 py-4 text-sm bg-inputBg text-wrap rounded-[5px] resize-none"
			/>
		</label>
	)
}

export default TimeCapsule
