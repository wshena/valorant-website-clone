"use client";
import { ValorantLogo, ValorantRightArrow } from "@/app/utils/Icons";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { mainArticle } from "./utils/const";
import ArticleCard from "./components/ArticleCard";

export default function Home() {
	const elementRef = useRef<HTMLDivElement | null>(null);

	const [halamanArtikelClick, setHalamanArtikelClick] = useState(false);
	const handleHalamanArtikelOn = () => setHalamanArtikelClick(true);
	const handleHalamanArtikelOff = () => setHalamanArtikelClick(false);

	const router = useRouter();
	const handleRoute = (link: string) => router.push(link);

	useEffect(() => {
		const handleScroll = () => {
			if (elementRef.current) {
				const { top } = elementRef.current.getBoundingClientRect();
				if (top <= 100) {
					elementRef.current.style.transform = "translateY(-30px)";
				} else {
					elementRef.current.style.transform = "translateY(0)";
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className="w-full overflow-x-hidden bg-lightGray">
			{/* main video */}
			<section className="relative w-[100vw] h-[500px] flex items-center justify-center bg-darkBrown">
				<div className="absolute top-0 left-0 h-[100%] w-full z-10">
					<video
						muted
						autoPlay
						style={{ objectFit: "cover" }}
						className="w-[100%] h-[100%]"
						preload="true"
						loop
						playsInline
						poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt463ab493c63a3968/65988e9b14672f52fd6fad1d/Website_Hero_Image_1730x720.jpg"
						data-testid="hero:video"
					>
						<source
							src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce292b05bc900c63/659c99223ea361883557812f/VALORANT_EP8124_001_R007_InGameHomepage_v01_For_Website_Mobile_v2.mp4"
							type="video/mp4"
						/>
					</video>
				</div>

				<div className="z-40 text-white flex flex-col items-center gap-[30px]">
					<h3 className="font-anton tracking-wide text-[12px] md:text-[1rem]">
						Game tembak-menembak taktis berbasis karakter 5v5
					</h3>
					<ValorantLogo />
					<div className="border p-[1rem] border-white">
						<Link
							href={"#"}
							className="relative home-playnow text-white font-anton uppercase text-[1rem] py-[10px] px-[45px]"
						>
							Play Now
						</Link>
					</div>
				</div>
			</section>
			{/* main video */}

			{/* Articles */}
			<section className="w-full bg-lightGray">
				<div className="container px-[1rem] xl:px-0 py-[3rem]">
					<header className="flex flex-col md:flex-row md:items-center justify-between mb-[20px] md:mb-0">
						<h1 className="font-bold uppercase text-[4rem] lg:text-[5rem] text-lightRed font-anton tracking-wide">
							artikel terbaru
						</h1>
						<Link
							href={"#"}
							onMouseEnter={handleHalamanArtikelOn}
							onMouseLeave={handleHalamanArtikelOff}
							className="flex items-center gap-[10px]"
						>
							<span className="font-bold text-lightRed uppercase text-[.8rem]">
								buka halaman artikel
							</span>
							<div
								className={`w-[20px] transition-all duration-300 ease-in-out ${
									halamanArtikelClick && "translate-x-[10px]"
								}`}
							>
								<ValorantRightArrow />
							</div>
						</Link>
					</header>

					<div className="w-full overflow-x-auto">
						<ul className="flex items-center gap-[30px] lg:justify-between md:w-fit lg:w-full">
							{mainArticle.map((item) => {
								return (
									<li>
										<ArticleCard key={item.id} data={item} />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
			{/* Articles */}

			{/* kamu berbeda */}
			<section
				className="w-full h-[100vh] bg-center bg-cover"
				style={{
					backgroundImage:
						'url("https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6866d1520d751eb1/6630022eb00039a4d7b5ccdc/E8a3_Defiance_Playval.com_Act_Overview_banner_3440x1020_Darkbg.jpg"',
				}}
			>
				<div className="container text-white h-full flex items-end">
					<div className="flex flex-col gap-[10px] pl-[20px] xl:pl-0 mb-[100px]">
						<h3 className="uppercase font-bold">EPISODE_08 // ACT III / YR</h3>
						<h1 className="uppercase font-anton tracking-wide font-bold text-[3rem] md:text-[5rem]">
							kamu berbeda
						</h1>
						<Link
							href={"https://www.youtube.com/watch?v=V2Ym-DQOMRo"}
							target="blank"
							className="border p-[.6rem] border-gray-300 w-[274px]"
						>
							<div className="w-full transition-colors duration-300 ease-in-out text-white font-anton uppercase text-[1rem] py-[10px] px-[45px] bg-lightRed hover:bg-black flex items-center justify-center">
								<span>tonton sekarang</span>
							</div>
						</Link>
					</div>
				</div>
			</section>
			{/* kamu berbeda */}

			{/* we are valorant */}
			<section className="w-full">
				<div className="container p-[1rem] lg:p-[2rem]">
					<h1 className="font-anton tracking-wide text-mainText font-bold uppercase text-[2rem] md:text-[3rem] lg:text-[5rem] mb-[40px]">
						Kami valorant
					</h1>
					<div className="flex flex-col lg:flex-row items-center jusitfy-between gap-[20px]">
						<div className="flex w-full lg:w-[80%] flex-col gap-[15px]">
							<h2 className="text-[1.5rem] text-mainText uppercase font-bold">
								DEFY THE LIMITS
							</h2>
							<p className="text-[.9rem] text-gray-500">
								Padukan gaya dan pengalamanmu di panggung kompetitif global.
								Kamu memiliki 13 ronde untuk menyerang dan mempertahankan sisimu
								dengan keahlian tembak-menembak sengit serta kemampuan taktis.
								Dengan satu nyawa per ronde, kamu harus berpikir lebih cepat
								daripada lawan jika ingin tetap hidup. Habisi musuh baik di mode
								Competitive maupun Unranked serta Deathmatch dan Spike Rush.
							</p>
							<Link
								href={"#"}
								target="blank"
								className="border p-[.6rem] border-gray-300 w-[274px]"
							>
								<div className="w-full transition-colors duration-300 ease-in-out text-white font-anton uppercase text-[1rem] py-[10px] px-[45px] bg-lightRed hover:bg-black flex items-center justify-center">
									<span>pelajari game</span>
								</div>
							</Link>
						</div>

						<div className="w-full relative">
							<span className="absolute text-white text-[10px] md:text-[12px] font-bold bg-lightRed py-[.5rem] px-[2rem] top-[10px] -left-[20px] lg:-left-[30px] xl:-left-[50px] z-10">
								Gameplay
							</span>
							<video preload="true" loop muted autoPlay playsInline>
								<source
									src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
				</div>
			</section>
			{/* we are valorant */}

			{/* Agent Section */}
			<section className="w-full py-[3rem] bg-lightRed text-white">
				<div
					ref={elementRef}
					style={{ transition: "transform 0.3s" }}
					className="container flex flex-col lg:flex-row items-center relative"
				>
					<div
						className="absolute top-0 left-0 w-full h-full lg:h-full bg-center bg-cover bg-opacity-50 z-10"
						style={{
							backgroundImage: 'url("/partikel2.png")',
						}}
					></div>

					<div className="w-full flex items-center relative">
						<Image
							src={"/agent2.png"}
							width={500}
							height={500}
							alt="agent1"
							className="w-[200px] md:w-[500px]"
						/>
						<Image
							src={"/agent1.png"}
							width={500}
							height={500}
							alt="agent1"
							className="absolute right-0 xl:right-[100px] z-10 w-[200px] md:w-[500px]"
						/>
					</div>

					<div className="z-30 w-[100%] lg:w-[50%] flex lg:items-center justify-start lg:justify-end">
						<div className="px-[1rem] md:px-[3rem] lg:px-0 flex flex-col gap-[20px] lg:gap-[30px] lg:mr-[100px]">
							<h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] uppercase font-anton">
								Agent
							</h1>
							<h2 className="text-[1.3rem] md:text-[2rem] uppercase font-anton">
								Creativity is your best weapon
							</h2>
							<p className="text-[.9rem] md:text-[1rem] font-anton">
								Lebih dari sekadar senjata dan peluru, kamu akan memilih Agen
								bersenjatakan kemampuan yang adaptif, tangkas, dan mematikan
								untuk membuktikan keahlian menembakmu. Sejalan dengan berbedanya
								kepiawaian dalam menembak, begitu pula di sini; tak akan ada
								Agen dengan karakteristik sama.
							</p>

							<div className="flex items-center justify-end">
								<Link
									href={"/agents"}
									className="border p-[.6rem] border-gray-300 w-[274px]"
								>
									<div className="w-full transition-colors duration-300 ease-in-out hover:text-white font-anton uppercase text-[1rem] py-[10px] px-[45px] bg-white text-black hover:bg-black flex items-center justify-center">
										<span>lihat semua agent</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Agent Section */}

			<section className="relative w-full bg-lightGray mt-[50px] md:mt-[100px] lg:pt-0 flex flex-col lg:flex-row items-center lg:justify-end container">
				{/* Mobile */}
				<div className="font-anton flex lg:hidden flex-col gap-[20px] w-[100%] md:w-[80%] px-[1rem]">
					<h1 className="text-black text-[5rem] lg:text-[6rem] uppercase">
						map
					</h1>
					<h3 className="text-[1.3rem]">BERTEMPUR DI SELURUH BELAHAN DUNIA</h3>
					<p className="">
						<span>
							Tiap peta adalah panggung tersendiri untuk memamerkan kemampuan
							berpikir kreatifmu. Semua dirancang sesuai untuk strategi tim,
							laga spektakuler, dan momen sengit. Perlihatkan kepiawaian yang
							akan ditiru oleh pemain lain sampai bertahun-tahun mendatang.
						</span>
					</p>
					<div className="md:w-[60%]">
						<Link
							onClick={() => {
								handleRoute("/maps");
							}}
							href={"/maps"}
							className="transition-colors duration-300 ease-in-out text-white font-anton uppercase text-[1rem] py-[10px] px-[45px] bg-lightRed hover:bg-black"
						>
							see all map
						</Link>
					</div>
				</div>
				{/* Mobile */}

				<div className="hidden absolute top-0 left-[80px] xl:left-[100px] w-[40%] xl:w-[30%] font-anton px-[2rem] lg:px-0 h-[100%] tracking-wide lg:flex items-center justify-center">
					<div className="flex flex-col gap-[30px] border-t border-t-gray-400">
						<h1 className="text-black text-[6rem] uppercase">map</h1>
						<h3 className="text-[1.3rem]">
							BERTEMPUR DI SELURUH BELAHAN DUNIA
						</h3>
						<p className="">
							<span>
								Tiap peta adalah panggung tersendiri untuk memamerkan kemampuan
								berpikir kreatifmu. Semua dirancang sesuai untuk strategi tim,
								laga spektakuler, dan momen sengit. Perlihatkan kepiawaian yang
								akan ditiru oleh pemain lain sampai bertahun-tahun mendatang.
							</span>
						</p>

						<Link
							href={"/maps"}
							className="border p-[.6rem] border-gray-300 w-[274px]"
						>
							<div className="w-full transition-colors duration-300 ease-in-out font-anton uppercase text-[1rem] py-[10px] px-[45px] bg-lightRed text-white hover:bg-black flex items-center justify-center">
								<span>lihat semua peta</span>
							</div>
						</Link>
					</div>
				</div>

				<Image
					src={
						"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png"
					}
					width={900}
					height={600}
					alt="map-bg"
					className="flex justify-end"
				/>
			</section>
		</main>
	);
}
