import { useEffect } from 'react'

// const { Kakao } = window
const Test = () => {

	const realUrl = 'http://localhost:5173'
  const feedTitle = '구독자 100만명 달성하기'
  const username = 'juno'

	useEffect(() => {
		window.Kakao.cleanup()
		window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY)
		console.log(window.Kakao.isInitialized())
	}, [])

	const shareKakao = () => {
		window.Kakao.Share.sendDefault({
			objectType: 'feed',
			content: {
				title: username,
				description: feedTitle,
				imageUrl:
					'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
				link: {
					mobileWebUrl: realUrl,
          webUrl: realUrl,
				},
			},
			buttons: [
        {
          title: '보러가기',
					link: {
            mobileWebUrl: realUrl,
            webUrl: realUrl,
					},
				},
			],
		})
	}
	return (
		<>
			<button
				className="bg-black text-white rounded-full px-2 py-1"
				onClick={() => {
					shareKakao()
				}}
			>
				카카오톡 공유하기
			</button>
		</>
	)
}

export default Test
