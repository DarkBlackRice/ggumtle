import { ReactNode } from 'react'

const Radar = ({ children }: { children: ReactNode }) => {
	return (
		<div className="w-[110%] mb-5 animate-radar3 border border-[#c6c6c661] aspect-square rounded-full flex absolute items-center justify-center">
			<div className="w-2/3 animate-radar2 border border-[#c6c6c661] aspect-square rounded-full flex absolute items-center justify-center">
				<div className="w-1/2 animate-radar1 border border-[#c6c6c661] aspect-square rounded-full flex absolute items-center justify-center">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Radar
